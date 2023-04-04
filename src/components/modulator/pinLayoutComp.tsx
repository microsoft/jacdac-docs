import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import React from "react";
import DeviceAvatar from "../devices/DeviceAvatar";
//TODO wont load fucking pictures bullshit

export default function PinLayoutComp(){
    return(
        <Grid item>
            <h2>Microbit Pin Layout</h2>
            <img src="../components/modulator/images/pins-v2.png" alt="Pin layout"/>
        </Grid>
    )
}
