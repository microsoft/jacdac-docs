import React from "react"
import { AlertTitle } from "@mui/material"
import useDeveloperMode from "../hooks/useDeveloperMode"
import Alert from "../ui/Alert"
import { Button } from "gatsby-theme-material-ui"

export default function DeveloperModeAlert() {
    const { developerMode, setDeveloperMode } = useDeveloperMode()
    const handleToggle = () => setDeveloperMode(!developerMode)
    return (
        !!developerMode && (
            <Alert severity="info">
                <AlertTitle>DeveloperMode</AlertTitle>
                Allows to connect to device that are not registered in the
                catalog.
                <Button variant="outlined" onClick={handleToggle}>
                    Turn Off
                </Button>
            </Alert>
        )
    )
}
