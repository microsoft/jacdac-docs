import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Grid,
} from "@material-ui/core"
import Trend from "../Trend"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import DeleteIcon from "@material-ui/icons/Delete"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import React, { useContext, useEffect, useState } from "react"

import { BuzzerCmd } from "../../../jacdac-ts/src/jdom/constants"
import { jdpack } from "../../../jacdac-ts/src/jdom/pack"

import * as tf from "@tensorflow/tfjs"
import * as ml4f from "../../../ml4f/src/main"
import postModelRequest from "../blockly/dsl/workers/tf.proxy"
import {
    TFModelTrainRequest,
    TFModelPredictRequest,
} from "../../workers/tf/dist/node_modules/tf.worker"

import useChange from "../../jacdac/useChange"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"

import { arrayConcatMany } from "../../../jacdac-ts/src/jdom/utils"
import { JDRegister } from "../../../jacdac-ts/src/jdom/register"
import { isSensor } from "../../../jacdac-ts/src/jdom/spec"
import { JDBus } from "../../../jacdac-ts/src/jdom/bus"
import { REPORT_UPDATE } from "../../../jacdac-ts/src/jdom/constants"
import { throttle } from "../../../jacdac-ts/src/jdom/utils"

import ReadingFieldGrid from "../ReadingFieldGrid"
import FieldDataSet from "../FieldDataSet"
import ModelDataset from "./ModelDataset"
import MBModel from "./MBModel"
import { ModeCommentTwoTone } from "@material-ui/icons"
import workerProxy from "../blockly/dsl/workers/proxy"

const LIVE_HORIZON = 100
const NUM_EPOCHS = 250
const LOSS_COLOR = "#8b0000"
const ACC_COLOR = "#77dd77"

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
function arraysEqual(a, b) {
    if (a === b) return true
    if (a == null || b == null) return false
    if (a.length !== b.length) return false

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false
    }
    return true
}

export default function TrainModel(props: {
    reactStyle: any
    chartPalette: string[]
    dataset: ModelDataset
    model: MBModel
    onChange: (model) => void
    onNext: (model) => void
}) {
    const classes = props.reactStyle
    const { chartPalette, dataset, onChange, onNext } = props
    const [model, setModel] = useState<MBModel>(props.model)

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

    const isBuzzer = spec => {
        return spec.shortId == "buzzer" //ledmatrix soundplayer
    }
    const buzzerServices = useChange(bus, bus =>
        arrayConcatMany(
            bus
                .devices()
                .map(device =>
                    device.services().filter(srv => isBuzzer(srv.specification))
                )
        )
    )

    const [pageReady, setPageReady] = useState(false)
    useEffect(() => {
        if (!pageReady) {
            prepareDataset(dataset)
            prepareModel(model)
            prepareTrainingTestingDatasets()
            setPageReady(true)
        }
    }, [])

    /* For loading page */
    const prepareDataset = (set: ModelDataset) => {
        // Assumptions: the sampling rate, sampling duration, and sensors used are constant
        let sampleLength = -1
        let sampleChannels = -1
        const x_data = []
        const y_data = []

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
                    // Randi decide what to do about different sized data
                } */
                // For x data, just add each sample as a new row into x_data
                x_data.push(table.data())

                y_data.push(set.labels.indexOf(label))
            })
        }

        const xs = tf.tensor3d(x_data, [
            x_data.length,
            sampleLength,
            sampleChannels,
        ])
        const ys = tf.oneHot(tf.tensor1d(y_data, "int32"), set.labels.length)

        // save tensors with dataset object
        set.xs = xs
        set.ys = ys
        set.length = sampleLength
        set.width = sampleChannels
    }

    const prepareModel = (mod: MBModel) => {
        // Use a standard architecture for models made on this page
        const modelLayers = mod.model
        console.log("Randi model input shape at prepareModel: ", mod) // Randi TODO debug error: expected ndim 3, got 2

        if (!modelLayers.layers.length) {
            console.log("Randi this model is empty let's fill it")
            // create model from scratch

            // Update model
            mod.labels = dataset.labels
            mod.inputShape = [dataset.length, dataset.width]
            mod.inputTypes = dataset.inputTypes
            mod.outputShape = dataset.labels.length

            modelLayers.add(
                tf.layers.conv1d({
                    inputShape: mod.inputShape,
                    kernelSize: [4],
                    strides: 1,
                    filters: 16,
                    activation: "relu",
                })
            )
            modelLayers.add(
                tf.layers.maxPooling1d({
                    poolSize: [2],
                })
            )
            modelLayers.add(
                tf.layers.dropout({
                    rate: 0.1,
                })
            )
            modelLayers.add(
                tf.layers.conv1d({
                    kernelSize: [2],
                    strides: 1,
                    filters: 16,
                    activation: "relu",
                })
            )
            modelLayers.add(
                tf.layers.maxPooling1d({
                    poolSize: [2],
                })
            )
            modelLayers.add(
                tf.layers.dropout({
                    rate: 0.1,
                })
            )
            modelLayers.add(
                tf.layers.conv1d({
                    kernelSize: [2],
                    strides: 1,
                    filters: 16,
                    activation: "relu",
                })
            )
            modelLayers.add(
                tf.layers.dropout({
                    rate: 0.1,
                })
            )
            // moving from 3-dimensional data to 2-dimensional requires a flattening layer
            modelLayers.add(tf.layers.flatten())
            // must end with a fully connected layer with size equal to number of labels
            modelLayers.add(
                tf.layers.dense({
                    units: mod.outputShape,
                    activation: "softmax",
                })
            )

            modelLayers.compile({
                loss: "categoricalCrossentropy",
                optimizer: "adam",
                metrics: ["accuracy"],
            })
        } else if (mod.status == "completed") {
            // if model is ready, start predicting
            setLiveRecording(newRecording(dataset.registerIds))
            setRegisterIdsChecked(dataset.registerIds)
        }
    }

    const prepareTrainingTestingDatasets = () => {
        // Create space to hold training log data
        const trainingLogDataset = {
            name: "training-logs",
            rows: [],
            headers: ["loss", "acc"],
            units: ["/", "/"],
            colors: [LOSS_COLOR, ACC_COLOR],
        }
        setTrainingLogs(FieldDataSet.createFromFile(trainingLogDataset))

        // Create space to hold prediction data
        const livePredictionDataset = {
            name: "live-predictions",
            rows: [],
            headers: dataset.labels,
            units: dataset.labels.map(() => {
                return "/"
            }),
            colors: dataset.labels.map(
                (label, idx) => chartPalette[idx % chartPalette.length]
            ),
        }
        setLivePredictions({
            predictionData: FieldDataSet.createFromFile(livePredictionDataset),
            topClass: model.labels[0],
        })
    }

    const deleteTFModel = () => {
        if (confirm("Are you sure you want to delete current model?")) {
            const newModel = new MBModel(model.name)
            prepareModel(newModel)
            console.log("Randi create new model ", newModel)
            setModel(newModel)
            handleModelUpdate(newModel)
        }
    }

    /* For training model */
    const [trainEnabled, setTrainEnabled] = useState(dataset.labels.length >= 2)
    const [trainingLogs, setTrainingLogs] = useState<FieldDataSet>(undefined)

    const trainTFModel = async () => {
        model.status = "running"
        model.inputTypes = dataset.inputTypes
        handleModelUpdate(model)
        setTrainEnabled(false)

        // convert model and parameters to JSON
        const modelObj = await model.toJSONAsync()
        
        // setup worker
        // subscriber gets messages about training while training is happening
        const stopWorkerSubscribe = workerProxy("tf").subscribe("message", (msg: any) => {
            const newData = [msg.data.loss, msg.data.acc]
            if (trainingLogs) trainingLogs.addData(newData)
        })
        const trainResult = await postModelRequest({
            worker: "tf",
            type: "train",
            data: {
                xJSON: JSON.stringify(await dataset.xs.array()),
                yJSON: JSON.stringify(await dataset.ys.array()),
                trainingParams: JSON.stringify({
                    epochs: NUM_EPOCHS,
                    loss: "categoricalCrossentropy",
                    optimizer: "adam",
                    metrics: ["accuracy"],
                }),
                modelJSON: JSON.stringify(modelObj.model),
            },
        })

        // stop subscriber after training
        stopWorkerSubscribe()

        if (trainResult) {
            // parse result from training
            const weights = JSON.parse(trainResult[0].trainedWeightsBuffer)
            const trainingHistory = JSON.parse(trainResult[0].trainingInfo)

            modelObj.model.weightData = new Uint32Array(weights).buffer
            const loadedModel = await tf.loadLayersModel({
                load: () => Promise.resolve(modelObj.model),
            })
            model.model = loadedModel

            // Compile code for MCU
            const armcompiled = await ml4f.compileAndTest(model.model, {
                verbose: true,
                includeTest: true,
                float16weights: false,
                optimize: true,
            })
            console.log(armcompiled)
            // use armcompiled.machineCode

            // Update model status
            model.status = "completed"
            model.trainingAcc = trainingHistory[trainingHistory.length-1]
            handleModelUpdate(model)

            // Update checked registers and live recording
            setLiveRecording(newRecording(dataset.registerIds))
            setRegisterIdsChecked(dataset.registerIds)

            setTrainEnabled(true)
        } else {
            model.status = "idle"
            handleModelUpdate(model)
        }
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
        if (dataset && liveRecording) {
            let matchingInputs = true
            if (dataset.inputTypes) {
                if (!arraysEqual(dataset.inputTypes, liveRecording.headers)) {
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
        model.status == "completed"

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
        if (model.status == "completed") updatePrediction()
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
            const modelJSON = await model.toJSONAsync()
            const predResult = await postModelRequest({
                worker: "tf",
                type: "predict",
                data: {
                    zJSON: JSON.stringify(await tf.tensor3d(liveInput).array()),
                    modelJSON: JSON.stringify(modelJSON.model),
                    weightsJSON: JSON.stringify(modelJSON.weights),
                },
            })
            const prediction = tf.tensor(JSON.parse(predResult[0].prediction))

            // Save probability for each class in model object
            model.labels.forEach((label, idx) => {
                liveOutput.push(prediction.dataSync()[idx])

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

    /* For tying prediction to action */
    useEffect(() => {
        let interval
        if (predictionEnabled) {
            executePrediction()
            interval = setInterval(() => executePrediction(), 1300)
        }

        return () => clearInterval(interval)
    }, [predictionEnabled])

    const playNote = note => {
        const noteFreqs = {
            C: 261,
            E: 329,
            F: 349,
            G: 391,
            A: 440,
            B: 493,
            C2: 523,
            D2: 587,
        }
        if (buzzerServices.length) {
            buzzerServices.forEach(service => {
                const period = 1000000 / noteFreqs[note]
                const duty = period / 2
                const duration = 400
                const data = jdpack<[number, number, number]>("u16 u16 u16", [
                    period,
                    duty,
                    duration,
                ])
                //service.sendCmdAsync(BuzzerCmd.PlayTone, data)
            })
        }
    }
    const executePrediction = () => {
        if (predictionEnabled && livePredictions.predictionData.rows) {
            switch (livePredictions.topClass) {
                case "one":
                    playNote("C")
                    playNote("E")
                    playNote("G")
                    break
                case "four":
                    playNote("F")
                    playNote("A")
                    playNote("C2")
                    break
                case "five":
                    playNote("G")
                    playNote("B")
                    playNote("D2")
                    break
                default:
                    break
            }
        }
    }

    /* For page management */
    const handleNext = () => {
        onNext(model)
    }
    const handleModelUpdate = model => {
        onChange(model)
    }

    const [expanded, setExpanded] = React.useState<string | false>(false)
    const handleExpandedSummaryChange =
        (panel: string) =>
        (event: React.ChangeEvent<unknown>, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false)
        }

    return (
        <>
            {" "}
            {pageReady && (
                <Grid container direction={"column"}>
                    <Grid item>
                        <h3>Info Summary</h3>
                        <Accordion
                            expanded={expanded === "modelSummary"}
                            onChange={handleExpandedSummaryChange(
                                "modelSummary"
                            )}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <div>
                                    <h4>Model</h4>
                                    <p>
                                        {expanded !== "modelSummary" && (
                                            <span>
                                                Training Status: {model.status}
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    {model.summary.map((line, lineIdx) => {
                                        return (
                                            <span
                                                key={"model-summary-" + lineIdx}
                                            >
                                                {" "}
                                                {line} <br />
                                            </span>
                                        )
                                    })}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === "dataSummary"}
                            onChange={handleExpandedSummaryChange(
                                "dataSummary"
                            )}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <div>
                                    <h4>Dataset</h4>
                                    <p>
                                        {expanded !== "dataSummary" && (
                                            <span>
                                                Classes:{" "}
                                                {dataset.labels.join(", ")}
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    {dataset.summary.map((line, lineIdx) => {
                                        return (
                                            <span
                                                key={
                                                    "dataset-summary-" + lineIdx
                                                }
                                            >
                                                {" "}
                                                {line} <br />
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
                                aria-label="delete existing model"
                                title={
                                    "Press to delete the machine learning model you have now"
                                }
                                onClick={deleteTFModel}
                                startIcon={<DeleteIcon />}
                                style={{ marginTop: 16 }}
                            >
                                Delete Model
                            </Button>
                        </div>
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
                        {!!trainingLogs.length && (
                            <div key="liveData">
                                <div>
                                    <FiberManualRecordIcon
                                        className={classes.vmiddle}
                                        fontSize="small"
                                        style={{
                                            color: ACC_COLOR,
                                        }}
                                    />
                                    Accuracy
                                    <FiberManualRecordIcon
                                        className={classes.vmiddle}
                                        fontSize="small"
                                        style={{
                                            color: LOSS_COLOR,
                                        }}
                                    />
                                    Loss
                                    <Trend
                                        key="training-trends"
                                        height={12}
                                        dataSet={trainingLogs}
                                        horizon={NUM_EPOCHS}
                                        dot={false}
                                        gradient={false}
                                    />
                                </div>
                            </div>
                        )}
                        <p>Final Training Accuracy: {model.trainingAcc}</p>
                        <br />
                    </Grid>
                    <Grid item>
                        <h3>Live Testing</h3>
                        <div key="predict">
                            <span>
                                {" "}
                                Top Class:{" "}
                                {model.status == "completed"
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
                                                key={"prediction-key-" + label}
                                            >
                                                <FiberManualRecordIcon
                                                    className={classes.vmiddle}
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
                                        dataSet={livePredictions.predictionData}
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
                            expanded={expanded === "chooseSensors"}
                            onChange={handleExpandedSummaryChange(
                                "chooseSensors"
                            )}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <div>
                                    <h4>Select input sensors</h4>
                                    {!predictionEnabled && (
                                        <p>
                                            Sensors should match:{" "}
                                            {dataset.inputTypes.join(", ")}{" "}
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
                                            readingRegisters={readingRegisters}
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
                    <Grid
                        item
                        style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                        <div className={classes.buttons}>
                            <Button
                                variant="contained"
                                color="secondary"
                                endIcon={<NavigateNextIcon />}
                                disabled={true}
                                onClick={handleNext}
                            >
                                Next
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            )}{" "}
        </>
    )
}
