import { Dialog, DialogContent, Grid } from "@mui/material"
import React, { useCallback, useState } from "react"
import { ControlAnnounceFlags } from "../../../jacdac-ts/jacdac-spec/dist/specconstants"
import JDDevice from "../../../jacdac-ts/src/jdom/device"
import useDeviceSpecification from "../../jacdac/useDeviceSpecification"
import DeviceName from "../devices/DeviceName"
import useDeviceImage from "../devices/useDeviceImage"
import useInterval from "../hooks/useInterval"
import Alert from "../ui/AlÏert"
import DialogTitleWithClose from "../ui/DialogTitleWithClose"

function LazyDeviceImage(props: { device: JDDevice }) {
    const { device } = props
    const specification = useDeviceSpecification(device)
    const imageUrl = useDeviceImage(specification, "lazy")
    const largeImageUrl = useDeviceImage(specification, "catalog")
    const [showLarge, setShowLarge] = useState(false)

    if (!imageUrl) return null

    const handleLargeLoaded = () => setShowLarge(true)

    return (
        <>
            <img
                alt="photograph of the device"
                style={{
                    width: "100%",
                    display: showLarge ? undefined : "none",
                }}
                src={largeImageUrl}
                onLoad={handleLargeLoaded}
            />
            {!showLarge && (
                <img
                    alt="large photograph of the device"
                    style={{
                        minHeight: "18rem",
                        width: "100%",
                        filter: "blur",
                    }}
                    src={imageUrl}
                />
            )}
        </>
    )
}

export default function IdentifyDialog(props: {
    device: JDDevice
    open: boolean
    onClose: () => void
}) {
    const { device, open, onClose } = props
    const handleSendIdentify = useCallback(async () => await device.identify(), [device])
    const handleCloseIdentify = () => onClose()
    const { statusLightFlags } = device
    const blue =
        statusLightFlags === ControlAnnounceFlags.StatusLightRgbFade ||
        statusLightFlags === ControlAnnounceFlags.StatusLightRgbNoFade
    useInterval(open, handleSendIdentify, 5000, [device])

    return (
        <Dialog open={open} onClose={handleCloseIdentify}>
            <DialogTitleWithClose onClose={handleCloseIdentify}>
                Identifying{" "}
                <DeviceName
                    device={device}
                    linkToSpecification={true}
                    onLinkClick={handleCloseIdentify}
                />
                ...
            </DialogTitleWithClose>
            <DialogContent>
                <Grid container alignItems="center" alignContent={"center"}>
                    <Grid item xs={12}>
                        <LazyDeviceImage device={device} />
                    </Grid>
                    <Grid item xs>
                        <Alert severity="info">
                            Look for four blinks in around 2 seconds with the
                            {blue ? " blue" : " "} LED.
                        </Alert>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}
