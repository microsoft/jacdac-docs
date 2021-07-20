import {
    Grid,
    TextField,
    createStyles,
} from "@material-ui/core"
import { Button } from "gatsby-theme-material-ui"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import React, { useContext, useState } from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"


import useChange from "../../jacdac/useChange"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(1),
        },
        grow: {
            flexGrow: 1,
        },
        field: {
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(1.5),
        },
        segment: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        row: {
            marginBottom: theme.spacing(0.5),
        },
        buttons: {
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(2),
        },
        trend: {
            width: theme.spacing(10),
        },
        vmiddle: {
            verticalAlign: "middle",
        },
    })
)

export default function TrainModel(props: {
    onNext: () => void
}) {
    const { onNext } = props
    
    const handleNext = () => {

        // call the next function
        onNext()

    }

    return (
        <Grid container direction={"column"}>
            <Grid item>
                <h2>Tab Title</h2>
            </Grid>
            <Grid item>            
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<NavigateNextIcon />}
                    disabled={true}
                    onClick={handleNext}
                >
                    Next
                </Button>
            </Grid>
        </Grid>
    )
}
