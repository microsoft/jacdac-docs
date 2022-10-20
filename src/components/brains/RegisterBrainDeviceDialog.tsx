import React, { ChangeEvent, useContext, useId, useState } from "react"
import CmdButton from "../CmdButton"
import {
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    TextField,
} from "@mui/material"
import DialogTitleWithClose from "../ui/DialogTitleWithClose"
import useDevices from "../hooks/useDevices"
import BrainManagerContext from "./BrainManagerContext"
import {
    JDDevice,
    SRV_AZURE_IOT_HUB_HEALTH,
} from "../../../jacdac-ts/src/jacdac"
import SelectDevice from "../select/SelectDevice"
import useBus from "../../jacdac/useBus"

export default function RegisterBrainDeviceDialog(props: {
    open: boolean
    setOpen: (v: boolean) => void
}) {
    const { open, setOpen } = props
    const { brainManager } = useContext(BrainManagerContext)
    const devices = useDevices({
        announced: true,
        serviceClass: SRV_AZURE_IOT_HUB_HEALTH,
    })
    const [deviceId, setDeviceId] = useState(devices[0]?.id || "")
    const bus = useBus()
    const device = bus.node(deviceId) as JDDevice
    const [name, setName] = useState("")
    const nameId = useId()
    const disabled = !device || !name

    const reset = () => {
        setDeviceId("")
        setName("")
        setOpen(false)
    }

    const handleCancel = reset
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const handleOk = async () => {
        await brainManager?.registerDevice(device, name)
        reset()
    }
    return (
        <Dialog open={open} fullWidth={true} maxWidth={"lg"}>
            <DialogTitleWithClose onClose={handleCancel}>
                Register your IoT brain
            </DialogTitleWithClose>
            <DialogContent>
                <Grid container spacing={1}>
                    <Grid item>
                        <SelectDevice
                            devices={devices}
                            deviceId={deviceId}
                            onChange={setDeviceId}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id={nameId}
                            value={name}
                            label="Name"
                            fullWidth={true}
                            type="text"
                            placeholder="Device friendly name"
                            onChange={handleNameChange}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <CmdButton
                    variant="contained"
                    color="primary"
                    disabled={disabled}
                    onClick={handleOk}
                >
                    Register
                </CmdButton>
            </DialogActions>
        </Dialog>
    )
}
