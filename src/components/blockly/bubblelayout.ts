import { BlockSvg, WorkspaceSvg, Rect, Block } from "blockly"
import { SMap, toMap } from "../../../jacdac-ts/src/jdom/utils"

/**
 * Bubble layout adapted from Code Bubbles - https://web.eecs.utk.edu/~azh/cosc494spring2019/papers/Bragdon2010CHI_CodeBubbles.pdf
 */
export function computeBubbleLayout(
    workspace: WorkspaceSvg,
    userMoved: BlockSvg
) {
    const topBlocks = workspace.getTopBlocks(false) as BlockSvg[]

    // precompute all bounding rectangle to avoid recomputations
    const bubbles = toMap(
        topBlocks,
        b => b.id,
        b => b.getBoundingRectangle()
    )
    // just moved set starts with user moved bubble
    const justMoved = new Set([userMoved.id])
    // find unmarked bubbles that interset with userMoved
    const unmarked = new Set(
        Object.keys(bubbles).filter(id => !justMoved.has(id))
    )
}
