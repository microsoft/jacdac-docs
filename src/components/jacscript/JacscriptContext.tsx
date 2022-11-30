import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react"
import useEffectAsync from "../useEffectAsync"
import { deviceScriptCompile } from "../blockly/dsl/workers/devicescript.proxy"
import type { DeviceScriptCompileResponse } from "../../workers/devicescript/devicescript-worker"
import {
    DEVICE_ANNOUNCE,
    DISCONNECT,
    SRV_DEVICE_SCRIPT_MANAGER,
    SRV_ROLE_MANAGER,
} from "../../../jacdac-ts/src/jdom/constants"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import useWindowEvent from "../hooks/useWindowEvent"
import { JSONTryParse } from "../../../jacdac-ts/src/jdom/utils"
import JacscriptVMLoader from "./JacscriptVMLoader"
import Suspense from "../ui/Suspense"
import { UIFlags } from "../../jacdac/providerbus"
import { useDebounce } from "use-debounce"
import { JDDevice } from "../../../jacdac-ts/src/jdom/device"
import useBus from "../../jacdac/useBus"

export interface JacscriptProps {
    source?: string
    setSource: (program: string) => void
    compilePending?: boolean
    compiled?: DeviceScriptCompileResponse
    clientSpecs?: jdspec.ServiceSpec[]
    manager?: JDService
    setManager: (manager: JDService) => void
    acquireVm: () => () => void
}

export const JacscriptContext = createContext<JacscriptProps>({
    source: undefined,
    setSource: () => {},
    compiled: undefined,
    clientSpecs: undefined,
    manager: undefined,
    setManager: () => {},
    acquireVm: () => () => {},
})
JacscriptContext.displayName = "DeviceScript"

export function JacscriptProvider(props: { children: ReactNode }) {
    const { children } = props
    const bus = useBus()
    const [source, setSource_] = useState<string>(undefined)
    const [compilePending, setCompilePending] = useState(false)
    const [compiled, setCompiled] = useState<DeviceScriptCompileResponse>()
    const [manager, setManager] = useState<JDService>(undefined)
    const [vmUsed, setVmUsed] = useState(0)
    const jacscript = !!UIFlags.jacscriptvm
    const [debouncedSource] = useDebounce(source, 1000)

    // keep track of source without re-render
    const lastSource = useRef(source)
    lastSource.current = source

    const acquireVm = () => {
        setVmUsed(x => x + 1)
        return () => setVmUsed(x => x - 1)
    }

    useEffect(() => {
        const roleManager = manager?.device?.services({
            serviceClass: SRV_ROLE_MANAGER,
        })?.[0]
        bus.setRoleManagerService(roleManager)
    }, [bus, manager])

    // automatically bind to first jacscript manager when a device comes online
    useEffect(
        () =>
            bus?.subscribe(DEVICE_ANNOUNCE, (device: JDDevice) => {
                if (!manager) {
                    const service = device.services({
                        serviceClass: SRV_DEVICE_SCRIPT_MANAGER,
                    })?.[0]
                    setManager(service)
                }
            }),
        [bus, manager]
    )

    // unbind manager service if disconnected
    useEffect(
        () =>
            manager?.device?.subscribe(DISCONNECT, () => setManager(undefined)),
        [manager]
    )

    // if program changes, recompile
    useEffectAsync(async () => {
        const res = debouncedSource?.trim()
            ? await deviceScriptCompile(debouncedSource)
            : undefined
        setCompiled(res)
        setCompilePending(false)
    }, [debouncedSource])

    const setSource = (newSource: string) => {
        if (source !== newSource) {
            setSource_(newSource)
            setCompiled(undefined)
            setCompilePending(true)
        }
    }

    useWindowEvent(
        "message",
        (msg: MessageEvent) => {
            const data = msg.data
            if (data && typeof data === "string") {
                const mdata = JSONTryParse(data) as any
                if (
                    mdata &&
                    mdata.channel === "devicescript" &&
                    mdata.type === "source"
                ) {
                    const msgSource = mdata.source
                    const force = mdata.force
                    if (force || lastSource.current !== msgSource) {
                        setSource(msgSource)
                        if (!vmUsed) acquireVm()
                    }
                }
            }
        },
        false,
        [vmUsed]
    )

    return (
        <JacscriptContext.Provider
            value={{
                source,
                setSource,
                compilePending,
                compiled,
                manager,
                setManager,
                acquireVm,
            }}
        >
            {children}
            {!!(jacscript || vmUsed) && (
                <Suspense>
                    <JacscriptVMLoader />
                </Suspense>
            )}
        </JacscriptContext.Provider>
    )
}

export default function useJacscript(): JacscriptProps {
    const res = useContext<JacscriptProps>(JacscriptContext)
    return (
        res || {
            setSource: () => {},
            setManager: () => {},
            acquireVm: () => () => {},
        }
    )
}
