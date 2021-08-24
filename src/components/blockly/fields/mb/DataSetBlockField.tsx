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

export interface DataSetBlockFieldValue {
    numRecordings: number
    numSamples: number
    inputClasses: string[]
    inputTypes: string[]
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

function DataSetParameterWidget(props: {
    initFieldValue: DataSetBlockFieldValue
}) {
    const { initFieldValue } = props
    const { sourceBlock } = useContext(WorkspaceContext)
    const classes = useStyles()

    const numRecordings = initFieldValue.numRecordings
    const numSamples = initFieldValue.numSamples
    const inputClasses = initFieldValue.inputClasses
    const inputTypes = initFieldValue.inputTypes

    return (
        <PointerBoundary>
            <Grid container spacing={1} direction={"column"}>
                <Grid item>
                    <Box color="text.secondary">
                        Classes:{" "}
                        {inputClasses.length ? inputClasses.join(", ") : "none"}{" "}
                        <br />
                        Input type(s):{" "}
                        {inputTypes.length ? inputTypes.join(", ") : "none"}
                    </Box>
                </Grid>
            </Grid>
        </PointerBoundary>
    )
}

export default class DataSetBlockField extends ReactInlineField {
    static KEY = "dataset_block_field_key"

    constructor(value: string, previousValue?: any) {
        super(value)
        if (previousValue)
            this.value = { ...this.defaultValue, ...previousValue }
    }

    static fromJson(options: ReactFieldJSON) {
        return new DataSetBlockField(options?.value)
    }

    /* This default value is specified here and in modelblockdsl.ts */
    get defaultValue() {
        return {
            numRecordings: 0,
            numSamples: 0,
            inputClasses: [],
            inputTypes: [],
        }
    }

    getText_() {
        const totalRecordings = this.value.numRecordings

        return `${totalRecordings} recording(s)`
    }

    renderInlineField(): ReactNode {
        return <DataSetParameterWidget initFieldValue={this.value} />
    }
}
