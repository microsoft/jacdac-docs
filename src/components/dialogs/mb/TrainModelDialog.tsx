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
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import { trainRequest } from "../../blockly/dsl/workers/tf.proxy"
import type {
    TFModelTrainRequest,
    TFModelTrainResponse,
} from "../../../workers/tf/dist/node_modules/tf.worker"
import workerProxy from "../../blockly/dsl/workers/proxy"

import MBModel from "../../model-editor/MBModel"
import MBDataSet, { arraysEqual } from "../../model-editor/MBDataSet"
import useChange from "../../../jacdac/useChange"
import FieldDataSet from "../../FieldDataSet"

const TRAINING_COLOR = "#0f2080"
const VAL_COLOR = "#f5793a"
const NUM_EPOCHS = 250

export default function BlocklyTrainModelDialog(props: {
    classes: any
    chartPalette: string[]
    open: boolean
    onDone: (model: MBModel) => void
    dataset: MBDataSet
    model: MBModel
}) {
    const { classes, chartPalette, open, onDone, dataset, model } = props
    const [dialogType, setDialogType] = useState<"trainModel" | "evalModel">(
        "trainModel"
    )

    useEffect(() => {
        const set = dataset
        console.log("Randi check if dataset is ready ", {
            xs: set.xs,
            ys: set.ys,
            length: set.length,
            width: set.width,
        })
        prepareModel(model)
    }, [])

    /* For training model */
    const [trainEnabled, setTrainEnabled] = useState(dataset.labels.length >= 2)

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

    const trainTFModel = async () => {
        model.status = "training"
        model.inputTypes = dataset.inputTypes
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

            setTrainEnabled(true)
        } else model.status = "untrained"
    }

    /* For interface controls */
    const resetInputs = () => {}
    const handleCancel = () => {
        // reset the user inputs
        resetInputs()
        // close the modal
        onDone(null)
    }
    const handleNext = () => {
        // go to the next page
        setDialogType("evalModel")
    }
    const handleDone = () => {
        // reset the user inputs
        resetInputs()

        // call the done function
        onDone(null)
    }
    const [expanded, setExpanded] = React.useState<string | false>(false)
    const handleExpandedSummaryChange =
        (panel: string) =>
        (event: React.ChangeEvent<unknown>, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false)
        }

    if (dialogType == "trainModel")
        return (
            <Dialog open={open} onClose={handleCancel}>
                <DialogContent>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <h3>Model Summary</h3>
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
                                        {expanded !== "modelSummary" && (
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
                        disabled={false}
                        onClick={handleDone}
                    >
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        )
}
