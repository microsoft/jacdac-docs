import React from "react"
import DeviceScriptConnect from "../../components/devicescript/DeviceScriptConnect"

export const frontmatter = {
    title: "DeviceScript Connection Helper",
    description: "Connect to hardware devices for DeviceScript.",
}
import CoreHead from "../../components/shell/Head"
export const Head = props => <CoreHead {...props} {...frontmatter} />

export default function Page() {
    return <DeviceScriptConnect />
}
