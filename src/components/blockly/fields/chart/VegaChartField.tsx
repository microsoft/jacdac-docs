import React, { useContext } from "react"
import WorkspaceContext from "../../WorkspaceContext"
import { ReactFieldJSON } from "../ReactField"
import ReactInlineField from "../ReactInlineField"
import useBlockData from "../../useBlockData"
import VegaLiteWidget from "./VegaLiteWidget"
import { blockToVisualizationSpec } from "../../dsl/vegadsl"

function VegaChartWidget() {
    const { sourceBlock } = useContext(WorkspaceContext)
    const { data } = useBlockData(sourceBlock)

    const spec = blockToVisualizationSpec(sourceBlock, data)
    console.log({ sourceBlock, data, spec })

    return <VegaLiteWidget spec={spec} />
}

export default class VegaChartField extends ReactInlineField {
    static KEY = "jacdac_field_vega_chart"
    static EDITABLE = false

    static fromJson(options: ReactFieldJSON) {
        return new VegaChartField(options)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(options?: any) {
        super(options)
    }

    renderInlineField() {
        return <VegaChartWidget />
    }
}
