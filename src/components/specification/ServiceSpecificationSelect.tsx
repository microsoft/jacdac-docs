import { MenuItem, TextField } from "@mui/material"
import createStyles from "@mui/styles/createStyles"
import makeStyles from "@mui/styles/makeStyles"
import React, { ChangeEvent, useMemo, useState } from "react"
import {
    deviceSpecificationsForService,
    serviceSpecifications,
} from "../../../jacdac-ts/src/jdom/spec"

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minWidth: "18rem",
        },
    })
)

export default function ServiceSpecificationSelect(props: {
    label: string
    serviceClass: number
    setServiceClass: (serviceClass: number) => void
    variant?: "outlined" | "filled" | "standard"
    fullWidth?: boolean
    error?: string
    hasRegisteredDevice?: boolean
}) {
    const {
        label,
        serviceClass,
        setServiceClass,
        variant,
        fullWidth,
        error,
        hasRegisteredDevice,
    } = props
    const [labelId] = useState("select-" + Math.random())
    const classes = useStyles()
    const specs = useMemo(
        () =>
            serviceSpecifications()
                .filter(spec => !/^_/.test(spec.shortId))
                .filter(
                    spec =>
                        !hasRegisteredDevice ||
                        !!deviceSpecificationsForService(
                            spec.classIdentifier
                        )?.filter(spec => spec.status !== "deprecated")?.length
                ),
        [hasRegisteredDevice]
    )

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setServiceClass(parseInt(event.target.value))

    return (
        <TextField
            id={labelId}
            className={classes.root}
            label={label}
            error={!!error}
            helperText={error}
            value={isNaN(serviceClass) ? "" : serviceClass}
            select
            variant={variant}
            fullWidth={fullWidth}
            onChange={handleChange}
        >
            <MenuItem key="none" value="">
                No service selected
            </MenuItem>
            {specs.map(spec => (
                <MenuItem
                    key={spec.classIdentifier}
                    value={spec.classIdentifier}
                >
                    {spec.name}
                </MenuItem>
            ))}
        </TextField>
    )
}
