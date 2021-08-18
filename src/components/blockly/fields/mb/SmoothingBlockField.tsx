import React, { ReactNode, useContext, useEffect, useState } from "react"
import { Grid, Box, TextField, Tooltip } from "@material-ui/core"

import { ReactFieldJSON } from "../ReactField"
import ReactParameterField from "../ReactParameterField"
import WorkspaceContext from "../../WorkspaceContext"

import { PointerBoundary } from "../PointerBoundary"
import { useId } from "react-use-id-hook"

export interface SmoothingBlockFieldValue {
    windowSize: number
    strideSize: number
}

function SmoothingParameterWidget(props: {
    initFieldValue: SmoothingBlockFieldValue
    setFieldValue: (f: SmoothingBlockFieldValue) => void
}) {
    const { initFieldValue, setFieldValue } = props

    const { workspace, sourceBlock } = useContext(WorkspaceContext)

    const [windowSize, setWindowSize] = useState(initFieldValue.windowSize)
    const [strideSize, setStrideSize] = useState(initFieldValue.strideSize)

    const handleChangedWindow = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newWindowSize = event.target.valueAsNumber
        // Randi TODO give some sort of error message for numbers smaller than 2
        if (newWindowSize && !isNaN(newWindowSize)) {
            setWindowSize(newWindowSize)
        }
    }

    const handleChangedStride = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newStrideSize = event.target.valueAsNumber
        // Randi TODO give some sort of error message for numbers smaller than 1
        if (newStrideSize && !isNaN(newStrideSize)) {
            setStrideSize(newStrideSize)
        }
    }

    useEffect(() => {
        // push changes to source block after state values update
        sendUpdate()
    }, [windowSize, strideSize])

    const sendUpdate = () => {
        const updatedValue = {
            windowSize: windowSize,
            strideSize: strideSize,
        }

        setFieldValue(updatedValue)
    }

    return (
        <PointerBoundary>
            <Grid container spacing={1}>
                <Grid item>
                    <Box color="text.secondary">
                        Window size
                        <Tooltip title="Update the window size, larger values lead to more smoothing">
                            <TextField
                                id={useId() + "windowSize"}
                                type="number"
                                size="small"
                                variant="outlined"
                                value={windowSize}
                                onChange={handleChangedWindow}
                            />
                        </Tooltip>
                    </Box>
                    <Box color="text.secondary">
                        Stride size
                        <Tooltip title="Update the stride size, larger values lead to less smoothing">
                            <TextField
                                id={useId() + "stride"}
                                type="number"
                                size="small"
                                variant="outlined"
                                value={strideSize}
                                onChange={handleChangedStride}
                            />
                        </Tooltip>
                    </Box>
                </Grid>
            </Grid>
        </PointerBoundary>
    )
}

export default class SmoothingBlockField extends ReactParameterField<SmoothingBlockFieldValue> {
    static KEY = "smoothing_block_field_key"

    constructor(value: string, previousValue?: any) {
        super(value)
        if (previousValue)
            this.value = { ...this.defaultValue, ...previousValue }
        this.updateFieldValue = this.updateFieldValue.bind(this)
    }

    static fromJson(options: ReactFieldJSON) {
        return new SmoothingBlockField(options?.value)
    }

    /* This default value is specified here and in modelblockdsl.ts */
    get defaultValue() {
        return {
            windowSize: 3,
            strideSize: 3,
        }
    }

    getText_() {
        return ``
    }

    updateFieldValue(msg: SmoothingBlockFieldValue) {
        this.value = {
            ...this.value, // don't copy over visibility (will cause loop)
            windowSize: msg.windowSize,
            strideSize: msg.strideSize,
        }
    }

    renderInlineField(): ReactNode {
        return (
            <SmoothingParameterWidget
                initFieldValue={this.value}
                setFieldValue={this.updateFieldValue}
            />
        )
    }
}
