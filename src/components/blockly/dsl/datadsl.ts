import { BlockSvg } from "blockly"
import DataColumnChooserField from "../fields/DataColumnChooserField"
import {
    BlockDefinition,
    BlockReference,
    CategoryDefinition,
    DATA_SCIENCE_STATEMENT_TYPE,
    LabelDefinition,
    OptionsInputDefinition,
    VariableInputDefinition,
} from "../toolbox"
import BlockDomainSpecificLanguage from "./dsl"
import { ArrangeMessage, transformData } from "./workers/data.worker"

const DATA_SCIENCE_ARRANGE_BLOCK = "data_science_arrange"
const DATA_SCIENCE_ADD_VARIABLE_CALLBACK = "data_science_add_variable"
const DATA_SCIENCE_DATAVARIABLE_READ_BLOCK = "data_science_dataset_read"
const DATA_SCIENCE_DATAVARIABLE_WRITE_BLOCK = "data_science_dataset_write"
const DATA_TABLE_TYPE = "DataTable"

const colour = "#777"
const dataDsl: BlockDomainSpecificLanguage = {
    id: "dataScience",
    createBlocks: () => [
        {
            kind: "block",
            type: "data_science_arrange",
            message0: "arrange %1 %2",
            colour,
            args0: [
                {
                    type: DataColumnChooserField.KEY,
                    name: "column",
                },
                <OptionsInputDefinition>{
                    type: "field_dropdown",
                    name: "order",
                    options: [
                        ["ascending", "ascending"],
                        ["descending", "descending"],
                    ],
                },
            ],
            previousStatement: DATA_SCIENCE_STATEMENT_TYPE,
            nextStatement: DATA_SCIENCE_STATEMENT_TYPE,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            transformData: (b: BlockSvg, data: any[]) => {
                const column = b.getFieldValue("column")
                const order = b.getFieldValue("order")
                const descending = order === "descending"
                return transformData(<ArrangeMessage>{
                    type: "arrange",
                    column,
                    descending,
                    data,
                })
            },
            template: "meta",
        },
        <BlockDefinition>{
            kind: "block",
            type: DATA_SCIENCE_DATAVARIABLE_READ_BLOCK,
            message0: "data table %1",
            args0: [
                <VariableInputDefinition>{
                    type: "field_variable",
                    name: "data",
                    variable: "data",
                    variableTypes: [DATA_TABLE_TYPE],
                    defaultType: DATA_TABLE_TYPE,
                },
            ],
            inputsInline: false,
            nextStatement: DATA_SCIENCE_STATEMENT_TYPE,
            colour,
            template: "meta",
        },
        // only 1 allowed to prevent cycles
        <BlockDefinition>{
            kind: "block",
            type: DATA_SCIENCE_DATAVARIABLE_WRITE_BLOCK,
            message0: "store in data table %1",
            args0: [
                <VariableInputDefinition>{
                    type: "field_variable",
                    name: "data",
                    variable: "data",
                    variableTypes: [DATA_TABLE_TYPE],
                    defaultType: DATA_TABLE_TYPE,
                },
            ],
            inputsInline: false,
            previousStatement: DATA_SCIENCE_STATEMENT_TYPE,
            nextStatement: DATA_SCIENCE_STATEMENT_TYPE,
            colour,
            template: "meta",
        },
    ],
    createCategory: () => [
        <CategoryDefinition>{
            kind: "category",
            name: "Data Science",
            colour,
            button: {
                kind: "button",
                text: `Add data variable`,
                callbackKey: DATA_SCIENCE_ADD_VARIABLE_CALLBACK,
            },
            contents: [
                <BlockReference>{
                    kind: "block",
                    type: DATA_SCIENCE_ARRANGE_BLOCK,
                },
                <LabelDefinition>{
                    kind: "label",
                    text: "DataSets",
                },
                <BlockReference>{
                    kind: "block",
                    type: DATA_SCIENCE_DATAVARIABLE_READ_BLOCK,
                },
                <BlockReference>{
                    kind: "block",
                    type: DATA_SCIENCE_DATAVARIABLE_WRITE_BLOCK,
                },
            ],
        },
    ],
}
export default dataDsl
