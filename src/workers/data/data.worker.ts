/* eslint-disable @typescript-eslint/ban-types */
import {
    groupBy,
    summarize,
    mean,
    median,
    min,
    max,
    filter,
    select,
    arrange,
    desc,
    tidy,
    mutate,
    count,
    SummarizeSpec,
    sliceHead,
    sliceTail,
    sliceMin,
    sliceMax,
    deviation,
    sum,
    variance,
    sliceSample,
} from "@tidyjs/tidy"
import { bin } from "d3-array"
import { sampleCorrelation, linearRegression } from "simple-statistics"

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

export interface DataMutateColumnsRequest extends DataRequest {
    type: "mutate_columns"
    newcolumn: string
    lhs: string
    rhs: string
    logic: string
}

export interface DataMutateNumberRequest extends DataRequest {
    type: "mutate_number"
    newcolumn: string
    lhs: string
    rhs: number
    logic: string
}

export interface DataSummarizeRequest extends DataRequest {
    type: "summarize"
    columns: string[]
    calc: string
}

export interface DataSummarizeByGroupRequest extends DataRequest {
    type: "summarize_by_group"
    column: string
    by: string
    calc: string
}

export interface DataCountRequest extends DataRequest {
    type: "count"
    column: string
}

export interface DataRecordWindowRequest extends DataRequest {
    type: "record_window"
    horizon: number
    data: { time?: number }[]
    previousData?: { time?: number }[]
}

export interface DataBinRequest extends DataRequest {
    type: "bin"
    column: string
}

export interface DataCorrelationRequest extends DataRequest {
    type: "correlation"
    column1: string
    column2: string
}

export interface DataLinearRegressionRequest extends DataRequest {
    type: "linear_regression"
    column1: string
    column2: string
}

export interface DataSliceOptions {
    sliceHead?: number
    sliceTail?: number
    sliceSample?: number
    
    sliceMax?: number
    sliceMin?: number
    sliceColumn?: string
}

export interface DataSliceRequest extends DataRequest, DataSliceOptions {
    type: "slice"
}

const summarizers = {
    average: mean,
    mean,
    median,
    min,
    max,
    sum,
    deviation,
    variance,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handlers: { [index: string]: (props: any) => object[] } = {
    arrange: (props: DataArrangeRequest) => {
        const { column, descending, data } = props
        return tidy(data, arrange(descending ? desc(column) : column))
    },
    select: (props: DataSelectRequest) => {
        const { columns, data } = props
        if (!columns?.length) return data
        else return tidy(data, select(columns.map(column => `${column}`)))
    },
    drop: (props: DataDropRequest) => {
        const { columns, data } = props
        if (!columns?.length) return data
        else return tidy(data, select(columns.map(column => `-${column}`)))
    },
    filter_string: (props: DataFilterStringRequest) => {
        const { column, logic, rhs, data } = props
        if (!column || rhs === undefined) return data

        switch (logic) {
            case "gt":
                return tidy(
                    data,
                    filter(d => d[column] > rhs)
                )
            case "lt":
                return tidy(
                    data,
                    filter(d => d[column] < rhs)
                )
            case "ge":
                return tidy(
                    data,
                    filter(d => d[column] >= rhs)
                )
            case "le":
                return tidy(
                    data,
                    filter(d => d[column] <= rhs)
                )
            case "eq":
                return tidy(
                    data,
                    filter(d => d[column] == rhs)
                )
            case "ne":
                return tidy(
                    data,
                    filter(d => d[column] != rhs)
                )
            default:
                return data
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
            case "lt":
                return tidy(
                    data,
                    filter(d => d[columns[0]] < d[columns[1]])
                )
            case "ge":
                return tidy(
                    data,
                    filter(d => d[columns[0]] >= d[columns[1]])
                )
            case "le":
                return tidy(
                    data,
                    filter(d => d[columns[0]] <= d[columns[1]])
                )
            case "eq":
                return tidy(
                    data,
                    filter(d => d[columns[0]] === d[columns[1]])
                )
            case "ne":
                return tidy(
                    data,
                    filter(d => d[columns[0]] !== d[columns[1]])
                )
            default:
                return data
        }
    },
    mutate_columns: (props: DataMutateColumnsRequest) => {
        const { newcolumn, lhs, rhs, logic, data } = props
        if (!newcolumn || !lhs || !rhs || !logic) return data

        const calc = {}
        switch (logic) {
            case "plus":
                calc[newcolumn] = d => d[lhs] + d[rhs]
                return tidy(data, mutate(calc))
            case "minus":
                calc[newcolumn] = d => d[lhs] - d[rhs]
                return tidy(data, mutate(calc))
            case "mult":
                calc[newcolumn] = d => d[lhs] * d[rhs]
                return tidy(data, mutate(calc))
            case "div":
                calc[newcolumn] = d => d[lhs] / d[rhs]
                return tidy(data, mutate(calc))
            case "gt":
                calc[newcolumn] = d => d[lhs] > d[rhs]
                return tidy(data, mutate(calc))
            case "lt":
                calc[newcolumn] = d => d[lhs] < d[rhs]
                return tidy(data, mutate(calc))
            case "ge":
                calc[newcolumn] = d => d[lhs] >= d[rhs]
                return tidy(data, mutate(calc))
            case "le":
                calc[newcolumn] = d => d[lhs] <= d[rhs]
                return tidy(data, mutate(calc))
            case "eq":
                calc[newcolumn] = d => d[lhs] == d[rhs]
                return tidy(data, mutate(calc))
            case "ne":
                calc[newcolumn] = d => d[lhs] != d[rhs]
                return tidy(data, mutate(calc))
            default:
                return data
        }
    },
    mutate_number: (props: DataMutateNumberRequest) => {
        const { newcolumn, lhs, rhs, logic, data } = props
        if (newcolumn === undefined || !lhs || rhs === undefined || !logic)
            return data

        const calc = {}
        switch (logic) {
            case "plus":
                calc[newcolumn] = d => d[lhs] + rhs
                return tidy(data, mutate(calc))
            case "minus":
                calc[newcolumn] = d => d[lhs] - rhs
                return tidy(data, mutate(calc))
            case "mult":
                calc[newcolumn] = d => d[lhs] * rhs
                return tidy(data, mutate(calc))
            case "div":
                calc[newcolumn] = d => d[lhs] / rhs
                return tidy(data, mutate(calc))
            case "gt":
                calc[newcolumn] = d => d[lhs] > rhs
                return tidy(data, mutate(calc))
            case "lt":
                calc[newcolumn] = d => d[lhs] < rhs
                return tidy(data, mutate(calc))
            case "ge":
                calc[newcolumn] = d => d[lhs] >= rhs
                return tidy(data, mutate(calc))
            case "le":
                calc[newcolumn] = d => d[lhs] <= rhs
                return tidy(data, mutate(calc))
            case "eq":
                calc[newcolumn] = d => d[lhs] == rhs
                return tidy(data, mutate(calc))
            case "ne":
                calc[newcolumn] = d => d[lhs] != rhs
                return tidy(data, mutate(calc))
            default:
                return data
        }
    },
    summarize: (props: DataSummarizeRequest) => {
        const { columns, calc, data } = props
        if (!columns?.length || !calc) return data

        const summarizer = summarizers[calc]
        if (!summarizer) return data

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const items: SummarizeSpec<Object> = {}
        columns.forEach(column => (items[column] = summarizer(column)))
        return tidy(data, summarize(items))
    },
    summarize_by_group: (props: DataSummarizeByGroupRequest) => {
        const { column, by, calc, data } = props
        if (!column || !by || !calc) return data

        const summarizer = summarizers[calc]
        if (!summarizer) return data

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const items: SummarizeSpec<Object> = {}
        items[column] = summarizer(column)
        return tidy(
            data,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            groupBy(by as any, [summarize(summarizer)])
        )
    },
    count: (props: DataCountRequest) => {
        const { column, data } = props
        if (!column) return data

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return tidy(data, count(column as any, { name: "count" }))
    },
    record_window: (props: DataRecordWindowRequest) => {
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
    bin: (props: DataBinRequest) => {
        const { data, column } = props
        const binner = bin().value(d => d[column])
        const binned: (object[] & { x0: number; x1: number })[] = binner(data)
        // convert back to objects
        return binned.map(b => ({ count: b.length, x0: b.x0, x1: b.x1 }))
    },
    correlation: (props: DataCorrelationRequest) => {
        const { data, column1, column2 } = props
        if (!column1 || !column2) return data

        const x = data.map(obj => obj[column1])
        const y = data.map(obj => obj[column2])
        return [{ correlation: sampleCorrelation(x, y).toFixed(3) }]
    },
    linear_regression: (props: DataCorrelationRequest) => {
        const { data, column1, column2 } = props
        if (!column1 || !column2) return data

        const x = data.map(obj => obj[column1])
        const y = data.map(obj => obj[column2])
        const linregmb = linearRegression([x, y])
        return [
            { slope: linregmb.m.toFixed(3), intercept: linregmb.b.toFixed(3) },
        ]
    },
    slice: (props: DataSliceRequest) => {
        const { data } = props
        let index = 0
        const tidied: object[] = data
            ? (tidy(
                  data,
                  props.sliceHead ? sliceHead(props.sliceHead) : undefined,
                  props.sliceTail ? sliceTail(props.sliceTail) : undefined,
                  props.sliceSample
                      ? sliceSample(props.sliceSample)
                      : undefined,
                  props.sliceMin
                      ? sliceMin(props.sliceMin, props.sliceColumn)
                      : undefined,
                  props.sliceMax
                      ? sliceMax(props.sliceMax, props.sliceColumn)
                      : undefined,
                  mutate({ index: () => index++ })
              ) as object[])
            : []
        return tidied
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
    const { id, worker, data, previousData, ...rest } = message
    if (worker !== "data") return

    try {
        //console.debug("Jacdac data in:", { message })
        const newData = await transformData(message)
        //console.debug("Jacdac data out:", { message })
        const resp = { id, worker, ...rest, data: newData }
        self.postMessage(resp)
    } catch (e) {
        self.postMessage({
            id,
            worker,
            error: e + "",
        })
    }
}

self.addEventListener("message", handleMessage)
console.debug(`jacdac data: worker registered`)
