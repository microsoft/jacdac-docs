import React, { useContext } from "react"
import {
    SRV_BUTTON,
    SRV_BUZZER,
    SRV_JOYSTICK,
    SRV_LED,
    SRV_TRAFFIC_LIGHT,
} from "../../../jacdac-ts/src/jdom/constants"
import { startServiceProviderFromServiceClass } from "../../../jacdac-ts/src/servers/servers"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"
import AppContext from "../AppContext"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import AddIcon from "@material-ui/icons/Add"
import Alert from "../ui/Alert"

export function SimulateDeviceHint() {
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const handleStartSimulator = (serviceClass: number) => () =>
        startServiceProviderFromServiceClass(bus, serviceClass)
    const { toggleShowDeviceHostsDialog } = useContext(AppContext)
    return (
        <>
            Simulate devices (
            <IconButtonWithTooltip
                onClick={handleStartSimulator(SRV_BUTTON)}
                title="button"
                aria-label="start button simulator"
            >
                <span aria-label="button emoji" role="img">
                    🔘
                </span>
            </IconButtonWithTooltip>
            ,
            <IconButtonWithTooltip
                onClick={handleStartSimulator(SRV_BUZZER)}
                title="buzzer"
                aria-label="start buzzer simulator"
            >
                <span aria-label="piano emoji" role="img">
                    🎹
                </span>
            </IconButtonWithTooltip>
            <IconButtonWithTooltip
                onClick={handleStartSimulator(SRV_JOYSTICK)}
                title="joystick"
                aria-label="start joystick simulator"
            >
                <span aria-label="joystick emoji" role="img">
                    🕹️
                </span>
            </IconButtonWithTooltip>
            ,
            <IconButtonWithTooltip
                onClick={handleStartSimulator(SRV_LED)}
                title="LED"
                aria-label="start LED simulator"
            >
                <span aria-label="lightbulb emoji" role="img">
                    💡
                </span>
            </IconButtonWithTooltip>
            ,
            <IconButtonWithTooltip
                onClick={handleStartSimulator(SRV_TRAFFIC_LIGHT)}
                title="traffic light"
                aria-label="start traffic light simulator"
            >
                <span aria-label="traffic light emoji" role="img">
                    🚦
                </span>
            </IconButtonWithTooltip>
            , ...) by clicking &nbsp;
            <IconButtonWithTooltip
                title="start simulator"
                onClick={toggleShowDeviceHostsDialog}
            >
                <AddIcon />
            </IconButtonWithTooltip>
            .
        </>
    )
}

export default function SimulateDeviceAlert() {
    return (
        <Alert severity="info">
            <SimulateDeviceHint />
        </Alert>
    )
}
