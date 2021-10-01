import { Grid } from "@material-ui/core"
import React, { useContext, useEffect, useRef } from "react"
import JDDevice from "../../../jacdac-ts/src/jdom/device"
import useChange from "../../jacdac/useChange"
import HostedSimulatorsContext from "../HostedSimulatorsContext"

export default function DeviceHostedSimulator(props: { device: JDDevice }) {
    const { device } = props
    const { deviceId } = device
    const { hostedSimulators } = useContext(HostedSimulatorsContext)
    const containerRef = useRef<HTMLDivElement>()
    const iframe = useChange(hostedSimulators, _ =>
        _?.resolveSimulator(deviceId)
    )

    useEffect(() => {
        if (containerRef.current && iframe) {
            console.debug(`hostedsims: mounting ${deviceId}`)
            containerRef.current.append(iframe)
        }
        return () => hostedSimulators.unmountSimulator(deviceId)
    }, [iframe])

    console.debug("hosted sim", { iframe })

    // nothing to see here
    if (!iframe) return null

    return (
        <Grid item>
            <div ref={containerRef}></div>
        </Grid>
    )
}
