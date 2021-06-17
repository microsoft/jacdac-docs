import {
    TFModelRequest,
    TFModelMessage
} from "../../../../workers/tf/dist/node_modules/tf.worker"
import workerProxy from "./proxy"

export default async function postModelRequest(
    message: TFModelRequest
    // eslint-disable-next-line @typescript-eslint/ban-types
): Promise<object[]> {
    // check for missing data
    if (!message.trainingData) return undefined
    const worker = workerProxy("tf")
    const res = await worker.postMessage<TFModelRequest, TFModelMessage>(message)
    return res?.trainingData
}
