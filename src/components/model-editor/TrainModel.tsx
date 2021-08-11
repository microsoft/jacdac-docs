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

const LossAccChart = lazy(() => import("./LossAccChart"))

export default function TrainModel(props: {
    reactStyle: any
    dataset: MBDataSet
    model: MBModel
    onChange: (model) => void
    onNext: (model) => void
}) {
    const classes = props.reactStyle
    const { fileStorage } = useContext(ServiceManagerContext)

    const { dataset, model, onChange, onNext } = props

    useEffect(() => {
        prepareDataSet(dataset)
        prepareModel(model)
    }, [])

    /* For managing props */
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
            mod.inputInterval = dataset.interval
            mod.outputShape = dataset.labels.length
        } else if (
            !arraysEqual(mod.labels, dataset.labels) ||
            !arraysEqual(mod.inputTypes, dataset.inputTypes)
        ) {
            // If there is already a model, make sure it matches the current dataset
            //   if it does not, reset the model
            const newModel = new MBModel(mod.name)
            prepareModel(newModel)
        }

        /* compile model */
        const compileMsg = {
            worker: "tf",
            type: "compile",
            data: {
                modelBlockJSON: "",
                model: model.toJSON(),
            },
        } as TFModelCompileRequest
        compileRequest(compileMsg).then(result => {
            if (result) {
                mod.modelJSON = result.data.modelJSON
                mod.modelSummary = result.data.modelSummary
                mod.trainingParams = result.data.trainingParams
                handleModelUpdate(mod)
            }
        })

        setTrainEnabled(dataset.labels.length >= 2)
    }

    /* For training model */
    const [trainEnabled, setTrainEnabled] = useState(false)
    const [vegaTrainingLoss, setVegaLoss] = useState([])
    const [vegaTrainingAcc, setVegaAcc] = useState([])
    const [logTimestamp, setTrainingLogTimestamp] = useState(0)

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
                const epoch = vegaTrainingLoss.length / 2 + 1
                vegaTrainingLoss.push({
                    epoch: epoch,
                    loss: msg.data.loss,
                    dataset: "training",
                })
                vegaTrainingLoss.push({
                    epoch: epoch,
                    loss: msg.data.val_loss,
                    dataset: "validation",
                })
                vegaTrainingAcc.push({
                    epoch: epoch,
                    acc: msg.data.acc,
                    dataset: "training",
                })
                vegaTrainingAcc.push({
                    epoch: epoch,
                    acc: msg.data.val_acc,
                    dataset: "validation",
                })
                setTrainingLogTimestamp(Date.now())
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

        if (trainResult) {
            // handle result from training
            const trainingHistory = trainResult.data.trainingLogs
            model.weightData = trainResult.data.modelWeights
            model.armModel = trainResult.data.armModel

            // Update model status
            model.status = "trained"
            model.trainingAcc = trainingHistory[trainingHistory.length - 1]
            handleModelUpdate(model)

            setTrainEnabled(true)
        } else {
            model.status = "untrained"
            handleModelUpdate(model)
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
            prepareModel(newModel)
            handleModelUpdate(newModel)

            setVegaLoss([])
            setVegaAcc([])
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
                        <div>
                            {dataset.summary.map((line, lineIdx) => {
                                return (
                                    <span key={"dataset-summary-" + lineIdx}>
                                        {" "}
                                        {line} <br />
                                    </span>
                                )
                            })}
                            {model.summary.map((line, lineIdx) => {
                                return (
                                    <span key={"model-summary-" + lineIdx}>
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
                <div key="vega-test">
                    <Suspense>
                        <LossAccChart
                            lossData={vegaTrainingLoss}
                            accData={vegaTrainingAcc}
                            timestamp={logTimestamp}
                        />
                    </Suspense>
                </div>
                <p>Final Training Accuracy: {model.trainingAcc}</p>
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
