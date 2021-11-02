import React, { useContext } from "react"
import { Grid, Theme } from "@mui/material"
import makeStyles from "@mui/styles/makeStyles"
import createStyles from "@mui/styles/createStyles"
import DeviceCard from "./DeviceCard"
import ServiceCard from "../ServiceCard"
import useChange from "../../jacdac/useChange"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"
import useGridBreakpoints from "../useGridBreakpoints"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(1),
        },
    })
)

export default function DeviceList(props: {
    serviceClass?: number
    linkToService?: boolean
    registerIdentifiers?: number[]
    eventIdentifiers?: number[]
    commandIdentifier?: number
    showServiceName?: boolean
    showMemberName?: boolean
    showTemperature?: boolean
    showFirmware?: boolean
    showServiceButtons?: boolean
}) {
    const {
        serviceClass,
        linkToService,
        registerIdentifiers,
        showServiceName,
        showMemberName,
        showFirmware,
        showTemperature,
        showServiceButtons,
        eventIdentifiers,
        commandIdentifier,
    } = props
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const devices = useChange(bus, n => n.devices({ serviceClass }))
    const services = useChange(bus, n => n.services({ serviceClass }))
    const classes = useStyles()
    const hasServiceClass = serviceClass !== undefined
    const gridBreakpoints = useGridBreakpoints(devices?.length)

    return (
        <Grid container spacing={2} className={classes.root}>
            {!hasServiceClass &&
                devices.map(device => (
                    <Grid key={device.id} item {...gridBreakpoints}>
                        <DeviceCard
                            device={device}
                            showDescription={true}
                            showTemperature={showTemperature}
                            showFirmware={showFirmware}
                            showServices={showServiceButtons}
                        />
                    </Grid>
                ))}
            {hasServiceClass &&
                services.map(service => {
                    return (
                        <Grid key={service.id} item {...gridBreakpoints}>
                            <ServiceCard
                                service={service}
                                linkToService={linkToService}
                                showServiceName={showServiceName}
                                showMemberName={showMemberName}
                                registerIdentifiers={registerIdentifiers}
                                eventIdentifiers={eventIdentifiers}
                                commandIdentifier={commandIdentifier}
                            />
                        </Grid>
                    )
                })}
        </Grid>
    )
}
