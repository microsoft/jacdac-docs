import React, { ReactNode } from "react"
import DevicesIcon from "@mui/icons-material/Devices"
import useRoleManagerClient from "../services/useRoleManagerClient"
import useChange from "../../jacdac/useChange"
import CmdButton from "../CmdButton"
import { delay } from "../../../jacdac-ts/src/jdom/utils"

export default function StartMissingSimulatorsButton(props: {
    variant?: "contained" | "outlined"
    trackName?: string
    children?: ReactNode
    disabledChildren?: ReactNode
    hideOnDisabled?: boolean
}) {
    const {
        trackName,
        children,
        disabledChildren,
        variant = "outlined",
        hideOnDisabled,
    } = props
    const roleManagerClient = useRoleManagerClient()
    const allRolesBound = useChange(roleManagerClient, _ => _?.allRolesBound())
    const handleStartSimulators = async () => {
        roleManagerClient?.startSimulators()
        await delay(1000)
    }
    const disabled = !roleManagerClient || allRolesBound

    if (disabled && hideOnDisabled) return null

    // TODO: i18n
    const enabledTooltip =
        "Create a simulator for each Role without an assigned device"
    const disabledTooltip =
        "This button becomes available if there are Roles without assignable devices"

    return (
        <CmdButton
            size="small"
            title={disabled ? disabledTooltip : enabledTooltip}
            variant={variant}
            trackName={trackName}
            onClick={handleStartSimulators}
            disabled={disabled}
            icon={<DevicesIcon />}
        >
            {disabled && disabledChildren !== undefined
                ? disabledChildren
                : children}
        </CmdButton>
    )
}
