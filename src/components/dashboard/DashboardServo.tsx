import React from "react"
import { BaseReg, ServoReg } from "../../../jacdac-ts/src/jdom/constants"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import {
    useRegisterBoolValue,
    useRegisterUnpackedValue,
} from "../../jacdac/useRegisterValue"
import useServiceServer from "../hooks/useServiceServer"
import useThrottledValue from "../hooks/useThrottledValue"
import { SG90_RESPONSE_SPEED } from "../../../jacdac-ts/src/servers/servers"
import { Grid, Slider } from "@mui/material"
import { ServoServer } from "../../../jacdac-ts/src/servers/servoserver"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import ServoWidget from "../widgets/ServoWidget"
import useRegister from "../hooks/useRegister"

function useActualAngle(service: JDService, visible: boolean) {
    const angleRegister = useRegister(service, ServoReg.Angle)
    const [angle = 90] = useRegisterUnpackedValue<[number]>(angleRegister, {
        visible,
    })
    const actualAngleRegister = useRegister(service, ServoReg.ActualAngle)
    const [actualAngle] = useRegisterUnpackedValue<[number]>(
        actualAngleRegister,
        {
            visible,
        }
    )
    // sec/60deg
    const responseSpeedRegister = useRegister(service, ServoReg.ResponseSpeed)
    const [responseSpeed = SG90_RESPONSE_SPEED] = useRegisterUnpackedValue<
        [number]
    >(responseSpeedRegister, { visible })
    const rotationalSpeed = 60 / responseSpeed
    const computedAngle = useThrottledValue(angle, rotationalSpeed)

    return actualAngle !== undefined ? actualAngle : computedAngle
}

export default function DashboardServo(props: DashboardServiceProps) {
    const { service, visible } = props

    const enabledRegister = useRegister(service, ServoReg.Enabled)
    const enabled = useRegisterBoolValue(enabledRegister, props)
    const angleRegister = useRegister(service, ServoReg.Angle)
    const angle = useActualAngle(service, visible)
    const offsetRegister = useRegister(service, ServoReg.Offset)
    const [offset] = useRegisterUnpackedValue<[number]>(offsetRegister, props)
    const clientVariantRegister = useRegister(service, BaseReg.ClientVariant)
    const [clientVariant] = useRegisterUnpackedValue<[string]>(
        clientVariantRegister,
        props
    )
    const minAngleRegister = useRegister(service, ServoReg.MinAngle)
    const [minAngle = -90] = useRegisterUnpackedValue<[number]>(
        minAngleRegister,
        props
    )
    const maxAngleRegister = useRegister(service, ServoReg.MaxAngle)
    const [maxAngle = 90] = useRegisterUnpackedValue<[number]>(
        maxAngleRegister,
        props
    )
    const responseSpeedRegister = useRegister(service, ServoReg.ResponseSpeed)
    const [responseSpeed = SG90_RESPONSE_SPEED] = useRegisterUnpackedValue<
        [number]
    >(responseSpeedRegister, { visible })
    const rotationalSpeed = 60 / responseSpeed

    const continuous = /cont=1/.test(clientVariant)
    const throttle = ((angle - minAngle) / (maxAngle - minAngle)) * 200 - 100

    const server = useServiceServer<ServoServer>(service)
    const color = server ? "secondary" : "primary"

    const toggleOff = () => enabledRegister.sendSetBoolAsync(!enabled, true)
    const widgetSize = `clamp(6rem, 16vw, 16vh)`
    const readOnly = false

    const label = continuous ? "Throttle (%)" : "Angle"
    const angleFormat = (a: number) => `${Math.round(a)}`
    const continuousFormat = (throttle: number) => {
        return Math.round(throttle) + "%"
    }
    const handleContinuousChange = (
        ev: unknown,
        newValue: number | number[]
    ) => {
        const newAngle =
            (0.5 + (newValue as number) / 200) * (maxAngle - minAngle) +
            minAngle
        angleRegister.sendSetPackedAsync([newAngle], true)
    }
    const handleAngleChange = (ev: unknown, newValue: number | number[]) =>
        angleRegister.sendSetPackedAsync([newValue as number], true)

    return (
        <Grid container alignContent="center">
            <Grid item xs={12}>
                <ServoWidget
                    angle={angle}
                    offset={offset}
                    color={color}
                    enabled={enabled}
                    toggleOff={toggleOff}
                    widgetSize={widgetSize}
                    rotationRate={continuous ? (throttle * rotationalSpeed) / 100 : undefined}
                    visible={visible}
                />
            </Grid>
            <Grid item xs={12}>
                {continuous ? (
                    <Slider
                        aria-label={label}
                        color={color}
                        value={throttle}
                        valueLabelFormat={continuousFormat}
                        onChange={readOnly ? undefined : handleContinuousChange}
                        min={-100}
                        max={100}
                        step={10}
                        valueLabelDisplay="auto"
                    />
                ) : (
                    <Slider
                        aria-label={label}
                        color={color}
                        value={angle}
                        valueLabelFormat={angleFormat}
                        onChange={readOnly ? undefined : handleAngleChange}
                        min={minAngle}
                        max={maxAngle}
                        step={5}
                        valueLabelDisplay="auto"
                    />
                )}
            </Grid>
        </Grid>
    )
}
