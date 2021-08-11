import React, { lazy, useEffect, useMemo, useState } from "react"
import { Grid, MenuItem, Select } from "@material-ui/core"
import FieldDataSet from "../FieldDataSet"
import Suspense from "../ui/Suspense"
import MBDataSet from "./MBDataSet"
import { useId } from "react-use-id-hook"

const VegaLite = lazy(() => import("../blockly/fields/chart/VegaLite"))

export default function DataSetChart(props: {
    dataset: MBDataSet
    currentRecording: FieldDataSet
    currentLabel: string
    timestamp: number
}) {
    const { dataset, currentRecording, currentLabel, timestamp } = props
    const [dataSetPoints, setDataSetPoints] = useState(() => {
        const setPoints = []
        if (dataset && dataset.totalRecordings) {
            dataset.labels.forEach(label => {
                // iterate through all the labels in the dataset
                dataset.recordings[label].forEach(recording => {
                    // iterate through all the recordings in the dataset
                    // add data point to chart
                    const features = { class: label }
                    for (let idx = 0; idx < recording.width; idx++) {
                        const headerName = recording.headers[idx]
                        features["rms-" + headerName] = recording.rms[idx]
                        features["min-" + headerName] = recording.mins[idx]
                        features["max-" + headerName] = recording.maxs[idx]
                    }
                    setPoints.push(features)
                })
            })
        }
        return setPoints
    })
    const features = useMemo(() => {
        const feats = []
        if (dataset) {
            dataset.inputTypes.forEach(inputName => {
                feats.push("rms-" + inputName)
                feats.push("min-" + inputName)
                feats.push("max-" + inputName)
            })
        }
        return feats
    }, [dataset])

    const [xAxis, setXAxis] = useState("rms-pressure")
    const [yAxis, setYAxis] = useState("max-pressure")
    const handleChangedX = event => setXAxis(event.target.value)
    const handleChangedY = event => setYAxis(event.target.value)

    useEffect(() => {
        if (currentRecording) {
            // add data point to chart
            const features = { class: currentLabel }
            for (let idx = 0; idx < currentRecording.width; idx++) {
                const headerName = currentRecording.headers[idx]
                features["rms-" + headerName] = currentRecording.rms[idx]
                features["min-" + headerName] = currentRecording.mins[idx]
                features["max-" + headerName] = currentRecording.maxs[idx]
            }
            dataSetPoints.push(features)
        }
    }, [dataset, timestamp])

    return (
        <Grid container direction="column" spacing={1}>
            <Grid item xs={12}>
                x&ensp;
                <Select
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
                            data: { values: dataSetPoints },
                            mark: {
                                type: "point",
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
                                },
                                tooltip: [
                                    {
                                        field: "class",
                                        type: "nominal",
                                    },
                                    {
                                        field: "rms-pressure",
                                        type: "quantitative",
                                    },
                                    {
                                        field: "max-pressure",
                                        type: "quantitative",
                                    },
                                ],
                            },
                        }}
                    />
                </Suspense>
            </Grid>
        </Grid>
    )
}
