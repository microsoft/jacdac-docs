import React, { useCallback, useEffect, useRef } from "react"
import {
    LedStripVariant,
    LedVariant,
} from "../../../jacdac-ts/src/jdom/constants"
import SvgWidget from "../widgets/SvgWidget"
import useWidgetTheme from "../widgets/useWidgetTheme"
import useFireKey from "../hooks/useFireKey"
import "./fwd-edu.css"

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

    // at least 30% luminosity
    l = Math.max(l, 40)
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

export default function FwdLEDWidget (props: {
    colors: () => Uint8Array
    subscribeColors?: (handler: () => void) => () => void
    lightVariant: LedStripVariant | LedVariant
    numPixels: number
    actualBrightness: number
    widgetSize?: string
    onLedClick?: (index: number) => void
}) {
    const {
        lightVariant,
        numPixels,
        actualBrightness,
        subscribeColors,
        widgetSize,
        onLedClick,
        colors,
    } = props
    const { background, controlBackground } = useWidgetTheme()
    const pathRef = useRef<SVGPathElement>(undefined)
    const pixelsRef = useRef<SVGGElement>(undefined)
    const neoradius = 6
    const neocircleradius = neoradius + 1
    const isJewel = lightVariant === LedStripVariant.Jewel
    const isRing = lightVariant === LedStripVariant.Ring

    // paint svg via dom
    const paint = useCallback(() => {
        setRgbLeds(pixelsRef.current, colors(), neocircleradius)
    }, [colors, neocircleradius])

    // reposition pixels along the path
    useEffect(() => {
        const p = pathRef.current
        const pixelGroup = Object.values(pixelsRef.current?.children).map(g => g.children)
        const pixels = pixelGroup.map(g => g[1])
        const pixelBoxes= pixelGroup.map(g => g[0])
        if (!p || !pixels) return

        const offset = isJewel ? 1 : 0
        const pn = pixels.length
        const length = p.getTotalLength()
        const extra = isRing || isJewel ? 0 : 1
        const step = length / (pn - offset)
        const MAGIC_NUMBER = length*(1/16 + 0.25)

        for (let i = offset; i < pn; ++i) {
            const pixel = pixels[i] as SVGCircleElement
            const box = pixelBoxes[i] as SVGRectElement
            const boxSize = 1.3 * pixel.r.baseVal.value
            const rotation = 360 * (i/pn + 9/16)
            const pos = i - offset
            const point = p.getPointAtLength((MAGIC_NUMBER + step * (pos + extra / 2.0)) % length)
            pixel.setAttribute("cx", `${point.x}`)
            pixel.setAttribute("cy", `${point.y}`)
            box.setAttribute("x", `${(point.x - boxSize)}`)
            box.setAttribute("y", `${(point.y - boxSize)}`)
            box.setAttribute("width", `${(2 * boxSize)}`)
            box.setAttribute("height", `${(2 * boxSize)}`)
            box.setAttribute("transform", `rotate(${rotation}, ${point.x}, ${point.y})`)
        }

        paint()
    }, [lightVariant, numPixels, pathRef.current, pixelsRef.current])

    // render when new colors are in
    useEffect(() => subscribeColors?.(paint), [paint, subscribeColors])

    let d = ""
    const n = numPixels - (isJewel ? 1 : 0)
    const neoperimeter = n * (2.7 * neoradius)
    const margin = 1.8 * neoradius
    const ringradius = (2.2 * neoperimeter) / (2 * Math.PI)
    const width = 2 * (margin + ringradius)
    const height = width
    const hm = height - 2 * margin
    d = `M ${width >> 1},${
        margin
    } a ${ringradius},${ringradius} 0 0,1 0,${hm} a ${ringradius},${ringradius} 0 0,1 0, -${hm}`

    // tune opacity to account for global opacity
    const alpha = 0.7
    const opacity = alpha + (1 - alpha) * ((actualBrightness || 0) / 0xff)

    return (
        <SvgWidget width={width} height={height} size={widgetSize} >
            <g className={"fwdEduWidget"}>
              <g transform={ `scale(${width / ( 1 + 117 + 2*15.5 - 2*9.5 + 2*3.25 + 2*(8-3.25))})` }>
                <defs>
                  <g id="jacdac-connector" >
                    <path fill="#AAA" d="M22.369 14.045H4.037a2.618 2.618 0 0 1-2.656.173A2.493 2.493 0 0 1 0 12c0-.933.533-1.788 1.381-2.218a2.618 2.618 0 0 1 2.656.173h18.332c.9 0 1.631.712 1.631 1.59v.91c0 .878-.73 1.59-1.631 1.59zM4.124 12c0-.404-.164-.791-.457-1.077a1.581 1.581 0 0 0-1.104-.446c-.414 0-.811.16-1.104.446A1.504 1.504 0 0 0 1.002 12c0 .404.164.791.457 1.077.293.285.69.446 1.104.446.414 0 .811-.16 1.104-.446.293-.286.457-.673.457-1.077zM4.187 18c0-.404-.167-.791-.464-1.077a1.618 1.618 0 0 0-1.121-.446c-.42 0-.824.16-1.12.446A1.493 1.493 0 0 0 1.016 18c0 .404.167.791.464 1.077.297.285.7.446 1.121.446.42 0 .823-.16 1.12-.446.298-.286.465-.673.465-1.077zm16.157 2.045H4.098a2.692 2.692 0 0 1-2.695.173C.54 19.788 0 18.933 0 18s.54-1.788 1.403-2.218a2.692 2.692 0 0 1 2.695.173h16.246c.915 0 1.656.712 1.656 1.59v.91c0 .878-.741 1.59-1.656 1.59zM24 6.455c0 .878-.73 1.59-1.631 1.59H4.037a2.618 2.618 0 0 1-2.656.173A2.493 2.493 0 0 1 0 6c0-.933.533-1.788 1.381-2.218a2.618 2.618 0 0 1 2.65.168l.006.005h18.332c.9 0 1.631.712 1.631 1.59ZM4.124 6c0-.404-.164-.791-.457-1.077a1.581 1.581 0 0 0-1.104-.446c-.414 0-.811.16-1.104.446A1.504 1.504 0 0 0 1.002 6c0 .404.164.791.457 1.077.293.285.69.446 1.104.446.414 0 .811-.16 1.104-.446.293-.286.457-.673.457-1.077z"/>
                  </g>
                </defs>
                <g>
                  <path
                    id="outline"
                    fill="white"
                    stroke="black"
                    strokeWidth="1"
                    d="
                      M 0.5, 0.5
                      m 5.25, 8
                      a 8,8 0 0 1 8,-8
                      h 117
                      a 8,8 0 0 1 8,8
                      v 32
                      a 4.25,4.25 0 0 1 -4.25,4.25
                      h -9.5
                      a 4.25,4.25 0 0 0 -4.25,4.25
                      v 3
                      a 4.25,4.25 0 0 0 4.25,4.25
                      h 15.5
                      a 3.5,3.5 0 0 1 3.5,3.5
                      v 19
                      a 3.5,3.5 0 0 1 -3.5,3.5
                      h -15.5
                      a 4.25,4.25 0 0 0 -4.25,4.25
                      v 3
                      a 4.25,4.25 0 0 0 4.25,4.25
                      h 9.5
                      a 4.25,4.25 0 0 1 4.25,4.25
                      v 32
                      a 8,8 0 0 1 -8,8
                      h -117
                      a 8,8 0 0 1 -8,-8
                      v -32
                      a 4.25,4.25 0 0 1 4.25,-4.25
                      h 9.5
                      a 4.25,4.25 0 0 0 4.25,-4.25
                      v -3
                      a 4.25,4.25 0 0 0 -4.25,-4.25
                      h -15.5
                      a 3.5,3.5 0 0 1 -3.5,-3.5
                      v -19
                      a 3.5,3.5 0 0 1 3.5,-3.5
                      h 15.5
                      a 4.25,4.25 0 0 0 4.25,-4.25
                      v -3
                      a 4.25,4.25 0 0 0 -4.25,-4.25
                      h -9.5
                      a 4.25,4.25 0 0 1 -4.25,-4.25
                      v -16.5
                      a 4.25,4.25 0 0 0 0,-8.5
                      z
                    "
                  >
                  </path>
                </g>
                  <g transform="translate(125,12)">
                    <circle fill="black" r="1.75" />
                    <path stroke="black" strokeWidth="1.5" fill="none" d="
                      m -2.5 -3
                      a 4 4 0 0 0 0 6
                      M -4 -4.5
                      a 6.25 6.25 0 0 0 0 9
                      M 2.5 -3
                      a 4 4 0 0 1 0 6
                      M 4 -4.5
                      a 6.25 6.25 0 0 1 0 9
                    " />
                  </g>
                  <use href="#jacdac-connector" transform="translate(120 60) scale(0.8)" />
                  <use href="#jacdac-connector" transform="translate(24 60) translate(0 11) rotate(180) scale(0.8) translate(0 -11) " />
                  <text x={16} y={15} fontSize={10}>LED</text>
                </g>
                <path
                    ref={pathRef}
                    d={d}
                    fill="transparent"
                />
                <g ref={pixelsRef} opacity={opacity} transform={`translate(${width / 2} ${height / 2}) scale(0.65) translate(${-width / 2} ${-height / 2})`}>
                    {Array(numPixels)
                        .fill(0)
                        .map((_, i) => {
                            const handleClick = onLedClick
                                ? () => onLedClick(i)
                                : undefined
                            const fireClick = useFireKey(handleClick)
                            return (
                                <g 
                                      className={`${
                                          fireClick ? "clickeable" : ""
                                      } pixel`}
                                      key={"pixel" + i}
                                      onPointerDown={handleClick}
                                      onKeyDown={fireClick}
                                      >
                                  <rect
                                      x={(width >> 1) - (neocircleradius >> 1)}
                                      y={(height >> 1) - (neocircleradius >> 1)}
                                      rx={2}
                                      fill="#fffde0"
                                      stroke="#5b5b5b"
                                      strokeWidth={1}
                                      />
                                  <circle
                                      r={neocircleradius}
                                      cx={width >> 1}
                                      cy={height >> 1}
                                      stroke={controlBackground}
                                      strokeWidth={1 + (i == 0 ? 0.5 : 0)}
                                      aria-label={`pixel ${i}`}
                                  >
                                      <title>pixel {i}</title>
                                  </circle>
                                </g>
                            )
                        })}
                </g>
            </g>
        </SvgWidget>
    )
}

export interface LedServerRegs {
    pixels?: number
    numPixels: number
    variant: number
    actualBrightness: number
    numColumns: number
}

