import React from "react";
import { Breakout, CodeMake, ModuExtern, Pin, PinAlloc, PinBreakout, TypePin } from "./helper/types";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../ui/Button";
import { forEach } from "vega-lite/build/src/encoding";


export default function ModuleComponent(
    props:{
        module: ModuExtern;
        removeFunc: (moduleName:string) =>void;
        allocedPins: PinAlloc[];
    }
){
    const {module, removeFunc, allocedPins} = props;

    
    //File in the parameters for code complission
    const fileInCode = (): string => {
        const tempCodeString = module.codeAct.serviceCode.split("#");
        let result = ""
        tempCodeString.forEach(function (value, index){
            result += value
            if(!Number.isNaN(Number(module.codeAct.codeServiceParam[index]))){

                const indexAlloc = allocedPins.findIndex((value) => value.modulePin.posPin == Number(module.codeAct.codeServiceParam[index])) 
                if(indexAlloc !== -1){
                    result += allocedPins[indexAlloc].pinBreakName;
                }
            }
            else if(module.codeAct.codeServiceParam[index]==="Name"){
                result += module.name.replace(/\s/g, "")
            }
        })

        return result
    }

    //give back the pin name on breakboard or voltageconverter
    const getPin = (positionPin: number): string => {
        const index = allocedPins.findIndex((value) => value.modulePin.posPin == positionPin);
        if(index !== -1){
            if(allocedPins[index].powerSup){
                return (allocedPins[index].pinBreakName +" " +allocedPins[index].modulePin.typePin)
            }

            return allocedPins[index].pinBreakName;
        }
        return "";
    }

    const sortedPinlayout = module.pinLayout.sort((x, y) => x.posPin > y.posPin ? 1: x.posPin < y.posPin ? -1: 0);
    
    return(
        
        <div style={{border: "1px solid black", borderRadius: "20px", padding: "10px", margin: "10px" }}>
            <div>
                <span style={{fontWeight:"bold"}}>Module name: </span>
                <span>{module.name}</span>
                <Button onClick={() => removeFunc(module.name)}>Remove</Button>
            </div>
           
            {module.diagram === undefined?null:
            <div style={{textAlign:"center"}}>
                <img style={{textAlign: "center"}} src={module.diagram} alt="module diagram" width="200"/>
            </div>
            }
            <p style={{fontWeight:"bold", marginBottom:0}}>PinLayout mapping:</p>
            {sortedPinlayout.map((pin, index) =>(
                <div key={index}>
                    Type: {pin.typePin} | Module Position: {pin.posPin} | BreakoutBoard Position: {getPin(pin.posPin)}
                </div>
            ))}
            {module.codeAct === undefined?null: 
            <div>
                <p style={{fontWeight:"bold", marginBottom:0}}>Code to make sevice: </p>
                {fileInCode()}    
            </div>}

        </div>
    );
}
