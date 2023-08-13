import {useEffect, useId, useState } from "react";
import React from "react"
import { Grid } from "@mui/material"
import GridHeader from "../ui/GridHeader"
import PinLayoutComp from "./interactief/pinLayoutComp";

import { fetchLogic, fetchModule, fetchModuleSvg, fetchPinLayout, predicate } from "./helper/file";
import { Breakout, LogicPair, LogicSup, ModuExtern, Pin, PinAlloc,  PinBreakout,  TypePin, powerSup } from "./helper/types";
import SerialThing from "./serialThing";

import ExtraNeededComp from "./interactief/logicLevelComp";
import SchemaCompTest from "./interactief/schemaComp";



//TODO: change pin allocation way
//TODO: try highlighting pin needed connect
//TODO: try create auto client code

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
    const [conLogicLevels, setconLogicLevels] = useState<Array<LogicSup>>([]);
    const [highLighted, setHighlighted] = useState(undefined as ModuExtern |undefined);
    const [highLightPins, setHighlightPins] =  useState<Array<PinAlloc>>([]);

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
        
        //Remove from breakoutBoard k
        const tempPinOut = breakoutBoard.pinOut
        tempPinOut.forEach(function(value) {
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
        let tempPowerSup = removePowerSup(moduleName, conPowerSup);
        

        //remove logic level
        //TODO: changes
        const indexlistLogicLevels = [];
        const tempLogicLevel = conLogicLevels;
        tempLogicLevel.forEach(function (value, index){
            const tempIndex = value.conModule.findIndex(i => i === moduleName);
            if(tempIndex !== -1){
                const indexHigh = [];
                let indexLow = [];
                value.pinOutHigh.forEach(function (valuePinOut, indexPinOut){
                    const indexName = valuePinOut.moduleName.indexOf(moduleName);
                    if(indexName !== -1){
                        indexHigh.unshift(indexPinOut);
                        
                        valuePinOut.used = false;
                        
                        valuePinOut.moduleName = [];
                        valuePinOut.modulePin = [];
                    }
                });
                value.pinOutLow.forEach(function (valuePinOut, indexPinOut){
                    const indexName = valuePinOut.moduleName.indexOf(moduleName);

                    if(indexName !== -1 || indexHigh.includes(indexPinOut)){
                        valuePinOut.used = false;   
                        indexLow.unshift(indexPinOut);
                        valuePinOut.moduleName = [];
                        valuePinOut.modulePin = [];
                    }
                })
                indexLow = indexLow.filter(val => !indexHigh.includes(val));
                indexLow.forEach(function (indexPos){
                    value.pinOutHigh[indexPos].used = false;
                    value.pinOutHigh[indexPos].moduleName = [];
                    value.pinOutHigh[indexPos].modulePin = [];
                })

                

                if(!checkUsageLogic(value)){
                    indexlistLogicLevels.unshift(index);
                }

                value.conModule.splice(tempIndex, 1);

            }
        });

        indexlistLogicLevels.forEach(function(value){
            tempPowerSup = removePowerSup(tempLogicLevel[value].name, tempPowerSup)
            tempLogicLevel.splice(value, 1);
        })


        setconModules(tempConModule);
        setAllocedPins(tempAllocedPins);
        setBreakoutBoard(tempBreakout);
        setconPowerSup(tempPowerSup);
        setconLogicLevels(tempLogicLevel);
        if(highLighted){
            if(highLighted.name === moduleName){
                setHighlighted(undefined);
                setHighlightPins(tempAllocedPins);
            }
        }else{
            setHighlightPins(tempAllocedPins);
        }
        
        forceUpdate();

    }

    const checkUsageLogic = (tempLogic: LogicSup) =>{
        for(let i = 0; i < tempLogic.pinOutHigh.length; i++){
            if(tempLogic.pinOutHigh[i].options[0] !== TypePin.Power && tempLogic.pinOutHigh[i].options[0] !==TypePin.GND)
            if(tempLogic.pinOutHigh[i].used){
                return true;
            }
        }
        return false;
    }

    const removePowerSup = (moduleName: string, tempPowerSup: powerSup []) =>{
        const indexlistPowerSup = [];
        tempPowerSup.forEach(function(value, index) {
            const tempIndex = value.conModule.findIndex(i => i === moduleName);
            if(tempIndex !== -1){
                if(value.conModule.length === 1){
                    indexlistPowerSup.unshift(index);
                }
                value.conModule.splice(tempIndex, 1);
            }
        });
        indexlistPowerSup.forEach(function(value) {
            tempPowerSup.splice(value, 1);
        })
        return tempPowerSup;
    }

    

    const addSVG = async (id:string) =>{
        const tempModu = await fetchModuleSvg(id);
        
        const name = checkName(tempModu.name);
        console.log(name);
        tempModu.name = name;
        for(let i=0; i<tempModu.pinLayout.length; i++){
            tempModu.pinLayout[i].moduleId = name;
        }

        const tempModuPins = await breakBoardAllocCheck(tempModu);
        if(tempModuPins){
            if(tempModuPins.pinAlloctedTemp.length !== 0){
                breakBoardAllocPins(tempModuPins.pinAlloctedTemp);
                if(tempModuPins.pinDifLogic.length !== 0){
                    tempModuPins.pinAlloctedTemp = await allocLogicLevel(tempModuPins.pinDifLogic, tempModuPins.pinAlloctedTemp);
                }


                //Set new Alocced
                const tempAllocPin = allocedPins;
                for(let i = 0; i < tempModuPins.pinAlloctedTemp.length; i++){
                    tempAllocPin.push(tempModuPins.pinAlloctedTemp[i])
                }
                setAllocedPins(tempAllocPin);
                if(!highLighted){
                    setHighlightPins(tempAllocPin);
                }

            }

            //Place the new module
            const tempCon = conModules;
            tempCon.push(tempModu)
            setconModules(tempCon);

        }
        
        forceUpdate();
    }


    function isNumber(numStr: string) {
        return !isNaN(parseFloat(numStr)) && !isNaN(+numStr)
      }

      ///bug in not higher number
    const checkName = (currentName: string): string =>{
        const total:number[] = [];

        for(let i =0; i< conModules.length; i++){
            if(conModules[i].name.includes(currentName)){
                const splitTemp = conModules[i].name.split(" ");
                if(isNumber(splitTemp[splitTemp.length-1])){
                    total.push(Number(splitTemp[splitTemp.length-1]));
                }else{
                    total.push(0);
                }
            }
        }
        if(total.length === 0){
            return currentName;
        }
        const numberValue = findLowestNumber(total);
        if(numberValue === 0){
            return currentName;
        }
        return currentName + " "+numberValue.toString();
        
    }

    const findLowestNumber = (pair: number[]): number =>{
        pair.sort();
        let lowest = -1;
        for(let i = 0; i < pair.length; i++){
            if(pair[i] != i){
                lowest = i;
                break;
            }
        }
        if(lowest == -1){
            lowest = pair[pair.length -1]+1;
        }
        return lowest;
    }

//TODO: change pinAlloc and add different anming
//Toevoegen van voltage divider voor analoog
    const allocLogicLevel = async (pins: Pin[], pinAlloclist: PinAlloc[]): Promise<PinAlloc []> =>{
        let indexLogicBoards = -1;
        const tempLogicLevels = conLogicLevels;
        for(let i = 0; i < pins.length; i++){
            const indexPinAlloc = pinAlloclist.findIndex((value) => value.modulePin === pins[i]);
            const logicHigh = pins[i].logicLevel >3.3;

            indexLogicBoards = searchLogicLevelPosi(pins[i].logicLevel);
            console.log(indexLogicBoards)


            if(indexLogicBoards >= 0){
                const logicSup = tempLogicLevels[indexLogicBoards];
                const {logicSupply, index} = logicLevelPairPin(pins[i], pinAlloclist[indexPinAlloc], logicSup);
                logicSup.pinOutHigh = logicSupply.pinOutHigh;
                logicSup.pinOutLow = logicSupply.pinOutLow;

                if(logicSup.conModule.findIndex((value) => value === pins[i].moduleId) === -1){
                    logicSup.conModule.push(pins[i].moduleId);
                }
                
                pinAlloclist[indexPinAlloc].BreakoutName = logicSup.name;
                pinAlloclist[indexPinAlloc].pinBreakLocation = logicSup.pinOutHigh[index].position;
                
                if(logicHigh)
                    pinAlloclist[indexPinAlloc].pinBreakName = logicSup.pinOutHigh[index].name;
                else
                    pinAlloclist[indexPinAlloc].pinBreakName = logicSup.pinOutLow[index].name;
                //is place for new one
            }else{
                
                const logicSup = await makeLogicLevel(pins[i].logicLevel.toString());
                const {logicSupply, index} = logicLevelPairPin(pins[i], pinAlloclist[indexPinAlloc], logicSup);
    
                logicSupply.conModule.push(pins[i].moduleId);

                pinAlloclist[indexPinAlloc].BreakoutName = logicSupply.name;
                pinAlloclist[indexPinAlloc].pinBreakLocation = index;
                
                if(logicHigh)
                    pinAlloclist[indexPinAlloc].pinBreakName = logicSupply.pinOutHigh[index].name;
                else
                    pinAlloclist[indexPinAlloc].pinBreakName = logicSupply.pinOutLow[index].name;

                tempLogicLevels.push(logicSupply);
            }
           
           
            indexLogicBoards = -1;
        }
        
        setconLogicLevels(tempLogicLevels);
        return pinAlloclist;
    }

    type PairPinReturn = {
        logicSupply: LogicSup,
        index: number
    }

    const checkLogicName = (currentName: string):string => {
        const total:number[] = [];

        for(let i=0; i<conLogicLevels.length; i++){
            if(conLogicLevels[i].name.includes(currentName)){
                const splitTemp = conLogicLevels[i].name.split(" ");
                if(isNumber(splitTemp[splitTemp.length-1])){
                    total.push(Number(splitTemp[splitTemp.length-1]));
                }else{
                    total.push(0);
                }
            }
        }
        if(total.length === 0){
            return currentName;
        }
        const numberValue = findLowestNumber(total);
        if(numberValue === 0){
            return currentName;
        }
        return currentName + " "+numberValue.toString();
    }

    const makeLogicLevel = async (logiclevelValue:string): Promise<LogicSup> =>{
        const logicSup = await fetchLogic(logiclevelValue);
        const name = checkLogicName(logicSup.name);
        logicSup.name = name;
        const indexpwHigh = logicSup.pinOutHigh.findIndex((value) => value.options[0] === TypePin.Power);
        const indexgndHigh = logicSup.pinOutHigh.findIndex((value) => value.options[0] === TypePin.GND);
        const pwHighPin = makePin(logicSup.pinOutHigh[indexpwHigh], TypePin.Power, logicSup.highVolt);
        const gndHighPin = makePin(logicSup.pinOutHigh[indexgndHigh], TypePin.GND);

        const allocedPins = allocVoltage(pwHighPin, gndHighPin, logicSup.name);



        
        logicSup.pinOutHigh[indexpwHigh].used = true;
        logicSup.pinOutHigh[indexpwHigh].moduleName.push(allocedPins[0].BreakoutName);
        

        logicSup.pinOutHigh[indexgndHigh].used = true;
        logicSup.pinOutHigh[indexgndHigh].moduleName.push(allocedPins[1].BreakoutName);

        const indexpwLow = logicSup.pinOutLow.findIndex((value) => value.options[0] === TypePin.Power);
        const indexgndLow = logicSup.pinOutLow.findIndex((value) => value.options[0] === TypePin.GND);
        const pwLowPin = makePin(logicSup.pinOutLow[indexpwLow], TypePin.Power, logicSup.lowVolt);
        const gndLowPin = makePin(logicSup.pinOutLow[indexgndLow], TypePin.GND);

        const allocedLowPins = allocVoltage(pwLowPin, gndLowPin, logicSup.name);

        logicSup.pinOutLow[indexpwLow].used = true;
        logicSup.pinOutLow[indexpwLow].moduleName.push(allocedLowPins[0].BreakoutName);

        logicSup.pinOutLow[indexgndLow].used = true;
        logicSup.pinOutLow[indexgndLow].moduleName.push(allocedLowPins[1].BreakoutName);
        
        return logicSup;
    }

    const logicLevelPairPin = (modulePin: Pin, allocedPin: PinAlloc, logicSup: LogicSup): PairPinReturn =>{
        const moduleHigh = modulePin.logicLevel > 3.3;
        const index = breakoutBoard.pinOut.findIndex(element => element.position === allocedPin.pinBreakLocation);
        const breakoutPin = makePin(breakoutBoard.pinOut[index], modulePin.typePin);
        for(let i = 0; i< logicSup.pinOutHigh.length; i++){
            if(!logicSup.pinOutHigh[i].used ){
                if(logicSup.pinOutHigh[i].options.includes(modulePin.typePin)){
                    if(moduleHigh){
                        logicSup.pinOutHigh[i].used = true;
                        logicSup.pinOutHigh[i].moduleName.push(modulePin.moduleId);
                        logicSup.pinOutHigh[i].modulePin.push(modulePin);

                        logicSup.pinOutLow[i].used = true;
                        logicSup.pinOutLow[i].moduleName.push(allocedPin.BreakoutName);
                        logicSup.pinOutLow[i].modulePin.push(breakoutPin);

                    }else{
                        logicSup.pinOutLow[i].used = true;
                        logicSup.pinOutLow[i].moduleName.push(modulePin.moduleId);
                        logicSup.pinOutLow[i].modulePin.push(modulePin);

                        logicSup.pinOutHigh[i].used = true;
                        logicSup.pinOutHigh[i].moduleName.push(allocedPin.BreakoutName);
                        logicSup.pinOutHigh[i].modulePin.push(breakoutPin);
                    }
                    return {logicSupply: logicSup, index: i};
                }
            }
        }

    }

    const makePin = (breakoutPin: PinBreakout, typeUsed: TypePin, voltage?:number): Pin =>{
        if(voltage){
            return{ moduleId: breakoutBoard.name,
                    typePin: typeUsed,
                    posPin: breakoutPin.position,
                    name: breakoutPin.name,
                    voltage: voltage    
            }
        }
        return {moduleId: breakoutBoard.name,
                typePin: typeUsed,
                posPin: breakoutPin.position,
                name: breakoutPin.name,   
            }
    }

    const searchLogicLevelPosi = (logicLevelValue: number): number =>{
        for(let index = 0; index < conLogicLevels.length; index ++){
            if(conLogicLevels[index].highVolt == logicLevelValue || conLogicLevels[index].lowVolt == logicLevelValue){
                const indexPin = conLogicLevels[index].pinOutHigh.findIndex((value) => value.used !== true );
                
                if(indexPin !== -1){
                    return index;
                }
            }
        }
        
        return -5;
    }



    const allocVoltage = (powerPin: Pin, gndPin: Pin, moduleName: string): PinAlloc[] =>{
        const indexPWRBoard = breakoutBoard.powerPins.findIndex((value) => Number(powerPin.voltage) === Number(value.voltage));
        //exist power pin, with right voltage for module

        if (indexPWRBoard !== -1) {
            const gndPinloc = getIndexProtocoll(TypePin.GND);
            return([{
                moduleName: moduleName,
                modulePin: powerPin,
                pinBreakLocation: breakoutBoard.powerPins[indexPWRBoard].position,
                pinBreakName: breakoutBoard.powerPins[indexPWRBoard].name,
                powerSup: false,
                BreakoutName: breakoutBoard.name
            }, {
                moduleName: moduleName,
                modulePin: gndPin,
                pinBreakLocation: breakoutBoard.pinOut[gndPinloc].position,
                pinBreakName: breakoutBoard.pinOut[gndPinloc].name,
                powerSup: false,
                BreakoutName: breakoutBoard.name
            }])
        }
        if(conPowerSup.length > 0){
            const indexConPowerSup = conPowerSup.findIndex((value) => Number(powerPin.voltage) === value.voltage);
            if(indexConPowerSup !== -1){
                if(conPowerSup[indexConPowerSup].conModule.findIndex((value) => value === moduleName) === -1){
                    conPowerSup[indexConPowerSup].conModule.push(moduleName);
                }

                return([{
                        moduleName: moduleName,
                        modulePin: powerPin,
                        pinBreakLocation: conPowerSup[indexConPowerSup].supLocPin,
                        pinBreakName: conPowerSup[indexConPowerSup].supplyName,
                        powerSup: true,
                        BreakoutName: conPowerSup[indexConPowerSup].supplyName,
                    },{
                        moduleName: moduleName,
                        modulePin: gndPin,
                        pinBreakLocation: conPowerSup[indexConPowerSup].supLocPin,
                        pinBreakName: conPowerSup[indexConPowerSup].supplyName,
                        powerSup: true,
                        BreakoutName: conPowerSup[indexConPowerSup].supplyName,
                    }]);
            }
        }else{
            const newPowerSup:powerSup = ({
                                            supplyName: "Power Supply "+powerPin.voltage,
                                            voltage: powerPin.voltage,
                                            maxAmps: 5,
                                            supLocPin: 900 +Number(powerPin.voltage),
                                            conModule: [moduleName]
                                        });
            const tempPowerSup = conPowerSup;
            tempPowerSup.push(newPowerSup);
            setconPowerSup(tempPowerSup);

            return ([{  moduleName: moduleName,
                        modulePin: powerPin,
                        pinBreakLocation: newPowerSup.supLocPin,
                        pinBreakName: newPowerSup.supplyName,
                        powerSup: true,
                        BreakoutName: newPowerSup.supplyName,
                    },{
                        moduleName: moduleName,
                        modulePin: gndPin,
                        pinBreakLocation: newPowerSup.supLocPin,
                        pinBreakName: newPowerSup.supplyName,
                        powerSup: true,
                        BreakoutName: newPowerSup.supplyName,
                    }]);
        }
    }

    type boardReturn = {
        pinAlloctedTemp:PinAlloc[];
        pinDifLogic:Pin[];
    }

    const breakBoardAllocCheck = async (newModule: ModuExtern): Promise<boardReturn|undefined> =>{
        if(breakoutBoard){
            const sortPinlayout = newModule.pinLayout.sort((a, b) => predicate(a.typePin, b.typePin));
            const pinPossible: number[] = [];
            const pinAllocTemp: PinAlloc[] = [];
            const pinDifLogic: Pin[] = [];
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
                            BreakoutName: breakoutBoard.name,
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
                            BreakoutName: breakoutBoard.name
                        });
                    }
                }else{
                    let tempPinPossible= undefined;
                    for(let j = 0; j < breakoutBoard.pinOut.length; j++){
                        //check pin is in use
                        if(!breakoutBoard.pinOut[j].used ){
                            //check if pin in temp
                            if(!pinPossible.includes(breakoutBoard.pinOut[j].position)){
                                //Check if type correct
                                if(breakoutBoard.pinOut[j].options.includes(sortPinlayout[i].typePin)){
                                    if(tempPinPossible){
                                        if(breakoutBoard.pinOut[j].options.length < tempPinPossible.options.length){
                                            tempPinPossible = breakoutBoard.pinOut[j];
                                        }
                                    }else{
                                        tempPinPossible = breakoutBoard.pinOut[j];
                                    }
                                   
                                }   
                            }
                        }
                    }
                    if(tempPinPossible){
                        pinPossible.push(tempPinPossible.position);
                        pinAllocTemp.push({ moduleName: newModule.name,
                                            modulePin: sortPinlayout[i],
                                            pinBreakLocation: tempPinPossible.position,
                                            pinBreakName: tempPinPossible.name,
                                            powerSup: false,
                                            BreakoutName: breakoutBoard.name
                                        });
                        if(sortPinlayout[i].logicLevel){
                            if(sortPinlayout[i].logicLevel !== breakoutBoard.logicPw){
                                pinDifLogic.push(sortPinlayout[i])
                            }
                        }
                    }
                } 
            }

            //All the IO ports can be connected
            if((counterBasic + pinAllocTemp.length) === newModule.numberPins){
                //Make the power and GND work, current just 1 power expect
                if(powerModu !== -1 && gndModu !== -1){
                    const voltagePin = allocVoltage(sortPinlayout[powerModu], sortPinlayout[gndModu], newModule.name);
                    for(let i=0; i< voltagePin.length; i++){
                        pinAllocTemp.push(voltagePin[i])
                    }

                }else if(gndModu !== -1){
                    const gndPin = getIndexProtocoll(TypePin.GND);
                    pinAllocTemp.push({
                        pinBreakLocation: breakoutBoard.pinOut[gndPin].position,
                        pinBreakName: breakoutBoard.pinOut[gndPin].name,
                        modulePin: sortPinlayout[gndModu],
                        moduleName: newModule.name,
                        powerSup: false,
                        BreakoutName: breakoutBoard.name
                    });
                }

                return {pinAlloctedTemp: pinAllocTemp, pinDifLogic: pinDifLogic};
            }else{
                console.log("Not possible to load in" + counterBasic + " " + pinAllocTemp.length);
                return {pinAlloctedTemp:[], pinDifLogic:[]};
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
                if(allocPins[i].BreakoutName === tempBreakoutBoard.name){
                    const index = tempBreakoutBoard.pinOut.findIndex(element => element.position === allocPins[i].pinBreakLocation);
                    if(index !== -1){
                        tempBreakoutBoard.pinOut[index].used = true;
                        tempBreakoutBoard.pinOut[index].moduleName.push(allocPins[i].moduleName);
                        tempBreakoutBoard.pinOut[index].modulePin.push(allocPins[i].modulePin);
                    }
                }else{
                    continue;
                }
            }
            setBreakoutBoard(tempBreakoutBoard);
        }
    }


    //message needs to be at least 11 long
    const getSerialMsg = async (msg: string) => {
        if(msg.length >= 10){
            console.log("new Message: "+msg);
            await addSVG(msg.trim());
        }
    }


    const highlightShit = (moduleName: string|undefined) =>{
        if(moduleName){
            const indexconModule = conModules.findIndex( i => i.name === moduleName);
            if(indexconModule !== -1){
                setHighlighted(conModules[indexconModule]);
                setHighlightPins(getAllocedPinsForModule(conModules[indexconModule]));
                return;
            }
        }
        setHighlighted(undefined);
        setHighlightPins(getAllocedPinsForModule(undefined));
    }

    const getAllocedPinsForModule = (module: ModuExtern| undefined) =>{
        if(module){
            const tempList = [];
            allocedPins.forEach(function (valPin) {
                if(valPin.moduleName === module.name){
                    tempList.push(valPin)
                }
            });
            return tempList;
        }
        return allocedPins;
    }

    const checkExtraComp = () =>{
        if(conPowerSup.length > 0){
            return true;
        }
        if(conLogicLevels.length > 0){
            return true;
        }
        return false;
    }


    return(
        <section id={sectionId}>
            <Grid container spacing={5}>
                <GridHeader title={"Modulator"} action={<span><SerialThing addComp={getSerialMsg}/> </span>}/>
                <Grid xs={4} item style={{paddingTop:"0"}}>
                    <Grid
                        direction={"column"}
                        container
                    >
                        <PinLayoutComp highlighted={highLighted} highlightPinsAlloc={highLightPins}/>
                        
                        {/* {conLogicLevels.length >0?<ExtraNeededComp supplies={conLogicLevels} />: null} */}
                        {/* {conModules.length >0? <ServiceCodeComp modules={conModules}/>: null} */}
                        {/* {conModules.length >0? <ClientStartModu modules={conModules}/>: null} */}
                       
                    </Grid>
                </Grid>
            
            {/* <SchemaComp modules={conModules} logicDeviders={conLogicLevels} removeFunc={removeConModule} allocedPins={allocedPins} addSchema={addSchema}/> */}
            <SchemaCompTest modules={conModules} logicDeviders={conLogicLevels} highlighted={highLighted} removeFunc={removeConModule} allocedPins={allocedPins} addSchema={addSVG} highlight={highlightShit}/>
            {checkExtraComp()?<ExtraNeededComp powerSupplies={conPowerSup} LogicSupl={conLogicLevels} highlighted={highLighted} highlightPinsAlloc={highLightPins}/>:null}


            </Grid>

        </section>
    )
}

    
export default ModulatorComp;
