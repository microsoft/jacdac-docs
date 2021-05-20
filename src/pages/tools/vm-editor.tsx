import { createStyles, makeStyles } from "@material-ui/core"
import React from "react"
import ReactBlockly from "react-blockly"
import Blockly from "blockly"
import Theme from "@blockly/theme-modern"

const useStyles = makeStyles(() =>
    createStyles({
        editor: {
            height: "calc(100vh - 114px)",
        },
    })
)

const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>'
const toolboxCategories = [
    {
        type: "controls_if",
    },
    {
        type: "logic_compare",
    },
    {
        type: "math_round",
    },
    {
        type: "math_number",
    },
]

export default function VMEditor() {
    const classes = useStyles()
    const handleChange = (workspace: Blockly.WorkspaceSvg) => {
        const newXml = Blockly.Xml.domToText(
            Blockly.Xml.workspaceToDom(workspace)
        )
        document.getElementById("generated-xml").innerText = newXml

        // const code = Blockly.JavaScript.workspaceToCode(workspace)
        //  document.getElementById("code").value = code
    }

    return (
        <>
            <ReactBlockly
                toolboxBlocks={toolboxCategories}
                workspaceConfiguration={{
                    grid: {
                        spacing: 25,
                        length: 1,
                        colour: "#ccc",
                        snap: true,
                    },
                    renderer: "zelos",
                    theme: Theme,
                }}
                initialXml={initialXml}
                wrapperDivClassName={classes.editor}
                workspaceDidChange={handleChange}
            />
            <pre id="generated-xml"></pre>
        </>
    )
}
