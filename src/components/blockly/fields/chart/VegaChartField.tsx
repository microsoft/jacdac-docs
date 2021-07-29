import React, { useContext, useState } from "react"
import WorkspaceContext, {
    BlocklyWorkspaceWithServices,
    WorkspaceServices,
} from "../../WorkspaceContext"
import { ReactFieldJSON } from "../ReactField"
import ReactInlineField from "../ReactInlineField"
import useBlockData from "../../useBlockData"
import VegaLiteWidget from "./VegaLiteWidget"
import { blockToVisualizationSpec } from "../../dsl/chartdsl"
import { useEffect } from "react"

function VegaChartWidget() {
    const { sourceBlock, workspace } = useContext(WorkspaceContext)
    const { data } = useBlockData(sourceBlock)
    const services = (workspace as BlocklyWorkspaceWithServices)?.jacdacServices

    // track workspace changes and re-render
    const [, setWorkspaceJSON] = useState(services?.workspaceJSON)
    useEffect(
        () =>
            services?.subscribe(WorkspaceServices.WORKSPACE_CHANGE, () =>
                setWorkspaceJSON(services.workspaceJSON)
            ),
        [services]
    )

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
