import React, { useEffect, useContext } from "react"
import { Console, Hook, Unhook } from "console-feed"
import ConsoleContext from "./ConsoleContext"

export default function ConsoleLog() {
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
        <div style={{ backgroundColor: "#242424" }}>
            <Console
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                logs={logs as any[]}
                variant="dark"
                logGrouping={true}
            />
        </div>
    )
}
