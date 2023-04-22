import { Grid } from "@mui/material";
import React from "react";
import GridHeader from "../ui/GridHeader";
import { powerSup } from "./helper/types";


type Props = {
    supplies: powerSup[];
}


//TODO: styling of it
const PowerSupplyComp: React.FC<Props> = ({supplies}) => {
    


    return(
        <Grid item>
            <GridHeader title={"Extra Power supply"}/>
            {supplies.map((sup, index) => (
                <div key={index}>
                    <p>Name: {sup.supplyName} </p>
                    Modules connected:  
                    {sup.conModule.map((supMod, index) => (
                        <div key={index}>
                             { supMod }
                        </div>
                    ))}
                </div>
            ))}
        </Grid>
    )
}

export default PowerSupplyComp;
