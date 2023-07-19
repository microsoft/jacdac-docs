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
import {
    CHANGE,
    FRAME_PROCESS_LARGE,
    IndexedScreenReg,
} from "../../../jacdac-ts/src/jdom/constants"
import useRegister from "../hooks/useRegister"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import DashboardRegisterValueFallback from "./DashboardRegisterValueFallback"
import useBus from "../../jacdac/useBus"
import { JDFrameBuffer } from "../../../jacdac-ts/src/jacdac"
import DarkModeContext from "../ui/DarkModeContext"

const MIN_OPACITY = 0.4

export default function DashboardLEDStrip(props: DashboardServiceProps) {
    const { service, visible } = props
    const id = useId()
    const { darkMode } = useContext(DarkModeContext)
    const bus = useBus()
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

    useEffect(
        () =>
            bus?.subscribe(FRAME_PROCESS_LARGE, (frame: JDFrameBuffer) => {
                console.log({ frame })
            }),
        [bus]
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
        <div style={parentStyle}>
            <canvas id={id} ref={canvasRef} style={canvasStyle} />
        </div>
    )
}
