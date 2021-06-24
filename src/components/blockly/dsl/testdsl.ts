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
} from "../toolbox"
import BlockDomainSpecificLanguage from "./dsl"

const TEST_BLOCK = "test_test"
const colour = testColour

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
                    text: "myTest",
                },
                <OptionsInputDefinition>{
                    type: "field_dropdown",
                    name: "service",
                    options: serviceSpecifications()
                        .filter(spec => spec.shortId[0] !== "_")
                        .filter(
                            spec =>
                                [
                                    SRV_CONTROL,
                                    SRV_BOOTLOADER,
                                    SRV_LOGGER,
                                ].indexOf(spec.classIdentifier) < 0
                        )
                        .map(spec => [spec.name, spec.shortId]),
                },
            ],
            colour,
            inputsInline: false,
            tooltip: `Defines a new test for a service`,
            helpUrl: "",
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
            ],
        },
    ],
}

export default testDsl
