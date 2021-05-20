import { Grid } from "@material-ui/core"
import React from "react"
import VmEditor from "../../components/blockly/VmEditor"
import Dashboard from "../../components/dashboard/Dashboard"

export default function Page() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={5} lg={4} xl={3}>
                <Dashboard />
            </Grid>
            <Grid item xs={12} sm={7} lg={8} xl={9}>
                <VmEditor />
            </Grid>
        </Grid>
    )
}
