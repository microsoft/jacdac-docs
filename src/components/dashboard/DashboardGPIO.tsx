import React, { useEffect, useState } from "react"
import {
    GPIOCapabilities,
    GPIOCmd,
    GPIOCmdPack,
    GPIOMode,
    GPIOReg,
} from "../../../jacdac-ts/jacdac-spec/dist/specconstants"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import useRegister from "../hooks/useRegister"
import DashboardRegisterValueFallback from "./DashboardRegisterValueFallback"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import { Table, TableCell, TableRow } from "@mui/material"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import useEffectAsync from "../useEffectAsync"
import { jdpack } from "../../../jacdac-ts/src/jdom/pack"
import { Packet } from "../../../jacdac-ts/src/jdom/packet"
import {
    COMMAND_RECEIVE,
    SRV_GPIO,
    prettyEnum,
} from "../../../jacdac-ts/src/jacdac"
import { useServiceSpecificationFromServiceClass } from "../../jacdac/useServiceSpecification"

interface GPIOPinInfo {
    hwPin: number
    capabilities: GPIOCapabilities
    mode: GPIOMode
    label: string
}

function PinItem(props: {
    service: JDService
    pin: number
    state: number
    visible: boolean
}) {
    const { service, pin, state } = props
    const [changeId, setChangeId] = useState(0)
    const [info, setInfo] = useState<GPIOPinInfo>(undefined)
    const { label = "", mode, capabilities, hwPin } = info || {}
    const spec = useServiceSpecificationFromServiceClass(SRV_GPIO)
    const modeSpec = spec.enums["Mode"]
    const capSpec = spec.enums["Capabilities"]

    useEffectAsync(async () => {
        const pkt = Packet.from(
            GPIOCmd.PinInfo,
            jdpack(GPIOCmdPack.PinInfo, [pin])
        )
        const resp = await service.sendCmdAwaitResponseAsync(pkt)
        const [, hwPin, capabilities, mode, label] = resp.jdunpack(
            GPIOCmdPack.PinInfoReport
        )

        setInfo({ hwPin, capabilities, mode, label })
    }, [service, changeId])

    useEffect(
        () =>
            service?.subscribe(COMMAND_RECEIVE, (pkt: Packet) => {
                const cmd = pkt.serviceCommand
                if (cmd === GPIOCmd.Configure) {
                    setChangeId(id => id + 1)
                }
            }),
        [service]
    )

    return (
        <TableRow>
            <TableCell title={`pin ${label || pin + ""}, hardware id ${hwPin}`}>
                {label || pin + ""} {`(#${hwPin})`}
            </TableCell>
            <TableCell>{state !== undefined ? state : ""}</TableCell>
            <TableCell>
                {mode !== undefined
                    ? prettyEnum(modeSpec, mode).toLowerCase()
                    : ""}
            </TableCell>
            <TableCell>
                {capabilities !== undefined
                    ? prettyEnum(capSpec, capabilities).toLowerCase()
                    : ""}
            </TableCell>
        </TableRow>
    )
}

export default function DashboardGPIO(props: DashboardServiceProps) {
    const { service, visible } = props

    const stateRegister = useRegister(service, GPIOReg.State)
    const [state] = useRegisterUnpackedValue<[Uint8Array]>(stateRegister, props)

    if (state === undefined)
        return <DashboardRegisterValueFallback register={stateRegister} />

    return (
        <Table size="small">
            {Array(state.length)
                .fill(0)
                .map((v, i) => (
                    <PinItem
                        service={service}
                        pin={i}
                        key={i}
                        state={state[i]}
                        visible={visible}
                    />
                ))}
        </Table>
    )
}
