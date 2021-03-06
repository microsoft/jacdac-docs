import React from "react"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import AddIcon from "@material-ui/icons/Add"
import { useContext } from "react"
import AppContext from "../AppContext"

export default function VMStartSimulatorButton() {
    const { toggleShowDeviceHostsDialog } = useContext(AppContext)
    return (
        <IconButtonWithTooltip
            title="start simulator"
            onClick={toggleShowDeviceHostsDialog}
        >
            <AddIcon />
        </IconButtonWithTooltip>
    )
}
