import { Grid } from "@mui/material";
import React from "react";
import { LogicSup, ModuExtern, PinAlloc } from "../helper/types";
import GridHeader from "../../ui/GridHeader";
import ManualAddComp from "../manualAddComponent";
import ModuleComponentTest from "./moduCompTest";
import Button from "../../ui/Button";



type Props={
    modules: ModuExtern[];
    allocedPins: PinAlloc[];
    logicDeviders: LogicSup[];
    removeFunc: (moduleName: string) =>void;
    addSchema: (moduleId: string) => void;
    highlight: (moduleName:string|undefined) =>void;
}

const SchemaCompTest: React.FC<Props> = ({modules, removeFunc, allocedPins, addSchema, logicDeviders, highlight}) =>{
    const moduAllocList = (moduleName: string) =>{
        const tempList = [];
        allocedPins.forEach(function (valPin) {
            if(valPin.moduleName === moduleName){
                tempList.push(valPin)
            }
        });
        //console.log("SchemaComp TempList: "+tempList + "moduleName: "+moduleName)
        return tempList;
    }
    
    
    return(
        <Grid xs={7} item style={{paddingTop:0}}>
            <GridHeader title={"Added modules"} action={<span><ManualAddComp addSchema={addSchema}/> <Button onClick={() => highlight(undefined)}>Reset Highlight</Button></span>}/>
            <div style={{overflowY:"scroll", maxHeight:"120vh"}}>
                {modules.map((mod, index) => (

                    <ModuleComponentTest module={mod} removeFunc={removeFunc} allocedPins={moduAllocList(mod.name)} logicDeviders={logicDeviders} key={index} highlightFunc={highlight}/>
                ))}
            </div>
        </Grid>
    )

}

export default SchemaCompTest;
