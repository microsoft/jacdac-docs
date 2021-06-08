import { SMap } from "../../../jacdac-ts/src/jdom/utils"
import Blockly from "blockly"

export const NEW_PROJET_XML = '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>'

export interface InputDefinition {
    type: string
    name?: string
}

export interface ValueInputDefinition extends InputDefinition {
    type: "input_value"
    check?: string | string[]
}

export interface DummyInputDefinition extends InputDefinition {
    type: "input_dummy"
}

export interface StatementInputDefinition extends InputDefinition {
    type: "input_statement"
    check?: string | string[]
}

export interface VariableInputDefinition extends InputDefinition {
    type: "field_variable"
    variable?: string
    variableTypes?: string[]
    defaultType?: string
}

export interface TextInputDefinition extends InputDefinition {
    type: "field_input"
    text?: string
}

export interface OptionsInputDefinition extends InputDefinition {
    type: "field_dropdown"
    options?: [string, string][]
}

export interface NumberInputDefinition extends InputDefinition {
    min?: number
    max?: number
    precision?: number
}

export interface ColorInputDefnition extends InputDefinition {
    color?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface BlockReference {
    kind: "block"
    type: string
    values?: SMap<BlockReference>
    blockxml?: string

    value?: number
    min?: number
    max?: number
}

export type EventTemplate = "event"

export type EventFieldTemplate = "event_field"

export type RegisterTemplate =
    | "register_change_event"
    | "register_set"
    | "register_get"

export type CommandTemplate = "command"

export type CustomTemplate = "custom"

export type BlockTemplate =
    | EventTemplate
    | EventFieldTemplate
    | RegisterTemplate
    | CommandTemplate
    | CustomTemplate
    | "shadow"
    | "every"
    | "connection"
    | "connected"
    | "meta"

export interface BlockDefinition extends BlockReference {
    message0?: string
    args0?: InputDefinition[]
    colour?: number | string
    inputsInline?: boolean
    previousStatement?: string | string[]
    nextStatement?: string | string[]
    tooltip?: string
    helpUrl?: string
    style?: string
    output?: string
    extensions?: string[]
    template?: BlockTemplate
    dsl?: string
}

export interface ServiceBlockDefinition extends BlockDefinition {
    template: BlockTemplate
    service: jdspec.ServiceSpec
}

export interface ServiceBlockDefinitionFactory {
    jacdacDefinition: ServiceBlockDefinition
    init: () => void
}

export function resolveServiceBlockDefinition(type: string) {
    const b = Blockly.Blocks[type] as ServiceBlockDefinitionFactory
    return b?.jacdacDefinition
}

export interface EventBlockDefinition extends ServiceBlockDefinition {
    template: EventTemplate
    events: jdspec.PacketInfo[]
}

export interface EventFieldDefinition extends ServiceBlockDefinition {
    template: EventFieldTemplate
    event: jdspec.PacketInfo
}

export interface RegisterBlockDefinition extends ServiceBlockDefinition {
    template: RegisterTemplate
    register: jdspec.PacketInfo
    field?: jdspec.PacketMember
}

export interface CommandBlockDefinition extends ServiceBlockDefinition {
    kind: "block"
    template: CommandTemplate
    command: jdspec.PacketInfo
}

export interface CustomBlockDefinition extends ServiceBlockDefinition {
    kind: "block"
    template: CustomTemplate
    expression?: string
}

export const WAIT_BLOCK = "jacdac_wait"
export const SET_STATUS_LIGHT_BLOCK = "jacdac_set_status_light"
export const TWIN_BLOCK = "jacdac_twin"
export const INSPECT_BLOCK = "jacdac_inspect"
export const WATCH_BLOCK = "jacdac_watch"
export const REPEAT_EVERY_BLOCK = "jacdac_repeat_every"
export const CONNECTION_BLOCK = "jacdac_connection"
export const CONNECTED_BLOCK = "jacdac_connected"

export const PRIMITIVE_TYPES = ["String", "Boolean", "Number"]
export const BUILTIN_TYPES = ["", ...PRIMITIVE_TYPES]

export const CODE_STATEMENT_TYPE = "Code"

export interface ContentDefinition {
    kind: "category" | "sep" | "button"
    order?: number
}

export interface CategoryDefinition extends ContentDefinition {
    kind: "category"
    name: string
    order?: number
    custom?: string
    colour?: string
    categorystyle?: string
    contents?: (BlockDefinition | ContentDefinition)[]
    button?: ButtonDefinition
}

export interface ButtonDefinition extends ContentDefinition {
    kind: "button"
    text: string
    callbackKey: string
    service: jdspec.ServiceSpec
}

export interface SeparatorDefinition extends ContentDefinition {
    kind: "sep"
}

export interface ToolboxConfiguration {
    kind: "categoryToolbox"
    contents: ContentDefinition[]
}
