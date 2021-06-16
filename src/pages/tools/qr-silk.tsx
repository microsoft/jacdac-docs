import { Grid, Switch, TextField } from "@material-ui/core"
import React, { ChangeEvent, lazy, useState } from "react"
import { useId } from "react-use-id-hook"
import Suspense from "../../components/ui/Suspense"
const SilkQRCode = lazy(() => import("../../components/widgets/SilkQrCode"))

export default function DeviceQRCodeGenerator() {
    const [url, setUrl] = useState(`HTTP://AKA.MS/AAAAAB`)
    const [mirror, setMirror] = useState(true)
    const [size, setSize] = useState(3)
    const handleUrlChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setUrl(ev.target.value?.toUpperCase())
    }
    const handleSizeChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const s = Number(ev.target.value)
        if (!isNaN(s)) setSize(s)
    }
    const handleMirror = (ev: ChangeEvent<HTMLInputElement>) => {
        setMirror(!!ev.target.checked)
    }
    const mirrorid = useId()

    return (
        <>
            <h1>Silk QR Code generator</h1>
            <p>Enter a short URL to be encoded as a silk compatible QR code.</p>
            <Grid container spacing={1}>
                <Grid item xs>
                    <TextField
                        fullWidth={true}
                        label="url"
                        value={url}
                        onChange={handleUrlChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="size"
                        type="number"
                        value={size}
                        onChange={handleSizeChange}
                    />
                </Grid>
                <Grid item>
                    <Switch
                        checked={mirror}
                        onChange={handleMirror}
                        aria-labelby={mirrorid}
                    />
                    <label id={mirrorid}>mirror</label>
                </Grid>
            </Grid>

            <h2>Generated QR code</h2>
            <Suspense>
                <SilkQRCode url={url} mirror={mirror} />
            </Suspense>
        </>
    )
}
