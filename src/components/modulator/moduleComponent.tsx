import React from "react";
import { Breakout, CodeMake, ModuExtern, Pin, PinBreakout, TypePin } from "./helper/types";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../ui/Button";


export default function ModuleComponent(
    props:{
        module: ModuExtern;
        removeFunc: (moduleName:string) =>void;
    }
){
    const {module, removeFunc} = props;

    const fileInCode = () => {

    }
    
    return(
        
        <div style={{border: "1px solid black", borderRadius: "20px", padding: "10px", margin: "10px" }}>
            <Button onClick={() => removeFunc(module.name)}>Remove</Button>
            <p>Module name: {module.name}</p>
            {module.diagram === undefined?null:
            <div style={{textAlign:"center"}}>
                <img style={{textAlign: "center"}} src={module.diagram} alt="module diagram" width="200"/>
            </div>
            }
            <p>PinLayout mapping:</p>
            {module.pinLayout.map((pin, index) =>(
                <div key={index}>
                    {pin.typePin} {pin.posPin}
                </div>
            ))}
            {module.codeAct === undefined?null: 
            <div>
                {module.codeAct.clientCode} {module.codeAct.serviceCode}    
            </div>}

        </div>
    );
}
