import { useTheme } from "@material-ui/core"
import { BlockSvg, Events, MetricsManager, utils } from "blockly"
import React, { useCallback, useContext, useRef, useState } from "react"
import { svgPointerPoint } from "../widgets/svgutils"
import SvgWidget from "../widgets/SvgWidget"
import BlockContext from "./BlockContext"
import useWorkspaceEvent from "./useWorkspaceEvent"

const MINI_RADIUS = 8
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
            y={y + height}
            width={width}
            height={height}
            fill={color}
            rx={MINI_RADIUS}
            ry={MINI_RADIUS}
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
    const { palette } = useTheme()
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
            strokeWidth={MINI_RADIUS >> 1}
            stroke={palette.text.secondary}
            fill="transparent"
            rx={MINI_RADIUS}
            ry={MINI_RADIUS}
        />
    )
}

export default function BlockMiniMap() {
    const { workspace } = useContext(BlockContext)
    const svgRef = useRef<SVGSVGElement>()
    const { palette } = useTheme()
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

        // see workspace.centerOnBlock
        const metrics = workspace.getMetrics()
        // viewHeight and viewWidth are in pixels.
        const halfViewWidth = metrics.viewWidth / 2
        const halfViewHeight = metrics.viewHeight / 2
        // Put the block in the center of the visible workspace instead.
        const scrollToCenterX = pos.x - halfViewWidth
        const scrollToCenterY = pos.y - halfViewHeight
        // Convert from workspace directions to canvas directions.
        const x = -scrollToCenterX
        const y = -scrollToCenterY

        workspace.scroll(x, y)
    }
    if (!metrics?.blocks?.length || !view) return null

    const { scroll, contents, blocks } = metrics
    const { width, height } = scroll

    console.log({ scroll, view })
    if (contents.width <= view.width && contents.height <= view.height)
        return null

    return (
        <SvgWidget
            size="clamp(10rem, 5vh)"
            width={width}
            height={height}
            svgRef={svgRef}
        >
            <rect
                x={0}
                y={0}
                width={width}
                height={height}
                fill="transparent"
                stroke={palette.text.hint}
                onPointerDown={handleCenterView}
            />
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
            {view && <MiniViewport scroll={scroll} view={view} />}
        </SvgWidget>
    )
}
