import {
    TFModelRequest,
    TFModelTrainRequest,
    TFModelPredictRequest,
    TFModelTrainResponse,
    TFModelPredictResponse,
    TFModelMessage
} from "../../../../workers/tf/dist/node_modules/tf.worker"
import workerProxy from "./proxy"

export default async function postModelRequest(
    message: TFModelRequest
    // eslint-disable-next-line @typescript-eslint/ban-types
): Promise<any> {
    const worker = workerProxy("tf")
    const res = await worker.postMessage<TFModelRequest, TFModelMessage>(message)
    return res?.data
}

export async function trainRequest(
    message: TFModelTrainRequest
    // eslint-disable-next-line @typescript-eslint/ban-types
): Promise<TFModelTrainResponse> {
    // Randi TODO check for missing data e.g. if (!message.trainingData) return undefined

    const worker = workerProxy("tf")
    const res = await worker.postMessage<TFModelTrainRequest, TFModelMessage>(message)
    return res?.data
}