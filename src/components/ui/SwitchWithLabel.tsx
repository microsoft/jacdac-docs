import { FormControlLabel, Switch, SwitchProps } from "@mui/material"
import React, { ReactNode } from "react"

export default function SwitchWithLabel(
    props: {
        label: ReactNode
        labelPlacement?: "end" | "start" | "top" | "bottom"
    } & SwitchProps
) {
    const { label, labelPlacement, ...rest } = props
    return (
        <FormControlLabel
            control={<Switch {...rest} />}
            label={label}
            labelPlacement={labelPlacement}
        />
    )
}
