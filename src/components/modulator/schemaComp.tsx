import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";
import GridHeader from "../ui/GridHeader";
import { Breakout, CodeMake, ModuExtern, Pin, PinAlloc, PinBreakout, TypePin } from "./helper/types";
import ModuleComponent from "./moduleComponent";
import Button from "../ui/Button";


type Props={
    modules: ModuExtern[];
    allocedPins: PinAlloc[];
    removeFunc: (moduleName: string) =>void;
}

const SchemaComp: React.FC<Props> = ({modules, removeFunc, allocedPins}) =>{
    const moduAllocList = (moduleName: string) =>{
        const tempList = [];
        allocedPins.forEach(function (valPin, index) {
            if(valPin.moduleName === moduleName){
                tempList.push(valPin)
            }
        });
        //console.log("SchemaComp TempList: "+tempList + "moduleName: "+moduleName)
        return tempList;
    }
    
    
    return(
        <Grid xs={8} item>
            <GridHeader title={"Added modules"}/>
            <div style={{overflowY:"scroll", maxHeight:"50vh"}}>
                {modules.map((mod, index) => (

                    <ModuleComponent module={mod} removeFunc={removeFunc} allocedPins={moduAllocList(mod.name)} key={index}/>
                ))}
            </div>
        </Grid>
    )

}

export default SchemaComp;
