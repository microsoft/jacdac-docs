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
    const { files, directory, supported, showDirectoryPicker, clearDirectory } =
        useDirectoryFileHandles(storageKey)

    const handleOpenDirectory = () => showDirectoryPicker()
    const handleCloseDirectory = () => clearDirectory()

    if (!supported) return null
    return (
        <Grid container spacing={1}>
            <Grid item>
                <Chip
                    avatar={<OpenInBrowserIcon />}
                    label={directory?.name || "open directory"}
                    onClick={handleOpenDirectory}
                    onDelete={directory ? handleCloseDirectory : undefined}
                />
            </Grid>
            {files?.map(file => (
                <Grid item key={file.name}>
                    <FileChip file={file} />
                </Grid>
            ))}
        </Grid>
    )
}
