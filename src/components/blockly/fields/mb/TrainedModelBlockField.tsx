import React, { lazy, ReactNode, useContext, useEffect, useState } from "react"
import {
    Box,
    Button,
    Grid,
    MenuItem,
    Select,
    Tooltip,
    makeStyles,
    Theme,
    createStyles,
} from "@material-ui/core"
import Suspense from "../../../ui/Suspense"
import useChartPalette from "../../../useChartPalette"

import { ReactFieldJSON } from "../ReactField"
import ReactInlineField from "../ReactInlineField"
import { PointerBoundary } from "../PointerBoundary"

import DownloadIcon from "@material-ui/icons/GetApp"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import { predictRequest } from "../../dsl/workers/tf.proxy"
import type { TFModelPredictRequest } from "../../../../workers/tf/dist/node_modules/tf.worker"

import WorkspaceContext, { resolveBlockServices } from "../../WorkspaceContext"
import { CHANGE } from "../../../../../jacdac-ts/src/jdom/constants"

import MBDataSet, { arraysEqual } from "../../../model-editor/MBDataSet"
import MBModel from "../../../model-editor/MBModel"

const ModelSummary = lazy(
    () => import("../../../model-editor/components/ModelSummary")
)
const ConfusionMatrixHeatMap = lazy(
    () => import("../../../model-editor/components/ConfusionMatrixHeatMap")
)
const DataSetPlot = lazy(
    () => import("../../../model-editor/components/DataSetPlot")
)

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fieldContainer: {
            lineHeight: "2.5rem",
            width: "15rem",
        },
        field: {
            width: theme.spacing(10),
        },
    })
)

function TrainedModelDisplayWidget() {
    const classes = useStyles()
    const chartPalette = useChartPalette()
    const chartProps = {
        CHART_WIDTH: 150,
        CHART_HEIGHT: 150,
        MARK_SIZE: 75,
        TOOLTIP_NUM_FORMAT: "0.2f",
        PALETTE: chartPalette,
    }

    const [chartType, setChartType] = useState<
        "model summary" | "confusion matrix" | "dataset plot"
    >("model summary")

    const { sourceBlock, workspace } = useContext(WorkspaceContext)
    const services = resolveBlockServices(sourceBlock)

    const [dataSet, setDataSet] = useState(undefined)
    const [model, setModel] = useState(undefined)
    const [trainingPredictionResult, setTrainingPredictionResult] =
        useState(undefined)
    const [trainTimestamp, setTrainTimestamp] = useState(Date.now())

    // track workspace changes and re-render
    useEffect(
        () =>
            services?.subscribe(CHANGE, () => {
                sourceBlock.data = "click.refreshdisplay"

                // make sure this dataset is compatible with this model
                const updatedDataSet = services.data[0] as MBDataSet
                if (!model)
                    console.log("Randi replace this model it's empty ", model)
                const updatedModel = model || services.data[1]

                console.log("Randi model and dataset ", {
                    dataset: updatedDataSet,
                    model: updatedModel,
                })

                if (!updatedModel || !updatedDataSet) return

                // make sure dataset and model are compatible
                if (
                    !arraysEqual(
                        updatedDataSet.inputTypes,
                        updatedModel.inputTypes
                    ) ||
                    updatedDataSet.length != updatedModel.inputShape[0] ||
                    updatedDataSet.width != updatedModel.inputShape[1]
                )
                    return

                // get selected chart
                const selectedChart = sourceBlock
                    .getField("SELECTED_CHART")
                    .getText()

                // for confusion matrix and dataset plot predict on dataset
                if (
                    selectedChart == "confusion matrix" ||
                    selectedChart == "dataset plot"
                ) {
                    const predictMsg = {
                        worker: "tf",
                        type: "predict",
                        data: {
                            zData: updatedDataSet.xs,
                            model: updatedModel.toJSON(),
                        },
                    } as TFModelPredictRequest
                    predictRequest(predictMsg).then(result => {
                        if (result) {
                            // Save probability for each class in model object
                            setTrainingPredictionResult(result.data.predictTop)
                            setTrainTimestamp(Date.now())
                        }
                    })
                }

                setDataSet(updatedDataSet)
                setModel(updatedModel)
                setChartType(selectedChart)
            }),
        [services]
    )

    const handleDownloadDataSet = () => {
        console.log("Download model JSON")
        sourceBlock.data = "click.download"
    }

    if (chartType == "model summary")
        return (
            <Grid container spacing={1} direction={"column"}>
                {!!model && !!dataSet && (
                    <Grid item>
                        <PointerBoundary>
                            <Suspense>
                                <ModelSummary
                                    reactStyle={classes}
                                    dataset={dataSet}
                                    model={model}
                                />
                            </Suspense>
                        </PointerBoundary>
                    </Grid>
                )}
                <Grid item style={{ display: "inline-flex" }}>
                    <Tooltip title="Download trained model file">
                        <Button
                            onClick={handleDownloadDataSet}
                            startIcon={<DownloadIcon />}
                            variant="outlined"
                            size="small"
                        >
                            Download
                        </Button>
                    </Tooltip>
                </Grid>
            </Grid>
        )
    else if (chartType == "confusion matrix")
        return (
            <Grid container spacing={1} direction={"column"}>
                {!!model && !!dataSet && (
                    <Grid item>
                        <PointerBoundary>
                            <Suspense>
                                <ConfusionMatrixHeatMap
                                    chartProps={chartProps}
                                    yActual={dataSet.ys}
                                    yPredicted={trainingPredictionResult}
                                    labels={model.labels}
                                    timestamp={trainTimestamp}
                                />
                            </Suspense>
                        </PointerBoundary>
                    </Grid>
                )}
                <Grid item style={{ display: "inline-flex" }}>
                    <Tooltip title="Download trained model file">
                        <Button
                            onClick={handleDownloadDataSet}
                            startIcon={<DownloadIcon />}
                            variant="outlined"
                            size="small"
                        >
                            Download
                        </Button>
                    </Tooltip>
                </Grid>
            </Grid>
        )
    else if (chartType == "dataset plot")
        return (
            <Grid container spacing={1} direction={"column"}>
                {!!model && !!dataSet && (
                    <Grid item>
                        <PointerBoundary>
                            <Suspense>
                                <DataSetPlot
                                    chartProps={chartProps}
                                    reactStyle={classes}
                                    dataset={dataSet}
                                    predictedLabels={trainingPredictionResult}
                                    timestamp={trainTimestamp}
                                />
                            </Suspense>
                        </PointerBoundary>
                    </Grid>
                )}
                <Grid item style={{ display: "inline-flex" }}>
                    <Tooltip title="Download trained model file">
                        <Button
                            onClick={handleDownloadDataSet}
                            startIcon={<DownloadIcon />}
                            variant="outlined"
                            size="small"
                        >
                            Download
                        </Button>
                    </Tooltip>
                </Grid>
            </Grid>
        )
}

export default class TrainedModelBlockField extends ReactInlineField {
    static KEY = "trained_model_block_field_key"

    constructor(value: string) {
        super(value)
    }

    static fromJson(options: ReactFieldJSON) {
        return new TrainedModelBlockField(options?.value)
    }

    getText_() {
        return ``
    }

    renderInlineField(): ReactNode {
        return <TrainedModelDisplayWidget />
    }
}
