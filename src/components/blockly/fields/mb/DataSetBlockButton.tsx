import React, { ReactNode, useContext, useEffect, useState } from "react"
import { Button, createStyles, Grid, Tooltip } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import ViewIcon from "@material-ui/icons/Visibility"
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

function DataSetButtonWidget() {
    const styles = useStyles()

    const { workspace, sourceBlock } = useContext(WorkspaceContext)

    const handleViewDataSet = () => {
        console.log("View and edit dataset modal")
        sourceBlock.data = "click.edit"
    }
    const handleDownloadDataSet = () => {
        console.log("Download dataset")
        sourceBlock.data = "click.download"
    }

    return (
        <PointerBoundary>
            <Grid container spacing={1} direction={"row"}>
                <Grid item style={{ display: "inline-flex", width: 300 }}>
                    <Tooltip title="View this data set and perform actions like splitting it">
                        <Button
                            onClick={handleViewDataSet}
                            startIcon={<ViewIcon />}
                            variant="outlined"
                            size="small"
                        >
                            View
                        </Button>
                    </Tooltip>
                    &ensp;
                    <Tooltip title="Download dataset as csv file">
                        <Button
                            onClick={handleDownloadDataSet}
                            startIcon={<DownloadIcon />}
                            variant="outlined"
                            size="small"
                        >
                            Download
                        </Button>
                    </Tooltip>
                </Grid>
            </Grid>
        </PointerBoundary>
    )
}

export default class DataSetBlockButtons extends ReactInlineField {
    static KEY = "ds_block_buttons_key"

    constructor(value: string) {
        super(value)
    }

    static fromJson(options: ReactFieldJSON) {
        return new DataSetBlockButtons(options?.value)
    }

    getText_() {
        return `nn`
    }

    renderInlineField(): ReactNode {
        return <DataSetButtonWidget />
    }
}
