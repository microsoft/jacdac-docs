import React, { lazy, ReactNode, useContext } from "react"
import {
    Grid,
    Button,
    TextField
} from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import { ReactFieldJSON, VALUE_CHANGE } from "../ReactField"
import ReactImageField from "../ReactImageField"

export interface DenseLayerBlockFieldValue {
    parameter: number
}

export default class DenseLayerBlockField extends ReactImageField<DenseLayerBlockFieldValue> {
    static KEY = "dense_layer_block_field_key"
    
    constructor(value: string) {
        super(value)

        this.events.on(VALUE_CHANGE, () => {
            this.setSize(32, 32)
        })
    }

    static fromJson(options: ReactFieldJSON) {
        return new DenseLayerBlockField(options?.value)
    }

    get defaultValue() {
        return {
            parameter: 0
        }
    }

    getText_() {
        const { parameter} = this.value

        return `Parameter: ${parameter}`
    }

    renderValue(): string {
        // Doesn't work for local images
        return "https://royalposthumus.com/images/white_menu_icon.png"
    }

    renderField(): ReactNode {        
        return (
            <Grid container>
                <Grid item>
                    <div style={{color:'#ffffff'}}> {this.getText_()} </div>
                </Grid>
            </Grid>
        )
    }
}