import {
    addServiceProvider,
    serviceProviderDefinitions,
    startServiceProviderFromServiceClass,
} from "../../../jacdac-ts/src/servers/servers"
import { useEffect } from "react"
import { useCommandPalette } from "./CommandPaletteContext"
import { parseIdentifier } from "../../../jacdac-ts/src/jdom/utils"
import { serviceSpecificationFromName } from "../../../jacdac-ts/src/jdom/spec"

export const COMMAND_SIMULATOR_START = "simulator.start"

export default function useSimulatorCommands() {
    const { addCommands } = useCommandPalette()
    useEffect(
        () =>
            addCommands([
                {
                    id: COMMAND_SIMULATOR_START,
                    description:
                        "Starts a simulator from a named template, service name or service class",
                    handler: async (bus, args: { name: string }) => {
                        const { name } = args
                        const def = serviceProviderDefinitions().find(
                            d => d.name === name
                        )
                        if (def) addServiceProvider(bus, def)
                        else {
                            const srv = serviceSpecificationFromName(name)
                            if (srv)
                                startServiceProviderFromServiceClass(
                                    bus,
                                    srv.classIdentifier
                                )
                            else {
                                const id = parseIdentifier(name)
                                if (id)
                                    startServiceProviderFromServiceClass(
                                        bus,
                                        id
                                    )
                            }
                        }
                    },
                },
            ]),
        []
    )
}
