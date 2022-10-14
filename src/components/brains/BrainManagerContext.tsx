import React, { createContext, useContext, useState } from "react"

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
    state?: BrainManagerState
    programId?: string
    setProgramId: (id: string) => void
    deviceId?: string
    setDeviceId: (id: string) => void
}

const defaultContextProps: BrainManagerProps = Object.freeze({
    setProgramId: () => {},
    setDeviceId: () => {},
})
const BrainManagerContext =
    createContext<BrainManagerProps>(defaultContextProps)
BrainManagerContext.displayName = "brains"

export default BrainManagerContext

// eslint-disable-next-line react/prop-types
export const BrainManagerProvider = ({ children }) => {
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

    return (
        <BrainManagerContext.Provider
            value={{ state, programId, setProgramId, deviceId, setDeviceId }}
        >
            {children}
        </BrainManagerContext.Provider>
    )
}

export function useBrainManager(): BrainManagerProps {
    return useContext(BrainManagerContext) || defaultContextProps
}
