import React, { useEffect, useContext, useState, useMemo } from "react"
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

import ServiceManagerContext from "../../ServiceManagerContext"

import {
    trainRequest,
    predictRequest,
} from "../../blockly/dsl/workers/tf.proxy"
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

const TRAINING_COLOR = "#0f2080"
const VAL_COLOR = "#f5793a"
const NUM_EPOCHS = 250
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
    onModelUpdate: (model: MBModel) => void
    onDone: () => void
    dataset: MBDataSet
    model: MBModel
}) {
    const {
        classes,
        chartPalette,
        open,
        onModelUpdate,
        onDone,
        dataset,
        model,
    } = props
    const { fileStorage } = useContext(ServiceManagerContext)

    const [dialogType, setDialogType] = useState<"trainModel" | "evalModel">(
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
        if (dataset && model) {
            prepareDataSet(dataset)
            prepareModel(model)
            prepareTestingLogs()
        }
    }, [dataset, model])

    /* For preparing props */
    const prepareDataSet = (set: MBDataSet) => {
        // Assumptions: the sampling rate, sampling duration, and sensors used are constant
        let sampleLength = -1
        let sampleChannels = -1
        const xData = []
        const yData = []

        for (const label of set.labels) {
            set.getRecordingsWithLabel(label).forEach(table => {
                if (sampleLength < table.length) {
                    sampleLength = table.length
                    sampleChannels = table.width
                } else if (table.width != sampleChannels) {
                    setTrainEnabled(false)
                    alert(
                        "All input data must have the same shape: " +
                            table.name +
                            "\n Has " +
                            table.width +
                            " inputs instead of " +
                            sampleChannels
                    )
                } /* else if (table.length != sampleLength) {
                    // decide what to do about different sized data
                } */
                // For x data, just add each sample as a new row into x_data
                xData.push(table.data())

                yData.push(set.labels.indexOf(label))
            })
        }

        // save tensors with dataset object
        set.xs = xData
        set.ys = yData
        set.length = sampleLength
        set.width = sampleChannels
    }
    const prepareModel = (mod: MBModel) => {
        // If this is a brand new model, get it setup with a standard CNN architecture
        if (mod.modelJSON == "") {
            mod.modelJSON = "default"
            mod.labels = dataset.labels
            mod.inputShape = [dataset.length, dataset.width]
            mod.inputTypes = dataset.inputTypes
            mod.outputShape = dataset.labels.length
        } else if (
            !arraysEqual(mod.labels, dataset.labels) ||
            !arraysEqual(mod.inputTypes, dataset.inputTypes)
        ) {
            // If there is already a model, make sure it matches the current dataset
            //   if it does not, reset the model
            const newModel = new MBModel(model.name)
            prepareModel(newModel)
        }
    }
    const prepareTrainingLogs = (colors: string[]) => {
        // Create space to hold training log data
        const trainingLogDataSet = {
            name: "training-logs",
            rows: [],
            headers: ["training", "val"],
            units: ["/", "/"],
            colors: colors,
        }
        const set = FieldDataSet.createFromFile(trainingLogDataSet)
        return set
    }
    const trainingAccLog = useMemo(() => {
        return prepareTrainingLogs([TRAINING_COLOR, VAL_COLOR])
    }, [])
    const trainingLossLog = useMemo(() => {
        return prepareTrainingLogs([TRAINING_COLOR, VAL_COLOR])
    }, [])
    useChange(trainingAccLog)
    useChange(trainingLossLog)
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

    /* For training model */
    const [trainEnabled, setTrainEnabled] = useState(dataset.labels.length >= 2)
    const trainTFModel = async () => {
        model.status = "training"
        model.inputTypes = dataset.inputTypes
        setTrainEnabled(false)

        // setup worker
        // subscriber gets messages about training while training is happening
        const stopWorkerSubscribe = workerProxy("tf").subscribe(
            "message",
            (msg: any) => {
                const lossData = [msg.data.loss, msg.data.val_loss]
                const accData = [msg.data.acc, msg.data.val_acc]
                console.log("Randi training data ", {
                    loss: lossData,
                    acc: accData,
                })
                if (trainingLossLog) trainingLossLog.addData(lossData)
                if (trainingAccLog) trainingAccLog.addData(accData)
            }
        )

        const trainMsg = {
            worker: "tf",
            type: "train",
            data: {
                xData: dataset.xs,
                yData: dataset.ys,
                model: model.toJSON(),
                modelBlockJSON: model.blockJSON,
            },
        } as TFModelTrainRequest
        const trainResult = (await trainRequest(
            trainMsg
        )) as TFModelTrainResponse

        // stop subscriber after training
        stopWorkerSubscribe()

        if (trainResult) {
            // handle result from training
            const trainingHistory = trainResult.data.trainingLogs
            model.weightData = trainResult.data.modelWeights
            model.modelJSON = trainResult.data.modelJSON
            model.modelSummary = trainResult.data.modelSummary
            model.armModel = trainResult.data.armModel

            // Update model status
            model.status = "trained"
            model.trainingAcc = trainingHistory[trainingHistory.length - 1]
            onModelUpdate(model)
            setTrainEnabled(true)
        } else model.status = "untrained"
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

        let topIdx = 0

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
            const prediction = predResult.data.prediction
            model.labels.forEach((label, idx) => {
                liveOutput.push(prediction[idx])

                // update which class has highest confidence
                if (liveOutput[idx] > liveOutput[topIdx]) topIdx = idx
            })

            livePredictions.predictionData.addData(liveOutput)
            livePredictions.topClass = model.labels[topIdx]
        }
    }

    useEffect(() => {
        const interval = setInterval(() => addRow(), 100) // Randi TODO decide if sampling interval should be constant in dataset? dataset.samplingInterval)
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
        onDone()
    }
    const handleBack = () => {
        // turn off predictions
        setRegisterIdsChecked([])

        // go to the previous page
        setDialogType("trainModel")
    }
    const handleNext = () => {
        // go to the next page
        setDialogType("evalModel")
    }
    const handleDownloadModel = () => {
        // Randi TODO also download arm model (as a zip file?)
        fileStorage.saveText(`${model.name}.json`, JSON.stringify(model))
    }
    const [expanded, setExpanded] = React.useState<string | false>(false)
    const handleExpandedSummaryChange =
        (panel: string) =>
        (event: React.ChangeEvent<unknown>, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false)
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
            <Dialog open={open} onClose={handleCancel}>
                <DialogContent>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <h3>
                                Current Model
                                <IconButtonWithTooltip
                                    onClick={handleDownloadModel}
                                    title="Download all recording data"
                                    disabled={dataset.numRecordings == 0}
                                >
                                    <DownloadIcon />
                                </IconButtonWithTooltip>
                            </h3>
                            <Accordion
                                expanded={expanded === "modelSummary"}
                                onChange={handleExpandedSummaryChange(
                                    "modelSummary"
                                )}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <div>
                                        {expanded == "modelSummary" ? (
                                            <h2> Summary </h2>
                                        ) : (
                                            <span>
                                                Classes:{" "}
                                                {model.labels.join(", ")} <br />
                                                Training Status: {
                                                    model.status
                                                }{" "}
                                                <br />
                                            </span>
                                        )}
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        {dataset.summary.map(
                                            (line, lineIdx) => {
                                                return (
                                                    <span
                                                        key={
                                                            "dataset-summary-" +
                                                            lineIdx
                                                        }
                                                    >
                                                        {" "}
                                                        {line} <br />
                                                    </span>
                                                )
                                            }
                                        )}
                                        {model.summary.map((line, lineIdx) => {
                                            return (
                                                <span
                                                    key={
                                                        "model-summary-" +
                                                        lineIdx
                                                    }
                                                >
                                                    {" "}
                                                    {line}
                                                    <br />
                                                </span>
                                            )
                                        })}
                                    </div>
                                </AccordionDetails>
                            </Accordion>
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
                            <h3>Training Results</h3>
                            {!!trainingLossLog.length && (
                                <div key="training-log-loss">
                                    <div>
                                        <FiberManualRecordIcon
                                            className={classes.vmiddle}
                                            fontSize="small"
                                            style={{
                                                color: TRAINING_COLOR,
                                            }}
                                        />
                                        Training Loss
                                        <FiberManualRecordIcon
                                            className={classes.vmiddle}
                                            fontSize="small"
                                            style={{
                                                color: VAL_COLOR,
                                            }}
                                        />
                                        Validation Loss
                                        <Trend
                                            key="training-loss-trends"
                                            height={12}
                                            dataSet={trainingLossLog}
                                            horizon={NUM_EPOCHS}
                                            dot={true}
                                            gradient={true}
                                        />
                                    </div>
                                </div>
                            )}
                            {!!trainingAccLog.length && (
                                <div key="training-log-acc-data">
                                    <div>
                                        <FiberManualRecordIcon
                                            className={classes.vmiddle}
                                            fontSize="small"
                                            style={{
                                                color: TRAINING_COLOR,
                                            }}
                                        />
                                        Training Accuracy
                                        <FiberManualRecordIcon
                                            className={classes.vmiddle}
                                            fontSize="small"
                                            style={{
                                                color: VAL_COLOR,
                                            }}
                                        />
                                        Validation Accuracy
                                        <Trend
                                            key="training-acc-trends"
                                            height={12}
                                            dataSet={trainingAccLog}
                                            horizon={NUM_EPOCHS}
                                            dot={true}
                                            gradient={true}
                                        />
                                    </div>
                                </div>
                            )}
                            <p>Final Training Accuracy: {model.trainingAcc}</p>
                            <br />
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
        )
    if (dialogType == "evalModel")
        return (
            <Dialog open={open} onClose={handleCancel}>
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
                                expanded={sensorsExpanded === "chooseSensors"}
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
                                                {model.inputTypes.join(", ")}{" "}
                                            </p>
                                        )}
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div key="sensors">
                                        {!readingRegisters.length && (
                                            <span>Waiting for sensors...</span>
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
        )
}
