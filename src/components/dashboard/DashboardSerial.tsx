import React, { useEffect } from "react"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import {
    SerialCmd,
    SerialParityType,
    SerialReg,
} from "../../../jacdac-ts/jacdac-spec/dist/specconstants"
import { Grid } from "@mui/material"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import useRegister from "../hooks/useRegister"
import { Packet } from "../../../jacdac-ts/src/jdom/packet"
import { REPORT_RECEIVE } from "../../../jacdac-ts/src/jdom/constants"
import { toHex } from "../../../jacdac-ts/src/jdom/utils"

export default function DashboardSerial(props: DashboardServiceProps) {
    const { service } = props

    const baudRateRegister = useRegister(service, SerialReg.BaudRate)
    const dataBitsRegister = useRegister(service, SerialReg.DataBits)
    const stopBitsRegister = useRegister(service, SerialReg.StopBits)
    const parityRegister = useRegister(service, SerialReg.ParityMode)

    const baudRate = useRegisterUnpackedValue<[number]>(baudRateRegister, props)
    const dataBits = useRegisterUnpackedValue<[number]>(dataBitsRegister, props)
    const stopBits = useRegisterUnpackedValue<[number]>(stopBitsRegister, props)
    const parity = useRegisterUnpackedValue<[SerialParityType]>(
        parityRegister,
        props
    )

    const connection = `${baudRate || "?"} baud/${dataBits || "?"}${
        parity?.[0] || "?"
    }${stopBits || "?"}`

    useEffect(
        () =>
            service.subscribe(REPORT_RECEIVE, (pkt: Packet) => {
                const { data, serviceCommand } = pkt
                if (serviceCommand === SerialCmd.Received) {
                    console.log(toHex(data))
                }
            }),
        [service]
    )

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                {connection}
            </Grid>
        </Grid>
    )
}
