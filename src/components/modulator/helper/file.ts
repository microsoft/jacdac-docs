import { Breakout, CodeMake, LogicSup, ModuExtern, Pin, PinBreakout, PinPower, TypePin } from "./types";


//fetch all info from pin out layout
export const fetchPinLayout = async():Promise<Breakout> =>{
    const pinOut = await import ("./pinMicrobit.json");

    const breakoutPins= breakoutPinType(pinOut.totalPins, pinOut.pins)
    const breakoutPower = getPowerPins(pinOut.totalPowerPins, pinOut.powerPins)

    const result: Breakout = {"name": pinOut.name,
                            "logicPw": pinOut.logicPower,
                            "maxPower": pinOut.power,
                            "pinOut": breakoutPins,
                            "powerPins": breakoutPower}
    
    return result;
}


const getPowerPins = (numberOfPins: number, data: any): PinPower[] =>{
    const result:PinPower[] = [];
    for(let i = 0; i < numberOfPins; i++){
        result.push({
                    name: data[i].name,
                    voltage: data[i].voltage,
                    position: data[i].pos,  
                })
    }
    return result;
}

//TODO: change tempName
//get all the neede info from json file for new module
export const fetchModule = async(nameFile: string):Promise<ModuExtern> => {
    const modulJson = await import ("../diagrams/"+nameFile+".json");

    //Possible to do checks if all things filled in
    //const tempName = modulJson.name+ " " + new Date().getSeconds();
    const tempName = modulJson.name;
    const pins = pinTyping(modulJson.numberPins, modulJson.pinLayout, tempName)
    const tempCode = typeCode(modulJson.code)
    const modu:ModuExtern = {
        "name":tempName,
        "type":modulJson.type,
        "numberPins":modulJson.numberPins,
        "diagram":modulJson.diagram,
        "diagramWidth":modulJson.diagramWidth,
        "pinLayout":pins,
        "codeAct":tempCode
    } 

    return modu;
}


export const fetchModuleSvg = async(nameFile: string):Promise<ModuExtern> => {
    const modulJson = await import ("../diagrams/"+nameFile+".json");

    //Possible to do checks if all things filled in
    //const tempName = modulJson.name+ " " + new Date().getSeconds();
    const tempName = modulJson.name;

    const pins = pinTyping(modulJson.numberPins, modulJson.pinLayout, tempName)
    const tempCode = typeCode(modulJson.code)
    const modu:ModuExtern = {
        "name":tempName,
        "type":modulJson.type,
        "numberPins":modulJson.numberPins,
        "diagram":modulJson.diagram,
        "diagramWidth":modulJson.diagramWidth,
        "pinLayout":pins,
        "codeAct":tempCode
    } 

    return modu;
}

export const fetchLogic = async(nameFile: string):Promise<LogicSup> => {
    const logicJson = await import ("../logicLevels/"+nameFile+"_3.3Logic.json");
    //const tempName = logicJson.name+ " " + new Date().getSeconds();
    const tempName = logicJson.name;
    const lowVoltPins = breakoutPinType(logicJson.numPinsSide, logicJson.pinLayoutLow);
    const highVoltPins = breakoutPinType(logicJson.numPinsSide, logicJson.pinLayoutHigh);

    const logic:LogicSup = {
        "name": tempName,
        "highVolt": logicJson.highVolt,
        "lowVolt": logicJson.lowVolt,
        "numberConvPins":logicJson.channels,
        "pinOutHigh": highVoltPins,
        "pinOutLow": lowVoltPins,
        "conModule":[],
        "conPairs":[]
    }
    return logic;
}

//Creating Code type form json string
const typeCode = (data: any):CodeMake => {
    const tempparam: string[] = [];
    for(let i = 0; i<data.codeServiceParam.length; i++){
        tempparam.push(data.codeServiceParam[i]);
    }
    return {"clientCode": data.codeClient,
            "serviceCode": data.codeService,
            "codeServiceParam": tempparam}
}

//creating of Pin array from json string for module
const pinTyping = (numberOfPins: number, data: any[], moduelId:string):Pin[] => {
    const result:Pin[] = [];
    for(let i= 0; i<numberOfPins; i++){
        const tempType =findTypePin(data[i].type);
        result.push({
            moduleId: moduelId,
            typePin: tempType,
            posPin: data[i].pos,
            name: data[i].name,
            logicLevel: data[i].logicLevel,
            voltage: data[i].voltage,
            posRect: {  xTop:data[i].rectPos.xTop,
                        yTop:data[i].rectPos.yTop,
                        xBot:data[i].rectPos.xBot,
                        yBot:data[i].rectPos.yBot,
                    }
        })
    }
    return result;
}

//function to match string with enum type
const findTypePin = (data: string):TypePin => {
    const reverse = new Map(Object.values(TypePin).map(item => [item.toString(), item]))
    let pinEnum: TypePin |undefined = reverse.get(data);
    if(pinEnum === undefined){
        console.log("controel"+data)
        pinEnum = TypePin.GND;
    }
    return pinEnum

}

//creating PinBreakout array form json string for breakout board
const breakoutPinType = (numberOfPins: number, data: any[]): PinBreakout[] =>{
    const result:PinBreakout[] = [];
    for(let i = 0; i<numberOfPins; i++){
        const tempOptions = [];
        if(data[i].options){
            for(let j = 0; j<data[i].options.length; j++){
                tempOptions.push(findTypePin(data[i].options[j]));
            }
        }else{
            tempOptions.push(findTypePin(data[i].type));
        }
        result.push({
            name: data[i].name,
            position: data[i].pos,
            options: tempOptions,
            used: false,
            moduleName: [],
            modulePin: [],
        });
        
    }
    return result;
}

//Sort function for the importants of TypePin
export const predicate = (a, b) =>{
    const map = {};
    map[TypePin.AnalogIn] = 1;
    map[TypePin.AnalogOut] = 2;
    
    map[TypePin.SdaI2C] = 3;
    map[TypePin.SclI2c] = 4;

    map[TypePin.SckSPI] = 5;
    map[TypePin.MisoSPI] = 6;
    map[TypePin.MosiSPI] = 7;

    map[TypePin.DigitalIn] = 8;
    map[TypePin.DigitalOut] = 9;

    map[TypePin.GND] = 10;
    map[TypePin.Power] = 11;

    if(map[a] < map[b]){
        return -1;
    }

    if(map[a] > map[b]){
        return 1;
    }


    return 0;
}

export const getColor = (pinName) => {
    const map = new Map<string, string>();
    map.set("GND", "#000000");
    map.set("3.3V", "#e6194B")
    map.set("P20", "#ffe119");
    map.set("P19", "#4363d8");

    map.set("P16", "#3cb44b");
    map.set("P15", "#fabed4");
    map.set("P14", "#469990");
    map.set("P13", "#000075");
    map.set("P12", "#800000");
    map.set("P11", "#800000");
    map.set("P10", "#808000");
    map.set("P9", "#aaffc3");
    map.set("P8", "#9A6324");
    map.set("P7", "#dcbeff");
    map.set("P6", "#bfef45");
    map.set("P5", "#800000");
    map.set("P4", "#f032e6");
    map.set("P3", "#42d4f4");
    map.set("P2", "#ffd8b1");
    
    map.set("P1", "#f58231");
    map.set("P0", "#911eb4");


    let temp = map.get(pinName);
    if(!temp){
        temp = "#e6194B"
    }
    return temp;
}
