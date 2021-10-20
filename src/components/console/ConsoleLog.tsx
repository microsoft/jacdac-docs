import React, { useEffect, useContext } from "react"
import { Console, Hook, Unhook } from "console-feed"
import DarkModeContext from "../ui/DarkModeContext"
import ConsoleContext from "./ConsoleContext"

export default function ConsoleLog() {
    const { darkMode } = useContext(DarkModeContext)
    const { logs, appendLog } = useContext(ConsoleContext)

    useEffect(() => {
        const hooked =
            typeof window !== "undefined" &&
            Hook(window.console, appendLog, false)
        return () => {
            hooked && Unhook(hooked)
        }
    }, [])

    return (
        <Console logs={logs as any[]} variant={darkMode} logGrouping={true} />
    )
}
