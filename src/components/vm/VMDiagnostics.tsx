import { Grid, Typography } from "@material-ui/core"
import React from "react"
import { VMProgram } from "../../../jacdac-ts/src/vm/ir"
import CodeBlock from "../CodeBlock"

export default function VMDiagnostics(props: { program: VMProgram }) {
    const { program } = props
    return (
        <Grid item xs={12}>
            <Typography variant="subtitle1">VM</Typography>
            <CodeBlock
                className="json"
                downloadName={"test.json.vm"}
                downloadText={JSON.stringify(program, null, 2)}
            >
                {JSON.stringify(program, null, 2)}
            </CodeBlock>
        </Grid>
    )
}
