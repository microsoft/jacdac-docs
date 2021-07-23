/* eslint-disable @typescript-eslint/ban-types */
import * as tf from "@tensorflow/tfjs"


export interface TFModelMessage {
    worker: "tf";
    id?: string;
}

export interface TFModelRequest extends TFModelMessage {
    type?: string;
}

export interface TFModelTrainRequest extends TFModelRequest {
    type: "train";
    trainDataJSON: string;
    modelJSON: string;
}

export interface TFModelPredictRequest extends TFModelRequest {
    type: "predict";
    testData: number[][];
    modelJSON: string; // Randi TODO send trained model JSON as well? 
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handlers: { [index: string]: (props: any) => object[][] } = {
    train: (props: TFModelTrainRequest) => {
        return [{ trainedTFModel: null, armModel:null }, ]
    },
    predict: (props: TFModelPredictRequest) => {
        return [{ prediction: null }, ]
    }
}

function doSomething(message: TFModelRequest): object[] {
    try {
        const handler = handlers[message.type]
        return handler?.(message)
    } catch (e) {
        console.debug(e)
        return undefined
    }
}

async function handleMessage(event: MessageEvent) {
    const message: TFModelRequest = event.data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { worker, trainingData, ...rest } = message
    if (worker !== "tf") return
    //console.debug("Jacdac data in:", {message})
    const result = await doSomething(message)
    //console.debug("Jacdac data out:", {message})
    const resp = { worker, ...rest, data: result }
    self.postMessage(resp)
}

self.addEventListener("message", handleMessage)
console.debug(`jacdac tf: worker registered`)
