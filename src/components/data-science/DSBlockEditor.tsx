import React, { useContext, useEffect, useMemo } from "react"
import { NoSsr } from "@material-ui/core"
import BlockContext, { BlockProvider } from "../blockly/BlockContext"
import BlockEditor from "../blockly/BlockEditor"
import variablesDsl from "../blockly/dsl/variablesdsl"
import shadowDsl from "../blockly/dsl/shadowdsl"
import dataDsl from "./datadsl"
import fieldsDsl from "../blockly/dsl/fieldsdsl"
import Flags from "../../../jacdac-ts/src/jdom/flags"
import BlockDiagnostics from "../blockly/BlockDiagnostics"
import { visitWorkspace } from "../blockly/jsonvisitor"
import {
    BlockDefinition,
    resolveServiceBlockDefinition,
} from "../blockly/toolbox"
import { SMap } from "../../../jacdac-ts/src/jdom/utils"

const DS_SOURCE_STORAGE_KEY = "data-science-blockly-xml"

// data table of sorts
type DSTable = any
// a chart object
type DSChart = any

interface DSTableBlockDefinition extends BlockDefinition {
    template: "table"
    table: DSTable
}
type Chart = any
interface DSChartBlockDefinition extends BlockDefinition {
    template: "chart"
    chart: (table: DSTable) => Chart
}
function resolveTable(block: Block): DSTable {
    return undefined
}

function DSEditorWithContext() {
    // block context handles hosting blockly
    const { workspaceJSON } = useContext(BlockContext)

    // run this when workspaceJSON changes
    useEffect(() => {
        // block state
        const state: SMap<{ table?: DSTable; chart?: DSChart }> = {}

        visitWorkspace(workspaceJSON, {
            visitBlock: block => {
                const { id, type } = block
                const definition: BlockDefinition =
                    resolveServiceBlockDefinition(type)
                const { template } = definition || {}
                const blockState = state[id] || (state[id] = {})
                if (template === "table") {
                    const { table } = definition as DSTableBlockDefinition
                    blockState.table = table
                } else if (template === "chart") {
                    // find table in parent hierachy
                    const table = resolveTable(block)
                    const { chart } = definition as DSChartBlockDefinition
                    blockState.chart = chart(table)
                }
            },
            visitInput: input => console.log(`input ${input.name}`, { input }),
            visitField: (name, field) =>
                console.log(`field ${name}: ${field.value}`, { field }),
        })
    }, [workspaceJSON])

    return (
        <>
            <BlockEditor />
            {Flags.diagnostics && <BlockDiagnostics />}
        </>
    )
}

export default function DScienceEditor() {
    const dsls = useMemo(() => {
        return [dataDsl, variablesDsl, shadowDsl, fieldsDsl]
    }, [])
    return (
        <NoSsr>
            <BlockProvider storageKey={DS_SOURCE_STORAGE_KEY} dsls={dsls}>
                <DSEditorWithContext />
            </BlockProvider>
        </NoSsr>
    )
}
