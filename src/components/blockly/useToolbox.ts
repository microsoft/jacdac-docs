import Blockly from "blockly"
import { useMemo } from "react"
import {
    SRV_BOOTLOADER,
    SRV_CONTROL,
    SRV_LOGGER,
    SRV_PROTO_TEST,
    SRV_ROLE_MANAGER,
    SRV_SETTINGS,
    SystemEvent,
    SystemReg,
} from "../../../jacdac-ts/src/jdom/constants"
import {
    humanify,
    isNumericType,
} from "../../../jacdac-ts/jacdac-spec/spectool/jdspec"
import {
    isEvent,
    isRegister,
    serviceSpecifications,
} from "../../../jacdac-ts/src/jdom/spec"
import {
    groupBy,
    SMap,
    unique,
    uniqueMap,
} from "../../../jacdac-ts/src/jdom/utils"
import useServices from "../hooks/useServices"

const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="jacdac_configuration"></block></xml>'

export const START_SIMULATOR_CALLBACK_KEY = "jacdac_start_simulator"

const DECLARE_ROLE_TYPE_PREFIX = `jacdac_role_set_`
const MISSING_GROUP = "Miscellanous"
const ignoredServices = [
    SRV_CONTROL,
    SRV_LOGGER,
    SRV_ROLE_MANAGER,
    SRV_PROTO_TEST,
    SRV_SETTINGS,
    SRV_BOOTLOADER,
]
const ignoredEvents = [SystemEvent.StatusCodeChanged]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BlockDefinition = any

type CachedBlockDefinitions = {
    blocks: BlockDefinition[]
    services: jdspec.ServiceSpec[]
    groups: SMap<BlockDefinition[]>
}

let cachedBlocks: CachedBlockDefinitions
function loadBlocks(): CachedBlockDefinitions {
    if (cachedBlocks) return cachedBlocks

    const variableName = (srv: jdspec.ServiceSpec) =>
        `${humanify(srv.camelName).toLowerCase()} 1`

    const allServices = serviceSpecifications()
        .filter(service => !/^_/.test(service.shortId))
        .filter(service => ignoredServices.indexOf(service.classIdentifier) < 0)
    const readings = allServices
        .map(service => ({
            service,
            reading: service.packets.find(
                pkt =>
                    isRegister(pkt) &&
                    pkt.identifier === SystemReg.Reading &&
                    pkt.fields.length == 1 &&
                    isNumericType(pkt.fields[0])
            ),
        }))
        .filter(kv => !!kv.reading)
    const events = allServices
        .map(service => ({
            service,
            events: service.packets.filter(
                pkt => isEvent(pkt) && ignoredEvents.indexOf(pkt.identifier) < 0
            ),
        }))
        .filter(kv => !!kv.events.length)

    // generate blocks
    const blocks: BlockDefinition[] = [
        {
            type: "jacdac_configuration",
            message0: "configuration",
            inputsInline: true,
            nextStatement: "Role",
            style: "variable_blocks",
        },
        ...allServices.map(service => ({
            type: `${DECLARE_ROLE_TYPE_PREFIX}${service.shortId}`,
            message0: `define ${humanify(service.shortName)} %1`,
            args0: [
                {
                    type: "field_variable",
                    name: "NAME",
                    variable: variableName(service),
                    defaultType: service.shortId,
                },
            ],
            style: "variable_blocks",
            previousStatement: "Role",
            nextStatement: "Role",
            service,
        })),
        ...events.map(({ service, events }) => ({
            type: `jacdac_${service.shortId}_events`,
            message0: `when %1 %2`,
            args0: [
                {
                    type: "field_variable",
                    name: "ROLE",
                    variable: variableName(service),
                },
                {
                    type: "field_dropdown",
                    name: "EVENT",
                    options: events.map(event => [event.name, event.name]),
                },
            ],
            style: "logic_blocks",
            inputsInline: true,
            nextStatement: null,
            tooltip: "",
            helpUrl: "",
            service,
            events,
        })),
        ...readings.map(({ service, reading }) => ({
            type: `jacdac_${service.shortId}_reading`,
            message0: `%1 ${humanify(reading.name)}`,
            args0: [
                {
                    type: "field_variable",
                    name: "ROLE",
                    variable: variableName(service),
                },
            ],
            inputsInline: true,
            output: "Number",
            colour: 230,
            tooltip: "",
            helpUrl: "",
            service,
            reading,
        })),
        ...readings.map(({ service, reading }) => ({
            type: `jacdac_${service.shortId}_reading_change`,
            message0: `when %1 ${humanify(reading.name)} change`,
            args0: [
                {
                    type: "field_variable",
                    name: "ROLE",
                    variable: variableName(service),
                },
            ],
            inputsInline: true,
            nextStatement: "Statement",
            style: "logic_blocks",
            tooltip: "",
            helpUrl: "",
            service,
            reading,
        })),
        {
            type: "jacdac_await_condition",
            message0: "while %1",
            args0: [
                {
                    type: "input_value",
                    name: "CONDITION",
                    check: "Boolean",
                },
            ],
            style: "logic_blocks",
            inputsInline: true,
            nextStatement: "Statement",
            tooltip: "",
            helpUrl: "",
        },
        {
            type: "jacdac_wait_ms",
            message0: "wait %1 ms",
            args0: [
                {
                    type: "field_number",
                    name: "NAME",
                    value: 0,
                    min: 0,
                    max: 5000,
                },
            ],
            inputsInline: true,
            previousStatement: "Statement",
            nextStatement: "Statement",
            colour: 230,
            tooltip: "",
            helpUrl: "",
        },
        {
            type: "jacdac_servo_write_angle",
            message0: "set %1 angle to %2 %3",
            args0: [
                {
                    type: "field_variable",
                    name: "ROLE",
                    variable: "servo",
                },
                {
                    type: "input_dummy",
                },
                {
                    type: "input_value",
                    name: "VALUE",
                    check: "Number",
                },
            ],
            inputsInline: true,
            previousStatement: "Statement",
            nextStatement: "Statement",
            colour: 230,
            tooltip: "",
            helpUrl: "",
        },
        {
            type: "jacdac_servo_enable",
            message0: "set %1 %2",
            args0: [
                {
                    type: "field_variable",
                    name: "ROLE",
                    variable: "servo",
                },
                {
                    type: "field_dropdown",
                    name: "ENABLED",
                    options: [
                        ["on", "ON"],
                        ["off", "OFF"],
                    ],
                },
            ],
            colour: 230,
            tooltip: "",
            helpUrl: "",
            previousStatement: "Statement",
            nextStatement: "Statement",
        },
    ]

    // register blocks with Blockly, happens once
    blocks.map(
        block =>
            (Blockly.Blocks[block.type] = {
                init: function () {
                    this.jsonInit(block)
                },
            })
    )
    const jdBlocks = blocks.filter(block => !!block.service)
    const services = uniqueMap(
        jdBlocks,
        block => block.service.shortId,
        block => block.service
    )

    cachedBlocks = {
        blocks,
        services,
        groups: groupBy(
            jdBlocks,
            block => block.service.group || MISSING_GROUP
        ),
    }

    return cachedBlocks
}

export function scanServices(blocks: Blockly.Block[]) {
    const declarers = blocks.filter(
        b => b.isEnabled() && b.type.startsWith(DECLARE_ROLE_TYPE_PREFIX)
    )
    const services = unique(
        declarers.map(b => b.type.substring(DECLARE_ROLE_TYPE_PREFIX.length))
    )
        .filter(srv => !!srv)
        .sort()

    return services
}

export default function useToolbox(blockServices?: string[]) {
    const { blocks, groups } = useMemo(() => loadBlocks(), [])
    const liveServices = useServices({ specification: true })

    const services = unique([
        ...blockServices,
        ...liveServices
            .filter(srv => ignoredServices.indexOf(srv.serviceClass) < 0)
            .map(service => service.specification?.shortId),
    ])

    const toolboxBlocks = [...blocks.map(block => ({ type: block.type }))]
    const toolboxCategories = [
        {
            name: "Configuration",
            colour: "#0f00ff",
            button: [
                {
                    text: "Start simulator",
                    callbackKey: START_SIMULATOR_CALLBACK_KEY,
                },
            ],
            blocks: [{ type: "jacdac_configuration" }],
        },
        ...Object.keys(groups).map(group => ({
            name: group,
            colour: "#5CA699",
            blocks: groups[group]
                .filter(
                    block =>
                        !services ||
                        services.indexOf(block.service.shortId) > -1
                )
                .map(block => ({
                    type: block.type,
                })),
        })),
        {
            name: "Logic",
            style: "logic_blocks",
            blocks: [
                { type: "logic_compare" },
                { type: "logic_operation" },
                { type: "logic_negate" },
                { type: "logic_boolean" },
            ],
        },
        {
            name: "Math",
            style: "math_blocks",
            blocks: [{ type: "math_arithmetic" }, { type: "math_number" }],
        },
    ].filter(cat => !!cat.blocks?.length)

    return {
        toolboxBlocks,
        toolboxCategories,
        initialXml,
    }
}
