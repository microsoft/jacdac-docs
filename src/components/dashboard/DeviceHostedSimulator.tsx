import { Grid } from "@material-ui/core"
import React, { useContext, useEffect, useRef, useState } from "react"
import { CHANGE } from "../../../jacdac-ts/src/jdom/constants"
import JDDevice from "../../../jacdac-ts/src/jdom/device"
import HostedSimulatorsContext from "../HostedSimulatorsContext"

export default function DeviceHostedSimulator(props: { device: JDDevice }) {
    const { device } = props
    const { deviceId } = device
    const { hostedSimulators } = useContext(HostedSimulatorsContext)
    const containerRef = useRef<HTMLDivElement>()
    const [iframe, setIFrame] = useState<HTMLIFrameElement>()

    useEffect(
        () =>
            hostedSimulators?.subscribe(CHANGE, () => {
                const r = hostedSimulators.resolveSimulator(deviceId)
                if (r !== iframe) setIFrame(r)
            }),
        [hostedSimulators, deviceId]
    )
    useEffect(() => {
        const container = containerRef.current
        console.debug(`resolved iframe`, {
            deviceId,
            iframe,
            container,
        })
        if (container && iframe && iframe.parentElement !== container) {
            console.debug(`hostedsims: mounting ${deviceId}`)
            container.append(iframe)
        }
    }, [iframe])
    useEffect(() => () => hostedSimulators.unmountSimulator(deviceId), [])

    // nothing to see here
    if (!iframe) return null

    return (
        <Grid item>
            <div ref={containerRef}></div>
        </Grid>
    )
}
