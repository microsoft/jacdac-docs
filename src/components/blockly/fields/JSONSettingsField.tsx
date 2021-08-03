/* eslint-disable @typescript-eslint/ban-types */
import React, { lazy, ReactNode } from "react"
import ReactField, { ReactFieldJSON } from "./ReactField"
import type { JSONSchema4 } from "json-schema"
import Suspense from "../../ui/Suspense"
import { InputDefinition } from "../toolbox"
import { assert } from "../../../../jacdac-ts/src/jdom/utils"
const JSONSchemaForm = lazy(() => import("../../ui/JSONSchemaForm"))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function clone(v: any) {
    return v ? JSON.parse(JSON.stringify(v)) : v
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isKV(v: any) {
    return !!v && typeof v === "object" && !Array.isArray(v)
}
function jsonMergeFrom(trg: object, src: object) {
    if (!src) return
    Object.keys(src).forEach(k => {
        if (isKV(trg[k]) && isKV(src[k])) jsonMergeFrom(trg[k], src[k])
        else trg[k] = clone(src[k])
    })
}
export interface JSONSettingsOptions extends ReactFieldJSON {
    schema?: JSONSchema4
}

export interface JSONSettingsInputDefinition extends InputDefinition {
    type: "jacdac_field_json_settings"
    schema: JSONSchema4
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
        this.schema = options?.schema || {}
        assert(!!this.schema, "schema missing")
    }

    protected initCustomView(): SVGElement {
        const group = this.fieldGroup_
        group.classList.add("blocklyFieldButton")
        return undefined
    }

    get defaultValue() {
        return {}
    }

    getText_() {
        return "⚙️"
    }

    renderField(): ReactNode {
        const { schema, value = {} } = this
        const setValue = (newValue: object) => this.setValue(newValue)

        console.log(`render`, { schema, value })

        return (
            <div
                style={{
                    minWidth: "22rem",
                    padding: "0.5rem",
                }}
            >
                <Suspense>
                    <JSONSchemaForm
                        schema={schema}
                        value={value}
                        setValue={setValue}
                    />
                </Suspense>
            </div>
        )
    }
}
