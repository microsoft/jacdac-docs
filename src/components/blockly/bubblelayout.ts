import { BlockSvg, WorkspaceSvg, utils } from "blockly"
import { SMap, toMap } from "../../../jacdac-ts/src/jdom/utils"

/**
 * Bubble layout adapted from Code Bubbles - https://web.eecs.utk.edu/~azh/cosc494spring2019/papers/Bragdon2010CHI_CodeBubbles.pdf
 */
export function computeBubbleLayout(
    workspace: WorkspaceSvg,
    userMoved: BlockSvg
) {
    const log = console.log
    const topBlocks = workspace.getTopBlocks(false) as BlockSvg[]

    // precompute all bounding rectangle to avoid recomputations
    const bubbles: SMap<utils.Rect> = toMap(
        topBlocks,
        b => b.id,
        b => b.getBoundingRectangle()
    )
    // just moved set starts with user moved bubble
    const justMoved: string[] = [userMoved.id]

    // determines if a bubble interset with the moved set
    const intersectWithMoved = (id: string) => {
        return justMoved.some(oid => bubbles[oid].intersects(bubbles[id]))
    }

    // find unmarked bubbles that interset with userMoved
    const unmarked: string[] = Object.keys(bubbles)
        .filter(id => id !== userMoved.id)
        .filter(id => intersectWithMoved(id))

    if (!unmarked.length) {
        log("bubbles: no initial overlap")
        return []
    }
}
