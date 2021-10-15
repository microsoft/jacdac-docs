import { isArray } from "vega"
import type {
    DataRequest,
    DataMessage,
} from "../../../../workers/data/dist/node_modules/data.worker"
import workerProxy from "./proxy"

export default async function postTransformData(
    // eslint-disable-next-line @typescript-eslint/ban-types
    message: DataRequest | object[]
    // eslint-disable-next-line @typescript-eslint/ban-types
): Promise<object[]> {
    if (!message)
        return undefined
    if (isArray(message))
        return message
    // check for missing data
    if (!message.data) return undefined
    const worker = workerProxy("data")
    const res = await worker.postMessage<DataRequest, DataMessage>(message)
    return res?.data
}
