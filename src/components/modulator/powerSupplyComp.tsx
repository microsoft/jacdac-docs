import { Grid } from "@mui/material";
import React from "react";
import GridHeader from "../ui/GridHeader";
import { powerSup } from "./helper/types";
import { rotate } from "@jscad/modeling/src/maths/mat4";


const imgPath = "https://i.imgur.com/YOXo2ki.png";

type Props = {
    supplies: powerSup[];
}


//TODO: highlight and hide others!!!
const PowerSupplyComp: React.FC<Props> = ({supplies}) => {
    


    return(
        <Grid item >
            <GridHeader title={"Extra Power supply"}/>
            <div style={{display:"flex"}}>
                {supplies.map((sup, index) => (
                    <div key={index} >
                        <img src={imgPath} alt="Power Supply diagram" height="100"/>
                        <br/>
                        {sup.supplyName}V
                        <br></br>
                        Connected: {sup.conModule.length} 
                        {/* Modules connected:  
                        {sup.conModule.map((supMod, index) => (
                            <div key={index}>
                                    { supMod }
                            </div> ))*/}
                        
                    </div>
                ))}
            </div>
        </Grid>
    )
}

export default PowerSupplyComp;
