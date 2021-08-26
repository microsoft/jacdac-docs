import React, { ReactNode, useContext, useEffect, useState } from "react"
import {
    Box,
    Grid,
    Tooltip,
    makeStyles,
    Theme,
    createStyles,
    Button,
} from "@material-ui/core"
import DownloadIcon from "@material-ui/icons/GetApp"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import { ReactFieldJSON } from "../ReactField"
import ReactInlineField from "../ReactInlineField"
import { PointerBoundary } from "../PointerBoundary"

import WorkspaceContext, { resolveBlockServices } from "../../WorkspaceContext"

export interface RecordingBlockFieldValue {
    numSamples: number
    timestamp: number
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

function RecordingParameterWidget(props: {
    initFieldValue: RecordingBlockFieldValue
}) {
    const { initFieldValue } = props
    const { sourceBlock } = useContext(WorkspaceContext)
    const classes = useStyles()

    const { numSamples, inputTypes } = initFieldValue

    const handleDownloadDataSet = () => {
        console.log("Download dataset")
        sourceBlock.data = "click.download"
    }

    return (
        <PointerBoundary>
            <Grid container spacing={1} direction={"column"}>
                <Grid item>
                    <Box color="text.secondary">
                        Total samples: {numSamples} <br />
                        Input type(s):{" "}
                        {inputTypes.length ? inputTypes.join(", ") : "none"}
                    </Box>
                </Grid>
                <Grid item style={{ display: "inline-flex" }}>
                    <Tooltip title="Download recording as csv file">
                        <Button
                            onClick={handleDownloadDataSet}
                            startIcon={<DownloadIcon />}
                            variant="outlined"
                            size="small"
                        >
                            Download
                        </Button>
                    </Tooltip>
                </Grid>
            </Grid>
        </PointerBoundary>
    )
}

export default class RecordingBlockField extends ReactInlineField {
    static KEY = "recording_block_field_key"

    constructor(value: string, previousValue?: any) {
        super(value)
        if (previousValue)
            this.value = { ...this.defaultValue, ...previousValue }
    }

    static fromJson(options: ReactFieldJSON) {
        return new RecordingBlockField(options?.value)
    }

    /* This default value is specified here and in modelblockdsl.ts */
    get defaultValue() {
        return {
            numSamples: 0,
            timestamp: 0,
            inputTypes: [],
        }
    }

    getText_() {
        const { numSamples } = this.value

        return `${numSamples} sample(s)`
    }

    renderInlineField(): ReactNode {
        return <RecordingParameterWidget initFieldValue={this.value} />
    }
}
