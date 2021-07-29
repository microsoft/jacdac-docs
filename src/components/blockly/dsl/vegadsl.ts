import { Block } from "blockly"
import type { VisualizationSpec } from "react-vega"
import type { AnyMark } from "vega-lite/build/src/mark"
import VegaChartField from "../fields/chart/VegaChartField"
import DataColumnChooserField from "../fields/DataColumnChooserField"
import DataPreviewField from "../fields/DataPreviewField"
import { tidyHeaders, tidyResolveFieldColumn } from "../fields/tidy"
import {
    BlockReference,
    CategoryDefinition,
    DataColumnInputDefinition,
    DATA_SCIENCE_STATEMENT_TYPE,
    DummyInputDefinition,
    identityTransformData,
    OptionsInputDefinition,
    StatementInputDefinition,
} from "../toolbox"
import BlockDomainSpecificLanguage from "./dsl"
import { paletteColorByIndex } from "./palette"

const VEGA_LAYER_BLOCK = "vega_layer"
const VEGA_ENCODING_BLOCK = "vega_encoding"
const VEGA_STATEMENT_TYPE = "vegaStatementType"
const VEGA_ENCODING_OPTIONS_TYPE = "vegaEncodingOptionStatementType"

const colour = paletteColorByIndex(5)
const vegaDsl: BlockDomainSpecificLanguage = {
    id: "vega",
    createBlocks: () => [
        {
            kind: "block",
            type: VEGA_LAYER_BLOCK,
            message0: "chart %1 %2 %3 %4 %5 %6",
            args0: [
                <OptionsInputDefinition>{
                    type: "field_dropdown",
                    options: [
                        "arc",
                        "area",
                        "bar",
                        "boxplot",
                        "circle",
                        "errorband",
                        "errorbar",
                        "line",
                        "point",
                        "rect",
                        "rule",
                        "square",
                        "text",
                        "tick",
                        "trail",
                    ].map(s => [s, s]),
                    name: "mark",
                },
                {
                    type: DataPreviewField.KEY,
                    name: "preview",
                },
                <DummyInputDefinition>{
                    type: "input_dummy",
                },
                <StatementInputDefinition>{
                    type: "input_statement",
                    name: "fields",
                    check: VEGA_STATEMENT_TYPE,
                },
                <DummyInputDefinition>{
                    type: "input_dummy",
                },
                {
                    type: VegaChartField.KEY,
                    name: "chart",
                },
            ],
            previousStatement: DATA_SCIENCE_STATEMENT_TYPE,
            nextStatement: DATA_SCIENCE_STATEMENT_TYPE,
            colour,
            template: "meta",
            inputsInline: false,
            dataPreviewField: false,
            transformData: identityTransformData,
        },
        {
            kind: "block",
            type: VEGA_ENCODING_BLOCK,
            message0: "encoding %1 as %2",
            args0: [
                <OptionsInputDefinition>{
                    type: "field_dropdown",
                    options: [
                        "x",
                        "y",
                        "x2",
                        "y2",
                        "xError",
                        "yError",
                        "xError2",
                        "yError2",
                        "theta",
                        "theta2",
                        "radius",
                        "radius2",
                    ].map(s => [s, s]),
                    name: "channel",
                },
                <DataColumnInputDefinition>{
                    type: DataColumnChooserField.KEY,
                    name: "field",
                },
            ],
            previousStatement: VEGA_STATEMENT_TYPE,
            nextStatement: VEGA_STATEMENT_TYPE,
            colour,
            template: "meta",
            inputsInline: false,
            dataPreviewField: false,
            transformData: identityTransformData,
        },
    ],
    createCategory: () => [
        <CategoryDefinition>{
            kind: "category",
            name: "Vega",
            contents: [
                <BlockReference>{ kind: "block", type: VEGA_LAYER_BLOCK },
                <BlockReference>{ kind: "block", type: VEGA_ENCODING_BLOCK },
            ],
            colour,
        },
    ],
}

export function blockToVisualizationSpec(
    sourceBlock: Block,
    // eslint-disable-next-line @typescript-eslint/ban-types
    data: object[]
): VisualizationSpec {
    const { headers, types } = tidyHeaders(data)
    const mark: AnyMark = sourceBlock.getFieldValue("mark")
    const spec: VisualizationSpec = {
        mark,
        encoding: {},
        data: { name: "values" },
    }

    let child = sourceBlock.getInputTargetBlock("fields")
    while (child) {
        switch (child.type) {
            case VEGA_ENCODING_BLOCK: {
                const channel = child.getFieldValue("channel")
                const field = tidyResolveFieldColumn(data, child, "field")
                console.log({ child, channel, field })
                if (channel && field) {
                    const type = types[headers.indexOf(field)]
                    spec.encoding[channel] = {
                        field,
                        type: type === "number" ? "quantitative" : "nominal",
                    }
                }
                break
            }
        }

        child = child.getNextBlock()
    }

    return spec
}

export default vegaDsl
