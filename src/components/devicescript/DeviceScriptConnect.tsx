import React from "react"
import ConnectButtons from "../buttons/ConnectButtons"

export default function DeviceScriptConnect() {
    return (
        <>
            DeviceScript&nbsp;
            <ConnectButtons full="always" transparent={true} />
            <p>
                Keep this page opened while connected to the physical device.
            </p>
        </>
    )
}
