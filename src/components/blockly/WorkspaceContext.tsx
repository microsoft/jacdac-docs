/* eslint-disable @typescript-eslint/ban-types */
import { Block, Events, FieldVariable, WorkspaceSvg } from "blockly"
import React, {
    createContext,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from "react"
import { CHANGE } from "../../../jacdac-ts/src/jdom/constants"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import { VMProgramRunner } from "../../../jacdac-ts/src/vm/runner"
import useChange from "../../jacdac/useChange"
import ReactField from "./fields/ReactField"
import { WorkspaceJSON } from "./jsongenerator"
import useWorkspaceEvent from "./useWorkspaceEvent"
import { BlocklyWorkspaceWithServices, WorkspaceServices } from "./workspacecontextutils"

export interface WorkspaceContextProps {
    workspace?: WorkspaceSvg
    workspaceJSON?: WorkspaceJSON
    dragging?: boolean
    sourceBlock?: Block
    sourceId?: string
    services: WorkspaceServices
    flyout?: boolean
    role?: string
    roleServiceClass?: number
    roleService?: JDService
    runner?: VMProgramRunner
}

export const WorkspaceContext = createContext<WorkspaceContextProps>({
    workspace: undefined,
    workspaceJSON: undefined,
    dragging: false,
    sourceBlock: undefined,
    flyout: false,
    sourceId: undefined,
    services: undefined,
    role: undefined,
    roleServiceClass: undefined,
    roleService: undefined,
    runner: undefined,
})
WorkspaceContext.displayName = "Workspace"

export default WorkspaceContext

export function WorkspaceProvider(props: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    field: ReactField<any>
    children: ReactNode
}) {
    const { field, children } = props
    const [sourceBlock, setSourceBlock] = useState<Block>(
        field?.getSourceBlock()
    )
    const sourceId = sourceBlock?.id
    const workspace = sourceBlock?.workspace as WorkspaceSvg
    const services = (workspace as BlocklyWorkspaceWithServices)?.jacdacServices
    const roleManager = useChange(services, _ => _?.roleManager)
    const runner = useChange(services, _ => _?.runner)
    const workspaceJSON = useChange(services, _ => _?.workspaceJSON)
    const [dragging, setDragging] = useState(!!workspace?.isDragging())

    const resolveRole = () => {
        const newSourceBlock = field.getSourceBlock()
        const roleInput = newSourceBlock?.inputList[0]
        const roleField = roleInput?.fieldRow.find(
            f => f.name === "role" && f instanceof FieldVariable
        ) as FieldVariable
        if (roleField) {
            const xml = document.createElement("xml")
            roleField?.toXml(xml)
            const newRole = roleField?.getVariable()?.name
            return newRole
        }
        return undefined
    }
    const resolveRoleService = () => {
        const newRoleService = role && roleManager?.getService(role)
        return newRoleService
    }

    const [role, setRole] = useState<string>(resolveRole())
    const [roleService, setRoleService] = useState<JDService>(
        resolveRoleService()
    )
    const roleServiceClass = useChange(
        roleManager,
        _ => _?.roles.find(r => r.role === role)?.serviceClass
    )
    const [flyout, setFlyout] = useState(!!sourceBlock?.isInFlyout)

    // resolve role
    useEffect(() => {
        return field?.events.subscribe(CHANGE, () => {
            const newSourceBlock = field.getSourceBlock()
            setSourceBlock(newSourceBlock)
            setRole(resolveRole())
            setFlyout(!!newSourceBlock?.isInFlyout)
        })
    }, [field, workspace, runner])

    // resolve current role service
    useEffect(() => {
        setRoleService(resolveRoleService())
        return roleManager?.subscribe(CHANGE, () =>
            setRoleService(resolveRoleService())
        )
    }, [role, runner])

    const handleWorkspaceEvent = useCallback(
        (event: Events.Abstract & { type: string }) => {
            const { workspaceId, type } = event
            if (workspaceId !== workspace?.id) return
            if (type === Events.BLOCK_DRAG) {
                const drag = event as Events.BlockDrag
                setDragging(!!drag?.isStart)
            }
        },
        [workspace]
    )
    useWorkspaceEvent(workspace, handleWorkspaceEvent)

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <WorkspaceContext.Provider
            value={{
                sourceBlock,
                workspace,
                workspaceJSON,
                dragging,
                sourceId,
                services,
                role,
                roleServiceClass,
                roleService,
                runner,
                flyout,
            }}
        >
            {children}
        </WorkspaceContext.Provider>
    )
}
