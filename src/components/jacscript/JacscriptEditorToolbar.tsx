import { Grid, MenuItem, SelectChangeEvent } from "@mui/material"
import React, { useContext } from "react"
import BlockRolesToolbar from "../blockly/BlockRolesToolbar"
import JacscriptManagerChipItems from "./JacscriptManagerChipItems"
import { Button } from "gatsby-theme-material-ui"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import SelectWithLabel from "../ui/SelectWithLabel"
import BlockContext from "../blockly/BlockContext"
import BrainManagerContext from "../brains/BrainManagerContext"
import useChange from "../../jacdac/useChange"

function SelectProgram() {
    const { brainManager, scriptId: programId, setScriptId: setProgramId } = useContext(BrainManagerContext)
    const scripts = useChange(brainManager, _ => _?.scripts)
    const handleChange = (ev: SelectChangeEvent<string>) => {
        const id = ev.target.value
        setProgramId(id)
    }
    return (
        <SelectWithLabel
            label="Program"
            placeholder="Select a program"
            value={programId}
            fullWidth
            size="small"
            onChange={handleChange}
        >
            {scripts?.map(script => (
                <MenuItem key={script.id} value={script.id}>
                    {script.name}
                </MenuItem>
            ))}
        </SelectWithLabel>
    )
}

function UploadProgramButton() {
    const { workspaceXml } = useContext(BlockContext)
    const handleUpload = () => {}
    return (
        <Button
            startIcon={<CloudUploadIcon />}
            onClick={handleUpload}
            variant="outlined"
        >
            Save
        </Button>
    )
}

function BrainManagerToolbar() {
    return (
        <Grid sx={{ mt: 0.5, mb: 0.5 }} container direction="row" spacing={1}>
            <Grid item xs>
                <SelectProgram />
            </Grid>
            <Grid item>
                <UploadProgramButton />
            </Grid>
        </Grid>
    )
}

export default function JacscriptEditorToolbar() {
    return (
        <>
            <Grid item xs={12}>
                <BrainManagerToolbar />
            </Grid>
            <Grid item xs={12}>
                <BlockRolesToolbar>
                    <JacscriptManagerChipItems />
                </BlockRolesToolbar>
            </Grid>
        </>
    )
}
