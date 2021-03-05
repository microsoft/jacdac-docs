import { ControlReg, SRV_CTRL } from "../../../src/jdom/constants";
import { CardHeader, Chip, Typography } from "@material-ui/core";
// tslint:disable-next-line: no-submodule-imports
import { Link } from 'gatsby-theme-material-ui';
import { JDDevice } from "../../../src/jdom/device";
import React from "react";
import { useRegisterIntValue, useRegisterStringValue } from "../jacdac/useRegisterValue";
import DeviceActions from "./DeviceActions";
import DeviceName from "./DeviceName";
import DeviceCardMedia from "./DeviceCardMedia"
import useDeviceSpecification from "../jacdac/useDeviceSpecification";
import { identifierToUrlPath } from "../../../src/jdom/spec";
import DeviceAvatar from "./devices/DeviceAvatar";

function DeviceFirmwareVersionChip(props: { device: JDDevice }) {
    const { device } = props;
    const firmwareVersionRegister = device?.service(0)?.register(ControlReg.FirmwareVersion)
    const firmwareVersion = useRegisterStringValue(firmwareVersionRegister);

    return (firmwareVersion && <Chip size="small" label={firmwareVersion} />) || <></>
}

function DeviceTemperatureChip(props: { device: JDDevice }) {
    const { device } = props;
    const tempRegister = device?.service(0)?.register(ControlReg.McuTemperature)
    const temperature = useRegisterIntValue(tempRegister);
    return (temperature !== undefined && <Chip size="small" label={`${temperature}°`} />) || <></>
}

export default function DeviceCardHeader(props: {
    device: JDDevice,
    showAvatar?: boolean,
    showDeviceId?: boolean,
    showFirmware?: boolean,
    showTemperature?: boolean,
    showMedia?: boolean
}) {
    const { device, showFirmware, showTemperature, showMedia, showDeviceId, showAvatar } = props;
    const { specification } = useDeviceSpecification(device);

    return <>
        {showMedia && <DeviceCardMedia device={device} />}
        <CardHeader
            avatar={showAvatar && <DeviceAvatar device={device} />}
            action={<DeviceActions device={device} showReset={true} />}
            title={<Link color="textPrimary" to={`/devices/${identifierToUrlPath(specification?.id) || ""}`}>
                <DeviceName device={device} />
            </Link>}
            subheader={<>
                <Typography variant="caption" gutterBottom>
                    {[specification?.name, showDeviceId && device.deviceId].filter(s => !!s).join(', ')}
                </Typography>
                {showFirmware && <DeviceFirmwareVersionChip device={device} />}
                {showTemperature && <DeviceTemperatureChip device={device} />}
            </>}
        />
    </>
}