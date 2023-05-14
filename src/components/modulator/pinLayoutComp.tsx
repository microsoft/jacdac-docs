import { Grid } from "@mui/material";
import React from "react";
import GridHeader from "../ui/GridHeader"
import { StaticImage } from "gatsby-plugin-image";
//TODO: hover working!!!

export default function PinLayoutComp(){
    return(
        <Grid item>
            <GridHeader title={"Micro:bit Pin Layout"}/>
            <StaticImage src="./images/pins-v2.png" alt={"Pin layout Micro:bit"}/>
        </Grid>
    )
}
