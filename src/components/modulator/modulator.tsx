import { ReactElement, useEffect, useId, useState } from "react";
import React from "react"
import { Grid } from "@mui/material"
import GridHeader from "../ui/GridHeader"
import LegendComp from "./legendComp";
import PinLayoutComp from "./pinLayoutComp";
import SchemaComp from "./schemaComp";
import Button from "../ui/Button";
import { log } from "vega";
import { fetchModule, fetchPinLayout, predicate } from "./helper/file";
import { Breakout, CodeMake, ModuExtern, Pin, PinAlloc, PinBreakout, TypePin } from "./helper/types";
import SerialHandler from "./helper/serialHandler";


//TODO: making pin allocation and removing
//TODO: get module info from file or github???
//TODO: code auto fill in (now static do??)
//TODO: MCU send id to stupid thing
//TODO: layout working
//TODO: image from web not local gives problems

// type Props={
//     breakoutBoard: Breakout;
// }
async function getBreakout():Promise<Breakout>{
    return await fetchPinLayout();
}

const ModulatorComp = () =>{
    const sectionId = useId();
    const [conModules, setconModules] = useState<Array<ModuExtern>>([]);
    const [breakoutBoard, setBreakoutBoard] = useState(undefined as Breakout | undefined);
    const [allocedPins, setAllocedPins] = useState<Array<PinAlloc>>([]);
    const [handlerLoaded, sethandlerLoaded] = useState(false);
    const serialHandler = (new SerialHandler());


    const [, updateState] = React.useState({});
    const forceUpdate = React.useCallback(() => updateState({}), [])

    useEffect(() =>{
        getBreakout().then((data) => {
            setBreakoutBoard(data);
        })
        

    }, [])

    const removeConModule = (moduleName: string) => {
        //remove from conModules
        const indexconModule = conModules.findIndex( i => i.name === moduleName);
        const tempConModule = conModules
        tempConModule.splice(indexconModule, 1);
        //remove from allocedPins
        const tempAllocedPins = allocedPins.filter(function(value) { return value.moduleName !== moduleName});
        //Remove from breakoutBoard
        const tempPinOut = breakoutBoard.pinOut
        tempPinOut.forEach(function(value, index) {
            if(value.used){
                const tempIndex = value.moduleName.findIndex(i => i === moduleName);
                if(tempIndex !== -1){
                    if(value.moduleName.length === 1){
                        value.used = false;
                    }
                    value.moduleName.splice(tempIndex, 1);
                    value.modulePin.splice(tempIndex, 1);
                }
            }
        })
        const tempBreakout = breakoutBoard;
        tempBreakout.pinOut = tempPinOut;



        setconModules(tempConModule);
        setAllocedPins(tempAllocedPins);
        setBreakoutBoard(tempBreakout);

        forceUpdate();

    }

    //Old way of loading static
    const staticaddSchema = () =>{
        console.log(conModules.length)
        const tempName = "Test" + new Date().toISOString();

        const tempPin: Pin[] = [   {typePin:TypePin.GND, posPin:-1, moduleId:tempName}, 
                                    {typePin:TypePin.AnalogIn, posPin:1, name:"Trig", moduleId:tempName}, 
                                    {typePin:TypePin.AnalogIn, posPin:0, name:"Echo", moduleId:tempName}, 
                                    {typePin:TypePin.Power, posPin:21, moduleId:tempName}];
        const temp: ModuExtern = {name:tempName,
                                type:"Distance",
                                numberPins: 4,
                                pinLayout:tempPin,
                                //diagram:"./images/pins-v2.PNG",
                                diagram:"https://soldered.com/productdata/2015/02/751276-Edit.jpg"
                                }
        const tempCon = conModules;
        tempCon.push(temp)
        setconModules(tempCon);
        forceUpdate();
    }

    const addSchema = async () =>{
        //console.log("new comp id: "+id);
        const argument = "sr04";
        const tempModu = await fetchModule(argument);
        console.log(tempModu.pinLayout[0].typePin)
        console.log("checking")
        
        
        const tempModuPins = breakBoardAllocCheck(tempModu);
        if(tempModuPins){
            if(tempModuPins.length !==0){
                breakBoardAllocPins(tempModuPins);
                

                //Set new Alocced
                let tempAllocPin = allocedPins;
                tempAllocPin = tempAllocPin.concat(tempModuPins);
                //console.log(tempAllocPin)
                setAllocedPins(tempAllocPin);
            }
            


            //Place the new module
            const tempCon = conModules;
            tempCon.push(tempModu)
            setconModules(tempCon);
            console.log(breakoutBoard)
            
        }
        
        forceUpdate();
    }

    const breakBoardAllocCheck = (newModule: ModuExtern): PinAlloc[]|undefined =>{
        if(breakoutBoard){
            const sortPinlayout = newModule.pinLayout.sort((a, b) => predicate(a.typePin, b.typePin));

            const pinPossible: number[] = [];
            const pinAllocTemp: PinAlloc[] = [];
            let counterBasic = 0;

            for(let i = 0; i < sortPinlayout.length; i++){
                if(sortPinlayout[i].typePin === TypePin.GND || sortPinlayout[i].typePin === TypePin.Power){
                    pinPossible.push(-1);
                    counterBasic +=1;
                    //TODO:add check if Voltage not too high, other ways adding voltage convertere
                }
                for(let j = 0; j < breakoutBoard.pinOut.length; j++){
                    
                    //check pin is in use
                    if(!breakoutBoard.pinOut[j].used ){
                        //check if pin in temp
                        if(!pinPossible.includes(breakoutBoard.pinOut[j].position)){
                            //Check if type correct
                            if(breakoutBoard.pinOut[j].options.includes(sortPinlayout[i].typePin)){
                                pinPossible.push(breakoutBoard.pinOut[j].position);
                                pinAllocTemp.push({ moduleName: newModule.name,
                                                    modulePin: sortPinlayout[i],
                                                    pinBreakboardLocation: breakoutBoard.pinOut[j].position,
                                                });
                                break;
                            }   
                        }
                    }
                }
            }

            if((counterBasic + pinAllocTemp.length) === newModule.numberPins){
                
                return pinAllocTemp;
            }else{
                console.log("Not possible to load in" + counterBasic + " " + pinAllocTemp.length);
                return [];
            }
        }else{
            console.log("ERROR: no breakoutboard loaded in!!!");
            return undefined;
        }

    }

    //set the temp allocated pin position to the breakoutboard
    const breakBoardAllocPins = (allocPins: PinAlloc[]) => {
        if(breakoutBoard){
            const tempBreakoutBoard = breakoutBoard;
            for(let i = 0; i<allocPins.length; i++){
                const index = tempBreakoutBoard.pinOut.findIndex(element => element.position === allocPins[i].pinBreakboardLocation);
                if(index !== -1){
                    tempBreakoutBoard.pinOut[index].used = true;
                    tempBreakoutBoard.pinOut[index].moduleName.push(allocPins[i].moduleName);
                    tempBreakoutBoard.pinOut[index].modulePin.push(allocPins[i].modulePin);
                }
            }
            setBreakoutBoard(tempBreakoutBoard);
        }
    }

    //TODO: add serial for code read out, make it loop
    //TODO: chip button for console read
    const serialConnect = async () => {
        serialHandler.init().then(() =>{
            sethandlerLoaded(true);
            getSerialMsg();
        })
    }

    const getSerialMsg = async () => {
        let newComp = await serialHandler.read();
        console.log("new id send from chip: "+ newComp);
        await addSchema();
    }


    return(
        <section id={sectionId}>
            <Button
                onClick={addSchema}>TESTING</Button>
            {!handlerLoaded? <Button onClick={serialConnect}>Connect?</Button>: null}
            
            <Grid container spacing={4}>
                <GridHeader title={"Modulator"}/>
                <Grid xs={4} item>
                    <Grid
                        direction={"column"}
                        container
                    >
                        <LegendComp/>
                        <PinLayoutComp/>
                    </Grid>
                </Grid>

            <SchemaComp modules={conModules} removeFunc={removeConModule} allocedPins={allocedPins}/>
            


            </Grid>

        </section>
    )
}

    
export default ModulatorComp;
