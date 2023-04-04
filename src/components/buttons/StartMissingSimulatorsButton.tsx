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
    const { trackName, children, disabledChildren, variant = "outlined", hideOnDisabled } =
        props
    const roleManager = useRoleManagerClient()
    const allRolesBound = useChange(roleManager, _ => _?.allRolesBound())
    const handleStartSimulators = async () => {
        roleManager?.startSimulators()
        await delay(1000)
    }
    const disabled = !roleManager || allRolesBound

    if (disabled && hideOnDisabled) return null

    return (
        <CmdButton
            variant={variant}
            trackName={trackName}
            title="start missing simulators"
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
