import React, { ReactNode, useContext, useEffect, useState } from "react"
import { Grid, Box, Button, Tooltip } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import DownloadIcon from "@material-ui/icons/GetApp"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import { ReactFieldJSON } from "../ReactField"
import ReactParameterField from "../ReactParameterField"
import WorkspaceContext from "../../WorkspaceContext"

import { PointerBoundary } from "../PointerBoundary"

export interface RecordingBlockFieldValue {
    numSamples: number
    timestamp: number
    inputTypes: string[]
}

function RecordingParameterWidget(props: {
    initFieldValue: RecordingBlockFieldValue
    setFieldValue: (f: RecordingBlockFieldValue) => void
}) {
    const { initFieldValue, setFieldValue } = props

    const { workspace, sourceBlock } = useContext(WorkspaceContext)

    const [numSamples, setNumSamples] = useState(initFieldValue.numSamples)
    const [timestamp, setTimestamp] = useState(initFieldValue.timestamp)
    const [inputTypes, setInputTypes] = useState<string[]>(
        initFieldValue.inputTypes
    )

    const handleEditRecording = () => {
        // update parameters based on changes to this recording
        console.log("Edit recording")
        sourceBlock.data = "click.record"

        //setNumSamples()
        //setLatestTimestamp()
        //setInputTypes()
    }
    const handleDownloadDataSet = () => {
        console.log("Download dataset")
        sourceBlock.data = "click.download"
    }

    useEffect(() => {
        // push changes to source block after state values update
        sendUpdate()
    }, [numSamples, timestamp, inputTypes])

    const sendUpdate = () => {
        const updatedFieldValue = {
            numSamples: numSamples,
            timestamp: timestamp,
            inputTypes: inputTypes,
        }
        setFieldValue(updatedFieldValue)
    }

    return (
        <PointerBoundary>
            <Grid container spacing={1}>
                <Grid item>
                    <Box color="text.secondary">
                        No. of Samples: {numSamples} <br />
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

export default class RecordingBlockField extends ReactParameterField<RecordingBlockFieldValue> {
    static KEY = "recording_block_field_key"
    static EDITABLE = false

    constructor(value: string, previousValue?: any) {
        super(value)
        if (previousValue)
            this.value = { ...this.defaultValue, ...previousValue }
        this.updateFieldValue = this.updateFieldValue.bind(this)
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

    updateFieldValue(msg: RecordingBlockFieldValue) {
        this.value = {
            ...this.value, // don't copy over visibility (will cause loop)
            numSamples: msg.numSamples,
            timestamp: msg.timestamp,
            inputTypes: msg.inputTypes,
        }
    }

    renderInlineField(): ReactNode {
        return (
            <RecordingParameterWidget
                initFieldValue={this.value}
                setFieldValue={this.updateFieldValue}
            />
        )
    }
}
