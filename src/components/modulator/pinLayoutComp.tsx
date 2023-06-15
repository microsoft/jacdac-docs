import { Grid } from "@mui/material";
import React, { useState } from "react";
import GridHeader from "../ui/GridHeader"
import { StaticImage } from "gatsby-plugin-image";
import ImageMapper from 'react-image-mapper';

//TODO: hover start is made
// nog no clue hoe verder, mogelijk gewoon met kleur ofzo
export default function PinLayoutComp(){

    const [hoverdArea, setHoverArea] = useState(null);

    const onClicked = (area:any) => {
        console.log(area)
    }

    const MAP = {
        name: "my-map",
        areas: [
            {name: "P1", shape: "poly", coords:[1, 262, 1, 305, 18, 305, 18, 262], fillColor: "blue"}
        ]
    }
    const getTipPosition = (area) => {
        return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
    }

    return(
        <Grid item>
            <GridHeader title={"Micro:bit Pin Layout V2"}/>
            <ImageMapper src="https://i.imgur.com/m52rVjP.png" map={MAP} width={500} imgWidth={600}
                onClick={area => onClicked(area)}
                onMouseEnter={area => setHoverArea(area)}
                onMouseLeave={area => setHoverArea(null)}
              
            />
            {
                hoverdArea &&
                <span className="tooltip"
                    style={{ ...getTipPosition(hoverdArea)}}>
                    { hoverdArea && hoverdArea.name}
                </span>
            }
        </Grid>
    )
}
