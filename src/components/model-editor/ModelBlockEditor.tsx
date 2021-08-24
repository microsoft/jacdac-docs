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

import {
    BlockJSON,
    WorkspaceFile,
} from "../../../jacdac-ts/src/dsl/workspacejson"
import { WORKSPACE_FILENAME } from "../blockly/toolbox"
import FileSystemContext, { FileSystemProvider } from "../FileSystemContext"
import ServiceManagerContext from "../ServiceManagerContext"
import { resolveBlockServices } from "../blockly/WorkspaceContext"

import Flags from "../../../jacdac-ts/src/jdom/flags"
import Suspense from "../ui/Suspense"
import { visitToolbox, MB_WARNINGS_CATEGORY } from "../blockly/toolbox"
import FieldDataSet from "../FieldDataSet"
import ModelBlockDialogs, {
    addNewDataSet,
    addNewClassifier,
} from "../dialogs/mb/ModelBlockDialogs"
import MBModel, { validModelJSON } from "./MBModel"
import MBDataSet, { validDataSetJSON } from "./MBDataSet"
import { prepareModel, prepareDataSet } from "./TrainModel"
import ExpandModelBlockField from "../blockly/fields/mb/ExpandModelBlockField"

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
    const allModels = {}
    const allDataSets = {}
    const allRecordings = useMemo(getRecordingsFromLocalStorage, [])
    const updateLocalStorage = newRecordings => {
        const recordings = newRecordings || allRecordings

        // convert dataset object to JSON string
        const modelBlocksDataJSON = JSON.stringify({
            recordings: recordings,
        })
        // save JSON string in local storage
        localStorage.setItem(MB_DATA_STORAGE_KEY, modelBlocksDataJSON)
    }

    /* For workspace changes */
    const modelBlocks = {}
    const dataSetBlocks = {}
    const updateDataSetBlocks = (block: BlockJSON) => {
        const dataSetName =
            block.inputs[0].fields["dataset_name"].value?.toString()
        if (dataSetName) {
            if (dataSetName in dataSetBlocks) {
                setWarning(
                    workspace,
                    block.id,
                    "Two dataset blocks cannot have the same name"
                )
                setWarning(
                    workspace,
                    dataSetBlocks[dataSetName].id,
                    "Two dataset blocks cannot have the same name"
                )
                delete dataSetBlocks[dataSetName]
            } else dataSetBlocks[dataSetName] = block
        }
    }
    const updateModelBlocks = (block: BlockJSON) => {
        const modelName =
            block.inputs[0].fields["classifier_name"].value?.toString()
        if (modelName) {
            if (modelName in modelBlocks) {
                setWarning(
                    workspace,
                    block.id,
                    "Two classifier blocks cannot have the same name"
                )
                setWarning(
                    workspace,
                    modelBlocks[modelName].id,
                    "Two model blocks cannot have the same name"
                )
                delete modelBlocks[modelName]
            } else modelBlocks[modelName] = block
        }
    }
    // clear warnings, collect datasets and models
    useEffect(() => {
        visitWorkspace(workspaceJSON, {
            visitBlock: block => {
                // clear warnings on block
                setWarning(workspace, block.id, undefined)

                // collect dataset blocks
                if (block.type == MODEL_BLOCKS + "dataset") {
                    updateDataSetBlocks(block)
                }

                // collect model blocks
                if (block.type == MODEL_BLOCKS + "nn") {
                    updateModelBlocks(block)
                }
            },
        })
    }, [workspace, workspaceJSON, modelBlocks, dataSetBlocks])

    const assembleDataSet = (dataSetName: string) => {
        // associate block with dataset
        const dataSet: MBDataSet =
            allDataSets[dataSetName] || new MBDataSet(dataSetName)
        const dataSetBlock = dataSetBlocks[dataSetName]

        // grab nested recording blocks and place them in the dataset
        const recordingBlock = dataSetBlock?.inputs.filter(
            input => input.name == "LAYER_INPUTS"
        )[0].child
        if (recordingBlock) {
            let className = recordingBlock?.inputs[0].fields?.class_name?.value
            allRecordings[recordingBlock.id].forEach(recording => {
                dataSet.addRecording(recording, className, null)
            })
            recordingBlock.children?.forEach(childBlock => {
                className = childBlock?.inputs[0].fields?.class_name?.value
                allRecordings[childBlock.id].forEach(recording => {
                    dataSet.addRecording(recording, className, null)
                })
            })
        }

        // store dataset in memory
        allDataSets[dataSetName] = dataSet

        return dataSet
    }
    const assembleModel = (modelName: string) => {
        // associate block with model
        const model: MBModel = allModels[modelName] || new MBModel(modelName)
        const modelBlock = modelBlocks[modelName]

        // if this model already existed from before
        if (model.blockJSON) {
            // make sure its contents line up with what's saved
            // if not, mark the model as uncompiled / empty
            if (JSON.stringify(modelBlock) != JSON.stringify(model.blockJSON)) {
                model.parseBlockJSON = modelBlock
                model.status = "empty"
            }
        } else {
            model.parseBlockJSON = modelBlock
        }

        // store model in memory
        allModels[modelName] = model

        return model
    }
    const addParametersToDataSetBlock = (dataSet: MBDataSet) => {
        const dataSetName = dataSet.name
        const inputTypes = dataSet.inputTypes

        const dataSetBlock = workspace.getBlockById(
            dataSetBlocks[dataSetName].id
        )

        // update the parameters of the dataset
        const paramField = dataSetBlock.getField(
            "EXPAND_BUTTON"
        ) as ExpandModelBlockField
        paramField.updateFieldValue({
            numSamples: dataSet.totalRecordings,
            inputClasses: dataSet.labels,
            inputTypes: inputTypes,
        })
    }
    const addParametersToModelBlock = (model: MBModel) => {
        const modelName = model.name
        const totalStats = model.modelStats.total
        const layerStats = model.modelStats.layers

        // update field parameters for each block in model
        const modelBlock = workspace.getBlockById(modelBlocks[modelName].id)

        if (modelBlock) {
            const paramField = modelBlock.getField(
                "EXPAND_BUTTON"
            ) as ExpandModelBlockField
            paramField.updateFieldValue({
                numLayers: layerStats.length,
                inputShape: totalStats.inputShape,
                totalSize: totalStats.codeBytes + totalStats.weightBytes,
                runTimeInCycles: totalStats.optimizedCycles,
            })

            // go through layers
            model.layerJSON.forEach((layer, idx) => {
                const layerBlock = workspace.getBlockById(layer.id)

                if (layerBlock) {
                    const layerParamField = layerBlock.getField(
                        "EXPAND_BUTTON"
                    ) as ExpandModelBlockField
                    layerParamField.updateFieldValue({
                        outputShape: layerStats[idx].outputShape,
                        totalSize:
                            layerStats[idx].codeBytes +
                            layerStats[idx].weightBytes,
                        runTimeInCycles: layerStats[idx].optimizedCycles,
                    })
                }
            })
        } else
            console.error(
                "Could not locate block " +
                    { modelName: modelName, id: modelBlocks[modelName].id }
            )
    }

    useEffect(() => {
        // compile datasets and set warnings if necessary
        for (const dataSetName in dataSetBlocks) {
            const dataSet: MBDataSet = assembleDataSet(dataSetName)
            const dataSetWarnings = validDataSetJSON(dataSetBlocks[dataSetName])
            if (Object.keys(dataSetWarnings).length > 0) {
                Object.keys(dataSetWarnings).forEach(blockId => {
                    setWarning(workspace, blockId, dataSetWarnings[blockId])
                })
            } else {
                prepareDataSet(dataSet)
                addParametersToDataSetBlock(dataSet)
            }
        }

        // compile all models and set warnings if necessary
        for (const modelName in modelBlocks) {
            // grab the MBModel associated with a model name
            const model: MBModel = assembleModel(modelName)

            // grab the dataset that will be used to train the mbmodel
            const dataSetName =
                modelBlocks[modelName].inputs[1].fields[
                    "nn_training"
                ].value?.toString()
            const trainingDataSet = allDataSets[dataSetName]
            const dataSetWarnings = validDataSetJSON(dataSetBlocks[dataSetName])
            if (!Object.keys(dataSetWarnings).length) {
                // make sure the model (defined by the workspaceJSON) is valid
                const modelWarnings = validModelJSON(model.blockJSON)

                // if there are warnings, assign warnings to each block in the model
                if (Object.keys(modelWarnings).length > 0) {
                    Object.keys(modelWarnings).forEach(blockId => {
                        setWarning(workspace, blockId, modelWarnings[blockId])
                    })
                } else {
                    // there are no warnings, compile the model
                    prepareModel(
                        model,
                        trainingDataSet,
                        addParametersToModelBlock
                    )
                }
            }
        }
    }, [workspace, workspaceJSON])

    /* For checking model and dataset composition */
    const setWarning = (workspace, blockId: string, warningText: string) => {
        const block = workspace.getBlockById(blockId)
        const blockServices = resolveBlockServices(block)
        if (blockServices)
            blockServices.setWarning(MB_WARNINGS_CATEGORY, warningText)
    }

    /* For dialog handling */
    const [recordDataDialogVisible, setRecordDataDialogVisible] =
        useState<boolean>(false)
    const [trainModelDialogVisible, setTrainModelDialogVisible] =
        useState<boolean>(false)
    const toggleRecordDataDialog = () => toggleDialog("recording")
    const toggleTrainModelDialog = () => toggleDialog("model")
    const toggleDialog = (dialog: string) => {
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
            updateLocalStorage(allRecordings)
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

    const openTrainingModal = (clickedBlock: Blockly.Block) => {
        // setup model for training
        const modelName = clickedBlock.getField("CLASSIFIER_NAME").getText()
        const selectedModel: MBModel = allModels[modelName]

        // setup dataset for training
        const dataSetName = clickedBlock.getField("NN_TRAINING").getText()
        const selectedDataset = allDataSets[dataSetName]
        const dataSetWarnings = validDataSetJSON(dataSetBlocks[dataSetName])
        if (Object.keys(dataSetWarnings).length) {
            Blockly.alert(
                "This model cannot be trained. Address the warnings on the dataset definition block."
            )
        } else {
            const modelWarnings = validModelJSON(modelBlocks[modelName])
            if (Object.keys(modelWarnings).length) {
                Blockly.alert(
                    "This model cannot be trained. Address the warnings on model architecture block."
                )
            } else {
                // update the model and dataset to pass to the modal
                setCurrentModel(selectedModel)
                setCurrentDataSet(selectedDataset)

                // open the training modal
                toggleTrainModelDialog()
            }
        }
    }
    const updateModel = (model: MBModel) => {
        if (model) {
            // Add trained model to record of allModels
            allModels[model.name] = model
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
                            const dataSetName = clickedBlock
                                .getField("DATASET_NAME")
                                .getText()
                            const dataSet = allDataSets[dataSetName]
                            downloadFile(dataSet.toCSV(), dataSetName, "csv")
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
                    // Randi TODO implement this dialog
                    console.log("Got edit dataset command ", clickedBlock)
                    //openDataSetModal(clickedBlock)
                } else if (command == "train") {
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
