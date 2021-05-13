import { useContext, useMemo } from "react"
import { parseITTTMarkdownToJSON } from "../../../jacdac-ts/src/vm/markdown"
import useLocalStorage from "../useLocalStorage"
import AppContext from "../AppContext"
import HighlightTextField from "../ui/HighlightTextField"
import { Button, Grid } from "@material-ui/core"
import GridHeader from "../ui/GridHeader"

const VM_MARKDOWN_SOURCE_STORAGE_KEY = "jacdac:vmeditorsource:markdown"

export default function VMEditorRunner() {
    const { setError } = useContext(AppContext)
    const [source, setSource] = useLocalStorage(
        VM_MARKDOWN_SOURCE_STORAGE_KEY,
        `# VM Handler program\n\n`
    )
    const json = useMemo(
        () => parseITTTMarkdownToJSON(source),
        [source]
    )
    return (
        <Grid spacing={2} container>
            <Grid spacing={2} container>
                <Grid item xs={12} sm={7}>
                    <HighlightTextField
                        code={source}
                        language={"markdown"}
                        onChange={setSource}
                        annotations={json?.errors}
                    />
                </Grid>
            </Grid>
            <GridHeader title="Preview" />
            {json && (
                <Grid item xs={12} xl={7}>

                </Grid>
            )}
        </Grid>
    )
}
