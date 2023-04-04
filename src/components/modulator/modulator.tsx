import { ReactElement, useId, useState } from "react";
import React from "react"
import { Grid } from "@mui/material"
import GridHeader from "../ui/GridHeader"
import LegendComp from "./legendComp";
import PinLayoutComp from "./pinLayoutComp";
import SchemaComp from "./schemaComp";
import Button from "../ui/Button";


export default function ModulatorComp(
    props:  {
        title?: string,
        action?: JSX.Element
    }
) {
    const {title, action } = props;
    const sectionId = useId();

    const addSchema = () =>{

    }


    return(
        <section id={sectionId}>
            <Button
                onClick={addSchema}>TESTING</Button>
            <Grid container>
                <GridHeader title={"Modulator"}/>
                <Grid xs={4} item>
                    <Grid
                        direction={"column"}
                        container
                    >
                        <LegendComp/>
                        <PinLayoutComp/>
                    </Grid>
                </Grid>

                {/* <Grid xs={8} item> */}
                    <SchemaComp/>
                {/* </Grid> */}
            </Grid>

        </section>
    )
}
