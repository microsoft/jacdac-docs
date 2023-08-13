import { Grid } from "@mui/material";
import React from "react";
import GridHeader from "../../ui/GridHeader";
import { LogicSup, ModuExtern, PinAlloc, PinBreakout, TypePin, powerSup } from "../helper/types";
import { rotate } from "@jscad/modeling/src/maths/mat4";
import Button from "../../ui/Button";


const imgPathLogic = "https://www.kiwi-electronics.com/image/cache/catalog/product/aem8hbpd/SF-BOB-12009_0-766x511h.jpg";
const imgPathPw = "https://i.imgur.com/YOXo2ki.png";

type Props = {
    LogicSupl: LogicSup[];
    powerSupplies: powerSup[];
    highlighted: ModuExtern|undefined;
    highlightPinsAlloc: PinAlloc[];
}


//TODO: maybe if neede highlight support
const ExtraNeededComp: React.FC<Props> = ({LogicSupl, powerSupplies, highlightPinsAlloc, highlighted}) => {

    const checkHighligt = () => {
        if(highlighted){
            return true;
        }
        return false;
    }

    const checkIfIncluded = (powerName: string) => {
        if(highlighted){
            for(let i = 0; i<highlightPinsAlloc.length; i++){
                if(highlightPinsAlloc[i].BreakoutName === powerName){
                    return true;
                }
            }
            return false;
        }
        return false;
    }

    const getPin = (pin: PinBreakout, lowSup: boolean) =>{
        if(pin.used){
            console.log(pin);
            if(pin.modulePin.length !== 0){
                    return <div>Connect <span style={{fontWeight:600}}> {pin.name}</span> to <span style={{fontWeight:600}}>{pin.moduleName[0]} P{pin.modulePin[0].posPin}  </span> </div>

            }
            if(pin.options[0] === TypePin.GND){
                    return<div>Connect <span style={{fontWeight:600}}>{pin.name} </span> to  <span style={{fontWeight:600}}>{pin.moduleName[0]} GND</span> </div>
                
            }
            if(pin.options[0] === TypePin.Power){
                return<div>Connect <span style={{fontWeight:600}}>{pin.name} </span> to  <span style={{fontWeight:600}}>{pin.moduleName[0]} VCC</span> </div>
                
            }

        }
    }

    return(
        <Grid xs={12} item >
            <GridHeader title={"Extra Components"}/>
            {checkHighligt()?
                <div style={{display:"flex"}}>
                    {powerSupplies.map((sup, index) => (
                        <div key={index} style={{opacity:checkIfIncluded(sup.supplyName)?"1.0":"0.5"}} >
                            {checkIfIncluded(sup.supplyName)?
                            <>
                                <svg height={20} width={100}>
                                    <rect x={35} y={5} style={{fill:"#a9a9a9"}} width={"10"} height={"20"}/>
                                    <rect x={55} y={5} style={{fill:"#e6194B"}} width={"10"} height={"20"}/>
                                </svg>
                                <br></br>
                            </>
                            :null}
                            <img src={imgPathPw} alt="Power Supply diagram" height="100"/>
                            <br/>
                            {sup.supplyName}V
                            <br></br>
                            Connected: {sup.conModule.length}                         
                        </div>
                    ))}

                    {LogicSupl.map((sup, index) => (
                        <div key={index} style={{paddingLeft: 50, opacity:checkIfIncluded(sup.name)?"1.0":"0.5"}}>
                            {sup.name}
                            <br></br>
                            Connected: {sup.conModule.length}
                            <h3 style={{marginBottom:0}}>How to connect High Voltage: </h3>
                            {sup.pinOutHigh.map((pin, index) =>(
                                <div key={index}>
                                    {getPin(pin, false)}
                                </div>
                            ))}
                            <div>
                                <img src={imgPathLogic} alt="diagram" height="150"/>
                            </div>
                            <h3 style={{marginBottom:0}}>How to connect Low Voltage: </h3>
                            
                            {sup.pinOutLow.map((pin, index) =>(
                                <div key={index}>
                                    {getPin(pin, true)}
                                </div>
                            ))}

                        </div>
                    ))}
                </div>:

                <div style={{display:"flex"}}>
                    {powerSupplies.map((sup, index) => (
                        <div key={index} >
                            <img src={imgPathPw} alt="Power Supply diagram" height="100"/>
                            <br/>
                            {sup.supplyName}V
                            <br></br>
                            Connected: {sup.conModule.length}                         
                        </div>
                    ))}
                    
                    {LogicSupl.map((sup, index) => (
                        <div key={index} style={{paddingLeft: 50}}>
                            {sup.name}
                            <br></br>
                            Connected: {sup.conModule.length}
                            <h3 style={{marginBottom:0}}>How to connect High Voltage: </h3>
                            {sup.pinOutHigh.map((pin, index) =>(
                                <div key={index}>
                                    {getPin(pin, false)}
                                </div>
                            ))}
                            <div>
                                <img src={imgPathLogic} alt="diagram" height="150"/>
                            </div>
                            <h3 style={{marginBottom:0}}>How to connect Low Voltage: </h3>
                            
                            {sup.pinOutLow.map((pin, index) =>(
                                <div key={index}>
                                    {getPin(pin, true)}
                                </div>
                            ))}

                        </div>
                    ))}
                </div>
            }
            

            <div style={{display:"flex"}}>
                
            </div>
        </Grid>
    );
}

export default ExtraNeededComp;
