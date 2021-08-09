import React, { ReactNode, useContext, useEffect, useState } from "react"
import { Grid, Box, Button, Tooltip } from "@material-ui/core"
import AutorenewIcon from "@material-ui/icons/Autorenew"
//import DownloadIcon from "@material-ui/icons/GetApp"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import { ReactFieldJSON } from "../ReactField"
import ReactParameterField from "../ReactParameterField"
import WorkspaceContext from "../../WorkspaceContext"
import { FieldNumber, FieldVariable } from "blockly"

export interface KNNBlockFieldValue {
    modelSize: number
    modelCycles: number
    classes: string[]
}

function KNNParameterWidget(props: {
    initFieldValue: KNNBlockFieldValue
    setFieldValue: (f: KNNBlockFieldValue) => void
}) {
    const { initFieldValue, setFieldValue } = props

    const { workspace, sourceBlock } = useContext(WorkspaceContext)

    const [modelSize, setModelSize] = useState(initFieldValue.modelSize)
    const [modelCycles, setModelCycles] = useState(initFieldValue.modelCycles)
    const [classes, setClasses] = useState<string[]>(initFieldValue.classes)

    useEffect(() => {
        // push changes to source block after state values update
        sendUpdate()
    }, [modelSize, modelCycles, classes])

    const sendUpdate = () => {
        // push changes to field values to the parent
        const updatedValue = {
            modelSize: modelSize,
            modelCycles: modelCycles,
            classes: classes,
        }
        setFieldValue(updatedValue)
    }

    const updateParameters = () => {
        const trainingSetField = sourceBlock.getField(
            "KNN_TRAINING"
        ) as FieldVariable
        const kValueField = sourceBlock.getField("KNN_K_VALUE") as FieldNumber

        console.log("Randi KNN update parameters", {
            trainingSetField,
            kValueField,
        })

        // calculate how quickly the model should run given the size of K and number of samples
        // calculate how large the model is given the number of samples
    }

    const handleViewModel = () => {
        console.log("Open KNN classifier modal")
    }

    return (
        <Grid container spacing={1} direction={"row"}>
            <Grid item>
                <Box color="text.secondary">
                    Classes: {classes.length ? classes.join(", ") : "none"}
                </Box>
                <Box color="text.secondary">Model size: {modelSize}</Box>
                <Box color="text.secondary">Cycles: {modelCycles}</Box>
            </Grid>
            <Grid item>
                <Tooltip title="Open modal to view and run classifier">
                    <Button
                        onClick={handleViewModel}
                        startIcon={<AutorenewIcon />}
                        variant="outlined"
                        size="small"
                    >
                        Compile
                    </Button>
                </Tooltip>
            </Grid>
        </Grid>
    )
}

export default class KNNBlockField extends ReactParameterField<KNNBlockFieldValue> {
    static KEY = "knn_block_field_key"
    static EDITABLE = false

    constructor(value: string, previousValue?: any) {
        super(value)
        if (previousValue)
            this.value = { ...this.defaultValue, ...previousValue }
        this.updateFieldValue = this.updateFieldValue.bind(this)
    }

    static fromJson(options: ReactFieldJSON) {
        return new KNNBlockField(options?.value)
    }

    /* This default value is specified here and in modelblockdsl.ts */
    get defaultValue() {
        return {
            modelSize: 0,
            modelCycles: 0,
            classes: [],
        }
    }

    getText_() {
        return ``
    }

    updateFieldValue(msg: KNNBlockFieldValue) {
        this.value = {
            ...this.value, // don't copy over visibility (will cause loop)
            modelSize: msg.modelSize,
            modelCycles: msg.modelCycles,
            classes: msg.classes,
        }
    }

    renderInlineField(): ReactNode {
        return (
            <KNNParameterWidget
                initFieldValue={this.value}
                setFieldValue={this.updateFieldValue}
            />
        )
    }
}
