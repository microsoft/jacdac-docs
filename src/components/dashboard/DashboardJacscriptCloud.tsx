import React, { ChangeEvent, useEffect, useId, useState } from "react"
import { Button, Grid, TextField, Typography } from "@mui/material"
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
import { JDService } from "../../../jacdac-ts/src/jdom/service"

function Controller(props: { service: JDService; connected: boolean }) {
    const { service, connected } = props
    const id = useId()
    const labelid = id + "-label"
    const argsid = id + "-args"
    const [label, setLabel] = useState("")
    const [args, setArgs] = useState("")
    const argsNum = args.length
        ? args
              .replace(/,\s*$/, "")
              .split(",")
              .map(arg => parseFloat(arg.trim()))
        : []
    const argsHasError = argsNum.some(isNaN)

    const handleLabelChange = (ev: ChangeEvent<HTMLInputElement>) =>
        setLabel(ev.target.value)
    const handleArgsChange = (ev: ChangeEvent<HTMLInputElement>) =>
        setArgs(ev.target.value)
    const handleUpload = async () => {
        await service.sendCmdPackedAsync(JacscriptCloudCmd.Upload, [
            label,
            argsNum.map(n => [n]),
        ])
    }

    return (
        <>
            <Grid item xs={12}>
                <Grid container direction="row" spacing={1}>
                    <Grid item>
                        <TextField
                            id={labelid}
                            value={label}
                            label="label"
                            onChange={handleLabelChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            id={argsid}
                            value={args}
                            fullWidth={true}
                            label="arguments, list of numbers"
                            onChange={handleArgsChange}
                            helperText={
                                argsHasError
                                    ? "invalid number syntax"
                                    : undefined
                            }
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <CmdButton
                    variant="outlined"
                    onClick={handleUpload}
                    disabled={!connected || argsHasError}
                >
                    upload
                </CmdButton>
            </Grid>
        </>
    )
}

export default function DashboardJacscriptCloud(props: DashboardServiceProps) {
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
                    <Typography variant="caption">
                        <pre>{msgs.join("\n")}</pre>
                    </Typography>
                </Grid>
            )}
            {expanded && <Controller service={service} connected={connected} />}
        </Grid>
    )
}
