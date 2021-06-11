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
    const marked: string[] = [userMoved.id]

    // determines if a bubble interset with the moved set
    const intersectWithMarked = (id: string) => {
        return marked.some(oid => bubbles[oid].intersects(bubbles[id]))
    }

    // find unmarked bubbles that interset with userMoved
    const unmarked: string[] = Object.keys(bubbles)
        .filter(id => id !== userMoved.id)
        .filter(id => intersectWithMarked(id))

    if (!unmarked.length) {
        log("bubbles: no initial overlap")
        return []
    }

    // Otherwise, the recursive case of the algorithm starts

    // generates 4 axis-aligned movements  (up, down, left, right) which move i the minimum distance such that i no longer intersects any marked bubbles.
    const next = unmarked.shift()
    const nextr = bubbles[next]
    const { left, right, top, bottom } = nextr

    const mtop = marked.reduce(
        (prev, m) => Math.max(prev, bubbles[m].top - top),
        0
    )
    const mbottom = marked.reduce(
        (prev, m) => Math.max(prev, bubbles[m].bottom - bottom),
        0
    )
    const mleft = marked.reduce(
        (prev, m) => Math.max(prev, bubbles[m].left - left),
        0
    )
    const mright = marked.reduce(
        (prev, m) => Math.max(prev, bubbles[m].right - right),
        0
    )
    console.log("4axis", { nextr, mtop, mbottom, mleft, mright })

    // Movements that are in the opposite direction to that moved by
    // any bubbles in J that intersect i are pruned (except on the initial call). 
    // The 2 movements with the largest Euclidian distances are kept, the rest are pruned.
}
