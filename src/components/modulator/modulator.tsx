import {useEffect, useId, useState } from "react";
import React from "react"
import { Grid } from "@mui/material"
import GridHeader from "../ui/GridHeader"
import PinLayoutComp from "./pinLayoutComp";
import SchemaComp from "./schemaComp";
import Button from "../ui/Button";
import { fetchModule, fetchPinLayout, predicate } from "./helper/file";
import { Breakout, ModuExtern, Pin, PinAlloc,  TypePin, powerSup } from "./helper/types";
import SerialThing from "./serialThing";
import PowerSupplyComp from "./powerSupplyComp";
import { forEach } from "vega-lite/build/src/encoding";
import { Type } from "vega-lite/build/src/type";


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


    const addSchema = async (id: string) =>{
        //console.log("new comp id: "+id);
        //"sr04" == 897654321;
        const tempModu = await fetchModule(id);
        
        
        const tempModuPins = breakBoardAllocCheck(tempModu);
        if(tempModuPins){
            if(tempModuPins.length !==0){
                breakBoardAllocPins(tempModuPins);
                

                //Set new Alocced
                const tempAllocPin = allocedPins;
                for(let i = 0; i < tempModuPins.length; i++){
                    tempAllocPin.push(tempModuPins[i])
                }
                setAllocedPins(tempAllocPin);
            }

            //Place the new module
            const tempCon = conModules;
            tempCon.push(tempModu)
            setconModules(tempCon);
            
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

    const breakBoardAllocCheck = (newModule: ModuExtern): PinAlloc[]|undefined =>{
        if(breakoutBoard){
            const sortPinlayout = newModule.pinLayout.sort((a, b) => predicate(a.typePin, b.typePin));

            const pinPossible: number[] = [];
            const pinAllocTemp: PinAlloc[] = [];
            let counterBasic = 0;
            let powerModu = -1;
            let gndModu = -1;

            for(let i = 0; i < sortPinlayout.length; i++){
                if(sortPinlayout[i].typePin === TypePin.Power || sortPinlayout[i].typePin === TypePin.GND){
                    pinPossible.push(-1);
                    counterBasic += 1;
                    if(sortPinlayout[i].typePin === TypePin.Power) powerModu = i;
                    if(sortPinlayout[i].typePin === TypePin.GND) gndModu = i;
            
                }else if(sortPinlayout[i].typePin === TypePin.SclI2c || sortPinlayout[i].typePin === TypePin.SdaI2C){
                    if(checkBreakBoardI2C()){
                        const tempProtoIndex = getIndexProtocoll(sortPinlayout[i].typePin);
                        pinPossible.push(breakoutBoard.pinOut[tempProtoIndex].position);
                        pinAllocTemp.push({
                            moduleName: newModule.name,
                            modulePin: sortPinlayout[i],
                            pinBreakLocation: breakoutBoard.pinOut[tempProtoIndex].position,
                            pinBreakName: breakoutBoard.pinOut[tempProtoIndex].name,
                            powerSup: false,
                        });
                    }
                }else if(sortPinlayout[i].typePin === TypePin.SckSPI || sortPinlayout[i].typePin === TypePin.MisoSPI || sortPinlayout[i].typePin === TypePin.MosiSPI){
                    if(checkBreadBoardSPI()){
                        const tempProtoIndex = getIndexProtocoll(sortPinlayout[i].typePin);
                        pinPossible.push(breakoutBoard.pinOut[tempProtoIndex].position);
                        pinAllocTemp.push({
                            moduleName: newModule.name,
                            modulePin: sortPinlayout[i],
                            pinBreakLocation: breakoutBoard.pinOut[tempProtoIndex].position,
                            pinBreakName: breakoutBoard.pinOut[tempProtoIndex].name,
                            powerSup: false,
                        });
                    }
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
                    const gndPin = getIndexProtocoll(TypePin.GND);
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

    const getIndexProtocoll = (protoType: TypePin): number =>{
        return breakoutBoard.pinOut.findIndex(i => i.options.includes(protoType))
    }

    const checkBreakBoardI2C = () =>{
        const indexSDA = getIndexProtocoll(TypePin.SdaI2C); 
        const indexSCL = getIndexProtocoll(TypePin.SclI2c); 
        if(indexSDA !== -1 && indexSCL !==-1){
            breakoutBoard.pinOut[indexSDA].modulePin.forEach(function (value){
                if(value.typePin !== TypePin.SdaI2C){
                    return false;
                }
            });
            breakoutBoard.pinOut[indexSCL].modulePin.forEach(function (value){
                if(value.typePin !== TypePin.SclI2c){
                    return false;
                }
            });
            return true;
        }
        return false;
    }

    const checkBreadBoardSPI = () =>{
        const indexSck = getIndexProtocoll(TypePin.SckSPI); 
        const indexMiso = getIndexProtocoll(TypePin.MisoSPI); 
        const indexMosi = getIndexProtocoll(TypePin.MosiSPI);
        if(indexSck !== -1 && indexMiso !== -1 && indexMosi !== -1){
            breakoutBoard.pinOut[indexSck].modulePin.forEach(function (value){
                if(value.typePin !== TypePin.SckSPI){
                    return false;
                }
            });
            breakoutBoard.pinOut[indexMiso].modulePin.forEach(function (value){
                if(value.typePin !== TypePin.MisoSPI){
                    return false;
                }
            });
            breakoutBoard.pinOut[indexMosi].modulePin.forEach(function (value){
                if(value.typePin !== TypePin.MosiSPI){
                    return false;
                }
            });

            return true;
        }
        return false;
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

    const testDisplay= () => {
        addSchema("654321789");
    }

    const testRelay= () => {
        addSchema("321654987")
    }

    return(
        <section id={sectionId}>
            <Button onClick={testModuRGB}>TestRGB</Button>
            <Button onClick={testModuDist}>Test Dist</Button>
            <Button onClick={testModuDist5}>Tets Dist 5</Button>
            <Button onClick={testDisplay}>TEst display</Button>
            <Button onClick={testRelay}>Test Relay</Button>
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
