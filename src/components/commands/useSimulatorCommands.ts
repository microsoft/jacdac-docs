import {
    addServiceProvider,
    serviceProviderDefinitions,
    startServiceProviderFromServiceClass,
} from "../../../jacdac-ts/src/servers/servers"
import { useEffect } from "react"
import { useCommandPalette } from "./CommandPaletteContext"

export default function useSimulatorCommands() {
    const { addCommands } = useCommandPalette()
    useEffect(
        () =>
            addCommands([
                {
                    id: "simulator.startTemplate",
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
                    id: "simulator.startService",
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
