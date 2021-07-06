import React, { useContext, useEffect, useMemo, useState, lazy } from "react"
import { NoSsr } from "@material-ui/core"
import BlockContext, { BlockProvider } from "../blockly/BlockContext"
import BlockEditor from "../blockly/BlockEditor"
import variablesDsl from "../blockly/dsl/variablesdsl"
import shadowDsl from "../blockly/dsl/shadowdsl"
import modelBlockDsl, {
    MODEL_BLOCKS,
    MB_CLASS_TYPE,
    MB_CLASSIFIER_TYPE,
    MB_DATASET_TYPE,
} from "./modelblockdsl"
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

    // handling dialogs within Blockly
    const addNewDataset = workspace => {
        // prompt user for dataset name
        Blockly.prompt("Enter new dataset name:", "", newDatasetName => {
            // check if name is already used
            if (newDatasetName != null && newDatasetName != undefined) {
                if (
                    newDatasetName != "" &&
                    !Variables.nameUsedWithAnyType(newDatasetName, workspace)
                ) {
                    // get or create new dataset typed variable
                    const newDatasetVar = workspace.createVariable(
                        newDatasetName,
                        MB_DATASET_TYPE
                    )

                    // create new dataset block on the workspace
                    const newDatasetBlock = workspace.newBlock(
                        MODEL_BLOCKS + "dataset"
                    ) as BlockSvg

                    // automatically insert the variable name into the new block
                    console.log(newDatasetBlock.inputList[0])
                    const field = newDatasetBlock.inputList[0].fieldRow.find(
                        f => f.name === "DATASET_NAME"
                    ) as FieldVariable
                    field.setValue(newDatasetVar.getId())

                    // add new block to the screen
                    newDatasetBlock.initSvg()
                    newDatasetBlock.render(false)
                    workspace.centerOnBlock(newDatasetBlock.id)
                } else {
                    setTimeout(
                        () =>
                            Blockly.alert(
                                "That variable name is invalid or already exists"
                            ),
                        10
                    )
                }
            }
        })
    }

    // Randi TODO is this too redundant with creating a dataset?
    const addNewClassifier = workspace => {
        // Randi TODO should this gui be fancy?
        // prompt user for variable name
        Blockly.prompt(`Enter new classifier name:`, ``, newVariableName => {
            // check if name is already used
            if (newVariableName != null && newVariableName != undefined) {
                if (
                    newVariableName != "" &&
                    !Variables.nameUsedWithAnyType(newVariableName, workspace)
                ) {
                    // get or creat new dataset typed variable
                    const newVariable = workspace.createVariable(
                        newVariableName,
                        MB_CLASSIFIER_TYPE
                    )

                    // create new dataset block on the workspace
                    const newBlock = workspace.newBlock(
                        MODEL_BLOCKS + "knn"
                    ) as BlockSvg

                    // automatically insert the variable name into the new block
                    console.log(newBlock.inputList[0])
                    const field = newBlock.inputList[0].fieldRow.find(
                        f => f.name === `CLASSIFIER_NAME`
                    ) as FieldVariable
                    field.setValue(newVariable.getId())

                    // add new block to the screen
                    newBlock.initSvg()
                    newBlock.render(false)
                    workspace.centerOnBlock(newBlock.id)
                } else {
                    setTimeout(
                        () =>
                            Blockly.alert(
                                "That variable name is invalid or already exists"
                            ),
                        10
                    )
                }
            }
        })
    }

    const addNewRecording = msg => {
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
    const [recordDataDialogVisible, setRecordDataDialogVisible] =
        useState<boolean>(false)
    const toggleRecordDataDialog = () => {
        const b = !recordDataDialogVisible
        setRecordDataDialogVisible(b)
    }
    const buttonsWithDialogs = {
        createNewDatasetButton: addNewDataset,
        createNewRecordingButton: toggleRecordDataDialog,
        createNewClassifierButton: addNewClassifier,
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

    // Randi TODO use this to plug in NN classifier into toolbox
    /*useEffect(() => {
        console.log(workspaceXML)
    }, [workspaceXML])*/

    // set button callbacks
    useEffect(() => {
        // register callbacks buttons with custom dialogs
        visitToolbox(toolboxConfiguration, {
            visitButton: btn => {
                /*if (btn.callbackKey == "createNewRecordingButton") {
                    btn.callback = () => toggleRecordDataDialog()
                }*/
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
