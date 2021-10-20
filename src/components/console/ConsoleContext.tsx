import React, { createContext, useState } from "react"

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
}

const ConsoleContext = createContext<ConsoleProps>({
    logs: [],
    appendLog: () => {},
    clear: () => {},
    setSourceMap: () => {},
    setFilter: () => {},
    setSearchKeywords: () => {},
})
ConsoleContext.displayName = "console"

export default ConsoleContext

// eslint-disable-next-line react/prop-types
export const ConsoleProvider = ({ children }) => {
    const [filter, setFilter] = useState<Methods[]>()
    const [searchKeywords, setSearchKeywords] = useState<string>()
    const [logs, setLogs] = useState([])
    const [sourceMap, setSourceMap] = useState<Record<string, number[]>>()

    const appendLog = log => setLogs(currLogs => [...currLogs, log])
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
            }}
        >
            {children}
        </ConsoleContext.Provider>
    )
}
