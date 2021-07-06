import {
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
    createStyles,
} from "@material-ui/core"
import { Button } from "gatsby-theme-material-ui"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import React, { ChangeEvent, useEffect, useContext, useRef, useState } from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"

import ReadingFieldGrid from "../ReadingFieldGrid"
import FieldDataSet from "../FieldDataSet"

import useChange from "../../jacdac/useChange"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"

import { BlockSvg, FieldVariable, Variables, Workspace } from "blockly"

import { arrayConcatMany } from "../../../jacdac-ts/src/jdom/utils"
import { JDRegister } from "../../../jacdac-ts/src/jdom/register"
import { isSensor } from "../../../jacdac-ts/src/jdom/spec"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(1),
        },
        grow: {
            flexGrow: 1,
        },
        field: {
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(1.5),
        },
        segment: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        row: {
            marginBottom: theme.spacing(0.5),
        },
        buttons: {
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(2),
        },
        trend: {
            width: theme.spacing(10),
        },
        vmiddle: {
            verticalAlign: "middle",
        },
    })
)

export default function BlocklyDataRecordingDialog(props: {
    open: boolean
    workspace: Workspace
    onClose: () => void
}) {    
    const MB_CLASS_TYPE = "ModelBlockClass"
    const MODEL_BLOCKS = "model_block_"

    const { open, workspace, onClose } = props
    const [dialogType, setDialogType] =
        useState<"chooseSensors" | "recordData">()
    //const { callback } = props

    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    //const { workspace } = useContext(BlockContext)

    const classes = useStyles()
    const readingRegisters = useChange(bus, bus =>
        arrayConcatMany(
            bus.devices().map(device =>
                device
                    .services()
                    .filter(srv => isSensor(srv.specification))
                    .map(srv => srv.readingRegister)
            )
        )
    )

    /* For choosing sensors */
    const [registerIdsChecked, setRegisterIdsChecked] = useState<string[]>([])
    const [recordingName, setRecordingName] = useState("recording1")
    const [className, setClassName] = useState("class1")
    const [recording, setRecording] = useState(false)
    const [liveDataSet, setLiveDataSet] = useState<FieldDataSet>(undefined)

    const handleRegisterCheck = (reg: JDRegister) => {
        const i = registerIdsChecked.indexOf(reg.id)
        if (i > -1) registerIdsChecked.splice(i, 1)
        else registerIdsChecked.push(reg.id)
        
        // Randi TODO save registerIdsChecked
        registerIdsChecked.sort()
        setRegisterIdsChecked([...registerIdsChecked])
    }

    const recordingRegisters = readingRegisters.filter(
        reg => registerIdsChecked.indexOf(reg.id) > -1
    )
    
    const handleRecordingNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRecordingName(event.target.value.trim())
    }

    const handleClassNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClassName(event.target.value.trim())

        // TODO Randi Check if class name already exists
        //if (newClassName != "" && !Variables.nameUsedWithAnyType(newClassName, workspace)) {
        //Blockly.alert("That variable name is invalid or already exists")

    }

    const handleCancel = () => {
        console.log("Record Data Dialog: ", {workspace})
        onClose()
    }

    const handleNext = () => {
        //recordingName, className, registerIdsChecked

        if (className != null && className != undefined) {
            console.log("Randi Record Dialog: ", {workspace})
            // Get or create new class typed variable
            const classVar = workspace.createVariable(
                className,
                MB_CLASS_TYPE
            )
            
            // Create new recording block on the workspace
            /*const newRecordingBlock = workspace.newBlock(
                MODEL_BLOCKS + "recording"
            ) as BlockSvg

            // Automatically insert the recording name into the new block
            /*const recordingNameField =
                newRecordingBlock.inputList[0].fieldRow.find(
                    f => f.name === "RECORDING_NAME"
                ) as FieldVariable
            recordingNameField.setValue(recordingName)*/

            // Automatically insert the class name into the new block
            /*const classNameField =
                newRecordingBlock.inputList[0].fieldRow.find(
                    f => f.name === "CLASS_NAME"
                ) as FieldVariable
            classNameField.setValue(classVar.getId())*/

            /*
            newRecordingBlock.initSvg()
            newRecordingBlock.render(false)
            workspace.centerOnBlock(newRecordingBlock.id) // TODO Randi figure out why this doesn't exist
            */
        }

        onClose()
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}>
            <DialogContent>
                <Grid container direction={"column"}>
                    <Grid item>
                        <h2>Collect Data</h2>
                        {/* RANDI TODO Toggle button to get data from sensors vs upload from file */}
                        <div key="sensors">
                            <div className={classes.row}>
                                <TextField
                                    className={classes.field}
                                    label="Recording name"
                                    value={recordingName}
                                    variant="outlined"
                                    onChange={handleRecordingNameChange}
                                />
                                <TextField /* RANDI TODO Probably makes more sense as a dropdown */
                                    className={classes.field}
                                    label="Class label"
                                    value={className}
                                    variant="outlined"
                                    onChange={handleClassNameChange}
                                />
                            </div>

                            <h3>Collect data from</h3>
                            {!readingRegisters.length && (
                                <span>Waiting for sensors...</span>
                            )}
                            {!!readingRegisters.length && (
                                <ReadingFieldGrid
                                    readingRegisters={readingRegisters}
                                    registerIdsChecked={registerIdsChecked}
                                    recording={recording}
                                    liveDataSet={liveDataSet}
                                    handleRegisterCheck={handleRegisterCheck}
                                />
                            )}
                        </div>
                            
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    onClick={handleCancel}>
                        Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<NavigateNextIcon />}
                    disabled={!registerIdsChecked.length}
                    onClick={handleNext}>
                    Next
                </Button>
            </DialogActions>
        </Dialog>
    )
}