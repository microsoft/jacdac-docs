import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";
import GridHeader from "../ui/GridHeader";
import { ModuExtern } from "./modulator";
import ModuleComponent from "./moduleComponent";
import Button from "../ui/Button";


type Props={
    modules: ModuExtern[];

}

const SchemaComp: React.FC<Props> = ({modules}) =>{
      
        return(
            <Grid xs={8} item>
                <GridHeader title={"Added modules"}/>
                <div style={{overflow:"scroll", maxHeight:"50vh"}}>
                    {modules.map((mod, index) => (
                            <ModuleComponent module={mod} key={index}/>
                    ))}
                </div>
            </Grid>
        )

}

export default SchemaComp;
