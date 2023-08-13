/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import { LogicSup, ModuExtern, PinAlloc, TypePin, } from "../helper/types";
import Button from "../../ui/Button";
import { getColor } from "../helper/file";
import ImageMapper from 'react-image-mapper';

//TODO: kijken hoe hide wanneer neit highlighted

type Props={
    module: ModuExtern;
    removeFunc: (moduleName:string) =>void;
    allocedPins: PinAlloc[];
    logicDeviders: LogicSup[];
    highlightFunc: (moduleName:string) =>void;
}

const ModuleComponentTest: React.FC<Props> = ({module, removeFunc, allocedPins, logicDeviders, highlightFunc})  => 
{
    const [hoverdArea, setHoverArea] = useState(null);
    const [moveMSG, setMoveMSG] = useState("");

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
                        
                        const logicIndex = logicDeviders.findIndex((value) => value.name === allocedPins[indexAlloc].BreakoutName);
                        
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
            }else{
                return "#f505c1"
            }
        }
    }

    const sortedPinlayout = module.pinLayout.sort((x, y) => x.posPin > y.posPin ? 1: x.posPin < y.posPin ? -1: 0);
    
    const onEnterArea = (area) => {
        const index = module.pinLayout.findIndex((value) => value.name == area.name);
        // setHoverArea(area);
        if(index !== -1){
            if(module.pinLayout[index].typePin=== TypePin.Power){
                setHoverArea (<div>
                    <span style={{fontWeight:600}}>Pin name: </span> <span>{module.pinLayout[index].name}</span> 
                    <br></br>
                    <span style={{fontWeight:600}}>Pin position: </span> <span>{module.pinLayout[index].posPin}</span>
                    <br></br>
                    <span style={{fontWeight:600}}>Used Power: </span><span>{module.pinLayout[index].voltage}V</span>
                </div>)
            }else{
                setHoverArea (<div>
                    <span style={{fontWeight:600}}>Pin name: </span> <span>{module.pinLayout[index].name}</span> 
                    <br></br>
                    <span style={{fontWeight:600}}>Pin position: </span> <span>{module.pinLayout[index].posPin}</span>
                    <br></br>
                    <span style={{fontWeight:600}}>Pin Type: </span><span>{module.pinLayout[index].typePin} </span>
                </div>)
            }

        }

    }

    const getTipPosition = (area) => {
        return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
    }

    const createMap = () => {
        const areaList = [];
        for(let i = 0; i<module.pinLayout.length; i++){
            areaList.push({
                name: module.pinLayout[i].name,
                shape: "rect",
                coords: [module.pinLayout[i].posRect.xTop,module.pinLayout[i].posRect.yTop,
                        module.pinLayout[i].posRect.xBot,module.pinLayout[i].posRect.yBot],
                preFillColor: getColorPin(module.pinLayout[i].posPin)
            })
        }

        return {
            name: module.name,
            areas: areaList
        }
    }


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
           


            <div style={{display:"flex", alignContent:"center",}}>
                
                <div style={{position:"relative"}}>
                    <ImageMapper src={module.diagram} map={createMap()} width={250} imgWidth={module.diagramWidth}
                        onMouseEnter={area => onEnterArea(area)}
                        onMouseLeave={area => setHoverArea(null)}

                    />
                </div>
                <div style={{paddingLeft: "10px"}}>
                    <h3 style={{marginTop: "5px", marginBottom: "5px"}}>Detail Pin:</h3>
                    {hoverdArea && <span>{hoverdArea}</span>}
                </div>
                               
            </div>

            


            <h3 style={{ marginBottom:0}}>How to connect:</h3>
            {sortedPinlayout.map((pin, index) =>(
                <div key={index}>
                    Connect module <span style={{}}> pin {pin.posPin} </span> ({pin.typePin}) to the <span style={{borderBottom:"3px solid",borderBottomColor:getColorPin(pin.posPin), fontWeight:600}}>{getPin(pin.posPin)}</span>
                </div>
            ))}
            {module.codeAct === undefined?null: 
            <div style={{marginTop:15}}>
                <h3 style={{margin:0}}>Copy to MakeCode:</h3>
                <div style={{marginBottom:0}}>//Code for service</div>
                <div style={{marginBottom:0}}>{fileInCode()}</div>
                <div style={{marginBottom:0}}>//Code for client</div>
                <div style={{marginBottom:0}}>{clientCodeGen()}</div>
            </div>}

        </div>
    );
}

export default ModuleComponentTest;
