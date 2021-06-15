/* eslint-disable @typescript-eslint/ban-types */
import { select, arrange, desc, tidy } from "@tidyjs/tidy"

export interface DataMessage {
    worker: "data"
    id?: string
    data: object[]
}

export interface DataRequest extends DataMessage {
    type?: string
}

export interface DataArrangeRequest extends DataRequest {
    type: "arrange"
    column: string
    descending: boolean
}

export interface DataDropRequest extends DataRequest {
    type: "drop"
    column: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handlers: { [index: string]: (props: any) => object[] } = {
    arrange: (props: DataArrangeRequest) => {
        const { column, descending, data } = props
        return tidy(data, arrange(descending ? desc(column) : column))
    },
    drop: (props: DataDropRequest) => {
        const { column, data } = props
        const minus_sign = "-"
        return tidy(data, select([minus_sign.concat(column.toString())]))
    },
}

function transformData(message: DataRequest): object[] {
    try {
        const handler = handlers[message.type]
        return handler?.(message)
    } catch (e) {
        console.debug(e)
        return undefined
    }
}

async function handleMessage(event: MessageEvent) {
    const message: DataRequest = event.data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { worker, data, ...rest } = message
    if (worker !== "data") return

    const newData = await transformData(message)
    const resp = { jacdacdata: true, ...rest, data: newData }
    self.postMessage(resp)
}

self.addEventListener("message", handleMessage)
console.debug(`jacdac data: worker registered`)
