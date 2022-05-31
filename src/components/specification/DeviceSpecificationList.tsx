import React, { useMemo } from "react"
import { Grid, Typography } from "@mui/material"
import { escapeDeviceIdentifier } from "../../../jacdac-ts/jacdac-spec/spectool/jdspec"
import useDeviceSpecifications from "../devices/useDeviceSpecifications"
import useGridBreakpoints from "../useGridBreakpoints"
import { serviceName as renderServiceName } from "../../../jacdac-ts/src/jdom/pretty"
import DeviceSpecificationCard from "./DeviceSpecificationCard"
import { arrayify } from "../../../jacdac-ts/src/jdom/utils"
import { isEC30 } from "../enclosure/ec30"
import { serviceSpecificationFromName } from "../../../jacdac-ts/src/jdom/spec"

export default function DeviceSpecificationList(props: {
    query?: string
    count?: number
    company?: string
    serviceClass?: number
    serviceName?: string
    devices?: jdspec.DeviceSpec[]
    updates?: boolean
    buyNow?: boolean
    makeCode?: boolean
    firmwareSources?: boolean
    hardwareDesign?: boolean
    transports?: jdspec.TransportType[]
    tags?: string[]
    ec30?: boolean
}) {
    const {
        query,
        count,
        serviceClass,
        serviceName,
        company,
        devices,
        updates,
        buyNow,
        makeCode,
        hardwareDesign,
        firmwareSources,
        transports,
        tags,
        ec30,
    } = props
    const specifications = useDeviceSpecifications()
    const specs = useMemo(() => {
        let r = (devices || specifications).slice(0)
        if (company) {
            const lc = escapeDeviceIdentifier(company)
            r = r.filter(spec =>
                escapeDeviceIdentifier(spec.company).startsWith(lc)
            )
        }
        if (!isNaN(serviceClass))
            r = r.filter(spec => spec.services?.indexOf(serviceClass) > -1)
        if (serviceName) {
            const si = serviceSpecificationFromName(serviceName)
            if (si)
                r = r.filter(
                    spec => spec.services?.indexOf(si.classIdentifier) > -1
                )
        }
        if (updates) r = r.filter(spec => spec.repo)
        if (buyNow) r = r.filter(spec => !!spec.storeLink)
        if (hardwareDesign) r = r.filter(spec => spec.hardwareDesign)
        if (firmwareSources) r = r.filter(spec => spec.firmwareSource)
        if (ec30)
            r = r.filter(
                spec => isEC30(spec.shape) || spec.tags?.indexOf("ec30") > -1
            )
        if (makeCode)
            r = r.filter(spec => !!arrayify(spec.makeCodeRepo)?.length)
        if (transports?.length)
            r = r.filter(spec => transports.indexOf(spec.transport?.type) > -1)
        if (tags?.length)
            r = r.filter(spec => spec.tags?.find(tag => tags.includes(tag)))
        if (query)
            r = r.filter(spec =>
                [
                    spec.name,
                    spec.description,
                    spec.company,
                    ...(spec.productIdentifiers || []).map(p => p.toString(16)),
                    ...spec.services.map(p => p.toString(16)),
                    ...spec.services.map(srv => renderServiceName(srv)),
                ].some(s => s?.toLowerCase()?.indexOf(query.toLowerCase()) > -1)
            )
        r.sort(
            (a, b) =>
                (a.connector === "noConnector" ? 1 : 0) -
                (b.connector === "noConnector" ? 1 : 0)
        )
        if (count !== undefined) r = r.slice(0, count)
        return r
    }, [
        query,
        serviceClass,
        serviceName,
        count,
        company,
        JSON.stringify(devices?.map(d => d.id)),
        specifications,
        updates,
        buyNow,
        makeCode,
        hardwareDesign,
        firmwareSources,
        transports?.join(","),
        tags?.join(","),
        ec30,
    ])
    const gridBreakpoints = useGridBreakpoints(specs.length)
    const size = specs?.length < 6 ? "catalog" : "preview"

    if (!specs.length)
        return (
            <Typography variant="body1">
                {query
                    ? `No device matching the search criterias.`
                    : `No device registered yet.`}
            </Typography>
        )

    return (
        <Grid container spacing={2}>
            {specs.map(specification => (
                <Grid key={specification.id} item {...gridBreakpoints}>
                    <DeviceSpecificationCard
                        specification={specification}
                        size={size}
                    />
                </Grid>
            ))}
        </Grid>
    )
}
