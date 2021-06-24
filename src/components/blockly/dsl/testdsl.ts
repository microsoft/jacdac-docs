import {
    SRV_BOOTLOADER,
    SRV_CONTROL,
    SRV_LOGGER,
} from "../../../../jacdac-ts/jacdac-spec/dist/specconstants"
import { serviceSpecifications } from "../../../../jacdac-ts/src/jdom/spec"
import {
    CODE_STATEMENT_TYPE,
    OptionsInputDefinition,
    TextInputDefinition,
    testColour,
    ValueInputDefinition,
    BOOLEAN_TYPE,
} from "../toolbox"
import BlockDomainSpecificLanguage from "./dsl"

const TEST_BLOCK = "test_test"
const TEST_ASK_BLOCK = "test_ask"
const TEST_CHECK_BLOCK = "test_check"
const colour = testColour

const testDsl: BlockDomainSpecificLanguage = {
    id: "test",
    createBlocks: () => [
        {
            kind: "block",
            type: TEST_BLOCK,
            message0: `test %1`,
            args0: [
                <TextInputDefinition>{
                    type: "field_input",
                    name: "name",
                    text: "myTest",
                },

            ],
            colour,
            inputsInline: true,
            tooltip: `Defines a new test for a service`,
            helpUrl: "",
            nextStatement: CODE_STATEMENT_TYPE,
        },
        {
            kind: "block",
            type: TEST_ASK_BLOCK,
            message0: `ask %1`,
            args0: [
                <TextInputDefinition>{
                    type: "field_input",
                    name: "question",
                    text: "a question",
                },
            ],
            colour,
            inputsInline: true,
            tooltip: `Asks a question to the user.`,
            helpUrl: "",
            previousStatement: CODE_STATEMENT_TYPE,
            nextStatement: CODE_STATEMENT_TYPE,
        },
        {
            kind: "block",
            type: TEST_CHECK_BLOCK,
            message0: `check %1`,
            args0: [
                <ValueInputDefinition>{
                    type: "input_value",
                    name: "expression",
                    check: BOOLEAN_TYPE,
                },
            ],
            colour,
            inputsInline: true,
            tooltip: `Checks that a boolean condition is true.`,
            helpUrl: "",
            previousStatement: CODE_STATEMENT_TYPE,
            nextStatement: CODE_STATEMENT_TYPE,
        },
    ],
    createCategory: () => [
        {
            kind: "category",
            name: "Tests",
            colour: colour,
            contents: [
                {
                    kind: "block",
                    type: TEST_BLOCK,
                },
                {
                    kind: "block",
                    type: TEST_ASK_BLOCK,
                },
                {
                    kind: "block",
                    type: TEST_CHECK_BLOCK,
                },
            ],
        },
    ],
}

export default testDsl
