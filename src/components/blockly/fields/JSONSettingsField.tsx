/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactNode } from "react"
import ReactField, { ReactFieldJSON } from "./ReactField"
import { Grid } from "@material-ui/core"
import { JSONSchema4 } from "json-schema"

export interface JSONSettingsOptions extends ReactFieldJSON {
    schema?: JSONSchema4
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class JSONSettingsField extends ReactField<ReactFieldJSON> {
    static KEY = "jacdac_field_json_settings"
    SERIALIZABLE = true
    schema: JSONSchema4

    static fromJson(options: ReactFieldJSON) {
        return new JSONSettingsField(options?.value, undefined, options)
    }

    // the first argument is a dummy and never used
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(value: string, validator?: any, options?: JSONSettingsOptions) {
        super(value, validator, options)
        this.schema = options?.schema || []
    }

    protected initCustomView(): SVGElement {
        const group = this.fieldGroup_
        group.classList.add("blocklyFieldButton")
        return undefined
    }

    getText_() {
        return "⚙️"
    }

    renderField(): ReactNode {
        const { schema } = this.schema
        const { properties = {} } = schema

        const value = this.value

        return (
            <Grid container spacing={1} style={{ background: "#fff" }}>
                {Object.entries(properties).map((key, prop) => (
                    <Grid item key={key}></Grid>
                ))}
            </Grid>
        )
    }
}
