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
        const canvas = canvasRef.current
        contextRef.current = undefined
        if (!isNaN(width)) canvas.width = width
        if (!isNaN(height)) canvas.height = height
    }, [width, height])

    const paint = () => {
        const context =
            contextRef.current ||
            (contextRef.current = canvasRef.current?.getContext("2d"))
        if (!context) return

        // paint image
    }

    useEffect(
        () => visible && bus?.subscribe(RENDER, paint),
        [bus, visible, service, server]
    )

    const style: CSSProperties = {
        minWidth: "10rem",
    }

    if (width === undefined || height === undefined)
        return (
            <DashboardRegisterValueFallback
                register={height === undefined ? heightRegister : widthRegister}
            />
        )

    return <canvas id={id} ref={canvasRef} style={style} />
}
