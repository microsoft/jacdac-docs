import DataTableField from "../fields/DataTableField"
import {
    BlockReference,
    CategoryDefinition,
    DATA_SCIENCE_STATEMENT_TYPE,
    DummyInputDefinition,
} from "../toolbox"
import BlockDomainSpecificLanguage from "./dsl"

const SHOW_TABLE_BLOCK = "show_type"

const colour = "#876123"
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
        },
    ],

    createCategory: () => [
        <CategoryDefinition>{
            kind: "category",
            name: "Charts",
            contents: [
                <BlockReference>{ kind: "block", type: SHOW_TABLE_BLOCK },
            ],
        },
    ],
}

export default chartDSL
