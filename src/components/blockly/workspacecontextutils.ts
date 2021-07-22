/* eslint-disable @typescript-eslint/ban-types */
import { BlockSvg, WorkspaceSvg } from "blockly"
import { CHANGE } from "../../../jacdac-ts/src/jdom/constants"
import { VMProgramRunner } from "../../../jacdac-ts/src/vm/runner"
import { WorkspaceJSON } from "./jsongenerator"
import { JDEventSource } from "../../../jacdac-ts/src/jdom/eventsource"
import RoleManager from "../../../jacdac-ts/src/servers/rolemanager"

export class WorkspaceServices extends JDEventSource {
    private _workspaceJSON: WorkspaceJSON
    private _runner: VMProgramRunner
    private _roleManager: RoleManager

    constructor() {
        super()
    }

    get workspaceJSON() {
        return this._workspaceJSON
    }

    set workspaceJSON(value: WorkspaceJSON) {
        this._workspaceJSON = value
        this.emit(CHANGE)
    }

    get runner() {
        return this._runner
    }

    set runner(value: VMProgramRunner) {
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

export interface BlocklyWorkspaceWithServices extends WorkspaceSvg {
    jacdacServices: WorkspaceServices
}

export interface FieldWithServices {
    notifyServicesChanged?: () => void
}

export class BlockServices extends JDEventSource {
    private _data: object[]
    private _chartProps: object

    get data() {
        return this._data
    }
    set data(value: object[]) {
        if (this._data !== value) {
            this._data = value
            this.emit(CHANGE)
        }
    }
    setDataNoEvent(value: object[]) {
        this._data = value;
    }
    clearData() {
        this.data = undefined
    }

    get chartProps() {
        return this._chartProps
    }
    set chartProps(value: object) {
        if (this._chartProps !== value) {
            this._chartProps = value
            this.emit(CHANGE)
        }
    }

    readonly cache = {}

    initialized = false
}
export interface BlockWithServices extends BlockSvg {
    jacdacServices: BlockServices
}
