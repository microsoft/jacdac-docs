/* eslint-disable jsx-a11y/media-has-caption */
import {
    Card,
    CardContent,
    CardHeader,
    createStyles,
    FormControl,
    makeStyles,
    MenuItem,
    Select,
} from "@material-ui/core"
import React, {
    ChangeEvent,
    lazy,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import useEffectAsync from "../useEffectAsync"
import SettingsIcon from "@material-ui/icons/Settings"
import IconButtonWithTooltip from "./IconButtonWithTooltip"
import useMounted from "../hooks/useMounted"
import Suspense from "./Suspense"
import CloseIcon from "@material-ui/icons/Close"
import AppContext from "../AppContext"
const Draggable = lazy(() => import("react-draggable"))

export function isMediaDevicesSupported(): boolean {
    return (
        typeof navigator !== undefined &&
        !!navigator.mediaDevices &&
        !!navigator.mediaDevices.enumerateDevices &&
        !!navigator.mediaDevices.getUserMedia
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        cardContainer: {
            zIndex: 1101,
            position: "absolute",
            left: "5rem",
            top: "5rem",
        },
        card: {
            "& .hostedcontainer": {
                position: "relative",
                width: "30vw",
            },
            "& video": {
                border: "none",
                position: "relative",
                width: "100%",
                height: "100%",
            },
        },
    })
)

export async function requestVideoStream() {
    // first ask for permission from ther user so that
    // labels are populated in enumerateDevices
    return await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
    })
}

export default function WebCam() {
    const { setShowWebCam } = useContext(AppContext)
    const [devices, setDevices] = useState<MediaDeviceInfo[]>()
    const [deviceId, setDeviceId] = useLocalStorage("webcam_deviceid", "")
    const nodeRef = useRef<HTMLSpanElement>()
    const streamRef = useRef<MediaStream>()
    const videoRef = useRef<HTMLVideoElement>()
    const [settingsOpen, setSettingsOpen] = useState(!deviceId)
    const mounted = useMounted()
    const classes = useStyles()

    const handleClose = () => setShowWebCam(false)
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

        // enumerate devices
        const devices = await navigator.mediaDevices.enumerateDevices()
        const webcams = devices.filter(device => device.kind == "videoinput")

        if (mounted()) setDevices(webcams)
    }, [])

    // cleanup
    useEffect(() => stop, [deviceId])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const draggableProps: any = {
        nodeRef,
    }

    return (
        <Suspense>
            <Draggable {...draggableProps}>
                <span ref={nodeRef} className={classes.cardContainer}>
                    <Card className={classes.card}>
                        <CardHeader
                            title={
                                settingsOpen && (
                                    <FormControl
                                        variant="outlined"
                                        size="small"
                                    >
                                        <Select
                                            title="select a webcam"
                                            open={settingsOpen}
                                            onChange={handleDeviceChange}
                                            value={deviceId}
                                        >
                                            {devices?.map(
                                                ({ deviceId, label }) => (
                                                    <MenuItem
                                                        key={deviceId}
                                                        value={deviceId}
                                                    >
                                                        {label}
                                                    </MenuItem>
                                                )
                                            )}
                                        </Select>
                                    </FormControl>
                                )
                            }
                            action={
                                <>
                                    <IconButtonWithTooltip
                                        size="small"
                                        onClick={handleSettings}
                                        title="Settings"
                                    >
                                        <SettingsIcon />
                                    </IconButtonWithTooltip>
                                    <IconButtonWithTooltip
                                        size="small"
                                        onClick={handleClose}
                                        title="Close"
                                    >
                                        <CloseIcon />
                                    </IconButtonWithTooltip>
                                </>
                            }
                        />
                        <CardContent>
                            <div className="hostedcontainer">
                                <video
                                    autoPlay
                                    playsInline
                                    ref={videoRef}
                                    title="webcam"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </span>
            </Draggable>
        </Suspense>
    )
}
