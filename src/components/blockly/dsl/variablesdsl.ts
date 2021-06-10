import BlockDomainSpecificLanguage from "./dsl"
import {
    toIdentifier,
    toMemberExpression,
} from "../../../../jacdac-ts/src/vm/compile"
import { VMError } from "../../../../jacdac-ts/src/vm/ir"
import { ExpressionWithErrors, makeVMBase } from "../../vm/VMgenerator"

const variablesDsl: BlockDomainSpecificLanguage = {
    id: "variables",
    createCategory: () => [
        {
            kind: "category",
            name: "Variables",
            colour: "%{BKY_VARIABLES_HUE}",
            custom: "VARIABLE",
        },
    ],
    compileExpressionToVM: ({ block, /*definition*/ }) => {
        const { type, inputs } = block
        if (type === "variables_get") {
            const { value: variable } = inputs[0].fields.var
            return {
                expr: toMemberExpression(
                    "$",
                    variable.toString()
                ),
                errors: [],
            }
        }
        return undefined
    },
    compileCommandToVM: ({ event, block, /*definition,*/ blockToExpression }) => {
        const { type, inputs } = block
        if (type === "variables_set") {
            const { expr, errors } = blockToExpression(
                event,
                inputs[0].child
            )
            const { value: variable } = inputs[0].fields.var
            return {
                cmd: makeVMBase(block, {
                    type: "CallExpression",
                    arguments: [
                        toMemberExpression("$", variable.toString()),
                        expr,
                    ],
                    callee: toIdentifier("writeLocal"),
                }),
                errors,
            }
        }
        return undefined
    },
}
export default variablesDsl
