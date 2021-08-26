import React, { ReactNode, useContext, useEffect, useState } from "react"
import {
    Box,
    Grid,
    MenuItem,
    Select,
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

export interface PoolingLayerFieldValue {
    percentParams: number
    percentSize: number
    runTimeInMs: number
    outputShape: number[]
    poolSize: number
    strideSize: number
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
    initFieldValue: PoolingLayerFieldValue
}) {
    const { initFieldValue } = props
    const { sourceBlock } = useContext(WorkspaceContext)
    const classes = useStyles()

    const { percentSize, percentParams, outputShape, runTimeInMs } =
        initFieldValue
    const [poolSize, setPoolSize] = useState(initFieldValue.poolSize)
    const [strideSize, setStrideSize] = useState(initFieldValue.strideSize)

    useEffect(() => {
        // push changes to source block after state values update
        updateParameters()
    }, [poolSize, strideSize])

    const updateParameters = () => {
        // push changes to field values to the parent
        const updatedValue = {
            poolSize: poolSize,
            strideSize: strideSize,
        }

        // send new value to the parameter holder
        const expandField = sourceBlock.getField(
            "EXPAND_BUTTON"
        ) as ExpandModelBlockField
        expandField.updateFieldValue(updatedValue)

        // update the name of the block
        const nameField = sourceBlock.inputList[0].fieldRow[0]
        const name: string = nameField.getValue()
        const blockName = name.substr(0, 10)
        nameField.setValue(`${blockName} (${poolSize}, ${strideSize})`)
    }

    const handleChangedPoolSize = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = event.target.valueAsNumber
        if (newValue && !isNaN(newValue)) {
            setPoolSize(newValue)
        }
    }

    const handleChangedStrides = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = event.target.valueAsNumber
        if (newValue && !isNaN(newValue)) {
            setStrideSize(newValue)
        }
    }

    return (
        <PointerBoundary>
            <Grid container spacing={1} direction={"column"}>
                <Grid item className={classes.fieldContainer}>
                    <Box color="text.secondary">
                        pool size&emsp;
                        <Tooltip title="Update the pool size">
                            <TextField
                                id={useId() + "poolSize"}
                                type="number"
                                size="small"
                                variant="outlined"
                                value={poolSize}
                                onChange={handleChangedPoolSize}
                                className={classes.field}
                            />
                        </Tooltip>
                    </Box>
                    <Box color="text.secondary">
                        stride&emsp;
                        <Tooltip title="Update the stride">
                            <TextField
                                id={useId() + "stride"}
                                size="small"
                                variant="outlined"
                                value={strideSize}
                                onChange={handleChangedStrides}
                                className={classes.field}
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item>
                    <Box color="text.secondary">
                        Output shape: [{outputShape.join(", ")}]<br />
                        Percent of total size: {percentSize.toPrecision(2)}%
                        <br />
                        Percent of total params: {percentParams.toPrecision(2)}%
                        <br />
                        Run time: {runTimeInMs.toPrecision(2)} ms <br />
                    </Box>
                </Grid>
            </Grid>
        </PointerBoundary>
    )
}

export default class PoolingLayerBlockField extends ReactInlineField {
    static KEY = "pooling_layer_block_field_key"

    constructor(value: string, previousValue?: any) {
        super(value)
        if (previousValue)
            this.value = { ...this.defaultValue, ...previousValue }
    }

    static fromJson(options: ReactFieldJSON) {
        return new PoolingLayerBlockField(options?.value)
    }

    /* This default value is specified here and in modelblockdsl.ts */
    get defaultValue() {
        return {
            percentParams: 0,
            percentSize: 0,
            runTimeInMs: 0,
            outputShape: [0, 0],
            poolSize: 2,
            strideSize: 1,
        }
    }

    getText_() {
        return ``
    }

    renderInlineField(): ReactNode {
        return <LayerParameterWidget initFieldValue={this.value} />
    }
}
