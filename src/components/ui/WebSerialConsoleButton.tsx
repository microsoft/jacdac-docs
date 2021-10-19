import React, { useContext, useEffect, useState } from "react"
import AppContext from "../AppContext"
import { isWebSerialSupported } from "../../../jacdac-ts/src/jdom/transport/webserial"
import IconButtonWithTooltip from "./IconButtonWithTooltip"
import TransportIcon from "../icons/TransportIcon"

export default function WebSerialConsoleButton() {
    const supported = isWebSerialSupported()
    const { setError } = useContext(AppContext)
    const [port, setPort] = useState<SerialPort>()
    const connected = !!port
    const { usbProductId } = port?.getInfo() || {}

    // clean up always
    useEffect(
        () => () => {
            port?.close().catch(e => {
                console.debug(e)
            })
        },
        [port]
    )

    // register disconnect
    useEffect(() => {
        if (!supported) return

        const handleDisconnect = (ev: Event) => {
            const other = ev.target as SerialPort
            if (port === other) {
                setPort(undefined)
                console.debug(`serial console: disconnected`)
            }
        }
        navigator.serial.addEventListener("disconnect", handleDisconnect, false)
        return () =>
            navigator.serial.removeEventListener("disconnect", handleDisconnect)
    })

    // request device
    const handleRequestPort = async () => {
        try {
            const port = await navigator.serial.requestPort({})
            await port.open({ baudRate: 115200 })
            let lastChunk = ""
            const appendStream = new WritableStream<string>({
                write(newChunk) {
                    const chunk = lastChunk + newChunk
                    const i = chunk.lastIndexOf("\n")
                    if (i > -1) {
                        lastChunk = chunk.slice(0, i)
                        console.log(chunk.slice(i + 1))
                    } else {
                        lastChunk = chunk
                    }
                },
            })
            port.readable
                .pipeThrough(new TextDecoderStream())
                .pipeTo(appendStream)

            setPort(port)
            console.debug(`serial console: connected`)
        } catch (e) {
            setError(e)
            setPort(undefined)
        }
    }

    if (!supported) return null
    return (
        <IconButtonWithTooltip
            onClick={handleRequestPort}
            color={connected ? "primary" : "default"}
            title={connected ? `connected to ${usbProductId}` : "disconnected"}
        >
            <TransportIcon type="serial" />
        </IconButtonWithTooltip>
    )
}
