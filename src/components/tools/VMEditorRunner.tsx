import React, { useMemo, useContext } from "react"
import { parseITTTMarkdownToJSON } from "../../../jacdac-ts/src/vm/markdown"
import useLocalStorage from "../useLocalStorage"
import HighlightTextField from "../ui/HighlightTextField"
import { Grid } from "@material-ui/core"
import GridHeader from "../ui/GridHeader"
import Alert from "../ui/Alert"
import VMRunner from "../vm/VMRunner"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"
import useChange from "../../jacdac/useChange"

const VM_MARKDOWN_SOURCE_STORAGE_KEY = "jacdac:vmeditorsource:markdown"

export default function VMEditorRunner() {
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
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
            {json && bus === undefined && (
                <Alert severity="warning">
                    Cannot run VM without a bus!
                </Alert>
            )
            }
            <GridHeader title="Preview" />
            {json && bus && (
                <Grid item xs={12} xl={7}>
                    <VMRunner
                        json={json}
                        bus={bus}
                    />
                </Grid>
            )}
        </Grid>
    )
}
