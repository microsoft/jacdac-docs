import React, { lazy, ReactNode, useContext } from "react"
import { Grid, Button } from "@material-ui/core"
import Suspense from "../../ui/Suspense"
import ReactField, { ReactFieldJSON, VALUE_CHANGE } from "./ReactField"


export interface ModelBlockFieldValue {
    training_dataset: string
    testing_dataset: string
    parameter: number
}

export default class ModelBlockField extends ReactField<ModelBlockFieldValue> {
    static KEY = "model_field_key"
    constructor(value: string) {
        super(value)
    }

    static fromJson(options: ReactFieldJSON) {
        return new ModelBlockField(options?.value)
    }

    get defaultValue() {
        return {
            training_dataset: "none",
            testing_dataset: "none",
            parameter: 3
        }
    }

    getText_() {
        const { training_dataset, testing_dataset, parameter } = this.value
        return `k=${parameter}`
    }

    renderField(): ReactNode {
        const { training_dataset, testing_dataset, parameter } = this.value
        
        return (
            <Suspense>
                <Grid container>
                    <Grid item>
                        Hello
                    </Grid>
                </Grid>
            </Suspense>
        )
    }

    /* // override to support custom view
    protected initCustomView(): SVGElement {
        return null
    }

    // override to update view
    protected updateView() {}

    renderField(): ReactNode {
        return <span>not implemented</span>
    }*/
}