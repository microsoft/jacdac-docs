import { Dialog, DialogContent, Grid } from "@mui/material"
import React, { useContext } from "react"
import { useId } from "react"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"
import ConnectButton from "../buttons/ConnectButton"
import useDeviceSpecifications from "../devices/useDeviceSpecifications"
import { Transport } from "../../../jacdac-ts/src/jdom/transport/transport"
import DialogTitleWithClose from "../ui/DialogTitleWithClose"
import { Flags } from "../../../jacdac-ts/src/jdom/flags"
import DeveloperModeAlert from "../alert/DeveloperModeAlert"
import { DeviceSpecificationIcon } from "../devices/DeviceIcon"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import { identifierToUrlPath } from "../../../jacdac-ts/src/jdom/spec"
import useDeveloperMode from "../hooks/useDeveloperMode"

function ConnectTransport(props: {
    transport: Transport
    onClose: () => void
}) {
    const { transport, onClose } = props
    const { developerMode } = useDeveloperMode()
    const { type: transportType } = transport
    const devices = useDeviceSpecifications({
        transport: transportType,
        includeExperimental: developerMode,
        includeDeprecated: developerMode,
    })
    if (!devices?.length && !Flags.diagnostics) return null
    return (
        <Grid item xs={12}>
            <Grid container spacing={1} alignContent="flex-end">
                <Grid item alignSelf="center">
                    <ConnectButton
                        key={transport.type}
                        transport={transport}
                        onClick={onClose}
                        full={true}
                        typeInTitle={true}
                    />
                </Grid>
                <Grid item xs>
                    <Grid container spacing={1}>
                        {devices.map(device => (
                            <Grid item key={device.id}>
                                <IconButtonWithTooltip
                                    title={device.name}
                                    to={`/devices/${identifierToUrlPath(
                                        device.id
                                    )}/`}
                                    onClick={onClose}
                                >
                                    <DeviceSpecificationIcon
                                        specification={device}
                                        avatar={true}
                                    />
                                </IconButtonWithTooltip>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default function ConnectTransportDialog(props: {
    open: boolean
    onClose: () => void
}) {
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const { transports } = bus
    const { open, onClose } = props
    const dialogId = useId()
    const labelId = dialogId + "-label"
    return (
        <Dialog
            id={dialogId}
            aria-labelledby={labelId}
            open={open}
            onClose={onClose}
            fullWidth={true}
        >
            <DialogTitleWithClose onClose={onClose} id={labelId}>
                Connect to a device
            </DialogTitleWithClose>
            <DialogContent>
                <DeveloperModeAlert />
                <Grid container spacing={2}>
                    {transports.map(transport => (
                        <ConnectTransport
                            key={transport.type}
                            transport={transport}
                            onClose={onClose}
                        />
                    ))}
                </Grid>
            </DialogContent>
        </Dialog>
    )
}
