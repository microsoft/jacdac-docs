import React, { ReactNode, useContext, useEffect, useState } from "react"
import {
    Box,
    Grid,
    TextField,
    Tooltip,
    makeStyles,
    Theme,
    createStyles,
} from "@material-ui/core"

import { ReactFieldJSON } from "../ReactField"
import ReactInlineField from "../ReactInlineField"
import { PointerBoundary } from "../PointerBoundary"

import WorkspaceContext, { resolveBlockServices } from "../../WorkspaceContext"

import { useId } from "react-use-id-hook"
import ExpandModelBlockField from "./ExpandModelBlockField"

export interface DropoutLayerFieldValue {
    totalSize: number
    runTimeInCycles: number
    outputShape: number[]
    rate: number
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fieldContainer: {
            lineHeight: "2.5rem",
            width: "15rem",
        },
        field: {
            width: theme.spacing(10),
        },
    })
)

function LayerParameterWidget(props: {
    initFieldValue: DropoutLayerFieldValue
}) {
    const { initFieldValue } = props
    const { sourceBlock } = useContext(WorkspaceContext)
    const classes = useStyles()

    const totalSize = initFieldValue.totalSize
    const outputShape = initFieldValue.outputShape
    const runTimeInCycles = initFieldValue.runTimeInCycles

    const [rate, setRate] = useState(initFieldValue.rate)

    useEffect(() => {
        // push changes to source block after state values update
        updateParameters()
    }, [rate])

    const updateParameters = () => {
        // push changes to field values to the parent
        const updatedValue = {
            rate: rate,
        }

        // send new value to the parameter holder
        const expandField = sourceBlock.getField(
            "EXPAND_BUTTON"
        ) as ExpandModelBlockField
        expandField.updateFieldValue(updatedValue)

        // update the name of the block
        const nameField = sourceBlock.inputList[0].fieldRow[0]
        nameField.setValue(`dropout (${rate})`)
    }

    const handleChangedRate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.valueAsNumber
        if (newValue && !isNaN(newValue)) {
            setRate(newValue)
        }
    }

    return (
        <PointerBoundary>
            <Grid container spacing={1} direction={"column"}>
                <Grid item className={classes.fieldContainer}>
                    <Box color="text.secondary">
                        rate&emsp;
                        <Tooltip title="Update the dropout rate">
                            <TextField
                                id={useId() + "rate"}
                                type="number"
                                size="small"
                                variant="outlined"
                                value={rate}
                                onChange={handleChangedRate}
                                className={classes.field}
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item>
                    <Box color="text.secondary">
                        Total size: {totalSize} bytes
                        <br />
                        Run time: {runTimeInCycles} cycles <br />
                        Output shape: [{outputShape.join(", ")}]<br />
                    </Box>
                </Grid>
            </Grid>
        </PointerBoundary>
    )
}

export default class DropoutLayerBlockField extends ReactInlineField {
    static KEY = "dropout_layer_block_field_key"

    constructor(value: string, previousValue?: any) {
        super(value)
        if (previousValue)
            this.value = { ...this.defaultValue, ...previousValue }
    }

    static fromJson(options: ReactFieldJSON) {
        return new DropoutLayerBlockField(options?.value)
    }

    /* This default value is specified here and in modelblockdsl.ts */
    get defaultValue() {
        return {
            totalSize: 0,
            runTimeInCycles: 0,
            outputShape: [0, 0],
            rate: 0.1,
        }
    }

    getText_() {
        return ``
    }

    renderInlineField(): ReactNode {
        return <LayerParameterWidget initFieldValue={this.value} />
    }
}
