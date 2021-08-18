import React, { lazy, useMemo, useState } from "react"
import { Grid, MenuItem, Select } from "@material-ui/core"
import FieldDataSet from "../../FieldDataSet"
import Suspense from "../../ui/Suspense"
import MBDataSet from "../MBDataSet"
import { useId } from "react-use-id-hook"

const VegaLite = lazy(() => import("../../blockly/fields/chart/VegaLite"))

export default function DataSetPlot(props: {
    chartProps: any
    reactStyle: any
    dataset: MBDataSet
    predictedLabels: number[]
    timestamp: number
}) {
    const { dataset, predictedLabels, timestamp } = props
    const classes = props.reactStyle
    const chartProps = props.chartProps

    const calculateRecordingFeatures = (
        recording: FieldDataSet,
        label: string,
        predictedLabel: string
    ) => {
        const features = { class: label, "predicted class": predictedLabel }
        const headerNames = []
        for (let idx = 0; idx < recording.width; idx++) {
            // differentiate input types with the same name (e.g. two buttons)
            let headerName = recording.headers[idx]
            headerNames.push(headerName)
            const headerNameCount = headerNames.filter(
                name => name == headerName
            ).length
            if (headerNameCount > 1) headerName += headerNameCount

            // calculate features and add them to the dataset
            features["rms-" + headerName] = recording.rms[idx]
            features["min-" + headerName] = recording.mins[idx]
            features["max-" + headerName] = recording.maxs[idx]
        }
        return features
    }
    const dataSetPoints = useMemo(() => {
        const setPoints = []

        if (dataset && dataset.totalRecordings) {
            const labels = dataset.labels

            for (const label of labels) {
                dataset.getRecordingsWithLabel(label).forEach(recording => {
                    // add info about whether point was correctly labelled
                    let legendLabel = label
                    let predictedLabel = ""
                    if (predictedLabels && predictedLabels.length) {
                        // grab the predicted label associated with this data point
                        const prediction = predictedLabels[setPoints.length]
                        predictedLabel = labels[prediction]

                        // change the name of the class depending on whether it was correctly classified
                        if (predictedLabel == label) legendLabel += " - correct"
                        else legendLabel += " - incorrect"
                    }

                    // add data point to chart
                    const recordingFeatures = calculateRecordingFeatures(
                        recording,
                        legendLabel,
                        predictedLabel
                    )
                    setPoints.push(recordingFeatures)
                })
            }
        }
        return setPoints
    }, [dataset, predictedLabels, timestamp])
    const features = useMemo(() => {
        const feats = []
        const inputNames = []
        if (dataset) {
            dataset.inputTypes.forEach(inputName => {
                // differentiate input types with the same name (e.g. two buttons)
                inputNames.push(inputName)
                const inputNameCount = inputNames.filter(
                    name => name == inputName
                ).length
                if (inputNameCount > 1) inputName += inputNameCount

                feats.push("rms-" + inputName)
                feats.push("min-" + inputName)
                feats.push("max-" + inputName)
            })
        }
        return feats.sort()
    }, [dataset])

    const [xAxis, setXAxis] = useState(features[0] || "")
    const [yAxis, setYAxis] = useState(features[1] || "")
    const handleChangedX = event => setXAxis(event.target.value)
    const handleChangedY = event => setYAxis(event.target.value)

    const configTooltip = () => {
        const spec = [
            {
                field: "class",
                type: "nominal",
            },
            {
                field: xAxis,
                type: "quantitative",
                format: chartProps.TOOLTIP_NUM_FORMAT,
            },
            {
                field: yAxis,
                type: "quantitative",
                format: chartProps.TOOLTIP_NUM_FORMAT,
            },
        ]

        if (predictedLabels && predictedLabels.length) {
            spec.splice(1, 0, {
                field: "predicted class",
                type: "nominal",
            })
        }
        return spec
    }
    const tooltipSpec = configTooltip()

    return (
        <Grid container direction="column" spacing={1}>
            <Grid item xs={12}>
                x&ensp;
                <Select
                    className={classes.field}
                    id={useId() + "xAxis"}
                    variant="outlined"
                    value={xAxis}
                    onChange={handleChangedX}
                >
                    {features.map(ft => (
                        <MenuItem key={useId()} value={ft}>
                            {ft}
                        </MenuItem>
                    ))}
                </Select>
                &emsp;y&ensp;
                <Select
                    className={classes.field}
                    id={useId() + "yAxis"}
                    variant="outlined"
                    value={yAxis}
                    onChange={handleChangedY}
                >
                    {features.map(ft => (
                        <MenuItem key={useId()} value={ft}>
                            {ft}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid item xs={12}>
                <Suspense>
                    <VegaLite
                        spec={{
                            title: { timestamp },
                            width: chartProps.CHART_WIDTH,
                            height: chartProps.CHART_HEIGHT,
                            data: { values: dataSetPoints },
                            mark: {
                                type: "point",
                                size: chartProps.MARK_SIZE,
                                filled: true,
                            },
                            encoding: {
                                x: {
                                    field: xAxis,
                                    type: "quantitative",
                                },
                                y: {
                                    field: yAxis,
                                    type: "quantitative",
                                },
                                color: {
                                    field: "class",
                                    type: "nominal",
                                    scale: {
                                        range: chartProps.PALETTE,
                                    },
                                },
                                tooltip: tooltipSpec,
                            },
                        }}
                    />
                </Suspense>
            </Grid>
        </Grid>
    )
}
