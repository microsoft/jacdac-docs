import React, { useContext } from "react"
import { ReactFieldJSON } from "./ReactField"
import WorkspaceContext from "../WorkspaceContext"
import ReactInlineField from "./ReactInlineField"
import useBlockData from "../useBlockData"
import { DataGrid, GridColDef } from "@material-ui/data-grid"
import { PointerBoundary } from "./PointerBoundary"

function DataTableWidget() {
    const { sourceBlock } = useContext(WorkspaceContext)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = useBlockData<any>(sourceBlock)

    console.log(`show table`, { data })
    if (!data?.length) return null

    const columns = Object.keys(data[0] || {})
        .filter(h => h !== "id")
        .map(
            h =>
                ({
                    field: h,
                    headerName: h,
                } as GridColDef)
        )

    // add ids if needed
    data.filter(r => !r.id).forEach(r => (r.id = Math.random()))

    return (
        <div style={{ height: "20rem" }}>
            <PointerBoundary>
                <DataGrid rows={data} columns={columns} pageSize={10} />
            </PointerBoundary>
        </div>
    )
}

export default class DataTableField extends ReactInlineField {
    static KEY = "jacdac_field_data_table"
    static EDITABLE = false

    static fromJson(options: ReactFieldJSON) {
        return new DataTableField(options)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(options?: any) {
        super(options)
    }

    protected createContainer(): HTMLDivElement {
        const c = document.createElement("div")
        return c
    }

    renderInlineField() {
        return <DataTableWidget />
    }
}
