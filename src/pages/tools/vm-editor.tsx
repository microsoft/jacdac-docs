import { createStyles, Grid, makeStyles } from "@material-ui/core"
import React from "react"
import VmEditor from "../../components/blockly/VmEditor"
import Dashboard from "../../components/dashboard/Dashboard"

const useStyles = makeStyles(() =>
    createStyles({
        editor: {
            height: "calc(50h)",
        },
    })
)

export default function Page() {
    const classes = useStyles()
    return (
        <Grid container direction="column" spacing={1}>
            <Grid item xs={12}>
                <VmEditor className={classes.editor} />
            </Grid>
            <Grid item xs={12}>
                <Dashboard />
            </Grid>
        </Grid>
    )
}
