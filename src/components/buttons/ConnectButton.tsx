import React from "react"
import Button from "../ui/Button"
import Transport, {
    ConnectionState,
} from "../../../jacdac-ts/src/jdom/transport/transport"
import { Badge } from "@mui/material"
import IconButtonWithProgress from "../ui/IconButtonWithProgress"
import TransportIcon from "../icons/TransportIcon"
import useChange from "../../jacdac/useChange"
import useMediaQueries from "../hooks/useMediaQueries"

export default function ConnectButton(props: {
    full?: boolean
    className?: string
    transparent?: boolean
    specification?: jdspec.DeviceSpec
    transport: Transport
    onClick?: () => void
}) {
    const { full, className, transparent, transport, onClick, specification } =
        props
    const { type } = transport
    const connectionState = useChange(transport, t => t.connectionState)
    const showDisconnect =
        connectionState == ConnectionState.Connected ||
        connectionState == ConnectionState.Disconnecting
    const inProgress =
        connectionState == ConnectionState.Connecting ||
        connectionState == ConnectionState.Disconnecting
    const { mobile } = useMediaQueries()
    const small = full !== true && (!full || mobile)
    const disabled =
        connectionState != ConnectionState.Connected &&
        connectionState != ConnectionState.Disconnected
    const handleClick = showDisconnect
        ? async () => {
              onClick?.()
              await transport.disconnect()
          }
        : async () => {
              onClick?.()
              await transport.connect()
          }
    const icon = (
        <Badge color="primary" variant="dot" invisible={!showDisconnect}>
            <TransportIcon type={transport.type} />
        </Badge>
    )
    const label = showDisconnect
        ? `disconnect from ${type}`
        : `connect to ${specification?.name || type}`
    const title = showDisconnect ? `disconnect` : `connect`
    const trackName = `transport.connect.${type}`
    const trackProperties = {
        transport: type,
    }

    if (small)
        return (
            <span>
                <IconButtonWithProgress
                    aria-label={label}
                    title={label}
                    color={transparent ? "inherit" : "primary"}
                    className={className}
                    disabled={disabled}
                    indeterminate={inProgress}
                    onClick={handleClick}
                >
                    {icon}
                </IconButtonWithProgress>
            </span>
        )
    else
        return (
            <Button
                trackName={trackName}
                trackProperties={trackProperties}
                aria-label={label}
                title={label}
                size="small"
                variant={transparent ? "outlined" : "contained"}
                color={transparent ? "inherit" : "primary"}
                className={className}
                startIcon={icon}
                disabled={disabled}
                onClick={handleClick}
            >
                {title}
            </Button>
        )
}
