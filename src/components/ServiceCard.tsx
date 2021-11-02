import React, { useState } from "react"
import JDService from "../../jacdac-ts/src/jdom/service"
import makeStyles from "@mui/styles/makeStyles"
// tslint:disable-next-line: no-submodule-imports
import Card from "@mui/material/Card"
// tslint:disable-next-line: no-submodule-imports
import CardContent from "@mui/material/CardContent"
// tslint:disable-next-line: no-submodule-imports
import Typography from "@mui/material/Typography"
import { Link } from "gatsby-theme-material-ui"
import ServiceRegisters from "./ServiceRegisters"
import ServiceEvents from "./ServiceEvents"
import { isCommand } from "../../jacdac-ts/src/jdom/spec"
import { CardActions, List, ListItem } from "@mui/material"
import DeviceCardHeader from "./devices/DeviceCardHeader"
import { DeviceLostAlert } from "./alert/DeviceLostAlert"
import CommandInput from "./CommandInput"
import { DecodedPacket } from "../../jacdac-ts/src/jdom/pretty"
import DecodedPacketItem from "./DecodedPacketItem"
import ServiceSpecificationStatusAlert from "./specification/ServiceSpecificationStatusAlert"
import MembersInput from "./fields/MembersInput"

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
})

export default function ServiceCard(props: {
    service: JDService
    linkToService?: boolean
    showServiceName?: boolean
    showMemberName?: boolean
    registerIdentifiers?: number[]
    eventIdentifiers?: number[]
    commandIdentifier?: number
}) {
    const {
        service,
        linkToService,
        registerIdentifiers,
        showServiceName,
        showMemberName,
        eventIdentifiers,
        commandIdentifier,
    } = props
    const { specification } = service
    const [reports, setReports] = useState<DecodedPacket[]>(undefined)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [commandArgs, setCommandArgs] = useState<any[]>([])
    const classes = useStyles()
    const hasCommandIdentifier = commandIdentifier !== undefined
    const hasRegisterIdentifiers = !!registerIdentifiers?.length
    const hasEventIdentifiers = !!eventIdentifiers?.length
    const command =
        commandIdentifier !== undefined &&
        specification?.packets.find(
            pkt => isCommand(pkt) && pkt.identifier === commandIdentifier
        )

    return (
        <Card className={classes.root}>
            <DeviceCardHeader device={service.device} showAvatar={true} />
            <CardContent>
                {showServiceName && (
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        <Link
                            to={
                                linkToService && service.specification
                                    ? `/services/${service.specification.shortId}/`
                                    : "/clients/javascript/jdom/service"
                            }
                        >
                            {service.name}
                        </Link>
                    </Typography>
                )}
                <Typography variant="body2" component="div">
                    {hasRegisterIdentifiers && (
                        <ServiceRegisters
                            key={"reg" + service.id}
                            service={service}
                            showRegisterName={showMemberName}
                            registerIdentifiers={registerIdentifiers}
                        />
                    )}
                    {hasEventIdentifiers && (
                        <ServiceEvents
                            key={"ev" + service.id}
                            service={service}
                            showEventName={showMemberName}
                            eventIdentifiers={eventIdentifiers}
                        />
                    )}
                    {command && (
                        <MembersInput
                            serviceSpecification={specification}
                            serviceMemberSpecification={command}
                            specifications={command.fields}
                            values={commandArgs}
                            setValues={setCommandArgs}
                            showDataType={true}
                        />
                    )}
                    {!!reports?.length && (
                        <List key={"reports"} dense>
                            {reports?.map((report, ri) => (
                                <ListItem key={`report${ri}`}>
                                    <DecodedPacketItem pkt={report} />
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Typography>
                {!hasCommandIdentifier &&
                    !hasRegisterIdentifiers &&
                    !hasEventIdentifiers && (
                        <ServiceSpecificationStatusAlert
                            specification={specification}
                        />
                    )}
                <DeviceLostAlert device={service?.device} />
            </CardContent>
            <CardActions>
                {command && (
                    <CommandInput
                        service={service}
                        command={command}
                        args={commandArgs}
                        setReports={setReports}
                    />
                )}
            </CardActions>
        </Card>
    )
}
