import { BlockSvg } from "blockly"
import {
    BlockReference,
    CategoryDefinition,
    DATA_SCIENCE_STATEMENT_TYPE,
    OptionsInputDefinition,
    TextInputDefinition,
} from "../toolbox"
import BlockDomainSpecificLanguage from "./dsl"
import createDataScienceWorker from "./workers/datadsl"

const DATA_SCIENCE_ARRANGE_BLOCK = "data_science_arrange"

let worker: Worker
const colour = "#777"
const dataScienceDSL: BlockDomainSpecificLanguage = {
    id: "dataScience",
    createBlocks: () => [
        {
            kind: "block",
            type: "data_science_arrange",
            message0: "arrange %1 %2",
            colour,
            args0: [
                <TextInputDefinition>{
                    type: "field_input",
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
            transformData: async (b: BlockSvg, data: any[]) => {
                const column = b.getFieldValue("column")
                const order = b.getFieldValue("order")
                const descending = order === "descending"

                // test
                worker.postMessage({
                    id: Math.random(),
                    type: "arrange",
                    column,
                    descending,
                    data,
                })
                return undefined;
            },
            template: "meta",
        },
    ],
    createCategory: () => [
        <CategoryDefinition>{
            kind: "category",
            name: "Data Science",
            colour,
            contents: [
                <BlockReference>{
                    kind: "block",
                    type: DATA_SCIENCE_ARRANGE_BLOCK,
                },
            ],
        },
    ],
    mount: () => {
        if (!worker) {
            worker = createDataScienceWorker()
            worker.onmessage = (event) => console.log(event)
        }
        return () => {}
    },
}
export default dataScienceDSL
