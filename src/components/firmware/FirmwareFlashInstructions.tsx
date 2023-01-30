import React from "react"

export default function FirmwareFlashInstructions(props: {
    specification: jdspec.DeviceSpec
}) {
    const { specification } = props
    const { bootloader } = specification || {}
    const { driveName, sequence, ledAnimation, firmwareUploader } =
        bootloader || {}

    return (
        <>
            {sequence === "reset" && (
                <li>
                    Press the &nbsp;<b>Reset (RST)</b>&nbsp; button.
                </li>
            )}
            {sequence === "reset-boot" && (
                <li>
                    Press the &nbsp;<b>Reset (RST)</b>&nbsp; then &nbsp;
                    <b>Bootloader (BOOT)</b>&nbsp; button.
                </li>
            )}
            {sequence === "boot-power" && (
                <li>
                    Unplug the device, press the &nbsp;<b>Bootloader (BOOT)</b>
                    &nbsp; button, plug the device.
                </li>
            )}
            {ledAnimation === "blue-glow" && driveName && (
                <li>
                    You should see the status LED glow in Blue and the&nbsp;
                    <b>{driveName}</b>&nbsp; drive should appear.
                </li>
            )}
            {driveName && (
                <>
                    <li>
                        Drag and drop the file into the&nbsp;
                        <b>{driveName}</b>&nbsp; drive.
                    </li>
                    <li>
                        Once the file is copied, the device will automatically
                        restart with the new firmware.
                    </li>
                </>
            )}
            {firmwareUploader && (
                <li>
                    Open the &nbsp;
                    <a href={firmwareUploader} rel="noreferrer" target="_blank">
                        Firmware Uploader
                    </a>
                    &nbsp; and follow the instruction to upload the firmware.
                </li>
            )}
        </>
    )
}
