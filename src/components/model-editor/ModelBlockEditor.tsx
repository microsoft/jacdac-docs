import React, { useContext, useEffect, useMemo, useState, lazy } from "react"
import { NoSsr } from "@material-ui/core"
import BlockContext, { BlockProvider } from "../blockly/BlockContext"
import BlockEditor from "../blockly/BlockEditor"
import variablesDsl from "../blockly/dsl/variablesdsl"
import shadowDsl from "../blockly/dsl/shadowdsl"
import modelBlockDsl, { MODEL_BLOCKS, MB_CLASS_VAR_TYPE } from "./modelblockdsl"
import { addNewDataset, addNewClassifier } from "./ModelBlockModals"
import fieldsDsl from "../blockly/dsl/fieldsdsl"
import Flags from "../../../jacdac-ts/src/jdom/flags"
import BlockDiagnostics from "../blockly/BlockDiagnostics"
import { visitWorkspace } from "../blockly/jsonvisitor"

// Randi copiedfrom AppContext
import Suspense from "../ui/Suspense"
import Blockly, { BlockSvg, FieldVariable, Variables } from "blockly"
import { visitToolbox } from "../blockly/toolbox"
import RecordingBlockField from "../blockly/fields/ModelBlockFields/RecordingBlockField"

const RecordDataDialog = lazy(() => import("../dialogs/RecordDataDialog"))

const MB_EDITOR_ID = "mb"
const MB_SOURCE_STORAGE_KEY = "model-block-blockly-xml"

function ModelBlockEditorWithContext() {
    // store recordings, datasets, and models
    const [allRecordings, setAllRecordings] = useState({}) // dictionary of recording block ids and FieldDataSet objs
    const [allClasses, setAllClasses] = useState<string[]>(undefined)
    const [allDatasets, setAllDatasets] = useState({}) // dictionary of dataset block ids and ModelDataset objs
    const [allModels, setAllModels] = useState({}) // dictionary of model block ids and MBModel objs

    // block context handles hosting blockly
    const { workspace, workspaceJSON, toolboxConfiguration } =
        useContext(BlockContext)

    const [recordDataDialogVisible, setRecordDataDialogVisible] =
        useState<boolean>(false)
    const toggleRecordDataDialog = () => {
        // update class vars
        const classes = workspace
            .getVariablesOfType(MB_CLASS_VAR_TYPE)
            .map(function (classVar) {
                return classVar.name
            })
        if (classes.length == 0) classes.push("class1")
        setAllClasses(classes)

        // update visibility of recording dialog
        const b = !recordDataDialogVisible
        setRecordDataDialogVisible(b)
    }
    const addNewRecording = msg => {
        const { recordingName, className, recording } = msg

        // Create new block for this recording
        if (className != null && className != undefined) {
            // Get or create new class typed variable
            // (createVariable will return an existing variable if one with a particular name already exists)
            const classVar = workspace.createVariable(className, MB_CLASS_VAR_TYPE)

            // Create new recording block on the workspace
            const newRecordingBlock = workspace.newBlock(
                MODEL_BLOCKS + "recording"
            ) as BlockSvg

            // Automatically insert the recording name into the new block
            const recordingNameField = newRecordingBlock.getField(
                "RECORDING_NAME"
            ) as FieldVariable
            recordingNameField.setValue(recordingName)

            // Automatically insert the class name into the new block
            const classNameField = newRecordingBlock.getField(
                "CLASS_NAME"
            ) as FieldVariable
            classNameField.setValue(classVar.getId())

            newRecordingBlock.initSvg()
            newRecordingBlock.render(false)
            workspace.centerOnBlock(newRecordingBlock.id)

            // Save recording data to block
            const blockParamsField = newRecordingBlock.getField(
                "BLOCK_PARAMS"
            ) as RecordingBlockField
            blockParamsField.updateFieldValue(
                {   parametersVisible: null,
                    numSamples: recording.length, 
                    latestTimestamp: recording[0].timestamp,
                    inputs: recording[0].headers,
                })

            // Add recording data to list of recordings
            allRecordings[newRecordingBlock.id] = recording
            setAllRecordings(allRecordings)
        }
    }

    // run this when workspaceJSON changes
    useEffect(() => {
        visitWorkspace(workspaceJSON, {
            visitBlock: block => {
                console.log(`block ${block.type}`, { block })
                if (block.type == (MODEL_BLOCKS + "recording")) console.log(`recording data: `, allRecordings[block.id] )
                // Randi TODO if dataset block, collect data?
            },
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
            <BlockEditor editorId={MB_EDITOR_ID} />
            {Flags.diagnostics && <BlockDiagnostics />}
            {recordDataDialogVisible && (
                <Suspense>
                    <RecordDataDialog
                        open={recordDataDialogVisible}
                        onDone={addNewRecording}
                        onClose={toggleRecordDataDialog}
                        allClassVars={allClasses}
                        recordingCount={Object.keys(allRecordings).length}
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
