import {
    BlockDefinition,
    CategoryDefinition,
    DATA_SCIENCE_STATEMENT_TYPE,
    MODEL_BLOCK_CLASS_STATEMENT_TYPE,
    MODEL_BLOCK_PREPROCESS_STATEMENT_TYPE,
    MODEL_BLOCK_LAYER_STATEMENT_TYPE,
} from "../blockly/toolbox"
import BlockDomainSpecificLanguage from "../blockly/dsl/dsl"
import { predictRequest } from "../blockly/dsl/workers/tf.proxy"
import type {
    TFModelPredictRequest,
    TFModelPredictResponse,
} from "../../workers/tf/dist/node_modules/tf.worker"

import ExpandModelBlockField from "../blockly/fields/mb/ExpandModelBlockField"

export const MODEL_BLOCKS = "model_block_"
export const MB_DATASET_VAR_TYPE = "ModelBlockDataSet"
export const MB_CLASS_VAR_TYPE = "ModelBlockClass"
export const MB_CLASSIFIER_VAR_TYPE = "ModelBlockClassifier"

const dataset_color = "#123456"
const class_color = "#2466A8"
const processing_color = "#ac2469"
const learning_color = "#561234"
const layer_color = "#97207a"
const prediction_color = "#359b73"

export class ModelBlockDomainSpecificLanguage
    implements BlockDomainSpecificLanguage
{
    id = "modelBlocks"
    createBlocks() {
        const blocks: BlockDefinition[] = [
            /* DataSet blocks */
            {
                kind: "block",
                type: MODEL_BLOCKS + "dataset",
                message0: "dataset %1 %2",
                args0: [
                    {
                        type: "field_variable",
                        name: "DATASET_NAME",
                        variable: "dataset1",
                        variableTypes: [MB_DATASET_VAR_TYPE],
                        defaultType: MB_DATASET_VAR_TYPE,
                    },
                    {
                        type: ExpandModelBlockField.KEY,
                        name: "EXPAND_BUTTON",
                    },
                ],
                message1: "%1",
                args1: [
                    {
                        type: "input_statement",
                        name: "LAYER_INPUTS",
                        check: [MODEL_BLOCK_CLASS_STATEMENT_TYPE],
                    },
                ],
                inputsInline: false,
                colour: dataset_color,
                tooltip:
                    "Use this block to define a dataset; it only takes class blocks. Add more information to datasets by creating new classes and stacking them inside dataset blocks. Click on the inspector icon to view more details about this dataset or to generate a new dataset from this one",
                helpUrl: "",
                hat: true,
            } as BlockDefinition,
            {
                kind: "block",
                type: MODEL_BLOCKS + "recording",
                message0: "recording %1 %2 %3",
                args0: [
                    {
                        type: "field_input",
                        name: "RECORDING_NAME",
                        text: "recording0",
                    },
                    {
                        type: "field_variable",
                        name: "CLASS_NAME",
                        variable: "class1",
                        variableTypes: [MB_CLASS_VAR_TYPE],
                        defaultType: MB_CLASS_VAR_TYPE,
                    },
                    {
                        type: ExpandModelBlockField.KEY,
                        name: "EXPAND_BUTTON",
                    },
                ],
                inputsInline: false,
                previousStatement: MODEL_BLOCK_CLASS_STATEMENT_TYPE,
                nextStatement: MODEL_BLOCK_CLASS_STATEMENT_TYPE,
                colour: class_color,
                tooltip:
                    "Use this block to define your classes. Click on the inspector icon to view and edit a class",
                helpUrl: "",
            } as BlockDefinition,
            /* Preprocessing Blocks */
            {
                kind: "block",
                type: MODEL_BLOCKS + "standardize",
                message0: "standardize dataset",
                args0: [],
                inputsInline: false,
                previousStatement: MODEL_BLOCK_PREPROCESS_STATEMENT_TYPE,
                nextStatement: [
                    MODEL_BLOCK_PREPROCESS_STATEMENT_TYPE,
                    MODEL_BLOCK_LAYER_STATEMENT_TYPE,
                ],
                colour: processing_color,
                tooltip:
                    "Use this block to normalize and scale your dataset values between 0 and 1. This kind of block can only go inside classifier blocks and before layer blocks",
                helpUrl: "",
            } as BlockDefinition,
            {
                kind: "block",
                type: MODEL_BLOCKS + "smooth",
                message0: "smooth data %1",
                args0: [
                    {
                        type: ExpandModelBlockField.KEY,
                        name: "EXPAND_BUTTON",
                    },
                ],
                inputsInline: false,
                previousStatement: MODEL_BLOCK_PREPROCESS_STATEMENT_TYPE,
                nextStatement: [
                    MODEL_BLOCK_PREPROCESS_STATEMENT_TYPE,
                    MODEL_BLOCK_LAYER_STATEMENT_TYPE,
                ],
                colour: processing_color,
                tooltip:
                    "Use this block to run a smoothing window filter over your data. This kind of block can only go inside classifier blocks and before layer blocks",
                helpUrl: "",
            } as BlockDefinition,
            /* Learning Blocks */
            {
                kind: "block",
                type: MODEL_BLOCKS + "nn",
                message0: "neural network classifier %1",
                args0: [
                    {
                        type: "field_variable",
                        name: "CLASSIFIER_NAME",
                        variable: "classifier1",
                        variableTypes: [MB_CLASSIFIER_VAR_TYPE],
                        defaultType: MB_CLASSIFIER_VAR_TYPE,
                    },
                ],
                message1: " training data %1 %2",
                args1: [
                    {
                        type: "field_variable",
                        name: "NN_TRAINING",
                        variable: "dataset1",
                        variableTypes: [MB_DATASET_VAR_TYPE],
                        defaultType: MB_DATASET_VAR_TYPE,
                    },
                    {
                        type: ExpandModelBlockField.KEY,
                        name: "EXPAND_BUTTON",
                    },
                ],
                message2: "%1",
                args2: [
                    {
                        type: "input_statement",
                        name: "LAYER_INPUTS",
                        check: [
                            MODEL_BLOCK_PREPROCESS_STATEMENT_TYPE,
                            MODEL_BLOCK_LAYER_STATEMENT_TYPE,
                        ],
                    },
                ],
                inputsInline: false,
                colour: learning_color,
                tooltip:
                    "Use this block to define a neural network classifier; it only takes preprocessing and layer blocks.",
                helpUrl: "",
            } as BlockDefinition,
            {
                kind: "block",
                type: MODEL_BLOCKS + "conv_layer",
                message0: "convolutional layer %1",
                args0: [
                    {
                        type: ExpandModelBlockField.KEY,
                        name: "EXPAND_BUTTON",
                    },
                ],
                inputsInline: false,
                previousStatement: [
                    MODEL_BLOCK_PREPROCESS_STATEMENT_TYPE,
                    MODEL_BLOCK_LAYER_STATEMENT_TYPE,
                ],
                nextStatement: MODEL_BLOCK_LAYER_STATEMENT_TYPE,
                colour: layer_color,
                tooltip:
                    "Use this block to add a 1D convolutional layer to a neural network classifier. Convolutional layers are often used to summarize key features from input data.",
                helpUrl: "",
            } as BlockDefinition,
            {
                kind: "block",
                type: MODEL_BLOCKS + "max_pool_layer",
                message0: "max pooling layer %1",
                args0: [
                    {
                        type: ExpandModelBlockField.KEY,
                        name: "EXPAND_BUTTON",
                    },
                ],
                inputsInline: false,
                previousStatement: [
                    MODEL_BLOCK_PREPROCESS_STATEMENT_TYPE,
                    MODEL_BLOCK_LAYER_STATEMENT_TYPE,
                ],
                nextStatement: MODEL_BLOCK_LAYER_STATEMENT_TYPE,
                colour: layer_color,
                tooltip: "",
                helpUrl: "",
            } as BlockDefinition,
            {
                kind: "block",
                type: MODEL_BLOCKS + "dropout_layer",
                message0: "dropout layer %1",
                args0: [
                    {
                        type: ExpandModelBlockField.KEY,
                        name: "EXPAND_BUTTON",
                    },
                ],
                inputsInline: false,
                previousStatement: [
                    MODEL_BLOCK_PREPROCESS_STATEMENT_TYPE,
                    MODEL_BLOCK_LAYER_STATEMENT_TYPE,
                ],
                nextStatement: MODEL_BLOCK_LAYER_STATEMENT_TYPE,
                colour: layer_color,
                tooltip: "",
                helpUrl: "",
            } as BlockDefinition,
            {
                kind: "block",
                type: MODEL_BLOCKS + "flatten_layer",
                message0: "flatten %1",
                args0: [
                    {
                        type: ExpandModelBlockField.KEY,
                        name: "EXPAND_BUTTON",
                    },
                ],
                inputsInline: false,
                previousStatement: [
                    MODEL_BLOCK_PREPROCESS_STATEMENT_TYPE,
                    MODEL_BLOCK_LAYER_STATEMENT_TYPE,
                ],
                nextStatement: MODEL_BLOCK_LAYER_STATEMENT_TYPE,
                colour: layer_color,
                tooltip: "",
                helpUrl: "",
            } as BlockDefinition,
            {
                kind: "block",
                type: MODEL_BLOCKS + "dense_layer",
                message0: "dense layer %1",
                args0: [
                    {
                        type: ExpandModelBlockField.KEY,
                        name: "EXPAND_BUTTON",
                    },
                ],
                inputsInline: false,
                previousStatement: [
                    MODEL_BLOCK_PREPROCESS_STATEMENT_TYPE,
                    MODEL_BLOCK_LAYER_STATEMENT_TYPE,
                ],
                nextStatement: MODEL_BLOCK_LAYER_STATEMENT_TYPE,
                colour: layer_color,
                tooltip: "",
                helpUrl: "",
            } as BlockDefinition,
            {
                kind: "block",
                type: MODEL_BLOCKS + "knn",
                message0: "K nearest neighbors classifier %1 %2",
                args0: [
                    {
                        type: "field_variable",
                        name: "CLASSIFIER_NAME",
                        variable: "classifier2",
                        variableTypes: [MB_CLASSIFIER_VAR_TYPE],
                        defaultType: MB_CLASSIFIER_VAR_TYPE,
                    },
                    {
                        type: ExpandModelBlockField.KEY,
                        name: "EXPAND_BUTTON",
                    },
                ],
                message1: "training data %1 k %2",
                args1: [
                    {
                        type: "field_variable",
                        name: "KNN_TRAINING",
                        variable: "dataset1",
                        variableTypes: [MB_DATASET_VAR_TYPE],
                        defaultType: MB_DATASET_VAR_TYPE,
                    },
                    {
                        type: "field_number",
                        name: "KNN_K_VALUE",
                        value: 3,
                    },
                ],
                inputsInline: false,
                colour: learning_color,
                tooltip: "",
                helpUrl: "",
            } as BlockDefinition,
            /* Prediction blocks */
            {
                kind: "block",
                type: MODEL_BLOCKS + "prediction",
                message0: "predict with %1",
                args0: [
                    {
                        type: "field_variable",
                        name: "CLASSIFIER_NAME",
                        variable: "classifier1",
                        variableTypes: [MB_CLASSIFIER_VAR_TYPE],
                        defaultType: MB_CLASSIFIER_VAR_TYPE,
                    },
                ],
                inputsInline: false,
                previousStatement: DATA_SCIENCE_STATEMENT_TYPE,
                nextStatement: DATA_SCIENCE_STATEMENT_TYPE,
                colour: prediction_color,
                template: "meta",
                dataPreviewField: false,
                passthroughData: true,
                /*transformData: async (b: Block, data: object[]) => {
                    const column1 = tidyResolveFieldColumn(
                        data,
                        b,
                        "x",
                        "number"
                    )
                    const column2 = tidyResolveFieldColumn(
                        data,
                        b,
                        "y",
                        "number"
                    )
                    if (!column1 || !column2) return Promise.resolve([])
                    const predictMsg = {
                        worker: "tf",
                        type: "predict",
                        data: {
                            zData: liveInput,
                            model: model.toJSON(),
                        },
                    } as TFModelPredictRequest
                    const predResult = (await predictRequest(
                        predictMsg
                    )) as TFModelPredictResponse

                    return predResult.data.prediction
                },*/
                tooltip: "Use this block to run inference on vm sensor data.",
                helpUrl: "",
            } as BlockDefinition,
        ]
        return blocks
    }

    createCategory() {
        return [<CategoryDefinition>(<unknown>{
                kind: "category",
                name: "Data sets",
                colour: dataset_color,
                contents: [
                    {
                        kind: "label",
                        text: "Recordings",
                    },
                    {
                        kind: "button",
                        text: "Create new recording...",
                        callbackKey: "createNewRecordingButton",
                    },
                    {
                        kind: "label",
                        text: "Datasets",
                    },
                    {
                        kind: "button",
                        text: "Create new dataset variable...",
                        callbackKey: "createNewDataSetButton",
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "dataset",
                    },
                ],
            }), <CategoryDefinition>(<unknown>{
                kind: "category",
                name: "Models",
                colour: learning_color,
                contents: [
                    {
                        kind: "button",
                        text: "Create new classifier variable...",
                        callbackKey: "createNewClassifierButton",
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "nn",
                    },
                    {
                        kind: "block",
                        blockxml: `<block type="model_block_conv_layer"><field name="EXPAND_BUTTON">{"parametersVisible":false,"numTrainableParams":0,"runTimeInCycles":0,"outputShape":[0,0],"numFilters":1,"kernelSize":1,"strideSize":1,"activation":"relu"}</field></block>`,
                    },
                    {
                        kind: "block",
                        blockxml: `<block type="model_block_max_pool_layer"><field name="EXPAND_BUTTON">{"parametersVisible":false,"numTrainableParams":0,"runTimeInCycles":0,"outputShape":[0,0],"poolSize":2,"strideSize":1,"padding":false}</field></block>`,
                    },
                    {
                        kind: "block",
                        blockxml: `<block type="model_block_dropout_layer"><field name="EXPAND_BUTTON">{"parametersVisible":false,"numTrainableParams":0,"runTimeInCycles":0,"outputShape":[0,0],"rate":0.1}</field></block>`,
                    },
                    {
                        kind: "block",
                        blockxml: `<block type="model_block_flatten_layer"><field name="EXPAND_BUTTON">{"parametersVisible":false,"numTrainableParams":0,"runTimeInCycles":0,"outputShape":[0,0]}</field></block>`,
                    },
                    {
                        kind: "block",
                        blockxml: `<block type="model_block_dense_layer"><field name="EXPAND_BUTTON">{"parametersVisible":false,"numTrainableParams":0,"runTimeInCycles":0,"outputShape":[0,0],"numUnits":4,"activation":"relu"}</field></block>`,
                    },
                ],
            }), <CategoryDefinition>(<unknown>{
                kind: "category",
                name: "Predictions",
                colour: prediction_color,
                contents: [
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "prediction",
                    },
                ],
            })]
    }
}

const modelBlockDsl = new ModelBlockDomainSpecificLanguage()
export default modelBlockDsl
