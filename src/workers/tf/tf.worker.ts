/* eslint-disable @typescript-eslint/ban-types */
import { Tensor, loadLayersModel, tensor, io } from "@tensorflow/tfjs"

export interface TFModelMessage {
    worker: "tf"
    id?: string
    data?: any
}

export interface TFModelRequest extends TFModelMessage {
    type?: string
}

export interface TFModelTrainRequest extends TFModelRequest {
    type: "train"
    trainingDataJSON: string
    modelDataJSON: string
}

export interface TFModelTrainResponse extends TFModelMessage {
    type: "train"
    trainedWeightsJSON: string
    armModelJSON: string
}

export interface TFModelPredictRequest extends TFModelRequest {
    type: "predict"
    testingDataJSON: string
    modelDataJSON: string
}

export interface TFModelPredictResponse extends TFModelMessage {
    type: "train"
    predictionJSON: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handlers: { [index: string]: (props: any) => Promise<any> } = {
    train: async (props: TFModelTrainRequest) => {
        const { data } = props
        let trainingInfo = []

        // get dataset and training info
        //console.log("Randi got training info ", data.trainingParams)
        const xs = tensor(JSON.parse(data.xJSON))
        const ys = tensor(JSON.parse(data.yJSON))
        let epochs, loss, optimizer, metrics

        if (data.trainingParams) {
            const params = JSON.parse(data.trainingParams)
            epochs = params.epochs
            loss = params.loss
            optimizer = params.optimizer
            metrics = params.metrics
        } else {
            console.warn("No training parameters sent, using defaults")
            epochs = 250
            loss = "categoricalCrossentropy"
            optimizer = "adam"
            metrics = ["accuracy"]
        }

        // get model
        const modelObj = JSON.parse(data.modelJSON)
        const model = await loadLayersModel({
            load: () => Promise.resolve(modelObj),
        })
        model.compile({
            loss: loss,
            optimizer: optimizer,
            metrics: metrics,
        })

        // model.fit
        await model
            .fit(xs, ys, {
                epochs: epochs,
                callbacks: {
                    onEpochEnd, // onTrainBegin, onTrainEnd, onEpochBegin, onEpochEnd, onBatchBegin
                },
            })
            .then(info => {
                trainingInfo = info.history.acc
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

        // return weight data
        const weightsJSON = JSON.stringify(
            Array.from(new Uint32Array(mod.weightData))
        )
        const infoJSON = JSON.stringify(trainingInfo)
        return [{ trainedWeightsBuffer: weightsJSON, trainingInfo: infoJSON }]
    },
    predict: async (props: TFModelPredictRequest) => {
        const { data } = props

        // turn datasetjson into dataset
        /// get dataset and training info
        const zs = tensor(JSON.parse(data.zJSON))

        // get model
        const modelObj = JSON.parse(data.modelJSON)
        const weightObj = JSON.parse(data.weightsJSON)
        modelObj.weightData = new Uint32Array(weightObj).buffer
        const model = await loadLayersModel({
            load: () => Promise.resolve(modelObj),
        })

        // model.predict
        const prediction = (await model.predict(zs)) as Tensor
        const predictJSON = JSON.stringify(await prediction.array())

        // return prediction
        return [{ prediction: predictJSON }]
    },
}

async function dispatchAsyncMessages(message: TFModelRequest) {
    try {
        const handler = handlers[message.type]
        return await handler?.(message)
    } catch (e) {
        console.error(e)
        return undefined
    }
}

async function handleMessage(event: MessageEvent) {
    const message: TFModelRequest = event.data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { worker, ...rest } = message
    if (worker !== "tf") return

    const result = await dispatchAsyncMessages(message)

    const resp = { worker, ...rest, data: result }
    self.postMessage(resp)
}

function onEpochEnd(epoch, logs) {
    // Randi TODO add callback to send messages as it trains
    self.postMessage({ type: "progress", data: logs })
}

self.addEventListener("message", handleMessage)
console.debug(`jacdac tf: worker registered`)
