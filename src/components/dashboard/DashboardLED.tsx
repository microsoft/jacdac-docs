import { Grid } from "@mui/material"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import LightWidget from "../widgets/LightWidget"
import {
    LedReg,
    RENDER,
    REPORT_UPDATE,
} from "../../../jacdac-ts/src/jdom/constants"
import ColorButtons, { DEFAULT_COLORS } from "../widgets/ColorButtons"
import useRegister from "../hooks/useRegister"
import RegisterInput from "../RegisterInput"
import { bufferEq } from "../../../jacdac-ts/src/jdom/utils"
import { JDEventSource } from "../../../jacdac-ts/src/jdom/eventsource"
import DashboardRegisterValueFallback from "./DashboardRegisterValueFallback"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import useServiceServer from "../hooks/useServiceServer"
import { LedServer } from "../../../jacdac-ts/src/servers/ledserver"
import useChange from "../../jacdac/useChange"

const configureRegisters = [
    LedReg.Brightness,
    LedReg.ActualBrightness,
    LedReg.MaxPower,
]

function RegisterInputItem(props: {
    service: JDService
    registerCode: number
    visible: boolean
}) {
    const { service, registerCode, visible } = props
    const register = useRegister(service, registerCode)
    return (
        <RegisterInput
            register={register}
            visible={visible}
            showRegisterName={true}
        />
    )
}

export default function DashboardLED(props: DashboardServiceProps) {
    const { service, services, visible, expanded, controlled } = props
    const pixelsRegister = useRegister(service, LedReg.Pixels)
    const numPixelsRegister = useRegister(service, LedReg.NumPixels)
    const [numPixels] = useRegisterUnpackedValue<[number]>(
        numPixelsRegister,
        props
    )
    const canEdit = expanded && numPixels !== undefined && numPixels <= 64
    const [penColor, setPenColor] = useState<number>(DEFAULT_COLORS[0].value)
    const colorsRef = useRef<Uint8Array>(new Uint8Array(0))
    const clientRef = useRef(new JDEventSource())
    const canLedClick = !isNaN(penColor) && canEdit && !controlled
    const server = useServiceServer(
        service,
        () => (numPixels > 64 ? new LedServer() : undefined),
        [numPixels]
    )

    const handleColorChange = (newColor: number) =>
        setPenColor(current => (newColor === current ? undefined : newColor))
    const handleLedClick: (index: number) => void = async (index: number) => {
        const pixels = colorsRef.current
        if (index >= pixels.length * 3) return

        const newPixels = pixels.slice(0)
        const k = index * 3
        let r = (penColor >> 16) & 0xff
        let g = (penColor >> 8) & 0xff
        let b = penColor & 0xff
        if (
            newPixels[k] == r &&
            newPixels[k + 1] == g &&
            newPixels[k + 2] == b
        ) {
            r = 0
            g = 0
            b = 0
        }
        newPixels[k] = r
        newPixels[k + 1] = g
        newPixels[k + 2] = b
        await pixelsRegister.sendSetPackedAsync([newPixels], true)
        colorsRef.current = newPixels
        clientRef.current.emit(RENDER)
    }

    const registers = {
        numPixels: LedReg.NumPixels,
        variant: LedReg.Variant,
        actualBrightness: LedReg.ActualBrightness,
        numColumns: LedReg.NumColumns,
    }

    useEffect(() => {
        if (!pixelsRegister) return undefined
        const updatePixels = () => {
            const pixels = pixelsRegister.data
            if (
                pixels &&
                pixels.length &&
                !bufferEq(colorsRef.current, pixels)
            ) {
                colorsRef.current = pixels.slice(0)
                clientRef.current.emit(RENDER)
            }
        }
        updatePixels()
        return pixelsRegister.subscribe(REPORT_UPDATE, updatePixels)
    }, [pixelsRegister])

    useChange(
        server?.pixels,
        _ => {
            const pixels = _?.data
            if (
                pixels &&
                pixels.length &&
                !bufferEq(colorsRef.current, pixels)
            ) {
                colorsRef.current = pixels.slice(0)
                clientRef.current.emit(RENDER)
            }
        },
        [server]
    )

    const colors: () => Uint8Array = useCallback(() => colorsRef.current, [])
    const subscribeColors = useCallback(
        handler => clientRef.current.subscribe(RENDER, handler),
        []
    )

    if (numPixels === undefined)
        return <DashboardRegisterValueFallback register={numPixelsRegister} />
    if (!numPixels) return null

    return (
        <>
            <Grid item xs={12}>
                <LightWidget
                    colors={colors}
                    subscribeColors={subscribeColors}
                    registers={registers}
                    widgetCount={services?.length}
                    onLedClick={canLedClick ? handleLedClick : undefined}
                    {...props}
                />
            </Grid>
            {canEdit && (
                <Grid item>
                    <ColorButtons
                        color={penColor}
                        onColorChange={handleColorChange}
                    />
                </Grid>
            )}
            {expanded &&
                configureRegisters.map(code => (
                    <Grid item xs={12} key={code}>
                        <RegisterInputItem
                            service={service}
                            registerCode={code}
                            visible={visible}
                        />
                    </Grid>
                ))}
        </>
    )
}
