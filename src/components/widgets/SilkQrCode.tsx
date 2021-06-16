import { Button, Grid } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import QRCode from "qrcode"
import React, { useState } from "react"
import { useEffect } from "react"
import useEffectAsync from "../useEffectAsync"

export interface QRCodeProps {
    url: string
    layer?: number
    size?: number
    mirror?: boolean
    margin?: number
}

function useQRCodeSCR(
    url: string,
    layer: number,
    size: number,
    mirror: boolean,
    margin: number
) {
    const fmt = (v: number) => v.toFixed(3)
    const [image, setImage] = useState<string>(undefined)
    const [scr, setScr] = useState<string>(undefined)
    const [error, setError] = useState<string>(undefined)
    const deps = [url, layer, size, mirror, margin]

    useEffect(() => setError(undefined), deps)

    useEffectAsync(async mounted => {
        try {
            const utfcode: string = await QRCode.toString(url, {
                margin: 0,
                scale: 1,
                errorCorrectionLevel: "medium",
                type: "utf8",
            })
            if (!mounted()) return
            setImage(`url('data:image/svg+xml;utf8,${utfcode}`)
            console.debug(`utfcode`, { utfcode })
            const lines = utfcode.split(/\n/).filter(s => !!s)
            let sz = lines[0].length
            const code = {}
            for (let y = 0; y < sz; y += 2) {
                const line = lines[y >> 1]
                for (let x = 0; x < sz; ++x) {
                    const ch = line.charCodeAt(x)
                    let upper = false,
                        lower = false
                    switch (ch) {
                        case 32:
                            break
                        case 9600:
                            upper = true
                            break
                        case 9604:
                            lower = true
                            break
                        case 9608:
                            upper = true
                            lower = true
                            break
                        default:
                            throw new Error("bad char: " + ch)
                    }
                    const xx = !mirror ? sz - x - 1 : x
                    code[`${xx + margin},${sz - y - 1 + margin}`] = upper
                    code[`${xx + margin},${sz - y - 2 + margin}`] = lower
                }
            }

            let scr = `# QRCode for ${url} (${sz}x${sz} at ${size}mm)\n`
            scr += `LAYER ${layer};\n`
            scr += `GRID mm;\n`

            sz += 2 * margin

            for (let y = 0; y < sz; y++) {
                let x = 0
                while (x < sz) {
                    while (code[`${x},${y}`]) x++
                    let xe = x
                    while (xe < sz && !code[`${xe},${y}`]) xe++
                    scr += `RECT (R ${fmt(x * size)} ${fmt(y * size)}) (R ${fmt(
                        xe * size
                    )} ${fmt((y + 1) * size)})\n`
                    x = xe
                }
            }

            const max_x = fmt(sz * size)
            const max_y = fmt(sz * size)

            scr += `GRID LAST;\n`
            scr += `DISPLAY NONE ?? ${layer};\n`
            scr += `GROUP (0 0) (${max_x} 0) (${max_x} ${max_y}) (0 ${max_y}) (> 0 0);\n`
            scr += `DISPLAY LAST;\n`

            console.log("scr", scr)
            setScr(scr)
        } catch (e) {
            if (mounted()) {
                setImage(undefined)
                setScr(undefined)
                setError(e + "")
            }
        }
    }, deps)

    return { scr, image, error }
}

export default function SilkQRCode(props: {
    url: string
    layer?: number
    size?: number
    mirror?: boolean
    margin?: number
}) {
    const { url, layer = 22, mirror = true, size = 0.3, margin = 1 } = props
    const { scr, svg, image, error } = useQRCodeSCR(
        url,
        layer,
        size,
        mirror,
        margin
    )

    if (!url) return null
    if (error) return <Alert severity="warning">{error}</Alert>

    const scrUri = `data:text/plain;charset=UTF-8,${encodeURIComponent(scr)}`
    const svgUri = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <img src={image} alt={`QR code of ${url}`} />
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={1}>
                    <Grid item xs>
                        <Button href={scrUri} download="qrcode.scr"></Button>
                    </Grid>
                    <Grid item xs>
                        <Button href={svgUri} download="qrcode.svg"></Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
