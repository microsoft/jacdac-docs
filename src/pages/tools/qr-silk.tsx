import { TextField } from "@material-ui/core"
import React, { ChangeEvent, useState } from "react"
import SilkQRCode from "../../components/widgets/SilkQrCode"

export default function DeviceQRCodeGenerator() {
    const [url, setUrl] = useState(`HTTP://AKA.MS/AAAAAB`)
    const handleUrlChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setUrl(ev.target.value?.toUpperCase())
    }

    return (
        <>
            <h1>Silk QR Code generator</h1>
            <p>Enter a short URL to be encoded as a silk compatible QR code.</p>
            <TextField fullWidth={true} label="url" value={url} onChange={handleUrlChange} />

            <h2>Generated QR code</h2>
            <SilkQRCode url={url} />
        </>
    )
}
