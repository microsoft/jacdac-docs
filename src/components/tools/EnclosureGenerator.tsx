import React, { lazy, useEffect, useMemo, useState } from "react"

import { primitives, transforms, booleans } from "@jscad/modeling"
const { cuboid, cylinder, roundedCuboid } = primitives
const { translate, rotateZ } = transforms
const { union, subtract } = booleans
import stlSerializer from "@jscad/stl-serializer"

import { Grid } from "@material-ui/core"
import Suspense from "../ui/Suspense"

const connectorSpecs = {
    jacdac: {
        width: 10,
        height: 5,
    },
    usbc: {
        width: 8,
        height: 3.5,
    },
}
const dirAngles = {
    top: 0,
    bottom: 180.000001,
    left: -90,
    right: 90,
}

const ringGap = 2.5
const ringRadius = 1
const pcbWidth = 1.6

const wall = pcbWidth
const wallRadius = wall / 2
const segments = 32
const snapRadius = wall
const mountRadius = 4
const mountRoundRadius = 0.5
const mountCenterRadius = 1
const mountHeight = 5
const snapHeight = 3

export interface Enclosure {
    name: string
    box: {
        width: number
        height: number
        depth: number
    }
    cover: {
        mounts: boolean
    }
    rings: { x: number; y: number }[]
    connectors: {
        x: number
        y: number
        dir: "top" | "bottom" | "left" | "right"
        type: "jacdac" | "usbc"
    }[]
}

const modules: Enclosure[] = [
    {
        name: "light sensor",
        box: {
            width: 25,
            height: 27.5,
            depth: 10,
        },
        cover: {
            mounts: true,
        },
        rings: [
            {
                x: 7.5,
                y: 7.5,
            },
            {
                x: -7.5,
                y: -7.5,
            },
            {
                x: -7.5,
                y: 7.5,
            },
            {
                x: 7.5,
                y: -7.5,
            },
        ],
        connectors: [
            {
                x: 0,
                y: 7.5,
                dir: "top",
                type: "jacdac",
            },
            {
                x: 0,
                y: 7.5,
                dir: "bottom",
                type: "jacdac",
            },
        ],
    },
    {
        name: "demo",
        box: {
            width: 40,
            height: 60,
            depth: 10,
        },
        cover: {
            mounts: false,
        },
        rings: [
            {
                x: 5,
                y: 12.5,
            },
            {
                x: -5,
                y: -12.5,
            },
            {
                x: -5,
                y: 12.5,
            },
            {
                x: 5,
                y: -12.5,
            },
        ],
        connectors: [
            {
                x: 0,
                y: 26,
                dir: "top",
                type: "jacdac",
            },
            {
                x: 16,
                y: 0,
                dir: "left",
                type: "jacdac",
            },
            {
                x: -16,
                y: 0,
                dir: "right",
                type: "jacdac",
            },
            {
                x: -16,
                y: connectorSpecs.jacdac.width,
                dir: "right",
                type: "jacdac",
            },
            {
                x: 0,
                y: -26,
                dir: "bottom",
                type: "usbc",
            },
        ],
    },
]

const convert = m => {
    const { box, rings, connectors, cover } = m
    const { width, height, depth } = box

    // box
    let model = union(
        roundedCuboid({
            size: [width + wall * 2, height + wall * 2, depth + wall * 2],
            center: [0, 0, depth / 2 + wall],
            roundRadius: wallRadius * 2,
            segments,
        }),
        cuboid({
            size: [width + wall * 2, height + wall * 2, wall],
            center: [0, 0, wall / 2],
        })
    )

    // add screw mounts
    const post = (x, y, sign) =>
        translate(
            [x, y, mountHeight / 2],
            subtract(
                subtract(
                    union(
                        cylinder({
                            radius: mountRadius,
                            height: mountHeight,
                        }),
                        cuboid({
                            size: [
                                mountRadius * 2,
                                mountRadius + wall,
                                mountHeight - mountRoundRadius * 2,
                            ],
                            center: [
                                0,
                                (-sign * (mountRadius + wall)) / 2,
                                -mountRoundRadius,
                            ],
                        })
                    ),
                    cylinder({
                        radius: mountRadius - wall,
                        height: mountHeight + wall,
                        center: [0, 0, wall],
                    })
                ),
                cylinder({
                    radius: mountCenterRadius,
                    height: mountHeight,
                    center: [0, 0, -wall],
                })
            )
        )
    model = union(
        model,
        post(
            -width / 2 + mountRadius - wall,
            -height / 2 - mountRadius - wall / 2,
            -1
        )
    )
    model = union(
        model,
        post(
            width / 2 - mountRadius + wall,
            height / 2 + mountRadius + wall / 2,
            1
        )
    )
    model = union(
        model,
        post(
            -width / 2 + mountRadius - wall,
            height / 2 + mountRadius + wall / 2,
            1
        )
    )
    model = union(
        model,
        post(
            width / 2 - mountRadius + wall,
            -height / 2 - mountRadius - wall / 2,
            -1
        )
    )

    // empty box
    const innerbox = roundedCuboid({
        size: [width, height, depth + 3 * wall],
        center: [0, 0, depth / 2 + 2 * wall],
        segments,
    })
    model = subtract(model, innerbox)

    // substract top
    model = subtract(
        model,
        cuboid({
            size: [width + wall, height + wall, wall],
            center: [0, 0, depth + wall + wall / 2],
        })
    )

    // remove jacdac connectors
    const connector = (x, y, dir, type) => {
        const conn = connectorSpecs[type]
        const dirAngle = (dirAngles[dir] / 180) * Math.PI
        const d = 24
        return translate(
            [x, y, snapHeight + pcbWidth / 2],
            rotateZ(
                dirAngle,
                roundedCuboid({
                    size: [conn.width, d, conn.height],
                    roundRadius: 1,
                    segments: 32,
                    center: [0, d / 2, conn.height / 2],
                })
            )
        )
    }
    model = connectors.reduce(
        (m, c) => subtract(m, connector(c.x, c.y, c.dir, c.type)),
        model
    )

    // add snap fit ring mounts
    const snap = (x, y, h, hc) =>
        translate(
            [x, y, wall],
            union(
                cylinder({
                    radius: snapRadius,
                    height: h,
                    center: [0, 0, h / 2],
                }),
                cylinder({
                    radius: ringRadius,
                    height: h + hc,
                    center: [0, 0, (h + pcbWidth) / 2],
                })
            )
        )
    const mounts = [
        ...rings.map(p => ({ ...p, h: snapHeight, hc: pcbWidth })),
        ...(cover.mounts
            ? [
                  {
                      x: -width / 2 + ringGap,
                      y: -height / 2 + ringGap,
                  },
                  {
                      x: width / 2 - ringGap,
                      y: -height / 2 + ringGap,
                  },
                  {
                      x: width / 2 - ringGap,
                      y: height / 2 - ringGap,
                  },
                  {
                      x: -width / 2 + ringGap,
                      y: height / 2 - ringGap,
                  },
              ].map(p => ({ ...p, h: depth, hc: wall }))
            : []),
    ]
    model = mounts.reduce(
        (m, ring) => union(m, snap(ring.x, ring.y, ring.h, ring.hc)),
        model
    )

    return model
}

/*
const main = () => {
    let x = -modules.reduce((prev, m) => prev + m.box.width, 0) / 2
    return modules.map(m => translate([(x += m.box.width), 0, 0], convert(m)))
}
*/

const ModelViewer = lazy(() => import("../home/models/ModelViewer"))
const STLModel = lazy(() => import("../home/models/STLModel"))

export default function EnclosureGenerator() {
    const module = useMemo(() => modules[0], [])
    const [url, setUrl] = useState<string>("")
    const geometry = useMemo(() => {
        console.log(`compute stl`)
        const geometry = convert(module)
        return geometry
    }, [module])

    useEffect(() => {
        console.log(`render stl`)
        const rawData = stlSerializer.serialize(
            { binary: false } as any,
            geometry
        )
        const blob = new Blob(rawData)
        const newUrl = URL.createObjectURL(blob)
        setUrl(newUrl)
        return () => URL.revokeObjectURL(newUrl)
    }, [geometry])
    return (
        <Grid container spacing={1}>
            {url && (
                <Grid item xs={12}>
                    <Suspense>
                        <ModelViewer responsive={true}>
                            <STLModel url={url} />
                        </ModelViewer>
                    </Suspense>
                </Grid>
            )}
            <Grid item>
                <pre>{JSON.stringify(geometry, null, 2)}</pre>
            </Grid>
        </Grid>
    )
}
