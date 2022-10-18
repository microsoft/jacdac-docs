import { Grid } from "@mui/material"
import React from "react"
import BlockRolesToolbar from "../blockly/BlockRolesToolbar"
import JacscriptManagerChipItems from "./JacscriptManagerChipItems"
import { useBrainManager } from "../brains/BrainManagerContext"

export default function JacscriptEditorToolbar() {
    const { token } = useBrainManager()
    return (
        <>
            {token && (
                <Grid item xs={12}>
                    Jacscript manager
                </Grid>
            )}
            <Grid item xs={12}>
                <BlockRolesToolbar>
                    <JacscriptManagerChipItems />
                </BlockRolesToolbar>
            </Grid>
        </>
    )
}
