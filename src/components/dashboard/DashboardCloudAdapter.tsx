import React, { useEffect, useState } from "react"
import { Grid, Typography } from "@mui/material"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import { DashboardServiceProps } from "./DashboardServiceWidget"
import useServiceServer from "../hooks/useServiceServer"
import {
    CloudAdapterServer,
    CloudAdapterUploadJSONRequest,
    UPLOAD_JSON,
} from "../../../jacdac-ts/src/servers/cloudadapterserver"
import {
    CloudAdapterCmd,
    CloudAdapterReg,
} from "../../../jacdac-ts/src/jdom/constants"
import useRegister from "../hooks/useRegister"
import {
    useRegisterBoolValue,
    useRegisterUnpackedValue,
} from "../../jacdac/useRegisterValue"
import SwitchWithLabel from "../ui/SwitchWithLabel"
import DashboardRegisterValueFallback from "./DashboardRegisterValueFallback"
import CmdButton from "../CmdButton"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import HighlightTextField from "../ui/HighlightTextField"
import { JSONTryParse } from "../../../jacdac-ts/src/jacdac"

function Controller(props: {
    service: JDService
    server: CloudAdapterServer
    connected: boolean
}) {
    const { service, connected } = props
    const [source, setSource] = useState("")
    const json = JSONTryParse(source)

    const handleUpload = async () => {
        await service.sendCmdPackedAsync(CloudAdapterCmd.UploadJson, [
            JSON.stringify(json),
        ])
    }

    return (
        <>
            <Grid item xs={12}>
                <HighlightTextField
                    code={source}
                    language={"json"}
                    onChange={setSource}
                />
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={1} direction="row">
                    <Grid item>
                        <CmdButton
                            variant="outlined"
                            onClick={handleUpload}
                            disabled={!connected || json === undefined}
                        >
                            upload
                        </CmdButton>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default function DashboardCloudAdapter(props: DashboardServiceProps) {
    const { service, expanded } = props

    const connectedRegister = useRegister(service, CloudAdapterReg.Connected)
    const connectionNameRegister = useRegister(
        service,
        CloudAdapterReg.ConnectionName
    )
    const connected = useRegisterBoolValue(connectedRegister, props)
    const [connectionName] = useRegisterUnpackedValue<[string]>(
        connectionNameRegister,
        props
    )
    const server = useServiceServer<CloudAdapterServer>(
        service,
        () => new CloudAdapterServer()
    )
    const color = server ? "secondary" : "primary"

    const [msgs, setMsgs] = useState<string[]>([])

    useEffect(() => setMsgs([]), [connectedRegister])
    useEffect(
        () =>
            server?.subscribe(
                UPLOAD_JSON,
                (req: CloudAdapterUploadJSONRequest) => {
                    setMsgs(prev => [...prev, req.json].slice(-10))
                }
            ),
        [server]
    )

    const handleConnected = server
        ? () => {
              server.connected = !server.connected
              connectedRegister.scheduleRefresh()
          }
        : undefined
    if (connected === undefined)
        return <DashboardRegisterValueFallback register={connectedRegister} />

    return (
        <Grid container spacing={1}>
            {connectionName && (
                <Grid item xs={12}>
                    <Typography variant="caption">{connectionName}</Typography>
                </Grid>
            )}
            <Grid item xs={12}>
                <SwitchWithLabel
                    checked={connected}
                    label="connected"
                    readOnly={!server || server.controlled}
                    color={color}
                    onChange={handleConnected}
                />
            </Grid>
            {!!msgs?.length && (
                <Grid item xs={12}>
                    <pre style={{ whiteSpace: "pre-wrap", fontSize: "70%" }}>
                        {msgs.join("\n")}
                    </pre>
                </Grid>
            )}
            {expanded && (
                <Controller
                    service={service}
                    server={server}
                    connected={connected}
                />
            )}
        </Grid>
    )
}
