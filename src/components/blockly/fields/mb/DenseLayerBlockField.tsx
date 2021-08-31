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

export interface DenseLayerFieldValue {
    percentParams: number
    percentSize: number
    runTimeInMs: number
    outputShape: number[]
    numUnits: number
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

function LayerParameterWidget(props: {
    initFieldValue: DenseLayerFieldValue
    setFieldValue: (f: DenseLayerFieldValue) => void
}) {
    const { initFieldValue } = props
    const { sourceBlock } = useContext(WorkspaceContext)
    const classes = useStyles()

    const { percentSize, percentParams, outputShape, runTimeInMs } =
        initFieldValue
    let { numUnits, activation } = initFieldValue

    const updateParameters = () => {
        // push changes to field values to the parent
        const updatedValue = {
            numUnits: numUnits,
            activation: activation,
        }

        // send new value to the parameter holder
        const expandField = sourceBlock.getField(
            "EXPAND_BUTTON"
        ) as ExpandModelBlockField
        expandField.updateFieldValue(updatedValue)
    }

    const handleChangedUnits = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.valueAsNumber
        if (newValue && !isNaN(newValue)) {
            numUnits = newValue
            updateParameters()
        }
    }

    const handleChangedActivation = event => {
        const newValue = event.target.value
        if (newValue) {
            activation = newValue
            updateParameters()
        }
    }

    return (
        <PointerBoundary>
            <Grid container spacing={1} direction={"column"}>
                <Grid item className={classes.fieldContainer}>
                    <Box color="text.secondary">
                        units&emsp;
                        <Tooltip title="Update the number of units">
                            <TextField
                                id={useId() + "filters"}
                                type="number"
                                size="small"
                                variant="outlined"
                                defaultValue={numUnits}
                                onChange={handleChangedUnits}
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
                                defaultValue={activation}
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

export default class DenseLayerBlockField extends ReactInlineField {
    static KEY = "dense_layer_block_field_key"

    constructor(value: string, previousValue?: any) {
        super(value)
        if (previousValue)
            this.value = { ...this.defaultValue, ...previousValue }
    }

    static fromJson(options: ReactFieldJSON) {
        return new DenseLayerBlockField(options?.value)
    }

    /* This default value is specified here and in modelblockdsl.ts */
    get defaultValue() {
        return {
            percentParams: 0,
            percentSize: 0,
            runTimeInMs: 0,
            outputShape: [0],
            numUnits: 4,
            activation: "relu",
        }
    }

    getText_() {
        return ``
    }

    renderInlineField(): ReactNode {
        return <LayerParameterWidget initFieldValue={this.value} />
    }
}
