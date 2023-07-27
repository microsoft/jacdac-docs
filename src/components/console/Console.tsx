import { Box, NoSsr, Paper } from "@mui/material"
import React from "react"
import ConsoleLog from "./ConsoleLog"
import ConsoleToolbar, { ConsoleToolbarOptions } from "./ConsoleToolbar"

/** Delay load */
export default function Console(
    props: {
        hook?: boolean
        height?: string
        showToolbar?: boolean
        showBottomToolbar?: boolean
    } & ConsoleToolbarOptions
) {
    const { height, showToolbar, showBottomToolbar, hook, ...rest } = props
    return (
        <NoSsr>
            {showToolbar && (
                <Paper square elevation={1}>
                    <Box display="flex">
                        <ConsoleToolbar {...rest} />
                    </Box>
                </Paper>
            )}
            <ConsoleLog hook={hook} height={height} />
            {showBottomToolbar && (
                <Box display="flex">
                    <ConsoleToolbar {...rest} />
                </Box>
            )}
        </NoSsr>
    )
}
