import React, { useContext } from "react"
import useSnackbar from "../hooks/useSnackbar"
import ImportButton from "../ImportButton"
import ConsoleContext from "./ConsoleContext"

export default function ConsoleImportSourceMapButton() {
    const { setSourceMap } = useContext(ConsoleContext)
    const { enqueueSnackbar, setError } = useSnackbar()

    const handleFilesUploaded = async (files: File[]) => {
        const file = files[0]
        const text = await file.text()
        try {
            setSourceMap(JSON.parse(text))
            enqueueSnackbar("MakeCode source map loaded", "success")
        } catch (e) {
            setError(e)
        }
    }

    return (
        <ImportButton
            text="Import MakeCode source map"
            onFilesUploaded={handleFilesUploaded}
            acceptedFiles={[".srcmap"]}
            icon={true}
        />
    )
}
