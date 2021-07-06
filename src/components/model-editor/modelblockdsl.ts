import {
    BlockDefinition,
    CategoryDefinition,
    MODEL_BLOCK_CLASS_STATEMENT_TYPE,
    MODEL_BLOCK_PREPROCESS_STATEMENT_TYPE,
    MODEL_BLOCK_LAYER_STATEMENT_TYPE,
} from "../blockly/toolbox"
import Blockly, { BlockSvg, FieldVariable, Variables } from "blockly"
import BlockDomainSpecificLanguage from "../blockly/dsl/dsl"

import ModelBlockField from "../blockly/fields/ModelBlockFields/ModelBlockField"
import DatasetBlockField from "../blockly/fields/ModelBlockFields/DatasetBlockField"
import RecordingBlockField from "../blockly/fields/ModelBlockFields/RecordingBlockField"
import SmoothingBlockField from "../blockly/fields/ModelBlockFields/SmoothingBlockField"
import KNNBlockField from "../blockly/fields/ModelBlockFields/KNNBlockField"
import NeuralNetworkBlockField from "../blockly/fields/ModelBlockFields/NeuralNetworkBlockField"
import ConvLayerBlockField from "../blockly/fields/ModelBlockFields/ConvLayerBlockField"
import PoolingLayerBlockField from "../blockly/fields/ModelBlockFields/PoolingLayerBlockField"
import DropoutLayerBlockField from "../blockly/fields/ModelBlockFields/DropoutLayerBlockField"
import FlattenLayerBlockField from "../blockly/fields/ModelBlockFields/FlattenLayerBlockField"
import DenseLayerBlockField from "../blockly/fields/ModelBlockFields/DenseLayerBlockField"

import postModelRequest from "../blockly/dsl/workers/tf.proxy"
import {
    TFModelTrainRequest,
    TFModelPredictRequest,
} from "../../workers/tf/dist/node_modules/tf.worker"

export const MODEL_BLOCKS = "model_block_"
export const MB_DATASET_TYPE = "ModelBlockDataset"
export const MB_CLASS_TYPE = "ModelBlockClass"
export const MB_CLASSIFIER_TYPE = "ModelBlockClassifier"

const dataset_color = "#123456"
const class_color = "#2466A8"
const processing_color = "#ac2469"
const learning_color = "#561234"
const layer_color = "#97207a"

// TODO Randi figure out some way to update this if a variable gets deleted?
const datasetNames = []
const classNames = []

export class ModelBlockDomainSpecificLanguage
    implements BlockDomainSpecificLanguage
{
    id = "modelBlocks"
    createBlocks() {
        const blocks: BlockDefinition[] = [
            /* Dataset blocks */
            {
                kind: "block",
                type: MODEL_BLOCKS + "dataset",
                message0: "dataset %1 %2",
                args0: [
                    {
                        type: "field_variable",
                        name: "DATASET_NAME",
                        variable: "dataset1",
                        variableTypes: [MB_DATASET_TYPE],
                        defaultType: MB_DATASET_TYPE,
                    },
                    {
                        /* TODO make a specific field for dataset definition, should display a + icon */
                        type: DatasetBlockField.KEY,
                        name: "DATASET_PARAMS",
                        /* dropdown ability to automatically generate a test dataset */
                    },
                ],
                message1: "%1",
                args1: [
                    {
                        type: "input_statement",
                        name: "DATASET_CONFIG",
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
                        variable:
                            "class1" /* TODO Randi this should display class variable types or class1 */,
                        variableTypes: [MB_CLASS_TYPE],
                        defaultType: MB_CLASS_TYPE,
                    },
                    {
                        /* TODO make a specific field for class info, should display a + icon */
                        type: RecordingBlockField.KEY,
                        name: "RECORDING_BLOCK_DETAILS",
                        /* dropdown have button to edit recording */
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
                message0: "smooth data %1", // calculates moving average over a particular window
                args0: [
                    {
                        /* TODO make a specific field for dataset smoothing, should display window size */
                        type: SmoothingBlockField.KEY,
                        name: "SMOOTH_PREPROCESS_SIZE",
                        /* variables: window size, stride */
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
                // would like to make this a hat block
                kind: "block",
                type: MODEL_BLOCKS + "nn",
                message0: "neural network classifier %1 %2",
                args0: [
                    {
                        type: "field_variable",
                        name: "CLASSIFIER_NAME",
                        variable:
                            "classifier1" /*  TODO Randi this should display classifier variable types or NN classifier1 */,
                        variableTypes: [MB_CLASSIFIER_TYPE],
                        defaultType: MB_CLASSIFIER_TYPE,
                    },
                    {
                        /* TODO make a specific field for NN classifiers, should display a + icon */
                        type: NeuralNetworkBlockField.KEY,
                        name: "NN_CLASSIFIER_PARAMS",
                        /* variables: learning rate, optimizer, epochs P*/
                    },
                ],
                message1: "training data %1",
                args1: [
                    {
                        type: "field_variable",
                        name: "NN_TRAINING",
                        variable: "dataset1",
                        variableTypes: [MB_DATASET_TYPE],
                        defaultType: MB_DATASET_TYPE,
                    },
                ],
                /*message2: "validation data %1",
                args2: [
                    {
                        type: "field_variable",
                        name: "NN_TESTING",                        
                        variableTypes: [MB_DATASET_TYPE],
                        defaultType: MB_DATASET_TYPE,
                    }
                ],*/
                message2: "%1",
                args2: [
                    {
                        type: "input_statement",
                        name: "NN_LAYERS",
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
                        /* TODO make a specific field for conv layers, should display filter size */
                        type: ConvLayerBlockField.KEY,
                        name: "CONV_LAYER_PARAMS",
                        /* variables: filter size NxN, number of filters M, stride size P*/
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
                        /* TODO make a specific field for pooling layers, should display pool size */
                        type: PoolingLayerBlockField.KEY,
                        name: "MAX_POOL_LAYER_PARAMS",
                        /* variables: pool size NxN, stride size P*/
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
                        /* TODO make a specific field for dropout layers, should display dropout rate */
                        type: DropoutLayerBlockField.KEY,
                        name: "DROPOUT_LAYER_PARAMS",
                        /* variables: rate N*/
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
                        /* TODO make a specific field for flatten layer, should display (size) */
                        type: FlattenLayerBlockField.KEY,
                        name: "FLATTEN_LAYER_PARAMS",
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
                        /* TODO make a specific field for dense layers, should display number of nodes */
                        type: DenseLayerBlockField.KEY,
                        name: "DENSE_LAYER_PARAMS",
                        /* variables: number of nodes P*/
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
                /* TODO would like to make a hat block */ kind: "block",
                type: MODEL_BLOCKS + "knn",
                message0: "K nearest neighbors classifier %1 %2",
                args0: [
                    {
                        type: "field_variable",
                        name: "CLASSIFIER_NAME",
                        variable:
                            "classifier2" /* TODO Randi this should display class variable types or KNN classifier1 */,
                        variableTypes: [MB_CLASSIFIER_TYPE],
                        defaultType: MB_CLASSIFIER_TYPE,
                    },
                    {
                        /* TODO make a specific field for KNN classifiers should display ... */
                        type: KNNBlockField.KEY,
                        name: "KNN_PARAMS",
                        /* variables: ... */
                    },
                ],
                message1: "training data %1",
                args1: [
                    {
                        type: "field_variable",
                        name: "KNN_TRAINING",
                        variable: "dataset1",
                        variableTypes: [MB_DATASET_TYPE],
                        defaultType: MB_DATASET_TYPE,
                    },
                ],
                message2: "k %1",
                args2: [
                    {
                        type: "field_number",
                        name: "KNN_K_VALUE",
                        value: 3 /* TODO dynamically set max based on # of examples? */,
                    },
                ],
                inputsInline: false,
                colour: learning_color,
                tooltip: "",
                helpUrl: "",
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
                        kind: "label",
                        text: "Datasets",
                    },
                    {
                        kind: "button",
                        text: "Create new dataset...",
                        callbackKey: "createNewDatasetButton",
                        //callback: workspace => this.addNewDataset(workspace),
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "dataset",
                    },
                    {
                        kind: "label",
                        text: "Classes",
                    },
                    {
                        kind: "button",
                        text: "Create new recording...",
                        callbackKey: "createNewRecordingButton",
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "recording",
                    },
                ],
            },
            <CategoryDefinition>{
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
                        type: MODEL_BLOCKS + "smooth",
                    },
                ],
            },
            <CategoryDefinition>{
                kind: "category",
                name: "Learning",
                colour: learning_color,
                contents: [
                    {
                        kind: "button",
                        text: "Create new ML classifier...",
                        callbackKey: "createNewClassifierButton",
                    },
                    {
                        kind: "label",
                        text: "K Nearest Neighbors",
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "knn",
                    },
                    {
                        kind: "label",
                        text: "Neural Networks",
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "nn",
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "conv_layer",
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "max_pool_layer",
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "dropout_layer",
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "flatten_layer",
                    },
                    {
                        kind: "block",
                        type: MODEL_BLOCKS + "dense_layer",
                    },
                ],
            },
        ]
    }
}

const modelBlockDsl = new ModelBlockDomainSpecificLanguage()
export default modelBlockDsl
