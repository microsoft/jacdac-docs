import { Box } from "@mui/material"
import { AlertTitle } from "@mui/material"
import React from "react"
import Alert from "../ui/Alert"

export default function MigrationAlert() {
    return (
        <Alert severity="warning" sx={{ mb: 2 }}>
            <AlertTitle>📢 Important: Jacdac has moved!</AlertTitle>
            The Jacdac project has moved to{" "}
            <Box
                component="a"
                href="https://github.com/jacdac"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    color: "inherit",
                    textDecoration: "underline",
                    fontWeight: "bold",
                }}
            >
                https://github.com/jacdac
            </Box>
            . Please update your bookmarks and references to point to the new location.
        </Alert>
    )
}