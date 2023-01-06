// tslint:disable-next-line: no-submodule-imports match-default-export-name
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import StopIcon from "@mui/icons-material/Stop"
import React, { useContext, useEffect, useState } from "react"
import { PROGRESS } from "../../../jacdac-ts/src/jdom/constants"
import PacketsContext from "../PacketsContext"
import IconButtonWithProgress, {
    IconButtonWithProgressProps,
} from "../ui/IconButtonWithProgress"
import useTraceProgress from "./useTraceProgress"

export default function TracePlayButton(
    props: {
        component?: string
    } & IconButtonWithProgressProps
) {
    const { disabled, ...others } = props
    const { toggleTracing, tracing, recording, replayTrace } =
        useContext(PacketsContext)
    const progress = useTraceProgress()

    return (
        <IconButtonWithProgress
            {...others}
            disabled={disabled || recording || !replayTrace}
            indeterminate={progress !== undefined}
            title={tracing ? "Stop trace" : "Play trace"}
            onClick={toggleTracing}
            progress={progress !== undefined && progress * 100}
            progressColor={"secondary"}
            color={"inherit"}
        >
            {tracing ? <StopIcon /> : <PlayArrowIcon />}
        </IconButtonWithProgress>
    )
}
