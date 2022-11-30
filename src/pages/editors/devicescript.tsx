import React from "react"
import JacscriptTextEditor from "../../components/devicescript/JacscriptTextEditor"

export const frontmatter = {
    title: "DeviceScript Editor",
    description: "Edit DeviceScript programs.",
}
import CoreHead from "../../components/shell/Head"
export const Head = props => <CoreHead {...props} {...frontmatter} />

export default function Page() {
    return <JacscriptTextEditor />
}
