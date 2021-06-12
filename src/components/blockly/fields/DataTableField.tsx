import React, { useContext } from "react"
import { ReactFieldJSON } from "./ReactField"
import WorkspaceContext from "../WorkspaceContext"
import ReactInlineField from "./ReactInlineField"
import useBlockData from "../useBlockData"
import { DataGrid, GridColDef } from "@material-ui/data-grid"

function DataTableWidget() {
    const { sourceBlock } = useContext(WorkspaceContext)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = useBlockData<any>(sourceBlock)

    if (!data?.length) return null

    const columns = Object.keys(data[0] || {}).map(
        h =>
            ({
                field: h,
                headerName: h,
            } as GridColDef)
    )
    return <DataGrid rows={data} columns={columns} pageSize={10} />
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

    renderInlineField() {
        return <DataTableWidget />
    }
}
