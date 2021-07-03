import React, { useContext, useEffect, useMemo } from "react"
import { NoSsr } from "@material-ui/core"
import BlockContext, { BlockProvider } from "../blockly/BlockContext"
import AppContext from "../AppContext"
import BlockEditor from "../blockly/BlockEditor"
import variablesDsl from "../blockly/dsl/variablesdsl"
import shadowDsl from "../blockly/dsl/shadowdsl"
import modelBlockDsl from "./modelblockdsl"
import fieldsDsl from "../blockly/dsl/fieldsdsl"
import Flags from "../../../jacdac-ts/src/jdom/flags"
import BlockDiagnostics from "../blockly/BlockDiagnostics"
import { visitWorkspace } from "../blockly/jsonvisitor"
import { visitToolbox } from "../blockly/toolbox"

const MB_SOURCE_STORAGE_KEY = "model-block-blockly-xml"

function ModelBlockEditorWithContext() {
    // block context handles hosting blockly
    const { workspace, workspaceJSON, toolboxConfiguration } = useContext(BlockContext)
    console.log(BlockContext)
    console.log(`Randi ws: ${workspace?.connectionDBList}`)
    // Michal's ugly hack
    ;(AppContext as any).blocklyWorkspace = workspace

    // app context hosts other dialogs
    const { showRecordDataDialog } = useContext(AppContext)

    // run this when workspaceJSON changes
    useEffect(() => {
        visitWorkspace(workspaceJSON, {
            visitBlock: block => console.log(`block ${block.type}`, { block }),
            visitInput: input => console.log(`input ${input.name}`, { input }),
            visitField: (name, field) =>
                console.log(`field ${name}: ${field.value}`, { field }),
        })
    }, [workspaceJSON])

    /*useEffect(() => {
        console.log(workspaceXML)
    }, [workspaceXML])*/

    /* Randi's super hacky way to reference dialogs */
    useEffect(() => {
        visitToolbox(toolboxConfiguration, {
            visitButton: btn => {
                if (btn.callbackKey == "createNewRecordingButton") {
                    btn.callback = (workspace) => showRecordDataDialog(workspace)
                }
            }
        })
    }, [toolboxConfiguration])

    return (
        <>
            <BlockEditor />
            {Flags.diagnostics && <BlockDiagnostics />}
        </>
    )
}

export default function ModelBlockEditor() {
    const dsls = useMemo(() => {
        return [modelBlockDsl, shadowDsl, fieldsDsl, variablesDsl]
    }, [])
    return (
        <NoSsr>
            <BlockProvider storageKey={MB_SOURCE_STORAGE_KEY} dsls={dsls}>
                <ModelBlockEditorWithContext />
            </BlockProvider>
        </NoSsr>
    )
}
