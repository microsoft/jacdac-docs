import React from "react"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import CodeBlock from "../CodeBlock"
import useServiceServer from "../hooks/useServiceServer"
import AzureIoTHubServer from "../../../jacdac-ts/src/servers/azureiothubserver"
import { Grid, List, ListItem, Switch, Typography } from "@material-ui/core"
import useRegister from "../hooks/useRegister"
import {
    AzureIotHubCmd,
    AzureIotHubEvent,
    AzureIotHubReg,
} from "../../../jacdac-ts/jacdac-spec/dist/specconstants"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import { useId } from "react-use-id-hook"
import useEvent from "../hooks/useEvent"
import useChange from "../../jacdac/useChange"

export default function DashboardAzureIoTHub(props: DashboardServiceProps) {
    const { service } = props
    const connectId = useId()

    const hubNameRegister = useRegister(service, AzureIotHubReg.HubName)
    const deviceIdRegister = useRegister(service, AzureIotHubReg.DeviceId)
    const connectionStatusRegister = useRegister(
        service,
        AzureIotHubReg.ConnectionStatus
    )

    const [hubName] = useRegisterUnpackedValue<[string]>(hubNameRegister, props)
    const [deviceId] = useRegisterUnpackedValue<[string]>(
        deviceIdRegister,
        props
    )
    const [connectionStatus] = useRegisterUnpackedValue<[string]>(
        connectionStatusRegister,
        props
    )
    const changeEvent = useEvent(service, AzureIotHubEvent.Change)
    useChange(changeEvent, () => hubNameRegister?.refresh())

    const connected = connectionStatus === "ok"
    const server = useServiceServer<AzureIoTHubServer>(service)
    const messages = server?.messages || []

    const handleConnect = async () => {
        await service.sendCmdAsync(
            connected ? AzureIotHubCmd.Disconnect : AzureIotHubCmd.Connect
        )
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography component="span" variant="body1">
                    hub: {hubName}, device: {deviceId}
                </Typography>
                <Switch
                    checked={connected}
                    aria-labelledby={connectId}
                    onClick={handleConnect}
                />
                <label id={connectId}>
                    {connected ? "connected" : "disconnected"}
                </label>
            </Grid>
            <Grid item xs={12}>
                <List>
                    {messages?.map(({ body }, index) => (
                        <ListItem key={index}>
                            <CodeBlock className="json">{body}</CodeBlock>
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
    )
}
