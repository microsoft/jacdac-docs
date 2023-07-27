import React from "react"
import Console from "../console/Console"
import { Typography } from "@mui/material"

export default function DeviceScriptConnect() {
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
                showPopout={false}
                showSerial={false}
            />
        </>
    )
}
