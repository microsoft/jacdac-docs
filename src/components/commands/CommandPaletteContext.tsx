import { JDBus } from "../../../jacdac-ts/src/jdom/bus"
import React, { createContext } from "react"
import useSnackbar from "../hooks/useSnackbar"
import useWindowEvent from "../hooks/useWindowEvent"
import useBus from "../../jacdac/useBus"

export interface CommandOptions {
    id: string
    description: string
    handler: (bus: JDBus, args: unknown) => Promise<void>
}

export interface CommandPaletteContextProps {
    listCommands: () => CommandOptions[]
    addCommand(command: CommandOptions): () => void
    runCommand(id: string, args?: unknown): Promise<void>
}

export const CommandPaletteContext = createContext<CommandPaletteContextProps>({
    listCommands: () => [],
    addCommand: () => undefined,
    runCommand: () => undefined,
})
CommandPaletteContext.displayName = "commands"

const commands: Record<string, CommandOptions> = {}

// eslint-disable-next-line react/prop-types
export const CommandPaletteProvider = ({ children }) => {
    const bus = useBus()
    const { setError } = useSnackbar()
    const listCommands = () => Object.values(commands)
    const addCommand = (options: CommandOptions) => {
        if (!options) return undefined

        const { id } = options
        if (commands[id]) throw Error(`command ${id} already registered`)
        commands[id] = options
        return () => {
            delete commands[id]
        }
    }
    const runCommand = async (id: string, args: unknown) => {
        const cmd = commands[id]
        try {
            return cmd.handler(bus, args)
        } catch (e) {
            setError(e)
            throw e
        }
    }
    useWindowEvent("message", ev => {
        const data = ev.data || {}
        const { type } = data
        if (type !== "jacdac-command") return

        const { command } = data
        const cmd = commands[command]
        if (!cmd) return

        const { args } = data
        runCommand(command, args)
    })

    return (
        <CommandPaletteContext.Provider
            value={{ listCommands, addCommand, runCommand }}
        >
            {children}
        </CommandPaletteContext.Provider>
    )
}
