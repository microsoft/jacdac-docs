import React, { lazy, useState } from "react"
import { Box, Button } from "@mui/material"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser"
import IconButtonWithTooltip from "./ui/IconButtonWithTooltip"
import Suspense from "./ui/Suspense"
const DropzoneDialog = lazy(() => import("./ui/DropzoneDialog"))

export default function ImportButton(props: {
    icon?: boolean
    text: string
    onFilesUploaded: (files: File[]) => void
    disabled?: boolean
    acceptedFiles?: string[]
    filesLimit?: number
    className?: string
}) {
    const {
        text,
        onFilesUploaded,
        disabled,
        acceptedFiles,
        icon,
        filesLimit,
        className,
    } = props
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleSave = (files: File[]) => {
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
                <Suspense>
                    <DropzoneDialog
                        open={open}
                        onSave={handleSave}
                        maxFileSize={5000000}
                        onClose={handleClose}
                        acceptedFiles={acceptedFiles}
                        clearOnUnmount={true}
                        filesLimit={filesLimit || 1}
                        submitButtonText={"import"}
                    />
                </Suspense>
            )}
        </Box>
    )
}
