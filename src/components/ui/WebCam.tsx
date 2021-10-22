/* eslint-disable jsx-a11y/media-has-caption */
import {
    Card,
    CardContent,
    CardHeader,
    MenuItem,
    Select,
} from "@material-ui/core"
import React, { ChangeEvent, useEffect, useRef, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import useEffectAsync from "../useEffectAsync"
import SettingsIcon from "@material-ui/icons/Settings"
import IconButtonWithTooltip from "./IconButtonWithTooltip"
import useMounted from "../hooks/useMounted"

export function isMediaDevicesSupported(): boolean {
    return (
        typeof navigator !== undefined &&
        !!navigator.mediaDevices &&
        !!navigator.mediaDevices.enumerateDevices &&
        !!navigator.mediaDevices.getUserMedia
    )
}

export default function WebCam() {
    const [devices, setDevices] = useState<MediaDeviceInfo[]>("")
    const [deviceId, setDeviceId] = useLocalStorage("webcam_deviceid")
    const streamRef = useRef<MediaStream>()
    const videoRef = useRef<HTMLVideoElement>()
    const [settingsOpen, setSettingsOpen] = useState(false)
    const mounted = useMounted()

    const handleSettings = () => setSettingsOpen(newValue => !newValue)
    const handleDeviceChange = (
        ev: ChangeEvent<{ name?: string; value: unknown }>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) => setDeviceId(ev.target.value as any as string)
    const stop = () => {
        const stream = streamRef.current
        if (stream) {
            try {
                const tracks = stream.getTracks()
                if (tracks) tracks.forEach(track => track.stop())
            } catch (e) {
                console.debug(e)
            }
            streamRef.current = undefined
        }
        const video = videoRef.current
        if (video) {
            try {
                video.srcObject = undefined
            } catch (e) {
                console.debug(e)
            }
        }
    }

    // start camera
    useEffectAsync(async () => {
        console.debug(`greenscreen: start`)
        // deviceId is "" if green screen selected
        if (deviceId) {
            console.debug(`greenscreen: stream acquired`)
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { advanced: [{ deviceId: deviceId }] },
                    audio: false,
                })
                streamRef.current = stream
                const video = videoRef.current
                video.srcObject = stream
                video.play()

                if (mounted()) setSettingsOpen(false)
            } catch (e) {
                console.debug(`greenscreen: play failed`)
                console.error(e)
                if (mounted()) setDeviceId(undefined)
            }
        }
    }, [deviceId])

    // startup
    useEffectAsync(async () => {
        // first ask for permission from ther user so that
        // labels are populated in enumerateDevices
        await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true,
        })

        // enumerate devices
        const devices = await navigator.mediaDevices.enumerateDevices()
        const webcams = devices.filter(device => device.kind == "videoinput")

        if (mounted()) setDevices(webcams)
    }, [])

    // cleanup
    useEffect(() => stop, [deviceId])

    return (
        <>
            <Card>
                <CardHeader
                    action={
                        <IconButtonWithTooltip
                            onClick={handleSettings}
                            title="Settings"
                        >
                            <SettingsIcon />
                        </IconButtonWithTooltip>
                    }
                />
                <CardContent>
                    {settingsOpen && (
                        <Select
                            title="select a webcam"
                            open={settingsOpen}
                            onChange={handleDeviceChange}
                            value={deviceId}
                        >
                            {devices?.map(({ deviceId, label }) => (
                                <MenuItem key={deviceId} value={deviceId}>
                                    {label}
                                </MenuItem>
                            ))}
                        </Select>
                    )}
                    <video autoPlay playsInline ref={videoRef} title="webcam" />
                </CardContent>
            </Card>
        </>
    )
}
