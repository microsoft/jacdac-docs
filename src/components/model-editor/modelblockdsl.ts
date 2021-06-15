import { BlockDefinition, CategoryDefinition } from "../blockly/toolbox"
import BlockDomainSpecificLanguage from "../blockly/dsl/dsl"
//import { Block } from "@material-ui/icons"
import ModelBlockField from "../blockly/fields/ModelBlockField"

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
                type: "dataset_block",
                message0: "dataset %1",
                args0: [
                  {
                    "type": "field_input", // all the names here should become a dataset variable type
                    "name": "DATASET_NAME"
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
                type: "class_block",
                message0: "class %1",
                args0: [
                    {
                      "type": "field_variable", // should be a class type
                      "name": "CLASS_NAME"
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
                type: "standardize_block",
                message0: "standardize dataset",
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
                type: "nn_block",
                message0: "NN classifier",
                args0: [],
                message1: "training data %1",
                args1: [
                    {
                        "type": "field_variable",
                        "name": "NN_TRAINING"
                        /* variable: "none",
                        variableTypes: ["dataset"] */
                    }
                ],
                message2: "testing data %1",
                args2: [
                    {
                        "type": "field_variable",
                        "name": "NN_TESTING"
                        /* variable: "none",
                        variableTypes: ["dataset"] */
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
                type: "conv_layer_block",
                message0: "convolutional layer %1",
                args0: [
                    {/* TODO want this to be a shadow field */
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
                type: "max_pool_layer_block",
                message0: "max pooling layer %1",
                args0: [
                    {/* TODO want this to be a shadow field */
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
                type: "dropout_layer_block",
                message0: "dropout layer %1",
                args0: [
                    {/* TODO want this to be a shadow field */
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
                type: "flatten_layer_block",
                message0: "flattening layer",
                /*args0: [
                    {/* TODO want this to be a shadow field */
                        /* "type": ModelBlockField.KEY,
                        "name": "FLATTENINGMAX_POOL_LAYER_PARAMS"
                        /* variables: pool size NxN, stride size P*/
                    /*}
                ],*/
                  inputsInline: false,
                  previousStatement: null,
                  nextStatement: null,
                  colour: layer_color,
                  tooltip: "",
                  helpUrl: ""
              } as BlockDefinition,
              {
                kind: "block",
                type: "fully_connected_layer_block",
                message0: "fully connected layer %1",
                args0: [
                    {/* TODO want this to be a shadow field */
                        "type": ModelBlockField.KEY,
                        "name": "FULLY_CONNECTE_LAYER_PARAMS"
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
                type: "knn_block",
                message0: "KNN classifier %1",
                args0: [
                    {
                        "type": "field_input",
                        "name": "KNN_CLASSIFIER_NAME"
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
                        "value": 3 /* can I dynamically set min/max based on # of examples? */
                    }
                ],
                  inputsInline: false,
                  colour: learning_color,
                  tooltip: "",
                  helpUrl: ""
              } as BlockDefinition,            
              { /* would like to make a hat block */
                kind: "block",
                type: "regression_block",
                message0: "logistic regression",
                args0: [],
                  inputsInline: false,
                  colour: learning_color,
                  tooltip: "",
                  helpUrl: ""
              } as BlockDefinition, 
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
                        text: "Create new class...",
                        callbackKey: "createNewClassButton"
                    },
                    {
                        kind: "block",
                        type: "dataset_block",
                    },
                    {
                        kind: "block",
                        type: "class_block",
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
                        type: "standardize_block",
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
                        type: "nn_block",
                    },
                    {
                        kind: "block",
                        type: "conv_layer_block"
                    },
                    {
                        kind: "block",
                        type: "max_pool_layer_block"
                    },
                    {
                        kind: "block",
                        type: "dropout_layer_block"
                    },
                    {
                        kind: "block",
                        type: "flatten_layer_block"
                    },
                    {
                        kind: "block",
                        type: "fully_connected_layer_block"
                    },
                    {
                        kind: "block",
                        type: "knn_block",
                    },
                    {
                        kind: "block",
                        type: "regression_block",
                    }
                ],
            },
        ]
    }
}

const modelBlockDsl = new ModelBlockDomainSpecificLanguage()
export default modelBlockDsl
