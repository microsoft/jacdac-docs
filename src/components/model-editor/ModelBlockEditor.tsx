import React, { useContext, useEffect, useMemo, useState } from "react"
import { NoSsr } from "@material-ui/core"
import BlockContext, { BlockProvider } from "../blockly/BlockContext"
import BlockEditor from "../blockly/BlockEditor"
import Blockly, { FieldVariable } from "blockly"
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
    // check local storage for blocks
    const dataObj = localStorage.getItem(MB_DATA_STORAGE_KEY)
    if (dataObj == null || dataObj == undefined) return {}
    const modelEditorData = JSON.parse(dataObj)

    // add recordings from local storage
    const rBlocks = {}
    for (const id in modelEditorData["recordings"]) {
        const recordings = modelEditorData["recordings"][id]
        rBlocks[id] = recordings.map(recording => {
            return FieldDataSet.createFromFile(recording)
        })
    }
    return rBlocks
}

async function getModelsFromLocalStorage() {
    const dataObj = localStorage.getItem(MB_DATA_STORAGE_KEY)
    if (dataObj == null || dataObj == undefined) return {}
    const modelEditorData = JSON.parse(dataObj)

    // construct new models object
    const allModels = {}
    for (const name in modelEditorData["models"]) {
        const data = modelEditorData["models"][name]
        const model = await MBModel.createFromFile(data)
        allModels[name] = model
    }
    return allModels
}

function ModelBlockEditorWithContext() {
    // block context handles hosting blockly
    const { workspace, workspaceJSON, toolboxConfiguration } =
        useContext(BlockContext)

    /* For data storage */
    const [currentDataSet, setCurrentDataSet] = useState(undefined)
    const [currentModel, setCurrentModel] = useState(undefined)
    // dictionary of model vars and MBModel objs
    const allModels = useMemo(getModelsFromLocalStorage, [])
    const allRecordings = useMemo(getRecordingsFromLocalStorage, [])
    const updateLocalStorage = (newRecordings, newModels) => {
        const recordings = newRecordings || allRecordings
        const models = newModels || allModels

        // convert dataset object to JSON string
        const modelBlocksDataJSON = JSON.stringify({
            recordings: recordings,
            models: models,
        })
        // save JSON string in local storage
        localStorage.setItem(MB_DATA_STORAGE_KEY, modelBlocksDataJSON)
        console.log("Randi updating saved data for blocks: ", {
            recordings,
            models,
        })
    }

    /* For workspace changes */
    const getDataSetBlocks = () => {
        const dBlocks = {}
        visitWorkspace(workspaceJSON, {
            visitBlock: block => {
                // Collect dataset blocks
                if (block.type == MODEL_BLOCKS + "dataset") {
                    const datasetName =
                        block.inputs[0].fields["dataset_name"].value?.toString()
                    if (datasetName) dBlocks[datasetName] = block
                }
            },
        })
        return dBlocks
    }
    const getModelBlocks = () => {
        const mBlocks = {}
        visitWorkspace(workspaceJSON, {
            visitBlock: block => {
                // Collect model blocks
                if (block.type == MODEL_BLOCKS + "nn") {
                    const modelName =
                        block.inputs[0].fields[
                            "classifier_name"
                        ].value?.toString()
                    if (modelName) mBlocks[modelName] = block
                }
            },
        })
        return mBlocks
    }
    useEffect(() => {
        visitWorkspace(workspaceJSON, {
            visitBlock: block => {
                console.log(`block ${block.type}`, { block })
            },
        })
    }, [workspaceJSON])
    const modelBlocks = useMemo(getModelBlocks, [workspaceJSON])
    const dataSetBlocks = useMemo(getDataSetBlocks, [workspaceJSON])

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
    const onCloseRecordingDialog = (
        recording: FieldDataSet[],
        blockId: string
    ) => {
        if (recording && blockId) {
            // Add recording data to list of recordings
            allRecordings[blockId] = recording
            updateLocalStorage(allRecordings, null)
        }
        // close dialog
        toggleRecordDataDialog()
    }
    const onModelTrained = (model: MBModel) => {
        if (model) {
            // Add trained model to record of allModels
            allModels[model.name] = model
            updateLocalStorage(null, allModels)
        }
    }
    const onCloseModelDialog = () => {
        // reset dataset and model that gets passed to dialogs
        setCurrentDataSet(undefined)
        setCurrentModel(undefined)

        // close dialog
        toggleModelDialog()
    }
    const handleOpenTrainingModal = (
        clickedBlock: Blockly.Block
    ): { model: MBModel; dataset: MBDataSet } => {
        // setup model for training
        const modelName = clickedBlock.getField("CLASSIFIER_NAME").getText()
        let selectedModel: MBModel = allModels[modelName]
        if (selectedModel) {
            // check if model has changed since last training
            if (selectedModel.blockJSON !== modelBlocks[modelName]) {
                selectedModel.status = "untrained"
                selectedModel.blockJSON = modelBlocks[modelName]
            }
        } else {
            selectedModel = new MBModel(modelName)
            // grab the block json
            selectedModel.blockJSON = modelBlocks[modelName]
        }

        // setup dataset for training
        const datasetName = clickedBlock.getField("NN_TRAINING").getText()
        const trainingDataset = new MBDataSet(datasetName)
        const datasetBlock = dataSetBlocks[datasetName]

        // grab nested recording blocks and place them in the dataset
        const recordingBlock = datasetBlock?.inputs.filter(
            input => input.name == "DATASET_RECORDINGS"
        )[0].child
        if (recordingBlock) {
            let className = recordingBlock?.inputs[0].fields?.class_name?.value
            allRecordings[recordingBlock.id].forEach(recording => {
                trainingDataset.addRecording(recording, className, null)
            })
            recordingBlock.children?.forEach(childBlock => {
                className = childBlock?.inputs[0].fields?.class_name?.value
                allRecordings[childBlock.id].forEach(recording => {
                    trainingDataset.addRecording(recording, className, null)
                })
            })
        }
        return { model: selectedModel, dataset: trainingDataset }
    }

    /* For button callbacks */
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

    const handleWorkspaceChange = event => {
        if (event.type == Blockly.Events.BLOCK_DELETE) {
            delete allRecordings[event.blockId]
        }
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
                    const { model, dataset } =
                        handleOpenTrainingModal(clickedBlock)
                    setCurrentModel(model)
                    setCurrentDataSet(dataset)

                    // open the training modal
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
        if (workspace) workspace.addChangeListener(handleWorkspaceChange)

        return () => {
            if (workspace) workspace.removeChangeListener(handleWorkspaceChange)
        }
    }, [workspace, workspaceJSON])

    return (
        <>
            <BlockEditor editorId={MB_EDITOR_ID} />
            {Flags.diagnostics && <BlockDiagnostics />}
            <Suspense>
                <ModelBlockDialogs
                    recordDataDialogVisible={recordDataDialogVisible}
                    trainModelDialogVisible={trainModelDialogVisible}
                    onRecordingDone={onCloseRecordingDialog}
                    onModelUpdate={onModelTrained}
                    onTrainingDone={onCloseModelDialog}
                    workspace={workspace}
                    dataset={currentDataSet}
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
