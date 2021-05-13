import React, { useCallback, useEffect } from "react"
import useServiceClient from "../useServiceClient"
import {
    Grid,
} from "@material-ui/core"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import Alert from "../ui/Alert"
import { IT4Program } from "../../../jacdac-ts/src/vm/ir"
import { IT4ProgramRunner } from "../../../jacdac-ts/src/vm/vmrunner"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import useChange from "../../jacdac/useChange"
import DashboardDevice from "../dashboard/DashboardDevice"
import LoadingProgress from "../ui/LoadingProgress"

export default function VMRunner(props: {
    json: IT4Program
    roleManager: JDService
}) {
    const {
        json, roleManager
    } = props
    const factory = useCallback(
        (service:JDService) => json && new IT4ProgramRunner(json, service),
        [roleManager, json]
    )
    const testRunner = useServiceClient(roleManager, factory)
    // TODO: button to begin the VM running
    // TODO: some GUI to show status of each handler
    if (!testRunner) return <LoadingProgress />

    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>

            </Grid>
            {roleManager && (
                <Grid item xs={3}>
                    <DashboardDevice
                        showAvatar={true}
                        showHeader={true}
                        device={roleManager.device}
                    />
                </Grid>
            )}
        </Grid>
    )
}
