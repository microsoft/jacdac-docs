import { JDBus } from "../../../jacdac-ts/src/jdom/bus"
import React, { createContext, useContext } from "react"
import useSnackbar from "../hooks/useSnackbar"
import useWindowEvent from "../hooks/useWindowEvent"
import useBus from "../../jacdac/useBus"

export const MESSAGE_TYPE = "jacdac-command"

export interface CommandOptions {
    id: string
    description: string
    handler: (bus: JDBus, args: unknown) => Promise<void>
}

export interface CommandPaletteContextProps {
    listCommands: () => CommandOptions[]
    addCommands(commands: CommandOptions[]): () => void
    runCommand(id: string, args?: unknown): Promise<void>
}

export const CommandPaletteContext = createContext<CommandPaletteContextProps>({
    listCommands: () => [],
    addCommands: () => undefined,
    runCommand: () => undefined,
})
CommandPaletteContext.displayName = "commands"

export function useCommandPalette(): CommandPaletteContextProps {
    const ctx = useContext(CommandPaletteContext)
    if (!ctx) throw Error("Command palette context missing")
    return ctx
}

const commands: Record<string, CommandOptions> = {}

// eslint-disable-next-line react/prop-types
export const CommandPaletteProvider = ({ children }) => {
    const bus = useBus()
    const { setError } = useSnackbar()
    const listCommands = () => Object.values(commands)
    const addCommands = (options: CommandOptions[]) => {
        if (!options) return undefined

        options.forEach(option => {
            const { id } = option
            if (commands[id]) throw Error(`command ${id} already registered`)
            commands[id] = option
            console.debug(`command: added ${id}`)
        })
        return () => {
            options.forEach(option => delete commands[option.id])
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
        if (type !== MESSAGE_TYPE) return

        const { command } = data
        const cmd = commands[command]
        if (!cmd) return

        const { args } = data
        runCommand(command, args)
    })

    return (
        <CommandPaletteContext.Provider
            value={{ listCommands, addCommands, runCommand }}
        >
            {children}
        </CommandPaletteContext.Provider>
    )
}
