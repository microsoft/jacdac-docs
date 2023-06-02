import React from "react"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import useServiceServer from "../hooks/useServiceServer"
import { Grid } from "@mui/material"
import useChange from "../../jacdac/useChange"
import { RosServer } from "../../../jacdac-ts/src/jacdac"

export default function DashboardRos(props: DashboardServiceProps) {
    const { service } = props
    const server = useServiceServer<RosServer>(service)

    const subscriptions = useChange(server, _ => _?.subscriptions)

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                ros
            </Grid>
                {subscriptions?.length && <Grid item xs={12}>
                <pre>{subscriptions.join("\n")}</pre>
            </Grid>}
        </Grid>
    )
}