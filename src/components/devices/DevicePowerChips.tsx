import {
    PowerPowerStatus,
    PowerReg,
    SRV_POWER,
} from "../../../jacdac-ts/src/jdom/constants"
import { JDDevice } from "../../../jacdac-ts/src/jdom/device"
import React from "react"
import DeviceAvatar from "./DeviceAvatar"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import { Chip, Typography } from "@mui/material"
import useRegister from "../hooks/useRegister"
import {
    useRegisterBoolValue,
    useRegisterUnpackedValue,
} from "../../jacdac/useRegisterValue"
import { humanify } from "../../../jacdac-ts/jacdac-spec/spectool/jdspec"
import useServiceServer from "../hooks/useServiceServer"
import SwitchWithLabel from "../ui/SwitchWithLabel"

function ServicePowerChip(props: { service: JDService }) {
    const { service } = props
    const allowedRegister = useRegister(service, PowerReg.Allowed)
    const powerStatusRegister = useRegister(service, PowerReg.PowerStatus)
    const allowed = useRegisterBoolValue(allowedRegister, { visible: true })
    const [powerStatus] = useRegisterUnpackedValue<[PowerPowerStatus]>(
        powerStatusRegister,
        { visible: true }
    )
    const server = useServiceServer(service)
    const color = server ? "secondary" : "primary"

    if (allowed === undefined || powerStatus === undefined) return null

    const off = !allowed
    const status = off
        ? "off"
        : powerStatus === PowerPowerStatus.Powering
        ? "on"
        : humanify(PowerPowerStatus[powerStatus])?.toLowerCase()
    const label = (
        <SwitchWithLabel
            color={
                powerStatus === PowerPowerStatus.Overload ||
                powerStatus === PowerPowerStatus.Overprovision
                    ? "error"
                    : color
            }
            label={<Typography variant="caption">{status}</Typography>}
            title={`power ${status}`}
            checked={!off}
            readOnly={true}
        />
    )
    return (
        <Chip
            sx={{ mr: 0.5 }}
            label={label}
            variant={"outlined"}
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
