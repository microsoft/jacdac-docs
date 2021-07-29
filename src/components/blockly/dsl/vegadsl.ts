import DataColumnChooserField from "../fields/DataColumnChooserField"
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
            message0: "chart %1 %2 %3",
            args0: [
                <OptionsInputDefinition>{
                    type: "field_dropdown",
                    options: [
                        "area",
                        "bar",
                        "circle",
                        "line",
                        "point",
                        "rect",
                        "rule",
                        "square",
                        "text",
                        "tick",
                    ].map(s => [s, s]),
                    name: "mark",
                },
                <DummyInputDefinition>{
                    type: "input_dummy",
                },
                <StatementInputDefinition>{
                    type: "input_statement",
                    name: "fields",
                    check: VEGA_STATEMENT_TYPE,
                },
            ],
            previousStatement: DATA_SCIENCE_STATEMENT_TYPE,
            nextStatement: DATA_SCIENCE_STATEMENT_TYPE,
            colour,
            template: "meta",
            inputsInline: false,
            transformData: identityTransformData,
        },
        {
            kind: "block",
            type: VEGA_ENCODING_BLOCK,
            message0: "encoding %1 with field %2 %3 %4",
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
                },
                <DataColumnInputDefinition>{
                    type: DataColumnChooserField.KEY,
                    name: "field",
                },
                <DummyInputDefinition>{
                    type: "input_dummy",
                },
                <StatementInputDefinition>{
                    type: "input_statement",
                    name: "fields",
                    check: VEGA_ENCODING_OPTIONS_TYPE,
                },                
            ],
            previousStatement: VEGA_STATEMENT_TYPE,
            nextStatement: VEGA_STATEMENT_TYPE,
            colour,
            template: "meta",
            inputsInline: false,
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

export default vegaDsl
