import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import React from "react";
import DeviceAvatar from "../devices/DeviceAvatar";
import GridHeader from "../ui/GridHeader";
import { powerSup } from "./helper/types";


type Props = {
    supplies: powerSup[];
}


const PowerSupplyComp: React.FC<Props> = ({supplies}) => {
    


    return(
        <Grid item>
            <GridHeader title={"Extra Power supply"}/>
            {supplies.map((sup, index) => (
                <div key={index}>
                    Name: {sup.supplyName}
                    {sup.conModule.map((supMod, index) => (
                        <span key={index}>
                            {supMod}
                        </span>
                    ))}
                </div>
            ))}
        </Grid>
    )
}

export default PowerSupplyComp;
