import React, { createContext, useContext, useState } from "react"
import useSessionStorage from "../hooks/useSessionStorage"

export interface BrainProgram {
    id: string
    editor: "blocks"
    name: string
    source: string
    lastEdited?: number
}

export interface BrainDevice {
    id: string
    lastSeen?: number
    /** program id */
    program?: string
}

export interface BrainManagerState {
    programs: BrainProgram[]
    devices: BrainDevice[]
    connected?: boolean
}

export interface BrainManagerProps {
    token?: string
    setToken: (token: string) => void
    state?: BrainManagerState
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
})
const BrainManagerContext =
    createContext<BrainManagerProps>(defaultContextProps)
BrainManagerContext.displayName = "brains"

export default BrainManagerContext

// eslint-disable-next-line react/prop-types
export const BrainManagerProvider = ({ children }) => {
    const [token, setToken] = useSessionStorage("brain-manager-token")
    const [state] = useState<BrainManagerState>({
        programs: [
            {
                id: "1",
                editor: "blocks",
                name: "hello world",
                source: "hello world",
            },
            {
                id: "2",
                editor: "blocks",
                name: "fridge door",
                source: "fridge door",
            },
        ],
        devices: [
            {
                id: "ba3ec9b16e018183",
                program: "1",
            },
            {
                id: "8788cdece135cd6c",
                program: "1",
            },
            {
                id: "e510d1ffdabd2531",
                program: "1",
            },
        ],
    })
    const [programId, setProgramId] = useState("")
    const [deviceId, setDeviceId] = useState("")
    const refresh = async () => {}

    return (
        <BrainManagerContext.Provider
            value={{
                token,
                setToken,
                state,
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
