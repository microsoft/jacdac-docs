import React, { useContext } from "react"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import { BrainDevice } from "./braindom"
import BrainManagerContext from "./BrainManagerContext"
import ScreenShareIcon from "@mui/icons-material/ScreenShare"
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare"
import CmdButton from "../CmdButton"

export default function BrainLiveConnectionButton(props: {
    brain: BrainDevice
}) {
    const { brain } = props
    const { liveDeviceId, connectLiveDevice } = useContext(BrainManagerContext)
    const { deviceId } = brain
    const connected = liveDeviceId === deviceId

    const handleClick = () => connectLiveDevice(connected ? "" : deviceId)

    return (
        <CmdButton
            title={connected ? "disconnect live" : "connect live"}
            onClick={handleClick}
            icon={connected ? <StopScreenShareIcon /> : <ScreenShareIcon />}
        />
    )
}
