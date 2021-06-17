/* eslint-disable @typescript-eslint/ban-types */
import * as tf from "@tensorflow/tfjs"

export interface TFModelMessage {
    worker: "tf";
    id?: string;
    trainingData: object[][]; /* RANDI TODO figure out what format this will be */
    tfModel: object; /* JSON (?) object representing model */
}

export interface TFModelRequest extends TFModelMessage {
    type?: string;
}

export interface TFModelTrainRequest extends TFModelRequest {
    type: "train";
}

export interface TFModelPredictRequest extends TFModelRequest {
    type: "predict";
    testData: object[]; /* RANDI TODO figure out what format this will be */
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handlers: { [index: string]: (props: any) => object[][] } = {
    train: (props: TFModelTrainRequest) => {
        return undefined /* RANDI TODO figure out what these should return */
    },
    predict: (props: TFModelPredictRequest) => {
        return undefined /* RANDI TODO figure out what these should return */
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
