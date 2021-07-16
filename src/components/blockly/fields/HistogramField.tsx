import React, { lazy, useContext } from "react"
import WorkspaceContext from "../WorkspaceContext"
import { ReactFieldJSON } from "./ReactField"
import ReactInlineField from "./ReactInlineField"
import useBlockChartProps from "../useBlockChartProps"
import useBlockData from "../useBlockData"
import { PointerBoundary } from "./PointerBoundary"
import Suspense from "../../ui/Suspense"
import { NoSsr } from "@material-ui/core"
//import { tidyToNivo } from "./nivo"
import { CHART_HEIGHT, CHART_WIDTH } from "../toolbox"
//const ScatterPlot = lazy(() => import("./ScatterPlot"))
const VegaLite = lazy(() => import("./VegaLite"))

function HistogramWidget() {
    const { sourceBlock, dragging } = useContext(WorkspaceContext)
    const { data } = useBlockData(sourceBlock)

    // need to map data to vega-lite
    const index = sourceBlock?.getFieldValue("index")

    console.log("histogram", { index, data })

    const histogram_spec = {
        "description": "Histogram of " + index,
        "mark": {"type": "bar", "tooltip": true},
        "encoding": {
            "x": {"bin": true, "field": index},
            "y": {"aggregate": "count"}
          },
        data: { name: "values" },
      };
      
      const histogram_data = {
        "values": data
      }
      
    //   ReactDOM.render(
    //     <VegaLite spec={spec} data={histogram_data} />,
    //     document.getElementById('bar-container')
    //   );

    // if (histogram_data === undefined && Object.keys(histogram_data.values).length === 0) return null

    return (
        <NoSsr>
            <div style={{ background: "#fff", borderRadius: "0.25rem" }}>
                <PointerBoundary>
                    <Suspense>
                        <VegaLite spec={histogram_spec} data={histogram_data} />
                    </Suspense>
                </PointerBoundary>
            </div>
        </NoSsr>
    )
}

export default class HistogramField extends ReactInlineField {
    static KEY = "jacdac_field_histogram"
    static EDITABLE = false

    static fromJson(options: ReactFieldJSON) {
        return new HistogramField(options)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(options?: any) {
        super(options)
    }

    renderInlineField() {
        return <HistogramWidget />
    }
}