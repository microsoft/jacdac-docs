import { Tooltip } from "@mui/material"
import React from "react"

export default function OptionalTooltip(props: {
    children: JSX.Element
    title: string
    placement?:
        | "bottom-end"
        | "bottom-start"
        | "bottom"
        | "left-end"
        | "left-start"
        | "left"
        | "right-end"
        | "right-start"
        | "right"
        | "top-end"
        | "top-start"
        | "top"
}) {
    const { children, title, placement } = props
    if (!title) return children
    return (
        <Tooltip describeChild={true} title={title} placement={placement}>
            <span>{children}</span>
        </Tooltip>
    )
}
