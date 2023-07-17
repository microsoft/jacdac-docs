import React, { CSSProperties, useEffect, useId, useRef } from "react"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import useServiceServer from "../hooks/useServiceServer"
import { IndexedScreenServer } from "../../../jacdac-ts/src/servers/indexedscreenserver"
import { IndexedScreenReg, RENDER } from "../../../jacdac-ts/src/jdom/constants"
import useRegister from "../hooks/useRegister"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import DashboardRegisterValueFallback from "./DashboardRegisterValueFallback"
import useBus from "../../jacdac/useBus"

export default function DashboardLEDStrip(props: DashboardServiceProps) {
    const { service, visible } = props
    const id = useId()
    const bus = useBus()
    const server = useServiceServer<IndexedScreenServer>(
        service,
        () => new IndexedScreenServer()
    )

    const widthRegister = useRegister(service, IndexedScreenReg.Width)
    const heightRegister = useRegister(service, IndexedScreenReg.Height)

    const [width] = useRegisterUnpackedValue<[number]>(widthRegister, props)
    const [height] = useRegisterUnpackedValue<[number]>(heightRegister, props)

    const canvasRef = useRef<HTMLCanvasElement>()
    const contextRef = useRef<CanvasRenderingContext2D>()

    useEffect(() => {
        contextRef.current = undefined
        const canvas = canvasRef.current
        if (canvas) {
            if (!isNaN(width)) canvas.width = width
            if (!isNaN(height)) canvas.height = height
        }
    }, [width, height])

    const paint = () => {
        const canvas = canvasRef.current
        if (!canvas) return

        const context =
            contextRef.current || (contextRef.current = canvas.getContext("2d"))
        if (!context) return

        console.log("RENDER")
        // paint image
        context.fillStyle = "#ccc"
        context.fillRect(0, 0, canvas.width, canvas.height)
    }

    useEffect(
        () => visible && bus?.subscribe(RENDER, paint),
        [bus, visible, service, server]
    )

    const style: CSSProperties = {
        minWidth: "10rem",
        width: "100%"
    }

    if (width === undefined || height === undefined)
        return (
            <DashboardRegisterValueFallback
                register={height === undefined ? heightRegister : widthRegister}
            />
        )

    return <canvas id={id} ref={canvasRef} style={style} />
}
