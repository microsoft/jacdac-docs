import React, { useContext } from "react"
import SaveIcon from "@material-ui/icons/Save"
import { Grid, Tooltip } from "@material-ui/core"
import { IconButton, Link } from "gatsby-theme-material-ui"
import ImportButton from "../ImportButton"
import AppContext from "../AppContext"
import { Xml } from "blockly"
import VMFile from "../../../jacdac-ts/src/vm/file"
import BlockContext from "../blockly/BlockContext"

function VMLoadButton() {
    const { workspace } = useContext(BlockContext)
    const { setError } = useContext(AppContext)
    const disabled = !workspace

    const handleFiles = async (files: File[]) => {
        const file = files?.[0]
        if (!file) return

        try {
            const text = await file.text()
            const jsfile = JSON.parse(text) as VMFile
            console.debug(`imported file`, jsfile)
            const xml = jsfile?.xml
            if (typeof xml !== "string") throw new Error("Invalid file format")

            // try loading xml into a dummy blockly workspace
            const dom = Xml.textToDom(xml)

            // all good, load in workspace
            workspace.clear()
            Xml.domToWorkspace(dom, workspace)
        } catch (e) {
            setError(e)
        }
    }
    return (
        <ImportButton
            text="Open..."
            icon={true}
            disabled={disabled}
            acceptedFiles={["application/json"]}
            onFilesUploaded={handleFiles}
            filesLimit={1}
        />
    )
}

function VMSaveButton() {
    const { workspaceXml } = useContext(BlockContext)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const json: VMFile = {
        xml: workspaceXml,
    }

    const url = `data:application/json;charset=UTF-8,${encodeURIComponent(
        JSON.stringify(json)
    )}`

    return (
        <Link download="jacdac-blocks.json" href={url}>
            <Tooltip title={"Save"}>
                <IconButton>
                    <SaveIcon />
                </IconButton>
            </Tooltip>
        </Link>
    )
}

export default function VMFileButtons() {
    return (
        <>
            <Grid item>
                <VMSaveButton />
            </Grid>
            <Grid item>
                <VMLoadButton />
            </Grid>
        </>
    )
}
