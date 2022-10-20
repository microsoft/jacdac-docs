import { Grid } from "@mui/material"
import React, { useContext } from "react"
import BlockRolesToolbar from "../blockly/BlockRolesToolbar"
import JacscriptManagerChipItems from "./JacscriptManagerChipItems"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import BlockContext from "../blockly/BlockContext"
import BrainManagerContext from "../brains/BrainManagerContext"
import useChange from "../../jacdac/useChange"
import { BrainScript } from "../brains/braindom"
import CmdButton from "../CmdButton"
import useEffectAsync from "../useEffectAsync"

function SaveScriptButton(props: { script: BrainScript }) {
    const { script } = props
    const { workspaceXml } = useContext(BlockContext)
    const handleUpload = async () => {
        await script.uploadBody({
            blocks: workspaceXml,
            text: "",
            compiled: "",
        })
    }
    return (
        <CmdButton
            icon={<CloudUploadIcon />}
            onClick={handleUpload}
            variant="outlined"
        >
            Save
        </CmdButton>
    )
}

function BrainManagerToolbar(props: { script: BrainScript }) {
    const { script } = props
    const { name } = script

    return (
        <Grid sx={{ mt: 0.5, mb: 0.5 }} container direction="row" spacing={1}>
            <Grid item xs>
                {name}
            </Grid>
            <Grid item>
                <SaveScriptButton script={script} />
            </Grid>
        </Grid>
    )
}

function useBrainScriptInBlocks(script: BrainScript) {
    const { setWorkspaceXml } = useContext(BlockContext)

    useEffectAsync(async () => {
        if (!script) return

        // fetch latest body
        const body = await script.refreshBody()

        // update context
        if (!body) return

        // update blocks
        setWorkspaceXml(body.blocks)
    }, [script?.id])
}

export default function JacscriptEditorToolbar() {
    const { brainManager, scriptId } = useContext(BrainManagerContext)
    const script = useChange(brainManager, _ => _?.script(scriptId))

    useBrainScriptInBlocks(script)

    return (
        <>
            {script && (
                <Grid item xs={12}>
                    <BrainManagerToolbar script={script} />
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
