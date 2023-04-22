import { ReactElement, useEffect, useId, useState } from "react";
import React from "react"
import { Grid } from "@mui/material"
import GridHeader from "../ui/GridHeader"
import PinLayoutComp from "./pinLayoutComp";
import SchemaComp from "./schemaComp";
import Button from "../ui/Button";
import { fetchModule, fetchPinLayout, predicate } from "./helper/file";
import { Breakout, CodeMake, ModuExtern, Pin, PinAlloc, PinBreakout, TypePin, powerSup } from "./helper/types";
import SerialThing from "./serialThing";
import PowerSupplyComp from "./powerSupplyComp";


//TODO: improving pin allocation
//TODO: get module info from file or github??? (local current)
//TODO: code auto fill in (now static do??)
//TODO: layout working
//TODO: image from web

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
    const [conPowerSup, setconPowerSup] = useState<Array<powerSup>>([]);


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

        //Remove from powerSupply
        const indexlistPowerSup = [];
        const tempPowerSup = conPowerSup;
        tempPowerSup.forEach(function(value, index) {
            const tempIndex = value.conModule.findIndex(i => i === moduleName);
            if(tempIndex !== -1){
                if(value.conModule.length === 1){
                    indexlistPowerSup.unshift(index);
                }
                value.conModule.splice(tempIndex, 1);
            }
        });
        indexlistPowerSup.forEach(function(value, index) {
            tempPowerSup.splice(value, 1);
        })


        setconModules(tempConModule);
        setAllocedPins(tempAllocedPins);
        setBreakoutBoard(tempBreakout);
        setconPowerSup(tempPowerSup);

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

    const addSchema = async (id: string) =>{
        //console.log("new comp id: "+id);
        //"sr04" == 897654321;
        const tempModu = await fetchModule(id);
        console.log("checking")
        
        
        const tempModuPins = breakBoardAllocCheck(tempModu);
        if(tempModuPins){
            if(tempModuPins.length !==0){
                breakBoardAllocPins(tempModuPins);
                

                //Set new Alocced
                const tempAllocPin = allocedPins;
                for(let i = 0; i < tempModuPins.length; i++){
                    tempAllocPin.push(tempModuPins[i])
                }
                console.log("Alloced Pins modu: "+tempAllocPin.length)
                setAllocedPins(tempAllocPin);
            }
            


            //Place the new module
            const tempCon = conModules;
            tempCon.push(tempModu)
            setconModules(tempCon);
            console.log("BreakoutBaord: "+breakoutBoard)
            
        }
        
        forceUpdate();
    }



    const allocVoltage = (powerPin: Pin, moduleName: string): PinAlloc =>{
        const indexPWRBoard = breakoutBoard.powerPins.findIndex((value, index) => Number(powerPin.name) === Number(value.voltage));
        //exist power pin, with right voltage for module

        if (indexPWRBoard !== -1) {
            return({
                moduleName: moduleName,
                modulePin: powerPin,
                pinBreakLocation: breakoutBoard.powerPins[indexPWRBoard].position,
                pinBreakName: breakoutBoard.powerPins[indexPWRBoard].name,
                powerSup: false,
            })
        }
        if(conPowerSup.length > 0){
            const indexConPowerSup = conPowerSup.findIndex((value, index) => Number(powerPin.name) === value.voltage);
            if(indexConPowerSup !== -1){
                conPowerSup[indexConPowerSup].conModule.push(moduleName);
                return({
                    moduleName: moduleName,
                    modulePin: powerPin,
                    pinBreakLocation: conPowerSup[indexConPowerSup].supLocPin,
                    pinBreakName: conPowerSup[indexConPowerSup].supplyName,
                    powerSup: true,
                    });
            }
        }else{
            const newPowerSup:powerSup = ({
                                            supplyName: "Power Supply "+powerPin.name,
                                            voltage: Number(powerPin.name),
                                            maxAmps: 5,
                                            supLocPin: 900 +Number(powerPin.name),
                                            conModule: [moduleName]
                                        });
            const tempPowerSup = conPowerSup;
            tempPowerSup.push(newPowerSup);
            setconPowerSup(tempPowerSup);

            return ({
                moduleName: moduleName,
                modulePin: powerPin,
                pinBreakLocation: newPowerSup.supLocPin,
                pinBreakName: newPowerSup.supplyName,
                powerSup: true,
            });
        }
    }

    //TODO:add check if Voltage not too high, other ways adding voltage convertere
    const breakBoardAllocCheck = (newModule: ModuExtern): PinAlloc[]|undefined =>{
        if(breakoutBoard){
            const sortPinlayout = newModule.pinLayout.sort((a, b) => predicate(a.typePin, b.typePin));
            const gndPin = breakoutBoard.pinOut.findIndex(i => i.name === "GND");


            const pinPossible: number[] = [];
            const pinAllocTemp: PinAlloc[] = [];
            let counterBasic = 0;
            let powerModu = -1;
            let gndModu = -1;


            for(let i = 0; i < sortPinlayout.length; i++){
                if(sortPinlayout[i].typePin === TypePin.Power){
                    console.log("checkpoints")
                    pinPossible.push(-1);
                    counterBasic +=1;
                    powerModu = i;
                    //work in progress
                    // if(Number(sortPinlayout[i].name) > breakoutBoard.maxPower){
                    //     pinPossible.push(-1);
                    //     counterBasic +=1;

                    // }else{
                    //     pinPossible.push(-1);
                    //     counterBasic += 1;
                    //     // for(let j = 0; j < breakoutBoard.powerPins.length; j++){
                    //     //     if(Number(sortPinlayout[i].name) === Number(breakoutBoard.powerPins[j].voltage)){
                    //     //         pinPossible.push(breakoutBoard.powerPins[j].position);
                    //     //         pinAllocTemp.push({moduleName: newModule.name,
                    //     //                             modulePin: sortPinlayout[i],
                    //     //                             pinBreakLocation: breakoutBoard.powerPins[j].position,
                    //     //                             pinBreakName: breakoutBoard.powerPins[j].name,
                    //     //                             powerSup: false,
                    //     //                         });
                    //     //         break;
                    //     //     }
                    //     // }
                    // }

                }else if(sortPinlayout[i].typePin === TypePin.GND){
                    pinPossible.push(-1);
                    counterBasic +=1;
                    gndModu= i;
                    // pinPossible.push(breakoutBoard.pinOut[gndPin].position);
                    // pinAllocTemp.push({ moduleName: newModule.name,
                    //                     modulePin: sortPinlayout[i],
                    //                     pinBreakLocation: breakoutBoard.pinOut[gndPin].position,
                    //                     pinBreakName: breakoutBoard.pinOut[gndPin].name,
                    //                     powerSup: false,
                    //                     })
                }else{
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
                                                        pinBreakLocation: breakoutBoard.pinOut[j].position,
                                                        pinBreakName: breakoutBoard.pinOut[j].name,
                                                        powerSup: false,
                                                    });
                                    break;
                                }   
                            }
                        }
                    }
                }
                
            }

            //All the IO ports can be connected
            if((counterBasic + pinAllocTemp.length) === newModule.numberPins){
                //Make the power and GND work, current just 1 power expect
                if(powerModu !== -1){
                    const voltagePin = allocVoltage(sortPinlayout[powerModu], newModule.name);
                    pinAllocTemp.push(voltagePin);

                    if(voltagePin.powerSup){
                        pinAllocTemp.push({
                                            pinBreakLocation: voltagePin.pinBreakLocation,
                                            pinBreakName: voltagePin.pinBreakName,
                                            modulePin: sortPinlayout[gndModu],
                                            moduleName: newModule.name,
                                            powerSup: true
                                        })
                        return pinAllocTemp;
                    }
                    
                }
                if(gndModu !== -1){
                    pinAllocTemp.push({
                        pinBreakLocation: breakoutBoard.pinOut[gndPin].position,
                        pinBreakName: breakoutBoard.pinOut[gndPin].name,
                        modulePin: sortPinlayout[gndModu],
                        moduleName: newModule.name,
                        powerSup: false
                    })
                }
                



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
                const index = tempBreakoutBoard.pinOut.findIndex(element => element.position === allocPins[i].pinBreakLocation);
                if(index !== -1){
                    tempBreakoutBoard.pinOut[index].used = true;
                    tempBreakoutBoard.pinOut[index].moduleName.push(allocPins[i].moduleName);
                    tempBreakoutBoard.pinOut[index].modulePin.push(allocPins[i].modulePin);
                }
            }
            setBreakoutBoard(tempBreakoutBoard);
        }
    }


    //message needs to be at least 11 long
    const getSerialMsg = async (msg: string) => {
        if(msg.length >= 10){
            console.log("new Message: "+msg);
            await addSchema(msg.trim());
        }
    }


    const testModuRGB = () =>{
        addSchema("12345678");
    }

    const testModuDist = () =>{
        addSchema("897654321");
    }

    const testModuDist5 = () => {
        addSchema("897654322");
    }

    return(
        <section id={sectionId}>
            <Button onClick={testModuRGB}>TestRGB</Button>
            <Button onClick={testModuDist}>Test Dist</Button>
            <Button onClick={testModuDist5}>Tets Dist 5</Button>
            <Grid container spacing={4}>
                <GridHeader title={"Modulator"} action={<SerialThing addComp={getSerialMsg}/>}/>
                <Grid xs={4} item>
                    <Grid
                        direction={"column"}
                        container
                    >
                        <PowerSupplyComp supplies={conPowerSup}/>
                        <PinLayoutComp/>
                    </Grid>
                </Grid>

            <SchemaComp modules={conModules} removeFunc={removeConModule} allocedPins={allocedPins}/>
            


            </Grid>

        </section>
    )
}

    
export default ModulatorComp;
