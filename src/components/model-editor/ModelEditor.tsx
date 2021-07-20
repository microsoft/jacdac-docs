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

import useChartPalette from "../useChartPalette"

import CollectData from "./CollectData"
import TrainModel from "./TrainModel"
import ModelOutput from "./ModelOutput"

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

import FieldDataSet from "../FieldDataSet"
import ModelDataset from "./ModelDataset"
import MBModel from "./MBModel"

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
    const [tfModel, setTFModel] = useState<MBModel>(new MBModel())

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
            dataset.addRecording(liveRecording, currentClassLabel, registerIdsChecked)
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
        //if (tfModel.status == "completed") updatePrediction()
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
    const [trainEnabled, setTrainEnabled] = useState(false)

    const handleDataChange = (dataset) => {
        setDataset(dataset)
        console.log("Randi updated dataset from tab 0: ", dataset)
    }

    const handleModelChange = (model) => {
        setTFModel(model)
        console.log("Randi updated model from tab 1: ", model)
    }

    const nextTab = () => {
        console.log("Randi on to the next tab")
        if (tab == 0 && dataset.labels.length >= 2) {
            setTab(1)
        } else if (tab == 1 && tfModel.status == "completed") {
            setTab(2)
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
            <TabPanel value={tab} index={1}>
                <TrainModel
                    dataset={dataset}
                    model={tfModel}
                    onChange={handleModelChange}
                    onNext={nextTab}
                />
            </TabPanel>
        </Box>
    )

    /*return (
        <Grid container direction={"column"}>
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
