import React from "react"
import SvgWidget from "../widgets/SvgWidget"
import useWidgetTheme from "../widgets/useWidgetTheme"
import { useId } from "react"
import "./fwd-edu.css"

export default function FwdSolarWidget(props: {
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

    const w = 64
    const widgetScale = 0.45

    return (
      <SvgWidget width={w} height={w} size={size}>
        <g className={"fwdEduWidget"}>
          <g transform={ `scale(${w / ( 1 + 117 + 2*15.5 - 2*9.5 + 2*3.25 + 2*(8-3.25))})` }>
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
            <text fontFamily="Galano Grotesque Bold" x={16} y={15} fontSize={10}>Solar</text>
          </g>
          <g transform={ `scale(${widgetScale}) translate(${w/(2*widgetScale)} ${w/(2*widgetScale)})` } x={w/(2*widgetScale)} y={w/(2*widgetScale)}>
            <path stroke="black" fill={active} fillOpacity={value} strokeWidth={1} x={0} y={0}
             d={`
              m -9.25 -11.5
              h 18.5
              a 15 15 0 0 1 0 20
              h -18.5
              a 15 15 0 0 1 0 -20
              z
              `}
             />
            <path stroke="black" strokeWidth={0.5} fill="none" x={0} y={0}
             d={`
              m -11.5 -9
              h 15
              a 1.25 1.25 0 0 1 0 2.5
              h -7.5
              a 1.25 1.25 0 0 0 0 2.5
              h 7.5
              a 1.25 1.25 0 0 1 0 2.5
              h -7.5
              a 1.25 1.25 0 0 0 0 2.5
              h 7.5
              a 1.25 1.25 0 0 1 0 2.5
              h -7.5
              a 1.25 1.25 0 0 0 0 2.5
              h 15
              `}
             />
          </g>
          <text
            className="galanoAltA"
            x={w / 2}
            y={w * 0.7}
            fontSize="8"
            lengthAdjust=".5em"
            {...textProps}
            fill={"#000"}
          >
            {tvalue}
          </text>
        </g>
      </SvgWidget>
    )
}
