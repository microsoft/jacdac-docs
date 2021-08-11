import React, { lazy, useEffect } from "react"
import Suspense from "../ui/Suspense"

const VegaLite = lazy(() => import("../blockly/fields/chart/VegaLite"))

export default function LossAccChart(props: {
    lossData: number[]
    accData: number[]
    timestamp: number
}) {
    const { lossData, accData, timestamp } = props

    return (
        <Suspense>
            <VegaLite
                spec={{
                    title: { timestamp },
                    data: { values: accData },
                    mark: {
                        type: "line",
                        interpolate: "monotone",
                    },
                    encoding: {
                        x: { field: "epoch", type: "temporal" },
                        y: {
                            field: "acc",
                            type: "quantitative",
                        },
                        color: {
                            field: "dataset",
                            type: "nominal",
                        },
                    },
                }}
            />
            <VegaLite
                spec={{
                    title: { timestamp },
                    data: { values: lossData },
                    mark: {
                        type: "line",
                        interpolate: "monotone",
                    },
                    encoding: {
                        x: { field: "epoch", type: "temporal" },
                        y: {
                            field: "loss",
                            type: "quantitative",
                        },
                        color: {
                            field: "dataset",
                            type: "nominal",
                        },
                    },
                }}
            />
        </Suspense>
    )
}
