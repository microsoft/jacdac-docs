import React, { useState, useEffect, useRef, useCallback } from "react"
import {
  RENDER,
  REPORT_UPDATE,
  SG90_RESPONSE_SPEED,
  ServoServer,
  BaseReg,
  RelayReg,
  ServoReg,
  LedStripVariant,
  LedReg,
  bufferEq,
  JDEventSource,
} from "../../../jacdac-ts/src/jacdac"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import useServiceServer from "../hooks/useServiceServer"
import useRegister from "../hooks/useRegister"
import useThrottledValue from "../hooks/useThrottledValue"
import {useRegisterBoolValue, useRegisterUnpackedValue} from "../../jacdac/useRegisterValue"
import {FormControlLabel, Grid, Slider, Switch} from "@mui/material"

import FwdLEDWidget from "../widgets/FwdLEDWidget"
import FwdPumpWidget from "../widgets/FwdPumpWidget"
import FwdServoWidget from "../widgets/FwdServoWidget"
import DashboardRegisterValueFallback from "./DashboardRegisterValueFallback"
import SwitchWithLabel from "../ui/SwitchWithLabel"
import useChange from "../../jacdac/useChange"
import ColorButtons from "../widgets/ColorButtons"


export function createPumpWidget (props: DashboardServiceProps) {
    const { service } = props
    const activeRegister = useRegister(service, RelayReg.Active)
    const active = useRegisterBoolValue(activeRegister, props)

    const handleClose = (_: unknown, checked: boolean) =>
        activeRegister?.sendSetBoolAsync(checked, true)

    if (active === undefined)
        return <DashboardRegisterValueFallback register={activeRegister} />

    return (
      <>
        <FwdPumpWidget 
          active={active}
          size={`clamp(7em, 13vw, 14vh)`}
        />
        <SwitchWithLabel
            label={active ? "Running" : "Stopped"}
            checked={active}
            onChange={handleClose}
        /> 
      </>
    )
}

export function createServoWidget (props: DashboardServiceProps) {
    const { service, visible } = props

    const enabledRegister = useRegister(service, ServoReg.Enabled)
    const enabled = useRegisterBoolValue(enabledRegister, props)
    const angleRegister = useRegister(service, ServoReg.Angle)
    const [reportedAngle = 90] = useRegisterUnpackedValue<[number]>(angleRegister, {
        visible,
    })
    // sec/60deg
    const responseSpeedRegister = useRegister(service, ServoReg.ResponseSpeed)
    const [responseSpeed = SG90_RESPONSE_SPEED] = useRegisterUnpackedValue<
        [number]
    >(responseSpeedRegister, { visible })
    const rotationalSpeed = 60 / responseSpeed
    const angle = useThrottledValue(reportedAngle, rotationalSpeed)

    const offsetRegister = useRegister(service, ServoReg.Offset)
    const [offset] = useRegisterUnpackedValue<[number]>(offsetRegister, props)
    const clientVariantRegister = useRegister(service, BaseReg.ClientVariant)
    const [clientVariant] = useRegisterUnpackedValue<[string]>(
        clientVariantRegister,
        props
    )
    const minAngleRegister = useRegister(service, ServoReg.MinAngle)
    const [minAngle = 0] = useRegisterUnpackedValue<[number]>(
        minAngleRegister,
        props
    )
    const maxAngleRegister = useRegister(service, ServoReg.MaxAngle)
    const [maxAngle = 270] = useRegisterUnpackedValue<[number]>(
        maxAngleRegister,
        props
    )

    const [continuous, setContinuous] = useState( /cont=1/.test(clientVariant) || false )
    const throttle = ((angle - minAngle) / (maxAngle - minAngle)) * 200 - 100

    const server = useServiceServer<ServoServer>(service)
    const color = server ? "secondary" : "primary"

    const toggleOff = () => enabledRegister.sendSetBoolAsync(!enabled, true)
    const widgetSize = `clamp(7rem, 16vw, 16vh)`
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

    const handleVariantChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isContinuous = event.target.checked
        if (clientVariant !== undefined) {
          clientVariantRegister.sendSetStringAsync(`cont=${isContinuous ? '1' : '0'}`, true)
        }
        setContinuous(isContinuous)
        if (!isContinuous) handleAngleChange(undefined, (maxAngle - minAngle) / 2 + minAngle)
    }

    return (
        <Grid container alignContent="center">
            <Grid item xs={12}>
                <FormControlLabel
                  value="servo-mode"
                  control={<Switch checked={continuous} onChange={handleVariantChange} />}
                  label={continuous ? "Continuous" : "Positional"}
                  labelPlacement="end"
                />
                <FwdServoWidget
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

export function createLEDWidget (props: DashboardServiceProps) {
  const { service } = props
  const pixelsRegister = useRegister(service, LedReg.Pixels)
  const hasData = useChange(pixelsRegister, _ => !!_?.data)
  const [penColor, setPenColor] = useState<number>(0x0000ff)
  const colorsRef = useRef<Uint8Array>(new Uint8Array(0))
  const clientRef = useRef(new JDEventSource())
 const [ledControls, setLedControls] = useState( false )

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
    if ( newPixels[k] == r && newPixels[k + 1] == g && newPixels[k + 2] == b) {
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

  useEffect(() => {
    if (!pixelsRegister) return undefined
    const updatePixels = () => {
      const [pixels] = pixelsRegister.unpackedValue || []
      if (pixels && !bufferEq(colorsRef.current, pixels)) {
        colorsRef.current = pixels.slice(0)
        clientRef.current.emit(RENDER)
      }
    }
    updatePixels()
    return pixelsRegister.subscribe(REPORT_UPDATE, updatePixels)
  }, [pixelsRegister])
  const colors: () => Uint8Array = useCallback(() => colorsRef.current, [])
  const numPixelsRegister = useRegister(service, LedReg.NumPixels)
  const [numPixels] = useRegisterUnpackedValue<[number]>(
      numPixelsRegister,
      props
    )

  const actualBrightnessRegister = useRegister(
      service,
      LedReg.ActualBrightness
    )
  const [actualBrightness = 0.5] = useRegisterUnpackedValue<[number]>(
      actualBrightnessRegister,
      props
    )

  const subscribeColors = useCallback(
    handler => clientRef.current.subscribe(RENDER, handler),
    []
  )

  const colourPalette = [
						{ name: "red", value: 0xff0000 },
						{ name: "orange", value: 0xff7f00 },
						{ name: "yellow", value: 0xffff00 },
						{ name: "green", value: 0x00ff00 },
						{ name: "blue", value: 0x0000ff },
						{ name: "purple", value: 0xa033e5 },
						{ name: "pink", value: 0xff007f },
						{ name: "white", value: 0xffffff },
						{ name: "black", value: 0x000000 },
          ]

  const handlePanelToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLedControls(event.target.checked)
  }

  const ready = numPixels !== undefined && hasData

  return (
    <Grid container flexWrap={"nowrap"}>
      <Grid item xs={12}>
        { ready && <FwdLEDWidget
          widgetSize={ledControls ? 'clamp(8rem, 12vw, 15vh)' : 'clamp(6rem, 12vw, 15vh)'}
          colors={colors}
          subscribeColors={subscribeColors}
          numPixels={numPixels}
          lightVariant={LedStripVariant.Ring}
          actualBrightness={actualBrightness}
          onLedClick={handleLedClick}
        /> }
        <FormControlLabel
          value="led-control"
          control={<Switch checked={ledControls} onChange={handlePanelToggle} />}
          label={"Palette"}
          labelPlacement="end"
        />
      </Grid>
      <Grid item xs={12}>
        { ledControls && <ColorButtons
          color={penColor}
          onColorChange={handleColorChange}
          colors={colourPalette}
        /> }
      </Grid>
    </Grid>
  )
}
