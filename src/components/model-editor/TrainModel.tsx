import { Grid, Button } from "@material-ui/core"
import Trend from "../Trend"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import React, { useContext, useState } from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"

import * as ml4f from "../../../ml4f/src/main"
import * as tf from "@tensorflow/tfjs" /* RANDI TODO replace this with tf worker*/

import useChange from "../../jacdac/useChange"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"

import { arrayConcatMany } from "../../../jacdac-ts/src/jdom/utils"
import { JDRegister } from "../../../jacdac-ts/src/jdom/register"
import { isSensor } from "../../../jacdac-ts/src/jdom/spec"
import { JDBus } from "../../../jacdac-ts/src/jdom/bus"
import { throttle } from "../../../jacdac-ts/src/jdom/utils"

import FieldDataSet from "../FieldDataSet"
import ModelDataset from "./ModelDataset"
import MBModel from "./MBModel"
import { MODEL_EDITOR_MODEL } from "./ModelEditor"

const LIVE_HORIZON = 24
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

export default function TrainModel(props: {
    reactStyle: any
    chartPalette: string[]
    dataset: ModelDataset
    model: MBModel
    onChange: (model) => void
    onNext: (model) => void
}) {
    const classes = props.reactStyle
    const { chartPalette, dataset, model, onChange, onNext } = props
    const [, setModel] = useState<MBModel>(undefined)

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

    const handleNext = () => {
        onNext(model)
    }

    const [liveRecording, setLiveRecording] = useState<FieldDataSet>(undefined)
    const [, setLiveDataTimestamp] = useState(0)
    const [trainEnabled, setTrainEnabled] = useState(dataset.labels.length >= 2)

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
        if (!liveRecording) {
            setLiveRecording(newRecording(dataset.registerIds))
        } else {
            //console.log(values)
            liveRecording.addRow(values)
            throttleUpdate()
        }
    }

    const trainTFModel = async () => {
        model.status = "running"
        model.topClass = ""
        model.prediction = {}
        setModel(model)
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
        const modelLayers = model.model

        modelLayers.add(
            tf.layers.conv1d({
                inputShape: [sampleLength, sampleChannels],
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
                units: dataset.labels.length,
                activation: "softmax",
            })
        )

        modelLayers.compile({
            loss: "categoricalCrossentropy",
            optimizer: "adam",
            metrics: ["accuracy"],
        })

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
        await modelLayers.fit(xs, ys, { epochs: 250 }).then(info => {
            console.log("Initial accuracy: ", info.history.acc[0])
            console.log(
                "Final accuracy: ",
                info.history.acc[info.history.acc.length - 1]
            )
            acc = info.history.acc[info.history.acc.length - 1] as number
        })

        model.status = "completed"
        model.labels = dataset.labels
        model.inputShape = [sampleLength, sampleChannels]
        model.trainingAcc = acc

        const armcompiled = await ml4f.compileAndTest(model.model, {
            verbose: true,
            includeTest: true,
            float16weights: false,
            optimize: true,
        })
        console.log(armcompiled)
        // use armcompiled.machineCode
        setModel(model)
    }
    // predicting with model
    const updatePrediction = async () => {
        // Use the model to do inference on a data point the model hasn't seen before:
        let data = undefined
        const z_data = []
        if (liveRecording) {
            data = liveRecording.data()
            data = data.slice(data.length - model.inputShape[0])
            z_data.push(data)
        }

        const z_result = {}
        let z = ""

        if (data && data.length >= model.inputShape[0]) {
            // Get probability values from model
            const prediction = (await model.model.predict(
                tf.tensor3d(z_data)
            )) as tf.Tensor<tf.Rank>
            z = model.labels[prediction.argMax(1).dataSync()]

            // Save probability for each class in model object
            for (let i = 0; i < model.labels.length; i++) {
                z_result[model.labels[i]] = prediction.dataSync()[i]
            }
            //console.log(z_result)
        }

        model.prediction = z_result
        model.topClass = z
        setModel(model)
    }

    return (
        <Grid container direction={"column"}>
            <Grid item>
                <h3>Dataset Summary</h3>
                <span>{dataset.summary}</span>
                <h3>Model Summary</h3>
                <span>{model.summary}</span>
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
                    >
                        Train Model
                    </Button>
                </div>
                <br />
            </Grid>
            {model.status == "completed" && (
                <>
                    <Grid item>
                        <h3>Training Results</h3>
                        <span>
                            {" "}
                            Training Accuracy:{" "}
                            {model.status == "completed"
                                ? model.trainingAcc
                                : "--"}
                        </span>
                        <br />
                        <span>
                            {" "}
                            Labels:{" "}
                            {model.labels.length
                                ? model.labels.join(", ")
                                : "--"}
                        </span>
                        <br />
                    </Grid>
                    <Grid item>
                        <h3>Live Testing</h3>
                        <div key="predict">
                            <span>
                                {" "}
                                Top Class:{" "}
                                {model.status == "completed"
                                    ? model.topClass
                                    : "--"}{" "}
                            </span>
                            <br />
                            <div key="liveData">
                                <Trend
                                    key="trends"
                                    height={12}
                                    dataSet={liveRecording}
                                    horizon={LIVE_HORIZON}
                                    dot={true}
                                    gradient={true}
                                />
                            </div>
                        </div>
                    </Grid>{" "}
                </>
            )}
            <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<NavigateNextIcon />}
                    disabled={true}
                    onClick={handleNext}
                >
                    Next
                </Button>
            </Grid>
        </Grid>
    )
}
