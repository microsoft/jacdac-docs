import {
    BlockDefinition,
    BlockReference,
    CategoryDefinition,
    DATA_SCIENCE_STATEMENT_TYPE,
    identityTransformData,
    InputDefinition,
    toolsColour,
    TWIN_BLOCK,
    VariableInputDefinition,
    sensorsColour,
    SENSOR_BLOCK,
} from "../toolbox"
import BlockDomainSpecificLanguage, {
    CreateBlocksOptions,
    CreateCategoryOptions,
} from "./dsl"
import TwinField from "../fields/TwinField"
import { ServicesBaseDSL } from "./servicesbase"

export class SensorsBlockDomainSpecificLanguage
    extends ServicesBaseDSL
    implements BlockDomainSpecificLanguage
{
    id = "jacdacSensors"

    createBlocks(options: CreateBlocksOptions) {
        const toolsBlocks: BlockDefinition[] = [
            {
                kind: "block",
                type: SENSOR_BLOCK,
                message0: `sensor %1 %2 %3`,
                args0: [
                    <VariableInputDefinition>{
                        type: "field_variable",
                        name: "service",
                        variable: "none",
                        variableTypes: ["sensor"],
                        defaultType: "sensor",
                    },
                    {
                        type: "input_dummy",
                    },
                    <InputDefinition>{
                        type: TwinField.KEY,
                        name: "twin",
                    },
                ],
                colour: toolsColour,
                inputsInline: false,
                tooltip: `Twin of the selected role`,
                nextStatement: DATA_SCIENCE_STATEMENT_TYPE,
                helpUrl: "",
                template: "meta",
                transformData: identityTransformData,
            },
        ]

        return [...toolsBlocks]
    }

    createCategory(options: CreateCategoryOptions): CategoryDefinition[] {
        return [
            {
                kind: "category",
                name: "Sensors",
                colour: sensorsColour,
                contents: [
                    <BlockReference>{
                        kind: "block",
                        type: TWIN_BLOCK,
                    },
                ],
            },
        ]
    }
}
const sensorsDSL = new SensorsBlockDomainSpecificLanguage()
export default sensorsDSL
