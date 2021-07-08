import React, { lazy, ReactNode, useContext, useEffect, useState } from "react"
import { Grid, Box, Button, TextField, Tooltip } from "@material-ui/core"
import CallSplitIcon from "@material-ui/icons/CallSplit"
import DownloadIcon from "@material-ui/icons/GetApp"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import ReactField, { ReactFieldJSON, VALUE_CHANGE } from "../ReactField"
import ReactParameterField from "../ReactParameterField"
import WorkspaceContext from "../../WorkspaceContext"
import Blockly, { FieldVariable } from "blockly"

function DatasetParameterWidget(props: {
        visible: boolean
    }) {
    const { visible } = props
    const { workspaceJSON, sourceBlock } = useContext(WorkspaceContext)
    const [classes, setClasses] = useState<string[]>([])
    const [inputs, setInputs] = useState<string[]>([])
    const [numSamples, setNumSamples] = useState(0)

    const [parametersVisible, setParametersVisisble] = useState(visible)
    useEffect(() => setParametersVisisble(visible), [visible])

    const handleSplitDataset = () => {
        console.log("Split dataset")
    }
    const handleDownloadDataset = () => {
        console.log("Download dataset")
    }

    useEffect(() => {
        // update the recordings
        const childrenBlocks = sourceBlock.getChildren(false) // seems to only return the top block, not all of them. so I implement my own get all children
        const updatedClasses = []
        const updatedInputs = []

        if (childrenBlocks.length > 0) {
            const childBlock = childrenBlocks[0]
            const allRecordingBlocks = getAllChildBlocks(childBlock)
            //console.log("Randi all children", childBlocks)
            for (const block of allRecordingBlocks) {
                // get the block parameters
                const parameterField =
                    // the block parameters field should always be in the same place (e.g. in args0)
                    block.inputList[0].fieldRow.find(
                        f => f.name === "BLOCK_PARAMS"
                    ) as ReactParameterField<any>
                // {"totalSamples":number,"timestamp":number,"inputTypes":string[]}
                
                // get the class name parameter and add it to the list of classes
                const classNameField =
                    // the block parameters field should always be in the same place (e.g. in args0)
                    block.inputList[0].fieldRow.find(
                        f => f.name === "CLASS_NAME"
                    ) as FieldVariable
                const className = classNameField.getVariable().name
                if (!updatedClasses.includes(className)) updatedClasses.push(className)
            }
        }

        setClasses(updatedClasses)
        setInputs(updatedInputs)
    }, [workspaceJSON])

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
        <> {visible && <Grid container spacing={1}>
            <Grid item>
                <Box color="text.secondary">
                    Classes: {classes.length ? classes.join(", ") : "none"},
                    Inputs: {inputs.length ? inputs.join(", ") : "none"}
                </Box>
            </Grid>
            <Grid item>
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

export interface DatasetBlockFieldValue {
    parametersVisible: boolean
}

export default class DatasetBlockField extends ReactParameterField<DatasetBlockFieldValue> {
    static KEY = "dataset_block_field_key"
    static EDITABLE = false

    constructor(value: string) {
        super(value)
    }

    static fromJson(options: ReactFieldJSON) {
        return new DatasetBlockField(options?.value)
    }

    protected createContainer(): HTMLDivElement {
        const c = document.createElement("div")
        c.style.display = "inline-block"
        c.style.minWidth = "14rem"
        //c.style.marginLeft = "1rem"
        return c
    }

    get defaultValue() {
        return {
            parametersVisible: false,
        }
    }

    areParametersVisible() {
        const { parametersVisible } = this.value
        return parametersVisible
    }

    setParametersVisible(visible) {
        console.log("Randi setParametersVisible: " + visible)
        this.value = {
            parametersVisible: visible,
        }
        this.rerender()
    }

    getText_() {
        const totalRecordings = 2 // RANDI Todo

        return `${totalRecordings} recordings`
    }

    renderInlineField(): ReactNode {
        return <DatasetParameterWidget
            visible={this.value.parametersVisible}
        />
    }
}
