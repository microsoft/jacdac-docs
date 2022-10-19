import React, { createContext, useContext, useMemo, useState } from "react"
import useSessionStorage from "../hooks/useSessionStorage"
import { BrainManager } from "./braindom"

export interface BrainManagerProps {
    token?: string
    setToken: (token: string) => void
    brainManager: BrainManager
    programId?: string
    setProgramId: (id: string) => void
    deviceId?: string
    setDeviceId: (id: string) => void
    refresh: () => Promise<void>
}

const defaultContextProps: BrainManagerProps = Object.freeze({
    setToken: () => {},
    setProgramId: () => {},
    setDeviceId: () => {},
    refresh: async () => {},
    brainManager: undefined,
})
const BrainManagerContext =
    createContext<BrainManagerProps>(defaultContextProps)
BrainManagerContext.displayName = "brains"

export default BrainManagerContext

// eslint-disable-next-line react/prop-types
export const BrainManagerProvider = ({ children }) => {
    const [token, setToken] = useSessionStorage("brain-manager-token")
    const brainManager = useMemo(
        () => new BrainManager("jacdac-cloud-0.azurewebsites.net/api"),
        []
    )
    const [programId, setProgramId] = useState("")
    const [deviceId, setDeviceId] = useState("")
    const refresh = async () => {}

    return (
        <BrainManagerContext.Provider
            value={{
                token,
                setToken,
                brainManager,
                programId,
                setProgramId,
                deviceId,
                setDeviceId,
                refresh,
            }}
        >
            {children}
        </BrainManagerContext.Provider>
    )
}

export function useBrainManager(): BrainManagerProps {
    return useContext(BrainManagerContext) || defaultContextProps
}
