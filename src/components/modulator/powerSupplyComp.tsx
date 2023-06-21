import { Grid } from "@mui/material";
import React from "react";
import GridHeader from "../ui/GridHeader";
import { ModuExtern, PinAlloc, powerSup } from "./helper/types";
import { rotate } from "@jscad/modeling/src/maths/mat4";


const imgPath = "https://i.imgur.com/YOXo2ki.png";

type Props = {
    powerSupplies: powerSup[];
    highlighted: ModuExtern|undefined;
    highlightPinsAlloc: PinAlloc[];
}


//TODO: highlight and hide others!!!
const PowerSupplyComp: React.FC<Props> = ({powerSupplies, highlighted, highlightPinsAlloc}) => {
    
    const checkHighligt = () => {
        if(highlighted){
            return true;
        }
        return false;
    }

    const checkIfIncluded = (powerName: string) => {
        if(highlighted){
            for(let i = 0; i<highlightPinsAlloc.length; i++){
                if(highlightPinsAlloc[i].BreakoutName === powerName){
                    return true;
                }
            }
            return false;
        }
        return false;
    }

    return(
        <Grid item >
            <GridHeader title={"Extra Power supply"}/>
            <div style={{display:"flex"}}>
                {powerSupplies.map((sup, index) => (
                    <div key={index} >
                        <img src={imgPath} alt="Power Supply diagram" height="100"/>
                        <br/>
                        {sup.supplyName}V
                        <br></br>
                        Connected: {sup.conModule.length}                         
                    </div>
                ))}
            </div>
        </Grid>
    )
}

export default PowerSupplyComp;
