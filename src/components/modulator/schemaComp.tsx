import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";
import GridHeader from "../ui/GridHeader";
import { Breakout, CodeMake, ModuExtern, Pin, PinBreakout, TypePin } from "./helper/types";
import ModuleComponent from "./moduleComponent";
import Button from "../ui/Button";


type Props={
    modules: ModuExtern[];
    removeFunc: (moduleName: string) =>void;
}

const SchemaComp: React.FC<Props> = ({modules, removeFunc}) =>{
      
        return(
            <Grid xs={8} item>
                <GridHeader title={"Added modules"}/>
                <div style={{overflow:"scroll", maxHeight:"50vh"}}>
                    {modules.map((mod, index) => (
                            <ModuleComponent module={mod} removeFunc={removeFunc} key={index}/>
                    ))}
                </div>
            </Grid>
        )

}

export default SchemaComp;
