import { Grid, Chip } from "@material-ui/core"
import React from "react"
import useDirectoryFileHandles from "../hooks/useDirectoryFileHandles"
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser"

function FileChip(props: {
    file: FileSystemHandle
    selected?: boolean
    onClick: () => void
}) {
    const { file, selected, onClick } = props
    const { name } = file
    return (
        <Chip
            clickable
            label={name.replace(/\.json$/i, '')}
            color={selected ? "primary" : undefined}
            onClick={onClick}
        />
    )
}

export default function FileTabs(props: {
    storageKey: string
    selectedFileHandle: FileSystemFileHandle
    onFileHandleSelected: (file: FileSystemFileHandle) => void
}) {
    const { storageKey, selectedFileHandle, onFileHandleSelected } = props
    const { files, directory, supported, showDirectoryPicker, clearDirectory } =
        useDirectoryFileHandles(storageKey)

    const handleOpenDirectory = () => showDirectoryPicker()
    const handleCloseDirectory = () => clearDirectory()
    const handleFileHandleSelected = file => () => onFileHandleSelected(file)

    if (!supported) return null
    return (
        <Grid container spacing={1}>
            <Grid item>
                <Chip
                    clickable
                    avatar={<OpenInBrowserIcon />}
                    label={directory?.name || "open directory"}
                    onClick={handleOpenDirectory}
                    onDelete={directory ? handleCloseDirectory : undefined}
                />
            </Grid>
            {files?.map(file => (
                <Grid item key={file.name}>
                    <FileChip
                        file={file}
                        selected={file === selectedFileHandle}
                        onClick={handleFileHandleSelected(file)}
                    />
                </Grid>
            ))}
        </Grid>
    )
}
