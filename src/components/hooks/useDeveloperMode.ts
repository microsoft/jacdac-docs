import { useContext } from "react"
import AppContext from "../AppContext"

export default function useDeveloperMode() {
    const { developerMode, setDeveloperMode } = useContext(AppContext)
    return { developerMode, setDeveloperMode }
}
