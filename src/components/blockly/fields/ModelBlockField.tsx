import React, { lazy, ReactNode, useContext } from "react"
import { Grid, Button } from "@material-ui/core"
import ReactField, { ReactFieldJSON, VALUE_CHANGE } from "./ReactField"


export interface ModelBlockFieldValue {
    training_dataset: string
    testing_dataset: string
    parameter: number
}

export default class ModelBlockField extends ReactField<ModelBlockFieldValue> {
    static KEY = "jacdac_field_keyboard_key"
    constructor(
        value: string,
        size: {width: 80, height: 80}
    ) {
        super(value)
    }

    // override to support custom view
    protected initCustomView(): SVGElement {
        return null
    }

    // override to update view
    protected updateView() {}

    renderField(): ReactNode {
        return <span>not implemented</span>
    }
}

/*    renderField(): ReactNode {
        const { training_dataset, testing_dataset, parameter } = this.value
        
        return (
            <Suspense>
                <Grid container>
                    <Grid item>
                        <Button>hello</Button>
                    </Grid>
                </Grid>
            </Suspense>
        )
    }
}*/