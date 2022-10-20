import { JDDevice, jdpack } from "../../../jacdac-ts/src/jacdac"
import {
    AzureIotHubHealthCmd,
    CHANGE,
    ERROR,
    SRV_AZURE_IOT_HUB_HEALTH,
} from "../../../jacdac-ts/src/jdom/constants"
import { JDNode } from "../../../jacdac-ts/src/jdom/node"

export const BRAIN_NODE = "brain"
export const BRAIN_DEVICE_NODE = "brainDevice"
export const BRAIN_SCRIPT_NODE = "brainScript"

export class BrainManager extends JDNode {
    private _devices: BrainDevice[]
    private _scripts: BrainScript[]

    constructor(readonly apiRoot: string, readonly token: string) {
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

    device(id: string): BrainDevice {
        return this._devices?.find(d => d.id === id)
    }

    async registerDevice(device: JDDevice, name: string) {
        const { productIdentifier, deviceId } = device

        // create new device
        console.debug(`create new device`)
        const resp: { deviceId: string; connectionString: string } =
            await this.fetchJSON("devices", {
                method: "POST",
                body: { deviceId },
            })
        if (!resp) {
            this.emit(ERROR, "register failed")
            return
        }

        // patch name
        const meta = {
            productId: productIdentifier,
        }
        console.debug(`patch name`)
        await this.fetchJSON(`devices/${deviceId}`, {
            method: "PATCH",
            body: { name, meta },
        })

        // patch azure iot service
        const { connectionString } = resp
        const service = device.services({
            serviceClass: SRV_AZURE_IOT_HUB_HEALTH,
        })[0]
        const data = jdpack<[string]>("s", [connectionString])
        console.debug(`update connection string`)
        await service.sendCmdAsync(
            AzureIotHubHealthCmd.SetConnectionString,
            data,
            true
        )

        // all good, we're done
        this.refresh()
    }

    async refresh() {
        await Promise.all([this.refreshDevices(), this.refreshScripts()])
    }

    async refreshDevices() {
        const datas = (await this.fetchJSON("devices")) as BrainDeviceData[]
        if (!datas) return // query failed

        // merge cloud datas with local devices
        const dids = new Set(datas.map(d => d.id))
        // remove dead devices
        this._devices = this._devices?.filter(d => dids.has(d.data.id)) || []
        // update existing devices
        datas.forEach(data => {
            const device = this._devices.find(d => d.data.id === data.id)
            if (device) {
                device.data = data
            } else {
                this._devices.push(new BrainDevice(this, data))
            }
        })
        this.emit(CHANGE)
    }

    async refreshScripts() {
        const datas = (await this.fetchJSON("scripts")) as {
            headers: BrainScriptData[]
        }
        if (!datas) return // query failed

        const { headers = [] } = datas
        // merge cloud datas with local devices
        const dids = new Set(headers.map(d => d.id))
        // remove dead devices
        this._scripts = this._scripts?.filter(d => dids.has(d.data.id)) || []
        // update existing devices
        headers.forEach(data => {
            const script = this._scripts.find(d => d.data.id === data.id)
            if (script) script.data = data
            else this._scripts.push(new BrainScript(this, data))
        })
        this.emit(CHANGE)
    }

    async fetchJSON<T>(
        path: string,
        opts?: { method: "GET" | "POST" | "PATCH" | "DELETE"; body?: any }
    ) {
        if (!this.token) return undefined

        const options: RequestInit = {
            method: opts?.method || "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${btoa(this.token)}`,
            },
            body: opts?.body ? JSON.stringify(opts.body) : undefined,
        }
        const resp = await self.fetch(
            `https://${this.apiRoot}/${path}`,
            options
        )
        if (!resp.ok) {
            this.emit(ERROR, resp.statusText)
            return undefined
        }
        const json = (await resp.json()) as T
        console.debug({ json })
        return json
    }
}

export interface BrainData {
    id: string
}

export abstract class BrainNode<TData extends BrainData> extends JDNode {
    private _lastFetch = Date.now()

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

    private get apiPath() {
        return `${this.path}/${this._data.id}`
    }

    private async internalRefresh(): Promise<void> {
        const data = await this.manager.fetchJSON<TData>(this.apiPath)
        this.data = data
        this.refreshPromise = undefined
    }

    async delete() {
        await this.manager.fetchJSON<TData>(this.apiPath, {
            method: "DELETE",
        })
        await this.manager.refreshDevices()
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
        console.assert(!Array.isArray(data))
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
    private _source: string

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

    get source(): string {
        if (this._source === undefined) this.refresh()
        return this._source
    }
}
