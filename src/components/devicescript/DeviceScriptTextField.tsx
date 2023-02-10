import React from "react"
import HighlightTextField from "../ui/HighlightTextField"
import useDeviceScript from "./DeviceScriptContext"
import useDeviceScriptVm from "./useDeviceScriptVm"

export default function DeviceScriptTextField(props: {
    minHeight?: string
    maxHeight?: string
}) {
    const { minHeight = "4rem", maxHeight = "12rem" } = props
    const { source, setSource, compiled } = useDeviceScript()

    useDeviceScriptVm()

    const annotations = compiled?.errors?.slice(0, 1)?.map(
        error =>
            ({
                file: error.filename,
                line: error.line,
                message: error.message,
            } as jdspec.Diagnostic)
    )

    return (
        <HighlightTextField
            code={source || ""}
            language="typescript"
            onChange={setSource}
            annotations={annotations}
            minHeight={minHeight}
            maxHeight={maxHeight}
        />
    )
}
