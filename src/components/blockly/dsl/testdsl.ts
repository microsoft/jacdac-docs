import { serviceSpecifications } from "../../../../jacdac-ts/src/jdom/spec"
import {
    OptionsInputDefinition,
    TextInputDefinition,
    toolsColour,
} from "../toolbox"
import BlockDomainSpecificLanguage from "./dsl"

const TEST_BLOCK = "test_test"
const colour = toolsColour

const testDsl: BlockDomainSpecificLanguage = {
    id: "test",
    createBlocks: () => [
        {
            kind: "block",
            type: "test_test",
            message0: `test %1 for %2`,
            args0: [
                <TextInputDefinition>{
                    type: "field_input",
                    name: "name",
                },
                <OptionsInputDefinition>{
                    type: "field_dropdown",
                    name: "service",
                    options: serviceSpecifications().map(spec => [
                        spec.name,
                        spec.shortId,
                    ]),
                },
            ],
            colour,
            inputsInline: false,
            tooltip: `Defines a new test for a service`,
            helpUrl: "",
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
            ],
        },
    ],
}

export default testDsl
