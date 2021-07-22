import React, { ReactNode, useContext, useEffect, useState } from "react"
import { Grid, Box, Button, Tooltip } from "@material-ui/core"
import CallSplitIcon from "@material-ui/icons/CallSplit"
import DownloadIcon from "@material-ui/icons/GetApp"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import { ReactFieldJSON } from "../ReactField"
import ReactParameterField from "../ReactParameterField"
import WorkspaceContext from "../../WorkspaceContext"
import Blockly, { FieldVariable } from "blockly"
import { RecordingBlockFieldValue } from "./RecordingBlockField"

export interface DatasetBlockFieldValue {
    parametersVisible: boolean
    numRecordings: number
    numSamples: number
    classes: string[]
    inputs: string[]
}

function DatasetParameterWidget(props: {
        initFieldValue: DatasetBlockFieldValue
        setFieldValue: (DatasetBlockFieldValue) => void
    }) {
    const { initFieldValue, setFieldValue } = props

    const { workspaceJSON, sourceBlock } = useContext(WorkspaceContext)

    const [parametersVisible, setParametersVisible] = useState(initFieldValue.parametersVisible)
    const [numRecordings, setNumRecordings] = useState(initFieldValue.numRecordings)
    const [numSamples, setNumSamples] = useState(initFieldValue.numSamples)
    const [classes, setClasses] = useState<string[]>(initFieldValue.classes)
    const [inputs, setInputs] = useState<string[]>(initFieldValue.inputs)

    const handleSplitDataset = () => {
        console.log("Split dataset")
    }
    const handleDownloadDataset = () => {
        console.log("Download dataset")
    }

    useEffect(() => {
        // push changes to source block after state values update
        sendUpdate()
    }, [numRecordings, numSamples, classes, inputs])

    const sendUpdate = () => {
        // push changes to field values to the parent
        const updatedValue = {
            parametersVisible: parametersVisible, // don't actually change this
            numRecordings: numRecordings,
            numSamples: numSamples,
            classes: classes,
            inputs: inputs,
        }
        setFieldValue(updatedValue)
    }

    useEffect(() => {
        // update based on source block's parameter visibility field
        updateVisibility()

        // update based on source block's associated recording blocks
        updateRecordings()
    }, [workspaceJSON])

    const updateVisibility = () => {
        const datasetParameterField = sourceBlock.getField("BLOCK_PARAMS") as ReactParameterField<DatasetBlockFieldValue>
        setParametersVisible(datasetParameterField.areParametersVisible())
    }

    const arraysEqual = (a, b) => {
        if (a === b) return true
        if (a == null || b == null) return false
        if (a.length !== b.length) return false

        // If you don't care about the order of the elements inside
        // the array, you should sort both arrays here.
        // Please note that calling sort on an array will modify that array.
        // you might want to clone your array first.

        for (let i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false
        }
        return true
    }

    const updateRecordings = () => {
        // update the recordings
        const childrenBlocks = sourceBlock.getChildren(false) // seems to only return the top block, not all of them. so I implement my own get all children
        let allRecordingBlocks = []
        const updatedClasses = []
        let updatedInputs = []
        let totalSamples = 0

        if (childrenBlocks.length > 0) {
            const childBlock = childrenBlocks[0]
            allRecordingBlocks = getAllChildBlocks(childBlock)
            //console.log("Randi all children", childBlocks)
            for (const block of allRecordingBlocks) {
                // get the block parameters for the recording
                const recordingParameterField = block.getField("BLOCK_PARAMS") as ReactParameterField<RecordingBlockFieldValue>
                totalSamples += recordingParameterField.value.numSamples

                // make sure that all recording blocks have the same input types
                const recordingBlockInputs = recordingParameterField.value.inputTypes
                if (updatedInputs.length == 0) updatedInputs = recordingBlockInputs
                if (!arraysEqual(updatedInputs, recordingBlockInputs)) {
                    // Randi TODO attach warning to this block
                    console.log("Randi error with input types in block")
                }
                
                // get the class name parameter and add it to the list of classes
                const classNameField = block.getField("CLASS_NAME") as FieldVariable
                const className = classNameField.getVariable().name
                if (!updatedClasses.includes(className)) updatedClasses.push(className)
            }
        }

        setNumRecordings(allRecordingBlocks.length)
        setNumSamples(totalSamples)
        setClasses(updatedClasses)
        setInputs(updatedInputs)
    }

    const getAllChildBlocks = (startingChildBlock: Blockly.Block) => {
        const recordingBlockType = "model_block_recording"
        const childBlocks = [startingChildBlock]

        for (const child of childBlocks) {
            const nextChild = child.getNextBlock()
            if (nextChild && nextChild.type == recordingBlockType)
                childBlocks.push(nextChild)
        }
        return childBlocks
    }

    return (
        <> {parametersVisible &&
        <Grid container spacing={1} direction={"row"}>
            <Grid item style={{ display: "inline-flex" }}>
                <Box color="text.secondary">
                    Classes: {classes.length ? classes.join(", ") : "none"} <br />
                    Input type(s): {inputs.length ? inputs.join(", ") : "none"}
                </Box>
            </Grid>
            <Grid item style={{ display: "inline-flex" }}>
                <Tooltip title="Automatically split dataset e.g. to create a test dataset">
                    <Button
                        onClick={handleSplitDataset}
                        startIcon={<CallSplitIcon />}
                        variant="outlined"
                        size="small"
                    >
                        Split
                    </Button>
                </Tooltip>
                <Tooltip title="Download dataset as csv file">
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
        </Grid>
        } </>
    )
}

export default class DatasetBlockField extends ReactParameterField<DatasetBlockFieldValue> {
    static KEY = "dataset_block_field_key"
    static EDITABLE = false

    constructor(value: string) {
        super(value)
        this.updateFieldValue = this.updateFieldValue.bind(this);
    }

    static fromJson(options: ReactFieldJSON) {
        return new DatasetBlockField(options?.value)
    }

    get defaultValue() {
        return {
            parametersVisible: false,
            numRecordings: 0,
            numSamples: 0,
            classes: [],
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
        const totalRecordings = this.value.numRecordings

        return `${totalRecordings} recording(s)`
    }

    updateFieldValue(msg: DatasetBlockFieldValue) {
        this.value = {
            ...this.value, // don't copy over visibility (will cause loop)
            numRecordings: msg.numRecordings,
            numSamples:msg.numSamples,
            classes:msg.classes,
            inputs:msg.inputs,
        }
    }

    renderInlineField(): ReactNode {
        return ( <> {  <DatasetParameterWidget 
            initFieldValue={this.value}
            setFieldValue={this.updateFieldValue} />} </>)
        
    }
}
