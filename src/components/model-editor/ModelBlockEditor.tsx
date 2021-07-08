import React, { useContext, useEffect, useMemo, useState, lazy } from "react"
import { NoSsr } from "@material-ui/core"
import BlockContext, { BlockProvider } from "../blockly/BlockContext"
import BlockEditor from "../blockly/BlockEditor"
import variablesDsl from "../blockly/dsl/variablesdsl"
import shadowDsl from "../blockly/dsl/shadowdsl"
import modelBlockDsl, {
    MODEL_BLOCKS,
    MB_CLASS_TYPE,
} from "./modelblockdsl"
import {
    addNewDataset,
    addNewClassifier,
} from "./ModelBlockModals"
import fieldsDsl from "../blockly/dsl/fieldsdsl"
import Flags from "../../../jacdac-ts/src/jdom/flags"
import BlockDiagnostics from "../blockly/BlockDiagnostics"
import { visitWorkspace } from "../blockly/jsonvisitor"

// Randi copiedfrom AppContext
import Suspense from "../ui/Suspense"
import Blockly, { BlockSvg, FieldVariable, Variables } from "blockly"
import { visitToolbox } from "../blockly/toolbox"

const RecordDataDialog = lazy(() => import("../dialogs/RecordDataDialog"))

const MB_SOURCE_STORAGE_KEY = "model-block-blockly-xml"

function ModelBlockEditorWithContext() {
    // block context handles hosting blockly
    const { workspace, workspaceJSON, toolboxConfiguration } =
        useContext(BlockContext)

    const [recordDataDialogVisible, setRecordDataDialogVisible] =
        useState<boolean>(false)
    const toggleRecordDataDialog = () => {
        const b = !recordDataDialogVisible
        setRecordDataDialogVisible(b)
    }
    const addNewRecording = (msg) => {
        const { recordingName, className, recordingRegisters } = msg
        console.log("Sensors selected: ", { recordingRegisters })
        if (className != null && className != undefined) {
            // Get or create new class typed variable
            const classVar = workspace.createVariable(className, MB_CLASS_TYPE)
    
            // Create new recording block on the workspace
            const newRecordingBlock = workspace.newBlock(
                MODEL_BLOCKS + "recording"
            ) as BlockSvg
    
            // Automatically insert the recording name into the new block
            const recordingNameField =
                newRecordingBlock.inputList[0].fieldRow.find(
                    f => f.name === "RECORDING_NAME"
                ) as FieldVariable
            recordingNameField.setValue(recordingName)
    
            // Automatically insert the class name into the new block
            const classNameField = newRecordingBlock.inputList[0].fieldRow.find(
                f => f.name === "CLASS_NAME"
            ) as FieldVariable
            classNameField.setValue(classVar.getId())
    
            newRecordingBlock.initSvg()
            newRecordingBlock.render(false)
            workspace.centerOnBlock(newRecordingBlock.id)
        }
    }

   

    // run this when workspaceJSON changes
    useEffect(() => {
        visitWorkspace(workspaceJSON, {
            visitBlock: block => console.log(`block ${block.type}`, { block }),
            visitInput: input => console.log(`input ${input.name}`, { input }),
            visitField: (name, field) =>
                console.log(`field ${name}: ${field.value}`, { field }),
        })
    }, [workspaceJSON])

    const buttonsWithDialogs = {
        createNewDatasetButton: addNewDataset,
        createNewRecordingButton: toggleRecordDataDialog,
        createNewClassifierButton: addNewClassifier,
    }
    // set button callbacks
    useEffect(() => {
        // register callbacks buttons with custom dialogs
        visitToolbox(toolboxConfiguration, {
            visitButton: btn => {
                if (btn.callbackKey in buttonsWithDialogs) {
                    btn.callback = workspace => {
                        buttonsWithDialogs[btn.callbackKey](workspace)
                    }
                }
            },
        })
    }, [toolboxConfiguration])

    return (
        <>
            <BlockEditor />
            {Flags.diagnostics && <BlockDiagnostics />}
            {recordDataDialogVisible && (
                <Suspense>
                    <RecordDataDialog
                        open={recordDataDialogVisible}
                        onNext={addNewRecording}
                        onClose={toggleRecordDataDialog}
                    />
                </Suspense>
            )}
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
