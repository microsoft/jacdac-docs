import React from "react"
import Flags from "../../../src/jdom/flags";
import { isWebUSBEnabled, isWebUSBSupported } from "../../../src/jdom/usb"

export default function WebUSBSupported(props: { children: any }) {
    const { children } = props;
    return <>
        {isWebUSBEnabled() && isWebUSBSupported() && children}
    </>
}