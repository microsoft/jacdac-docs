import React, { lazy, useEffect, useContext, useState, useMemo } from "react"
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
} from "@material-ui/core"
import Trend from "../../Trend"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import NavigateBackIcon from "@material-ui/icons/NavigateBefore"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import DownloadIcon from "@material-ui/icons/GetApp"
import IconButtonWithTooltip from "../../ui/IconButtonWithTooltip"
import Suspense from "../../ui/Suspense"

import ServiceManagerContext from "../../ServiceManagerContext"

import {
    trainRequest,
    predictRequest,
} from "../../blockly/dsl/workers/tf.proxy"
import Blockly, { BlockSvg, FieldVariable, WorkspaceSvg } from "blockly"

import type {
    TFModelTrainRequest,
    TFModelTrainResponse,
    TFModelPredictRequest,
    TFModelPredictResponse,
} from "../../../workers/tf/dist/node_modules/tf.worker"
import workerProxy from "../../blockly/dsl/workers/proxy"

import JacdacContext, { JacdacContextProps } from "../../../jacdac/Context"
import { arrayConcatMany } from "../../../../jacdac-ts/src/jdom/utils"
import { JDRegister } from "../../../../jacdac-ts/src/jdom/register"
import { isSensor } from "../../../../jacdac-ts/src/jdom/spec"
import { JDBus } from "../../../../jacdac-ts/src/jdom/bus"
import { REPORT_UPDATE } from "../../../../jacdac-ts/src/jdom/constants"
import { throttle } from "../../../../jacdac-ts/src/jdom/utils"

import MBModel from "../../model-editor/MBModel"
import MBDataSet, { arraysEqual } from "../../model-editor/MBDataSet"
import FieldDataSet from "../../FieldDataSet"
import ReadingFieldGrid from "../../ReadingFieldGrid"
import useChange from "../../../jacdac/useChange"

import { PointerBoundary } from "../../blockly/fields/PointerBoundary"
import { MODEL_BLOCKS } from "../../model-editor/modelblockdsl"
import { useId } from "react-use-id-hook"
import { resolveBlockServices } from "../../blockly/WorkspaceContext"

const LossAccChart = lazy(
    () => import("../../model-editor/components/LossAccChart")
)
const ModelSummaryDropdown = lazy(
    () => import("../../model-editor/components/ModelSummaryDropdown")
)

const LIVE_HORIZON = 100

function createDataSet(
    bus: JDBus,
    registers: JDRegister[],
    name: string,
    palette: string[]
) {
    const fields = arrayConcatMany(registers.map(reg => reg.fields))
    const colors = fields.map((f, i) => palette[i % palette.length])
    const set = new FieldDataSet(bus, name, fields, colors)
    set.maxRows = LIVE_HORIZON + 4

    return set
}

export default function TrainModelDialog(props: {
    classes: any
    chartPalette: string[]
    open: boolean
    onModelUpdate: (model: MBModel, blockId: string) => void
    onDone: (modal: string) => void
    dataset: MBDataSet
    model: MBModel
    trainedModelCount: number
    workspace: WorkspaceSvg
}) {
    const {
        classes,
        chartPalette,
        open,
        onModelUpdate,
        onDone,
        dataset,
        model,
        trainedModelCount,
        workspace,
    } = props

    const chartProps = {
        CHART_WIDTH: 300,
        CHART_HEIGHT: 300,
        MARK_SIZE: 75,
        TOOLTIP_NUM_FORMAT: "0.2f",
        PALETTE: chartPalette,
    }
    const { fileStorage } = useContext(ServiceManagerContext)

    const [dialogType, setDialogType] = useState<"trainModel" | "testModel">(
        "trainModel"
    )

    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const readingRegisters = useChange(bus, bus =>
        arrayConcatMany(
            bus.devices().map(device =>
                device
                    .services()
                    .filter(srv => isSensor(srv.specification))
                    .map(srv => srv.readingRegister)
            )
        )
    )

    useEffect(() => {
        prepareTestingLogs()
    }, [dataset, model])

    /* For training model */
    const [trainEnabled, setTrainEnabled] = useState(model.status !== "empty")
    // for loss/acc graph
    const trainingLossLog = useMemo(() => {
        return []
    }, [])
    const trainingAccLog = useMemo(() => {
        return []
    }, [])
    const [logTimestamp, setLogTimestamp] = useState(0)

    const trainTFModel = async () => {
        model.status = "training"
        model.inputTypes = dataset.inputTypes
        setTrainEnabled(false)

        // setup worker
        // subscriber gets messages about training while training is happening
        const stopWorkerSubscribe = workerProxy("tf").subscribe(
            "message",
            (msg: any) => {
                const epoch = trainingLossLog.length / 2 + 1
                trainingLossLog.push({
                    epoch: epoch,
                    loss: msg.data.loss,
                    dataset: "training",
                })
                trainingLossLog.push({
                    epoch: epoch,
                    loss: msg.data.val_loss,
                    dataset: "validation",
                })
                trainingAccLog.push({
                    epoch: epoch,
                    acc: msg.data.acc,
                    dataset: "training",
                })
                trainingAccLog.push({
                    epoch: epoch,
                    acc: msg.data.val_acc,
                    dataset: "validation",
                })
                setLogTimestamp(Date.now())
            }
        )

        const trainMsg = {
            worker: "tf",
            type: "train",
            data: {
                xData: dataset.xs,
                yData: dataset.ys,
                model: model.toJSON(),
                trainingParams: model.trainingParams,
            },
        } as TFModelTrainRequest
        const trainResult = (await trainRequest(
            trainMsg
        )) as TFModelTrainResponse

        // stop subscriber after training
        stopWorkerSubscribe()

        if (trainResult && trainResult.data) {
            // handle result from training
            const trainingHistory = trainResult.data.trainingLogs
            model.weightData = trainResult.data.modelWeights
            model.armModel = trainResult.data.armModel

            // Update model status
            model.status = "trained"
            model.trainingAcc = trainingHistory[trainingHistory.length - 1]
            addNewTrainedModelBlock()
            setTrainEnabled(true)
        } else model.status = "untrained"
    }
    const addNewTrainedModelBlock = () => {
        // Create new trained model block
        const trainedModelName = model.name + "." + trainedModelCount
        const dataSetName = dataset.name

        const newBlock = Blockly.Xml.domToBlock(
            Blockly.Xml.textToDom(
                `<block type="model_block_trained_nn"><field name="TRAINED_MODEL_NAME">${trainedModelName}</field><field name="MODEL_TEST_SET" variabletype="ModelBlockDataSet">${dataSetName}</field><field name="SELECTED_CHART">model summary</field><field name="TRAINED_MODEL_PARAMS">{}</field></block>`
            ),
            workspace
        )

        onModelUpdate(model, newBlock.id)
    }

    /* For testing trained model */
    const prepareTestingLogs = () => {
        // Create space to hold prediction data
        const livePredictionDataSet = {
            name: "live-predictions",
            rows: [],
            headers: model.labels,
            units: model.labels.map(() => {
                return "/"
            }),
            colors: model.labels.map(
                (label, idx) => chartPalette[idx % chartPalette.length]
            ),
        }
        setLivePredictions({
            predictionData: FieldDataSet.createFromFile(livePredictionDataSet),
            topClass: model.labels[0],
        })
    }

    /* For predicting with model */
    const [liveRecording, setLiveRecording] = useState<FieldDataSet>(undefined)
    const [, setLiveDataTimestamp] = useState(0)

    const [registerIdsChecked, setRegisterIdsChecked] = useState<string[]>([])
    const [livePredictions, setLivePredictions] = useState({
        predictionData: undefined,
        topClass: "",
    })

    const recordingRegisters = readingRegisters.filter(
        reg => registerIdsChecked.indexOf(reg.id) > -1
    )
    const liveRecordingMatchesModel = () => {
        if (liveRecording) {
            let matchingInputs = true
            if (model.inputTypes) {
                if (!arraysEqual(model.inputTypes, liveRecording.headers)) {
                    matchingInputs = false
                }
            }
            return matchingInputs
        }
        return false
    }
    const predictionEnabled =
        !!recordingRegisters?.length &&
        liveRecordingMatchesModel() &&
        model.status == "trained"

    const handleRegisterCheck = (reg: JDRegister) => {
        const i = registerIdsChecked.indexOf(reg.id)
        if (i > -1) registerIdsChecked.splice(i, 1)
        else registerIdsChecked.push(reg.id)

        registerIdsChecked.sort()
        setRegisterIdsChecked([...registerIdsChecked])
        setLiveRecording(newRecording(registerIdsChecked))
    }

    const newRecording = (registerIds: string[]) =>
        registerIds.length
            ? createDataSet(
                  bus,
                  readingRegisters.filter(
                      reg => registerIds.indexOf(reg.id) > -1
                  ),
                  `liveData`,
                  chartPalette
              )
            : undefined

    const updateLiveData = () => {
        setLiveRecording(liveRecording)
        setLiveDataTimestamp(bus.timestamp)
        if (model.status == "trained") updatePrediction()
    }
    const throttleUpdate = throttle(() => updateLiveData(), 30)
    // interval add data entry
    const addRow = (values?: number[]) => {
        if (liveRecording) {
            liveRecording.addRow(values)
            throttleUpdate()
        }
    }
    const startStreamingRegisters = () => {
        console.log(`start streaming`)
        const streamers = recordingRegisters?.map(reg =>
            reg.subscribe(REPORT_UPDATE, () => {})
        )
        return () => {
            console.log(`stop streaming`)
            streamers.map(streamer => streamer())
        }
    }
    const updatePrediction = async () => {
        // Use the model to do inference on a data point the model hasn't seen before:
        if (!predictionEnabled) return

        let data = liveRecording.data()
        data = data.slice(data.length - model.inputShape[0])
        const liveInput = [data]

        let topLabel = model.labels[0]

        if (data && data.length >= model.inputShape[0]) {
            const liveOutput = []

            // Get probability values from model
            const predictMsg = {
                worker: "tf",
                type: "predict",
                data: {
                    zData: liveInput,
                    model: model.toJSON(),
                },
            } as TFModelPredictRequest
            const predResult = (await predictRequest(
                predictMsg
            )) as TFModelPredictResponse

            // Save probability for each class in model object
            const prediction = predResult.data.predictAll[0]
            model.labels.forEach(label => {
                liveOutput.push(prediction[label])

                // update which class has highest confidence
                if (liveOutput[label] > liveOutput[topLabel]) topLabel = label
            })

            livePredictions.predictionData.addData(liveOutput)
            livePredictions.topClass = topLabel
        }
    }

    useEffect(() => {
        const interval = setInterval(() => addRow(), model.inputInterval)
        const stopStreaming = startStreamingRegisters()

        return () => {
            clearInterval(interval)
            stopStreaming()
        }
    }, [registerIdsChecked])

    /* For interface controls */
    const resetInputs = () => {}
    const handleCancel = () => {
        // reset the user inputs
        resetInputs()
        // close the modal
        onDone("model")
    }
    const handleBack = () => {
        // turn off predictions
        setRegisterIdsChecked([])

        // go to the previous page
        setDialogType("trainModel")
    }
    const handleNext = () => {
        // go to the next page
        setDialogType("testModel")
    }
    const handleDownloadModel = () => {
        // TODO also download arm model (as a zip file?)
        fileStorage.saveText(`${model.name}.json`, JSON.stringify(model))
    }
    const [sensorsExpanded, setSensorsExpanded] = React.useState<
        string | false
    >(false)
    const handleExpandedSensorsChange =
        (panel: string) =>
        (event: React.ChangeEvent<unknown>, isExpanded: boolean) => {
            setSensorsExpanded(isExpanded ? panel : false)
        }

    if (dialogType == "trainModel")
        return (
            <PointerBoundary>
                <Dialog
                    open={open}
                    onClose={handleCancel}
                    fullWidth={true}
                    maxWidth={"md"}
                >
                    <DialogContent>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <h3>
                                    Current Model
                                    <IconButtonWithTooltip
                                        onClick={handleDownloadModel}
                                        title="Download all recording data"
                                        disabled={dataset.totalRecordings == 0}
                                    >
                                        <DownloadIcon />
                                    </IconButtonWithTooltip>
                                </h3>
                                <Suspense>
                                    <ModelSummaryDropdown
                                        reactStyle={classes}
                                        dataset={dataset}
                                        model={model}
                                    />
                                </Suspense>
                                <div className={classes.buttons}>
                                    <Button
                                        size="large"
                                        variant="contained"
                                        color={"primary"}
                                        aria-label="start training model"
                                        title={
                                            trainEnabled
                                                ? "Press to start training machine learning model"
                                                : "You must have at least two classes to train a model. Go back to first tab."
                                        }
                                        onClick={trainTFModel}
                                        startIcon={<PlayArrowIcon />}
                                        disabled={!trainEnabled}
                                        style={{ marginTop: 16 }}
                                    >
                                        Train Model
                                    </Button>
                                </div>
                                <br />
                            </Grid>
                            <Grid item>
                                <h3>Training Progress</h3>
                                {!!trainingLossLog.length && (
                                    <div key="vega-loss-acc-charts">
                                        <Suspense>
                                            <LossAccChart
                                                chartProps={chartProps}
                                                lossData={trainingLossLog}
                                                accData={trainingAccLog}
                                                timestamp={logTimestamp}
                                            />
                                        </Suspense>
                                    </div>
                                )}
                                <p>
                                    Final Training Accuracy:{" "}
                                    {model.status == "untrained"
                                        ? "Model has not been trained"
                                        : (model.trainingAcc || 0).toPrecision(
                                              2
                                          )}
                                </p>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<NavigateNextIcon />}
                            disabled={model.status !== "trained"}
                            onClick={handleNext}
                        >
                            Next
                        </Button>
                    </DialogActions>
                </Dialog>
            </PointerBoundary>
        )
    else if (dialogType == "testModel")
        return (
            <PointerBoundary>
                <Dialog
                    open={open}
                    onClose={handleCancel}
                    fullWidth={true}
                    maxWidth={"md"}
                >
                    <DialogContent>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <h3>Live Testing</h3>
                                <div key="predict">
                                    <span>
                                        {" "}
                                        Top Class:{" "}
                                        {model.status == "trained"
                                            ? livePredictions.topClass
                                            : "--"}{" "}
                                    </span>
                                    <br />
                                </div>
                                <div key="liveData">
                                    {liveRecording && (
                                        <div>
                                            {model.labels.map(label => {
                                                return (
                                                    <span
                                                        key={
                                                            "prediction-key-" +
                                                            label
                                                        }
                                                    >
                                                        <FiberManualRecordIcon
                                                            className={
                                                                classes.vmiddle
                                                            }
                                                            fontSize="small"
                                                            style={{
                                                                color: livePredictions.predictionData.colorOf(
                                                                    undefined,
                                                                    label
                                                                ),
                                                            }}
                                                        />
                                                        {label}
                                                    </span>
                                                )
                                            })}
                                            <Trend
                                                key="live-data-predictions"
                                                height={12}
                                                dataSet={
                                                    livePredictions.predictionData
                                                }
                                                horizon={LIVE_HORIZON}
                                                dot={true}
                                                gradient={true}
                                            />
                                            <Trend
                                                key="live-data-trends"
                                                height={12}
                                                dataSet={liveRecording}
                                                horizon={LIVE_HORIZON}
                                                dot={true}
                                                gradient={true}
                                            />
                                        </div>
                                    )}
                                </div>
                                <Accordion
                                    expanded={
                                        sensorsExpanded === "chooseSensors"
                                    }
                                    onChange={handleExpandedSensorsChange(
                                        "chooseSensors"
                                    )}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                    >
                                        <div>
                                            <h4>Select input sensors</h4>
                                            {!predictionEnabled && (
                                                <p>
                                                    Sensors should match:{" "}
                                                    {model.inputTypes.join(
                                                        ", "
                                                    )}{" "}
                                                </p>
                                            )}
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div key="sensors">
                                            {!readingRegisters.length && (
                                                <span>
                                                    Waiting for sensors...
                                                </span>
                                            )}
                                            {!!readingRegisters.length && (
                                                <ReadingFieldGrid
                                                    readingRegisters={
                                                        readingRegisters
                                                    }
                                                    registerIdsChecked={
                                                        registerIdsChecked
                                                    }
                                                    recording={false}
                                                    liveDataSet={liveRecording}
                                                    handleRegisterCheck={
                                                        handleRegisterCheck
                                                    }
                                                />
                                            )}
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="contained"
                            startIcon={<NavigateBackIcon />}
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={false}
                            onClick={handleCancel}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </PointerBoundary>
        )
}
