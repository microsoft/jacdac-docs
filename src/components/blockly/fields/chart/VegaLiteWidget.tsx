import React, { lazy, useContext, useMemo, useRef, useState } from "react"
import WorkspaceContext from "../../WorkspaceContext"
import useBlockData from "../../useBlockData"
import { PointerBoundary } from "../PointerBoundary"
import Suspense from "../../../ui/Suspense"
import { NoSsr } from "@material-ui/core"
import { CHART_HEIGHT, CHART_SVG_MAX_ITEMS, CHART_WIDTH } from "../../toolbox"
import type { View, VisualizationSpec } from "react-vega"
import type { DataSliceOptions } from "../../../../workers/data/dist/node_modules/data.worker"
import useEffectAsync from "../../../useEffectAsync"
import { tidyResolveHeader, tidySlice } from "./../tidy"
import { JSONTryParse } from "../../../../../jacdac-ts/src/jdom/utils"
import { humanify } from "../../../../../jacdac-ts/jacdac-spec/spectool/jdspec"

const VegaLite = lazy(() => import("./VegaLite"))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function clone(v: any) {
    return v ? JSON.parse(JSON.stringify(v)) : v
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isKV(v: any) {
    return !!v && typeof v === "object" && !Array.isArray(v)
}
// eslint-disable-next-line @typescript-eslint/ban-types
function jsonMergeFrom(trg: object, src: object) {
    if (!src) return
    Object.keys(src).forEach(k => {
        if (isKV(trg[k]) && isKV(src[k])) jsonMergeFrom(trg[k], src[k])
        else trg[k] = clone(src[k])
    })
}

const ACTIONS = {
    export: { png: true, svg: true },
    source: false,
    compiled: false,
    editor: false,
}
export default function VegaLiteWidget(props: {
    spec: VisualizationSpec
    slice?: DataSliceOptions
}) {
    const { spec, slice } = props
    const { sourceBlock } = useContext(WorkspaceContext)
    const { data } = useBlockData(sourceBlock)
    // eslint-disable-next-line @typescript-eslint/ban-types
    const [vegaData, setVegaData] = useState<{ values: object[] }>(undefined)
    const viewRef = useRef<View>()

    const group = tidyResolveHeader(data, sourceBlock?.getFieldValue("group"))
    const settings = JSONTryParse(sourceBlock?.getFieldValue("settings"))
    const handleNewView = (view: View) => (viewRef.current = view)

    // TODO merge json
    const fullSpec = useMemo(() => {
        if (!settings) return spec
        const s = clone(spec)
        if (s.encoding)
            Object.values(s.encoding)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .filter((e: any) => !e.title)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .forEach((e: any) => (e.title = humanify(e.field)))
        jsonMergeFrom(s, settings)
        if (
            Object.values(s.encoding || {}).some(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (encoding: any) =>
                    encoding?.scale?.domainMin !== undefined ||
                    encoding?.scale?.domainMax !== undefined
            )
        ) {
            s.mark.clip = true
        }
        if (group) {
            s.encoding.color = {
                field: group,
                title: humanify(group),
                type: "nominal",
            }
            s.encoding.strokeDash = {
                field: group,
                title: humanify(group),
                type: "nominal",
            }
        }
        return s
    }, [spec, group, settings])

    useEffectAsync(
        async mounted => {
            if (!slice) {
                setVegaData({ values: data })
            } else {
                const sliced = await tidySlice(data, slice)
                if (mounted()) setVegaData({ values: sliced })
            }
        },
        [data]
    )

    if (!vegaData?.values?.length || !spec) return null

    const renderer =
        vegaData.values.length < CHART_SVG_MAX_ITEMS ? "svg" : "canvas"
    return (
        <NoSsr>
            <div style={{ background: "#fff", borderRadius: "0.25rem" }}>
                <PointerBoundary>
                    <Suspense>
                        <VegaLite
                            actions={ACTIONS}
                            width={CHART_WIDTH}
                            height={CHART_HEIGHT}
                            spec={fullSpec}
                            data={vegaData}
                            renderer={renderer}
                            tooltip={true}
                            onNewView={handleNewView}
                        />
                    </Suspense>
                </PointerBoundary>
            </div>
        </NoSsr>
    )
}

/**
 * https://github.com/vega/vega-embed/issues/733
actions {
                                export: { png: true, svg: true },
                                source: false,
                                compiled: false,
                                editor: false,
                            }
 */
