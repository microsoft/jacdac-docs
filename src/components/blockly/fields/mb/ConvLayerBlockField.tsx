import React, { ReactNode, useContext, useEffect, useState } from "react"
import {
    Box,
    Grid,
    MenuItem,
    Select,
    TextField,
    Tooltip,
    makeStyles,
    Theme,
    createStyles,
} from "@material-ui/core"

import { ReactFieldJSON } from "../ReactField"
import ReactInlineField from "../ReactInlineField"
import { PointerBoundary } from "../PointerBoundary"

import WorkspaceContext, { resolveBlockServices } from "../../WorkspaceContext"

import { useId } from "react-use-id-hook"
import ExpandModelBlockField from "./ExpandModelBlockField"

export interface ConvLayerFieldValue {
    percentParams: number
    percentSize: number
    runTimeInMs: number
    outputShape: number[]
    numFilters: number
    kernelSize: number
    strideSize: number
    activation: string
}

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

function LayerParameterWidget(props: { initFieldValue: ConvLayerFieldValue }) {
    const { initFieldValue } = props
    const { sourceBlock } = useContext(WorkspaceContext)
    const classes = useStyles()

    const { percentSize, percentParams, outputShape, runTimeInMs } =
        initFieldValue
    const [numFilters, setNumFilters] = useState(initFieldValue.numFilters)
    const [kernelSize, setKernelSize] = useState(initFieldValue.kernelSize)
    const [strideSize, setStrideSize] = useState(initFieldValue.strideSize)
    const [activation, setActivation] = useState(initFieldValue.activation)

    useEffect(() => {
        // push changes to source block after state values update
        updateParameters()
    }, [numFilters, kernelSize, strideSize, activation])

    const updateParameters = () => {
        // push changes to field values to the parent
        const updatedValue = {
            numFilters: numFilters,
            kernelSize: kernelSize,
            strideSize: strideSize,
            activation: activation,
        }

        // send new value to the parameter holder
        const expandField = sourceBlock.getField(
            "EXPAND_BUTTON"
        ) as ExpandModelBlockField
        expandField.updateFieldValue(updatedValue)

        // update the name of the block
        const nameField = sourceBlock.inputList[0].fieldRow[0]
        const name: string = nameField.getValue()
        const blockName = name.substr(0, 13)
        nameField.setValue(
            `${blockName} (${numFilters}, ${kernelSize}, ${strideSize})`
        )
    }

    const setWarning = (warningText: string) => {
        const services = resolveBlockServices(sourceBlock)
        services.setWarning(sourceBlock.id, warningText)
    }

    const handleChangedFilters = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = event.target.valueAsNumber
        if (newValue && !isNaN(newValue)) {
            setNumFilters(newValue)
        }
    }

    const handleChangedKernelSize = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = event.target.valueAsNumber
        if (newValue && !isNaN(newValue)) {
            setKernelSize(newValue)
        }
    }

    const handleChangedStrides = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = event.target.valueAsNumber
        if (newValue && !isNaN(newValue)) {
            setStrideSize(newValue)
        }
    }

    const handleChangedActivation = event => {
        const newValue = event.target.value
        if (newValue) setActivation(newValue)
    }

    return (
        <PointerBoundary>
            <Grid container spacing={1} direction={"column"}>
                <Grid item className={classes.fieldContainer}>
                    <Box color="text.secondary">
                        filters&emsp;
                        <Tooltip title="Update the kernel size">
                            <TextField
                                id={useId() + "filters"}
                                type="number"
                                size="small"
                                variant="outlined"
                                value={numFilters}
                                onChange={handleChangedFilters}
                                className={classes.field}
                            />
                        </Tooltip>
                    </Box>
                    <Box color="text.secondary">
                        kernel size&emsp;
                        <Tooltip title="Update the kernel size">
                            <TextField
                                id={useId() + "kernelSize"}
                                type="number"
                                size="small"
                                variant="outlined"
                                value={kernelSize}
                                onChange={handleChangedKernelSize}
                                className={classes.field}
                            />
                        </Tooltip>
                    </Box>
                    <Box color="text.secondary">
                        stride&emsp;
                        <Tooltip title="Update the stride">
                            <TextField
                                id={useId() + "stride"}
                                size="small"
                                variant="outlined"
                                value={strideSize}
                                onChange={handleChangedStrides}
                                className={classes.field}
                            />
                        </Tooltip>
                    </Box>
                    <Box color="text.secondary">
                        activation&emsp;
                        <Tooltip title="Update the activation function">
                            <Select
                                id={useId() + "activation"}
                                variant="outlined"
                                value={activation}
                                onChange={handleChangedActivation}
                            >
                                <MenuItem value="softmax">softmax</MenuItem>
                                <MenuItem value="linear">linear</MenuItem>
                                <MenuItem value="relu">relu</MenuItem>
                            </Select>
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item>
                    <Box color="text.secondary">
                        Output shape: [{outputShape.join(", ")}]<br />
                        Percent of total size: {percentSize.toPrecision(2)}%
                        <br />
                        Percent of total params: {percentParams.toPrecision(2)}%
                        <br />
                        Run time: {runTimeInMs.toPrecision(2)} ms <br />
                    </Box>
                </Grid>
            </Grid>
        </PointerBoundary>
    )
}

export default class ConvLayerBlockField extends ReactInlineField {
    static KEY = "conv_layer_block_field_key"

    constructor(value: string, previousValue?: any) {
        super(value)
        if (previousValue)
            this.value = { ...this.defaultValue, ...previousValue }
    }

    static fromJson(options: ReactFieldJSON) {
        return new ConvLayerBlockField(options?.value)
    }

    /* This default value is specified here and in modelblockdsl.ts */
    get defaultValue() {
        return {
            percentParams: 0,
            percentSize: 0,
            runTimeInMs: 0,
            outputShape: [0, 0],
            numFilters: 16,
            kernelSize: 2,
            strideSize: 1,
        }
    }

    getText_() {
        return ``
    }

    renderInlineField(): ReactNode {
        return <LayerParameterWidget initFieldValue={this.value} />
    }
}
