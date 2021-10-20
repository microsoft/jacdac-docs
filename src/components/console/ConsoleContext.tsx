import React, { createContext, useState } from "react"
import useConsoleSerial from "./useConsoleSerial"

export type Methods =
    | "log"
    | "debug"
    | "info"
    | "warn"
    | "error"
    | "table"
    | "clear"
    | "time"
    | "timeEnd"
    | "count"
    | "assert"
    | "command"
    | "result"

export type Message = unknown
export type SourceMap = Record<string, number[]>
export interface ConsoleProps {
    logs: Message[]
    appendLog: (log: Message) => void
    clear: () => void

    sourceMap?: SourceMap
    setSourceMap: (sc: SourceMap) => void

    filter?: Methods[]
    setFilter: (filter: Methods[]) => void
    searchKeywords?: string
    setSearchKeywords: (kw: string) => void

    connected?: boolean
    connect: () => Promise<void>
    disconnect: () => Promise<void>
}

const ConsoleContext = createContext<ConsoleProps>({
    logs: [],
    appendLog: () => {},
    clear: () => {},
    setSourceMap: () => {},
    setFilter: () => {},
    setSearchKeywords: () => {},
    connect: async () => {},
    disconnect: async () => {},
})
ConsoleContext.displayName = "console"

export default ConsoleContext
const MAX_MESSAGES = 5000
const MAX_MESSAGES_SPILL = 500

// eslint-disable-next-line react/prop-types
export const ConsoleProvider = ({ children }) => {
    const [filter, setFilter] = useState<Methods[]>()
    const [searchKeywords, setSearchKeywords] = useState<string>()
    const [logs, setLogs] = useState([])
    const [sourceMap, setSourceMap] = useState<SourceMap>()
    const { connected, connect, disconnect } = useConsoleSerial(sourceMap)

    const appendLog = log =>
        setLogs(currLogs => [
            ...(currLogs.length > MAX_MESSAGES
                ? currLogs.slice(-MAX_MESSAGES_SPILL)
                : currLogs),
            log,
        ])
    const clear = () => setLogs([])

    return (
        <ConsoleContext.Provider
            value={{
                logs,
                appendLog,
                clear,
                sourceMap,
                setSourceMap,
                filter,
                setFilter,
                searchKeywords,
                setSearchKeywords,
                connected,
                connect,
                disconnect,
            }}
        >
            {children}
        </ConsoleContext.Provider>
    )
}
