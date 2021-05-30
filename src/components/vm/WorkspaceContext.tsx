import Blockly, { FieldVariable } from "blockly"
import React, { createContext, ReactNode, useEffect, useState } from "react"
import { CHANGE } from "../../../jacdac-ts/src/jdom/constants"
import { JDEventSource } from "../../../jacdac-ts/src/jdom/eventsource"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import { assert } from "../../../jacdac-ts/src/jdom/utils"
import { IT4ProgramRunner } from "../../../jacdac-ts/src/vm/vmrunner"
import ReactField, { SOURCE_BLOCK_CHANGE } from "./fields/ReactField"

export class WorkspaceServices extends JDEventSource {
    private _runner: IT4ProgramRunner

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

    get roles(): {
        name: string
        service: JDService
        serviceShortId: string
    }[] {
        const roles = this._runner?.roles
        return Object.keys(roles).map(name => ({ name, ...roles[name] }))
    }
}

export interface WorkspaceContextProps {
    sourceBlock?: Blockly.Block
    workspace?: Blockly.Workspace
    services: WorkspaceServices
    role?: string
    roleService?: JDService
}

export const WorkspaceContext = createContext<WorkspaceContextProps>({
    sourceBlock: undefined,
    workspace: undefined,
    services: undefined,
    role: undefined,
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
    const [sourceBlock, setSourceBlock] = useState<Blockly.Block>(undefined)
    const [role, setRole] = useState<string>()
    const [roleService, setRoleService] = useState<JDService>()
    const workspace = sourceBlock?.workspace
    const services = (workspace as BlocklyWorkspaceWithServices)?.jacdacServices
    const runner = services?.runner

    // resolve source block
    useEffect(() => {
        console.log(`updated field`, { field })
        return field?.events.subscribe(
            SOURCE_BLOCK_CHANGE,
            (newBlock: Blockly.Block) => {
                console.log("source block change", newBlock)
                const roleField = newBlock?.inputList[0]
                    ?.fieldRow[0] as FieldVariable
                {
                    assert(!roleField || roleField?.name === "role")
                    const xml = document.createElement("xml")
                    roleField?.toXml(xml)
                }
                setSourceBlock(newBlock)
            }
        )
    }, [field, workspace, runner])

    // resolve current role
    useEffect(() => {
        const roleField = sourceBlock?.inputList[0]
            ?.fieldRow[0] as FieldVariable
        {
            assert(!roleField || roleField?.name === "role")
            const xml = document.createElement("xml")
            roleField?.toXml(xml)
        }
        const newRole = roleField?.getVariable()?.name
        const newRoleService = role && runner?.resolveService(role)

        setRole(newRole)
        setRoleService(newRoleService)
    }, [sourceBlock])

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <WorkspaceContext.Provider
            value={{ sourceBlock, services, role, roleService }}
        >
            {children}
        </WorkspaceContext.Provider>
    )
}
