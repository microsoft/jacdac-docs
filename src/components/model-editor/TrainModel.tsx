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
import React, { useEffect, useMemo, useState } from "react"

import { trainRequest } from "../blockly/dsl/workers/tf.proxy"
import type {
    TFModelTrainRequest,
    TFModelTrainResponse,
} from "../../workers/tf/dist/node_modules/tf.worker"
import workerProxy from "../blockly/dsl/workers/proxy"

import FieldDataSet from "../FieldDataSet"
import MBDataSet, { arraysEqual } from "./MBDataSet"
import MBModel from "./MBModel"
import useChange from "../../jacdac/useChange"

const NUM_EPOCHS = 250
const LOSS_COLOR1 = "#8b0000"
const LOSS_COLOR2 = "#3f0000"
const ACC_COLOR1 = "#77dd77"
const ACC_COLOR2 = "#165916"
const TRAINING_COLOR = "#0f2080"
const VAL_COLOR = "#f5793a"

export default function TrainModel(props: {
    reactStyle: any
    dataset: MBDataSet
    model: MBModel
    onChange: (model) => void
    onNext: (model) => void
}) {
    const classes = props.reactStyle
    const { dataset, model, onChange, onNext } = props

    useEffect(() => {
        prepareDataSet(dataset)
        prepareModel(model)
    }, [])

    /* For loading page */
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

            handleModelUpdate(mod)
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

    const deleteTFModel = () => {
        if (confirm("Are you sure you want to delete current model?")) {
            const newModel = new MBModel(model.name)
            prepareModel(newModel)
            handleModelUpdate(newModel)
        }
    }

    /* For training model */
    const [trainEnabled, setTrainEnabled] = useState(dataset.labels.length >= 2)
    const trainingAccLog = useMemo(() => {
        return prepareTrainingLogs([TRAINING_COLOR, VAL_COLOR])
    }, [])
    const trainingLossLog = useMemo(() => {
        return prepareTrainingLogs([TRAINING_COLOR, VAL_COLOR])
    }, [])
    useChange(trainingAccLog)
    useChange(trainingLossLog)

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
                console.log("Training data ", msg.data)
                const lossData = [msg.data.loss, msg.data.val_loss]
                const accData = [msg.data.acc, msg.data.val_acc]
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
                modelBlockJSON: "",
            },
        } as TFModelTrainRequest
        const trainResult = (await trainRequest(
            trainMsg
        )) as TFModelTrainResponse

        // stop subscriber after training
        stopWorkerSubscribe()

        if (trainResult) {
            // handle result from training
            const trainingHistory = trainResult.data.trainingInfo
            model.weightData = trainResult.data.modelWeights
            model.modelJSON = trainResult.data.modelJSON

            // Randi TODO decide when/how to compile arm code
            // Compile code for MCU
            /*const armcompiled = await compileAndTest(model.model, {
                verbose: true,
                includeTest: true,
                float16weights: false,
                optimize: true,
            })
            console.log(armcompiled)*/
            // use armcompiled.machineCode

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

    const [expanded, setExpanded] = React.useState<string | false>(false)
    const handleExpandedSummaryChange =
        (panel: string) =>
        (event: React.ChangeEvent<unknown>, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false)
        }

    return (
        <Grid container direction={"column"}>
            <Grid item>
                <h3>Model Summary</h3>
                <Accordion
                    expanded={expanded === "modelSummary"}
                    onChange={handleExpandedSummaryChange("modelSummary")}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <div>
                            {expanded !== "modelSummary" && (
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
