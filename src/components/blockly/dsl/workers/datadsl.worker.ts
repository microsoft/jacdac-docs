/* eslint-disable @typescript-eslint/ban-types */
import { arrange as tidyArrange, desc, tidy } from "@tidyjs/tidy"

export interface DataMessage {
    id: string
    type: string
    data: object[]
}
export interface ArrangeMessage extends DataMessage {
    column: string
    descending: boolean
}

const { debug } = console

debug(`jdds: starting...`)

const handlers = {
    arrange: async (props: ArrangeMessage) => {
        const { data, column, descending } = props
        return tidy(data, tidyArrange(descending ? desc(column) : column))
    },
}

onmessage = async (event: { data: DataMessage }) => {
    const { data } = event
    const { id, type } = data

    const handler: (message: DataMessage) => Promise<DataMessage> =
        handlers[type]
    const resp = handler?.(data)
    postMessage({
        id,
        type,
        data: resp,
    })
}

debug(`jdds: ready...`)
