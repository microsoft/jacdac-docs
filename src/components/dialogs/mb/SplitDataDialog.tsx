import React, { useEffect, useContext, useState } from "react"

import {
    Button,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
} from "@material-ui/core"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"

import { WorkspaceSvg } from "blockly"
import MBModel from "../../model-editor/MBModel"
import MBDataSet from "../../model-editor/MBDataSet"

export default function BlocklySplitDataDialog(props: {
    classes: any
    chartPalette: string[]
    open: boolean
    onDone: (
        model: MBModel,
        modelName: string,
        dataset: MBDataSet,
        datasetName: string
    ) => void
    workspace: WorkspaceSvg
}) {
    const { classes, chartPalette, open, onDone, workspace } = props
    const [dialogType, setDialogType] = useState<"page1" | "page2">("page1")

    /* For interface controls */
    const resetInputs = () => {}
    const handleCancel = () => {
        // reset the user inputs
        resetInputs()
        // close the modal
        onDone(null, null, null, null)
    }
    const handleNext = () => {
        // go to the next page
        setDialogType("page2")
    }

    const handleDone = () => {
        // reset the user inputs
        resetInputs()

        // call the done function
        onDone(null, null, null, null)
    }

    if (dialogType == "page1")
        return (
            <Dialog open={open} onClose={handleCancel}>
                <DialogContent>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <h2>Train model</h2>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<NavigateNextIcon />}
                        disabled={true}
                        onClick={handleNext}
                    >
                        Next
                    </Button>
                </DialogActions>
            </Dialog>
        )
    else
        return (
            <Dialog open={open} onClose={handleCancel}>
                <DialogContent>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <h2>Test model</h2>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<NavigateNextIcon />}
                        disabled={false}
                        onClick={handleDone}
                    >
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        )
}
