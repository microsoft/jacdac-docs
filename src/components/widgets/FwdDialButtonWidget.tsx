import React from "react"
import SvgWidget from "./SvgWidget"
import useWidgetTheme from "./useWidgetTheme"
import useSvgButtonProps from "../hooks/useSvgButtonProps"

export default function FwdDialButtonWidget(props: {
    checked?: boolean
    label?: string
    color?: "primary" | "secondary"
    size?: string
    onDown?: () => void
    onUp?: () => void
}) {
    const { checked, label, color, size, onDown, onUp } = props
    const { background, controlBackground, active } = useWidgetTheme(color)

    const buttonProps = useSvgButtonProps<SVGRectElement>(label, onDown, onUp)
    const w = 64

    return (
        <SvgWidget width={w} size={size}>
            <rect
                x={w/2 - w*0.06}
                y={w*0.70}
                height={w*0.14}
                width={w*0.12}
                fill={"#a2a2a2"}
                stroke={"#5b5b5b"}
                strokeWidth={0.5}
            />
            <rect
                x={w/2 - w*0.14}
                y={w*0.82}
                height={w*0.08}
                width={w*0.06}
                fill={"#0f5a96"}
            />
            <rect
                x={w/2 + w*0.08}
                y={w*0.82}
                height={w*0.08}
                width={w*0.06}
                fill={"#0f5a96"}
            />
            <rect
                x={w/2 - w*0.14}
                y={w*0.79}
                height={w*0.03}
                width={w*0.28}
                fill={"#1ad672"}
            />
            <rect
                x={w/2 - w*0.14}
                y={w*0.77}
                height={w*0.02}
                width={w*0.28}
                fill={"#a2a2a2"}
            />
            <rect
                x={w/2 - w*0.08}
                y={w*0.77}
                height={w*0.08}
                width={w*0.16}
                fill={"#a2a2a2"}
            />
            <rect
                x={1}
                y={w - w/10}
                rx={1}
                width={w - 2}
                height={w/12}
                fill={"white"}
                stroke={"black"}
                strokeWidth={0.4}
            />
            <g  transform={`translate(0 ${checked ? w*0.05 : 0 })`}>
              <rect
                  x={w/2 - w*0.15}
                  y={w*0.25}
                  height={w*0.45}
                  width={w*0.3}
                  fill={"#deddd8"}
                  stroke={"#5b5b5b"}
                  strokeWidth={0.5}
              />
              <rect x={w/2 - w*0.108} y={w*0.30} height={w*.28} width={w*0.06} fill={"#deddd8"} stroke={"#5b5b5b"} strokeWidth={0.5} />
              <rect x={w/2 + w*0.045} y={w*0.30} height={w*.28} width={w*0.06} fill={"#deddd8"} stroke={"#5b5b5b"} strokeWidth={0.5} />
              <rect x={w/2 + w*0.110} y={w*0.30} height={w*.28} width={w*0.05} fill={"#deddd8"} stroke={"#5b5b5b"} strokeWidth={0.5} />
              <rect x={w/2 - w*0.160} y={w*0.30} height={w*.28} width={w*0.05} fill={"#deddd8"} stroke={"#5b5b5b"} strokeWidth={0.5} />
              <rect x={w/2 - w*0.040} y={w*0.30} height={w*.28}  width={w*0.08} fill={"#deddd8"} stroke={"#5b5b5b"} strokeWidth={0.5} />
            </g>
            <rect x={w*0.15} width={w*0.70} y={0} height={w*0.9} fillOpacity={0} fill={background} {...buttonProps} strokeOpacity={0}/>
        </SvgWidget>
    )
}
