import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Grid,
} from "@material-ui/core"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import DownloadIcon from "@material-ui/icons/GetApp"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import DeleteAllIcon from "@material-ui/icons/DeleteSweep"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import React, { lazy, useContext, useEffect, useState } from "react"
import Suspense from "../ui/Suspense"

import ServiceManagerContext from "../ServiceManagerContext"

import { compileRequest, trainRequest } from "../blockly/dsl/workers/tf.proxy"
import type {
    TFModelCompileRequest,
    TFModelTrainRequest,
    TFModelTrainResponse,
} from "../../workers/tf/dist/node_modules/tf.worker"
import workerProxy from "../blockly/dsl/workers/proxy"

import MBDataSet, { arraysEqual } from "./MBDataSet"
import MBModel from "./MBModel"

const ConfusionMatrixHeatMap = lazy(
    () => import("./components/ConfusionMatrixHeatMap")
)
const DataSetPlot = lazy(() => import("./components/DataSetPlot"))
const LossAccChart = lazy(() => import("./components/LossAccChart"))
const ModelSummary = lazy(() => import("./components/ModelSummary"))

export function prepareDataSet(set: MBDataSet) {
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

export function prepareModel(mod: MBModel, set: MBDataSet) {
    // If this is a brand new model, get it setup with a standard CNN architecture
    if (mod.modelJSON == "") {
        mod.modelJSON = "default"
        mod.labels = set.labels
        mod.inputShape = [set.length, set.width]
        mod.inputTypes = set.inputTypes
        mod.inputInterval = set.interval
        mod.outputShape = set.labels.length
    }

    /* compile model */
    const compileMsg = {
        worker: "tf",
        type: "compile",
        data: {
            modelBlockJSON: mod.blockJSON || "default",
            model: mod.toJSON(),
        },
    } as TFModelCompileRequest
    compileRequest(compileMsg).then(result => {
        if (result) {
            mod.modelJSON = result.data.modelJSON
            const modelStats = result.data.modelStats
            mod.modelStats = { total: modelStats.pop(), layers: modelStats }
            console.log("Randi model stats ", mod.modelStats)
            mod.trainingParams = result.data.trainingParams
        }
    })
}

export default function TrainModel(props: {
    chartProps: any
    reactStyle: any
    dataset: MBDataSet
    model: MBModel
    onChange: (model) => void
    onNext: (model) => void
}) {
    const classes = props.reactStyle
    const chartProps = props.chartProps
    const { fileStorage } = useContext(ServiceManagerContext)

    const { dataset, model, onChange, onNext } = props

    useEffect(() => {
        prepareDataSet(dataset)

        if (
            !arraysEqual(model.labels, dataset.labels) ||
            !arraysEqual(model.inputTypes, dataset.inputTypes)
        ) {
            // If there is already a model, make sure it matches the current dataset
            //   if it does not, reset the model
            const newModel = new MBModel(model.name)
            prepareModel(newModel, dataset)
            handleModelUpdate(newModel)
        } else {
            prepareModel(model, dataset)
            handleModelUpdate(model)
        }

        // ready to train
        setTrainEnabled(dataset.labels.length >= 2)
    }, [])

    /* For training model */
    const [trainEnabled, setTrainEnabled] = useState(false)
    const [trainingLossLog, setTrainingLossLog] = useState([])
    const [trainingAccLog, setTrainingAccLog] = useState([])
    const [logTimestamp, setLogTimestamp] = useState(0)
    const [trainingPredictionResult, setTrainingPredictionResult] = useState([])
    const [trainTimestamp, setTrainTimestamp] = useState(0)

    const trainTFModel = async () => {
        model.status = "training"
        model.inputTypes = dataset.inputTypes
        handleModelUpdate(model)

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
                trainingParams: model.trainingParams,
                model: model.toJSON(),
                xData: dataset.xs,
                yData: dataset.ys,
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
            setTrainingPredictionResult(trainResult.data.yPrediction)
            setTrainTimestamp(Date.now())

            // Update model status
            model.status = "trained"
            model.trainingAcc = trainingHistory[trainingHistory.length - 1]
            handleModelUpdate(model)

            setTrainEnabled(true)
        } else {
            model.status = "untrained"
            handleModelUpdate(model)
            setTrainEnabled(true)
        }
    }

    /* For page management */
    const handleNext = () => {
        onNext(model)
    }
    const handleModelUpdate = model => {
        onChange(model)
    }
    const handleDownloadModel = () => {
        // Randi TODO also download arm model (as a zip file?)
        fileStorage.saveText(`${model.name}.json`, JSON.stringify(model))
    }
    const deleteTFModel = () => {
        if (confirm("Are you sure you want to delete current model?")) {
            const newModel = new MBModel(model.name)
            prepareModel(newModel, dataset)

            handleModelUpdate(newModel)

            setTrainingLossLog([])
            setTrainingAccLog([])
        }
    }

    const [expanded, setExpanded] = React.useState<string | false>(false)
    const handleExpandedSummaryChange =
        (panel: string) =>
        (event: React.ChangeEvent<unknown>, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false)
        }

    return (
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
                    <IconButtonWithTooltip
                        onClick={deleteTFModel}
                        title="Delete current model information"
                    >
                        <DeleteAllIcon />
                    </IconButtonWithTooltip>
                </h3>

                <Accordion
                    expanded={expanded === "modelSummary"}
                    onChange={handleExpandedSummaryChange("modelSummary")}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <div>
                            {expanded == "modelSummary" ? (
                                <h2> Summary </h2>
                            ) : (
                                <span>
                                    Classes: {model.labels.join(", ")} <br />
                                    Training Status: {model.status} <br />
                                </span>
                            )}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Suspense>
                            <ModelSummary
                                reactStyle={classes}
                                dataset={dataset}
                                model={model}
                            />
                        </Suspense>
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
                        : (model.trainingAcc || 0).toPrecision(2)}
                </p>
            </Grid>
            <Grid item>
                <h3>Training Results</h3>
                {!!trainingPredictionResult.length && (
                    <div key="vega-training-set-charts">
                        <Suspense>
                            <ConfusionMatrixHeatMap
                                chartProps={chartProps}
                                yActual={dataset.ys}
                                yPredicted={trainingPredictionResult}
                                labels={model.labels}
                                timestamp={trainTimestamp}
                            />
                        </Suspense>
                        <br />
                        <Suspense>
                            <DataSetPlot
                                chartProps={chartProps}
                                reactStyle={classes}
                                dataset={dataset}
                                predictedLabels={trainingPredictionResult}
                                timestamp={trainTimestamp}
                            />
                        </Suspense>
                    </div>
                )}
                <br />
            </Grid>
            <Grid item style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className={classes.buttons}>
                    <Button
                        variant="contained"
                        color="secondary"
                        endIcon={<NavigateNextIcon />}
                        disabled={model.status !== "trained"}
                        onClick={handleNext}
                    >
                        Next
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}
