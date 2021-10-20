import React, { useContext } from "react"
import AppContext from "../AppContext"
import ImportButton from "../ImportButton"
import ConsoleContext from "./ConsoleContext"

export default function ConsoleImportSourceMapButton() {
    const { sourceMap, setSourceMap } = useContext(ConsoleContext)
    const { setError } = useContext(AppContext)

    const handleFilesUploaded = async (files: File[]) => {
        const file = files[0]
        const text = await file.text()
        try {
            setSourceMap(JSON.parse(text))
        } catch (e) {
            setError(e)
        }
    }

    return (
        <ImportButton
            text="source map"
            onFilesUploaded={handleFilesUploaded}
            filesLimit={1}
            icon={!sourceMap}
            acceptedFiles={[".srcmap"]}
        />
    )
}
