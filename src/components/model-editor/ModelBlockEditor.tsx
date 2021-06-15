import React, { useContext, useEffect, useMemo } from "react"
import { NoSsr } from "@material-ui/core"
import BlockContext, { BlockProvider } from "../blockly/BlockContext"
import BlockEditor from "../blockly/BlockEditor"
//import variablesDsl from "../blockly/dsl/variablesdsl"
import shadowDsl from "../blockly/dsl/shadowdsl"
import modelBlockDsl from "./modelblockdsl"
import fieldsDsl from "../blockly/dsl/fieldsdsl"
import Flags from "../../../jacdac-ts/src/jdom/flags"
import BlockDiagnostics from "../blockly/BlockDiagnostics"
import { visitWorkspace } from "../blockly/jsonvisitor"

const MB_SOURCE_STORAGE_KEY = "model-block-blockly-xml"

function ModelBlockEditorWithContext() {
    // block context handles hosting blockly
    const { workspaceJSON } = useContext(BlockContext)

    // run this when workspaceJSON changes
    useEffect(() => {
        visitWorkspace(workspaceJSON, {
            visitBlock: block => console.log(`block ${block.type}`, { block }),
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

export default function ModelBlockEditor() {
    const dsls = useMemo(() => {
        return [modelBlockDsl, shadowDsl, fieldsDsl]
    }, [])
    return (
        <NoSsr>
            <BlockProvider storageKey={MB_SOURCE_STORAGE_KEY} dsls={dsls}>
                <ModelBlockEditorWithContext />
            </BlockProvider>
        </NoSsr>
    )
}
