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

export function useBrainManagerState(): BrainManagerState {
    return {
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
    }
}
