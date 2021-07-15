import {
    Grid,
    Chip,
    Dialog,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Button,
} from "@material-ui/core"
import React, { ChangeEvent, useState } from "react"
import useDirectoryFileHandles from "../hooks/useDirectoryFileHandles"
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser"
import AddIcon from "@material-ui/icons/Add"
import { useId } from "react-use-id-hook"

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
            label={name.replace(/\.json$/i, "")}
            color={selected ? "primary" : undefined}
            onClick={onClick}
        />
    )
}

function NewFileDialogButton(props: {
    createFile: (
        filename: string,
        content: string
    ) => Promise<FileSystemFileHandle>
    onFileHandleCreated: (file: FileSystemFileHandle) => void
}) {
    const { createFile, onFileHandleCreated } = props
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const valueId = useId()

    const handleOpen = () => setOpen(true)
    const handleOk = async () => {
        setOpen(false)
        const filename = value.toLocaleLowerCase().replace(/\s+/g, "") + ".json"
        const fileHandle = await createFile(filename, "{}")
        if (fileHandle) onFileHandleCreated(fileHandle)
    }
    const handleCancel = () => setOpen(false)
    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <>
            <Chip
                clickable
                label="new file..."
                icon={<AddIcon />}
                onClick={handleOpen}
            />
            <Dialog open={open}>
                <DialogContent>
                    <DialogContentText>Choose a file name</DialogContentText>
                    <TextField
                        id={valueId}
                        value={value}
                        label="Value"
                        fullWidth={true}
                        onChange={handleValueChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={!value}
                        onClick={handleOk}
                    >
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default function FileTabs(props: {
    storageKey: string
    selectedFileHandle: FileSystemFileHandle
    onFileHandleSelected: (file: FileSystemFileHandle) => void
    onFileHandleCreated: (file: FileSystemFileHandle) => void
}) {
    const {
        storageKey,
        selectedFileHandle,
        onFileHandleSelected,
        onFileHandleCreated,
    } = props
    const {
        files,
        directory,
        supported,
        showDirectoryPicker,
        clearDirectory,
        createFile,
    } = useDirectoryFileHandles(storageKey)

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
            {directory && (
                <Grid item>
                    <NewFileDialogButton
                        createFile={createFile}
                        onFileHandleCreated={onFileHandleCreated}
                    />
                </Grid>
            )}
        </Grid>
    )
}
