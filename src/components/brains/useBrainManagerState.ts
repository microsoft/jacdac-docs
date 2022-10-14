import { BrainManagerState, useBrainManager } from "./BrainManagerContext"

export default function useBrainManagerState(): BrainManagerState {
    const { state } = useBrainManager()
    return state
}
