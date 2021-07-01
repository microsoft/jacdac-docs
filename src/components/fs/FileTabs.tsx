import { Grid, Chip } from "@material-ui/core"
import React from "react"
import useDirectoryFileHandles from "../hooks/useDirectoryFileHandles"
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"

function FileChip(props: { file: FileSystemHandle }) {
    const { file } = props
    const handleClick = () => {
        console.log("file selected", file)
    }
    return <Chip label={file.name} onClick={handleClick} />
}

export default function FileTabs(props: { storageKey: string }) {
    const { storageKey } = props
    const { files, directory, supported, showDirectoryPicker } =
        useDirectoryFileHandles(storageKey)

    const handleOpenDirectory = () => showDirectoryPicker()

    if (!supported) return null
    return (
        <Grid container spacing={1}>
            <Grid item>
                <IconButtonWithTooltip
                    onClick={handleOpenDirectory}
                    title="open directory"
                >
                    <OpenInBrowserIcon />
                </IconButtonWithTooltip>
            </Grid>
            {files?.map(file => (
                <Grid item key={file.name}>
                    <FileChip file={file} />
                </Grid>
            ))}
        </Grid>
    )
}
