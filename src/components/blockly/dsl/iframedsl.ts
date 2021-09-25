import { inIFrame } from "../../../../jacdac-ts/src/jdom/iframeclient"
import { randomDeviceId } from "../../../../jacdac-ts/src/jdom/random"
import { BlockDefinition, ContentDefinition } from "../toolbox"
import BlockDomainSpecificLanguage, {
    CreateBlocksOptions,
    CreateCategoryOptions,
} from "./dsl"

class IFrameDomainSpecificLanguage implements BlockDomainSpecificLanguage {
    readonly id = "iframe"
    private dslid = randomDeviceId()
    private blocks: BlockDefinition[] = []
    private category: ContentDefinition[] = []

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
        console.debug(payload)
        window.postMessage(payload, this.targetOrigin)
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
            blocks?: BlockDefinition[]
            category?: ContentDefinition[]
        }>
    ) {
        const { data } = msg
        if (data.type === "dsl" && data.dslid === this.dslid) {
            this.blocks = data.blocks || []
            this.category = data.category || []
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createBlocks(options: CreateBlocksOptions): Promise<BlockDefinition[]> {
        return new Promise(resolve => {
            this.post("blocks", {})
            resolve(this.blocks)
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createCategory(options: CreateCategoryOptions): ContentDefinition[] {
        this.post("category", {})
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
