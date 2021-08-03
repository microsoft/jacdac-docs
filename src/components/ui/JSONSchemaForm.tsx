/* eslint-disable @typescript-eslint/ban-types */
import React from "react"
import type { JSONSchema4 } from "json-schema"
import { Grid, TextField, Typography } from "@material-ui/core"
import SwitchWithLabel from "./SwitchWithLabel"

function SchemaForm(props: {
    schema: JSONSchema4
    required?: boolean
    value: object
    setValue: (newValue: object) => void
}) {
    const { schema, required, value, setValue } = props
    const { type, title, description } = schema
    console.log("type", { type, title, description, value })

    switch (type) {
        case "number":
        case "integer":
            return (
                <Grid item xs={12}>
                    <TextField
                        label={title}
                        required={required}
                        helperText={description}
                        type="number"
                        value={value}
                        fullWidth={true}
                        onChange={setValue}
                    />
                </Grid>
            )
        case "string":
            return (
                <Grid item xs={12}>
                    <TextField
                        label={title}
                        required={required}
                        helperText={description}
                        type="text"
                        value={value}
                        fullWidth={true}
                        onChange={setValue}
                    />
                </Grid>
            )
        case "boolean":
            return (
                <Grid item xs={12}>
                    <SwitchWithLabel
                        required={required}
                        label={title}
                        title={description}
                        checked={!!value}
                        onChange={setValue}
                    />
                </Grid>
            )
        case "object": {
            const { properties, required } = schema
            return (
                <>
                    {title && (
                        <Grid item xs={12}>
                            <Typography variant="caption" color="inherit">{title}</Typography>
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <PropertiesForm
                            properties={properties}
                            required={required}
                            value={value}
                            setValue={setValue}
                        />
                    </Grid>
                </>
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
    const handleSetValue = (key: string, v: object) => (newValue: object) => {
        setValue({ ...(v || {}), key: newValue })
    }
    console.log("properties", { properties, required, value })

    return (
        <>
            {Object.entries(properties).map(([key, schema]) => (
                <Grid item key={key}>
                    <SchemaForm
                        schema={schema}
                        required={required && required.indexOf(key) > -1}
                        value={value?.[key]}
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
    className?: string
}) {
    const { schema, value, setValue, className } = props

    return (
        <Grid container spacing={2} className={className}>
            <SchemaForm schema={schema} value={value} setValue={setValue} />
        </Grid>
    )
}
