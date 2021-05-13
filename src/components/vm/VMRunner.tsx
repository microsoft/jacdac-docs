import React, { useCallback, useEffect } from "react"
import useServiceClient from "../useServiceClient"
import {
    Grid,
    Button
} from "@material-ui/core"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import Alert from "../ui/Alert"
import { IT4Program } from "../../../jacdac-ts/src/vm/ir"
import { IT4ProgramRunner, VMStatus } from "../../../jacdac-ts/src/vm/vmrunner"
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
    const status = useChange(testRunner, t => t.status)
    const handleRun = () => testRunner.run()
    const handleCancel = () => testRunner.cancel()

    // TODO: some GUI to show status of each handler
    if (!testRunner) return <LoadingProgress />

    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
            <Button
                    variant={
                        status === VMStatus.Completed
                            ? "contained"
                            : "outlined"
                    }
                    onClick={handleRun}
                >
                    Run
                </Button>
                <Button variant="outlined" onClick={handleCancel}>
                    Cancel
                </Button>
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
