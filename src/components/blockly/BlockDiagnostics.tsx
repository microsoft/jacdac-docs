import { Grid, Typography } from "@material-ui/core"
import React from "react"
import { WorkspaceJSON } from "./jsongenerator"
import CodeBlock from "../CodeBlock"

export default function BlockDiagnostics(props: {
    source: WorkspaceJSON
    xml: string
}) {
    const { source, xml } = props
    return (
        <>
            <Grid item xs={12}>
                <Typography variant="subtitle1">Blockly JSON</Typography>
                <CodeBlock
                    className="json"
                    downloadName={"test.json"}
                    downloadText={JSON.stringify(source, null, 2)}
                >
                    {JSON.stringify(source, null, 2)}
                </CodeBlock>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1">Blockly XML</Typography>
                <CodeBlock className="xml">{xml}</CodeBlock>
            </Grid>
        </>
    )
}
