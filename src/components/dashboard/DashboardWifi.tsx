import React, { ChangeEvent, useEffect, useState } from "react"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
    Typography,
} from "@material-ui/core"
import useWidgetTheme from "../widgets/useWidgetTheme"
import { useId } from "react-use-id-hook"
import SettingsIcon from "@material-ui/icons/Settings"
import CmdButton from "../CmdButton"
import {
    useRegisterBoolValue,
    useRegisterUnpackedValue,
} from "../../jacdac/useRegisterValue"
import {
    WifiAPFlags,
    WifiCmd,
    WifiReg,
    WifiEvent,
} from "../../../jacdac-ts/jacdac-spec/dist/specconstants"
import JDService from "../../../jacdac-ts/src/jdom/service"
import { toHex, unique } from "../../../jacdac-ts/src/jdom/utils"
import useInterval from "../hooks/useInterval"
import useEvent from "../hooks/useEvent"
import useCommandPipeResults from "../hooks/useCommandPipeResults"
import DeleteIcon from "@material-ui/icons/Delete"
import ChipList from "../ui/ChipList"
import useServiceServer from "../hooks/useServiceServer"
import WifiServer from "../../../jacdac-ts/src/servers/wifiserver"
import { Alert, AlertTitle } from "@material-ui/lab"
import { EVENT } from "../../../jacdac-ts/src/jdom/constants"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import useGridBreakpoints from "../useGridBreakpoints"
import WifiIcon from "@material-ui/icons/Wifi"
import WifiOffIcon from "@material-ui/icons/WifiOff"

// flags, rssi, channel, bssid, ssid
type ScanResult = [WifiAPFlags, number, number, Uint8Array, string]

// priority, flags, ssid
type NetworkResult = [number, number, string]

function toMAC(buffer: Uint8Array) {
    const hex = toHex(buffer, ":")
    return hex
}

function toIP(buffer: Uint8Array): string {
    if (!buffer) return undefined
    if (buffer.length === 4)
        return `${buffer[0]}.${buffer[1]}.${buffer[2]}.${buffer[3]}`
    else return toHex(buffer, ".")
}

function Network(props: {
    service: JDService
    ssid: string
    network?: NetworkResult
    info?: ScanResult
    connected: boolean
}) {
    const { service, info, network, ssid, connected } = props
    const [priority, networkFlags] = network || []
    const [scanFlags, rssi, channel] = info || []
    const [password, setPassword] = useState("")
    const known = !!network
    const scanned = !!info
    const passwordId = useId()
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const handleConnect = async () =>
        await service.sendCmdPackedAsync<[string, string]>(
            WifiCmd.AddNetwork,
            [ssid, password || ""],
            true
        )
    const handleForgetNetwork = async () =>
        await service.sendCmdPackedAsync<[string]>(WifiCmd.ForgetNetwork, [
            ssid,
        ])
    // hasPassword == requires password
    const hasPassword = !!(networkFlags & WifiAPFlags.HasPassword)
    const connectError =
        hasPassword && !password ? "password required" : undefined

    return (
        <Card>
            <CardHeader
                title={ssid}
                subheader={[
                    known && `priority ${priority}`,
                    scanned && `RSSI ${rssi}, channel ${channel}`,
                ]
                    .filter(s => !!s)
                    .join(", ")}
            />
            <CardContent>
                {connected && <Alert severity="info">Connected</Alert>}
                {!hasPassword && (
                    <TextField
                        id={passwordId}
                        value={password}
                        label="Password"
                        fullWidth={true}
                        type="password"
                        required={hasPassword}
                        helperText={connectError}
                        onChange={handlePasswordChange}
                    />
                )}
            </CardContent>
            <CardActions>
                {!known ? (
                    <CmdButton
                        variant="contained"
                        color="primary"
                        disabled={!!connectError}
                        onClick={handleConnect}
                    >
                        Connect
                    </CmdButton>
                ) : (
                    <CmdButton
                        variant="outlined"
                        disabled={!!connectError}
                        onClick={handleForgetNetwork}
                    >
                        Forget
                    </CmdButton>
                )}
            </CardActions>
        </Card>
    )
}

function ConnectDialog(props: {
    open: boolean
    setOpen: (v: boolean) => void
    service: JDService
    connectedSsid: string
}) {
    const { open, setOpen, service, connectedSsid } = props
    const breakpoints = useGridBreakpoints()
    const scan = () => service.sendCmdAsync(WifiCmd.Scan)
    const knownNetworksChangedEvent = useEvent(
        service,
        WifiEvent.NetworksChanged
    )
    const knownNetworks = useCommandPipeResults<NetworkResult>(
        service,
        WifiCmd.ListKnownNetworks,
        "i16 i16 s",
        knownNetworksChangedEvent
    )

    // grad scan results
    const scanCompleteEvent = useEvent(service, WifiEvent.ScanComplete)
    const aps = useCommandPipeResults<ScanResult>(
        service,
        WifiCmd.LastScanResults,
        "u32 x[4] i8 u8 b[6] s[33]",
        scanCompleteEvent
    )

    // keep scanning
    useInterval(open, scan, 30000, [service])
    const handleClose = () => setOpen(false)
    const handleForgetAll = async () =>
        await service.sendCmdAsync(WifiCmd.ForgetAllNetworks)

    const ssids = unique([
        ...(knownNetworks || []).map(kn => kn[2]),
        ...(aps || []).map(ap => ap[4]),
    ])

    return (
        <Dialog
            open={open}
            fullWidth={true}
            maxWidth={"lg"}
            onClose={handleClose}
        >
            <DialogContent>
                <DialogTitle>Connect to Wifi</DialogTitle>
                <Grid container spacing={1}>
                    {ssids.map(ssid => (
                        <Grid item {...breakpoints} key={ssid}>
                            <Network
                                service={service}
                                connected={connectedSsid === ssid}
                                ssid={ssid}
                                network={knownNetworks?.find(
                                    kn => kn[2] === ssid
                                )}
                                info={aps?.find(ap => ap[4] === ssid)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </DialogContent>
            <DialogActions>
                <CmdButton
                    trackName="dashboard.wifi.forgetall"
                    onClick={handleForgetAll}
                    title="forget all"
                    icon={<DeleteIcon />}
                >
                    Forget all
                </CmdButton>
            </DialogActions>
        </Dialog>
    )
}

export default function DashboardWifi(props: DashboardServiceProps) {
    const { service } = props
    const [open, setOpen] = useState(false)

    const server = useServiceServer<WifiServer>(service)
    const color = server ? "primary" : "secondary"
    const { textPrimary } = useWidgetTheme(color)
    const enabledRegister = service.register(WifiReg.Enabled)
    const connectedRegister = service.register(WifiReg.Connected)
    const connected = useRegisterBoolValue(connectedRegister, props)
    const ssidRegister = service.register(WifiReg.Ssid)
    const [ssid] = useRegisterUnpackedValue<[string]>(ssidRegister)
    const ipAddressRegister = service.register(WifiReg.IpAddress)
    const [ip] = useRegisterUnpackedValue<[Uint8Array]>(ipAddressRegister)
    const macRegister = service.register(WifiReg.Eui48)
    const [mac] = useRegisterUnpackedValue<[Uint8Array]>(macRegister)
    const lostIpEvent = useEvent(service, WifiEvent.LostIp)
    const gotIpEvent = useEvent(service, WifiEvent.GotIp)

    const handleConnect = async () => {
        if (connected) await enabledRegister.sendSetBoolAsync(false)
        else await service.sendCmdAsync(WifiCmd.Reconnect, undefined, true)
    }
    const handleConfigure = () => setOpen(true)

    // force register refreshs on various events
    const refreshRegisters = () => {
        connectedRegister.clearGetTimestamp()
        ssidRegister.clearGetTimestamp()
        ipAddressRegister.clearGetTimestamp()
    }
    useEffect(
        () => gotIpEvent?.subscribe(EVENT, refreshRegisters),
        [gotIpEvent]
    )
    useEffect(
        () => lostIpEvent?.subscribe(EVENT, refreshRegisters),
        [lostIpEvent]
    )

    return (
        <>
            <Grid
                container
                spacing={1}
                style={{ color: textPrimary, minWidth: "16rem" }}
            >
                {server && (
                    <Grid item xs={12}>
                        <Alert severity="warning">
                            <AlertTitle>Test WiFi</AlertTitle>
                            This WiFi does not exist; it is purely for testing
                            purposes.
                        </Alert>
                    </Grid>
                )}
                <Grid item xs={12}>
                    <Typography component="span" variant="subtitle2">
                        WiFi
                    </Typography>
                    {(ssid || ip || mac) && (
                        <ChipList>
                            {!!ssid && <Chip label={ssid} />}
                            {!!ip && <Chip label={`IP: ${toIP(ip)}`} />}
                            {!!mac && <Chip label={`MAC: ${toMAC(mac)}`} />}
                        </ChipList>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1} direction="row">
                        <Grid item>
                            <CmdButton
                                trackName="dashboard.wifi.connect"
                                variant="outlined"
                                color="primary"
                                onClick={handleConnect}
                                icon={
                                    connected ? <WifiOffIcon /> : <WifiIcon />
                                }
                            />
                        </Grid>
                        <Grid item>
                            <IconButtonWithTooltip
                                onClick={handleConfigure}
                                title="configure"
                            >
                                <SettingsIcon />
                            </IconButtonWithTooltip>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {open && (
                <ConnectDialog
                    open={open}
                    setOpen={setOpen}
                    service={service}
                    connectedSsid={ssid}
                />
            )}
        </>
    )
}
