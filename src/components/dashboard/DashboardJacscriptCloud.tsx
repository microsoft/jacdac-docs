import React, { useEffect, useState } from "react"
import { Button, Grid, Typography } from "@mui/material"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import { DashboardServiceProps } from "./DashboardServiceWidget"
import useServiceServer from "../hooks/useServiceServer"
import {
    JacscriptCloudCommandResponse,
    JacscriptCloudServer,
    JacscriptCloudUploadRequest,
    UPLOAD,
} from "../../../jacdac-ts/src/servers/jacscriptcloudserver"
import {
    EVENT,
    JacscriptCloudCmd,
    JacscriptCloudEvent,
    JacscriptCloudReg,
} from "../../../jacdac-ts/src/jdom/constants"
import useRegister from "../hooks/useRegister"
import { useRegisterBoolValue } from "../../jacdac/useRegisterValue"
import SwitchWithLabel from "../ui/SwitchWithLabel"
import DashboardRegisterValueFallback from "./DashboardRegisterValueFallback"
import CmdButton from "../CmdButton"
import useEvent from "../hooks/useEvent"
import useBus from "../../jacdac/useBus"

export default function DashboardJacscriptManager(
    props: DashboardServiceProps
) {
    const { service, expanded } = props
    const bus = useBus()

    const connectedRegister = useRegister(service, JacscriptCloudReg.Connected)
    const cloudCommandEvent = useEvent(
        service,
        JacscriptCloudEvent.CloudCommand
    )
    const connected = useRegisterBoolValue(connectedRegister, props)
    const server = useServiceServer(service, () => new JacscriptCloudServer())
    const color = server ? "secondary" : "primary"

    const [msgs, setMsgs] = useState<string[]>([])

    useEffect(
        () =>
            cloudCommandEvent.subscribe(
                EVENT,
                (req: JacscriptCloudCommandResponse) =>
                    setMsgs(prev =>
                        [
                            ...prev,
                            `${bus.timestamp | 0}> command: ${
                                req.status
                            }, ${req.args.join(", ")}`,
                        ].slice(-10)
                    )
            ),
        [cloudCommandEvent]
    )
    useEffect(() => setMsgs([]), [connectedRegister])
    useEffect(
        () =>
            server?.subscribe(UPLOAD, (req: JacscriptCloudUploadRequest) => {
                setMsgs(prev =>
                    [
                        ...prev,
                        `${bus.timestamp | 0}> upload: ${
                            req.label
                        } -> ${req.args.join(", ")}`,
                    ].slice(-10)
                )
            }),
        [server]
    )

    const handleConnected = server
        ? () => {
              server.connected = !server.connected
              connectedRegister.scheduleRefresh()
          }
        : undefined

    const handleUpload = async () => {
        const label = "test"
        const args = [1, 2, 3]
        await service.sendCmdPackedAsync(JacscriptCloudCmd.Upload, [
            label,
            args.map(n => [n]),
        ])
    }

    if (connected === undefined)
        return <DashboardRegisterValueFallback register={connectedRegister} />

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography variant="caption">Jacscript Cloud</Typography>
            </Grid>
            <Grid item xs={12}>
                <SwitchWithLabel
                    checked={connected}
                    label="connected"
                    readOnly={!server}
                    color={color}
                    onChange={handleConnected}
                />
            </Grid>
            {!!msgs?.length && (
                <Grid item xs={12}>
                    <pre>{msgs.join("\n")}</pre>
                </Grid>
            )}
            {expanded && (
                <Grid item xs={12}>
                    <CmdButton
                        variant="outlined"
                        onClick={handleUpload}
                        disabled={!connected}
                    >
                        upload
                    </CmdButton>
                </Grid>
            )}
        </Grid>
    )
}
