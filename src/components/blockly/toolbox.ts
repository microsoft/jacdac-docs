import { SMap } from "../../../jacdac-ts/src/jdom/utils"
import Blockly, { Block, Workspace } from "blockly"
import { BlockWithServices } from "./WorkspaceContext"

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
    type: "field_number"
    min?: number
    max?: number
    precision?: number
}

export interface ColorInputDefnition extends InputDefinition {
    color?: string
}

export type EventTemplate = "event"

export type EventFieldTemplate = "event_field"

export type RegisterValueTemplate = "register_value"

export type RegisterTemplate =
    // client blocks
    | "register_change_event"
    | "register_set"
    | "register_get"
    // server blocks
    | "register_set_server"   // register name, expr hole for return value
    | "register_get_server"   // register name, special expr block

export type CommandTemplate = "command" | "server" | "raiseNo" | "raiseArgs"

export type BlockTemplate =
    | EventTemplate
    | EventFieldTemplate
    | RegisterTemplate
    | RegisterValueTemplate
    | CommandTemplate
    | "shadow"
    | "meta"
    | string

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

    // js implementation to be called by VM
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vm?: (...args: any[]) => any

    // data transformation
    transformData?: (
        block: BlockWithServices,
        // eslint-disable-next-line @typescript-eslint/ban-types
        data: object[],
        // eslint-disable-next-line @typescript-eslint/ban-types
        previousData: object[]
        // eslint-disable-next-line @typescript-eslint/ban-types
    ) => Promise<object[]>

    // run data transformation even when no follower
    alwaysTransformData?: boolean
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const identityTransformData = async (block: Block, data: object[]) =>
    data

export interface ServiceBlockDefinition extends BlockDefinition {
    template: BlockTemplate
    service: jdspec.ServiceSpec
}

export interface ServiceBlockDefinitionFactory<T extends BlockDefinition> {
    jacdacDefinition: T
    init: () => void
}

export function resolveBlockDefinition<T extends BlockDefinition>(
    type: string
) {
    const b = Blockly.Blocks[type] as ServiceBlockDefinitionFactory<T>
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
    template: "custom"
    expression?: string
}

export const JSON_TYPE = "JSON"
export const STRING_TYPE = "String"
export const BOOLEAN_TYPE = "Boolean"
export const NUMBER_TYPE = "Number"
export const PRIMITIVE_TYPES = [STRING_TYPE, BOOLEAN_TYPE, NUMBER_TYPE]
export const BUILTIN_TYPES = ["", ...PRIMITIVE_TYPES]

export const CODE_STATEMENT_TYPE = "Code"
export const DATA_SCIENCE_STATEMENT_TYPE = "DataScienceStatement"

export const TWIN_BLOCK = "jacdac_tools_twin"

export const toolsColour = "#888"

export const CHART_WIDTH = 388
export const CHART_HEIGHT = 240
export const TABLE_WIDTH = CHART_WIDTH
export const TABLE_HEIGHT = 480

export const VM_WARNINGS_CATEGORY = "vm"
export const JSON_WARNINGS_CATEGORY = "json"

export interface ContentDefinition {
    kind: "category" | "sep" | "button" | "label" | "block"
    order?: number
    hidden?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface BlockReference extends ContentDefinition {
    kind: "block"
    type: string
    values?: SMap<BlockReference>
    blockxml?: string

    value?: number
    min?: number
    max?: number
}

export interface CategoryDefinition extends ContentDefinition {
    kind: "category"
    name: string
    custom?: "VARIABLE" | "PROCEDURE"
    expanded?: boolean
    colour?: string
    categorystyle?: string
    contents?: ContentDefinition[]
}

export interface ButtonDefinition extends ContentDefinition {
    kind: "button"
    text: string
    callbackKey: string,
    callback: (workspace: Workspace) => void
}

export interface SeparatorDefinition extends ContentDefinition {
    kind: "sep"
    gap?: number
}

export interface LabelDefinition extends ContentDefinition {
    kind: "label"
    text: string
}

export interface ToolboxConfiguration {
    kind: "categoryToolbox"
    contents: ContentDefinition[]
}

export function visitToolbox(
    node: ToolboxConfiguration,
    visitor: {
        visitButton?: (button: ButtonDefinition) => void
    }
) {
    const visitContents = (contents: ContentDefinition[]) => {
        contents?.forEach(content => {
            const { kind } = content
            switch (kind) {
                case "button":
                    visitor.visitButton?.(content as ButtonDefinition)
                    break
                case "category": {
                    const cat = content as CategoryDefinition
                    visitContents(cat.contents)
                    break
                }
            }
        })
    }
    visitContents(node.contents)
}
