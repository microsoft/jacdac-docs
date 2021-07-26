import React, { ReactNode } from "react"
import ReactField, { ReactFieldJSON } from "./ReactField"
import { DataTableWidget } from "./DataTableWidget"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class DataPreviewField extends ReactField<ReactFieldJSON> {
    static KEY = "jacdac_field_data_preview"
    static EDITABLE = false

    static fromJson(options: ReactFieldJSON) {
        return new DataPreviewField(options?.value, undefined, options)
    }

    protected initCustomView(): SVGElement {
        const group = this.fieldGroup_
        group.classList.add("blocklyFieldButton")
        return undefined
    }

    getText_() {
        return "👀"
    }

    renderField(): ReactNode {
        return <DataTableWidget tableHeight={295} />
    }
}
