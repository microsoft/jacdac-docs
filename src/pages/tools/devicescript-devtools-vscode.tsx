import React from "react"
import DeviceScriptDevToolsVisualStudioCode from "../../components/devicescript/DeviceScriptDevToolsVisualStudioCode"

export const frontmatter = {
    title: "DeviceScript Developer Tools for Visual Studio Code",
    description: "Edit, debug, deploy DeviceScript programs.",
}
import CoreHead from "../../components/shell/Head"
export const Head = props => <CoreHead {...props} {...frontmatter} />

export default function Page() {
    return <DeviceScriptDevToolsVisualStudioCode />
}
