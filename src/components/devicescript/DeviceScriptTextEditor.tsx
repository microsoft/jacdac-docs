import React, { useContext, lazy } from "react"
import { Grid, NoSsr } from "@mui/material"
import Suspense from "../ui/Suspense"
import useDeviceScriptVm from "./useDeviceScriptVm"
import DeviceScriptToolbar from "./DeviceScriptToolbar"
import GridHeader from "../ui/GridHeader"
import { useLocationSearchParamBoolean } from "../hooks/useLocationSearchParam"
import DeviceScriptStats from "./DeviceScriptStats"
import ConnectButtons from "../buttons/ConnectButtons"
import useRoleManagerClient from "../services/useRoleManagerClient"
import useChange from "../../jacdac/useChange"

const DeviceScriptTextField = lazy(() => import("./DeviceScriptTextField"))
const ConsoleLog = lazy(() => import("../console/ConsoleLog"))
const Dashboard = lazy(() => import("../dashboard/Dashboard"))

function DeviceScriptTextEditorWithContext() {
    const showTextField = useLocationSearchParamBoolean("text", true)

    useDeviceScriptVm()
    const roleManager = useRoleManagerClient()
    useChange(roleManager, _ => _?.startSimulators())

    return (
        <Grid spacing={1} container>
            <Grid item xs={12}>
                <GridHeader
                    title="DeviceScript"
                    action={<ConnectButtons transparent={true} />}
                />
            </Grid>
            <Grid item xs={12}>
                <DeviceScriptToolbar />
            </Grid>
            {showTextField && (
                <Grid item xs={12}>
                    <Suspense>
                        <DeviceScriptTextField />
                    </Suspense>
                </Grid>
            )}
            <Grid item xs={12}>
                <DeviceScriptStats />
            </Grid>
            <Grid item xs={12}>
                <GridHeader title="Console" />
            </Grid>
            <Grid item xs={12}>
                <Suspense>
                    <ConsoleLog height="8rem" />
                </Suspense>
            </Grid>
            <Grid item xs={12}>
                <Suspense>
                    <Dashboard
                        showAvatar={true}
                        showHeader={true}
                        showConnect={false}
                        showStartSimulators={false}
                        showStartRoleSimulators={true}
                        showDeviceProxyAlert={true}
                    />
                </Suspense>
            </Grid>
        </Grid>
    )
}

export default function DeviceScriptTextEditor() {
    return (
        <NoSsr>
            <DeviceScriptTextEditorWithContext />
        </NoSsr>
    )
}
