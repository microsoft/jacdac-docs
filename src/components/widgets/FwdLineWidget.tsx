import React from "react"
import SvgWidget from "./SvgWidget"
import useWidgetTheme from "./useWidgetTheme"

export default function FwdLineWidget(props: {
  widgetSize: string,
  color: "primary" | "secondary",
  value: number,
  buttonProps: React.SVGProps<SVGRectElement>,
}) {
  const {
    widgetSize,
    color,
    value,
    buttonProps
  } = props

  const { background, controlBackground } = useWidgetTheme(color)

  const w = 48
  const h = 64
  const m = 4
  const sw = 20
  const dx = w >> 1
  const x = (w - sw - dx) / 2
  const sh = 32
  const dark = "#000"
  const bright = "#ddd"

  const isLit = value > 0.5

  return (
    <SvgWidget width={w} height={h} size={widgetSize}>
      <g transform={`translate(${x}, ${h - m - sh})`}>
        <rect
          x={0}
          y={5.5*sh/8}
          width={2*sw}
          height={sh/5}
          fill={"#a4a4a4"}
        />
        <rect
          x={0}
          y={sh/8}
          width={2*sw}
          height={sh/5}
          fill={"#a4a4a4"}
        />
        <rect
          x={sw/2}
          y={0}
          rx={1}
          width={sw}
          height={sh}
          fill={background}
          {...buttonProps}
        />
        <rect
          x={sw*0.6}
          y={sh*0.10}
          height={sh/3}
          width={sw*0.8}
          fill={isLit ? bright : dark}
          stroke={controlBackground}
          strokeWidth={1}
          style={{ userSelect: "none", pointerEvents: "none" }}
        />
        <rect
          x={sw*0.6}
          y={sh*0.60}
          height={sh/3}
          width={sw*0.8}
          fill={isLit ? bright : dark}
          stroke={controlBackground}
          strokeWidth={1}
          style={{ userSelect: "none", pointerEvents: "none" }}
        />
        </g>
    </SvgWidget>
  )
}
