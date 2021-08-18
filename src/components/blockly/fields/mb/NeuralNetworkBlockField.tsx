import React, { ReactNode, useContext, useEffect, useState } from "react"
import {
    Box,
    Button,
    createStyles,
    Grid,
    MenuItem,
    Select,
    TextField,
    Tooltip,
} from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import AutorenewIcon from "@material-ui/icons/Autorenew"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import DownloadIcon from "@material-ui/icons/GetApp"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import { ReactFieldJSON } from "../ReactField"
import ReactParameterField from "../ReactParameterField"
import WorkspaceContext from "../../WorkspaceContext"
import { FieldVariable } from "blockly"

import { useId } from "react-use-id-hook"
import { PointerBoundary } from "../PointerBoundary"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        numberField: {
            marginBottom: theme.spacing(1),
        },
    })
)

export interface NeuralNetworkBlockFieldValue {
    numLayers: number
    numParams: number
    modelCycles: number
    classes: string[]
    optimizer: string
    batchSize: number
    numEpochs: number
    lossFn: string
    metrics: string
}

function NNParameterWidget(props: {
    initFieldValue: NeuralNetworkBlockFieldValue
    setFieldValue: (f: NeuralNetworkBlockFieldValue) => void
}) {
    const styles = useStyles()
    const { initFieldValue, setFieldValue } = props

    const { workspace, sourceBlock } = useContext(WorkspaceContext)

    const [numLayers, setNumLayers] = useState(initFieldValue.numLayers)
    const [numParams, setNumParams] = useState(initFieldValue.numParams)
    const [modelCycles, setModelCycles] = useState(initFieldValue.modelCycles)
    const [classes, setClasses] = useState<string[]>(initFieldValue.classes)
    const [optimizer, setOptimizer] = useState<string>(initFieldValue.optimizer)
    const [batchSize, setBatchSize] = useState(initFieldValue.batchSize)
    const [numEpochs, setNumEpochs] = useState(initFieldValue.numEpochs)
    const [lossFn, setLossFn] = useState(initFieldValue.lossFn)
    const [metrics, setMetrics] = useState(initFieldValue.metrics)

    useEffect(() => {
        // push changes to source block after state values update
        sendUpdate()
    }, [
        numLayers,
        numParams,
        modelCycles,
        classes,
        optimizer,
        batchSize,
        numEpochs,
        lossFn,
        metrics,
    ])

    const sendUpdate = () => {
        // push changes to field values to the parent
        const updatedValue = {
            numLayers: numLayers,
            numParams: numParams,
            modelCycles: modelCycles,
            classes: classes,
            optimizer: optimizer,
            batchSize: batchSize,
            numEpochs: numEpochs,
            lossFn: lossFn,
            metrics: metrics,
        }
        setFieldValue(updatedValue)
    }

    useEffect(() => {
        // update based on source block's associated training dataset and parameters
        updateParameters()
    }, [workspace])

    const updateParameters = () => {
        const trainingSetField = sourceBlock.getField(
            "NN_TRAINING"
        ) as FieldVariable
        console.log("Randi NN update parameters: ", trainingSetField)

        // gather all the layers
        let numLayers = 0
        let layerBlock = sourceBlock.getInputTargetBlock("LAYER_INPUTS")
        while (layerBlock) {
            //console.log("Randi NN next child", layerBlock.type)
            // get the block parameters for the layer

            numLayers += 1
            layerBlock = layerBlock.getNextBlock()
        }

        // calculate how quickly the model should run
        // calculate how large the model is

        // find the associated dataset and...
        //     copy the class labels parameter
        //     get the total numSamples

        setNumLayers(numLayers)
    }

    const handleChangedEpochs = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = event.target.valueAsNumber
        // Randi TODO give some sort of error message for numbers smaller than 1
        if (newValue && !isNaN(newValue)) {
            setNumEpochs(newValue)
        }
    }

    const handleChangedBatchSize = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = event.target.valueAsNumber
        // Randi TODO give some sort of error message for numbers larger than the number of samples
        if (newValue && !isNaN(newValue)) {
            setBatchSize(newValue)
        }
    }

    const handleChangedOptimizer = event => {
        const newValue = event.target.value
        // Randi TODO give some sort of error message for invalid optimizer choices
        if (newValue) setOptimizer(newValue)
    }

    const handleChangedLossFn = event => {
        const newValue = event.target.value
        // Randi TODO give some sort of error message for invalid loss fn choice
        if (newValue) setLossFn(newValue)
    }

    const handleChangedMetrics = event => {
        const newValue = event.target.value
        // Randi TODO give some sort of error message for invalid metric choice
        if (newValue) setMetrics(newValue)
    }

    return (
        <PointerBoundary>
            <Grid container spacing={1} direction={"row"}>
                <Grid item xs={12}>
                    <Box color="text.secondary">
                        optimizer&ensp;
                        <Tooltip title="Update the optimizer">
                            <Select
                                id={useId() + "optimizer"}
                                variant="outlined"
                                value={optimizer}
                                onChange={handleChangedOptimizer}
                            >
                                <MenuItem value="adam">adam</MenuItem>
                                <MenuItem value="sgd">SGD</MenuItem>
                                <MenuItem value="adagrad">adagrad</MenuItem>
                                <MenuItem value="adadelta">adadelta</MenuItem>
                            </Select>
                        </Tooltip>
                    </Box>
                    <Box color="text.secondary">
                        loss&ensp;
                        <Tooltip title="Update the loss function">
                            <Select
                                id={useId() + "lossFn"}
                                variant="outlined"
                                value={lossFn}
                                onChange={handleChangedLossFn}
                            >
                                <MenuItem value="categoricalCrossentropy">
                                    CCE
                                </MenuItem>
                                <MenuItem value="meanSquaredError">
                                    MSE
                                </MenuItem>
                                <MenuItem value="hinge">hinge</MenuItem>
                            </Select>
                        </Tooltip>
                    </Box>
                    <Box color="text.secondary">
                        epochs&ensp;
                        <Tooltip title="Update the batch size to train on">
                            <TextField
                                id={useId() + "epochs"}
                                type="number"
                                size="small"
                                variant="outlined"
                                value={numEpochs}
                                onChange={handleChangedEpochs}
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item>
                    <Box color="text.secondary">
                        No. of Layers: {numLayers} <br />
                        No. of Parameters: {numParams} <br />
                        Cycles: {modelCycles} <br />
                    </Box>
                </Grid>
            </Grid>
        </PointerBoundary>
    )
}

export default class NeuralNetworkBlockField extends ReactParameterField<NeuralNetworkBlockFieldValue> {
    static KEY = "nn_block_field_key"

    constructor(value: string, previousValue?: any) {
        super(value)
        if (previousValue)
            this.value = { ...this.defaultValue, ...previousValue }
        this.updateFieldValue = this.updateFieldValue.bind(this)
    }

    static fromJson(options: ReactFieldJSON) {
        return new NeuralNetworkBlockField(options?.value)
    }

    /* This default value is specified here and in modelblockdsl.ts */
    get defaultValue() {
        return {
            numLayers: 0,
            numParams: 0,
            modelCycles: 0,
            classes: [],
            optimizer: "adam",
            batchSize: 32,
            numEpochs: 200,
            lossFn: "categoricalCrossentropy",
            metrics: "acc",
        }
    }

    getText_() {
        const { numLayers } = this.value

        return `${numLayers} layer(s)`
    }

    updateFieldValue(msg: NeuralNetworkBlockFieldValue) {
        this.value = {
            ...this.value, // don't copy over visibility (will cause loop)
            numParams: msg.numParams,
            numLayers: msg.numLayers,
            modelCycles: msg.modelCycles,
            classes: msg.classes,
            optimizer: msg.optimizer,
            batchSize: msg.batchSize,
            numEpochs: msg.numEpochs,
        }
    }

    renderInlineField(): ReactNode {
        return (
            <NNParameterWidget
                initFieldValue={this.value}
                setFieldValue={this.updateFieldValue}
            />
        )
    }
}
