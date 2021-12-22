// given a sequence of data science blocks (starting with table)
// create a symbolic table that defines current table in terms of
// excel operations

import { tidy, select, filter, mutate, SummarizeSpec, summarize, groupBy, count, sliceHead, sliceTail, sliceSample, sliceMin, sliceMax } from "@tidyjs/tidy"
import { sampleCorrelation, linearRegression } from "simple-statistics"
import { CHANGE } from "../../../../jacdac-ts/src/jdom/constants"
import { DataArrangeRequest, DataBinRequest, DataCorrelationRequest, DataCountRequest, DataDropRequest, DataFilterColumnsRequest, DataFilterStringRequest, DataMessage, DataMutateColumnsRequest, DataMutateNumberRequest, DataRecordWindowRequest, DataRequest, DataSelectRequest, DataSliceRequest, DataSummarizeByGroupRequest, DataSummarizeRequest } from "../../../workers/data/data.worker"
import { identityTransformData, resolveBlockDefinition } from "../toolbox"
import { BlockWithServices, resolveBlockServices } from "../WorkspaceContext"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handlers: { [index: string]: (props: any) => object[] } = {
    arrange: (props: DataArrangeRequest) => {
        const { column, descending, data } = props
        return undefined // tidy(data, arrange(descending ? desc(column) : column))
    },
    select: (props: DataSelectRequest) => {
        const { columns, data } = props
        if (!columns?.length) return data
        else return undefined // tidy(data, select(columns.map(column => `${column}`)))
    },
    drop: (props: DataDropRequest) => {
        const { columns, data } = props
        if (!columns?.length) return data
        else return undefined // tidy(data, select(columns.map(column => `-${column}`)))
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

        const items: SummarizeSpec<Object> = {}
        items[column] = summarizer(column)
        const res = tidy(
            data,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            groupBy(by as any, [summarize(items)])
        )
        console.debug(`summarize by group`, { res })
        return res
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

export function data2excel(block: BlockWithServices) {
    const { jacdacServices: services } = block
    // register data transforms
    const { transformData } = resolveBlockDefinition(block.type) || {}
    if (!transformData) return

    const applyTransform = async () => {
        if (!block.isEnabled() || block.isInFlyout) return

        // transfer data to the next block
        const nextServices = resolveBlockServices(
            block.nextConnection?.targetBlock()
        )
        try {
            services.setDataWarning(undefined)
            // eslint-disable-next-line @typescript-eslint/ban-types
            let newData: object[] | DataMessage
            if (transformData === identityTransformData) newData = services.data
            else {
                newData = 
                    await transformData(
                        block,
                        services.data,
                        nextServices?.data
                    )
            }

            if (!Array.isArray(newData)) {
                switch(newData.type) {

                }   
            }
            // propagate
            // services.transformedData = newData

            // check if pass through
            const def = resolveBlockDefinition(block.type)
            if (def?.passthroughData) newData = services.data

            if (nextServices) nextServices.data = newData
        } catch (e) {
            console.debug(e)
        }
    }
    // apply transform, then register for change
    applyTransform().then(() => services.on(CHANGE, applyTransform))
}
