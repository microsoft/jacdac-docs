import React from "react"
import MaterialJsonSchemaForm from "react-jsonschema-form-material-ui"
import type { JSONSchema4 } from "json-schema"

export default function JSONSchemaForm(props: {
    schema: JSONSchema4
    // eslint-disable-next-line @typescript-eslint/ban-types
    value: object
    // eslint-disable-next-line @typescript-eslint/ban-types
    setValue: (newValue: object) => void
}) {
    const { schema, value, setValue } = props

    return (
        <MaterialJsonSchemaForm
            schema={schema}
            formData={value}
            onChange={setValue}
            onSubmit={submittedData =>
                console.log("form submitted", submittedData)
            }
        />
    )
}
