import {
    addServiceProvider,
    serviceProviderDefinitions,
    startServiceProviderFromServiceClass,
} from "../../../jacdac-ts/src/servers/servers"
import { useEffect } from "react"
import { useCommandPalette } from "./CommandPaletteContext"

export const COMMAND_SIMULATOR_START_TEMPLATE = "simulator.startTemplate"
export const COMMAND_SIMULATOR_START_SERVICE_CLASS = "simulator.startService"

export default function useSimulatorCommands() {
    const { addCommands } = useCommandPalette()
    useEffect(
        () =>
            addCommands([
                {
                    id: COMMAND_SIMULATOR_START_TEMPLATE,
                    description: "Starts a simulator from a named template",
                    handler: async (bus, args: { name: string }) => {
                        const { name } = args
                        const def = serviceProviderDefinitions().find(
                            d => d.name === name
                        )
                        if (def) addServiceProvider(bus, def)
                    },
                },
                {
                    id: COMMAND_SIMULATOR_START_SERVICE_CLASS,
                    description: "Starts a simulator with the given service",
                    handler: async (bus, args: { serviceClass: number }) => {
                        const { serviceClass } = args
                        startServiceProviderFromServiceClass(bus, serviceClass)
                    },
                },
            ]),
        []
    )
}
