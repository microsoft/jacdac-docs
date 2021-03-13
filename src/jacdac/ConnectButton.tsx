import React, { useContext } from "react"
import { Button } from "gatsby-theme-material-ui"
import { BusState, JDTransport } from "../../jacdac-ts/src/jdom/bus"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import UsbIcon from "@material-ui/icons/Usb"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import { Badge, useMediaQuery, useTheme } from "@material-ui/core"
import IconButtonWithProgress from "../components/ui/IconButtonWithProgress"
import { MOBILE_BREAKPOINT } from "../components/layout"
import JacdacContext, { JacdacContextProps } from "./Context"
import { BLE_TRANSPORT, USB_TRANSPORT } from "../../jacdac-ts/src/jdom/constants"

function TransportConnectButton(props: {
    full?: boolean
    className?: string
    transparent?: boolean
    transport: JDTransport
}) {
    const { full, className, transparent, transport } = props
    const { connectionState, connect, disconnect, type } = transport
    const theme = useTheme()
    const showDisconnect =
        connectionState == BusState.Connected ||
        connectionState == BusState.Disconnecting
    const inProgress =
        connectionState == BusState.Connecting ||
        connectionState == BusState.Disconnecting
    const small =
        full !== true &&
        (!full || useMediaQuery(theme.breakpoints.down(MOBILE_BREAKPOINT)))
    const disabled =
        connectionState != BusState.Connected &&
        connectionState != BusState.Disconnected
    const onClick = showDisconnect ? disconnect : () => connect()
    const icon = (
        <Badge color="primary" variant="dot" invisible={!showDisconnect}>
            {type === USB_TRANSPORT && <UsbIcon />}
            {type === BLE_TRANSPORT && <BluetoothIcon />}
        </Badge>
    )
    const label = showDisconnect
        ? `disconnect from ${type}`
        : `connect to a Jacdac device via ${type}`
    const title = showDisconnect ? "disconnect" : "connect"

    if (small)
        return (
            <span>
                <IconButtonWithProgress
                    aria-label={label}
                    title={title}
                    color={transparent ? "inherit" : "primary"}
                    className={className}
                    disabled={disabled}
                    indeterminate={inProgress}
                    onClick={onClick}
                >
                    {icon}
                </IconButtonWithProgress>
            </span>
        )
    else
        return (
            <Button
                aria-label={label}
                title={title}
                size="small"
                variant={transparent ? "outlined" : "contained"}
                color={transparent ? "inherit" : "primary"}
                className={className}
                startIcon={icon}
                disabled={disabled}
                onClick={onClick}
            >
                {title}
            </Button>
        )
}

export default function ConnectButton(props: {
    full?: boolean
    className?: string
    transparent?: boolean
}) {
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const { transports } = bus
    return (
        <>
            {transports.map(transport => (
                <TransportConnectButton
                    key={transport.type}
                    transport={transport}
                    {...props}
                />
            ))}
        </>
    )
}
