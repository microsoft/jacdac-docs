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
import React, { ChangeEvent, useRef, useState } from "react"
import useDirectoryFileHandles from "../hooks/useDirectoryFileHandles"
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser"
import AddIcon from "@material-ui/icons/Add"
import { useId } from "react-use-id-hook"
import useKeyboardNavigationProps from "../hooks/useKeyboardNavigationProps"

function FileSystemHandleChip(props: {
    directory: FileSystemHandle
    selected?: boolean
    onClick: () => void
}) {
    const { directory, selected, onClick } = props
    const { name } = directory
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
    createDirectory: (
        name: string,
        filename: string,
        content: string
    ) => Promise<FileSystemDirectoryHandle>
    newFileName: string
    newFileContent: string
    onDirectoryHandleCreated: (directory: FileSystemDirectoryHandle) => void
}) {
    const {
        createDirectory,
        newFileName,
        newFileContent,
        onDirectoryHandleCreated,
    } = props
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const valueId = useId()

    const handleOpen = () => {
        setValue("")
        setOpen(true)
    }
    const handleOk = async () => {
        setOpen(false)
        const name = value.toLocaleLowerCase().replace(/\s+/g, "")
        const directoryHandle = await createDirectory(
            name,
            newFileName,
            newFileContent
        )
        onDirectoryHandleCreated(directoryHandle)
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
    selectedDirectoryHandle: FileSystemDirectoryHandle
    onDirectoryHandleSelected: (directory: FileSystemDirectoryHandle) => void
    onDirectoryHandleCreated: (directory: FileSystemDirectoryHandle) => void
    newFileName?: string
    newFileContent?: string
}) {
    const {
        storageKey,
        selectedDirectoryHandle: selectedFileHandle,
        onDirectoryHandleSelected,
        newFileName,
        newFileContent,
        onDirectoryHandleCreated,
    } = props
    const {
        directories,
        directory,
        supported,
        showDirectoryPicker,
        clearDirectory,
        createDirectory,
    } = useDirectoryFileHandles(storageKey)

    const gridRef = useRef()
    const keyboardProps = useKeyboardNavigationProps(gridRef.current)
    const handleOpenDirectory = () => showDirectoryPicker()
    const handleCloseDirectory = () => clearDirectory()
    const handleDirectoryHandleSelected = handle => () =>
        onDirectoryHandleSelected(handle)

    if (!supported) return null
    return (
        <Grid ref={gridRef} container spacing={1} {...keyboardProps}>
            <Grid item>
                <Chip
                    clickable
                    avatar={<OpenInBrowserIcon />}
                    label={directory?.name || "open directory"}
                    onClick={handleOpenDirectory}
                    onDelete={directory ? handleCloseDirectory : undefined}
                />
            </Grid>
            {directories?.map(directory => (
                <Grid item key={directory.name}>
                    <FileSystemHandleChip
                        directory={directory}
                        selected={directory === selectedFileHandle}
                        onClick={handleDirectoryHandleSelected(directory)}
                    />
                </Grid>
            ))}
            {directory && (
                <Grid item>
                    <NewFileDialogButton
                        createDirectory={createDirectory}
                        newFileName={newFileName}
                        newFileContent={newFileContent}
                        onDirectoryHandleCreated={onDirectoryHandleCreated}
                    />
                </Grid>
            )}
        </Grid>
    )
}
