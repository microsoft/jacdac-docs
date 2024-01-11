import {
    PowerPowerStatus,
    PowerReg,
    SRV_POWER,
} from "../../../jacdac-ts/src/jdom/constants"
import { JDDevice } from "../../../jacdac-ts/src/jdom/device"
import React from "react"
import DeviceAvatar from "./DeviceAvatar"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import { Chip } from "@mui/material"
import useRegister from "../hooks/useRegister"
import {
    useRegisterBoolValue,
    useRegisterUnpackedValue,
} from "../../jacdac/useRegisterValue"
import { humanify } from "../../../jacdac-ts/jacdac-spec/spectool/jdspec"

function ServicePowerChip(props: { service: JDService }) {
    const { service } = props
    const allowedRegister = useRegister(service, PowerReg.Allowed)
    const powerStatusRegister = useRegister(service, PowerReg.PowerStatus)
    const allowed = useRegisterBoolValue(allowedRegister, { visible: true })
    const [powerStatus] = useRegisterUnpackedValue<[PowerPowerStatus]>(
        powerStatusRegister,
        { visible: true }
    )
    const deviceName = service.device.shortId

    if (allowed === undefined || powerStatus === undefined) return null

    const off = !allowed
    const on = !off && powerStatus === PowerPowerStatus.Powering
    const status = off
        ? "off"
        : on
        ? "on"
        : humanify(PowerPowerStatus[powerStatus])?.toLowerCase()
    return (
        <Chip
            sx={{ mr: 0.5 }}
            label={status}
            variant={"outlined"}
            title={`${deviceName}: power '${status}'`}
            avatar={<DeviceAvatar device={service.device} />}
        />
    )
}

export default function DevicePowerChips(props: { devices: JDDevice[] }) {
    const { devices } = props
    const powers = devices.flatMap(dev =>
        dev.services({ serviceClass: SRV_POWER })
    )

    if (!powers?.length) return null

    return (
        <>
            {powers.map(service => (
                <ServicePowerChip key={service.id} service={service} />
            ))}
        </>
    )
}
