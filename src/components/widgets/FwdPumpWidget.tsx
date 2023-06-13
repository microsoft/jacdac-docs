import React, {useRef} from "react"
import SvgWidget from "./SvgWidget"
import useAnimationFrame from "../hooks/useAnimationFrame"
import "./fwd-edu.css"

export default function FwdPumpWidget(props: {
    size: string,
    active: boolean
}) {
    const {
        size,
        active,
    } = props
    const svgDiameter = 110
    const impellerRef = useRef<SVGGElement>()
    const impellerRotationRef = useRef(0)
    const impellerRotationRate = 190

    useAnimationFrame(
      active ? timeDelta => {
        const impeller = impellerRef.current
        impellerRotationRef.current = (impellerRotationRef.current + impellerRotationRate / timeDelta ) % 360
        impeller.setAttribute("transform", `rotate(${impellerRotationRef.current})`)
        return true
      } : undefined,
      [active]
    )

    return (
      <SvgWidget size={size} width={1} viewBox={`${svgDiameter / -2} ${svgDiameter / -2} ${svgDiameter} ${svgDiameter}`}>
        <defs>
          <g id="fwd-pump-strut">
            <rect x={-2} y={7} width={4} height={4} />
          </g>
        </defs>
        <g ref={impellerRef}>
          <circle r={6}  fill={"transparent"} stroke={"black"} strokeWidth={3} />
          <circle r={12} fill={"transparent"} stroke={"black"} strokeWidth={5} />
          <use href="#fwd-pump-strut" x={0} y={0} transform="rotate(10)" />
          <use href="#fwd-pump-strut" x={0} y={0} transform="rotate(-110)" />
          <use href="#fwd-pump-strut" x={0} y={0} transform="rotate(130)" />
          <circle r={10} fill={"transparent"} stroke={"white"} strokeWidth={0.5} />
  
          <path id="fwd-pump-prop" fill={"black"} stroke={"#a2a2a2"} strokeWidth={0.5} d="
            M 14,-1
            q 0,2 3,2
            t 12,-0.5
            t 14,3.6
            t -1,11
            t -16,9.5
            t -18,-4
            Q 4,16 3.5,13.5
            z
          "/>
          <use href="#fwd-pump-prop" x={"0"} y={"0"} transform="rotate(90)" />
          <use href="#fwd-pump-prop" x={"0"} y={"0"} transform="rotate(180)" />
          <use href="#fwd-pump-prop" x={"0"} y={"0"} transform="rotate(270)" />
          <circle r={14} fill={"transparent"} stroke={"white"} strokeWidth={1} />
 
        </g>
        <circle r={45} stroke={"#a2a2a2"} strokeOpacity={"60%"} strokeWidth={12} fill="transparent"/>
      </SvgWidget>
    )
}
