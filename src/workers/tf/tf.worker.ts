/* eslint-disable @typescript-eslint/ban-types */
import {
    io,
    layers,
    loadLayersModel,
    oneHot,
    sequential,
    tensor1d,
    tensor3d,
    Tensor,
    tensor,
    Sequential,
} from "@tensorflow/tfjs"

import { compileAndTest } from "../../../ml4f"

export interface TFModelObj {
    name: string
    inputShape: number[]
    inputTypes: string[]
    labels: string[]
    modelJSON: string
    outputShape: number
    status: string
    trainingAcc: number
    weights: number[]
}

export interface TFModelMessage {
    worker: "tf"
    type?: string
    id?: string
    data?: any
}

export interface TFModelCompileRequest extends TFModelMessage {
    type: "compile"
    data: {
        modelBlockJSON: string
        model: TFModelObj
    }
}

export interface TFModelCompileResponse extends TFModelMessage {
    type: "compile"
    data: {
        modelJSON: string
        modelSummary: string[]
    }
}

export interface TFModelTrainRequest extends TFModelMessage {
    type: "train"
    data: {
        modelBlockJSON: string
        model: TFModelObj
        xData: number[]
        yData: number[]
    }
}

export interface TFModelTrainResponse extends TFModelMessage {
    type: "train"
    data: {
        modelJSON: string // Randi TODO remove
        modelWeights: ArrayBuffer
        modelSummary: string[] // Randi TODO remove
        trainingLogs: number[]
        armModel: string
    }
}

export interface TFModelPredictRequest extends TFModelMessage {
    type: "predict"
    data: {
        model: TFModelObj
        zData: number[][]
    }
}

export interface TFModelPredictResponse extends TFModelMessage {
    type: "predict"
    data: {
        prediction: number[]
    }
}

function addLayer(layerObj: any, inputShape: number[], outputShape: number) {
    let layer
    const params = layerObj.inputs[0].fields.expand_button.value
    switch (layerObj.type) {
        case "model_block_conv_layer":
            if (inputShape) {
                layer = layers.conv1d({
                    inputShape: inputShape,
                    kernelSize: [params.kernelSize],
                    strides: params.strideSize,
                    filters: params.numFilters,
                    activation: params.activation,
                })
            } else {
                layer = layers.conv1d({
                    kernelSize: [params.kernelSize],
                    strides: params.strideSize,
                    filters: params.numFilters,
                    activation: params.activation,
                })
            }

            break
        case "model_block_max_pool_layer":
            layer = layers.maxPooling1d({
                poolSize: [params.poolSize],
            })
            break
        case "model_block_dropout_layer":
            layer = layers.dropout({
                rate: params.rate,
            })
            break
        case "model_block_flatten_layer":
            layer = layers.flatten()
            break
        case "model_block_dense_layer":
            if (inputShape) {
                layer = layers.dense({
                    inputShape: inputShape,
                    units: outputShape || params.numUnits,
                    activation: params.activation,
                })
            } else {
                layer = layers.dense({
                    units: outputShape || params.numUnits,
                    activation: params.activation,
                })
            }
            break
    }
    return layer
}

function buildDefaultModel(
    modelLayers: Sequential,
    inputShape: number[],
    outputShape: number
) {
    modelLayers.add(
        layers.conv1d({
            inputShape: inputShape,
            kernelSize: [4],
            strides: 1,
            filters: 16,
            activation: "relu",
        })
    )
    modelLayers.add(
        layers.maxPooling1d({
            poolSize: [2],
        })
    )
    modelLayers.add(
        layers.dropout({
            rate: 0.1,
        })
    )
    modelLayers.add(
        layers.conv1d({
            kernelSize: [2],
            strides: 1,
            filters: 16,
            activation: "relu",
        })
    )
    modelLayers.add(
        layers.maxPooling1d({
            poolSize: [2],
        })
    )
    modelLayers.add(
        layers.dropout({
            rate: 0.1,
        })
    )
    modelLayers.add(
        layers.conv1d({
            kernelSize: [2],
            strides: 1,
            filters: 16,
            activation: "relu",
        })
    )
    modelLayers.add(
        layers.dropout({
            rate: 0.1,
        })
    )
    // moving from 3-dimensional data to 2-dimensional requires a flattening layer
    modelLayers.add(layers.flatten())
    // must end with a fully connected layer with size equal to number of labels
    modelLayers.add(
        layers.dense({
            units: outputShape,
            activation: "softmax",
        })
    )

    modelLayers.compile({
        loss: "categoricalCrossentropy",
        optimizer: "adam",
        metrics: ["acc"],
    })
}

// send an object with model as blockly JSON
function buildModelFromJSON(model: TFModelObj, block: any) {
    const modelLayers = sequential()
    let epochs = 250

    if (block == "") {
        buildDefaultModel(modelLayers, model.inputShape, model.outputShape)
    } else {
        // Collect layers for neural network blocks
        const layerBlock = block.inputs.filter(
            input => input.name == "LAYER_INPUTS"
        )[0].child
        console.log("Randi layer block ", layerBlock)
        let layer = addLayer(layerBlock, model.inputShape, null)
        modelLayers.add(layer)
        if (layerBlock) {
            layerBlock.children?.forEach((childBlock, idx) => {
                if (idx == layerBlock.children.length - 1) {
                    // last layer should be a dense layer with units equal to output shape
                    layer = addLayer(childBlock, null, model.outputShape)
                } else {
                    layer = addLayer(childBlock, null, null)
                }
                modelLayers.add(layer)
            })
        }

        const params = block.inputs[1].fields.expand_button.value
        modelLayers.compile({
            loss: params.lossFn,
            optimizer: params.optimizer,
            metrics: [params.metrics],
        })

        epochs = params.numEpochs
    }

    return { model: modelLayers, epochs: epochs }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handlers: {
    [index: string]: (props: TFModelMessage) => Promise<TFModelMessage>
} = {
    compile: async (props: TFModelCompileRequest) => {
        const { data } = props

        // get model
        const { epochs, model } = buildModelFromJSON(
            data.model,
            data.modelBlockJSON
        )

        // save summary of model
        const modelSummary = []
        model.summary(null, null, line => modelSummary.push(line))

        // save model as model artifacts
        let mod: io.ModelArtifacts
        await model.save({
            save: m => {
                mod = m
                const res: io.SaveResult = {
                    modelArtifactsInfo: {
                        dateSaved: new Date(),
                        modelTopologyType: "JSON",
                    },
                }
                return Promise.resolve(res)
            },
        })

        // return data
        const result = {
            modelJSON: JSON.stringify(mod),
            modelSummary: modelSummary,
        }
        return { ...props, data: result }
    },
    train: async (props: TFModelTrainRequest) => {
        const { data } = props

        // get dataset
        const xs = tensor3d(data.xData, [
            data.xData.length,
            data.model.inputShape[0],
            data.model.inputShape[1],
        ])
        const ys = oneHot(
            tensor1d(data.yData, "int32"),
            data.model.labels.length
        )

        // get model
        const { epochs, model } = buildModelFromJSON(
            data.model,
            data.modelBlockJSON
        )

        // save summary of model
        const modelSummary = []
        model.summary(null, null, line => modelSummary.push(line))

        // model.fit
        let trainingLogs = [] // space to save training loss and accuracy data
        await model
            .fit(xs, ys, {
                epochs: epochs,
                validationSplit: 0.2,
                callbacks: {
                    onEpochEnd, // onTrainBegin, onTrainEnd, onEpochBegin, onEpochEnd, onBatchBegin
                },
            })
            .then(info => {
                trainingLogs = info.history.acc
            })

        // save model as model artifacts
        let mod: io.ModelArtifacts
        await model.save({
            save: m => {
                mod = m
                const res: io.SaveResult = {
                    modelArtifactsInfo: {
                        dateSaved: new Date(),
                        modelTopologyType: "JSON",
                    },
                }
                return Promise.resolve(res)
            },
        })
        // remove weight data from model artifacts and save separately
        //   it seems that model won't save correctly otherwise
        const weights = mod.weightData
        mod.weightData = null

        // compile arm model for mcu
        /*const armcompiled = await compileAndTest(model, {
            verbose: true,
            includeTest: true,
            float16weights: false,
            optimize: true,
        })*/
        const armcompiled = ""

        // return data
        const result = {
            modelJSON: JSON.stringify(mod),
            modelWeights: weights,
            modelSummary: modelSummary,
            trainingLogs: trainingLogs,
            armModel: JSON.stringify(armcompiled),
        }
        return { ...props, data: result }
    },
    predict: async (props: TFModelPredictRequest) => {
        const { data } = props

        /// get dataset
        const zs = tensor(data.zData)

        // get model
        const modelObj = JSON.parse(data.model.modelJSON)
        // load weight data into model before loading the model
        modelObj.weightData = new Uint32Array(data.model.weights).buffer
        const model = await loadLayersModel({
            load: () => Promise.resolve(modelObj),
        })

        // model.predict
        const prediction = (await model.predict(zs)) as Tensor
        const predictArr = await prediction.dataSync()

        // return prediction
        const result = { prediction: predictArr }

        return { ...props, data: result }
    },
}

async function dispatchAsyncMessages(message: TFModelMessage) {
    try {
        const handler = handlers[message.type]
        return await handler?.(message)
    } catch (e) {
        console.error(e)
        return undefined
    }
}

async function handleMessage(event: MessageEvent) {
    const message: TFModelMessage = event.data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { worker, ...rest } = message
    if (worker !== "tf") return

    const resp = await dispatchAsyncMessages(message)
    self.postMessage(resp)
}

function onEpochEnd(epoch, logs) {
    self.postMessage({ type: "progress", data: logs })
}

self.addEventListener("message", handleMessage)
console.debug(`jacdac tf: worker registered`)
