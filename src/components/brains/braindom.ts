import { shortDeviceId } from "../../../jacdac-ts/src/jacdac"
import { CHANGE, ERROR } from "../../../jacdac-ts/src/jdom/constants"
import { JDNode } from "../../../jacdac-ts/src/jdom/node"

export const BRAIN_NODE = "brain"
export const BRAIN_DEVICE_NODE = "brainDevice"
export const BRAIN_SCRIPT_NODE = "brainScript"

export class BrainManager extends JDNode {
    private _devices: BrainDevice[]
    private _scripts: BrainScript[]

    constructor(readonly apiRoot: string) {
        super()
    }

    get id(): string {
        return "brain"
    }
    get nodeKind(): string {
        throw BRAIN_NODE
    }
    get name(): string {
        return "brains"
    }
    get qualifiedName(): string {
        return this.name
    }
    get parent(): JDNode {
        return undefined
    }

    get scripts(): BrainScript[] {
        return this._scripts?.slice(0) || []
    }

    get devices(): BrainDevice[] {
        return this._devices?.slice(0) || []
    }

    get children(): JDNode[] {
        return [...(this._devices || []), ...(this._scripts || [])] as JDNode[]
    }

    async refreshDevices() {
        const datas = (await this.fetchJSON("devices")) as BrainDeviceData[]
        if (!datas) return // query failed

        // merge cloud datas with local devices
        const dids = new Set(datas.map(d => d.id))
        // remove dead devices
        this._devices = this._devices.filter(d => dids.has(d.data.id))
        // update existing devices
        datas.forEach(data => {
            const device = this._devices.find(d => d.data.id === data.id)
            if (device) device.data = data
            else this._devices.push(new BrainDevice(this, data))
        })
        this.emit(CHANGE)
    }

    async refreshScripts() {
        const datas = (await this.fetchJSON("scripts")) as BrainScriptData[]
        if (!datas) return // query failed

        // merge cloud datas with local devices
        const dids = new Set(datas.map(d => d.id))
        // remove dead devices
        this._scripts = this._scripts.filter(d => dids.has(d.data.id))
        // update existing devices
        datas.forEach(data => {
            const script = this._scripts.find(d => d.data.id === data.id)
            if (script) script.data = data
            else this._scripts.push(new BrainScript(this, data))
        })
        this.emit(CHANGE)
    }

    async fetchJSON<T>(path: string) {
        const options: RequestInit = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
        const resp = await self.fetch(
            `https://${this.apiRoot}/${path}`,
            options
        )
        if (!resp.ok) {
            this.emit(ERROR, resp.statusText)
            return undefined
        }
        return (await resp.json()) as T
    }
}

export interface BrainData {
    id: string
}

export abstract class BrainNode<TData extends BrainData> extends JDNode {
    private _lastFetch: number

    constructor(
        readonly manager: BrainManager,
        readonly path: string,
        private _data: TData
    ) {
        super()
    }

    get id(): string {
        return `brains:${this.path}:${this._data.id}`
    }
    get parent(): JDNode {
        return this.manager
    }
    get children(): JDNode[] {
        return []
    }
    get qualifiedName(): string {
        return this.name
    }

    get data(): TData {
        if (this.expired) this.refresh()
        return this._data
    }
    set data(data: TData) {
        this._lastFetch = Date.now()
        if (!!data && JSON.stringify(data) !== JSON.stringify(this._data)) {
            this._data = data
            this.emit(CHANGE)
        }
    }

    get lastFetch(): number {
        return this._lastFetch
    }

    get expired() {
        return !this._lastFetch
    }

    private refreshPromise: Promise<void>
    refresh(): Promise<void> {
        return (
            this.refreshPromise ||
            (this.refreshPromise = this.internalRefresh())
        )
    }

    private async internalRefresh(): Promise<void> {
        const data = await this.manager.fetchJSON<TData>(this.path)
        this.data = data
        this.refreshPromise = undefined
    }
}

export interface BrainDeviceData extends BrainData {
    displayName: string
    name: string
    conn: boolean
    lastAct: string
}

export class BrainDevice extends BrainNode<BrainScriptData> {
    constructor(readonly manager, data: BrainScriptData) {
        super(manager, "devices", data)
    }
    get nodeKind(): string {
        return BRAIN_DEVICE_NODE
    }
    get name(): string {
        const { data } = this
        return data.name || data.id
    }
    get displayName(): string {
        return `${this.name} ${this.data.version || ""}`
    }
    get qualifiedName(): string {
        return this.name
    }
}

export interface BrainScriptData extends BrainData {
    name?: string
    meta?: Record<string, string | number | boolean>
    id: string
    version?: number
    head?: string
}

export class BrainScript extends BrainNode<BrainScriptData> {
    constructor(readonly manager, data: BrainScriptData) {
        super(manager, "scripts", data)
    }
    get nodeKind(): string {
        return BRAIN_SCRIPT_NODE
    }
    get name(): string {
        const { data } = this
        return data.name || data.id
    }
}
