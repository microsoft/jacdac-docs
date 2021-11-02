import { Box } from "@mui/material"
import { AlertTitle } from "@mui/material"
import { Link } from "gatsby-theme-material-ui"
import React from "react"
import FilteredDeviceSpecificationList from "../components/specification/FilteredDeviceSpecificationList"
import Alert from "../components/ui/Alert"

export default function Page() {
    return (
        <>
            <FilteredDeviceSpecificationList />
            <Box mt={2}>
                <Alert severity="info">
                    <AlertTitle>Register your device</AlertTitle>
                    Known devices are specified in the{" "}
                    <Link to="/reference/device-definition/">
                        device catalog repository
                    </Link>
                    . New devices can be submitted with the{" "}
                    <Link to="/tools/device-registration/">
                        device registration
                    </Link>
                    .
                </Alert>
            </Box>
        </>
    )
}
