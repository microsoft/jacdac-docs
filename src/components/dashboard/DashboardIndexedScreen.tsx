import React, { CSSProperties, useEffect, useId, useRef } from "react"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import useServiceServer from "../hooks/useServiceServer"
import { IndexedScreenServer } from "../../../jacdac-ts/src/servers/indexedscreenserver"
import { CHANGE, IndexedScreenReg } from "../../../jacdac-ts/src/jdom/constants"
import useRegister from "../hooks/useRegister"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import DashboardRegisterValueFallback from "./DashboardRegisterValueFallback"

const MIN_OPACITY = 0.4

export default function DashboardLEDStrip(props: DashboardServiceProps) {
    const { service, visible } = props
    const id = useId()
    const server = useServiceServer<IndexedScreenServer>(
        service,
        () => new IndexedScreenServer()
    )

    const widthRegister = useRegister(service, IndexedScreenReg.Width)
    const heightRegister = useRegister(service, IndexedScreenReg.Height)
    const brightnessRegister = useRegister(service, IndexedScreenReg.Brightness)
    const rotationRegister = useRegister(service, IndexedScreenReg.Rotation)
    const paletteRegister = useRegister(service, IndexedScreenReg.Palette)
    const bitsPerPixelRegister = useRegister(
        service,
        IndexedScreenReg.BitsPerPixel
    )

    const [width] = useRegisterUnpackedValue<[number]>(widthRegister, props)
    const [height] = useRegisterUnpackedValue<[number]>(heightRegister, props)
    const [brightness = 1] = useRegisterUnpackedValue<[number]>(
        brightnessRegister,
        props
    )
    const [rotation = 0] = useRegisterUnpackedValue<[number]>(
        rotationRegister,
        props
    )
    const [palette] = useRegisterUnpackedValue<
        [[number, number, number, number][]]
    >(paletteRegister, props)
    const [bitsPerPixel] = useRegisterUnpackedValue<[number]>(
        bitsPerPixelRegister,
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

            console.log("RENDER")
            // paint image
            context.fillStyle = "#222"
            context.fillRect(0, 0, canvas.width, canvas.height)
        }

        paint()
        return server.subscribe(CHANGE, paint)
    }, [server, visible, width, height, bitsPerPixel, palette])

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
    if (rotation) canvasStyle.transform = `rotate(${rotation}deg)`
    const parentStyle: CSSProperties = {
        width: "clamp(5rem, 90vw, 20rem)"
    }

    return (
        <div style={parentStyle}>
            <canvas id={id} ref={canvasRef} style={canvasStyle} />
        </div>
    )
}
