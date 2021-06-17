import { BlockDefinition, CategoryDefinition } from "../blockly/toolbox"
import BlockDomainSpecificLanguage from "../blockly/dsl/dsl"
//import { Block } from "@material-ui/icons"
import ModelBlockField from "../blockly/fields/ModelBlockField"

const MODEL_BLOCKS = "model_block_"

const dataset_color = "#123456"
const class_color = "#2466A8"
const processing_color = "#ac2469"
const learning_color = "#561234"
const layer_color = "#97207a"

export class ModelBlockDomainSpecificLanguage
    implements BlockDomainSpecificLanguage
{
    id = "modelBlocks"
    createBlocks() {
        const blocks: BlockDefinition[] = [            
            /* Dataset blocks */
            { // would like to make this a hat block
                kind: "block",
                type: MODEL_BLOCKS + "dataset",
                message0: "dataset %1",
                args0: [
                  {
                    "type": "field_variable", // should be a variable 'dataset' type
                    "name": "CLASS_NAME",
                    "text": "dataset1"
                  }
                ],
                message1: "%1",
                args1: [
                  {
                    "type": "input_statement",
                    "name": "DATASET_CONFIG"
                  }
                ],
                inputsInline: false,
                colour: dataset_color,
                tooltip: "Use this block to define your dataset. Create new classes and stack them inside your dataset object",
                helpUrl: "",
                hat: true
              } as BlockDefinition,
              {
                kind: "block",
                type: MODEL_BLOCKS + "class",
                message0: "class %1",
                args0: [
                    {
                      "type": "field_variable", // should be a variable 'class' type
                      "name": "CLASS_NAME",
                      "text": "class1"
                    }
                  ],
                  inputsInline: false,
                  previousStatement: null,
                  nextStatement: null,
                  colour: class_color,
                  tooltip: "",
                  helpUrl: ""
              } as BlockDefinition,
              /* Preprocessing Blocks */
              {
                kind: "block",
                type: MODEL_BLOCKS + "standardize",
                message0: "standardize dataset",
                args0: [],
                  inputsInline: false,
                  previousStatement: null,
                  nextStatement: null,
                  colour: processing_color,
                  tooltip: "",
                  helpUrl: ""
              } as BlockDefinition, 
              {
                kind: "block",
                type: MODEL_BLOCKS + "smoothe",
                message0: "smoothe dataset (moving average)",
                args0: [],
                  inputsInline: false,
                  previousStatement: null,
                  nextStatement: null,
                  colour: processing_color,
                  tooltip: "",
                  helpUrl: ""
              } as BlockDefinition, 
              /* Learning Blocks */
              { // would like to make this a hat block
                kind: "block",
                type: MODEL_BLOCKS + "nn",
                message0: "neural network classifier %1",
                args0: [
                    {
                        "type": "field_input",
                        "name": "NN_CLASSIFIER_NAME",
                        "text": "classifier1"
                    }
                ],
                message1: "training data %1",
                args1: [
                    {
                        "type": "field_variable",
                        "name": "NN_TRAINING",
                        /* variable: "none",
                        variableTypes: ["dataset"],
                        defaultType: "dataset" */
                    }
                ],
                message2: "testing data %1",
                args2: [
                    {
                        "type": "field_variable",
                        "name": "NN_TESTING",
                        /* variable: "none",
                        variableTypes: ["dataset"],
                        defaultType: "dataset" */
                    }
                ],
                message3: "%1",
                args3: [
                    {
                        "type": "input_statement",
                        "name": "NN_LAYERS"
                      }
                ],
                inputsInline: false,
                colour: learning_color,
                tooltip: "",
                helpUrl: "",
              } as BlockDefinition,
              {
                kind: "block",
                type: MODEL_BLOCKS + "conv_layer",
                message0: "convolutional layer %1",
                args0: [
                    {/* TODO make a specific field for conv layers, should display filter size */
                        "type": ModelBlockField.KEY,
                        "name": "CONV_LAYER_SIZE"
                        /* variables: filter size NxN, number of filters M, stride size P*/
                    }
                ],
                  inputsInline: false,
                  previousStatement: null,
                  nextStatement: null,
                  colour: layer_color,
                  tooltip: "",
                  helpUrl: ""
              } as BlockDefinition,
              {
                kind: "block",
                type: MODEL_BLOCKS + "max_pool_layer",
                message0: "max pooling layer %1",
                args0: [
                    {/* TODO make a specific field for pooling layers, should display pool size */
                        "type": ModelBlockField.KEY,
                        "name": "MAX_POOL_LAYER_PARAMS"
                        /* variables: pool size NxN, stride size P*/
                    }
                ],
                  inputsInline: false,
                  previousStatement: null,
                  nextStatement: null,
                  colour: layer_color,
                  tooltip: "",
                  helpUrl: ""
              } as BlockDefinition,
              {
                kind: "block",
                type: MODEL_BLOCKS + "dropout_layer",
                message0: "dropout layer %1",
                args0: [
                    {/* TODO make a specific field for dropout layers, should display dropout rate */
                        "type": ModelBlockField.KEY,
                        "name": "DROPOUT_LAYER_PARAMS"
                        /* variables: rate N*/
                    }
                ],
                  inputsInline: false,
                  previousStatement: null,
                  nextStatement: null,
                  colour: layer_color,
                  tooltip: "",
                  helpUrl: ""
              } as BlockDefinition,
              {
                kind: "block",
                type: MODEL_BLOCKS + "flatten_layer",
                message0: "flattening layer %1",
                args0: [
                    {/* TODO make a specific field for flatten layer, should display (size) */
                        "type": ModelBlockField.KEY,
                        "name": "FLATTENING_LAYER_PARAMS"
                        /* variables: pool size NxN, stride size P */
                    }
                ],
                  inputsInline: false,
                  previousStatement: null,
                  nextStatement: null,
                  colour: layer_color,
                  tooltip: "",
                  helpUrl: ""
              } as BlockDefinition,
              {
                kind: "block",
                type: MODEL_BLOCKS + "fully_connected_layer",
                message0: "fully connected layer %1",
                args0: [
                    { /* TODO make a specific field for dense layers, should display number of nodes */
                        "type": ModelBlockField.KEY,
                        "name": "FULLY_CONNECTED_LAYER_PARAMS"
                        /* variables: number of nodes P*/
                    }
                ],
                  inputsInline: false,
                  previousStatement: null,
                  nextStatement: null,
                  colour: layer_color,
                  tooltip: "",
                  helpUrl: ""
              } as BlockDefinition,
              { /* TODO would like to make a hat block */
                kind: "block",
                type: MODEL_BLOCKS + "knn",
                message0: "K nearest neighbors classifier %1",
                args0: [
                    {
                        "type": "field_input",
                        "name": "KNN_CLASSIFIER_NAME",
                        "text": "classifier1"
                    }
                ],
                message1: "training data %1",
                args1: [
                    {
                        "type": "field_variable",
                        "name": "KNN_TRAINING"
                        /* variable: "none",
                        variableTypes: ["dataset"] */
                    }
                ],
                message2: "k %1",
                args2: [
                    {
                        "type": "field_number",
                        "name": "KNN_K_VALUE",
                        "value": 3 /* TODO dynamically set max based on # of examples? */
                    }
                ],
                  inputsInline: false,
                  colour: learning_color,
                  tooltip: "",
                  helpUrl: ""
              } as BlockDefinition 
        ]
        return blocks
    }

    createCategory() {
        return [
            <CategoryDefinition>{
                kind: "category",
                name: "Dataset",
                colour: dataset_color,
                contents: [
                    {
                        kind: "button",
                        text: "Create new dataset...",
                        callbackKey: "createNewDatasetButton"
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "dataset",
                    },
                    {
                        kind: "button",
                        text: "Create new class...",
                        callbackKey: "createNewClassButton"
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "class",
                    },
                ],
            },
            <CategoryDefinition> {
                kind: "category",
                name: "Preprocessing",
                colour: processing_color,
                contents: [
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "standardize",
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "smoothe"
                    }
                ],
            },
            <CategoryDefinition> {
                kind: "category",
                name: "Learning",
                colour: learning_color,
                contents: [
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "nn",
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "conv_layer"
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "max_pool_layer"
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "dropout_layer"
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "flatten_layer"
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "fully_connected_layer"
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "knn",
                    }
                ],
            },
        ]
    }
}

const modelBlockDsl = new ModelBlockDomainSpecificLanguage()
export default modelBlockDsl
