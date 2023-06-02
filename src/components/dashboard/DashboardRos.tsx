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
    const messages = useChange(server, _ => _?.messages)

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                ROS
            </Grid>
            <Grid item xs={12}>
            <pre style={{ whiteSpace: "pre-wrap", fontSize: "70%" }}>
{`subscriptions: ${subscriptions?.join("   \n")}
messages: ${messages?.map(({node, topic, message}) => `${node} ${topic} ${JSON.stringify(message)}`).join("    \n")}`}</pre>
            </Grid>
        </Grid>
    )
}