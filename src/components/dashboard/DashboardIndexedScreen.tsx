import React, {
    CSSProperties,
    useContext,
    useEffect,
    useId,
    useRef,
} from "react"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import useServiceServer from "../hooks/useServiceServer"
import { IndexedScreenServer } from "../../../jacdac-ts/src/servers/indexedscreenserver"
import { CHANGE, IndexedScreenReg } from "../../../jacdac-ts/src/jdom/constants"
import useRegister from "../hooks/useRegister"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import DashboardRegisterValueFallback from "./DashboardRegisterValueFallback"
import DarkModeContext from "../ui/DarkModeContext"
import { Grid } from "@mui/material"
import RegisterInput from "../RegisterInput"

const MIN_OPACITY = 0.4

export default function DashboardIndexedScreen(props: DashboardServiceProps) {
    const { service, visible, expanded } = props
    const id = useId()
    const { darkMode } = useContext(DarkModeContext)
    const server = useServiceServer<IndexedScreenServer>(
        service,
        () => new IndexedScreenServer()
    )

    const widthRegister = useRegister(service, IndexedScreenReg.Width)
    const heightRegister = useRegister(service, IndexedScreenReg.Height)
    const brightnessRegister = useRegister(service, IndexedScreenReg.Brightness)

    const [width] = useRegisterUnpackedValue<[number]>(widthRegister, props)
    const [height] = useRegisterUnpackedValue<[number]>(heightRegister, props)
    const [brightness = 1] = useRegisterUnpackedValue<[number]>(
        brightnessRegister,
        props
    )

    const canvasRef = useRef<HTMLCanvasElement>()
    const contextRef = useRef<CanvasRenderingContext2D>()

    // update canvas size
    useEffect(() => {
        contextRef.current = undefined
        const canvas = canvasRef.current
        if (canvas) {
            if (!isNaN(width)) canvas.width = width
            if (!isNaN(height)) canvas.height = height
        }
    }, [width, height])

    // repaint
    useEffect(() => {
        if (!visible || !server || !width || !height) return
        const paint = () => {
            const canvas = canvasRef.current
            if (!canvas) return

            const context =
                contextRef.current ||
                (contextRef.current = canvas.getContext("2d"))
            if (!context) return

            const pixels = server?.pixels
            context.clearRect(0, 0, canvas.width, canvas.height)

            if (!pixels) {
                context.fillStyle = darkMode === "dark" ? "#999" : "#222"
                context.fillRect(0, 0, canvas.width, canvas.height)
            } else {
                context.putImageData(pixels, 0, 0)
            }
        }

        paint()
        return server.subscribe(CHANGE, paint)
    }, [server, visible, width, height])

    if (width === undefined || height === undefined)
        return (
            <DashboardRegisterValueFallback
                register={height === undefined ? heightRegister : widthRegister}
            />
        )

    const canvasStyle: CSSProperties = {
        opacity: MIN_OPACITY + brightness * (1 - MIN_OPACITY),
        border: "none",
        width: "100%",
        height: "100%",
        objectFit: "contain",
        objectPosition: "top",
        imageRendering: "pixelated",
        display: "block",
    }
    const parentStyle: CSSProperties = {
        width: "clamp(5rem, 90vw, 20rem)",
        borderWidth: "2px",
        borderStyle: "solid",
        borderRadius: "0.25rem",
        borderColor: darkMode === "dark" ? "#999" : "#222",
    }

    return (
        <>
            <Grid sx={{ mt: 0.5 }} item xs={12}>
                <div style={parentStyle}>
                    <canvas id={id} ref={canvasRef} style={canvasStyle} />
                </div>{" "}
            </Grid>
            {expanded && (
                <Grid item xs={12}>
                    <RegisterInput
                        register={brightnessRegister}
                        visible={visible}
                        showRegisterName={true}
                    />
                </Grid>
            )}
        </>
    )
}
