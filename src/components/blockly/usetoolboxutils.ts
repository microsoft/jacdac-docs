import Blockly from "blockly"
import Flags from "../../../jacdac-ts/src/jdom/flags"
import {
    BlockReference,
    BlockDefinition,
    CategoryDefinition,
    ServiceBlockDefinitionFactory,
} from "./toolbox"
import { Theme } from "@material-ui/core"
import { registerFields } from "./fields/fields"
import BlockDomainSpecificLanguage from "./dsl/dsl"
import { arrayConcatMany } from "../../../jacdac-ts/src/jdom/utils"

export type CachedBlockDefinitions = {
    blocks: BlockDefinition[]
}

export function loadBlocks(
    dsls: BlockDomainSpecificLanguage[],
    theme: Theme
): CachedBlockDefinitions {
    const blocks = arrayConcatMany(
        dsls.map(dsl =>
            dsl?.createBlocks?.({ theme }).map(b => {
                b.dsl = dsl.id // ensure DSL is set
                return b
            })
        )
    )
    // register field editors
    registerFields()
    // re-register blocks with Blockly
    blocks.forEach(
        block =>
            (Blockly.Blocks[block.type] = <
                ServiceBlockDefinitionFactory<BlockDefinition>
            >{
                jacdacDefinition: block,
                init: function () {
                    this.jsonInit(block)
                },
            })
    )

    return {
        blocks,
    }
}

export function patchCategoryJSONtoXML(cat: CategoryDefinition): CategoryDefinition {
    cat.contents
        ?.filter(node => node.kind === "block")
        .map(node => <BlockReference>node)
        .filter(block => {
            const exists = Blockly.Blocks[block.type]
            if (!exists && Flags.diagnostics)
                console.warn(
                    `block type '${block.type}' not found, consider refreshing page...`
                )
            return !!block.values && exists
        }) // avoid broken blocks
        .forEach(block => {
            // yup, this suck but we have to go through it
            block.blockxml = `<block type="${block.type}">${Object.keys(
                block.values
            )
                .map(name => {
                    const { type } = block.values[name]
                    const shadow = type !== "variables_get"
                    return `<value name="${name}"><${
                        shadow ? "shadow" : "field"
                    } type="${type}" /></value>`
                })
                .join("\n")}</block>`
            delete block.type
        })
    return cat
}