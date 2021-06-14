import Blockly from "blockly"
import Flags from "../../../jacdac-ts/src/jdom/flags"
import { SMap, toMap } from "../../../jacdac-ts/src/jdom/utils"
import BlockDomainSpecificLanguage, { resolveDsl } from "./dsl/dsl"
import ReactField from "./fields/ReactField"

export interface VariableJSON {
    // Boolean, Number, String, or service short id
    type: string
    id: string
    name: string
}

export type FieldJSON = {
    id?: string
    value?: number | string | boolean
    // Boolean, Number, String, or service short id
    variabletype?: string
    // and extra fields, subclass
}

export interface InputJSON {
    type: number
    name: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fields: SMap<FieldJSON>
    child?: BlockJSON
}

export interface BlockJSON {
    type: string
    id: string
    children?: BlockJSON[]
    value?: string | number | boolean
    inputs?: InputJSON[]
    next?: BlockJSON
}

export interface WorkspaceJSON {
    variables: VariableJSON[]
    blocks: BlockJSON[]
}

export function domToJSON(
    workspace: Blockly.Workspace,
    dsls: BlockDomainSpecificLanguage[]
): WorkspaceJSON {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const clean = (o: any) =>
        Object.keys(o)
            .filter(k => o[k] === undefined || o[k] === null)
            .forEach(k => delete o[k])
    const builtins: SMap<(block: Blockly.Block) => string | number | boolean> =
        {
            logic_null: () => null,
            text: block => block.getFieldValue("TEXT"),
            math_number: block => Number(block.getFieldValue("NUM") || "0"),
            logic_boolean: block => block.getFieldValue("BOOL") === "TRUE",
        }

    const variableToJSON = (variable: Blockly.VariableModel): VariableJSON => ({
        name: variable.name,
        type: variable.type,
        id: variable.getId(),
    })
    const fieldsToJSON = (fields: Blockly.Field[]) =>
        !fields.length
            ? undefined
            : toMap(
                  fields,
                  field => (field.name as string)?.toLowerCase(),
                  fieldToJSON
              )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const xmlToJSON = (xml: Element): any => {
        const j = {}
        if (Flags.diagnostics) j["xml"] = xml.outerHTML
        // dump attributes
        for (const name of xml.getAttributeNames()) {
            const v = xml.getAttribute(name)
            j[name.toLowerCase()] = v
        }
        for (const child of xml.childNodes) {
            if (child.nodeType === Node.TEXT_NODE) j["value"] = xml.textContent
            else if (child.nodeType === Node.ELEMENT_NODE) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const children: any[] = j["children"] || (j["children"] = [])
                children.push(xmlToJSON(child as Element))
            }
        }
        return j
    }
    const fieldToJSON = (field: Blockly.Field) => {
        if (field.isSerializable()) {
            // custom field can just return the value
            if (field instanceof ReactField) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const value = (field as ReactField<any>).value
                return { value }
            } else {
                const container = Blockly.utils.xml.createElement("field")
                const fieldXml = field.toXml(container)
                return xmlToJSON(fieldXml)
            }
        }
        return undefined
    }
    const flattenNext = (block: BlockJSON) => {
        // flatten the linked list of next into an array
        const children: BlockJSON[] = []
        let current = block.next
        while (current) {
            children.push(current)
            current = current.next
        }
        if (children.length) {
            block.children = children
            block.next = undefined
        }
    }
    const blockToJSON = (block: Blockly.Block): BlockJSON => {
        const blockToJSONHidden = (block: Blockly.Block): BlockJSON => {
            // skip disabled blocks
            if (!block?.isEnabled()) return undefined
            // skip over insertion markers.
            if (block.isInsertionMarker()) {
                const child = block.getChildren(false)[0]
                if (child) return blockToJSON(child)
                else return undefined
            }

            const { type } = block
            // allow DSL to handle conversion
            let value = builtins[block.type]?.(block)
            if (value === undefined) {
                const dsl = resolveDsl(dsls, type)
                value = dsl?.blockToValue?.(block)
            }
            const element: BlockJSON = {
                type: block.type,
                id: block.id,
                value,
                inputs:
                    value === undefined
                        ? block.inputList.map(input => {
                              const container: InputJSON = {
                                  type: input.type,
                                  name: input.name,
                                  fields: fieldsToJSON(input.fieldRow),
                                  child: blockToJSON(
                                      input.connection?.targetBlock()
                                  ),
                              }
                              return container
                          })
                        : undefined,
                next: blockToJSONHidden(block.getNextBlock()),
            }
            clean(element)
            return element
        }
        const top = blockToJSONHidden(block)
        if (top) {
            flattenNext(top)
            clean(top)
        }
        return top
    }

    try {
        const variables = Blockly.Variables.allUsedVarModels(workspace).sort(
            (l, r) => l.name.localeCompare(r.name)
        ) // stable sort name
        const blocks = workspace.getTopBlocks(true)
        const json: WorkspaceJSON = {
            variables: variables.map(variableToJSON),
            blocks: blocks.map(blockToJSON).filter(b => !!b),
        }
        return json
    } catch (e) {
        console.error(e)
        return undefined
    }
}
