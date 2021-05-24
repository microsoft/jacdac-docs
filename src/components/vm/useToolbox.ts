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
    isCommand,
    isEvent,
    isRegister,
    serviceSpecifications,
} from "../../../jacdac-ts/src/jdom/spec"
import {
    arrayConcatMany,
    SMap,
    toMap,
    unique,
    uniqueMap,
} from "../../../jacdac-ts/src/jdom/utils"
import useServices from "../hooks/useServices"

const NEW_PROJET_XML =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="jacdac_configuration"></block></xml>'

export interface InputDefinition {
    type: string
    name: string
    variable?: string
    variableTypes?: string[]
    defaultType?: string
    check?: string | string[]
}

export interface OptionsInputDefinition extends InputDefinition {
    options?: [string, string][]
}

export interface NumberInputDefinition extends InputDefinition {
    min?: number
    max?: number
    precision?: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface BlockReference {
    kind: "block"
    type: string
    values?: SMap<BlockReference>
    shadow?: boolean
}

export type EventTemplate = "event"

export type RegisterTemplate =
    | "register_change_event"
    | "register_set"
    | "register_get"

export type CommandTemplate = "command"

export type BlockTemplate = EventTemplate | RegisterTemplate | CommandTemplate

export interface BlockDefinition extends BlockReference {
    message0?: string
    args0?: InputDefinition[]
    colour?: number
    inputsInline?: boolean
    previousStatement?: string | string[]
    nextStatement?: string | string[]
    tooltip?: string
    helpUrl?: string
    style?: string
    output?: string
    extensions?: string[]
    template?: BlockTemplate
}

export interface ButtonDefinition {
    kind: "button"
    text: string
    callbackKey: string
    service: jdspec.ServiceSpec
}

export interface ServiceBlockDefinition extends BlockDefinition {
    template: BlockTemplate
    service: jdspec.ServiceSpec
}

export interface EventBlockDefinition extends ServiceBlockDefinition {
    template: EventTemplate
    events: jdspec.PacketInfo[]
}

export interface RegisterBlockDefinition extends ServiceBlockDefinition {
    template: RegisterTemplate
    register: jdspec.PacketInfo
}

export interface CommandBlockDefinition extends ServiceBlockDefinition {
    template: CommandTemplate
    command: jdspec.PacketInfo
}

export const WHILE_CONDITION_BLOCK = "jacdac_while_event"
export const WHILE_CONDITION_BLOCK_CONDITION = "condition"
export const WAIT_BLOCK = "jacdac_wait"

export interface CategoryDefinition {
    kind: "category"
    name: string
    custom?: string
    colour?: string
    categorystyle?: string
    contents?: (BlockDefinition | ButtonDefinition)[]
    button?: ButtonDefinition
}

export interface ToolboxConfiguration {
    kind: "categoryToolbox"
    contents: CategoryDefinition[]
}

type CachedBlockDefinitions = {
    blocks: BlockDefinition[]
    serviceBlocks: ServiceBlockDefinition[]
    services: jdspec.ServiceSpec[]
}

function isBooleanField(field: jdspec.PacketMember) {
    return field.type === "bool"
}
function isStringField(field: jdspec.PacketMember) {
    return field.type === "string"
}
function toBlocklyType(field: jdspec.PacketMember) {
    return isBooleanField(field)
        ? "Boolean"
        : isStringField(field)
        ? "String"
        : "Number"
}

const ignoredServices = [
    SRV_CONTROL,
    SRV_LOGGER,
    SRV_ROLE_MANAGER,
    SRV_PROTO_TEST,
    SRV_SETTINGS,
    SRV_BOOTLOADER,
]
const ignoredEvents = [SystemEvent.StatusCodeChanged]
const includedRegisters = [
    SystemReg.Reading,
    SystemReg.Value,
    SystemReg.Intensity,
]

let cachedBlocks: CachedBlockDefinitions
export function loadBlocks(): CachedBlockDefinitions {
    if (cachedBlocks) return cachedBlocks

    const fieldName = (reg: jdspec.PacketInfo, field: jdspec.PacketMember) =>
        field.name === "_" ? reg.name : field.name
    const fieldToShadow = (field: jdspec.PacketMember): BlockReference =>
        isBooleanField(field)
            ? { kind: "block", type: "jacdac_on_off", shadow: true }
            : isStringField(field)
            ? { kind: "block", type: "text", shadow: true }
            : field.unit === "°"
            ? {
                  kind: "block",
                  type: "jacdac_angle",
                  shadow: true,
              }
            : field.unit === "/"
            ? { kind: "block", type: "jacdac_percent", shadow: true }
            : {
                  kind: "block",
                  type: "math_number",
                  value: field.defaultValue || 0,
                  min: field.typicalMin || field.absoluteMin,
                  max: field.typicalMax || field.absoluteMax,
                  shadow: true,
              }
    const variableName = (srv: jdspec.ServiceSpec) =>
        `${humanify(srv.camelName).toLowerCase()} 1`
    const fieldVariable = (service: jdspec.ServiceSpec): InputDefinition => ({
        type: "field_variable",
        name: "role",
        variable: variableName(service),
        variableTypes: [service.shortId],
        defaultType: service.shortId,
    })
    const fieldsToFieldInputs = (info: jdspec.PacketInfo) =>
        info.fields.map(field => ({
            type: "input_value",
            name: fieldName(info, field),
            check: toBlocklyType(field),
        }))
    const fieldsToValues = (info: jdspec.PacketInfo) =>
        toMap<jdspec.PacketMember, BlockReference | BlockDefinition>(
            info.fields,
            field => fieldName(info, field),
            field => fieldToShadow(field)
        )
    const fieldsToMessage = (info: jdspec.PacketInfo) =>
        info.fields
            .map((field, i) => `${humanify(field.name)} %${2 + i}`)
            .join(" ")
    const allServices = serviceSpecifications()
        .filter(service => !/^_/.test(service.shortId))
        .filter(service => ignoredServices.indexOf(service.classIdentifier) < 0)
    const registers = allServices
        .map(service => ({
            service,
            register: service.packets.find(
                pkt =>
                    isRegister(pkt) &&
                    includedRegisters.indexOf(pkt.identifier) > -1
            ),
        }))
        .filter(kv => !!kv.register)
    const events = allServices
        .map(service => ({
            service,
            events: service.packets.filter(
                pkt => isEvent(pkt) && ignoredEvents.indexOf(pkt.identifier) < 0
            ),
        }))
        .filter(kv => !!kv.events.length)
    const commands = arrayConcatMany(
        allServices.map(service =>
            service.packets
                .filter(pkt => isCommand(pkt))
                .map(pkt => ({
                    service,
                    command: pkt,
                }))
        )
    )

    const HUE = 230

    const eventBlocks = events.map<EventBlockDefinition>(
        ({ service, events }) => ({
            kind: "block",
            type: `jacdac_${service.shortId}_events`,
            message0: `when %1 %2`,
            args0: [
                fieldVariable(service),
                <InputDefinition>{
                    type: "field_dropdown",
                    name: "event",
                    options: events.map(event => [
                        humanify(event.name),
                        event.name,
                    ]),
                },
            ],
            colour: HUE,
            inputsInline: true,
            nextStatement: null,
            tooltip: "",
            helpUrl: "",
            service,
            events,
            template: "event",
        })
    )

    const registerChangeByEventBlocks = registers
        .filter(
            ({ service }) =>
                !service.packets.some(
                    pkt =>
                        isEvent(pkt) &&
                        ignoredEvents.indexOf(pkt.identifier) < 0
                )
        )
        .filter(
            ({ register }) =>
                register.fields.length === 1 &&
                isNumericType(register.fields[0])
        )
        .map<RegisterBlockDefinition>(({ service, register }) => ({
            kind: "block",
            type: `jacdac_${service.shortId}_${register.name}_change_by_event`,
            message0: `when %1 ${humanify(register.name)} change by %2`,
            args0: [
                fieldVariable(service),
                {
                    type: "input_value",
                    name: "threshold",
                    check: "Number",
                },
            ].filter(v => !!v),
            values: {
                threshold: fieldToShadow(register.fields[0]),
            },
            inputsInline: true,
            nextStatement: "Statement",
            colour: HUE,
            tooltip: "",
            helpUrl: "",
            service,
            register,

            template: "register_change_event",
        }))

    const registerGetBlocks = registers.map<RegisterBlockDefinition>(
        ({ service, register }) => ({
            kind: "block",
            type: `jacdac_${service.shortId}_${register.name}_get`,
            message0: `%1 ${humanify(register.name)}${
                register.fields.length > 1 ? ` %2` : ""
            }`,
            args0: [
                fieldVariable(service),
                register.fields.length > 1
                    ? <OptionsInputDefinition>{
                          type: "field_dropdown",
                          name: "field",
                          options: register.fields.map(field => [
                              humanify(field.name),
                              fieldName(register, field),
                          ]),
                      }
                    : undefined,
            ].filter(v => !!v),
            inputsInline: true,
            output: toBlocklyType(register.fields[0]),
            colour: HUE,
            tooltip: "",
            helpUrl: "",
            service,
            register,

            template: "register_get",
        })
    )

    const registerSetBlocks = registers
        .filter(({ register }) => register.kind === "rw")
        .map<RegisterBlockDefinition>(({ service, register }) => ({
            kind: "block",
            type: `jacdac_${service.shortId}_${register.name}_set`,
            message0: `set %1 ${register.name} to ${
                register.fields.length === 1 ? "%2" : fieldsToMessage(register)
            }`,
            args0: [fieldVariable(service), ...fieldsToFieldInputs(register)],
            values: fieldsToValues(register),
            inputsInline: true,
            colour: HUE,
            tooltip: "",
            helpUrl: "",
            service,
            register,
            previousStatement: "Statement",
            nextStatement: "Statement",

            template: "register_set",
        }))

    const commandBlocks = commands.map<CommandBlockDefinition>(
        ({ service, command }) => ({
            kind: "block",
            type: `jacdac_${service.shortId}_value_get`,
            message0: `${humanify(command.name)} %1 with ${fieldsToMessage(
                command
            )}`,
            args0: [fieldVariable(service), ...fieldsToFieldInputs(command)],
            values: fieldsToValues(command),
            inputsInline: true,
            colour: HUE,
            tooltip: "",
            helpUrl: "",
            service,
            command,
            previousStatement: "Statement",
            nextStatement: "Statement",

            template: "command",
        })
    )

    const serviceBlocks: ServiceBlockDefinition[] = [
        ...eventBlocks,
        ...registerChangeByEventBlocks,
        ...registerGetBlocks,
        ...registerSetBlocks,
        ...commandBlocks,
    ]

    const shadowBlocks: BlockDefinition[] = [
        {
            kind: "block",
            type: `jacdac_on_off`,
            message0: `%1`,
            args0: [
                <OptionsInputDefinition>{
                    type: "field_dropdown",
                    name: "value",
                    options: [
                        ["on", "on"],
                        ["off", "off"],
                    ],
                },
            ],
            colour: HUE,
            output: "Boolean",
        },
        {
            kind: "block",
            type: `jacdac_time_picker`,
            message0: `%1`,
            args0: [
                <OptionsInputDefinition>{
                    type: "field_dropdown",
                    name: "value",
                    options: [
                        ["0.1", "0.1"],
                        ["1", "1"],
                        ["5", "5"],
                        ["30", "30"],
                        ["60", "60"],
                    ],
                },
            ],
            colour: HUE,
            output: "Number",
        },
        {
            kind: "block",
            type: `jacdac_angle`,
            message0: `%1`,
            args0: [
                <NumberInputDefinition>{
                    type: "field_angle",
                    name: "value",
                    min: 0,
                    max: 360,
                    precision: 10,
                },
            ],
            colour: HUE,
            output: "Number",
        },
        {
            kind: "block",
            type: `jacdac_percent`,
            message0: `%1 %`,
            args0: [
                <NumberInputDefinition>{
                    type: "field_slider",
                    name: "value",
                    min: 0,
                    max: 100,
                    precision: 1,
                },
            ],
            colour: HUE,
            output: "Number",
        },
        {
            kind: "block",
            type: `jacdac_ratio`,
            message0: `%1`,
            args0: [
                <NumberInputDefinition>{
                    type: "field_slider",
                    name: "value",
                    min: 0,
                    max: 1,
                    precision: 0.1,
                },
            ],
            colour: HUE,
            output: "Number",
        },
    ]

    const runtimeBlocks: BlockDefinition[] = [
        {
            kind: "block",
            type: WHILE_CONDITION_BLOCK,
            message0: "while %1",
            args0: [
                {
                    type: "input_value",
                    name: WHILE_CONDITION_BLOCK_CONDITION,
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
            kind: "block",
            type: WAIT_BLOCK,
            message0: "wait %1 s",
            args0: [
                {
                    type: "input_value",
                    name: "TIME",
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
    ]

    const mathBlocks: BlockDefinition[] = [
        {
            kind: "block",
            type: "jacdac_math_arithmetic",
            message0: "%1 %2 %3",
            args0: [
                {
                    type: "input_value",
                    name: "A",
                    check: "Number",
                },
                <OptionsInputDefinition>{
                    type: "field_dropdown",
                    name: "OP",
                    options: [
                        ["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"],
                        ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"],
                        ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"],
                        ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"],
                    ],
                },
                {
                    type: "input_value",
                    name: "B",
                    check: "Number",
                },
            ],
            inputsInline: true,
            output: "Number",
            style: "math_blocks",
            helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
            extensions: ["math_op_tooltip"],
        },
        {
            kind: "block",
            type: "jacdac_math_single",
            message0: "%1 %2",
            args0: [
                <OptionsInputDefinition>{
                    type: "field_dropdown",
                    name: "OP",
                    options: [
                        ["-", "NEG"],
                        ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"],
                    ],
                },
                {
                    type: "input_value",
                    name: "NUM",
                    check: "Number",
                },
            ],
            output: "Number",
            style: "math_blocks",
            helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
            extensions: ["math_op_tooltip"],
        },
    ]

    const blocks: BlockDefinition[] = [
        ...serviceBlocks,
        ...runtimeBlocks,
        ...shadowBlocks,
        ...mathBlocks,
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
    const jdBlocks = serviceBlocks.filter(block => !!block.service)
    const services = uniqueMap(
        jdBlocks,
        block => block.service.shortId,
        block => block.service
    )

    cachedBlocks = {
        blocks,
        serviceBlocks,
        services,
    }

    return cachedBlocks
}

export const BUILTIN_TYPES = ["", "Boolean", "Number", "String"]
export function scanServices(workspace: Blockly.Workspace) {
    const variables = Blockly.Variables.allUsedVarModels(workspace).filter(
        v => BUILTIN_TYPES.indexOf(v.type) < 0
    ) // remove buildins
    const services = variables.map(v => v.type)
    return services
}

export default function useToolbox(blockServices?: string[]): {
    toolboxConfiguration: ToolboxConfiguration
    newProjectXml: string
} {
    const { serviceBlocks, services } = useMemo(() => loadBlocks(), [])
    const liveServices = useServices({ specification: true })

    const toolboxServices = unique([
        ...blockServices,
        ...liveServices
            .filter(srv => ignoredServices.indexOf(srv.serviceClass) < 0)
            .map(service => service.specification?.shortId),
    ])
        .map(serviceShortId =>
            services.find(service => service.shortId === serviceShortId)
        )
        .filter(srv => !!srv)

    const toolboxConfiguration: ToolboxConfiguration = {
        kind: "categoryToolbox",
        contents: [
            ...toolboxServices
                .map(service => ({
                    service,
                    serviceBlocks: serviceBlocks.filter(
                        block => block.service === service
                    ),
                }))
                .map<CategoryDefinition>(({ service, serviceBlocks }) => ({
                    kind: "category",
                    name: service.name,
                    colour: "#5CA699",
                    contents: serviceBlocks.map(block => ({
                        kind: "block",
                        type: block.type,
                        values: block.values,
                    })),
                    button: {
                        kind: "button",
                        text: `Add ${service.name}`,
                        callbackKey: `jacdac_add_role_callback_${service.shortId}`,
                        service,
                    },
                }))
                .map(cat => {
                    if (cat.button) cat.contents.unshift(cat.button)
                    return cat
                }),
            <CategoryDefinition>{
                kind: "category",
                name: "Commands",
                colour: "%{BKY_LISTS_HUE}",
                contents: [
                    {
                        kind: "block",
                        type: WHILE_CONDITION_BLOCK,
                    },
                    {
                        kind: "block",
                        type: "jacdac_wait",
                        values: {
                            TIME: { type: "jacdac_time_picker", shadow: true },
                        },
                    },
                ],
            },
            <CategoryDefinition>{
                kind: "category",
                name: "Logic",
                colour: "%{BKY_LOGIC_HUE}",
                contents: [
                    {
                        kind: "block",
                        type: "dynamic_if",
                    },
                    {
                        kind: "block",
                        type: "logic_compare",
                        values: {
                            A: { type: "math_number", shadow: true },
                            B: { type: "math_number", shadow: true },
                        },
                    },
                    {
                        kind: "block",
                        type: "logic_operation",
                        values: {
                            A: { type: "logic_boolean", shadow: true },
                            B: { type: "logic_boolean", shadow: true },
                        },
                    },
                    {
                        kind: "block",
                        type: "logic_negate",
                        values: {
                            BOOL: { type: "logic_boolean", shadow: true },
                        },
                    },
                    {
                        kind: "block",
                        type: "logic_boolean",
                    },
                ],
            },
            <CategoryDefinition>{
                kind: "category",
                name: "Math",
                colour: "%{BKY_MATH_HUE}",
                contents: [
                    {
                        kind: "block",
                        type: "jacdac_math_arithmetic",
                        values: {
                            A: { type: "math_number", shadow: true },
                            B: { type: "math_number", shadow: true },
                        },
                    },
                    {
                        kind: "block",
                        type: "jacdac_math_single",
                        values: {
                            NUM: { type: "math_number", shadow: true },
                        },
                    },
                    { kind: "block", type: "math_number" },
                ],
            },
            <CategoryDefinition>{
                kind: "category",
                name: "Variables",
                colour: "%{BKY_VARIABLES_HUE}",
                custom: "VARIABLE",
            },
        ].filter(cat => !!cat.contents?.length),
    }

    console.log({ toolboxConfiguration })

    return {
        toolboxConfiguration,
        newProjectXml: NEW_PROJET_XML,
    }
}
