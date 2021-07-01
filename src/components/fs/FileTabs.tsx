import { Grid, Chip } from "@material-ui/core"
import React, { useState } from "react"
import useDirectoryFileHandles from "../hooks/useDirectoryFileHandles"
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser"

function FileChip(props: {
    file: FileSystemHandle
    selected?: boolean
    onClick: () => void
}) {
    const { file, selected, onClick } = props
    return (
        <Chip
            clickable
            label={file.name}
            color={selected ? "primary" : undefined}
            onClick={onClick}
        />
    )
}

export default function FileTabs(props: {
    storageKey: string
    onFileSelected: (file: FileSystemHandle) => void
}) {
    const { storageKey, onFileSelected } = props
    const { files, directory, supported, showDirectoryPicker, clearDirectory } =
        useDirectoryFileHandles(storageKey)
    const [selected, setSelected] = useState<FileSystemHandle>()

    const handleOpenDirectory = () => showDirectoryPicker()
    const handleCloseDirectory = () => clearDirectory()
    const handleFileSelected = file => () => {
        setSelected(file)
        onFileSelected(file)
    }

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
                        selected={file === selected}
                        onClick={handleFileSelected(file)}
                    />
                </Grid>
            ))}
        </Grid>
    )
}
