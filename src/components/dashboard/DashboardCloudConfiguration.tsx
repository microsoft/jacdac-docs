import React, {
    ChangeEvent,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import {
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
    Typography,
} from "@mui/material"
import useServiceClient from "../../jacdac/useServiceClient"
import { CloudConfigurationClient } from "../../../jacdac-ts/src/clients/cloudconfigurationclient"
import useWidgetTheme from "../widgets/useWidgetTheme"
import {
    CloudConfigurationCmd,
    CloudConfigurationConnectionStatus,
    CloudConfigurationEvent,
    CloudConfigurationReg,
} from "../../../jacdac-ts/jacdac-spec/dist/specconstants"
import { useId } from "react"
import SettingsIcon from "@mui/icons-material/Settings"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import CmdButton from "../CmdButton"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import ChipList from "../ui/ChipList"
import useEvent from "../hooks/useEvent"
import useEventCount from "../../jacdac/useEventCount"
import DialogTitleWithClose from "../ui/DialogTitleWithClose"
import useChange from "../../jacdac/useChange"
import useEffectAsync from "../useEffectAsync"
import useRegister from "../hooks/useRegister"

function ConnectionStringDialog(props: {
    open: boolean
    setOpen: (v: boolean) => void
    client: CloudConfigurationClient
}) {
    const { client, open, setOpen } = props
    const [value, setValue] = useState("")
    const connectionStringId = useId()
    const handleCancel = () => {
        setValue("")
        setOpen(false)
    }
    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const handleOk = async mounted => {
        await client.setConnectionString(value || "")
        if (!mounted()) return
        setValue("")
        setOpen(false)
    }
    return (
        <Dialog open={open} fullWidth={true} maxWidth={"md"}>
            <DialogTitleWithClose onClose={handleCancel}>
                Enter device connection string
            </DialogTitleWithClose>
            <DialogContent>
                <Typography component="p" variant="caption">
                    Open your IoT Hub in the Azure portal, select IoT Devices,
                    select or create a device, copy the primary or secondary
                    connection string.
                </Typography>
                <TextField
                    sx={{ mt: 2 }}
                    id={connectionStringId}
                    value={value}
                    label="Value"
                    fullWidth={true}
                    type="password"
                    size="small"
                    placeholder="Connection string"
                    onChange={handleValueChange}
                />
            </DialogContent>
            <DialogActions>
                <CmdButton
                    variant="contained"
                    color="primary"
                    disabled={!client}
                    onClick={handleOk}
                >
                    Save
                </CmdButton>
            </DialogActions>
        </Dialog>
    )
}

export default function DashboardCloudConfiguration(
    props: DashboardServiceProps
) {
    const { service } = props
    const [open, setOpen] = useState(false)

    const serverNameRegister = useRegister(
        service,
        CloudConfigurationReg.ServerName
    )
    const cloudDeviceIdRegister = useRegister(
        service,
        CloudConfigurationReg.CloudDeviceId
    )
    const cloudTypeRegister = useRegister(
        service,
        CloudConfigurationReg.CloudType
    )
    const [serverName] = useRegisterUnpackedValue<[string]>(
        serverNameRegister,
        props
    )
    const [cloudDeviceId] = useRegisterUnpackedValue<[string]>(
        cloudDeviceIdRegister,
        props
    )
    const [cloudType] = useRegisterUnpackedValue<[string]>(
        cloudTypeRegister,
        props
    )
    const connectionStatusRegister = service.register(
        CloudConfigurationReg.ConnectionStatus
    )
    const [connectionStatus] = useRegisterUnpackedValue<
        [CloudConfigurationConnectionStatus]
    >(connectionStatusRegister, props)
    const messageSentEvent = useEvent(
        service,
        CloudConfigurationEvent.MessageSent
    )
    const messageSent = useEventCount(messageSentEvent)
    const factory = useCallback(srv => new CloudConfigurationClient(srv), [])
    const client = useServiceClient(service, factory)
    const color = "primary"
    const connected =
        connectionStatus === CloudConfigurationConnectionStatus.Connected

    const handleConnect = async () => {
        const cmd = connected
            ? CloudConfigurationCmd.Disconnect
            : CloudConfigurationCmd.Connect
        await service.sendCmdAsync(cmd)
    }
    const handleConfigure = () => setOpen(true)
    return (
        <>
            {cloudType && (
                <Typography component="span" variant="subtitle2">
                    {cloudType}
                </Typography>
            )}
            <ChipList>
                {serverName && (
                    <Chip
                        color={connected ? "primary" : "default"}
                        label={serverName}
                        onClick={handleConnect}
                        disabled={connectionStatus === undefined}
                        title={
                            CloudConfigurationConnectionStatus[
                                connectionStatus
                            ] || "Waiting..."
                        }
                    />
                )}
                {cloudDeviceId && <Chip label={`device: ${cloudDeviceId}`} />}
                {messageSent !== undefined && (
                    <Chip label={`messages: ${messageSent}`} />
                )}
                <IconButtonWithTooltip
                    title="Configure"
                    onClick={handleConfigure}
                >
                    <SettingsIcon />
                </IconButtonWithTooltip>
            </ChipList>
            {client && (
                <ConnectionStringDialog
                    client={client}
                    open={open}
                    setOpen={setOpen}
                />
            )}
        </>
    )
}
