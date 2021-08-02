import { Grid } from "@material-ui/core"
import type { JSONSchema4 } from "json-schema"
import React from "react"

export default function JSONSchemaForm(props: {
    schema: JSONSchema4,
    value: object,
    setValue: (newValue: object) => void
}) {
    const { schema, value, setValue } = props
    const { properties = {} } = schema

    return (
        <Grid container spacing={1} style={{ background: "#fff" }}>
            {Object.entries(properties).map((key, prop) => (
                <Grid item key={key}></Grid>
            ))}
        </Grid>
    )
}

}