import React, {
    createContext,
    useEffect,
    useMemo,
    useState,
    useRef,
} from "react"
import { WebSocketTransport } from "../../../jacdac-ts/src/jdom/transport/websockettransport"
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
}

const defaultContextProps: BrainManagerProps = Object.freeze({
    setDomain: () => {},
    setToken: () => {},
    setScriptId: () => {},
    setDeviceId: () => {},
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
    const transportRef = useRef<{ deviceId: string; ws: WebSocketTransport }>()

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

    // setup transport
    useEffectAsync(
        async mounted => {
            const dev =
                liveDeviceId && brainManager?.deviceByDeviceId(liveDeviceId)
            if (dev) {
                const ws = await dev.connect()
                transportRef.current = { deviceId: liveDeviceId, ws }
                bus.addTransport(ws)
            }
            return () => {
                const ws = transportRef.current || {}
                if (ws) {
                    bus.addTransport
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
            }}
        >
            {children}
        </BrainManagerContext.Provider>
    )
}
