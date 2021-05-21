import React, { useContext, useEffect, useRef } from "react"
import ReactBlockly from "react-blockly"
import Blockly from "blockly"
import Theme from "@blockly/theme-modern"
import DarkTheme from "@blockly/theme-dark"
import { DisableTopBlocks } from "@blockly/disable-top-blocks"
import useToolbox from "./useToolbox"
import DarkModeContext from "../ui/DarkModeContext"

export default function VmEditor(props: { className?: string }) {
    const { className } = props
    const { darkMode } = useContext(DarkModeContext)
    const { toolboxBlocks, toolboxCategories, initialXml } = useToolbox()
    const reactBlockly = useRef<ReactBlockly>()
    const theme = darkMode == "dark" ? DarkTheme : Theme
    const workspace: Blockly.WorkspaceSvg = reactBlockly.current?.workspace

    const handleChange = (workspace: Blockly.WorkspaceSvg) => {
        const newXml = Blockly.Xml.domToText(
            Blockly.Xml.workspaceToDom(workspace)
        )
        console.debug(newXml)
    }

    useEffect(() => {
        if (!workspace) {
            return
        }
        console.log({ current: reactBlockly.current, workspace })
        // Add the disableOrphans event handler. This is not done automatically by
        // the plugin and should be handled by your application.
        workspace.addChangeListener(Blockly.Events.disableOrphans)

        // The plugin must be initialized before it has any effect.
        const disableTopBlocksPlugin = new DisableTopBlocks()
        disableTopBlocksPlugin.init()
    }, [workspace])

    console.log({ current: reactBlockly.current })
    return (
        <ReactBlockly
            ref={reactBlockly}
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
                theme,
                oneBasedIndex: false,
            }}
            initialXml={initialXml}
            wrapperDivClassName={className}
            workspaceDidChange={handleChange}
        />
    )
}
