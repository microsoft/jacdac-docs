import ChartField from "../fields/ChartField"
import DataTableField from "../fields/DataTableField"
import {
    BlockReference,
    CategoryDefinition,
    DATA_SCIENCE_STATEMENT_TYPE,
    DummyInputDefinition,
    identityTransformData,
    TextInputDefinition,
} from "../toolbox"
import BlockDomainSpecificLanguage from "./dsl"

const SHOW_TABLE_BLOCK = "chart_show_table"
const SCATTERPLOT_BLOCK = "chart_scatterplot"

const colour = "#999"
const chartDSL: BlockDomainSpecificLanguage = {
    id: "chart",
    createBlocks: () => [
        {
            kind: "block",
            type: SHOW_TABLE_BLOCK,
            message0: "show table %1 %2",
            args0: [
                <DummyInputDefinition>{
                    type: "input_dummy",
                },
                {
                    type: DataTableField.KEY,
                    name: "table",
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
            type: SCATTERPLOT_BLOCK,
            message0: "scatterplot x %1 y %2 %3 %4",
            args0: [
                <TextInputDefinition>{
                    type: "field_input",
                    name: "x",
                },
                <TextInputDefinition>{
                    type: "field_input",
                    name: "y",
                },
                <DummyInputDefinition>{
                    type: "input_dummy",
                },
                {
                    type: ChartField.KEY,
                    name: "plot",
                },
            ],
            previousStatement: DATA_SCIENCE_STATEMENT_TYPE,
            nextStatement: DATA_SCIENCE_STATEMENT_TYPE,
            colour,
            template: "meta",
            inputsInline: true,
        },
    ],

    createCategory: () => [
        <CategoryDefinition>{
            kind: "category",
            name: "Charts",
            contents: [
                <BlockReference>{ kind: "block", type: SHOW_TABLE_BLOCK },
                <BlockReference>{ kind: "block", type: SCATTERPLOT_BLOCK },
            ],
            colour,
        },
    ],
}

export default chartDSL
