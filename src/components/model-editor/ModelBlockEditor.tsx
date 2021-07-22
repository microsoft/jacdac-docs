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
import FieldDataSet from "../FieldDataSet"

const RecordDataDialog = lazy(() => import("../dialogs/RecordDataDialog"))

const MB_EDITOR_ID = "mb"
const MB_SOURCE_STORAGE_KEY = "model-block-blockly-xml"
const MB_DATA_STORAGE_KEY = "model-block-data-json"

function getRecordingsFromLocalStorage() {
    const dataObj = localStorage.getItem(MB_DATA_STORAGE_KEY)
    if (dataObj == null || dataObj == undefined) return {}
    const modelEditorData = JSON.parse(dataObj)

    // construct new recordings object
    const allRecordings = {}
    for (const id in modelEditorData["recordings"]) {
        const recordings = modelEditorData["recordings"][id]
        allRecordings[id] = recordings.map(recording => {
            return FieldDataSet.createFromFile(recording)
        })
    }
    return allRecordings
}

function getDatasetsFromLocalStorage() {
    return {}
    /*const dataObj = localStorage.getItem(MB_DATA_STORAGE_KEY)
    if (dataObj == null || dataObj == undefined) return {}
    const modelEditorData = JSON.parse(dataObj)
    return MBModel.createFromFile(modelEditorData["datasets"])*/
}

function getModelsFromLocalStorage() {
    return {}
    /*const dataObj = localStorage.getItem(MB_DATA_STORAGE_KEY)
    if (dataObj == null || dataObj == undefined) return {}
    const modelEditorData = JSON.parse(dataObj)
    return MBModel.createFromFile(modelEditorData["model"])*/
}

function ModelBlockEditorWithContext() {
    // store recordings, datasets, and models
    const [allRecordings, setAllRecordings] = useState(
        getRecordingsFromLocalStorage
    ) // dictionary of recording block ids and FieldDataSet arrays
    const [allDatasets, setAllDatasets] = useState(getDatasetsFromLocalStorage) // dictionary of dataset vars and ModelDataset objs
    const [allModels, setAllModels] = useState(getModelsFromLocalStorage) // dictionary of model vars and MBModel objs

    // block context handles hosting blockly
    const { workspace, workspaceJSON, toolboxConfiguration } =
        useContext(BlockContext)

    const [recordDataDialogVisible, setRecordDataDialogVisible] =
        useState<boolean>(false)

    const getWorkspaceClasses = (): string[] => {
        // get updated list of class variables
        const classes = workspace
            .getVariablesOfType(MB_CLASS_VAR_TYPE)
            .map(function (classVar) {
                return classVar.name
            })
        if (classes.length == 0) classes.push("class1")
        return classes
    }
    const toggleRecordDataDialog = () => {
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
            const classVar = workspace.createVariable(
                className,
                MB_CLASS_VAR_TYPE
            )

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

            // Save recording data to block
            const blockParamsField = newRecordingBlock.getField(
                "BLOCK_PARAMS"
            ) as RecordingBlockField
            const recordingBlockParams = {
                parametersVisible: null,
                numSamples: recording.length,
                timestamp: recording[0].startTimestamp,
                inputTypes: recording[0].headers,
            }
            blockParamsField.updateFieldValue(recordingBlockParams)

            newRecordingBlock.initSvg()
            newRecordingBlock.render(false)
            workspace.centerOnBlock(newRecordingBlock.id)

            // Add recording data to list of recordings
            allRecordings[newRecordingBlock.id] = recording
            setAllRecordings(allRecordings)
            updateLocalStorage(allRecordings, null, null)
        }
    }

    const updateLocalStorage = (newRecordings, newDatasets, newModels) => {
        const recordings = newRecordings ? newRecordings : allRecordings
        const datasets = newDatasets ? newDatasets : allDatasets
        const models = newModels ? newModels : allModels

        // convert dataset object to JSON string
        const modelBlocksDataJSON = JSON.stringify({
            recordings: recordings,
            datasets: datasets,
            models: models,
        })
        // save JSON string in local storage
        localStorage.setItem(MB_DATA_STORAGE_KEY, modelBlocksDataJSON)
        console.log("Randi updating saved data for blocks: ", {
            recordings,
            datasets,
            models,
        })
    }

    // run this when workspaceJSON changes
    useEffect(() => {
        visitWorkspace(workspaceJSON, {
            visitBlock: block => {
                console.log(`block ${block.type}`, { block })
                if (block.type == MODEL_BLOCKS + "recording")
                    console.log(`recording data: `, allRecordings[block.id])
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
                        allClassVars={getWorkspaceClasses()}
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
