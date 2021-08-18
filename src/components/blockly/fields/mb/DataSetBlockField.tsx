import React, { ReactNode, useContext, useEffect, useState } from "react"
import { Grid, Box, Button, Tooltip } from "@material-ui/core"
import DownloadIcon from "@material-ui/icons/GetApp"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import ViewIcon from "@material-ui/icons/Visibility"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import { ReactFieldJSON } from "../ReactField"
import ReactParameterField from "../ReactParameterField"
import { RecordingBlockFieldValue } from "./RecordingBlockField"
import WorkspaceContext from "../../WorkspaceContext"
import { FieldVariable } from "blockly"

import { PointerBoundary } from "../PointerBoundary"

export interface DataSetBlockFieldValue {
    numRecordings: number
    numSamples: number
    classes: string[]
    inputs: string[]
}

function DataSetParameterWidget(props: {
    initFieldValue: DataSetBlockFieldValue
    setFieldValue: (DataSetBlockFieldValue) => void
}) {
    const { initFieldValue, setFieldValue } = props

    const { workspace, sourceBlock } = useContext(WorkspaceContext)

    const [numRecordings, setNumRecordings] = useState(
        initFieldValue.numRecordings
    )
    const [numSamples, setNumSamples] = useState(initFieldValue.numSamples)
    const [classes, setClasses] = useState<string[]>(initFieldValue.classes)
    const [inputs, setInputs] = useState<string[]>(initFieldValue.inputs)

    const handleViewDataSet = () => {
        console.log("View and edit dataset modal")
        sourceBlock.data = "click.edit"
    }
    const handleDownloadDataSet = () => {
        console.log("Download dataset")
        sourceBlock.data = "click.download"
    }

    useEffect(() => {
        // push changes to source block after state values update
        sendUpdate()
    }, [numRecordings, numSamples, classes, inputs])

    const sendUpdate = () => {
        // push changes to field values to the parent
        const updatedValue = {
            numRecordings: numRecordings,
            numSamples: numSamples,
            classes: classes,
            inputs: inputs,
        }
        setFieldValue(updatedValue)
    }

    useEffect(() => {
        // update based on source block's associated recording blocks
        updateRecordings()
    }, [workspace])

    function arraysEqual(a: any[], b: any[]) {
        if (!a || !b) return false
        if (a.length !== b.length) return false
        if (a === b) return true

        for (let i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false
        }
        return true
    }

    const updateRecordings = () => {
        // update the recordings

        // gather all the layers
        let numRecordings = 0
        let numSamples = 0
        const updatedClasses = []
        let updatedInputs = []

        let layerBlock = sourceBlock.getInputTargetBlock("LAYER_INPUTS")
        while (layerBlock) {
            // get the block parameters for the recording
            const recordingParameterField = layerBlock.getField(
                "EXPAND_BUTTON"
            ) as ReactParameterField<RecordingBlockFieldValue>
            numSamples += recordingParameterField.value.numSamples

            // make sure that all recording blocks have the same input types
            const recordingBlockInputs =
                recordingParameterField.value.inputTypes
            if (!updatedInputs.length) updatedInputs = recordingBlockInputs
            if (!arraysEqual(updatedInputs, recordingBlockInputs)) {
                // Randi TODO attach warning to this block; gotta do this in ModelBlockEditor
                console.error(
                    "Error, recording block inputs do not match dataset",
                    { block: recordingBlockInputs, dataset: updatedInputs }
                )
            }

            // get the class name parameter and add it to the list of classes
            const classNameField = layerBlock.getField(
                "CLASS_NAME"
            ) as FieldVariable
            const className = classNameField.getVariable().name
            if (!updatedClasses.includes(className))
                updatedClasses.push(className)

            numRecordings += 1
            layerBlock = layerBlock.getNextBlock()
        }

        setNumRecordings(numRecordings)
        setNumSamples(numSamples)
        setClasses(updatedClasses)
        setInputs(updatedInputs)
    }

    return (
        <PointerBoundary>
            <Grid container spacing={1} direction={"row"}>
                <Grid item style={{ display: "inline-flex" }}>
                    <Tooltip title="View this data set and perform actions like splitting it">
                        <Button
                            onClick={handleViewDataSet}
                            startIcon={<ViewIcon />}
                            variant="outlined"
                            size="small"
                        >
                            View
                        </Button>
                    </Tooltip>
                    &ensp;
                    <Tooltip title="Download dataset as csv file">
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
                <Grid item style={{ display: "inline-flex" }}>
                    <Box color="text.secondary">
                        Classes: {classes.length ? classes.join(", ") : "none"}{" "}
                        <br />
                        Input type(s):{" "}
                        {inputs.length ? inputs.join(", ") : "none"}
                    </Box>
                </Grid>
            </Grid>
        </PointerBoundary>
    )
}

export default class DataSetBlockField extends ReactParameterField<DataSetBlockFieldValue> {
    static KEY = "dataset_block_field_key"
    static EDITABLE = false

    constructor(value: string, previousValue?: any) {
        super(value)
        if (previousValue)
            this.value = { ...this.defaultValue, ...previousValue }
        this.updateFieldValue = this.updateFieldValue.bind(this)
    }

    static fromJson(options: ReactFieldJSON) {
        return new DataSetBlockField(options?.value)
    }

    /* This default value is specified here and in modelblockdsl.ts */
    get defaultValue() {
        return {
            numRecordings: 0,
            numSamples: 0,
            classes: [],
            inputs: [],
        }
    }

    getText_() {
        const totalRecordings = this.value.numRecordings

        return `${totalRecordings} recording(s)`
    }

    updateFieldValue(msg: DataSetBlockFieldValue) {
        this.value = {
            ...this.value, // don't copy over visibility (will cause loop)
            numRecordings: msg.numRecordings,
            numSamples: msg.numSamples,
            classes: msg.classes,
            inputs: msg.inputs,
        }
    }

    renderInlineField(): ReactNode {
        return (
            <DataSetParameterWidget
                initFieldValue={this.value}
                setFieldValue={this.updateFieldValue}
            />
        )
    }
}
