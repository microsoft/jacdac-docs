import React from "react"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import CodeBlock from "../CodeBlock"
import useServiceServer from "../hooks/useServiceServer"
import AzureIoTHubServer from "../../../jacdac-ts/src/servers/azureiothubserver"
import { Grid, List, ListItem, Switch, Typography } from "@material-ui/core"
import useRegister from "../hooks/useRegister"
import {
    AzureIotHubCmd,
    AzureIotHubReg,
} from "../../../jacdac-ts/jacdac-spec/dist/specconstants"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import { useId } from "react-use-id-hook"
import CmdButton from "../CmdButton"

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
    const connected = connectionStatus === "ok"
    const server = useServiceServer<AzureIoTHubServer>(service)
    const messages = server?.messages || []

    const handleConnect = async () =>
        await service.sendCmdAsync(
            connected ? AzureIotHubCmd.Disconnect : AzureIotHubCmd.Connect
        )

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography variant="caption">
                    hub: {hubName}, device: {deviceId}
                </Typography>
            </Grid>
            <Grid item>
                <Switch
                    value={connected}
                    aria-labelledby={connectId}
                    disabled={true}
                />
                <label id={connectId}>connected</label>
            </Grid>
            <Grid item>
                <CmdButton
                    variant="outlined"
                    title={connected ? " disconnect" : "connect"}
                    onClick={handleConnect}
                />
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
