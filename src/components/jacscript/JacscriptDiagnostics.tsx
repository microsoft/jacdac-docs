import { Grid, Typography } from "@mui/material"
import React from "react"
import CodeBlock from "../CodeBlock"
import {JacScriptProgram} from "../../../jacdac-ts/src/vm/ir2jacscript"

export default function JacscriptDiagnostics(props: { program: JacScriptProgram }) {
    const { program } = props
    if (!program) return null    
    return (
        <Grid item xs={12}>
            <Typography variant="subtitle1">Jacscript</Typography>
            <CodeBlock
                className="javascript"
                downloadName={"test.jcs.json"}
                downloadText={JSON.stringify(program, null, 2)}
            >
                {program.program.join("\n")}
            </CodeBlock>
        </Grid>
    )
}
