import React, { lazy,
                ReactNode,
                useContext,
                useEffect,
                useState } from "react"
import {
    Grid,
    Box,
    Button,
    TextField,
    Tooltip
} from "@material-ui/core"
import CallSplitIcon from "@material-ui/icons/CallSplit"
import DownloadIcon from "@material-ui/icons/GetApp"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import ReactField, { ReactFieldJSON, VALUE_CHANGE } from "../ReactField"
import ReactParameterField from "../ReactParameterField"
import WorkspaceContext from "../../WorkspaceContext"

function DatasetParameterWidget() {
    const { flyout, sourceId, sourceBlock } = useContext(WorkspaceContext)
    const [classes, setClasses] = useState<string[]>([])
    const [inputs, setInputs] = useState<string[]>([])

    const handleSplitDataset = () => { console.log("Split dataset") }
    const handleDownloadDataset = () => { console.log("Download dataset") }

    /*useEffect(() => {
    }, [sourceBlock])*/

    return (
        <Grid
            container
            spacing={1}
        >
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
            parametersVisible: false
        }
    }

    
    areParametersVisible() {
        const { parametersVisible } = this.value
        return parametersVisible
    }

    setParametersVisible(visible) {
        console.log("Randi setParametersVisible: " + visible)
        this.value = {
            parametersVisible: visible
        }
        this.updateView() // This doesn't seem to do anything
    }

    getText_() {
        const totalRecordings = 2 // RANDI Todo

        return `${totalRecordings} recordings`
    }

    renderInlineField(): ReactNode {        
        //return <DatasetParameterWidget />
        return (
            <> { this.value.parametersVisible && <DatasetParameterWidget /> } </>
        )
    }
}