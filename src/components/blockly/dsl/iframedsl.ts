import { Block, Workspace } from "blockly"
import { inIFrame } from "../../../../jacdac-ts/src/jdom/iframeclient"
import { randomDeviceId } from "../../../../jacdac-ts/src/jdom/random"
import { workspaceToJSON } from "../jsongenerator"
import {
    BlockDataSet,
    BlockDataSetTransform,
    BlockDefinition,
    ContentDefinition,
} from "../toolbox"
import BlockDomainSpecificLanguage, {
    CreateBlocksOptions,
    CreateCategoryOptions,
} from "./dsl"

class IFrameDomainSpecificLanguage implements BlockDomainSpecificLanguage {
    readonly id = "iframe"
    private dslid = randomDeviceId()
    private blocks: BlockDefinition[] = []
    private category: ContentDefinition[] = []
    private pendings: Record<string, (data: any) => void> = {}

    constructor(readonly targetOrigin: string) {
        this.handleMessage = this.handleMessage.bind(this)
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    private post(action: string, extras?: object) {
        const payload = {
            id: Math.random() + "",
            type: "dsl",
            dslid: this.dslid,
            action,
            ...(extras || {}),
        }
        window.parent.postMessage(payload, this.targetOrigin)
        return payload
    }

    mount() {
        window.addEventListener("message", this.handleMessage)
        this.post("mount")
        return () => {
            this.post("unmount")
            window.removeEventListener("message", this.handleMessage)
        }
    }

    private handleMessage(
        msg: MessageEvent<{
            type: "dsl" | unknown
            dslid?: string
            id: string
        }>
    ) {
        const { data } = msg
        if (data.type === "dsl" && data.dslid === this.dslid) {
            const { id } = data
            const pending = this.pendings[id]
            delete this.pendings[id]
            pending?.(data)
        }
    }

    private createTransformData(): BlockDataSetTransform {
        return (blockWithServices, dataset) =>
            new Promise<BlockDataSet>(resolve => {
                const workspace = workspaceToJSON(
                    blockWithServices.workspace,
                    [], // TODO pass dsls
                    [blockWithServices]
                )
                const { id } = this.post("transform", {
                    blockId: blockWithServices.id,
                    workspace,
                    dataset,
                })
                setTimeout(() => {
                    if (this.pendings[id]) {
                        delete this.pendings[id]
                        console.debug(`iframedsl: transform timeouted`)
                        resolve(undefined)
                    }
                }, 10000)
                this.pendings[id] = data => {
                    const { dataset } = data
                    console.debug(`iframedsl: transform`, { dataset })
                    resolve(dataset)
                }
            })
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createBlocks(options: CreateBlocksOptions): Promise<BlockDefinition[]> {
        console.debug(`iframedsl: query blocks`)
        return new Promise<BlockDefinition[]>(resolve => {
            const { id } = this.post("blocks", {})
            setTimeout(() => {
                if (this.pendings[id]) {
                    delete this.pendings[id]
                    console.debug(`iframedsl: no blocks returned, giving up`)
                    resolve(this.blocks)
                }
            }, 1000)
            this.pendings[id] = data => {
                console.debug(`iframedsl: received blocks`, { data })
                this.blocks = data.blocks
                this.category = data.category
                const transformData = this.createTransformData()
                this.blocks.forEach(
                    block => (block.transformData = transformData)
                )
                resolve(this.blocks)
            }
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createCategory(options: CreateCategoryOptions): ContentDefinition[] {
        return this.category
    }
}

/**
 * Creates an iframe DSL if applicable
 * @param targetOrigin
 * @returns
 */
export function createIFrameDSL(
    targetOrigin = "*"
): BlockDomainSpecificLanguage {
    return inIFrame() && new IFrameDomainSpecificLanguage(targetOrigin)
}
