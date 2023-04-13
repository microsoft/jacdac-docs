import React, { ReactNode } from "react"
import DevicesIcon from "@mui/icons-material/Devices"
import useRoleManagerClient from "../services/useRoleManagerClient"
import useChange from "../../jacdac/useChange"
import CmdButton from "../CmdButton"
import Tooltip from "../ui/Tooltip"
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
    
    // TODO: i18n
    const enabledTooltip = "Create a simulator for each Role without an assigned device"
    const disabledTooltip = "This button becomes available if there are Roles without assignable devices"

    // TODO: Clean up title prop
    // The title prop is for default ui (rather than React) tooltips. Most buttons use React Tooltip
    // Title is blanked to prevents two tooltips from showing
    // aria describeby fulfilled by describeChild
    return (
        <Tooltip
          describeChild
          title={ disabled ? disabledTooltip : enabledTooltip }
          placement="bottom"
        >
          <span>
            <CmdButton
                variant={variant}
                trackName={trackName}
                title=""
                onClick={handleStartSimulators}
                disabled={disabled}
                icon={<DevicesIcon />}
            >
                {disabled && disabledChildren !== undefined
                    ? disabledChildren
                    : children}
            </CmdButton>
          </span>
      </Tooltip>
    )
}
