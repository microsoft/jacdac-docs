import React from "react"
import SvgWidget from "../widgets/SvgWidget"
import useWidgetTheme from "../widgets/useWidgetTheme"
import { useId } from "react"
import "./fwd-edu.css"

export default function FwdSoilMoistureWidget(props: {
    value: number
    color: "primary" | "secondary"
    size?: string
}) {
    const { value, color, size } = props
    const { active, textProps } =
        useWidgetTheme(color)
    const clipId = useId()

    const hasValue = !isNaN(value)
    const tvalue = hasValue ? `${Math.round(value * 100)}%` : `--`

    const w = 3
    const h = 6
    const ch = 5.4 * value

    return (
      <SvgWidget width={w} height={h} size={size}>
        <g className={"fwdEduWidget"}>
          {hasValue && (
              <defs>
              <clipPath id={clipId}>
              <rect x={0} y={h - ch} width={w} height={ch} />
              </clipPath>
              </defs>
              )}
          <path
            fill="white"
            stroke="black"
            strokeWidth={0.02}
            d=" M 0.05 -.05 v 0.05 a .2 .2 0 00 .1 .2 h .35 v 4.4 l .9 1 l .9 -1 v -4.4 h .35 a .2 -.2 0 00 .1 -.2 v -0.05 Z "
          />
          <path
            stroke="black"
            strokeWidth={0.02}
            fill={active}
            d=" M 0.05 -.05 v 0.05 a .2 .2 0 00 .1 .2 h .35 v 4.4 l .9 1 l .9 -1 v -4.4 h .35 a .2 -.2 0 00 .1 -.2 v -0.05 Z "
            clipPath={`url(#${clipId})`}
          />
          <path
            stroke="#000000"
            strokeLinecap="butt"
            strokeWidth=".02"
            shapeRendering="crispEdges"
            d=" M .6 .5 h 1.6
            "
          />
          <text
            className="galanoAltA"
            fill="black"
            x="1.4"
            y=".5"
            fontSize=".25"
            letterSpacing="-.01em"
            textAnchor="middle"
            dominantBaseline="ideographic"
            shapeRendering="crispEdges"
            >
            max
          </text>
          <text
            x={w / 2}
            y={h * 0.5}
            fontSize="0.6"
            strokeWidth=".02"
            stroke={value > .5 ? "#000" : "#fff"}
            {...textProps}
            fill={value > .5? "#fff" : "#000"}
          >
            {tvalue}
          </text>
        </g>
      </SvgWidget>
    )
}
