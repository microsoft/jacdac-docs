import React, { useContext, useState } from "react"
import { createStyles, Box, Tabs, Tab } from "@material-ui/core"
import TabPanel from "../ui/TabPanel"

import { makeStyles, Theme } from "@material-ui/core/styles"
import useChartPalette from "../useChartPalette"

import CollectData from "./CollectData"
import TrainModel from "./TrainModel"
import ModelOutput from "./ModelOutput"

import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"

import ModelDataset from "./ModelDataset"
import MBModel from "./MBModel"

//Dashboard.tsx

const MODEL_EDITOR = "model_editor" // create prefix for model editor page
export const MODEL_EDITOR_DATASET = MODEL_EDITOR + "_dataset"
export const MODEL_EDITOR_MODEL = MODEL_EDITOR + "_model"

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

function getDatasetFromLocalStorage() {
    const datasetObj = JSON.parse(localStorage.getItem(MODEL_EDITOR_DATASET))
    console.log("Randi parsing dataset Obj: ", datasetObj)
    const createdDataset = ModelDataset.createFromFile(datasetObj)
    console.log("Randi created dataset: ", createdDataset)
    return createdDataset
}

export default function ModelPlayground() {
    const classes = useStyles()
    const chartPalette = useChartPalette()

    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const [dataset, setDataset] = useState<ModelDataset>(
        localStorage.getItem(MODEL_EDITOR_DATASET) !== null
            ? getDatasetFromLocalStorage()
            : new ModelDataset()
    )
    const [tfModel, setTFModel] = useState<MBModel>(new MBModel())

    /* For choosing sensors */

    /* For recording data*/

    /*  For training model */

    /* Data and interface management */
    const [tab, setTab] = useState(0)
    const handleTabChange = (
        event: React.ChangeEvent<unknown>,
        newValue: number
    ) => {
        console.log("Changing to tab: ", newValue)
        setTab(newValue)
    }

    const handleDataChange = newDataset => {
        setDataset(newDataset)
        console.log("Randi update to dataset: ", newDataset)
    }

    const handleModelChange = newModel => {
        setTFModel(newModel)
        console.log("Randi updated model from tab 1: ", newModel)
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
                This page allows you to collect data from Jacdac sensors and use
                them to train a neural network model that does classification.
            </p>

            <Tabs
                value={tab}
                onChange={handleTabChange}
                aria-label="View specification formats"
            >
                <Tab label={`1 - Collect Data`} />
                <Tab
                    label={`2 - Train Model`}
                    disabled={dataset.labels.length < 2}
                />
                <Tab
                    label={`3 - Deploy Model`}
                    disabled={tfModel.status !== "completed"}
                />
            </Tabs>
            <TabPanel value={tab} index={0}>
                <CollectData
                    reactStyle={classes}
                    chartPalette={chartPalette}
                    dataset={dataset}
                    onChange={handleDataChange}
                    onNext={nextTab}
                />
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <TrainModel
                    reactStyle={classes}
                    chartPalette={chartPalette}
                    dataset={dataset}
                    model={tfModel}
                    onChange={handleModelChange}
                    onNext={nextTab}
                />
            </TabPanel>
        </Box>
    )
}
