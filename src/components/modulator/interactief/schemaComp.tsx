import { Grid } from "@mui/material";
import React from "react";
import { LogicSup, ModuExtern, PinAlloc } from "../helper/types";
import GridHeader from "../../ui/GridHeader";
import ManualAddComp from "../manualAddComponent";
import ModuleComponentTest from "./moduComp";
import Button from "../../ui/Button";



type Props={
    modules: ModuExtern[];
    allocedPins: PinAlloc[];
    logicDeviders: LogicSup[];
    highlighted: ModuExtern|undefined;
    removeFunc: (moduleName: string) =>void;
    addSchema: (moduleId: string) => void;
    highlight: (moduleName:string|undefined) =>void;
}

const SchemaCompTest: React.FC<Props> = ({modules, removeFunc, highlighted, allocedPins, addSchema, logicDeviders, highlight}) =>{
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
    
    const checkhigh = () => {
        if(highlighted){
            return true
        }
        return false
    }

    const checkIfHighlighted = (moduleName:string) => {
        if(highlighted){
            if(highlighted.name == moduleName){
                return true;
            }
        }
        return false;
    }

    
    return(
        <Grid xs={8} item style={{paddingTop:0}}>
            {<h3>First Code for Makecode: led.enable(false);</h3>}

            <GridHeader title={"Added modules"} action={<span><ManualAddComp addSchema={addSchema}/> <Button onClick={() => highlight(undefined)}>Reset Highlight</Button></span>}/>
            {checkhigh()? 
                <div style={{overflowY:"scroll", maxHeight:"75vh"}}>
                    {modules.map((mod, index) =>(
                        <span key={index} style={{opacity:checkIfHighlighted(mod.name)?"1.0": "0.5" }}>
                            <ModuleComponentTest module={mod} removeFunc={removeFunc} allocedPins={moduAllocList(mod.name)} logicDeviders={logicDeviders} key={index} highlightFunc={highlight}/>
                        </span>
                    ))}
                </div>
                :<div style={{overflowY:"scroll", maxHeight:"75vh"}}>
                    {modules.map((mod, index) => (

                        <ModuleComponentTest module={mod} removeFunc={removeFunc} allocedPins={moduAllocList(mod.name)} logicDeviders={logicDeviders} key={index} highlightFunc={highlight}/>
                    ))}
                </div>}
            
        </Grid>
    )

}

export default SchemaCompTest;
