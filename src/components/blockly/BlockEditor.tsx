import React, {
    MutableRefObject,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react"
import { useBlocklyWorkspace } from "react-blockly"
import { WorkspaceSvg } from "blockly"
import Theme from "@blockly/theme-modern"
import DarkTheme from "@blockly/theme-dark"
import useToolbox, { useToolboxButtons } from "./useToolbox"
import BlocklyModalDialogs from "./BlocklyModalDialogs"
import { domToJSON, WorkspaceJSON } from "./jsongenerator"
import DarkModeContext from "../ui/DarkModeContext"
import { VMProgram } from "../../../jacdac-ts/src/vm/ir"
import workspaceJSONToVMProgram from "./VMgenerator"
import AppContext from "../AppContext"
import { createStyles, makeStyles } from "@material-ui/core"
import clsx from "clsx"
import { VMProgramRunner } from "../../../jacdac-ts/src/vm/runner"
import useBlocklyEvents from "./useBlocklyEvents"
import useBlocklyPlugins from "./useBlocklyPlugins"
import {
    BlocklyWorkspaceWithServices,
    WorkspaceServices,
} from "./WorkspaceContext"
import RoleManager from "../../../jacdac-ts/src/servers/rolemanager"
import { arrayConcatMany, toMap } from "../../../jacdac-ts/src/jdom/utils"
import { withPrefix } from "gatsby"
import DslContext from "./dsl/DslContext"
import Flags from "../../../jacdac-ts/src/jdom/flags"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        editor: {
            height: `calc(100vh - ${Flags.diagnostics ? 15 : 10}rem)`,
            "& .blocklyTreeLabel": {
                fontFamily: theme.typography.fontFamily,
            },
            "& .blocklyText": {
                fontWeight: `normal !important`,
                fontFamily: `${theme.typography.fontFamily} !important`,
            },
        },
    })
)

export default function VMBlockEditor(props: {
    className?: string
    initialXml?: string
    onXmlChange?: (xml: string) => void
    onJSONChange?: (json: WorkspaceJSON) => void
    roleManager?: RoleManager
    workspaceRef?: MutableRefObject<WorkspaceSvg>
}) {
    const {
        className,
        onXmlChange,
        onJSONChange,
        initialXml,
        roleManager,
        workspaceRef,
    } = props
    const { dsls } = useContext(DslContext)
    const classes = useStyles()
    const { darkMode } = useContext(DarkModeContext)
    const { setError } = useContext(AppContext)
    const [source, setSource] = useState<WorkspaceJSON>()
    const { toolboxConfiguration, newProjectXml } = useToolbox({
        source,
    })
    const theme = darkMode === "dark" ? DarkTheme : Theme
    const gridColor = darkMode === "dark" ? "#555" : "#ccc"

    // ReactBlockly
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const blocklyRef = useRef(null)
    const { workspace, xml } = useBlocklyWorkspace({
        ref: blocklyRef,
        toolboxConfiguration,
        workspaceConfiguration: {
            collapse: false,
            disable: false,
            comments: false,
            css: true,
            trashcan: false,
            sounds: false,
            grid: {
                spacing: 25,
                length: 1,
                colour: gridColor,
                snap: true,
            },
            renderer: "zelos",
            theme,
            oneBasedIndex: false,
            move: {
                scrollbars: {
                    vertical: true,
                    horizontal: true,
                },
            },
            media: withPrefix("blockly/media/"),
            zoom: {
                controls: true,
                wheel: true,
                startScale: 1.0,
                maxScale: 3,
                minScale: 0.1,
                scaleSpeed: 1.2,
                pinch: true,
            },
        },
        initialXml: initialXml || newProjectXml,
        onImportXmlError: () => setError("Error loading blocks..."),
    }) as { workspace: WorkspaceSvg; xml: string }

    // store ref
    useEffect(() => {
        if (workspaceRef) {
            workspaceRef.current = workspace
            return () => (workspaceRef.current = undefined)
        }
    }, [workspace, workspaceRef])

    // surface state to react
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ws = workspace as any as BlocklyWorkspaceWithServices
        if (ws) ws.jacdacServices = new WorkspaceServices()
    }, [workspace])
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ws = workspace as any as BlocklyWorkspaceWithServices
        const services = ws?.jacdacServices
        if (services) {
            services.roleManager = roleManager
        }
    }, [workspace, roleManager])

    // plugins
    useBlocklyPlugins(workspace)
    useBlocklyEvents(workspace)
    useToolboxButtons(workspace, toolboxConfiguration)

    // blockly did a change
    useEffect(() => {
        if (!workspace || workspace.isDragging()) return

        onXmlChange?.(xml)

        // save json
        if (onJSONChange) {
            // emit json
            const newSource = domToJSON(workspace, dsls)
            if (JSON.stringify(newSource) !== JSON.stringify(source)) {
                setSource(newSource)
                onJSONChange?.(newSource)
            }
        }
    }, [dsls, workspace, xml])

    // TODO: apply errors

    // resize blockly
    useEffect(() => {
        const observer = new ResizeObserver(() => workspace?.resize())
        observer.observe(blocklyRef.current)
        return () => observer.disconnect()
    }, [workspace, blocklyRef.current])

    return (
        <>
            <div className={clsx(classes.editor, className)} ref={blocklyRef} />
            <BlocklyModalDialogs />
        </>
    )
}
