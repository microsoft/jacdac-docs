import React, { useContext, useEffect, useRef, useState } from "react"
import AppContext from "../AppContext"
import { isWebSerialSupported } from "../../../jacdac-ts/src/jdom/transport/webserial"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import TransportIcon from "../icons/TransportIcon"
import ImportButton from "../ImportButton"

function resolveAddr(sourceMap: Record<string, number[]>, addr: number) {
    const offsets = [-2, -4, 0]
    let hit = ""
    let bestOffset: number = undefined
    if (addr == 2) return "<bottom>"
    for (const fn of Object.keys(sourceMap)) {
        const vals = sourceMap[fn]
        for (let i = 0; i < vals.length; i += 3) {
            const lineNo = vals[i]
            const startA = vals[i + 1]
            const endA = startA + vals[i + 2]
            if (addr + 10 >= startA && addr - 10 <= endA) {
                for (const off of offsets) {
                    if (startA <= addr + off && addr + off <= endA) {
                        if (
                            !hit ||
                            offsets.indexOf(off) < offsets.indexOf(bestOffset)
                        ) {
                            hit = fn + "(" + lineNo + ")"
                            bestOffset = off
                        }
                    }
                }
            }
        }
    }
    return hit
}

function expandStackTrace(
    sourceMap: Record<string, number[]>,
    stackTrace: string
) {
    return stackTrace.replace(/(^| )PC:0x([A-F0-9]+)/g, (full, space, num) => {
        const n = resolveAddr(sourceMap, parseInt(num, 16)) || "???"
        return " " + n + " (0x" + num + ")"
    })
}

export default function WebSerialConsoleButton() {
    const supported = isWebSerialSupported()
    const { setError } = useContext(AppContext)
    const [port, setPort] = useState<SerialPort>()
    const sourceMap = useRef<Record<string, number[]>>()
    const connected = !!port

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
                    const chunk =
                        // eslint-disable-next-line no-control-regex
                        (lastChunk + newChunk).replace(/\x1b\[\d+(;\d+)?m/g, "")
                    const lines = chunk.split("\n")
                    lastChunk = lines.pop()
                    lines
                        .filter(l => !!l)
                        .forEach(line =>
                            console.log(
                                sourceMap.current
                                    ? expandStackTrace(sourceMap.current, line)
                                    : line
                            )
                        )
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

    const handleFilesUploaded = async (files: File[]) => {
        const file = files[0]
        const text = await file.text()
        sourceMap.current = JSON.parse(text)
    }

    if (!supported) return null
    return (
        <>
            <IconButtonWithTooltip
                onClick={handleRequestPort}
                color={connected ? "primary" : "default"}
                title={connected ? `connected to serial` : "disconnected"}
            >
                <TransportIcon type="serial" />
            </IconButtonWithTooltip>
            <ImportButton
                text="source map"
                onFilesUploaded={handleFilesUploaded}
                filesLimit={1}
                acceptedFiles={["application/json"]}
            />
        </>
    )
}
