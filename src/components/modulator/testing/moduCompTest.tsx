import React from "react";
import { LogicSup, ModuExtern, PinAlloc, } from "../helper/types";
import Button from "../../ui/Button";


export default function ModuleComponentTest(
    props:{
        module: ModuExtern;
        removeFunc: (moduleName:string) =>void;
        allocedPins: PinAlloc[];
        logicDeviders: LogicSup[];
    }
){
    const {module, removeFunc, allocedPins, logicDeviders} = props;

    const onBoard = (module.numberPins === allocedPins.length)
    
    //File in the parameters for code complission
    const fileInCode = (): string => {
        const tempCodeString = module.codeAct.serviceCode.split("#");
        let result = ""
        tempCodeString.forEach(function (value, index){
            result += value
            if(!Number.isNaN(Number(module.codeAct.codeServiceParam[index]))){
                const indexAlloc = allocedPins.findIndex((value) => value.modulePin.posPin == Number(module.codeAct.codeServiceParam[index])) 
                if(indexAlloc !== -1){
                    if(allocedPins[indexAlloc].BreakoutName !=="Micro:bit V2"){
                        console.log(allocedPins[indexAlloc]);
                        
                        const logicIndex = logicDeviders.findIndex((value) => value.convName === allocedPins[indexAlloc].BreakoutName);
                        
                        if(logicDeviders[logicIndex].highVolt == allocedPins[indexAlloc].modulePin.logicLevel){
                            const indexPin = logicDeviders[logicIndex].pinOutLow.findIndex((value) => value.position == allocedPins[indexAlloc].pinBreakLocation);
                            
                            result += logicDeviders[logicIndex].pinOutLow[indexPin].modulePin[0].name;
                        }else{
                            const indexPin = logicDeviders[logicIndex].pinOutHigh.findIndex((value) => value.position == allocedPins[indexAlloc].pinBreakLocation);
                            result += logicDeviders[logicIndex].pinOutHigh[indexPin].modulePin[0].name;
                        }
                        result += ""
    
                    }else{
                        result += allocedPins[indexAlloc].pinBreakName;
                    }
                }
                else{
                    result += "#";
                }
            }
            else if(module.codeAct.codeServiceParam[index]==="Name"){
                result += module.name.replace(/\s/g, "")
            }else if(module.codeAct.codeServiceParam[index] === "Service"){
                result += module.name.replace(/\s/g, "") + "Service"
            }
        })

        return result
    }

    const clientCodeGen = (): string =>{
        const tempCodeString = module.codeAct.clientCode.split("#").join(module.name.replace(/\s/g, ""));
        return tempCodeString;
    }

    //give back the pin name on breakboard or voltageconverter
    const getPin = (positionPin: number): string => {
        const index = allocedPins.findIndex((value) => value.modulePin.posPin == positionPin);
        if(index !== -1){
            if(allocedPins[index].powerSup){
                return (allocedPins[index].pinBreakName +" " +allocedPins[index].modulePin.typePin)
            }
            if(allocedPins[index].BreakoutName !=="Micro:bit v2 pin layout"){
                const temp = allocedPins[index].pinBreakName;
                return (allocedPins[index].BreakoutName + " pin "+temp);
            }

            return "breakoutboard pin "+ allocedPins[index].pinBreakName;
        }
        return "#";
    }

    const sortedPinlayout = module.pinLayout.sort((x, y) => x.posPin > y.posPin ? 1: x.posPin < y.posPin ? -1: 0);
    
//    document.getElementById("connector2pin").addEventListener("click", function() {
//         console.log("Fuck");
        
//    })


    return(
        
        <div style={{border: "1px solid black", borderRadius: "20px", padding: "10px", margin: "10px" }}>
            <div>
                <span style={{fontWeight:"bold"}}>Module name: </span>
                <span>{module.name}</span>
                <Button onClick={() => removeFunc(module.name)}>Remove</Button>
                {onBoard?null: <p style={{color:"red", fontWeight:"bold"}}>Could not be added</p>}
            </div>
           


            {module.diagram === undefined?null:
            <div style={{textAlign:"center"}}>
                <img style={{textAlign: "center", margin:"0"}} alt={"test"} src={"https://raw.githubusercontent.com/fritzing/fritzing-parts/9597553a1adc09019b4a42fe7929196abff18133/svg/core/breadboard/hc-sr04_bf8299a_002.svg"} width="300"/>
            </div>
            

             
            // <div style={{textAlign:"center"}}>
            //     <img style={{textAlign: "center", margin:"0"}} alt={"test"} src={"https://raw.githubusercontent.com/fritzing/fritzing-parts/9597553a1adc09019b4a42fe7929196abff18133/svg/core/breadboard/led-rgb-4pin-anode-leg.svg"} width="300"/>
            // </div>
            }
            {/* <div style={{textAlign:"center"}}>
                <img style={{textAlign: "center"}} src={module.diagram} alt="module diagram" width="200"/>
            </div> */}
            {/*Drawing the needed boxes???*/ }
            <div style={{textAlign:"center"}}>
                <svg height={20} width={300}>
                    <rect x={116.5} y={5} style={{fill:"purple"}} width={"10"} height={"10"} />
                    <rect x={134} y={5} style={{fill: "green"}} width={"10"} height={"10"}/>   
                </svg>

            </div>





            <p style={{fontWeight:"bold", marginBottom:0}}>How to connect:</p>
            {sortedPinlayout.map((pin, index) =>(
                <div key={index}>
                    Connect module pin {pin.posPin} ({pin.typePin}) to the {getPin(pin.posPin)}
                    {/* Type: {pin.typePin} | Module Position: {pin.posPin} | BreakoutBoard Position: {getPin(pin.posPin)} */}
                </div>
            ))}
            {module.codeAct === undefined?null: 
            <div>
                <p style={{fontWeight: "bold"}}>Copy to MakeCode:</p>
                <div style={{marginBottom:0}}>//Code for service</div>
                <div style={{marginBottom:0}}>{fileInCode()}</div>
                <div style={{marginBottom:0}}>//Code for client</div>
                <div style={{marginBottom:0}}>{clientCodeGen()}</div>
            </div>}

        </div>
    );
}
