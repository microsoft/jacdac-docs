import { useMemo } from "react"
import { model, paths, IModel } from "makerjs"

const MOUNTING_HOLE_RADIUS = 3.1 / 2
const CORNER_RADIUS = 1
const NOTCH_RADIUS = 1
const NOTCH_OFFSET = 1.5
const NOTCH_CORNER_RADIUS = 0.2
const NOTCH_RIGHT_OFFSET = 7
const GRID = 5
const GRID2 = GRID / 2

const EDGE_WIDTH = 5.9
const EDGE_HEIGHT = 6.6
const EDGE_CORNER_RADIUS = 0.8
const EDGE_BUTT_RADIUS = CORNER_RADIUS
const EDGE_DOUBLE_HALF_GAP = GRID - EDGE_HEIGHT / 3
const EDGE_OFFSET = 2

export default function useEC30Model(gw: number, gh: number, connectors = "") {
    return useMemo(() => {
        const w = gw * GRID * 2
        const h = gh * GRID * 2

        const aw = w + 2 * (EDGE_WIDTH - EDGE_OFFSET)
        const ah = h + 2 * (EDGE_WIDTH - EDGE_OFFSET)

        const w2 = w / 2
        const h2 = h / 2

        const eh2 = EDGE_HEIGHT / 2

        const rightm = /r(\d*)/.exec(connectors)
        const right = rightm ? parseInt(rightm[1] || "1") : 0

        const leftm = /l(\d*)/.exec(connectors)
        const left = leftm ? parseInt(leftm[1] || "1") : 0

        const corner: IModel = {
            paths: {
                // upper right corner
                rightv: new paths.Line([GRID2, 0], [GRID2, -GRID2]),
                curve: new paths.Arc([0, 0], GRID2, 0, 90),
                lefth: new paths.Line([0, GRID2], [-GRID2, GRID2]),
            },
        }

        const notch_corner: IModel = {
            paths: {
                // upper right corner
                rightv: new paths.Line(
                    [GRID2, 0],
                    [GRID2, -GRID2 + NOTCH_CORNER_RADIUS]
                ),
                curve: new paths.Arc([0, 0], GRID2, 0, 90),
                lefth: new paths.Line([0, GRID2], [-GRID2, GRID2]),
            },
        }

        const halfnotch: IModel = {
            paths: {
                halfarc: new paths.Arc(
                    [0, -NOTCH_OFFSET + NOTCH_RADIUS],
                    NOTCH_RADIUS,
                    270,
                    360
                ),
                notch_up: new paths.Line(
                    [NOTCH_RADIUS, -NOTCH_OFFSET + NOTCH_RADIUS],
                    [NOTCH_RADIUS, -NOTCH_CORNER_RADIUS]
                ),
                notch_to_right: new paths.Arc(
                    [NOTCH_RADIUS + NOTCH_CORNER_RADIUS, -NOTCH_CORNER_RADIUS],
                    NOTCH_CORNER_RADIUS,
                    90,
                    180
                ),
            },
        }
        const notch: IModel = {
            models: {
                right: model.clone(halfnotch),
                left: model.mirror(model.clone(halfnotch), true, false),
            },
        }

        const upper_ridge: IModel = {
            models: {
                notch: model.move(model.clone(notch), [
                    -w2 - GRID2 + NOTCH_RIGHT_OFFSET - NOTCH_RADIUS,
                    0,
                ]),
            },
            paths: {
                line: new paths.Line(
                    [-w2 + GRID2 + 2 * NOTCH_RADIUS + NOTCH_CORNER_RADIUS, 0],
                    [w2 - GRID2, 0]
                ),
            },
        }
        const vredge: IModel = {
            paths: {
                line: new paths.Line(
                    [EDGE_OFFSET + GRID2, -GRID2],
                    [EDGE_OFFSET + GRID2, GRID2]
                ),
            },
        }
        const hridge: IModel = {
            paths: {
                line: new paths.Line([-w2 + GRID2, 0], [w2 - GRID2, 0]),
            },
        }
        const vridge: IModel = {
            paths: {
                line: new paths.Line([0, -h2 + GRID2], [0, h2 - GRID2]),
            },
        }
        const v_left_edge_ridge: IModel = {
            paths: {
                line: new paths.Line(
                    [0, h2 - GRID2],
                    [0, left * GRID + GRID / 2]
                ),
            },
        }
        const v_right_edge_ridge: IModel = {
            paths: {
                line: new paths.Line(
                    [0, h2 - GRID2],
                    [0, right * GRID + GRID / 2]
                ),
            },
        }
        const hole: IModel = {
            paths: { hole: new paths.Circle(MOUNTING_HOLE_RADIUS) },
        }
        const holes: IModel = {
            models: {
                upper_right: model.move(model.clone(hole), [w2, h2]),
                upper_left: model.move(model.clone(hole), [-w2, h2]),
                lower_right: model.move(model.clone(hole), [-w2, -h2]),
                lower_left: model.move(model.clone(hole), [w2, -h2]),
            },
        }
        const halfedgegap: IModel = {
            paths: {
                up: new paths.Line(
                    [EDGE_WIDTH, 0],
                    [EDGE_WIDTH, eh2 - EDGE_CORNER_RADIUS]
                ),
                up_to_top: new paths.Arc(
                    [EDGE_WIDTH - EDGE_CORNER_RADIUS, eh2 - EDGE_CORNER_RADIUS],
                    EDGE_CORNER_RADIUS,
                    0,
                    90
                ),
                top: new paths.Line(
                    [EDGE_WIDTH - EDGE_CORNER_RADIUS, eh2],
                    [EDGE_BUTT_RADIUS, eh2]
                ),
                top_to_up: new paths.Arc(
                    [EDGE_BUTT_RADIUS, eh2 + EDGE_BUTT_RADIUS],
                    EDGE_BUTT_RADIUS,
                    180,
                    270
                ),
                gap_up: new paths.Line([0, eh2 + EDGE_BUTT_RADIUS], [0, GRID]),
            },
        }
        const halfedgeclose: IModel = {
            paths: {
                gap_up: new paths.Line(
                    [0, GRID],
                    [0, eh2 + EDGE_DOUBLE_HALF_GAP - EDGE_BUTT_RADIUS]
                ),
                gap_up_to_right: new paths.Arc(
                    [
                        EDGE_BUTT_RADIUS,
                        eh2 + EDGE_DOUBLE_HALF_GAP - EDGE_BUTT_RADIUS,
                    ],
                    EDGE_BUTT_RADIUS,
                    90,
                    180
                ),
                right_right: new paths.Line(
                    [EDGE_BUTT_RADIUS, eh2 + EDGE_DOUBLE_HALF_GAP],
                    [
                        EDGE_OFFSET + GRID2 - CORNER_RADIUS,
                        eh2 + EDGE_DOUBLE_HALF_GAP,
                    ]
                ),
                right_to_up: new paths.Arc(
                    [
                        EDGE_OFFSET + GRID2 - CORNER_RADIUS,
                        eh2 + EDGE_DOUBLE_HALF_GAP + CORNER_RADIUS,
                    ],
                    CORNER_RADIUS,
                    270,
                    360
                ),
                up_again: new paths.Line(
                    [
                        EDGE_OFFSET + GRID2,
                        eh2 + EDGE_DOUBLE_HALF_GAP + CORNER_RADIUS,
                    ],
                    [EDGE_OFFSET + GRID2, (GRID * 3) / 2]
                ),
            },
        }
        const halfedge: IModel = {
            models: {
                gap: model.clone(halfedgegap),
                close: model.clone(halfedgeclose),
            },
        }
        const edge: IModel = {
            models: {
                up: model.clone(halfedge),
                down: model.move(
                    model.mirror(model.clone(halfedge), false, true),
                    [0, 0]
                ),
            },
        }
        const double_edge: IModel = {
            models: {
                up: model.clone(halfedgegap),
                down: model.move(
                    model.mirror(model.clone(halfedgegap), false, true),
                    [0, 0]
                ),
            },
        }

        const generateEdge = (n: number): IModel => {
            let r: IModel
            switch (n) {
                case 0:
                    r = model.clone(vredge)
                    break
                case 1:
                    r = model.clone(edge)
                    break
                default: {
                    const roff = (n - 1) * GRID
                    const start = model.move(model.clone(halfedgeclose), [
                        0,
                        roff,
                    ])
                    const end = model.mirror(model.clone(start), false, true)
                    r = {
                        models: {
                            start,
                        },
                    }
                    for (let i = 0; i < n; ++i) {
                        r.models[`edge_${i}`] = model.move(
                            model.clone(double_edge),
                            [0, i * GRID * 2 - roff]
                        )
                    }
                    r.models["end"] = end
                }
            }
            return r
        }
        const right_edge = generateEdge(right)
        const left_edge = model.mirror(generateEdge(left), true, false)

        const pcb: IModel = {
            models: {
                upper_right_corner: model.move(model.clone(corner), [w2, h2]),
                upper_ridge: model.move(model.clone(upper_ridge), [
                    0,
                    h2 + GRID2,
                ]),
                upper_left_corner: model.move(
                    model.rotate(model.clone(notch_corner), 90),
                    [-w2, h2]
                ),

                left_upper_right: model.move(model.clone(v_left_edge_ridge), [
                    -w2 - GRID2,
                    0,
                ]),
                left_edge: model.move(model.clone(left_edge), [
                    -w2 + EDGE_OFFSET,
                    0,
                ]),
                left_lower_right: model.move(
                    model.mirror(model.clone(v_left_edge_ridge), false, true),
                    [-w2 - GRID2, 0]
                ),

                lower_left_corner: model.move(
                    model.rotate(model.clone(corner), 180),
                    [-w2, -h2]
                ),
                lower_ridge: model.move(model.clone(hridge), [0, -h2 - GRID2]),
                lower_right_corner: model.move(
                    model.rotate(model.clone(corner), -90),
                    [w2, -h2]
                ),

                right_upper_right: model.move(model.clone(v_right_edge_ridge), [
                    w2 + GRID2,
                    0,
                ]),
                right_edge: model.move(model.clone(right_edge), [
                    w2 - EDGE_OFFSET,
                    0,
                ]),
                right_lower_right: model.move(
                    model.mirror(model.clone(v_right_edge_ridge), false, true),
                    [w2 + GRID2, 0]
                ),
            },
        }

        const pcbWithHoles = model.combineSubtraction(
            model.clone(pcb),
            model.clone(holes)
        )

        const frame = model.move(pcbWithHoles, [aw / 2, ah / 2])
        return frame
    }, [gw, gh, connectors])
}
