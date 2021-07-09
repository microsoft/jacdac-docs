import React, { ReactNode, useContext, useEffect, useState } from "react"
import { Grid, Box, Button, Tooltip } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import DownloadIcon from "@material-ui/icons/GetApp"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import { ReactFieldJSON } from "../ReactField"
import ReactParameterField from "../ReactParameterField"
import WorkspaceContext from "../../WorkspaceContext"

export interface RecordingBlockFieldValue {
    parametersVisible: boolean
    numSamples: number
    latestTimestamp: number
    inputs: string[]
}

function RecordingParameterWidget( props: {
    initFieldValue: RecordingBlockFieldValue
    setFieldValue: (RecordingBlockFieldValue) => void
}) {
    const { initFieldValue, setFieldValue } = props

    const { workspaceJSON, sourceBlock } = useContext(WorkspaceContext)

    const [parametersVisible, setParametersVisible] = useState(initFieldValue.parametersVisible)
    const [numSamples, setNumSamples] = useState(initFieldValue.numSamples)
    const [latestTimestamp, setLatestTimestamp] = useState(initFieldValue.latestTimestamp)
    const [inputs, setInputs] = useState<string[]>(initFieldValue.inputs)

    const handleEditRecording = () => {
        // update parameters based on changes to this recording
        console.log("Edit recording")

        //setNumSamples()
        //setLatestTimestamp()
        //setInputs()
    }
    const handleDownloadDataset = () => {
        console.log("Download dataset")
    }

    useEffect(() => {
        // push changes to source block after state values update
        sendUpdate()
    }, [numSamples, latestTimestamp, inputs])

    const sendUpdate = () => {
        const updatedFieldValue = {
            parametersVisible: parametersVisible,
            numSamples: numSamples, 
            latestTimestamp: latestTimestamp,
            inputs: inputs,
        }
        setFieldValue(updatedFieldValue)
    }

    useEffect(() => {
        // update based on source block's parameter visibility field
        updateVisibility()
    }, [workspaceJSON])

    const updateVisibility = () => {
        const parameterField = sourceBlock.getField("BLOCK_PARAMS") as ReactParameterField<RecordingBlockFieldValue>
        setParametersVisible(parameterField.areParametersVisible())
    }

    return (
        <> {parametersVisible &&
        <Grid container spacing={1}>
            <Grid item>
                <Box color="text.secondary">
                    No. of Samples: {numSamples}
                </Box>
                <Box color="text.secondary">
                    Input type: {inputs.length ? inputs.join(", ") : "none"}
                </Box>
                <Box color="text.secondary">
                    {/* Randi TODO make this look nice, date, time */}
                    Last timestamp: {(latestTimestamp==0) ? latestTimestamp : "--"}
                </Box>
            </Grid>
            <Grid item>
            <Tooltip title="Add or remove samples from this recording">
                    <Button
                        onClick={handleEditRecording}
                        startIcon={<EditIcon />}
                        variant="outlined"
                        size="small"
                    >
                        Edit
                    </Button>
                </Tooltip>
                <Tooltip title="Download recording as csv file">
                    <Button
                        onClick={handleDownloadDataset}
                        startIcon={<DownloadIcon />}
                        variant="outlined"
                        size="small"
                    >
                        Download
                    </Button>
                </Tooltip>
            </Grid>
        </Grid>} </>
    )
}

export default class RecordingBlockField extends ReactParameterField<RecordingBlockFieldValue> {
    static KEY = "recording_block_field_key"
    static EDITABLE = false
    
    constructor(value: string) {
        super(value)
        this.updateFieldValue = this.updateFieldValue.bind(this)
    }

    static fromJson(options: ReactFieldJSON) {
        return new RecordingBlockField(options?.value)
    }

    get defaultValue() {
        return {
            parametersVisible: false,
            numSamples: 0,
            latestTimestamp: Date.now(),
            inputs: [],
        }
    }
    
    areParametersVisible() {
        const { parametersVisible } = this.value
        return parametersVisible
    }

    setParametersVisible(visible) {
        const updatedValue = {
            ...this.value,
            parametersVisible: visible,
        }
        this.value = updatedValue
    }

    getText_() {
        const { numSamples } = this.value

        return `${numSamples} sample(s)`
    }
    
    updateFieldValue(msg: RecordingBlockFieldValue) {
        this.value = {
            ...this.value, // don't copy over visibility (will cause loop)
            numSamples:msg.numSamples,
            latestTimestamp:msg.latestTimestamp,
            inputs:msg.inputs,
        }
    }

    renderInlineField(): ReactNode {
        return ( <> {  <RecordingParameterWidget 
            initFieldValue={this.value}
            setFieldValue={this.updateFieldValue} />} </>)
        
    }
}