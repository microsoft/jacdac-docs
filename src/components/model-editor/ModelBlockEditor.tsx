import React, { useContext, useEffect, useMemo, useState } from "react"
import { NoSsr } from "@material-ui/core"
import BlockContext, { BlockProvider } from "../blockly/BlockContext"
import BlockEditor from "../blockly/BlockEditor"
import Blockly from "blockly"
import shadowDsl from "../blockly/dsl/shadowdsl"
import modelBlockDsl, { MODEL_BLOCKS } from "./modelblockdsl"
import fieldsDsl from "../blockly/dsl/fieldsdsl"
import Flags from "../../../jacdac-ts/src/jdom/flags"
import BlockDiagnostics from "../blockly/BlockDiagnostics"
import { visitWorkspace } from "../../../jacdac-ts/src/dsl/workspacevisitor"

import Suspense from "../ui/Suspense"
import { visitToolbox } from "../blockly/toolbox"
import FieldDataSet from "../FieldDataSet"
import ModelBlockDialogs, {
    addNewDataSet,
    addNewClassifier,
} from "../dialogs/mb/ModelBlockDialogs"
import MBModel from "./MBModel"
import MBDataSet from "./MBDataSet"

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

function getDataSetsFromLocalStorage() {
    return []
    /*const dataObj = localStorage.getItem(MB_DATA_STORAGE_KEY)
    if (dataObj == null || dataObj == undefined) return {}
    const modelEditorData = JSON.parse(dataObj)
    return MBModel.createFromFile(modelEditorData["datasets"])*/
}

function getModelsFromLocalStorage() {
    return []
    /*const dataObj = localStorage.getItem(MB_DATA_STORAGE_KEY)
    if (dataObj == null || dataObj == undefined) return {}
    const modelEditorData = JSON.parse(dataObj)
    return MBModel.createFromFile(modelEditorData["model"])*/
}

function ModelBlockEditorWithContext() {
    // block context handles hosting blockly
    const { workspace, workspaceJSON, toolboxConfiguration } =
        useContext(BlockContext)

    /* For data storage */
    const [currentDataset, setCurrentDataset] = useState(undefined)
    const [currentModel, setCurrentModel] = useState(undefined)
    // dictionary of recording block ids and FieldDataSet arrays
    const allRecordings = useMemo(getRecordingsFromLocalStorage, [])
    // dictionary of dataset vars and MBDataSet objs
    const allDataSets = useMemo(getDataSetsFromLocalStorage, [])
    // dictionary of model vars and MBModel objs
    const allModels = useMemo(getModelsFromLocalStorage, [])
    const updateLocalStorage = (newRecordings, newDataSets, newModels) => {
        const recordings = newRecordings || allRecordings
        const datasets = newDataSets || allDataSets
        const models = newModels || allModels

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

    /* For dialog handling */
    const [recordDataDialogVisible, setRecordDataDialogVisible] =
        useState<boolean>(false)
    const [trainModelDialogVisible, setTrainModelDialogVisible] =
        useState<boolean>(false)
    const toggleRecordDataDialog = () => toggleDialog("recording")
    const toggleModelDialog = () => toggleDialog("model")
    const toggleDialog = (dialog: string) => {
        console.log("Randi toggle dialog ", dialog)
        if (dialog == "recording") {
            const b = !recordDataDialogVisible
            setRecordDataDialogVisible(b)
        } else if (dialog == "model") {
            const b = !trainModelDialogVisible
            setTrainModelDialogVisible(b)
        } // else if split dataset
    }
    const buttonsWithDialogs = {
        createNewDataSetButton: addNewDataSet,
        createNewRecordingButton: toggleRecordDataDialog,
        createNewClassifierButton: addNewClassifier,
    }
    // set button callbacks
    useEffect(() => {
        // register callbacks buttons with custom dialogs
        console.log("Randi toolbox config ", toolboxConfiguration)
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
    const onCloseRecordingDialog = (
        recording: FieldDataSet[],
        blockId: string
    ) => {
        if (recording && blockId) {
            // Add recording data to list of recordings
            allRecordings[blockId] = recording
            updateLocalStorage(allRecordings, null, null)
        }
        // close dialog
        toggleRecordDataDialog()
    }
    const onCloseModelDialog = (model: MBModel) => {
        if (model) {
            // Add trained model to record of allModels
            allModels[model.name] = model
            updateLocalStorage(null, null, allModels)
        }
        // reset dataset and model props

        // close dialog
        toggleModelDialog()
    }
    const handleBlockClick = event => {
        if (event.type == Blockly.Events.CLICK && event.blockId) {
            const clickedBlock = workspace.getBlockById(event.blockId)
            if (clickedBlock.data && clickedBlock.data.startsWith("click")) {
                const command = clickedBlock.data.split(".")[1]
                if (command == "download") {
                    console.log("Randi got a download command ", clickedBlock)
                } else if (command == "split") {
                    console.log("Randi got a split command ", clickedBlock)
                } else if (command == "train") {
                    console.log("Randi got a train command ", clickedBlock)
                    // get classifier name and dataset to update props to model block dialog
                    const modelName = clickedBlock
                        .getField("CLASSIFIER_NAME")
                        .getText()
                    const datasetName = clickedBlock
                        .getField("NN_TRAINING")
                        .getText()

                    // Randi TODO ensure that allDataset and allModels is always up to date at this point
                    const createdModel =
                        allModels[modelName] || new MBModel(modelName)
                    const createdDataSet =
                        allDataSets[datasetName] || new MBDataSet(datasetName)
                    setCurrentModel(createdModel)
                    setCurrentDataset(createdDataSet)

                    toggleModelDialog()
                } else if (command == "record") {
                    console.log(
                        "Randi got an edit recording command ",
                        clickedBlock
                    )
                    toggleRecordDataDialog()
                } else {
                    console.error(
                        "Received unknown block click command ",
                        command
                    )
                }
                clickedBlock.data = null
            }
        }
    }
    useEffect(() => {
        console.log("Randi ", workspace)
        if (workspace) workspace.addChangeListener(handleBlockClick)

        return () => {
            if (workspace) workspace.removeChangeListener(handleBlockClick)
        }
    }, [workspace])

    /* For checking blocks and assigning warnings */
    // run this when workspaceJSON changes
    useEffect(() => {
        visitWorkspace(workspaceJSON, {
            visitBlock: block => {
                // Collect data for dataset blocks
                // Randi TODO remove from allRecordings anything that is no longer present on the workspace
                if (block.type == MODEL_BLOCKS + "dataset") {
                    console.log(`Randi dataset block: `, {
                        name: block.inputs[0].fields["dataset_name"],
                        id: block.id,
                        block: block,
                    })
                    // get all nested recordings
                    const recordingBlock = block.inputs.filter(
                        input => input.name == "DATASET_RECORDINGS"
                    )[0].child
                    if (recordingBlock) {
                        console.log(`Randi recording data: `, {
                            recording: allRecordings[recordingBlock.id],
                            block: recordingBlock,
                        })
                        recordingBlock.children?.forEach(childBlock =>
                            console.log(`Randi recording data: `, {
                                recording: allRecordings[childBlock.id],
                                block: childBlock,
                            })
                        )
                    }
                }
                // Collect layers for neural network blocks
                else if (block.type == MODEL_BLOCKS + "nn") {
                    // Randi TODO delete recordings that are no longer present on the workspace
                    console.log(`Randi neural network block: `, {
                        name: block.inputs[0].fields["classifier_name"],
                        id: block.id,
                        block: block,
                    })
                    // get all nested layers
                    const layerBlock = block?.inputs.filter(
                        input => input.name == "NN_LAYERS"
                    )[0].child
                    if (layerBlock) {
                        console.log(`Randi layer data: `, { block: layerBlock })
                        layerBlock.children?.forEach(childBlock =>
                            console.log(`Randi layer data: `, {
                                block: childBlock,
                            })
                        )
                    }
                } else {
                    console.log(`block ${block.type}`, { block })
                }
            },
        })
    }, [workspaceJSON])

    return (
        <>
            <BlockEditor editorId={MB_EDITOR_ID} />
            {Flags.diagnostics && <BlockDiagnostics />}
            <Suspense>
                <ModelBlockDialogs
                    recordDataDialogVisible={recordDataDialogVisible}
                    trainModelDialogVisible={trainModelDialogVisible}
                    onRecordingDone={onCloseRecordingDialog}
                    onTrainingDone={onCloseModelDialog}
                    workspace={workspace}
                    dataset={currentDataset}
                    model={currentModel}
                />
            </Suspense>
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
