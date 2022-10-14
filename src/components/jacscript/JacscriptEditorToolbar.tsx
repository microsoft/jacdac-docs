import { Grid } from "@mui/material"
import React from "react"
import BlockRolesToolbar from "../blockly/BlockRolesToolbar"
import JacscriptManagerChipItems from "./JacscriptManagerChipItems"
import useBrainManagerState from "../brains/useBrainManagerState"

export default function JacscriptEditorToolbar() {
    return (
        <Grid item xs={12}>
            <BlockRolesToolbar>
                <JacscriptManagerChipItems />
            </BlockRolesToolbar>
        </Grid>
    )
}
