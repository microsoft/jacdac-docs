import React from "react"
import ReactBlockly from "react-blockly"
import Blockly from "blockly"
import Theme from "@blockly/theme-modern"
import useToolbox from "./useToolbox"

export default function VmEditor(props: { className?: string }) {
    const { className } = props
    const { toolboxBlocks, toolboxCategories, initialXml } = useToolbox()

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
                toolboxBlocks={toolboxBlocks}
                toolboxCategories={toolboxCategories}
                workspaceConfiguration={{
                    comments: false,
                    css: true,
                    grid: {
                        spacing: 25,
                        length: 1,
                        colour: "#ccc",
                        snap: true,
                    },
                    renderer: "zelos",
                    theme: Theme,
                    oneBasedIndex: false,
                }}
                initialXml={initialXml}
                wrapperDivClassName={classes.editor}
                workspaceDidChange={handleChange}
            />
            <pre id="generated-xml" className={className}></pre>
        </>
    )
}
