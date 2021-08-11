import React, { useContext, useEffect, useMemo, useState } from "react"
import { Grid, NoSsr } from "@material-ui/core"
import FileTabs from "../fs/FileTabs"

import BlockContext, { BlockProvider } from "../blockly/BlockContext"
import BlockEditor from "../blockly/BlockEditor"
import Blockly from "blockly"
import modelBlockDsl, { MODEL_BLOCKS } from "./modelblockdsl"
import shadowDsl from "../blockly/dsl/shadowdsl"
import fieldsDsl from "../blockly/dsl/fieldsdsl"
import BlockDiagnostics from "../blockly/BlockDiagnostics"
import { visitWorkspace } from "../../../jacdac-ts/src/dsl/workspacevisitor"

import { WorkspaceFile } from "../../../jacdac-ts/src/dsl/workspacejson"
import { WORKSPACE_FILENAME } from "../blockly/toolbox"
import FileSystemContext, { FileSystemProvider } from "../FileSystemContext"
import ServiceManagerContext from "../ServiceManagerContext"

import Flags from "../../../jacdac-ts/src/jdom/flags"
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
const MB_NEW_FILE_CONTENT = JSON.stringify({
    editor: MB_EDITOR_ID,
    xml: "",
} as WorkspaceFile)

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

function getModelsFromLocalStorage() {
    const dataObj = localStorage.getItem(MB_DATA_STORAGE_KEY)
    if (dataObj == null || dataObj == undefined) return {}
    const modelEditorData = JSON.parse(dataObj)

    // construct new models object
    const allModels = {}
    for (const name in modelEditorData["models"]) {
        const data = modelEditorData["models"][name]
        const model = MBModel.createFromFile(data)
        allModels[name] = model
    }
    return allModels
}

function ModelBlockEditorWithContext() {
    // block context handles hosting blockly
    const { workspace, workspaceJSON, toolboxConfiguration } =
        useContext(BlockContext)

    const { fileSystem } = useContext(FileSystemContext)
    const { fileStorage } = useContext(ServiceManagerContext)

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
                    if (modelName) {
                        mBlocks[modelName] = block
                        // associate block with model
                        const model = allModels[modelName]
                        if (model.blockJSON) {
                            // if block JSON already exists on a model, make sure it lines up
                            // if not, mark the model as untrained
                            if (
                                JSON.stringify(block) !=
                                JSON.stringify(model.blockJSON)
                            ) {
                                model.blockJSON = block
                                model.status = "untrained"
                            }
                        } else model.blockJSON = block
                    }
                }
            },
        })
        return mBlocks
    }
    /*useEffect(() => {
        visitWorkspace(workspaceJSON, {
            visitBlock: block => {
                console.log(`block ${block.type}`, { block })
            },
        })
    }, [workspaceJSON])*/
    const modelBlocks = useMemo(getModelBlocks, [workspaceJSON])
    const dataSetBlocks = useMemo(getDataSetBlocks, [workspaceJSON])

    /* For dialog handling */
    const [recordDataDialogVisible, setRecordDataDialogVisible] =
        useState<boolean>(false)
    const [trainModelDialogVisible, setTrainModelDialogVisible] =
        useState<boolean>(false)
    const toggleRecordDataDialog = () => toggleDialog("recording")
    const toggleTrainModelDialog = () => toggleDialog("model")
    const toggleDialog = (dialog: string) => {
        console.log("Randi toggle dialog ", dialog)
        if (dialog == "recording") {
            const b = !recordDataDialogVisible
            setRecordDataDialogVisible(b)
        } else if (dialog == "model") {
            const b = !trainModelDialogVisible
            setTrainModelDialogVisible(b)
        } // else if edit dataset
    }
    const buttonsWithDialogs = {
        createNewDataSetButton: addNewDataSet,
        createNewRecordingButton: toggleRecordDataDialog,
        createNewClassifierButton: addNewClassifier,
    }
    const updateRecording = (recording: FieldDataSet[], blockId: string) => {
        if (recording && blockId) {
            // Add recording data to list of recordings
            allRecordings[blockId] = recording
            updateLocalStorage(allRecordings, null)
        }
    }
    const closeRecordingModal = (
        recording: FieldDataSet[],
        blockId: string
    ) => {
        // save the new recording
        updateRecording(recording, blockId)

        // close dialog
        toggleRecordDataDialog()
    }

    const assembleDataSet = (datasetName: string) => {
        // setup dataset for training
        const dataset = new MBDataSet(datasetName)
        const datasetBlock = dataSetBlocks[datasetName]

        // grab nested recording blocks and place them in the dataset
        const recordingBlock = datasetBlock?.inputs.filter(
            input => input.name == "LAYER_INPUTS"
        )[0].child
        if (recordingBlock) {
            let className = recordingBlock?.inputs[0].fields?.class_name?.value
            allRecordings[recordingBlock.id].forEach(recording => {
                dataset.addRecording(recording, className, null)
            })
            recordingBlock.children?.forEach(childBlock => {
                className = childBlock?.inputs[0].fields?.class_name?.value
                allRecordings[childBlock.id].forEach(recording => {
                    dataset.addRecording(recording, className, null)
                })
            })
        }

        return dataset
    }
    const openTrainingModal = (clickedBlock: Blockly.Block) => {
        // setup model for training
        const modelName = clickedBlock.getField("CLASSIFIER_NAME").getText()
        let selectedModel: MBModel = allModels[modelName]
        if (!selectedModel) {
            // if the model does not exist in storage, create new model variable
            selectedModel = new MBModel(modelName)
            selectedModel.blockJSON = modelBlocks[modelName]
        }

        // setup dataset for training
        const datasetName = clickedBlock.getField("NN_TRAINING").getText()
        const trainingDataset = assembleDataSet(datasetName)

        // update the model and dataset to pass to the modal
        setCurrentModel(selectedModel)
        setCurrentDataSet(trainingDataset)

        // open the training modal
        toggleTrainModelDialog()
    }
    const updateModel = (model: MBModel) => {
        if (model) {
            // Add trained model to record of allModels
            allModels[model.name] = model
            updateLocalStorage(null, allModels)
        }
    }
    const closeTrainingModal = () => {
        // reset dataset and model that gets passed to dialogs
        setCurrentDataSet(undefined)
        setCurrentModel(undefined)

        // close dialog
        toggleTrainModelDialog()
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

    /* For block button clicks */
    const handleWorkspaceChange = event => {
        if (event.type == Blockly.Events.BLOCK_DELETE) {
            delete allRecordings[event.blockId]
        } else if (event.type == Blockly.Events.CLICK && event.blockId) {
            const clickedBlock = workspace.getBlockById(event.blockId)
            if (clickedBlock.data && clickedBlock.data.startsWith("click")) {
                const command = clickedBlock.data.split(".")[1]
                if (command == "download") {
                    // find the correct recording, dataset, or model to downlaod
                    if (allRecordings[clickedBlock.id]) {
                        // get recording, recording name, and class name
                        const recording = allRecordings[clickedBlock.id]
                        const recordingName = clickedBlock
                            .getField("RECORDING_NAME")
                            .getText()
                        const className = clickedBlock
                            .getField("CLASS_NAME")
                            .getText()
                        downloadRecordings(recording, recordingName, className)
                    } else {
                        // we have a model or dataset
                        if (clickedBlock.type == MODEL_BLOCKS + "dataset") {
                            const datasetName = clickedBlock
                                .getField("DATASET_NAME")
                                .getText()
                            const dataset = assembleDataSet(datasetName)
                            downloadFile(dataset.toCSV(), datasetName, "csv")
                        } else if (clickedBlock.type == MODEL_BLOCKS + "nn") {
                            const modelName = clickedBlock
                                .getField("CLASSIFIER_NAME")
                                .getText()
                            const model: MBModel = allModels[modelName]
                            downloadFile(
                                JSON.stringify(model),
                                modelName,
                                "json"
                            )
                        }
                    }
                } else if (command == "edit") {
                    console.log(
                        "Randi got a edit dataset command ",
                        clickedBlock
                    )
                    //openDataSetModal(clickedBlock)
                } else if (command == "train") {
                    console.log("Randi got a train command ", clickedBlock)
                    openTrainingModal(clickedBlock)
                } else {
                    console.error(
                        "Received unknown block click command ",
                        command
                    )
                }
                // clear the command
                clickedBlock.data = null
            }
        }
    }
    const downloadRecordings = (
        recordings: FieldDataSet[],
        recordingName: string,
        className: string
    ) => {
        const recordingCountHeader = `Number of recordings,${recordings.length}`

        const recordingData: string[] = []
        recordings.forEach(sample => {
            recordingData.push(
                "Recording metadata," +
                    sample.name +
                    "," +
                    sample.rows.length +
                    "," +
                    className
            )
            recordingData.push(sample.toCSV())
        })
        const recordData = recordingData.join("\n")

        const csv: string[] = [recordingCountHeader, recordData]
        downloadFile(csv.join("\n"), recordingName, "csv")
    }
    const downloadFile = (
        content: string,
        fileName: string,
        fileType: string
    ) => {
        fileStorage.saveText(`${fileName}.${fileType}`, content)
    }
    useEffect(() => {
        if (workspace) workspace.addChangeListener(handleWorkspaceChange)

        return () => {
            if (workspace) workspace.removeChangeListener(handleWorkspaceChange)
        }
    }, [workspace, workspaceJSON])

    return (
        <Grid container direction="column" spacing={1}>
            {!!fileSystem && (
                <Grid item xs={12}>
                    <FileTabs
                        newFileName={WORKSPACE_FILENAME}
                        newFileContent={MB_NEW_FILE_CONTENT}
                        hideFiles={true}
                    />
                </Grid>
            )}
            <Grid item xs={12}>
                <BlockEditor editorId={MB_EDITOR_ID} />
                {Flags.diagnostics && <BlockDiagnostics />}
                <Suspense>
                    <ModelBlockDialogs
                        recordDataDialogVisible={recordDataDialogVisible}
                        trainModelDialogVisible={trainModelDialogVisible}
                        onRecordingDone={closeRecordingModal}
                        onModelUpdate={updateModel}
                        onTrainingDone={closeTrainingModal}
                        workspace={workspace}
                        dataset={currentDataSet}
                        model={currentModel}
                    />
                </Suspense>
            </Grid>
            {Flags.diagnostics && <BlockDiagnostics />}
        </Grid>
    )
}

export default function ModelBlockEditor() {
    const dsls = useMemo(() => {
        return [modelBlockDsl, shadowDsl, fieldsDsl]
    }, [])
    return (
        <NoSsr>
            <FileSystemProvider>
                <BlockProvider storageKey={MB_SOURCE_STORAGE_KEY} dsls={dsls}>
                    <ModelBlockEditorWithContext />
                </BlockProvider>
            </FileSystemProvider>
        </NoSsr>
    )
}
