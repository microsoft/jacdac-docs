import React from "react";
import { ModuExtern } from "./modulator";
import { StaticImage } from "gatsby-plugin-image";


export default function ModuleComponent(
    props:{
        module: ModuExtern;
    }
){
    const {module} = props;
    
    return(
        
        <div style={{border: "1px solid black", borderRadius: "20px", padding: "10px", margin: "10px" }}>
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
                {module.codeAct.module} {module.codeAct.service}    
            </div>}

        </div>
    );
}
