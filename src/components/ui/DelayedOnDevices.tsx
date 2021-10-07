import React, { ReactNode, useContext, useEffect, useState } from "react"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"
import useChange from "../../jacdac/useChange"

export default function DelayedOnDevices(props: {
    timeout: number
    children: ReactNode
}) {
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const { timeout, children } = props
    const [show, setShow] = useState(false)
    const devices = useChange(bus, _ =>
        _?.devices({ physical: true, announced: true })
    )
    const hasDevices = !!devices?.length
    useEffect(() => {
        if (hasDevices) {
            const id = setTimeout(() => setShow(true), timeout)
            return () => clearTimeout(id)
        }
    }, [timeout, hasDevices])
    return show ? <>{children}</> : null
}
