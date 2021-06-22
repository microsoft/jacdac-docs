/* eslint-disable @typescript-eslint/ban-types */
import { groupBy, summarize, mean, median, min, max, filter, select, arrange, desc, tidy } from "@tidyjs/tidy"

export interface DataMessage {
    worker: "data"
    id?: string
    data: object[]
    previousData?: object[]
}

export interface DataRequest extends DataMessage {
    type?: string
}

export interface DataArrangeRequest extends DataRequest {
    type: "arrange"
    column: string
    descending: boolean
}

export interface DataSelectRequest extends DataRequest {
    type: "select"
    columns: string[]
}

export interface DataDropRequest extends DataRequest {
    type: "drop"
    columns: string[]
}

export interface DataFilterColumnsRequest extends DataRequest {
    type: "filter_columns"
    columns: string[]
    logic: string
}

export interface DataFilterStringRequest extends DataRequest {
    type: "filter_string"
    column: string
    logic: string
    rhs: string
}

export interface DataSummarizeByGroupRequest extends DataRequest {
    type: "summarize_by_group"
    column: string
    by: string
    calc: string
}

export interface DataRecordWindowRequest extends DataRequest {
    type: "recordwindow"
    horizon: number
    data: { time?: number }[]
    previousData?: { time?: number }[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handlers: { [index: string]: (props: any) => object[] } = {
    arrange: (props: DataArrangeRequest) => {
        const { column, descending, data } = props
        return tidy(data, arrange(descending ? desc(column) : column))
    },
    select: (props: DataSelectRequest) => {
        const { columns, data } = props
        if (!columns) return data
        else return tidy(data, select(columns.map(column => `${column}`)))
    },
    drop: (props: DataDropRequest) => {
        const { columns, data } = props
        if (!columns) return data
        else return tidy(data, select(columns.map(column => `-${column}`)))
    },
    filter_string: (props: DataFilterStringRequest) => {
        const { column, logic, rhs, data } = props
        if (!column || !rhs) return data

        switch (logic) {
            case "gt":
                return tidy(
                    data,
                    filter(d => d[column] > rhs)
                )
                break
            case "lt":
                return tidy(
                    data,
                    filter(d => d[column] < rhs)
                )
                break
            case "ge":
                return tidy(
                    data,
                    filter(d => d[column] >= rhs)
                )
                break
            case "le":
                return tidy(
                    data,
                    filter(d => d[column] <= rhs)
                )
                break
            case "eq":
                return tidy(
                    data,
                    filter(d => d[column] == rhs)
                )
                break
            case "ne":
                return tidy(
                    data,
                    filter(d => d[column] != rhs)
                )
                break
            default:
                return data
                break
        }
    },
    filter_columns: (props: DataFilterColumnsRequest) => {
        const { columns, logic, data } = props
        const [left, right] = columns
        if (!left || !right) return data

        switch (logic) {
            case "gt":
                return tidy(
                    data,
                    filter(d => d[columns[0]] > d[columns[1]])
                )
                break
            case "lt":
                return tidy(
                    data,
                    filter(d => d[columns[0]] < d[columns[1]])
                )
                break
            case "ge":
                return tidy(
                    data,
                    filter(d => d[columns[0]] >= d[columns[1]])
                )
                break
            case "le":
                return tidy(
                    data,
                    filter(d => d[columns[0]] <= d[columns[1]])
                )
                break
            case "eq":
                return tidy(
                    data,
                    filter(d => d[columns[0]] === d[columns[1]])
                )
                break
            case "ne":
                return tidy(
                    data,
                    filter(d => d[columns[0]] !== d[columns[1]])
                )
                break
            default:
                return data
                break
        }
    },
    summarize_by_group: (props: DataSummarizeByGroupRequest) => { 
        const { column , by, calc, data } = props
        if (!column || !by || !calc) return data

        switch (calc) {
            case "mean":
                return tidy(
                    data,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    groupBy(by as any, [ summarize({ Mean: mean(column as any) }) ])
                  )
                break
            case "med":
                return tidy(
                    data,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    groupBy(by as any, [ summarize({ Median: median(column as any) }) ])
                )
                break
            case "min":
                return tidy(
                    data,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    groupBy(by as any, [ summarize({ Min: min(column as any) }) ])
                )
                break
            case "max":
                return tidy(
                    data,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    groupBy(by as any, [ summarize({ Max: max(column as any) }) ])
                )
                break
            default:
                return data
                break
        }
    },
    recordwindow: (props: DataRecordWindowRequest) => {
        const { data, previousData, horizon } = props
        if (!data?.length) return data
        const now = data[data.length - 1].time
        const previousNow = previousData?.[previousData?.length - 1]?.time
        if (now === undefined || previousNow === undefined)
            return data.filter(r => now - r.time < horizon)
        return [
            ...previousData.filter(r => now - r.time < horizon),
            ...data.filter(r => now - r.time < horizon && r.time > previousNow),
        ]
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
    const { worker, data, previousData, ...rest } = message
    if (worker !== "data") return
    //console.debug("Jacdac data in:", { message })
    const newData = await transformData(message)
    //console.debug("Jacdac data out:", { message })
    const resp = { worker, ...rest, data: newData }
    self.postMessage(resp)
}

self.addEventListener("message", handleMessage)
console.debug(`jacdac data: worker registered`)
