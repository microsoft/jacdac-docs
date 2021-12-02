import { Events, WorkspaceSvg, Xml } from "blockly"
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react"
import {
    CHANGE,
    DEVICE_ANNOUNCE,
    DEVICE_DISCONNECT,
} from "../../../jacdac-ts/src/jdom/constants"
import { arrayConcatMany, toMap } from "../../../jacdac-ts/src/jdom/utils"
import RoleManager from "../../../jacdac-ts/src/jdom/rolemanager"
import bus from "../../jacdac/providerbus"
import useRoleManager from "../hooks/useRoleManager"
import useLocalStorage from "../hooks/useLocalStorage"
import { BlockWarning, collectWarnings } from "./blockwarning"
import { registerDataSolver } from "./dsl/datasolver"
import BlockDomainSpecificLanguage from "./dsl/dsl"
import { workspaceToJSON } from "./jsongenerator"
import {
    JSON_WARNINGS_CATEGORY,
    NEW_PROJET_XML,
    ToolboxConfiguration,
    WORKSPACE_FILENAME,
} from "./toolbox"
import useBlocklyEvents from "./useBlocklyEvents"
import useBlocklyPlugins from "./useBlocklyPlugins"
import useToolbox, { useToolboxButtons } from "./useToolbox"
import {
    BlockServices,
    BlockWithServices,
    FieldWithServices,
    resolveWorkspaceServices,
    WorkspaceServices,
    WorkspaceWithServices,
} from "./WorkspaceContext"
import AppContext from "../AppContext"
import { WorkspaceFile, WorkspaceJSON } from "./dsl/workspacejson"
import useEffectAsync from "../useEffectAsync"
import useChange from "../../jacdac/useChange"
import FileSystemContext from "../FileSystemContext"
import { resolveBlockWarnings } from "./WorkspaceContext"
import useWindowEvent from "../hooks/useWindowEvent"
import {
    DslMessage,
    DslOptionsMessage,
    DslWorkspaceFileMessage,
} from "./dsl/iframedsl"
import { AllOptions } from "./fields/IFrameDataChooserField"
import {
    dashify,
    humanify,
} from "../../../jacdac-ts/jacdac-spec/spectool/jdspec"

export interface BlockProps {
    editorId: string
    setEditorId: (id: string) => void

    dsls: BlockDomainSpecificLanguage[]
    workspace: WorkspaceSvg
    workspaceXml: string
    workspaceJSON: WorkspaceJSON
    toolboxConfiguration: ToolboxConfiguration
    roleManager: RoleManager
    dragging: boolean
    setWorkspace: (ws: WorkspaceSvg) => void
    setWorkspaceXml: (value: string) => void
    setWarnings: (category: string, warnings: BlockWarning[]) => void
}

const BlockContext = createContext<BlockProps>({
    editorId: "",
    setEditorId: () => {},
    dsls: [],
    workspace: undefined,
    workspaceXml: undefined,
    workspaceJSON: undefined,
    toolboxConfiguration: undefined,
    roleManager: undefined,
    dragging: false,
    setWarnings: () => {},
    setWorkspace: () => {},
    setWorkspaceXml: () => {},
})
BlockContext.displayName = "Block"

const DEFAULT_XML = '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>'

export default BlockContext

// eslint-disable-next-line react/prop-types
export function BlockProvider(props: {
    storageKey: string
    dsls: BlockDomainSpecificLanguage[]
    onBeforeSaveWorkspaceFile?: (file: WorkspaceFile) => void
    children: ReactNode
}) {
    const { storageKey, dsls, children, onBeforeSaveWorkspaceFile } = props
    const { setError } = useContext(AppContext)
    const { fileSystem } = useContext(FileSystemContext)
    const workspaceDirectory = useChange(fileSystem, _ => _?.workingDirectory)
    const workspaceFile = useChange(workspaceDirectory, _ =>
        _?.file(WORKSPACE_FILENAME, { create: true })
    )
    const [storedXml, setStoredXml] = useLocalStorage(
        storageKey,
        NEW_PROJET_XML
    )
    const roleManager = useRoleManager()
    const [workspace, setWorkspace] = useState<WorkspaceSvg>(undefined)
    const [workspaceXml, _setWorkspaceXml] = useState<string>(storedXml)
    const [workspaceJSON, setWorkspaceJSON] = useState<WorkspaceJSON>(undefined)
    const [warnings, _setWarnings] = useState<
        {
            category: string
            entries: BlockWarning[]
        }[]
    >([])
    const [dragging, setDragging] = useState(false)
    const [editorId, setEditorId] = useState("")

    const setWorkspaceXml = (xml: string) => {
        _setWorkspaceXml(xml)
        setStoredXml(xml)
    }

    const setWarnings = (category: string, entries: BlockWarning[]) => {
        const i = warnings.findIndex(w => w.category === category)
        _setWarnings([
            ...warnings.slice(0, i),
            {
                category,
                entries,
            },
            ...warnings.slice(i + 1),
        ])
    }
    const loadWorkspaceFile = (file: WorkspaceFile) => {
        const { editor, xml } = file || {}
        if (editor !== editorId)
            throw new Error(`wrong block editor (${editor} != ${editorId}`)
        // try loading xml into a dummy blockly workspace
        const dom = Xml.textToDom(xml || DEFAULT_XML)
        // all good, load in workspace
        workspace.clear()
        Xml.domToWorkspace(dom, workspace)
    }

    const toolboxConfiguration = useToolbox(dsls, workspaceJSON)
    const initializeBlockServices = (block: BlockWithServices) => {
        if (block?.jacdacServices?.initialized) return

        let services = block.jacdacServices
        if (!services) {
            services = block.jacdacServices = new BlockServices()
            block.inputList?.forEach(i =>
                i.fieldRow?.forEach(f =>
                    (
                        f as unknown as FieldWithServices
                    ).notifyServicesChanged?.()
                )
            )
        }
        services.initialized = true
        registerDataSolver(block)
    }

    const handleBlockChange = (blockId: string) => {
        const block = workspace.getBlockById(blockId) as BlockWithServices
        const services = block?.jacdacServices
        if (block && !block.isEnabled()) {
            services?.clearData()
        } else services?.emit(CHANGE)
    }

    const handleWorkspaceEvent = (event: {
        type: string
        workspaceId: string
    }) => {
        const { type, workspaceId } = event
        if (workspaceId !== workspace.id) return
        //console.log(`blockly: ${type}`, event)
        if (type === Events.BLOCK_DRAG) {
            const dragEvent = event as Events.BlockDrag
            setDragging(!!dragEvent.isStart)
        } else if (type === Events.FINISHED_LOADING) {
            workspace
                .getAllBlocks(false)
                .forEach(b => initializeBlockServices(b as BlockWithServices))
        } else if (type === Events.BLOCK_CREATE) {
            const bev = event as unknown as Events.BlockCreate
            const block = workspace.getBlockById(
                bev.blockId
            ) as BlockWithServices
            initializeBlockServices(block)
        } else if (type === Events.BLOCK_MOVE) {
            const cev = event as unknown as Events.BlockMove
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const parentId = (cev as any).newParentId
            if (parentId) handleBlockChange(parentId)
        } else if (type === Events.BLOCK_CHANGE) {
            const cev = event as unknown as Events.BlockChange
            handleBlockChange(cev.blockId)
        }
    }

    // mounting dsts
    useEffect(() => {
        const unmounnts = dsls
            .map(dsl => dsl.mount?.(workspace))
            .filter(u => !!u)
        return () => {
            unmounnts.forEach(u => u())
        }
    }, [workspace])

    // plugins
    useBlocklyPlugins(workspace)
    useBlocklyEvents(workspace)
    useToolboxButtons(workspace, toolboxConfiguration)

    // role manager
    useEffect(() => {
        const services = resolveWorkspaceServices(workspace)
        if (services) services.roleManager = roleManager
    }, [workspace, roleManager])
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const wws = workspace as unknown as WorkspaceWithServices
        if (wws && !wws.jacdacServices) {
            wws.jacdacServices = new WorkspaceServices()
            wws.jacdacServices.roleManager = roleManager
        }
    }, [workspace])
    useEffect(() => {
        const services = resolveWorkspaceServices(workspace)
        if (services) services.workingDirectory = workspaceDirectory
    }, [workspace, workspaceDirectory])
    useEffect(() => {
        if (!workspace || dragging) return

        const newWorkspaceJSON = workspaceToJSON(workspace, dsls)
        setWorkspaceJSON(newWorkspaceJSON)
        const newWarnings = collectWarnings(newWorkspaceJSON)
        setWarnings(JSON_WARNINGS_CATEGORY, newWarnings)
    }, [dsls, workspace, dragging, workspaceXml])
    useEffectAsync(
        async mounted => {
            if (!workspaceFile) return
            try {
                const text = await workspaceFile.textAsync()
                if (!mounted()) return

                const json = JSON.parse(text) as WorkspaceFile
                loadWorkspaceFile(json)
            } catch (e) {
                if (mounted()) setError(e)
                if (fileSystem) fileSystem.workingDirectory = undefined
            }
        },
        [workspaceFile]
    )
    useEffectAsync(async () => {
        const file: WorkspaceFile = {
            editor: editorId,
            xml: workspaceXml,
            json: workspaceJSON,
        }
        dsls.forEach(dsl => dsl.onBeforeSaveWorkspaceFile?.(file))
        onBeforeSaveWorkspaceFile?.(file)
        dsls.forEach(dsl => dsl.onSave?.(file))
        if (workspaceFile) {
            const fileContent = JSON.stringify(file)
            workspaceFile?.write(fileContent)
        }
    }, [editorId, workspaceFile, workspaceXml, workspaceJSON])
    useEffect(() => {
        const services = resolveWorkspaceServices(workspace)
        if (services) services.workspaceJSON = workspaceJSON
    }, [workspace, workspaceJSON])

    // apply errors
    useEffect(() => {
        if (!workspace) return
        const allErrors = toMap(
            arrayConcatMany(
                warnings
                    .map(w => w.entries)
                    .filter(entries => !!entries?.length)
            ),
            e => e.sourceId || "",
            e => e.message
        )
        workspace
            .getAllBlocks(false)
            .forEach(b =>
                b.setWarningText(allErrors[b.id] || resolveBlockWarnings(b))
            )
    }, [workspace, warnings])

    // register block creation
    useEffect(() => {
        const handlers = [
            handleWorkspaceEvent,
            ...dsls.map(dsl => dsl.createWorkspaceChangeListener?.(workspace)),
        ].filter(c => !!c)
        handlers.forEach(handler => workspace?.addChangeListener(handler))
        return () =>
            handlers?.forEach(handler =>
                workspace?.removeChangeListener(handler)
            )
    }, [workspace, dsls])
    // don't refresh registers while dragging
    useEffect(() => {
        bus.backgroundRefreshRegisters = !dragging
    }, [dragging])

    // handle services
    useEffect(
        () =>
            bus.subscribe([DEVICE_ANNOUNCE, DEVICE_DISCONNECT], () => {
                if (!workspace) return
                const sensors = bus.services({ sensor: true })
                sensors
                    .filter(sensor => !workspace.getVariableById(sensor.id))
                    .forEach(sensor => {
                        let name = ""
                        const instanceName = sensor.instanceName
                        if (instanceName)
                            name += humanify(dashify(instanceName))
                        else {
                            name += humanify(
                                dashify(sensor.specification.shortName)
                            )
                            if (
                                sensor.device.services({
                                    serviceClass: sensor.serviceClass,
                                }).length > 1
                            )
                                name += `[${sensor.serviceIndex.toString(16)}]`
                        }
                        name += ` (${sensor.device.shortId})`
                        const sensorVar = workspace.createVariable(
                            name,
                            "sensor",
                            sensor.id
                        )
                        console.log("added sensor variable", {
                            sensor,
                            sensorVar,
                        })
                    })
            }),
        [bus, workspace]
    )

    // load message from parent
    useWindowEvent(
        "message",
        (msg: MessageEvent<DslMessage>) => {
            const { data } = msg
            const { type, action } = data
            if (type === "dsl") {
                switch (action) {
                    case "load":
                        console.debug(`dsl load`, data)
                        try {
                            loadWorkspaceFile(data as DslWorkspaceFileMessage)
                        } catch (e) {
                            console.error(e)
                        }
                        break
                    case "options": {
                        const options: Record<string, [string, string][]> = (
                            data as DslOptionsMessage
                        ).options
                        console.debug(`dsl: received options`, options)
                        Object.entries(options || {}).forEach(
                            ([key, value]) => (AllOptions[key] = value)
                        )
                    }
                }
            }
        },
        false,
        []
    )

    return (
        <BlockContext.Provider
            value={{
                editorId,
                setEditorId,
                dsls,
                workspace,
                workspaceXml,
                workspaceJSON,
                toolboxConfiguration,
                roleManager,
                dragging,
                setWarnings,
                setWorkspace,
                setWorkspaceXml,
            }}
        >
            {children}
        </BlockContext.Provider>
    )
}
