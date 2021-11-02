import React, { ReactNode } from "react"
import { Box, Grid, Theme } from "@mui/material"

import makeStyles from "@mui/styles/makeStyles"
import createStyles from "@mui/styles/createStyles"

import { ReactFieldJSON } from "../ReactField"
import ReactInlineField from "../ReactInlineField"
import { PointerBoundary } from "../PointerBoundary"

export interface FlattenLayerFieldValue {
    percentParams: number
    percentSize: number
    runTimeInMs: number
    outputShape: number[]
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
    initFieldValue: FlattenLayerFieldValue
}) {
    const { initFieldValue } = props

    const { percentSize, percentParams, outputShape, runTimeInMs } =
        initFieldValue

    return (
        <PointerBoundary>
            <Grid container spacing={1} direction={"column"}>
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

export default class FlattenLayerBlockField extends ReactInlineField {
    static KEY = "flatten_layer_block_field_key"

    constructor(value: string, previousValue?: any) {
        super(value)
        if (previousValue)
            this.value = { ...this.defaultValue, ...previousValue }
    }

    static fromJson(options: ReactFieldJSON) {
        return new FlattenLayerBlockField(options?.value)
    }

    /* This default value is specified here and in modelblockdsl.ts */
    get defaultValue() {
        return {
            runTimeInMs: 0,
            outputShape: [0],
            percentParams: 0,
            percentSize: 0,
            numUnits: 4,
            activation: "relu",
        }
    }

    getText_() {
        return ``
    }

    renderInlineField(): ReactNode {
        return (
            <LayerParameterWidget
                initFieldValue={this.value as FlattenLayerFieldValue}
            />
        )
    }
}
