import React, { createElement, useState, useEffect } from "react"
import useDeviceProductIdentifier from "../../jacdac/useDeviceProductIdentifier"
import useDeviceSpecifications from "../devices/useDeviceSpecifications"
import {
  JDDevice,
  JDService,
  SRV_DISTANCE,
  SRV_LIGHT_LEVEL,
  SRV_SOIL_MOISTURE,
  SRV_BUTTON,
  SRV_ROTARY_ENCODER,
  SRV_RELAY,
  SRV_REFLECTED_LIGHT,
  SRV_SERVO,
  SRV_LED,
  EVENT,
  ButtonEvent,
  ButtonServer,
  ReflectedLightServer,
  JDRegister,
  RotaryEncoderReg,
} from "../../../jacdac-ts/src/jacdac"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import useServiceServer from "../hooks/useServiceServer"
import DashboardServiceDefaultWidget from "./DashboardServiceDefaultWidget"
import useRegister from "../hooks/useRegister"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import Suspense from "../ui/Suspense"
import { CircularProgress } from "@mui/material"

import { createLEDWidget, createPumpWidget, createServoWidget } from "./DashboardFwdUniqueComponents"
import FwdDialButtonWidget from "../widgets/FwdDialButtonWidget"
import FwdDialWidget from "../widgets/FwdDialWidget"
import FwdLineWidget from "../widgets/FwdLineWidget"
import FwdSoilMoistureWidget from "../widgets/FwdSoilMoistureWidget"
import FwdSolarWidget from "../widgets/FwdSolarWidget"
import FwdSonarWidget from "../widgets/FwdSonarWidget"
import FwdTouchWidget from "../widgets/FwdTouchWidget"
import useEvent from "../hooks/useEvent"
import useSvgButtonProps from "../hooks/useSvgButtonProps"


export function isFwdEdu (device: JDDevice): boolean {
  const FwdEduDevices = useDeviceSpecifications()
      .filter( device => device?.productIdentifiers && device.company.match(/(fwd|forward) ?edu(cation)?/i) )
      .flatMap( device => device.productIdentifiers )
  const deviceId = useDeviceProductIdentifier(device)
  return FwdEduDevices.includes( deviceId )
}

function isRotaryVariant (service: JDService): boolean {
  return service.serviceIndex > 1 && service.device.serviceClassAt(service.serviceIndex - 1) == SRV_ROTARY_ENCODER
}

function buttonWidgetProps (service: JDService, server?: ButtonServer) {
  const [pressed, setPressed] = useState<boolean>(false)
  const downEvent = useEvent(service, ButtonEvent.Down)
  const upEvent = useEvent(service, ButtonEvent.Up)
  useEffect(
      () => downEvent.subscribe(EVENT, () => setPressed(true)),
      [downEvent]
  )
  useEffect(
      () => upEvent.subscribe(EVENT, () => setPressed(false)),
      [upEvent]
  )

  return {
    onDown: () => server?.down(),
    onUp: () => server?.up(),
    checked: pressed,
    label: `button ${pressed ? `down` : `up`}`
  }
}

function lineWidgetProps (value: number, register: JDRegister, server: ReflectedLightServer) {
 const handleDown = () => {
    server.reading.setValues([value > 0 ? 0 : 1.0])
    register.refresh()
  }
  return {
    buttonProps: useSvgButtonProps("line detector", server && handleDown)
  }
}

function dialWidgetProps (value: number, service: JDService) {
  const clicksPerTurnRegister = useRegister(service, RotaryEncoderReg.ClicksPerTurn)
  const [clicksPerTurn = 20] = useRegisterUnpackedValue<[number]>(clicksPerTurnRegister)

  return {
    position: value,
    angle: (value / clicksPerTurn) * 360
  }
}

export function lazifyWidget (widget, widgetProps) {
  return (
    <Suspense
      fallback={
        <CircularProgress
          aria-label={`loading...`}
          color={widgetProps.color}
          disableShrink={true}
          variant={"indeterminate"}
          size={"1rem"}
        />
      }
    >
      {createElement(widget, widgetProps)}
    </Suspense>
  )
}

export function FwdEduSubstituteWidget (dashboardProps: DashboardServiceProps) {
  const { service } = dashboardProps
  switch (service.serviceClass) {
    case SRV_RELAY : return createPumpWidget( dashboardProps );
    case SRV_SERVO : return createServoWidget( dashboardProps );
    case SRV_LED   : return createLEDWidget( dashboardProps );
    default: break;
  }

  const server = useServiceServer(service)
  const color = server ? "secondary" : "primary" as "primary" | "secondary"
  const size = 'clamp(6rem, 12vw, 14vh)'

  // semi-generics
  const registerNumber = service.readingRegister.specification.identifier || 257
  const valueReg = useRegister(service, registerNumber)
  const [value] = useRegisterUnpackedValue<[number]>(valueReg, dashboardProps)
  const widgetProps = { color: color, size: size, value: value }

  switch (service.serviceClass) {
    case SRV_DISTANCE:
      return lazifyWidget(FwdSonarWidget, {color: widgetProps.color, value: widgetProps.value*100, size: 'clamp(6rem, 15vw, 20vh'})
    case SRV_LIGHT_LEVEL:
      return lazifyWidget(FwdSolarWidget, widgetProps)
    case SRV_SOIL_MOISTURE:
      return lazifyWidget(FwdSoilMoistureWidget, {...widgetProps, size: 'clamp(14rem, 12vw, 16vh)'} )
    case SRV_BUTTON:
      return lazifyWidget(isRotaryVariant(service) ? FwdDialButtonWidget : FwdTouchWidget,
        { ...widgetProps, ...buttonWidgetProps(service, server as ButtonServer) }
      )
    case SRV_REFLECTED_LIGHT:
      return lazifyWidget(FwdLineWidget,
        { ...widgetProps, ...lineWidgetProps(value, valueReg, server as ReflectedLightServer) }
      )
    case SRV_ROTARY_ENCODER:
      return lazifyWidget(FwdDialWidget, {...widgetProps, ...dialWidgetProps(value, service)})
    // case SRV_RELAY:
    // case SRV_SERVO:
    // case SRV_LED:
    default:
      return DashboardServiceDefaultWidget(dashboardProps)
  }
}
