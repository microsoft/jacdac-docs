import React, { useState, useEffect, ReactNode } from "react"
import JacdacContext from "./Context"
import { JDBus } from "../../jacdac-ts/src/jdom/bus"
import { createUSBTransport, isWebUSBSupported } from "../../jacdac-ts/src/jdom/usb"
import IFrameBridgeClient from "../../jacdac-ts/src/jdom/iframebridgeclient"
import Flags from "../../jacdac-ts/src/jdom/flags"
import GamepadHostManager from "../../jacdac-ts/src/hosts/gamepadhostmanager"

function sniffQueryArguments() {
    if (typeof window === "undefined" || typeof URLSearchParams === "undefined")
        return {
            diagnostic: false,
            webUSB: isWebUSBSupported(),
        }

    const params = new URLSearchParams(window.location.search)
    return {
        diagnostics: params.get(`dbg`) === "1",
        webUSB: isWebUSBSupported() && params.get(`webusb`) !== "0",
        parentOrigin: params.get("parentOrigin"),
        frameId: window.location.hash?.slice(1),
    }
}

const args = sniffQueryArguments()
Flags.diagnostics = args.diagnostics
Flags.webUSB = args.webUSB

const bus = new JDBus([Flags.webUSB && createUSBTransport()], {
    parentOrigin: args.parentOrigin,
})
bus.setBackgroundFirmwareScans(true)
GamepadHostManager.start(bus)

// tslint:disable-next-line: no-unused-expression
// always start bridge
if (typeof window !== "undefined") new IFrameBridgeClient(bus, args.frameId) // start bridge

export default function JacdacProvider(props: { children: ReactNode }) {
    const { children } = props
    const [firstConnect, setFirstConnect] = useState(false)

    // connect in background on first load
    useEffect(() => {
        if (!firstConnect) {
            setFirstConnect(true)
            bus.transports.forEach(transport => transport.connect(true))
        }
        return () => {}
    }, [])
    return (
        <JacdacContext.Provider value={{ bus }}>
            {children}
        </JacdacContext.Provider>
    )
}
