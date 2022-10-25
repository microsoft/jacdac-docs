import React, {
    createContext,
    useEffect,
    useMemo,
    useState,
    useRef,
} from "react"
import {
    createWebSocketTransport,
    WebSocketTransport,
} from "../../../jacdac-ts/src/jdom/transport/websockettransport"
import useBus from "../../jacdac/useBus"
import useChange from "../../jacdac/useChange"
import useLocalStorage from "../hooks/useLocalStorage"
import useEffectAsync from "../useEffectAsync"
import { BrainManager } from "./braindom"

export interface BrainManagerProps {
    domain?: string
    setDomain: (domain: string) => void
    token?: string
    setToken: (token: string) => void
    brainManager: BrainManager
    scriptId?: string
    setScriptId: (id: string) => void
    deviceId?: string
    setDeviceId: (id: string) => void
    liveDeviceId?: string
    setLiveDeviceId: (id: string) => void
}

const defaultContextProps: BrainManagerProps = Object.freeze({
    setDomain: () => {},
    setToken: () => {},
    setScriptId: () => {},
    setDeviceId: () => {},
    setLiveDeviceId: () => {},
    brainManager: undefined,
})
const BrainManagerContext =
    createContext<BrainManagerProps>(defaultContextProps)
BrainManagerContext.displayName = "brains"

export default BrainManagerContext

// eslint-disable-next-line react/prop-types
export const BrainManagerProvider = ({ children }) => {
    const bus = useBus()
    const [domain, _setDomain] = useLocalStorage(
        "brain-manager-domain",
        "jacdac-portal2.azurewebsites.net"
    )
    const [token, setToken] = useLocalStorage("brain-manager-token")
    const brainManager = useMemo(
        () => (token && domain ? new BrainManager(domain, token) : undefined),
        [domain, token]
    )
    const [scriptId, setScriptId] = useState("")
    const [deviceId, setDeviceId] = useState("")
    const [liveDeviceId, setLiveDeviceId] = useState("")
    const transportRef = useRef<{
        deviceId: string
        ws: WebSocketTransport
        unmount: () => void
    }>()

    const setDomain = (domain: string) => {
        _setDomain(domain?.replace(/^https:\/\//i, "")?.replace(/\/$/, ""))
        setToken("")
    }

    // refresh selected device, scripts
    useChange(
        brainManager,
        (_: BrainManager) => {
            if (scriptId && !_?.script(scriptId)) setScriptId("")
            if (deviceId && !_?.device(deviceId)) setDeviceId("")
            if (liveDeviceId && !_?.device(liveDeviceId)) setLiveDeviceId("")
        },
        [scriptId, deviceId, liveDeviceId]
    )

    // first reload
    useEffectAsync(() => brainManager?.refresh(), [])

    const cleanup = () => {
        const { unmount } = transportRef.current || {}
        if (unmount) {
            console.debug(`cleanup transport`)
            unmount?.()
            transportRef.current = undefined
        }
    }

    // first cleanup
    useEffect(() => {
        cleanup()
        return cleanup
    }, [brainManager, liveDeviceId])

    // setup transport
    useEffectAsync(
        async mounted => {
            const dev = liveDeviceId && brainManager?.device(liveDeviceId)
            if (dev) {
                cleanup()
                console.log(`open transport`)
                const { url, key } = (await dev.createConnection()) || {}
                if (url) {
                    const ws = createWebSocketTransport(url)
                    const unmount = bus.addTransport(ws)
                    transportRef.current = {
                        deviceId: liveDeviceId,
                        ws,
                        unmount,
                    }
                    await ws.connect()
                }
            }
        },
        [brainManager, liveDeviceId]
    )

    return (
        <BrainManagerContext.Provider
            value={{
                domain,
                setDomain,
                token,
                setToken,
                brainManager,
                scriptId,
                setScriptId,
                deviceId,
                setDeviceId,
                liveDeviceId,
                setLiveDeviceId,
            }}
        >
            {children}
        </BrainManagerContext.Provider>
    )
}
