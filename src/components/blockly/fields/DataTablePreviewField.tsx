import React, { ReactNode } from "react"
import ReactField, { ReactFieldJSON } from "./ReactField"
import { DataTableWidget } from "./DataTableWidget"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class DataTablePreviewField extends ReactField<ReactFieldJSON> {
    static KEY = "jacdac_field_preview_data_table"
    static EDITABLE = false

    static fromJson(options: ReactFieldJSON) {
        return new DataTablePreviewField(options?.value, undefined, options)
    }

    getText_() {
        return "..."
    }

    renderField(): ReactNode {
        return <DataTableWidget />
    }
}
