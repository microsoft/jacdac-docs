/* eslint-disable @typescript-eslint/ban-types */
import React from "react"
import type { JSONSchema4 } from "json-schema"
import { Grid, TextField } from "@material-ui/core"
import SwitchWithLabel from "./SwitchWithLabel"

function TypeForm(props: {
    schema: JSONSchema4
    value: object
    setValue: (newValue: object) => void
}) {
    const { schema, value, setValue } = props
    const { type, title, description } = schema

    switch (type) {
        case "number":
        case "integer":
            return (
                <Grid item xs={12}>
                    <TextField
                        title={title}
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
                        label={description}
                        checked={!!value}
                        onChange={setValue}
                    />
                </Grid>
            )
    }

    return null
}

function PropertiesForm(props: {
    properties: { [index: string]: JSONSchema4 }
    value: object
    setValue: (newValue: object) => void
}) {
    const { properties, value, setValue } = props
    const handleSetValue =
        (key: string, value: object) => (newValue: object) => {
            setValue({ ...value, key: newValue })
        }

    return (
        <>
            {Object.entries(properties).map(([key, schema]) => (
                <Grid item key={key}>
                    <TypeForm
                        schema={schema}
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
    const { properties } = schema

    return (
        <Grid container spacing={1}>
            <TypeForm schema={schema} value={value} setValue={setValue} />
            {properties && (
                <PropertiesForm
                    properties={properties}
                    value={value}
                    setValue={setValue}
                />
            )}
        </Grid>
    )
}
