import React, { useContext } from "react"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import { BrainDevice } from "./braindom"
import BrainManagerContext from "./BrainManagerContext"
import StopIcon from "@mui/icons-material/Stop"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"

export default function BrainLiveConnectionButton(props: {
    brain: BrainDevice
}) {
    const { brain } = props
    const { liveDeviceId, setLiveDeviceId } = useContext(BrainManagerContext)
    const { deviceId } = brain
    const connected = liveDeviceId === deviceId

    const handleClick = () => setLiveDeviceId(connected ? "" : deviceId)

    return (
        <IconButtonWithTooltip
            title={connected ? "disconnect live" : "connect live"}
            onClick={handleClick}
        >
            {connected ? <StopIcon /> : <PlayArrowIcon />}
        </IconButtonWithTooltip>
    )
}
