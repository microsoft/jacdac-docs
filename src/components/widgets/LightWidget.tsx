import React, { useEffect, useRef } from "react"
import {
    LedPixelReg,
    LedPixelVariant,
    RENDER,
} from "../../../jacdac-ts/src/jdom/constants"
import LedPixelServer from "../../../jacdac-ts/src/servers/ledpixelserver"
import SvgWidget from "../widgets/SvgWidget"
import useWidgetTheme from "../widgets/useWidgetTheme"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import LoadingProgress from "../ui/LoadingProgress"
import useRegister from "../hooks/useRegister"
import useFireKey from "../hooks/useFireKey"

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
    const [r$, g$, b$] = [r / 255, g / 255, b / 255]
    const cMin = Math.min(r$, g$, b$)
    const cMax = Math.max(r$, g$, b$)
    const cDelta = cMax - cMin
    let h: number
    let s: number
    let l: number
    const maxAndMin = cMax + cMin

    //lum
    l = (maxAndMin / 2) * 100

    if (cDelta === 0) s = h = 0
    else {
        //hue
        if (cMax === r$) h = 60 * (((g$ - b$) / cDelta) % 6)
        else if (cMax === g$) h = 60 * ((b$ - r$) / cDelta + 2)
        else if (cMax === b$) h = 60 * ((r$ - g$) / cDelta + 4)

        //sat
        if (l > 50) s = 100 * (cDelta / (2 - maxAndMin))
        else s = 100 * (cDelta / maxAndMin)
    }

    // at least 60% luminosity
    l = Math.max(l, 60)
    return [Math.floor(h), Math.floor(s), Math.floor(l)]
}

function setRgb(
    el: SVGElement,
    r: number,
    g: number,
    b: number,
    radius?: number
) {
    const hsl = rgbToHsl(r, g, b)
    const [h, s, l] = hsl
    const fill = `hsl(${h}, ${s}%, ${l}%)`
    el.setAttribute("fill", fill)
    if (radius !== undefined) {
        const nr = radius * (1 + (l - 60) / 200)
        el.setAttribute("r", "" + nr)
    }
}

function setRgbLeds(
    pixelsContainer: SVGElement,
    colors: Uint8Array,
    radius?: number
) {
    const pixels = pixelsContainer?.children
    if (!colors || !pixels) return

    const pn = Math.min(pixels.length, colors.length / 3)
    let ci = 0
    for (let i = 0; i < pn; ++i) {
        const pixel = pixels.item(i) as SVGElement
        setRgb(pixel, colors[ci], colors[ci + 1], colors[ci + 2], radius)
        ci += 3
    }
}

function LightStripWidget(props: {
    lightVariant: LedPixelVariant
    numPixels: number
    actualBrightness: number
    server: LedPixelServer
    widgetSize?: string
    onLedClick?: (index: number) => void
}) {
    const {
        lightVariant,
        numPixels,
        actualBrightness,
        server,
        widgetSize,
        onLedClick,
    } = props
    const { background, controlBackground } = useWidgetTheme()
    const pathRef = useRef<SVGPathElement>(undefined)
    const pixelsRef = useRef<SVGGElement>(undefined)
    const neoradius = 6
    const neocircleradius = neoradius + 1
    const sw = neoradius * 2.8
    const isJewel = lightVariant === LedPixelVariant.Jewel
    const isRing = lightVariant === LedPixelVariant.Ring
    const handleLedClick = (index: number) =>
        onLedClick ? () => onLedClick(index) : undefined

    // paint svg via dom
    const paint = () => {
        //console.log('paint')
        setRgbLeds(pixelsRef.current, server?.colors, neocircleradius)
    }

    // reposition pixels along the path
    useEffect(() => {
        const p = pathRef.current
        const pixels = pixelsRef.current?.children
        if (!p || !pixels) return

        const offset = isJewel ? 1 : 0
        const pn = pixels.length
        const length = p.getTotalLength()
        const extra = isRing || isJewel ? 0 : 1
        const step = length / (pn - offset)

        for (let i = offset; i < pn; ++i) {
            const pixel = pixels.item(i) as SVGCircleElement
            const pos = i - offset
            const point = p.getPointAtLength(step * (pos + extra / 2.0))
            pixel.setAttribute("cx", "" + point.x)
            pixel.setAttribute("cy", "" + point.y)
        }

        paint()
    }, [lightVariant, numPixels, pathRef.current, pixelsRef.current])

    // render when new colors are in
    useEffect(() => server?.subscribe(RENDER, paint), [server])

    let width: number
    let height: number

    let d = ""
    if (lightVariant === LedPixelVariant.Stick) {
        const dx = neoradius * 3
        d = `M 0 ${dx}`
        for (let i = 0; i < numPixels; ++i) {
            d += ` h ${dx} 0`
        }
        width = numPixels * dx
        height = 2 * dx
    } else if (lightVariant === LedPixelVariant.Strip) {
        const side = Math.ceil(Math.sqrt(numPixels) * 1.6108)

        let i = 0
        let dir = 1
        const dx = neoradius * 3
        const tr = neoradius * 6

        let line = 1
        d = `M ${2 * tr} ${dx}`
        while (i < numPixels) {
            d += ` h ${dx * dir}`
            if (i % side === side - 1) {
                // turn around
                d += ` c ${tr * dir} 0, ${tr * dir} ${tr}, 0 ${tr}`
                dir = -dir
                line++
            }
            i++
        }

        width = side * dx + 4 * tr
        height = line * tr + 2 * dx
    } else {
        const n = numPixels - (isJewel ? 1 : 0)
        const neoperimeter = n * (2.7 * neoradius)
        const margin = 2 * neoradius
        const ringradius = (1.5 * neoperimeter) / (2 * Math.PI)
        width = 2 * (margin + ringradius)
        height = width
        const wm = width - 2 * margin
        d = `M ${margin},${
            height >> 1
        } a ${ringradius},${ringradius} 0 1,0 ${wm},0 a ${ringradius},${ringradius} 0 1,0 -${wm}, 0`
    }

    // tune opacity to account for global opacity
    const alpha = 0.7
    const opacity = alpha + (1 - alpha) * ((actualBrightness || 0) / 0xff)

    return (
        <SvgWidget width={width} height={height} size={widgetSize}>
            <>
                <path
                    ref={pathRef}
                    d={d}
                    fill="transparent"
                    stroke={background}
                    strokeWidth={sw}
                />
                <g ref={pixelsRef} opacity={opacity}>
                    {Array(numPixels)
                        .fill(0)
                        .map((_, i) => {
                            const handleClick = handleLedClick(i)
                            const fireClick = useFireKey(handleClick)
                            return (
                                <circle
                                    className="clickeable"
                                    key={"pixel" + i}
                                    r={neocircleradius}
                                    cx={width >> 1}
                                    cy={height >> 1}
                                    stroke={controlBackground}
                                    strokeWidth={1}
                                    aria-label={`pixel ${i}`}
                                    onPointerDown={handleClick}
                                    onPointerEnter={handleClick}
                                    onKeyDown={fireClick}
                                >
                                    <title>pixel {i}</title>
                                </circle>
                            )
                        })}
                </g>
            </>
        </SvgWidget>
    )
}

function LightMatrixWidget(props: {
    lightVariant: LedPixelVariant
    actualBrightness: number
    server: LedPixelServer
    widgetSize?: string
    columns: number
    rows: number
    onLedClick?: (index: number) => void
}) {
    const { columns, rows, server, widgetSize, onLedClick } = props
    const { background, controlBackground } = useWidgetTheme()

    const widgetRef = useRef<SVGGElement>()
    // compute size
    const pw = 8
    const ph = 8
    const ps = 0.5
    const pr = 1
    const m = 2
    const w = columns * pw + (columns + 1) * m
    const h = rows * ph + (rows + 1) * m
    const handleLedClick = (index: number) =>
        onLedClick ? () => onLedClick(index) : undefined

    // paint svg via dom
    const paint = () => setRgbLeds(widgetRef.current, server?.colors)

    // add leds
    const render = () => {
        const ledEls: JSX.Element[] = []

        let y = m
        for (let row = 0; row < rows; row++) {
            let x = m
            for (let col = 0; col < columns; col++) {
                const index = row * columns + col
                const label = `pixel ${index} at ${row},${col}`
                const handleClick = handleLedClick(index)
                const fireClick = useFireKey(handleClick)

                ledEls.push(
                    <rect
                        className="clickeable"
                        key={`l${row}-${col}`}
                        x={x}
                        y={y}
                        width={pw}
                        height={ph}
                        rx={pr}
                        ry={pr}
                        fill={controlBackground}
                        stroke={"none"}
                        strokeWidth={ps}
                        aria-label={label}
                        onPointerDown={handleClick}
                        onPointerEnter={handleClick}
                        onKeyDown={fireClick}
                    >
                        <title>{label}</title>
                    </rect>
                )
                x += pw + m
            }
            y += ph + m
        }
        return ledEls
    }

    // render when DOM render
    useEffect(paint, [columns, rows, widgetRef.current])

    // render when new colors are in
    useEffect(() => server?.subscribe(RENDER, paint), [server])

    return (
        <SvgWidget width={w} height={h} size={widgetSize}>
            <rect
                x={0}
                y={0}
                width={w}
                height={h}
                rx={pr}
                ry={pr}
                fill={background}
            />
            <g ref={widgetRef}>{render()}</g>
        </SvgWidget>
    )
}

export default function LightWidget(props: {
    server: LedPixelServer
    variant?: "icon" | ""
    service: JDService
    widgetCount?: number
    visible?: boolean
    onLedClick?: (index: number) => void
}) {
    const { service, server, onLedClick } = props

    const numPixelsRegister = useRegister(service, LedPixelReg.NumPixels)
    const variantRegister = useRegister(service, LedPixelReg.Variant)
    const actualBrightnessRegister = useRegister(
        service,
        LedPixelReg.ActualBrightness
    )
    const numColumnsRegister = useRegister(service, LedPixelReg.NumColumns)

    const [numPixels] = useRegisterUnpackedValue<[number]>(
        numPixelsRegister,
        props
    )
    const [lightVariant] = useRegisterUnpackedValue<[LedPixelVariant]>(
        variantRegister,
        props
    )
    const [actualBrightness] = useRegisterUnpackedValue<[number]>(
        actualBrightnessRegister,
        props
    )
    const [numColumns] = useRegisterUnpackedValue<[number]>(
        numColumnsRegister,
        props
    )

    if (numPixels === undefined || actualBrightness === undefined)
        return <LoadingProgress /> // nothing to render

    if (!numPixels) return null

    if (lightVariant === LedPixelVariant.Matrix) {
        const columns = numColumns || Math.floor(Math.sqrt(numPixels))
        const rows = Math.floor(numPixels / columns)
        return (
            <LightMatrixWidget
                lightVariant={lightVariant}
                actualBrightness={actualBrightness}
                server={server}
                columns={columns}
                rows={rows}
                onLedClick={onLedClick}
            />
        )
    } else
        return (
            <LightStripWidget
                numPixels={numPixels}
                lightVariant={lightVariant}
                actualBrightness={actualBrightness}
                server={server}
                onLedClick={onLedClick}
            />
        )
}
