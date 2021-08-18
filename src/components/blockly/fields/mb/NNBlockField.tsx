import React, { ReactNode, useContext, useEffect, useState } from "react"
import { Button, createStyles, Grid, Tooltip } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import AutorenewIcon from "@material-ui/icons/Autorenew"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import DownloadIcon from "@material-ui/icons/GetApp"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import { ReactFieldJSON } from "../ReactField"
import ReactInlineField from "../ReactInlineField"
import WorkspaceContext from "../../WorkspaceContext"
import { PointerBoundary } from "../PointerBoundary"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        numberField: {
            marginBottom: theme.spacing(1),
        },
    })
)

function NNParameterWidget() {
    const styles = useStyles()

    const { workspace, sourceBlock } = useContext(WorkspaceContext)

    const handleTrainModel = () => {
        console.log("Open NN classifier modal")
        sourceBlock.data = "click.train"
    }

    const handleDownloadModel = () => {
        console.log("Download model")
        sourceBlock.data = "click.download"
    }

    return (
        <Grid container spacing={1} direction={"row"}>
            <Grid item style={{ display: "inline-flex", width: 300 }}>
                <Tooltip title="Open modal to view and run classifier">
                    <Button
                        onClick={handleTrainModel}
                        startIcon={<AutorenewIcon />}
                        variant="outlined"
                        size="small"
                    >
                        Train
                    </Button>
                </Tooltip>
                &ensp;
                <Tooltip title="Download model JSON and weights file">
                    <Button
                        onClick={handleDownloadModel}
                        startIcon={<DownloadIcon />}
                        variant="outlined"
                        size="small"
                    >
                        Download
                    </Button>
                </Tooltip>
            </Grid>
        </Grid>
    )
}

export default class NeuralNetworkBlockField extends ReactInlineField {
    static KEY = "nn_block_buttons_key"

    constructor(value: string) {
        super(value)
    }

    static fromJson(options: ReactFieldJSON) {
        return new NeuralNetworkBlockField(options?.value)
    }

    getText_() {
        return `nn`
    }

    renderInlineField(): ReactNode {
        return <NNParameterWidget />
    }
}
