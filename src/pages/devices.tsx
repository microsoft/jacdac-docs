import { Alert, AlertTitle } from "@material-ui/lab"
import { Link } from "gatsby-theme-material-ui"
import React from "react"
import FilteredDeviceSpecificationList from "../components/FilteredDeviceSpecificationList"

export default function Page() {
    return (
        <>
            <FilteredDeviceSpecificationList count={20} shuffle={true} />
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
        </>
    )
}
