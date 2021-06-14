/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { DataMessage } from "../../../../workers/dist/node_modules/data.worker"
import { SMap } from "../../../../../jacdac-ts/src/jdom/utils"
import createWorker from "./workers"

class WorkerProxy {
    readonly pendings: SMap<{
        resolve: (res: any) => void
        reject: (err: any) => void
    }> = {}
    constructor(readonly worker: Worker) {
        this.worker.addEventListener("message", this.handleMessage.bind(this))
    }

    private handleMessage(event: MessageEvent) {
        const { data: message } = event
        const { id } = message
        console.log(`handle message`, message)
        const pending = this.pendings[id]
        if (pending) pending.resolve(message)
    }

    postMessage<T, R>(message: { id?: string } & T): Promise<R> {
        message.id = message.id || Math.random() + ""
        console.log(`post message`, message)
        return new Promise<R>((resolve, reject) => {
            this.pendings[message.id] = { resolve, reject }
            this.worker.postMessage(message)
        })
    }
}
let _worker: WorkerProxy

function worker() {
    if (!_worker) _worker = new WorkerProxy(createWorker())
    return _worker
}

export default async function postTransformData(
    message: DataMessage
): Promise<object[]> {
    console.log(`post transform`, { message })
    const ws = worker()
    message.jacdacdata = true
    const res = await ws.postMessage<DataMessage, DataMessage>(message)
    console.log(`receive transform`, { res })
    return res?.data
}
