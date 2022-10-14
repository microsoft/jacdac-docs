import useSessionStorage from "../hooks/useSessionStorage"

const BRAIN_API_KEY = "brain-manager"
export default function useBrainManagerApiKey() {
    return useSessionStorage(BRAIN_API_KEY)
}
