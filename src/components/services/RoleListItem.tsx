import { ListItem, ListItemText } from "@mui/material"
import React from "react"
import useChange from "../../jacdac/useChange"
import { Role } from "../../../jacdac-ts/src/jdom/clients/rolemanagerclient"
import { isDeviceId, shortDeviceId } from "../../../jacdac-ts/src/jdom/pretty"
import { ListItemButton } from "gatsby-theme-material-ui"
import useBus from "../../jacdac/useBus"
import { ellipse } from "../../../jacdac-ts/src/jdom/utils"
import { escapeRoleName } from "../../../jacdac-ts/src/jdom/rolemanager"

const MAX_NAME_LENGTH = 20

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
        : ellipse(escapeRoleName(roleName), MAX_NAME_LENGTH) || "..."
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

    return onClick ? (
        <ListItemButton selected={selected} onClick={onClick}>
            {content}
        </ListItemButton>
    ) : (
        <ListItem>{content}</ListItem>
    )
}
