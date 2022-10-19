import { shortDeviceId } from "../../../jacdac-ts/src/jacdac"
import { CHANGE, ERROR } from "../../../jacdac-ts/src/jdom/constants"
import { JDNode } from "../../../jacdac-ts/src/jdom/node"

export const BRAIN_NODE = "brain"
export const BRAIN_DEVICE_NODE = "brainDevice"
export const BRAIN_SCRIPT_NODE = "brainScript"

export class BrainManager extends JDNode {
    root = "https://api/"
    private _devices: BrainDevice[] = []
    private _scripts: BrainScript[] = []

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
    get children(): JDNode[] {
        return [...this._devices, ...this._scripts] as JDNode[]
    }

    async fetchJSON<T>(path: string) {
        const resp = await self.fetch(`${this.root}${path}`)
        if (!resp.ok) {
            this.emit(ERROR, resp.statusText)
            return undefined
        }
        return (await resp.json()) as T
    }
}

export abstract class BrainNode<TData> extends JDNode {
    private _data: TData
    private _lastFetch: number

    constructor(
        readonly manager: BrainManager,
        readonly path: string,
        readonly brainId: string
    ) {
        super()
    }

    get id(): string {
        return `brain:${this.path}:${this.brainId}`
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
        if (!this._data) this.refresh()
        return this._data
    }

    get lastFetch(): number {
        return this._lastFetch
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
        this._lastFetch = Date.now()
        if (JSON.stringify(data) !== JSON.stringify(this._data)) {
            this._data = data
            this.emit(CHANGE)
        }
    }
}

export class BrainDevice extends BrainNode<{}> {
    constructor(readonly manager, readonly deviceId: string) {
        super(manager, "devices", deviceId)
    }
    get nodeKind(): string {
        return BRAIN_DEVICE_NODE
    }
    get name(): string {
        return shortDeviceId(this.deviceId)
    }
}

export class BrainScript extends BrainNode<{}> {
    constructor(readonly manager, readonly scriptId: string) {
        super(manager, "scripts", scriptId)
    }
    get nodeKind(): string {
        return BRAIN_SCRIPT_NODE
    }
    get name(): string {
        return this.scriptId
    }
}
