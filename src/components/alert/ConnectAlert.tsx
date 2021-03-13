// tslint:disable-next-line: no-submodule-imports
import { Box, createStyles, makeStyles } from "@material-ui/core"
// tslint:disable-next-line: no-submodule-imports
import Alert from "../ui/Alert"
import React, { useContext } from "react"
import {
    ConnectionState,
    JDTransport,
} from "../../../jacdac-ts/src/jdom/transport"
import { serviceSpecificationFromClassIdentifier } from "../../../jacdac-ts/src/jdom/spec"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"
import ConnectButton from "../../jacdac/ConnectButton"
import { NoSsr } from "@material-ui/core"
import useChange from "../../jacdac/useChange"

const useStyles = makeStyles(theme =>
    createStyles({
        button: {
            marginLeft: theme.spacing(2),
        },
    })
)

function NoSsrConnectAlert(props: {
    serviceClass?: number
    transport: JDTransport
}) {
    const classes = useStyles()
    const { serviceClass, transport } = props
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const devices = useChange(bus, b => b.devices({ serviceClass }))
    const spec = serviceSpecificationFromClassIdentifier(serviceClass)
    const connectionState = useChange(transport, t => t.connectionState)

    if (!devices?.length && connectionState === ConnectionState.Disconnected)
        return (
            <Box displayPrint="none">
                <Alert severity="info" closeable={true}>
                    {!spec && <span>Did you connect your device?</span>}
                    {spec && <span>Did you connect a {spec.name} device?</span>}
                    <ConnectButton
                        transport={transport}
                        className={classes.button}
                        full={true}
                        transparent={true}
                    />
                </Alert>
            </Box>
        )
    return null
}

export default function ConnectAlert(props: { serviceClass?: number }) {
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const { transports } = bus
    return (
        <NoSsr>
            {transports.map(transport => (
                <NoSsrConnectAlert
                    key={transport.type}
                    transport={transport}
                    {...props}
                />
            ))}
        </NoSsr>
    )
}
