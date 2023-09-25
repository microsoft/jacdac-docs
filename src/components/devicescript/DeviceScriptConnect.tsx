import React from "react"
import Console from "../console/Console"
import { Typography } from "@mui/material"
import { useSystemDarkMode } from "../ui/DarkModeContext"

export default function DeviceScriptConnect() {
    useSystemDarkMode()

    return (
        <>
            <Typography component="h1" variant="h6">
                DeviceScript Connection Helper
            </Typography>
            <Console
                hook={true}
                showConnect={true}
                showToolbar={true}
                showFiles={false}
                showLevel={false}
                showFilter={false}
                showPopout={false}
                showSerial={false}
            />
        </>
    )
}
