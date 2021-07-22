import React, { useEffect, useState } from "react"
import {
    REPORT_UPDATE,
    SRV_ACCELEROMETER,
} from "../../../jacdac-ts/src/jdom/constants"
import { throttle } from "../../../jacdac-ts/src/jdom/utils"
import useServices from "../../components/hooks/useServices"
import GridHeader from "../../components/ui/GridHeader"
import { Button } from "gatsby-theme-material-ui"
import {
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from "@material-ui/core"
import ConnectAlert from "../../components/alert/ConnectAlert"
import DeviceCardHeader from "../../components/DeviceCardHeader"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import { usePlayTone } from "../../components/hooks/usePlayTone"
import Dashboard from "../../components/dashboard/Dashboard"
import { JDDevice } from "../../../jacdac-ts/src/jdom/device"
import { useId } from "react-use-id-hook"

const TONE_DURATION = 50
const TONE_THROTTLE = 100

// this is a React component that gets run numerous time,
// whenever a change is detected in the React state
// for example, useServices is a hook that tracks the accelerometer services,
// so it will render again and update the accelerometers array whenever the bus connects/disconnects
// an accelerometer
export default function LightsensorAccessible() {
    return (
        <h1>Lightsensor</h1>
    )
}