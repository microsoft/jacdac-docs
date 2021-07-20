import React, { useEffect,
                useContext,
                useState } from "react"
import {
    createStyles,
    Box,
    Tabs,
    Tab,
} from "@material-ui/core"
import TabPanel from "../ui/TabPanel"
import { makeStyles, Theme } from "@material-ui/core/styles"

import ReadingFieldGrid from "../ReadingFieldGrid"
import FieldDataSet from "../FieldDataSet"
import useChartPalette from "../useChartPalette"
import Trend from "../Trend"

import CollectData from "./CollectData"
//import TrainModel from "./TrainModel"
//import ModelOutput from "./ModelOutput"

import useChange from "../../jacdac/useChange"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"

import { arrayConcatMany } from "../../../jacdac-ts/src/jdom/utils"
import { JDRegister } from "../../../jacdac-ts/src/jdom/register"
import { isSensor } from "../../../jacdac-ts/src/jdom/spec"
import { JDBus } from "../../../jacdac-ts/src/jdom/bus"
import { REPORT_UPDATE } from "../../../jacdac-ts/src/jdom/constants"
import { throttle } from "../../../jacdac-ts/src/jdom/utils"

import * as ml4f from "../../../ml4f/src/main"

import * as tf from "@tensorflow/tfjs" /* RANDI TODO replace this with tf worker*/
import postModelRequest from "../blockly/dsl/workers/tf.proxy"
import {
    TFModelTrainRequest,
    TFModelPredictRequest,
} from "../../workers/tf/dist/node_modules/tf.worker"
import ModelDataset from "./ModelDataset"

//Dashboard.tsx

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
            display: "inline-flex",
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
    const classes = useStyles()
    const chartPalette = useChartPalette()
    
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const [dataset, setDataset] = useState<ModelDataset>(new ModelDataset())

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

    const [tab, setTab] = useState(0)
    const handleTabChange = (
        event: React.ChangeEvent<unknown>,
        newValue: number
    ) => {
        console.log("Changing to tab: ", newValue)
        setTab(newValue)
    }

    /* For choosing sensors */
    const [registerIdsChecked, setRegisterIdsChecked] = useState<string[]>([])
    const [recording, setRecording] = useState(false)
    const [, setRecordingLength] = useState(0)
    const [liveRecording, setLiveRecording] = useState<FieldDataSet>(undefined)
    const [, setLiveDataTimestamp] = useState(0)

    const newRecording = (registerIds: string[], live: boolean) =>
        registerIds.length
            ? createDataSet(
                  bus,
                  readingRegisters.filter(
                      reg => registerIds.indexOf(reg.id) > -1
                  ),
                  `${currentClassLabel}$${dataset.numRecordings}`,
                  live,
                  chartPalette
              )
            : undefined
    const handleRegisterCheck = (reg: JDRegister) => {
        const i = registerIdsChecked.indexOf(reg.id)
        if (i > -1) registerIdsChecked.splice(i, 1)
        else registerIdsChecked.push(reg.id)

        // Randi TODO add some way to update predictEnabled based on whether tfModel["inputType"] == registerIdsChecked
        // Alert user before allowing changes

        registerIdsChecked.sort()
        setRegisterIdsChecked([...registerIdsChecked])
        setLiveRecording(newRecording(registerIdsChecked, true))
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

    const stopRecording = () => {
        if (recording) {
            dataset.addRecording(liveRecording, currentClassLabel)
            setDataset(dataset)

            setLiveRecording(newRecording(registerIdsChecked, true))
            setRecording(false)
        }
    }
    const startRecording = async () => {
        if (!recording && recordingRegisters.length) {
            setLiveRecording(newRecording(registerIdsChecked, false))
            setRecording(true)
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
    const updateLiveData = () => {
        setLiveRecording(liveRecording)
        setRecordingLength(liveRecording.rows.length)
        setLiveDataTimestamp(bus.timestamp)

        // this function calls model.predict
        if (tfModel.status == "completed") updatePrediction()
    }
    const throttleUpdate = throttle(() => updateLiveData(), 30)
    // data collection
    // interval add data entry
    const addRow = (values?: number[]) => {
        if (!liveRecording) return
        //console.log(values)
        liveRecording.addRow(values)
        if (recording && liveRecording.length >= samplingCount) {
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

        setTrainEnabled(dataset.labels.length >= 2)

        return () => {
            clearInterval(interval)
            stopStreaming()
        }
    }, [recording, samplingIntervalDelayi, samplingCount, registerIdsChecked])

    /*  For training model */
    const [tfModel, setModel] = useState({
        model: tf.sequential(),
        status: "idle",
        labels: [],
        inputShape: [0, 0],
        trainingAcc: 0,
        topClass: "",
        prediction: {},
    })
    const [trainEnabled, setTrainEnabled] = useState(false)

    const trainTFModel = async () => {
        tfModel.status = "running"
        tfModel.topClass = ""
        tfModel.prediction = {}
        setModel(tfModel)
        setTrainEnabled(false)

        // Assumptions: the sampling rate, sampling duration, and sensors used are constant
        let sampleLength = -1
        let sampleChannels = -1
        const x_data = []
        const y_data = []

        for (const label of dataset.labels) {
            dataset.getRecordingsWithLabel(label).forEach(table => {
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

                } */
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
                activation: "relu",
            })
        )
        model.add(
            tf.layers.maxPooling1d({
                poolSize: [2],
            })
        )
        model.add(
            tf.layers.dropout({
                rate: 0.1,
            })
        )
        model.add(
            tf.layers.conv1d({
                kernelSize: [2],
                strides: 1,
                filters: 16,
                activation: "relu",
            })
        )
        model.add(
            tf.layers.maxPooling1d({
                poolSize: [2],
            })
        )
        model.add(
            tf.layers.dropout({
                rate: 0.1,
            })
        )
        model.add(
            tf.layers.conv1d({
                kernelSize: [2],
                strides: 1,
                filters: 16,
                activation: "relu",
            })
        )
        model.add(
            tf.layers.dropout({
                rate: 0.1,
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
            sampleChannels,
        ])
        const ys = tf.oneHot(
            tf.tensor1d(y_data, "int32"),
            dataset.labels.length
        )

        // Train the model using the data
        let acc = 0
        await model.fit(xs, ys, { epochs: 250 }).then(info => {
            console.log("Initial accuracy: ", info.history.acc[0])
            console.log(
                "Final accuracy: ",
                info.history.acc[info.history.acc.length - 1]
            )
            acc = info.history.acc[info.history.acc.length - 1] as number
        })

        tfModel.model = model
        tfModel.status = "completed"
        tfModel.labels = dataset.labels
        tfModel.inputShape = [sampleLength, sampleChannels]
        tfModel.trainingAcc = acc

        const armcompiled = await ml4f.compileAndTest(model, {
            verbose: true,
            includeTest: true,
            float16weights: false,
            optimize: true,
        })
        console.log(armcompiled)
        // use armcompiled.machineCode
        setModel(tfModel)
    }
    // predicting with model
    const updatePrediction = async () => {
        // Use the model to do inference on a data point the model hasn't seen before:
        let data = undefined
        const z_data = []
        if (liveRecording) {
            data = liveRecording.data()
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

    const handleDataChange = (dataset) => {
        setDataset(dataset)
        console.log("Randi updated dataset from tab 0: ", dataset)
    }

    const nextTab = () => {
        console.log("Randi on to the next tab")
        if (tab == 0 && dataset.labels.length >= 2) {4
            setTab(1)
        }
    }

    return (
        <Box mb={2}>
            <h1>ML Model Creator</h1>
            <p>
            This page allows you to collect data from Jacdac sensors and use them to train a neural network model that does classification.
            </p>
            
            <Tabs
                value={tab}
                onChange={handleTabChange}
                aria-label="View specification formats"
            >
                <Tab label={`1 - Collect Data`} />
                <Tab label={`2 - Train Model`} />
                <Tab label={`3 - Deploy Model`} />
            </Tabs>
            <TabPanel value={tab} index={0}>
                <CollectData
                    dataset={dataset} /* RANDI TODO would this let me change tabs before setDataset is called? */
                    onChange={handleDataChange}
                    onNext={nextTab}
                />
            </TabPanel>
        </Box>
    )

    /*return (
        <Grid container direction={"column"}>
            <Grid item>
                <h2>1 - Collect Data</h2>
                {/* RANDI TODO Toggle button to get data from sensors vs upload from file }
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
                    <div className={classes.row}>
                        <Autocomplete
                            className={classes.field}
                            disabled={recording}
                            options={dataset.labels}
                            style={{ width: 300 }}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    label="Class label"
                                    variant="outlined"
                                />
                            )}
                            value={currentClassLabel}
                            freeSolo
                            onInputChange={(event, newValue) => handleLabelChange(newValue)}
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
                    </div>
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
                            {dataset.labels.map(classLabel => (
                                <ClassDataSetGrid
                                    key={
                                        "dataset-" + classLabel
                                    } /* RANDI TODO Maybe take in labels as well as tables? 
                                    label={classLabel}
                                    tables={dataset.examples[classLabel]}
                                    handleDeleteTable={handleDeleteRecording}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </Grid>
            <Grid item>
                <h2>2 - Train and Test Model</h2>
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
                <span> Training Accuracy: { (tfModel.status=="completed") ? tfModel.trainingAcc : "--" }</span>
                <br />
                <span> Labels: {tfModel.labels.length ? tfModel.labels.join(", ") : "--" }</span>
                <br />
                <div key="predict">
                    <span> Top Class: {(tfModel.status == "completed") ? tfModel.topClass : "--" } </span>
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
                </div>
            </Grid>
            <Grid item>
                <h2>3 - Assign Outputs and Deploy Model</h2>
                <div key="programOutput">
                    <h3>Set output</h3>
                    {tfModel.labels.map((label) => (
                        <div key={label + "Output"}>When model detects {label}: </div>
                    ))}
                </div>
                <div key="saveModel">
                    <h3>Save model</h3>
                </div>
            </Grid>
        </Grid>
    )*/
}
