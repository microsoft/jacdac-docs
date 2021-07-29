import {
    BlockReference,
    CategoryDefinition,
    DATA_SCIENCE_STATEMENT_TYPE,
    identityTransformData,
} from "../toolbox"
import BlockDomainSpecificLanguage from "./dsl"
import DataTableField from "../fields/DataTableField"
import { paletteColorByIndex } from "./palette"

const VEGA_CHART_BLOCK = "vega_chart"

const colour = paletteColorByIndex(5)
const vegaDsl: BlockDomainSpecificLanguage = {
    id: "vega",
    createBlocks: () => [
        {
            kind: "block",
            type: VEGA_CHART_BLOCK,
            message0: "vega chart %1",
            args0: [
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
    ],
    createCategory: () => [
        <CategoryDefinition>{
            kind: "category",
            name: "Vega",
            contents: [
                <BlockReference>{ kind: "block", type: VEGA_CHART_BLOCK },
            ],
            colour,
        },
    ],
}

export default vegaDsl
