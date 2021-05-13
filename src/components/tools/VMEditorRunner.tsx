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
    const roleManager = useChange(bus, b => b.roleManager)
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
            {json && roleManager === undefined && (
                <Alert severity="warning">
                    Cannot run VM without a RoleManager present.
                </Alert>
            )
            }
            <GridHeader title="Preview" />
            {json && roleManager && (
                <Grid item xs={12} xl={7}>
                    <VMRunner
                        json={json}
                        roleManager={roleManager.service}
                    />
                </Grid>
            )}
        </Grid>
    )
}
