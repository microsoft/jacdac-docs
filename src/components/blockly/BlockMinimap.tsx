import { BlockSvg, Events, MetricsManager, utils } from "blockly"
import React, { useCallback, useContext, useRef, useState } from "react"
import { useDebounce } from "use-debounce"
import { svgPointerPoint } from "../widgets/svgutils"
import SvgWidget from "../widgets/SvgWidget"
import BlockContext from "./BlockContext"
import useWorkspaceEvent from "./useWorkspaceEvent"

const MINI_RADIUS = 4
function MiniBlock(props: {
    x: number
    y: number
    width: number
    height: number
    color: string
}) {
    const { x, y, width, height, color } = props
    return (
        <rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill={color}
            r={MINI_RADIUS}
        />
    )
}

function MiniViewport(props: {
    scroll: MetricsManager.ContainerRegion
    view: MetricsManager.ContainerRegion
}) {
    const { view, scroll } = props
    const { top, left, width, height } = view
    const { width: sw, height: sh } = scroll
    const vx = Math.max(0, left)
    const vy = Math.max(0, top)
    const vw = Math.min(width, sw - vx)
    const vh = Math.min(height, sh - vy)

    return (
        <rect
            x={vx}
            y={vy}
            width={vw}
            height={vh}
            strokeWidth={MINI_RADIUS}
            stroke={"#999"}
            fill="transparent"
            r={MINI_RADIUS}
        />
    )
}

export default function BlockMiniMap() {
    const { workspace } = useContext(BlockContext)
    const svgRef = useRef<SVGSVGElement>()
    const [metrics, setMetrics] = useState<{
        scroll: MetricsManager.ContainerRegion
        contents: MetricsManager.ContainerRegion
        blocks: {
            blockId: string
            rect: utils.Rect
            color: string
        }[]
    }>()
    const [view, setView] = useState<MetricsManager.ContainerRegion>()
    const handleMetrics = () => {
        const metricsManager = workspace.getMetricsManager()
        console.log({ metrics: metricsManager.getMetrics() })
        const view = metricsManager.getViewMetrics(true)
        const contents = metricsManager.getContentMetrics(true)
        const scroll = metricsManager.getScrollMetrics(true, view, contents)
        const tops = workspace.getTopBlocks(false) as BlockSvg[]
        const blocks = tops.map(b => ({
            blockId: b.id,
            rect: b.getBoundingRectangle(),
            color: b.getColour(),
        }))
        setMetrics({ scroll, contents, blocks })
        setView(view)
    }
    const handleView = () => {
        const metricsManager = workspace.getMetricsManager()
        const view = metricsManager.getViewMetrics(true)
        setView(view)
    }
    const handleChange = useCallback(
        (event: { type: string } & Events.Abstract) => {
            const { type } = event
            switch (type) {
                case Events.BLOCK_CREATE:
                case Events.BLOCK_DELETE:
                case Events.BLOCK_MOVE:
                case Events.FINISHED_LOADING:
                    handleMetrics()
                    break
                case Events.VIEWPORT_CHANGE:
                    handleView()
                    break
            }
        },
        [workspace]
    )
    useWorkspaceEvent(workspace, handleChange)
    const handleCenterView = (event: React.PointerEvent<Element>) => {
        const pos = svgPointerPoint(svgRef.current, event)
        workspace.scroll(pos.x, pos.y)
        console.log({ pos })
        // TODO click
    }
    if (!metrics?.blocks?.length || !view) return null

    const { scroll, contents, blocks } = metrics
    const { width, height } = scroll

    console.log({ scroll, view })
    if (contents.width <= view.width && contents.height <= view.height)
        return null

    return (
        <SvgWidget size="4rem" width={width} height={height} svgRef={svgRef}>
            <rect
                x={0}
                y={0}
                width={width}
                height={height}
                fill="transparent"
                onPointerDown={handleCenterView}
            />
            {view && <MiniViewport scroll={scroll} view={view} />}
            {blocks.map(({ blockId, rect, color }) => (
                <MiniBlock
                    key={blockId}
                    x={rect.left}
                    y={rect.top}
                    width={rect.right - rect.left}
                    height={-rect.top + rect.bottom}
                    color={color}
                />
            ))}
        </SvgWidget>
    )
}
