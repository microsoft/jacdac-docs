/* eslint-disable @typescript-eslint/ban-types */
import React from "react"
import type { JSONSchema4 } from "json-schema"
import { Grid, TextField } from "@material-ui/core"
import SwitchWithLabel from "./SwitchWithLabel"

function SchemaForm(props: {
    schema: JSONSchema4
    required?: boolean
    value: object
    setValue: (newValue: object) => void
}) {
    const { schema, required, value, setValue } = props
    const { type, title, description } = schema

    switch (type) {
        case "number":
        case "integer":
            return (
                <Grid item xs={12}>
                    <TextField
                        title={title}
                        required={required}
                        helperText={description}
                        type="number"
                        value={value}
                        onChange={setValue}
                    />
                </Grid>
            )
        case "string":
            return (
                <Grid item xs={12}>
                    <TextField
                        title={title}
                        required={required}
                        helperText={description}
                        type="text"
                        value={value}
                        onChange={setValue}
                    />
                </Grid>
            )
        case "boolean":
            return (
                <Grid item xs={12}>
                    <SwitchWithLabel
                        title={title}
                        required={required}
                        label={description}
                        checked={!!value}
                        onChange={setValue}
                    />
                </Grid>
            )
        case "object": {
            const { properties, required } = schema
            return (
                <Grid item xs={12}>
                    <PropertiesForm
                        properties={properties}
                        required={required}
                        value={value}
                        setValue={setValue}
                    />
                </Grid>
            )
        }
    }

    return null
}

function PropertiesForm(props: {
    properties: { [index: string]: JSONSchema4 }
    required: false | string[]
    value: object
    setValue: (newValue: object) => void
}) {
    const { properties, required, value, setValue } = props
    const handleSetValue =
        (key: string, value: object) => (newValue: object) => {
            setValue({ ...value, key: newValue })
        }

    return (
        <>
            {Object.entries(properties).map(([key, schema]) => (
                <Grid item key={key}>
                    <SchemaForm
                        schema={schema}
                        required={required && required.indexOf(key) > -1}
                        value={value[key]}
                        setValue={handleSetValue(key, value)}
                    />
                </Grid>
            ))}
        </>
    )
}

export default function JSONSchemaForm(props: {
    schema: JSONSchema4
    value: object
    setValue: (newValue: object) => void
}) {
    const { schema, value, setValue } = props

    return (
        <Grid container spacing={1}>
            <SchemaForm schema={schema} value={value} setValue={setValue} />
        </Grid>
    )
}
