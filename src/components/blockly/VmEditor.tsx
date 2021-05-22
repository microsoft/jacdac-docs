import React, { useEffect, useRef, useState } from "react"
import ReactBlockly from "react-blockly"
import Blockly from "blockly"
import "@blockly/field-slider"
import Theme from "@blockly/theme-modern"
import { DisableTopBlocks } from "@blockly/disable-top-blocks"
import {
    ContinuousToolbox,
    ContinuousFlyout,
    ContinuousMetrics,
} from "@blockly/continuous-toolbox"
import useToolbox, { scanServices } from "./useToolbox"
import { arrayConcatMany } from "../../../jacdac-ts/src/jdom/utils"
import BlocklyModalDialogs from "./BlocklyModalDialogs"
import { domToJSON, WorkspaceJSON } from "./generator"

export default function VmEditor(props: {
    className?: string
    initialXml?: string
    onXmlChange?: (xml: string) => void
    onJSONChange?: (json: WorkspaceJSON) => void
}) {
    const { className, onXmlChange, onJSONChange, initialXml } = props
    const [services, setServices] = useState<string[]>([])
    const { toolboxCategories, newProjectXml } = useToolbox(services)
    // ReactBlockly
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reactBlockly = useRef<any>()
    const workspaceReady = useRef(false)

    const resolveWorkspace = (): Blockly.WorkspaceSvg =>
        reactBlockly.current?.workspace?.state?.workspace

    const initWorkspace = () => {
        if (workspaceReady.current) return
        const workspace = resolveWorkspace()
        if (!workspace) return
        workspaceReady.current = true
        // Add the disableOrphans event handler. This is not done automatically by
        // the plugin and should be handled by your application.
        workspace.addChangeListener(Blockly.Events.disableOrphans)

        // The plugin must be initialized before it has any effect.
        const disableTopBlocksPlugin = new DisableTopBlocks()
        disableTopBlocksPlugin.init()
    }

    // blockly did a change
    const handleChange = (workspace: Blockly.WorkspaceSvg) => {
        initWorkspace()

        // save xml
        if (onXmlChange) {
            const newXml = Blockly.Xml.domToText(
                Blockly.Xml.workspaceToDom(workspace)
            )
            onXmlChange(newXml)
        }

        // save json
        if (onJSONChange) {
            // emit json
            const json = domToJSON(workspace)
            onJSONChange(json)
        }

        // update toolbox with declared roles
        const newServices = scanServices(workspace)
        if (JSON.stringify(services) !== JSON.stringify(newServices))
            setServices(newServices)
    }

    // track workspace changes and update callbacks
    useEffect(() => {
        // collect buttons
        const workspace = resolveWorkspace()
        const buttons = arrayConcatMany(
            toolboxCategories?.filter(cat => cat.button).map(cat => cat.button)
        )
        buttons.forEach(button =>
            workspace.registerButtonCallback(button.callbackKey, () =>
                Blockly.Variables.createVariableButtonHandler(
                    workspace,
                    null,
                    button.service.shortId
                )
            )
        )
    }, [JSON.stringify(toolboxCategories)])

    return (
        <>
            <BlocklyModalDialogs />
            <ReactBlockly
                ref={reactBlockly}
                toolboxCategories={toolboxCategories}
                workspaceConfiguration={{
                    plugins: {
                        toolbox: ContinuousToolbox,
                        flyoutsVerticalToolbox: ContinuousFlyout,
                        metricsManager: ContinuousMetrics,
                    },
                    comments: false,
                    css: true,
                    trashcan: false,
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
                initialXml={initialXml || newProjectXml}
                wrapperDivClassName={className}
                workspaceDidChange={handleChange}
            />
        </>
    )
}
