import { ListItemText } from "@mui/material"
import React from "react"
import useChange from "../../jacdac/useChange"
import { Role } from "../../../jacdac-ts/src/jdom/clients/rolemanagerclient"
import { isDeviceId, shortDeviceId } from "../../../jacdac-ts/src/jdom/pretty"
import { ListItemButton } from "gatsby-theme-material-ui"
import { escapeRoleName } from "../../../jacdac-ts/src/jacdac"
import useBus from "../../jacdac/useBus"

export default function RoleListItem(props: {
    role: Role
    selected?: boolean
    onClick?: () => void
}) {
    const { role, selected, onClick } = props
    const { deviceId, serviceIndex, name: roleName } = role
    const bus = useBus()
    const bound = useChange(bus, b => b?.device(deviceId, true), [deviceId])

    const name = isDeviceId(roleName)
        ? shortDeviceId(roleName)
        : escapeRoleName(roleName) || "???"
    const content = (
        <ListItemText
            primary={name}
            secondary={
                bound
                    ? `bound to ${bound.friendlyName}[${serviceIndex}]`
                    : `...`
            }
        />
    )

    return (
        <ListItemButton selected={selected} onClick={onClick}>
            {content}
        </ListItemButton>
    )
}
