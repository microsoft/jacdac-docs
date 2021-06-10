import { BlockDefinition, OptionsInputDefinition } from "../blockly/toolbox"
import BlockDomainSpecificLanguage from "../blockly/dsl/dsl"

export class DataScienceBlockDomainSpecificLanguage
    implements BlockDomainSpecificLanguage
{
    id = "dataScience"
    createBlocks() {
        const blocks: BlockDefinition[] = [
            {
                kind: "block",
                type: "ds_plus",
                message0: "%1 %2 %3",
                args0: [
                    {
                        type: "input_value",
                        name: "A",
                        check: "Number",
                    },
                    {
                        type: "field_dropdown",
                        name: "OP",
                        options: [
                            ["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"],
                            ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"],
                            ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"],
                            ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"],
                        ],
                    } as OptionsInputDefinition,
                    {
                        type: "input_value",
                        name: "B",
                        check: "Number",
                    },
                ],
                inputsInline: true,
                output: "Number",
                style: "math_blocks",
                helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
                extensions: ["math_op_tooltip"],
            } as BlockDefinition,
        ]
        return blocks
    }
}

const dataDsl = new DataScienceBlockDomainSpecificLanguage()
export default dataDsl
