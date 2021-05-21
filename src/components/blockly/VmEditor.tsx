import React, { useRef } from "react"
import ReactBlockly from "react-blockly"
import Blockly from "blockly"
import Theme from "@blockly/theme-modern"
import { DisableTopBlocks } from "@blockly/disable-top-blocks"
import useToolbox from "./useToolbox"

export default function VmEditor(props: { className?: string }) {
    const { className } = props
    const { toolboxBlocks, toolboxCategories, initialXml } = useToolbox()
    const reactBlockly = useRef<ReactBlockly>()
    const workspaceReady = useRef(false)

    const initWorkspace = () => {
        if (workspaceReady.current) return
        const workspace: Blockly.WorkspaceSvg = reactBlockly.current?.workspace?.state?.workspace
        if (!workspace) return
        workspaceReady.current = true
        // Add the disableOrphans event handler. This is not done automatically by
        // the plugin and should be handled by your application.
        workspace.addChangeListener(Blockly.Events.disableOrphans)

        // The plugin must be initialized before it has any effect.
        const disableTopBlocksPlugin = new DisableTopBlocks()
        disableTopBlocksPlugin.init()
    }

    const handleChange = (workspace: Blockly.WorkspaceSvg) => {
        initWorkspace()
        const newXml = Blockly.Xml.domToText(
            Blockly.Xml.workspaceToDom(workspace)
        )
        console.debug(newXml)
    }

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
                theme: Theme,
                oneBasedIndex: false,
                move: {
                    scrollbars: {
                        vertical: false,
                        horizontal: true,
                    },
                },
            }}
            initialXml={initialXml}
            wrapperDivClassName={className}
            workspaceDidChange={handleChange}
        />
    )
}
