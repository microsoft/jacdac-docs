import React, { useRef, useState } from "react"
import { Box, Button } from "@mui/material"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser"
import IconButtonWithTooltip from "./ui/IconButtonWithTooltip"
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material"
import { useId } from "react-use-id-hook"
import { toArray } from "../../jacdac-ts/src/jdom/utils"

const MAX_SIZE = 5000000
export default function ImportButton(props: {
    icon?: boolean
    text: string
    onFilesUploaded: (files: File[]) => void
    disabled?: boolean
    acceptedFiles?: string[]
    multiple?: boolean
    className?: string
}) {
    const {
        text,
        onFilesUploaded,
        disabled,
        acceptedFiles,
        icon,
        multiple,
        className,
    } = props
    const fileId = useId()
    const fileRef = useRef<HTMLInputElement>()
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleSave = () => {
        const files = toArray(fileRef.current.files)?.filter(
            f => f.size < MAX_SIZE
        )
        if (files?.length) onFilesUploaded(files)
        setOpen(false)
    }
    const handleClose = () => setOpen(false)

    return (
        <Box className={className}>
            {icon && (
                <IconButtonWithTooltip title={text} onClick={handleOpen}>
                    <OpenInBrowserIcon />
                </IconButtonWithTooltip>
            )}
            {!icon && (
                <Button
                    disabled={disabled}
                    variant="outlined"
                    onClick={handleOpen}
                    startIcon={<OpenInBrowserIcon />}
                >
                    {text}
                </Button>
            )}
            {open && (
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Import file</DialogTitle>
                    <DialogContent>
                        <input
                            ref={fileRef}
                            id={fileId}
                            type="file"
                            accept={acceptedFiles?.join(",")}
                            multiple={multiple}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>cancel</Button>
                        <Button onClick={handleSave}>import</Button>
                    </DialogActions>
                </Dialog>
            )}
        </Box>
    )
}
