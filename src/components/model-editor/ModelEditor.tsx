import React, { useEffect, useContext, useState } from "react"
import {
    Grid,
    Button,
    TextField,
    InputAdornment,
    createStyles,
} from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import StopIcon from "@material-ui/icons/Stop"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import ReadingFieldGrid from "../ReadingFieldGrid"
import FieldDataSet from "../FieldDataSet"
import useChartPalette from "../useChartPalette"
import Trend from "../Trend"
import ClassDataSetGrid from "../ClassDataSetGrid"

import useChange from "../../jacdac/useChange"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"

import { arrayConcatMany } from "../../../jacdac-ts/src/jdom/utils"
import { JDRegister } from "../../../jacdac-ts/src/jdom/register"
import { isSensor } from "../../../jacdac-ts/src/jdom/spec"
import { JDBus } from "../../../jacdac-ts/src/jdom/bus"
import { REPORT_UPDATE } from "../../../jacdac-ts/src/jdom/constants"
import { throttle } from "../../../jacdac-ts/src/jdom/utils"

import * as tf from "@tensorflow/tfjs" /* RANDI TODO replace this with tf worker*/
import postModelRequest from "../blockly/dsl/workers/tf.proxy"
import {
    TFModelTrainRequest,
    TFModelPredictRequest,
} from "../../workers/tf/dist/node_modules/tf.worker"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(1),
        },
        grow: {
            flexGrow: 1,
        },
        field: {
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(1.5),
        },
        segment: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        row: {
            marginBottom: theme.spacing(0.5),
        },
        buttons: {
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(2),
        },
        trend: {
            width: theme.spacing(10),
        },
        vmiddle: {
            verticalAlign: "middle",
        },
    })
)
const LIVE_HORIZON = 24
function createDataSet(
    bus: JDBus,
    registers: JDRegister[],
    name: string,
    live: boolean,
    palette: string[]
) {
    const fields = arrayConcatMany(registers.map(reg => reg.fields))
    const colors = fields.map((f, i) => palette[i % palette.length])
    const set = new FieldDataSet(bus, name, fields, colors)
    if (live) set.maxRows = LIVE_HORIZON + 4

    return set
}

export default function ModelPlayground() {
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const [dataset, setDataset] = useState({
        labels: [],
        totalExamples: 0,
        examples: {}
    })
    const chartPalette = useChartPalette()

    const classes = useStyles()
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

    /* For choosing sensors */
    const [registerIdsChecked, setRegisterIdsChecked] = useState<string[]>([])
    const [recording, setRecording] = useState(false)
    const [, setRecordingLength] = useState(0)
    const [liveDataSet, setLiveDataSet] = useState<FieldDataSet>(undefined)
    const [, setLiveDataTimestamp] = useState(0)

    const newDataSet = (registerIds: string[], live: boolean) =>
        registerIds.length
            ? createDataSet(
                  bus,
                  readingRegisters.filter(
                      reg => registerIds.indexOf(reg.id) > -1
                  ),
                  `${currentClassLabel}$${dataset.totalExamples}`,
                  live,
                  chartPalette
              )
            : undefined
    const handleRegisterCheck = (reg: JDRegister) => {
        const i = registerIdsChecked.indexOf(reg.id)
        if (i > -1) registerIdsChecked.splice(i, 1)
        else registerIdsChecked.push(reg.id) // TODO store the type of data source (e.g. button, accelerometer, etc.)

        registerIdsChecked.sort()
        setRegisterIdsChecked([...registerIdsChecked])
        setLiveDataSet(newDataSet(registerIdsChecked, true))
    }

    /* For recording data*/
    const [currentClassLabel, setLabel] = useState("Class1")
    const [samplingIntervalDelay, setSamplingIntervalDelay] = useState("100")
    const [samplingDuration, setSamplingDuration] = useState("2")
    const recordingRegisters = readingRegisters.filter(
        reg => registerIdsChecked.indexOf(reg.id) > -1
    )

    const samplingIntervalDelayi = parseInt(samplingIntervalDelay)
    const samplingCount = Math.ceil(
        (parseFloat(samplingDuration) * 1000) / samplingIntervalDelayi
    )
    const errorSamplingIntervalDelay =
        isNaN(samplingIntervalDelayi) || !/\d+/.test(samplingIntervalDelay)
    const errorSamplingDuration = isNaN(samplingCount)
    const error = errorSamplingDuration || errorSamplingIntervalDelay
    const startEnabled = !!recordingRegisters?.length

    const handleSamplingIntervalChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSamplingIntervalDelay(event.target.value.trim())
    }
    const handleSamplingDurationChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSamplingDuration(event.target.value.trim())
    }
    const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLabel(event.target.value.trim())
    }
    const stopRecording = () => {
        if (recording) {
            dataset.totalExamples += 1
            dataset.examples[currentClassLabel].push(liveDataSet)
            setDataset(dataset)

            setLiveDataSet(newDataSet(registerIdsChecked, true))
            setRecording(false)
        }
    }
    const startRecording = async () => {
        if (!recording && recordingRegisters.length) {
            setLiveDataSet(newDataSet(registerIdsChecked, false))
            setRecording(true)

            // Check if label is already in dataset
            if (dataset.labels.indexOf(currentClassLabel) < 0) {
                // If not, add the new label to the dataset
                dataset.labels.push(currentClassLabel)
                dataset.examples[currentClassLabel] = []
                setDataset(dataset)
            }
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
    const toggleRecording = () => {
        if (recording) stopRecording()
        else startRecording()
    }
    const handleDeleteRecording = (table: FieldDataSet) => {
        const tableLabel = table.name.slice(0, table.name.indexOf("$"))
        const i = dataset.examples[tableLabel].indexOf(table)

        if (i > -1) {
            dataset.examples[tableLabel].splice(i, 1)
            dataset.totalExamples -= 1

            // If this emptied out a label, then remove that label
            if (dataset.examples[tableLabel].length == 0) {
                const j = dataset.labels.indexOf(tableLabel)
                dataset.labels.splice(j, 1)
            }
            setDataset(dataset)
        }
    }
    const updateLiveData = () => {
        setLiveDataSet(liveDataSet)
        setRecordingLength(liveDataSet.rows.length)
        setLiveDataTimestamp(bus.timestamp)

        // this function calls model.predict
        updatePrediction()
    }
    const throttleUpdate = throttle(() => updateLiveData(), 30)
    // data collection
    // interval add data entry
    const addRow = (values?: number[]) => {
        if (!liveDataSet) return
        //console.log(values)
        liveDataSet.addRow(values)
        if (recording && liveDataSet.length >= samplingCount) {
            // stop recording
            updateLiveData()
            stopRecording()
        } else {
            throttleUpdate()
        }
    }
    // setting interval
    useEffect(() => {
        if (error) return
        console.log(`set interval to ${samplingIntervalDelayi}`)
        recordingRegisters.forEach(reg =>
            reg.sendSetIntAsync(samplingIntervalDelayi)
        )
    }, [samplingIntervalDelayi, registerIdsChecked, errorSamplingIntervalDelay])
    // collecting
    useEffect(() => {
        if (error) return undefined
        const interval = setInterval(() => addRow(), samplingIntervalDelayi)
        const stopStreaming = startStreamingRegisters()
        return () => {
            clearInterval(interval)
            stopStreaming()
        }
    }, [recording, samplingIntervalDelayi, samplingCount, registerIdsChecked])

    // training model
    const [tfModel, setModel] = useState({
        model: tf.sequential(),
        status: "idle",
        labels: [],
        inputShape: [0, 0],
        trainingAcc: 0,
        topClass: "",
        prediction: {},
    })
    const trainEnabled = dataset.labels.length >= 2

    const trainTFModel = async () => {
        tfModel.status = "running"
        tfModel.topClass = ""
        tfModel.prediction = {}
        setModel(tfModel)

        // Assumptions: the sampling rate, sampling duration, and sensors used are constant
        let sampleLength = -1
        let sampleChannels = -1
        const x_data = []
        const y_data = []
        
        for (const label of dataset.labels) {
            dataset.examples[label].forEach(table => {
                if (sampleLength == -1) {
                    sampleLength = table.length
                    sampleChannels = table.width
                } else if (
                    table.length != sampleLength ||
                    table.width != sampleChannels
                ) {
                    // RANDI TODO Decide what to do about different shaped data
                    alert(
                        "Data input does not have the same shape: " +
                            table.name +
                            "\n" +
                            sampleLength +
                            " | " +
                            table.length +
                            "\n" +
                            sampleChannels +
                            " | " +
                            table.width
                    )
                }
                // For x data, just add each sample as a new row into x_data
                x_data.push(table.data())

                y_data.push(dataset.labels.indexOf(label))
            })
        }

        // Create a new TFJS model
        const model = tf.sequential()

        // TODO Randi do you have to start with a fully connected layer of size equal to input        
        model.add(
            tf.layers.conv1d({
                inputShape: [sampleLength, sampleChannels],
                kernelSize: [4],
                strides: 1,
                filters: 16,
                activation: 'relu'
            })
        )
        model.add(
            tf.layers.maxPooling1d({
                poolSize: [2]
            })
        )
        model.add(
            tf.layers.dropout({
                rate: 0.1
            })
        )
        model.add(
            tf.layers.conv1d({
                kernelSize: [2],
                strides: 1,
                filters: 16,
                activation: 'relu'
            })
        )
        model.add(
            tf.layers.maxPooling1d({
                poolSize: [2]
            })
        )
        model.add(
            tf.layers.dropout({
                rate: 0.1
            })
        )
        model.add(
            tf.layers.conv1d({
                kernelSize: [2],
                strides: 1,
                filters: 16,
                activation: 'relu'
            })
        )
        model.add(
            tf.layers.dropout({
                rate: 0.1
            })
        )

        // moving from 3-dimensional data to 2-dimensional requires a flattening layer
        model.add(tf.layers.flatten())
        // must end with a fully connected layer with size equal to number of labels
        model.add(
            tf.layers.dense({
                units: dataset.labels.length,
                activation: "softmax",
            })
        )

        model.compile({
            loss: "categoricalCrossentropy",
            optimizer: "adam",
            metrics: ["accuracy"],
        })

        // RANDI TODO normalize data
        const xs = tf.tensor3d(x_data, [
            x_data.length,
            sampleLength,
            sampleChannels
        ])
        const ys = tf.oneHot(tf.tensor1d(y_data, "int32"), dataset.labels.length)

        // Train the model using the data
        let acc = 0
        await model.fit(xs, ys, { epochs: 250 }).then(info => {
            console.log("Initial accuracy: ", info.history.acc[0])
            console.log(
                "Final accuracy: ",
                info.history.acc[info.history.acc.length - 1]
            )
            acc = info.history.acc[info.history.acc.length - 1]
        })

        tfModel.model = model
        tfModel.status = "completed"
        tfModel.labels = dataset.labels
        tfModel.inputShape = [sampleLength, sampleChannels]
        tfModel.trainingAcc = acc
        setModel(tfModel)
    }
    // predicting with model
    const updatePrediction = async () => {
        if (tfModel["status"] == "completed") { // Randi TODO add some way to check that tfModel["inputType"] == registerIdsChecked
            // Use the model to do inference on a data point the model hasn't seen before:
            let data = undefined
            const z_data = []
            if (liveDataSet) {
                data = liveDataSet.data()
                data = data.slice(data.length - tfModel.inputShape[0])
                z_data.push(data)
            }

            const z_result = {}
            let z = ""

            if (data && data.length >= tfModel.inputShape[0]) {
                // Get probability values from model
                const prediction = (await tfModel.model.predict(
                    tf.tensor3d(z_data)
                )) as tf.Tensor<tf.Rank>
                z = tfModel.labels[prediction.argMax(1).dataSync()]

                // Save probability for each class in model object
                for (let i = 0; i < tfModel.labels.length; i++) {
                    z_result[tfModel.labels[i]] = prediction.dataSync()[i]
                }
                //console.log(z_result)
            }

            tfModel.prediction = z_result
            tfModel.topClass = z
            setModel(tfModel)
        }
    }

    return (
        <Grid container direction={"column"}>
            <Grid item>
                <h2>Collect Data</h2>
                {/* RANDI TODO Toggle button to get data from sensors vs upload from file */}
                <div key="sensors">
                    <h3>Choose sensors</h3>
                    {!readingRegisters.length && (
                        <span>Waiting for sensors...</span>
                    )}
                    {!!readingRegisters.length && (
                        <ReadingFieldGrid
                            readingRegisters={readingRegisters}
                            registerIdsChecked={registerIdsChecked}
                            recording={recording}
                            liveDataSet={liveDataSet}
                            handleRegisterCheck={handleRegisterCheck}
                        />
                    )}
                </div>
                <div key="record">
                    <h3>Record data</h3>
                    <div className={classes.buttons}>
                        <Button
                            size="large"
                            variant="contained"
                            color={recording ? "secondary" : "primary"}
                            aria-label="start/stop recording"
                            title="start/stop recording"
                            onClick={toggleRecording}
                            startIcon={
                                recording ? <StopIcon /> : <PlayArrowIcon />
                            }
                            disabled={!startEnabled}
                        >
                            {recording ? "Stop" : "Start"}
                        </Button>
                    </div>
                    <div className={classes.row}>
                        <TextField
                            className={classes.field}
                            error={errorSamplingIntervalDelay}
                            disabled={recording}
                            label="Sampling interval"
                            value={samplingIntervalDelay}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        ms
                                    </InputAdornment>
                                ),
                            }}
                            onChange={handleSamplingIntervalChange}
                        />
                        <TextField
                            className={classes.field}
                            error={errorSamplingDuration}
                            disabled={recording}
                            label="Sampling duration"
                            value={samplingDuration}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        s
                                    </InputAdornment>
                                ),
                            }}
                            onChange={handleSamplingDurationChange}
                        />
                        <TextField /* RANDI TODO Probably makes more sense as a dropdown */
                            className={classes.field}
                            disabled={recording}
                            label="Class label"
                            value={currentClassLabel}
                            variant="outlined"
                            onChange={handleLabelChange}
                        />
                    </div>
                </div>
                <div key="liveData">
                    {liveDataSet && (
                        <Trend
                            key="trends"
                            height={12}
                            dataSet={liveDataSet}
                            horizon={LIVE_HORIZON}
                            dot={true}
                            gradient={true}
                        />
                    )}
                </div>
                <div key="recordedData">
                    {!!dataset.totalExamples && (
                        <div key="recordings">
                            <h3>Recordings</h3>
                            {dataset.labels.map((classLabel) =>
                                <ClassDataSetGrid key={'dataset-' + classLabel} /* RANDI TODO Maybe take in labels as well as tables? */
                                    label={classLabel}
                                    tables={dataset.examples[classLabel]}
                                    handleDeleteTable={handleDeleteRecording}
                                />
                            )}
                        </div>
                    )}
                </div>
            </Grid>
            <Grid item>
                <h2>Train Model</h2>
                <div className={classes.buttons}>
                    <Button
                        size="large"
                        variant="contained"
                        color={"primary"}
                        aria-label="start training model"
                        title="start training model"
                        onClick={trainTFModel}
                        startIcon={<PlayArrowIcon />}
                        disabled={!trainEnabled}
                    >
                        {"Train"}
                    </Button>
                </div>
                <span> Model Status: {tfModel.status}</span>
                <br />
                <span> Training Accuracy: {tfModel.trainingAcc}</span>
                <br />
                <span> Labels: {tfModel.labels.join(", ")}</span>
                <br />
            </Grid>
            <Grid item>
                <h2>Test Model</h2>
                <span> Top Class: {tfModel.topClass} </span>
                <br />
                <div key="liveData">
                    {tfModel.status == "completed" && (
                        <Trend
                            key="trends"
                            height={12}
                            dataSet={liveDataSet}
                            horizon={LIVE_HORIZON}
                            dot={true}
                            gradient={true}
                        />
                    )}
                </div>
            </Grid>
        </Grid>
    )
}
