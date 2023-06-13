import React, { createElement } from "react"
import useDeviceProductIdentifier from "../../jacdac/useDeviceProductIdentifier"
import useDeviceSpecifications from "../devices/useDeviceSpecifications"
import { JDDevice, SRV_DISTANCE, SRV_LIGHT_LEVEL } from "../../../jacdac-ts/src/jacdac"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import useServiceServer from "../hooks/useServiceServer"
import DashboardServiceDefaultWidget from "./DashboardServiceDefaultWidget"
import useRegister from "../hooks/useRegister"
import {useRegisterUnpackedValue} from "../../jacdac/useRegisterValue"
import Suspense from "../ui/Suspense"
import {CircularProgress, useRadioGroup} from "@mui/material"

import FwdDialButtonWidget from "../widgets/FwdDialButtonWidget"
import FwdDialWidget from "../widgets/FwdDialWidget"
import FwdLEDWidget from "../widgets/FwdLEDWidget"
import FwdLineWidget from "../widgets/FwdLineWidget"
import FwdPumpWidget from "../widgets/FwdPumpWidget"
import FwdServoWidget from "../widgets/FwdServoWidget"
import FwdSoilMoistureWidget from "../widgets/FwdSoilMoistureWidget"
import FwdSolarWidget from "../widgets/FwdSolarWidget"
import FwdSonarWidget from "../widgets/FwdSonarWidget"
import FwdTouchWidget from "../widgets/FwdTouchWidget"


export function isFwdEdu (device: JDDevice): boolean {
  const FwdEduDevices = useDeviceSpecifications()
      .filter( device => device?.productIdentifiers && device.company.match(/(fwd|forward) ?edu(cation)?/i) )
      .flatMap( device => device.productIdentifiers )
  const deviceId = useDeviceProductIdentifier(device)
  return FwdEduDevices.includes( deviceId )
}

export function lazyWidget (widget, widgetProps) {
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

export function FwdEduSubstituteWidget (props: DashboardServiceProps) {
  const { service } = props
  const server = useServiceServer(service)
  const color = server ? "secondary" : "primary" as "primary" | "secondary"
  const size = 'clamp(6rem, 12vw, 14vh)'

  const registerNumber = service.readingRegister.specification.identifier || 257
  const valueReg = useRegister(service, registerNumber)
  const [value] = useRegisterUnpackedValue<[number]>(valueReg, props)
  const widgetProps = { color: color, size: size, value: value }

  switch (service.serviceClass) {
    case SRV_DISTANCE:
      return lazyWidget(FwdSonarWidget, {color: widgetProps.color, value: widgetProps.value*100, size: 'clamp(6rem, 15vw, 20vh'})
    case SRV_LIGHT_LEVEL:
      return lazyWidget(FwdSolarWidget, widgetProps)
    default:
      return DashboardServiceDefaultWidget(props)
  }
}

export { 
  FwdDialButtonWidget,
  FwdDialWidget,
  FwdLEDWidget,
  FwdLineWidget,
  FwdPumpWidget,
  FwdServoWidget,
  FwdSoilMoistureWidget,
  FwdSolarWidget,
  FwdSonarWidget,
  FwdTouchWidget,
}
