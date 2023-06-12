import React, { useRef } from "react"
import SvgWidget from "../widgets/SvgWidget"
import useWidgetTheme from "../widgets/useWidgetTheme"
import PowerButton from "./PowerButton"
import useAnimationFrame from "../hooks/useAnimationFrame"
import { polarToCartesian } from "./svgutils"
import "./fwd-edu.css"

export default function FwdServoWidget(props: {
    angle: number
    offset: number
    color: "primary" | "secondary"
    enabled?: boolean
    toggleOff?: () => void
    widgetSize?: string
    rotationRate?: number
    visible?: boolean
}) {
    const {
        widgetSize,
        toggleOff,
        angle,
        offset,
        color,
        enabled,
        rotationRate,
        visible,
    } = props
    const { background, active, textProps } =
        useWidgetTheme(color)
    const continuous = rotationRate !== undefined
    const offsetRef = useRef(0)
    const armRef = useRef<SVGPathElement>()
    const textRef = useRef<SVGTextElement>()

    const cx = 78
    const cy = 55

    const a = enabled ? angle + (offset || 0) : 90
    const transform = `rotate(${-a + 90}, ${cx}, ${cy})`
    const h = 111.406
    const w = 158.50195
    const pr = 14
    const pri = 6
    const text = enabled ? `${Math.round(a)}°` : "off"

    useAnimationFrame(
        continuous && enabled && visible && rotationRate !== undefined
            ? time => {
                  const arm = armRef.current
                  if (!arm) return
                  const text = textRef.current

                  let offset = offsetRef.current
                  offset = (offset + (time / 1000) * rotationRate) % 360
                  offsetRef.current = offset
                  const transform = `rotate(${offset}, ${cx}, ${cy})`
                  arm.setAttribute("transform", transform)
                  text.childNodes[0].nodeValue = `${Math.round(
                      rotationRate / 360 * 60
                  )} rpm`

                  return true
              }
            : undefined,
        [continuous, visible, enabled, rotationRate]
    )

    function generateGearPath (cx:number, cy: number, id: number, od: number, teeth: number) {
      function* pathDiameter() { while (true) { yield id/2; yield od/2 } }
      const drawDiameter = pathDiameter()
      const makePoint = (dia: number, offset: number) => polarToCartesian(cx, cy, dia, offset)
      const segmentOffset = 180/(2 * teeth)
      let dia = 0
      const updateDia = () => { dia = drawDiameter.next().value as number; return true }
      updateDia()
      const drawPoint = (dia:number, offset:number) => { const {x,y} = makePoint(dia, offset); return `${x},${y}` }
      let gearPath = `M ${drawPoint(dia, 0)}`
      gearPath += `C ${drawPoint(dia, segmentOffset)} ${updateDia() && drawPoint(dia, segmentOffset)} ${drawPoint(dia, 2*segmentOffset)}`
      for ( let i=3; i<4*teeth; i+=2 ) {
        updateDia()
        gearPath += `S ${drawPoint(dia, i*segmentOffset)} ${drawPoint(dia, (i+1)*segmentOffset)}`
      }
      return gearPath
    }
    const fwdGearPaths = { small: generateGearPath(cx, cy, 18, 27, 10), large: generateGearPath(cx, cy, 66, 80, 30) }

    return (
        <SvgWidget
            title={`servo at angle ${angle}`}
            width={w}
            height={h}
            size={widgetSize}
        >
            <g className={"fwdEduWidget"}>
              <rect
                  fill={continuous ? "#333" : "#666"}
                  x={0}
                  y={10.687}
                  width={158.62}
                  height={89.75}
                  rx={4}
                  ry={4}
              />
              {!continuous && <path transform={transform} fill={"white"} d={fwdGearPaths.large}/>}
              {!continuous && <g transform="translate(-51 0)"><path transform={`rotate(${3*a}, ${cx}, ${cy})`} fill={"white"} d={fwdGearPaths.small}/></g>}
              <path
                  fill={continuous ? "#555" : "#999"}
                  fillOpacity={continuous ? "100%" : "70%"}
                  d="M123.8 55.641 c0-24.994-20.26-45.256-45.254-45.256-17.882.016-34.077 9.446-41.328 25.79-2.655.024-4.192.076-6.35.07-11.158 0-20.204 9.046-20.204 20.204 0 11.158 9.046 20.203 20.203 20.203 2.389-.005 4.354-.332 6.997-.256 7.56 15.59 23.356 24.485 40.682 24.5 24.992 0 45.254-20.264 45.254-45.256z"
              />
              <path
                  ref={armRef}
                  fill={enabled ? "#deddd8" : background}
                  stroke={active}
                  transform={transform}
                  d="M93.782 55.623c-.032-3.809-.19-6.403-.352-7.023h-.002c-.93-3.558-6.621-6.73-14.793-6.73-8.17 0-14.649 3.016-14.795 6.73-.25 6.419-4.049 62.795 13.561 62.806 14.308.008 16.52-39.277 16.38-55.783zm-8.05.08a7.178 7.178 0 010 .012 7.178 7.178 0 01-7.179 7.176 7.178 7.178 0 01-7.177-7.176 7.178 7.178 0 017.177-7.178 7.178 7.178 0 017.178 7.166z"
              />
              <text
                  ref={textRef}
                  {...textProps}
                  x={w / 2}
                  y={30}
                  textAnchor="middle"
                  fontSize="1em"
                  fontWeight="bold"
                  lengthAdjust="0.3em"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="0.05em"
                  shapeRendering="crispEdges"
              >
                  {text}
              </text>
              {toggleOff && (
                  <PowerButton
                      r={pr}
                      ri={pri}
                      cx={w - pr - 4}
                      cy={pr + 14}
                      color={color}
                      strokeWidth={1.8}
                      off={!enabled}
                      onClick={toggleOff}
                  />
              )}
            </g>
        </SvgWidget>
    )
}
