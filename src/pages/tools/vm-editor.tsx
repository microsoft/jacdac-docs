import { Grid } from "@material-ui/core"
import React from "react"
import VmEditor from "../../components/blockly/VmEditor"
import Dashboard from "../../components/dashboard/Dashboard"

export default function Page() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={5} lg={3} xl={12}>
                <Dashboard />
            </Grid>
            <Grid item xs={12} sm={7} lg={9} xl={10}>
                <VmEditor />
            </Grid>
        </Grid>
    )
}
