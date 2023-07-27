import React from "react"
import Console from "../console/Console"

export default function DeviceScriptConnect() {
    return (
        <Console
            hook={true}
            showConnect={true}
            showToolbar={true}
            showFiles={false}
            showLevel={true}
            showPopout={false}
            showSerial={false}
        />
    )
}
