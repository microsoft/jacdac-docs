import { useTheme } from "@material-ui/core"
import { BlockSvg, Events, MetricsManager, utils } from "blockly"
import React, { useCallback, useContext, useRef, useState } from "react"
import { arrayConcatMany } from "../../../jacdac-ts/src/jdom/utils"
import { svgPointerPoint } from "../widgets/svgutils"
import BlockContext from "./BlockContext"
import useWorkspaceEvent from "./useWorkspaceEvent"

const MINI_RADIUS = 8
const MIN_FACTOR = 1.5

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
            rx={MINI_RADIUS}
            ry={MINI_RADIUS}
        />
    )
}

function MiniViewport(props: {
    scroll: MetricsManager.ContainerRegion
    view: MetricsManager.ContainerRegion
}) {
    const { view } = props
    const { top, left, width, height } = view
    const { palette } = useTheme()
    const vx = left
    const vy = top

    return (
        <rect
            x={vx}
            y={vy}
            width={width}
            height={height}
            strokeWidth={MINI_RADIUS >> 1}
            stroke={palette.text.primary}
            fill={palette.text.secondary}
            opacity={0.2}
            rx={MINI_RADIUS}
            ry={MINI_RADIUS}
        />
    )
}

export default function BlockMiniMap(props: { height: number }) {
    const { height } = props
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
        const tops: BlockSvg[] = arrayConcatMany(
            (workspace.getTopBlocks(false) as BlockSvg[]).map(top => [
                top,
                ...(top.childBlocks_ as BlockSvg[]),
            ])
        )
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
                case Events.BLOCK_CHANGE:
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
        if (event.buttons < 1) return
        const pos = svgPointerPoint(svgRef.current, event)
        // viewHeight and viewWidth are in pixels.
        const halfViewWidth = view.width / 2
        const halfViewHeight = view.height / 2
        // Put the block in the center of the visible workspace instead.
        const scrollToCenterX = pos.x - halfViewWidth + scroll.left
        const scrollToCenterY = pos.y - halfViewHeight + scroll.top
        // Convert from workspace directions to canvas directions.
        // move to center of view
        const x = -scrollToCenterX
        const y = -scrollToCenterY

        workspace.scroll(x, y)
    }
    if (!metrics || !view) return null

    const { scroll, blocks } = metrics
    const cleft = scroll.left
    const ctop = scroll.top
    const cwidth = scroll.width
    const cheight = scroll.height

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
            }}
        >
            <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${cwidth} ${cheight}`}
                width={cwidth}
                height={cheight}
                aria-label={"Blocks minimap"}
                style={{
                    height: `${height}rem`,
                    width: `${(height / cheight) * cwidth}rem`,
                }}
                role={"group"}
            >
                <g transform={`translate(${-cleft},${-ctop})`}>
                    {blocks.map(({ blockId, rect, color }) => (
                        <MiniBlock
                            key={blockId}
                            x={rect.left}
                            y={rect.top}
                            width={rect.right - rect.left}
                            height={rect.bottom - rect.top}
                            color={color}
                        />
                    ))}
                    {view && <MiniViewport scroll={scroll} view={view} />}
                </g>
                <rect
                    x={0}
                    y={0}
                    width={cwidth}
                    height={cheight}
                    fill="transparent"
                    stroke={palette.text.hint}
                    strokeWidth={12}
                    onPointerDown={handleCenterView}
                    onPointerMove={handleCenterView}
                />
            </svg>
        </div>
    )
}
