import Blockly, { FieldVariable } from "blockly"
import React, { createContext, ReactNode, useEffect, useState } from "react"
import { CHANGE } from "../../../jacdac-ts/src/jdom/constants"
import { JDEventSource } from "../../../jacdac-ts/src/jdom/eventsource"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import { RoleManager } from "../../../jacdac-ts/src/vm/rolemanager"
import { IT4ProgramRunner } from "../../../jacdac-ts/src/vm/vmrunner"
import useChange from "../../jacdac/useChange"
import ReactField from "./fields/ReactField"

export class WorkspaceServices extends JDEventSource {
    private _runner: IT4ProgramRunner
    private _roleManager: RoleManager

    constructor() {
        super()
    }

    get runner() {
        return this._runner
    }

    set runner(value: IT4ProgramRunner) {
        if (this._runner !== value) {
            this._runner = value
            this.emit(CHANGE)
        }
    }

    get roleManager() {
        return this._roleManager
    }

    set roleManager(value: RoleManager) {
        if (this._roleManager !== value) {
            this._roleManager = value
            this.emit(CHANGE)
        }
    }
}

export interface WorkspaceContextProps {
    workspace?: Blockly.Workspace
    services: WorkspaceServices
    flyout?: boolean
    role?: string
    roleServiceShortId?: string
    roleService?: JDService
}

export const WorkspaceContext = createContext<WorkspaceContextProps>({
    workspace: undefined,
    flyout: false,
    services: undefined,
    role: undefined,
    roleServiceShortId: undefined,
    roleService: undefined,
})
WorkspaceContext.displayName = "Workspace"

export default WorkspaceContext

export interface BlocklyWorkspaceWithServices extends Blockly.Workspace {
    jacdacServices: WorkspaceServices
}

export function WorkspaceProvider(props: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    field: ReactField<any>
    children: ReactNode
}) {
    const { field, children } = props
    const [sourceBlock, setSourceBlock] = useState<Blockly.Block>(
        field?.getSourceBlock()
    )
    const workspace = sourceBlock?.workspace
    const services = (workspace as BlocklyWorkspaceWithServices)?.jacdacServices
    const roleManager = services?.roleManager
    const runner = services?.runner

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
    const roleServiceShortId = useChange(
        roleManager,
        _ => _?.roles.find(r => r.role === role)?.serviceShortId
    )
    const [flyout, setFlyout] = useState(!!sourceBlock?.isInFlyout)

    // resolve role
    useEffect(() => {
        return field?.events.subscribe(CHANGE, () => {
            const newSourceBlock = field.getSourceBlock()
            console.log(`field change`, { newSourceBlock })
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

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <WorkspaceContext.Provider
            value={{ services, role, roleServiceShortId, roleService, flyout }}
        >
            {children}
        </WorkspaceContext.Provider>
    )
}
