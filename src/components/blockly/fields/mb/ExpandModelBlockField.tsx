import React, { useContext, useEffect, useMemo, useState } from "react"

import { Grid } from "@material-ui/core"
import AddCircleIcon from "@material-ui/icons/AddCircleOutline"
import RemoveCircleIcon from "@material-ui/icons/RemoveCircleOutline"
import IconButtonWithTooltip from "../../../ui/IconButtonWithTooltip"

import { ReactFieldJSON } from "../ReactField"
import ReactInlineField from "../ReactInlineField"
import ReactParameterField from "../ReactParameterField"
import WorkspaceContext from "../../WorkspaceContext"

import { MODEL_BLOCKS } from "../../../model-editor/modelblockdsl"

import DenseLayerBlockField from "./DenseLayerBlockField"
import DataSetBlockField from "./DataSetBlockField"
import RecordingBlockField from "./RecordingBlockField"
import SmoothingBlockField from "./SmoothingBlockField"
import NeuralNetworkBlockField from "./NeuralNetworkBlockField"
import ConvLayerBlockField from "./ConvLayerBlockField"
import PoolingLayerBlockField from "./PoolingLayerBlockField"
import DropoutLayerBlockField from "./DropoutLayerBlockField"
import FlattenLayerBlockField from "./FlattenLayerBlockField"
import KNNBlockField from "./KNNBlockField"
import Blockly, { Block } from "blockly"

const REMOVABLE_INPUT = "REMOVABLE_INPUT"
const LAYER_INPUT = "LAYER_INPUTS"

function ExpandIconWidget() {
    const { sourceBlock } = useContext(WorkspaceContext)

    const getCurrentValue = () => {
        const expandField = sourceBlock.getField("EXPAND_BUTTON")
        if (expandField.getValue()) {
            const value = JSON.parse(expandField.getValue())
            return value
        }
        return null
    }

    const updateCurrentValue = (paramName: string, newParam: any) => {
        const expandField = sourceBlock.getField(
            "EXPAND_BUTTON"
        ) as ReactParameterField<unknown>

        const value = JSON.parse(expandField.getValue())
        value[paramName] = newParam
        expandField.doValueUpdate_(JSON.stringify(value))
    }

    const appendParamInput = (block: Block) => {
        block
            .appendDummyInput(REMOVABLE_INPUT)
            .appendField(getBlockFieldType(block.type), "BLOCK_PARAMS")

        // TODO. This is a hack, no moving blocks that are open
        block.setMovable(false)

        // make sure that the block goes before the input statement field
        if (block.getInput(LAYER_INPUT))
            block.moveInputBefore(REMOVABLE_INPUT, LAYER_INPUT)
    }

    const getBlockFieldType = (blockType: string) => {
        const currentValue = getCurrentValue()
        switch (blockType) {
            case MODEL_BLOCKS + "dataset":
                return new DataSetBlockField("", currentValue)
            case MODEL_BLOCKS + "recording":
                return new RecordingBlockField("", currentValue)
            case MODEL_BLOCKS + "smooth":
                return new SmoothingBlockField("", currentValue)
            case MODEL_BLOCKS + "nn":
                return new NeuralNetworkBlockField("", currentValue)
            case MODEL_BLOCKS + "conv_layer":
                return new ConvLayerBlockField("", currentValue)
            case MODEL_BLOCKS + "dense_layer":
                return new DenseLayerBlockField("", currentValue)
            case MODEL_BLOCKS + "dropout_layer":
                return new DropoutLayerBlockField("", currentValue)
            case MODEL_BLOCKS + "flatten_layer":
                return new FlattenLayerBlockField("", currentValue)
            case MODEL_BLOCKS + "max_pool_layer":
                return new PoolingLayerBlockField("", currentValue)
            case MODEL_BLOCKS + "knn":
                return new KNNBlockField("", currentValue)
            default:
                console.error("Got inappropriate input for expanding block")
                return null
        }
    }

    const [parametersVisible, setParametersVisible] = useState(() => {
        const fieldValue = getCurrentValue()
        if (fieldValue) {
            const paramsVisible = fieldValue["parametersVisible"]
            if (paramsVisible) appendParamInput(sourceBlock)
            return paramsVisible
        }
        return false
    })

    const handleExpandBlock = () => {
        const parameterField = sourceBlock.getField(
            "BLOCK_PARAMS"
        ) as ReactParameterField<unknown>
        if (parameterField) {
            // save the parameters written to that block
            const paramValues = JSON.parse(parameterField.getValue())
            Object.keys(paramValues).forEach(key => {
                updateCurrentValue(key, paramValues[key])
            })

            // identify which input to remove and remove it
            parameterField.getParentInput().name = REMOVABLE_INPUT
            sourceBlock.removeInput(REMOVABLE_INPUT)
            // Randi TODO. This is a hack, no moving blocks that are open
            sourceBlock.setMovable(true)

            // update the value of the expand button field
            updateCurrentValue("parametersVisible", false)
            setParametersVisible(false)
        } else {
            // add a removable field with the appropriate field type
            appendParamInput(sourceBlock)

            // update the value of the expand button field
            updateCurrentValue("parametersVisible", true)
            setParametersVisible(true)
        }
    }

    return (
        <Grid container spacing={1}>
            <Grid item>
                <IconButtonWithTooltip
                    style={{ backgroundColor: "transparent" }}
                    onClick={handleExpandBlock}
                    title="Expand dataset block to see all dataset info"
                >
                    {parametersVisible ? (
                        <RemoveCircleIcon />
                    ) : (
                        <AddCircleIcon />
                    )}
                </IconButtonWithTooltip>
            </Grid>
        </Grid>
    )
}

export default class ExpandModelBlockField extends ReactParameterField<any> {
    static KEY = "model_field_key"

    constructor(value: string) {
        super(value)
    }

    get defaultValue() {
        return {
            parametersVisible: false,
        }
    }

    protected createContainer(): HTMLDivElement {
        const c = document.createElement("div")
        c.style.display = "inline-block"
        c.style.minWidth = "2rem"
        return c
    }

    static fromJson(options: ReactFieldJSON) {
        return new ExpandModelBlockField(options?.value)
    }

    getText_() {
        return ","
    }

    renderInlineField() {
        return <ExpandIconWidget />
    }

    updateFieldValue(msg: any) {
        this.value = {
            ...this.value,
            ...msg,
        }
    }
}
