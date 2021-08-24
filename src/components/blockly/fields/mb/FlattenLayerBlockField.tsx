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

export interface FlattenLayerFieldValue {
    totalSize: number
    runTimeInCycles: number
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
    const { sourceBlock } = useContext(WorkspaceContext)
    const classes = useStyles()

    const totalSize = initFieldValue.totalSize
    const outputShape = initFieldValue.outputShape
    const runTimeInCycles = initFieldValue.runTimeInCycles

    return (
        <PointerBoundary>
            <Grid container spacing={1} direction={"column"}>
                <Grid item>
                    <Box color="text.secondary">
                        Total size: {totalSize} bytes
                        <br />
                        Run time: {runTimeInCycles} cycles <br />
                        Output shape: [{outputShape.join(", ")}]<br />
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
            numTrainableParams: 0,
            runTimeInCycles: 0,
            outputShape: [0],
        }
    }

    getText_() {
        return ``
    }

    renderInlineField(): ReactNode {
        return <LayerParameterWidget initFieldValue={this.value} />
    }
}
