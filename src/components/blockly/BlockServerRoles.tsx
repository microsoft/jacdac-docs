import React from "react"
import { VMProgramRunner } from "../../../jacdac-ts/src/vm/runner"
import { Grid } from "@material-ui/core"
import RoleChip from "./RoleChip"

export default function BlockServerRoles(props: { runner: VMProgramRunner }) {
    const { runner } = props
    return (
        <>
            {runner?.servers?.map(({ role, shortId, server }) => (
                <Grid item key={role}>
                    <RoleChip
                        role={role}
                        serviceShortId={shortId}
                        service={undefined}
                        server={server}
                    />
                </Grid>
            ))}
        </>
    )
}
