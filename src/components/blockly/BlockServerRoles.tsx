import React, { useContext } from "react"
import { VMProgramRunner } from "../../../jacdac-ts/src/vm/runner"
import useChange from "../../jacdac/useChange"
import { Grid } from "@material-ui/core"
import RoleChip from "./RoleChip"

export default function BlockServerRoles(props: { runner: VMProgramRunner }) {
    const { runner } = props
    return (
        <>
            {runner?.servers?.map(({ role, server }) => (
                <Grid item key={role}>
                    <RoleChip
                        role={role}
                        service={undefined}
                        server={server}
                        serviceShortId={undefined}
                    />
                </Grid>
            ))}
        </>
    )
}
