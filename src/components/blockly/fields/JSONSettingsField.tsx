/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactNode } from "react"
import ReactField, { ReactFieldJSON } from "./ReactField"
import DataTableWidget from "./DataTableWidget"
import {
    BlockDefinition,
    DataPreviewInputDefinition,
    identityTransformData,
    TABLE_PREVIEW_MAX_ITEMS,
} from "../toolbox"
import { Grid } from "@material-ui/core"

export interface JSONFieldSchema {
    name: string;
    title: string
    type: "number" | "text" | "checkbox"    
}

export interface JSONSettingsOptions extends ReactFieldJSON {
    spec?: JSONFieldSchema[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class JSONSettingsField extends ReactField<ReactFieldJSON> {
    static KEY = "jacdac_field_json_settings"
    SERIALIZABLE = true
    spec: JSONFieldSchema[]

    static fromJson(options: ReactFieldJSON) {
        return new JSONSettingsField(options?.value, undefined, options)
    }

    // the first argument is a dummy and never used
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(value: string, validator?: any, options?: JSONSettingsOptions) {
        super(value, validator, options)
        this.spec = options?.spec || []
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
        return (
            <Grid container spacing={1} style={{ background: "#fff" }}>
                <Grid item xs={6}>
                    <DataTableWidget
                        label="before"
                        tableHeight={295}
                        empty={"no data"}
                        transformed={false}
                        maxItems={TABLE_PREVIEW_MAX_ITEMS}
                    />
                </Grid>
                <Grid item xs={6}>
                    <DataTableWidget
                        label="after"
                        tableHeight={295}
                        empty={"no data"}
                        transformed={true}
                        maxItems={TABLE_PREVIEW_MAX_ITEMS}
                    />
                </Grid>
            </Grid>
        )
    }
}