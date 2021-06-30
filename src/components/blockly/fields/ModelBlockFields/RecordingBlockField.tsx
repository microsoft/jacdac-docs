import React, { lazy, ReactNode, useContext } from "react"
import { Grid, Button } from "@material-ui/core"
import { child } from "../../../widgets/svg"
import ReactField, { ReactFieldJSON, VALUE_CHANGE } from "../ReactField"


export interface RecordingBlockFieldValue {
    trainingDataset: string
    testingDataset: string
    parameter: number
}

export default class RecordingBlockField extends ReactField<RecordingBlockFieldValue> {
    static KEY = "model_field_key"
    constructor(value: string) {
        super(value)
    }

    static fromJson(options: ReactFieldJSON) {
        return new RecordingBlockField(options?.value)
    }

    get defaultValue() {
        return {
            trainingDataset: "none",
            testingDataset: "none",
            parameter: 3
        }
    }

    getText_() {
        const { parameter } = this.value
        return `=`
    }

    renderField(): ReactNode {
        //const { trainingDataset, testingDataset, parameter } = this.value
        
        return (
            <Grid container>
                <Grid item>
                    Hello
                </Grid>
            </Grid>
        )
    }

    /* Override to provide custom view 
    protected initCustomView() {
        const width = 28
        const r = width >> 1
        return child(this.fieldGroup_, "circle", {
            r: width >> 1,
            cx: r,
            cy: r,
            strokeWidth: 2,
            stroke: "#777",
        }) as SVGCircleElement
    }

    updateView() {
        const c = "#000000"
        const circle = this.view as SVGCircleElement
        if (c) {
            circle?.setAttribute("fill", c)
        }
    } */

}