import { Grid } from "@mui/material";
import React from "react";
import GridHeader from "../ui/GridHeader"
import { StaticImage } from "gatsby-plugin-image";
//TODO wont load fucking pictures bullshit

export default function PinLayoutComp(){
    return(
        <Grid item>
            <GridHeader title={"Microbit Pin Layout"}/>
            <StaticImage src="./images/pins-v2.png" alt={"Pin layout Micro:bit"}/>
        </Grid>
    )
}
