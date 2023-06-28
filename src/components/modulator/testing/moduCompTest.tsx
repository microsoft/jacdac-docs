import React from "react";
import { LogicSup, ModuExtern, PinAlloc, TypePin, } from "../helper/types";
import Button from "../../ui/Button";
import { getColor } from "../helper/file";

//TODO: kijken hoe hide wanneer neit highlighted

export default function ModuleComponentTest(
    props:{
        module: ModuExtern;
        removeFunc: (moduleName:string) =>void;
        allocedPins: PinAlloc[];
        logicDeviders: LogicSup[];
        highlightFunc: (moduleName:string) =>void;
    }
){
    const {module, removeFunc, allocedPins, logicDeviders, highlightFunc} = props;

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
            // if(allocedPins[index].BreakoutName !=="Micro:bit V2"){
                const temp = allocedPins[index].pinBreakName;
                return (allocedPins[index].BreakoutName + " pin "+temp);
            // }

            // return "breakoutboard pin "+ allocedPins[index].pinBreakName;
        }
        return "#";
    }

    const getColorPin = (positionPin: number):string => {
        const index = allocedPins.findIndex((value) => value.modulePin.posPin == positionPin);

        if(index !== -1){
            if(allocedPins[index].powerSup && allocedPins[index].modulePin.typePin === TypePin.Power){
                return "#e6194B"
            }
            if(allocedPins[index].powerSup && allocedPins[index].modulePin.typePin === TypePin.GND){
                return "#a9a9a9"
            }
            if(allocedPins[index].BreakoutName ==="Micro:bit V2"){
                
                return getColor(allocedPins[index].pinBreakName)
            }
        }
    }

    const sortedPinlayout = module.pinLayout.sort((x, y) => x.posPin > y.posPin ? 1: x.posPin < y.posPin ? -1: 0);
    
//    document.getElementById("connector2pin").addEventListener("click", function() {
//         console.log("Fuck");
        
//    })


    return(
        
        <div style={{border: "1px solid black", borderRadius: "20px", padding: "10px", margin: "10px" }}>
            <div>
                <span style={{fontWeight: 600, fontSize: "1.38rem"}}>Module name: </span>
                <span>{module.name}</span>
                <Button onClick={() => removeFunc(module.name)}>Remove</Button>
                {onBoard?            
                    <Button onClick={() => highlightFunc(module.name)}>Highlight connections</Button>: 
                    <p style={{color:"red", fontWeight:"bold"}}>Could not be added</p>
                }
            </div>
           


            {module.diagram === undefined?null:
            // <div style={{textAlign:"center"}}>
            //     <img style={{textAlign: "center", margin:"0"}} alt={"test"} src={"https://raw.githubusercontent.com/fritzing/fritzing-parts/9597553a1adc09019b4a42fe7929196abff18133/svg/core/breadboard/hc-sr04_bf8299a_002.svg"} width="300"/>
            // </div>
            
                <div style={{textAlign:"center"}}>
                    <img style={{textAlign: "center"}} src={module.diagram} alt="module diagram" width="200"/>
                </div>
             
            // <div style={{textAlign:"center"}}>
            //     <img style={{textAlign: "center", margin:"0"}} alt={"test"} src={"https://raw.githubusercontent.com/fritzing/fritzing-parts/9597553a1adc09019b4a42fe7929196abff18133/svg/core/breadboard/led-rgb-4pin-anode-leg.svg"} width="300"/>
            // </div>
            }
            {/*  */}
            {/*Drawing the needed boxes??? change to make hoverable*/ }
            {/*TODO: change maybe to thing with imagamapper, has working of hover shit???*/}
            <div style={{textAlign:"center"}}>
                <svg height={20} width={300}>
                    {sortedPinlayout.map((pin, index) =>(
                        <rect key={index} x={pin.x} y={5} style={{fill:getColorPin(pin.posPin)}} width={"10"} height={"20"}/>
                    ))}
                </svg>
            </div>


            <h3 style={{ marginBottom:0}}>How to connect:</h3>
            {sortedPinlayout.map((pin, index) =>(
                <div key={index}>
                    Connect module <span style={{}}> pin {pin.posPin} </span> ({pin.typePin}) to the <span style={{borderBottom:"3px solid",borderBottomColor:getColorPin(pin.posPin), fontWeight:600}}>{getPin(pin.posPin)}</span>
                    {/* Type: {pin.typePin} | Module Position: {pin.posPin} | BreakoutBoard Position: {getPin(pin.posPin)} */}
                </div>
            ))}
            {module.codeAct === undefined?null: 
            <div style={{marginTop:15}}>
                {/* <h3 style={{fontSize: "1.3rem",fontWeight: "bold"}}>Copy to MakeCode:</h3> */}
                <h3 style={{margin:0}}>Copy to MakeCode:</h3>
                <div style={{marginBottom:0}}>//Code for service</div>
                <div style={{marginBottom:0}}>{fileInCode()}</div>
                <div style={{marginBottom:0}}>//Code for client</div>
                <div style={{marginBottom:0}}>{clientCodeGen()}</div>
            </div>}

        </div>
    );
}
