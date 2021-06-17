import React, { useEffect, useContext, useState } from "react"
import { Grid, Button, TextField, InputAdornment, createStyles } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import StopIcon from "@material-ui/icons/Stop"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import ReadingFieldGrid from "../ReadingFieldGrid"
import FieldDataSet from "../FieldDataSet"
import useChartPalette from "../useChartPalette"
import Trend from "../Trend"
import DataSetGrid from "../DataSetGrid"

import useChange from "../../jacdac/useChange"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"

import { arrayConcatMany } from "../../../jacdac-ts/src/jdom/utils"
import { JDRegister } from "../../../jacdac-ts/src/jdom/register"
import { isSensor } from "../../../jacdac-ts/src/jdom/spec"
import { JDBus } from "../../../jacdac-ts/src/jdom/bus"
import { REPORT_UPDATE } from "../../../jacdac-ts/src/jdom/constants"
import { throttle } from "../../../jacdac-ts/src/jdom/utils"

import * as tf from "@tensorflow/tfjs"

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
    const [count, setCount] = useState(0)
    useEffect(() => {
        //document.title = `${count} click(s)`;
    });

    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const [tables, setTables] = useState<FieldDataSet[]>([])
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

    const [tfModelStatus, setModelStatus] = useState("idle")
    const [tfModelResult, setModelResult] = useState("")

    const testTFJS = async () => {
        setModelStatus("running")
        setModelResult("")
        // Define a model for linear regression.
        const model = tf.sequential()
        model.add(tf.layers.dense({ units: 1, inputShape: [1] }))

        // Prepare the model for training: Specify the loss and the optimizer.
        model.compile({ loss: "meanSquaredError", optimizer: "sgd" })

        // Generate some synthetic data for training.
        const xs = tf.tensor2d([1, 2, 3, 4], [4, 1])
        const ys = tf.tensor2d([1, 3, 5, 7], [4, 1])

        // Train the model using the data.
        await model.fit(xs, ys)
        // Use the model to do inference on a data point the model hasn't seen before:
        const z = model.predict(tf.tensor2d([5], [1, 1]))
        
        console.log({ xs, ys, model })
        setModelStatus("idle")
        setModelResult("Model Result: " + z.toString())
    }

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
                  `${currentClassLabel}${tables.length}`,
                  live,
                  chartPalette
              )
            : undefined
    const handleRegisterCheck = (reg: JDRegister) => {
        const i = registerIdsChecked.indexOf(reg.id)
        if (i > -1) registerIdsChecked.splice(i, 1)
        else {
            registerIdsChecked.push(reg.id)
            //console.log(reg.service._specification.name);
            // TODO store the type of data source (e.g. button, accelerometer, etc.)
        }
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
            //console.log(`stop recording`, liveDataSet)
            setTables([liveDataSet, ...tables])
            setLiveDataSet(newDataSet(registerIdsChecked, true))
            setRecording(false)
        }
    }
    const startRecording = async () => {
        if (!recording && recordingRegisters.length) {
            setLiveDataSet(newDataSet(registerIdsChecked, false))
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
    const toggleRecording = () => {
        if (recording) stopRecording()
        else startRecording()
    }
    const handleDeleteRecording = (table: FieldDataSet) => {
        const i = tables.indexOf(table)
        if (i > -1) {
            tables.splice(i, 1)
            setTables([...tables])
        }
    }
    const updateLiveData = () => {
        setLiveDataSet(liveDataSet)
        setRecordingLength(liveDataSet.rows.length)
        setLiveDataTimestamp(bus.timestamp)
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
    }, [
        recording,
        samplingIntervalDelayi,
        samplingCount,
        registerIdsChecked
    ])

    return (
        <Grid container direction={'column'}>
            <Grid item>
                <h2>Collect Data</h2>
                {/* Toggle button to get data from sensors vs upload from file */}
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
                        startIcon={recording ? <StopIcon /> : <PlayArrowIcon />}
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
                    <TextField /* Probably makes more sense as a dropdown */
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
                {!!tables.length && (
                    <div key="recordings">
                        <h3>Recordings</h3>
                        <DataSetGrid
                            tables={tables}
                            handleDeleteTable={handleDeleteRecording}
                        />
                    </div>
                )}
            </div>
            </Grid>
            <Grid item>
                <h2>Train Model</h2>
                <span>Current Model Status: {tfModelStatus}</span><br/>
                <span> {tfModelResult} </span><br/>
                <button onClick={testTFJS}>Run</button>
                 {/* <button onClick={() => setCount(count +1)}>+1</button> */ }
            </Grid>
            <Grid item>
                <h2>Test Model</h2>
            </Grid>
        </Grid>
    )
}
