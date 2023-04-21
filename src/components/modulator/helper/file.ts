import { forEach } from "vega-lite/build/src/encoding";
import { Breakout, CodeMake, ModuExtern, Pin, PinBreakout, PinPower, TypePin } from "./types";


//fetch all info from pin out layout
export const fetchPinLayout = async():Promise<Breakout> =>{
    const pinOut = await import ("./pinMicrobit.json");

    const breakoutPins= breakoutPinType(pinOut.totalPins, pinOut.pins)
    const breakoutPower = getPowerPins(pinOut.totalPowerPins, pinOut.powerPins)

    const result: Breakout = {"name": pinOut.name,
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

//get all the neede info from json file for new module
export const fetchModule = async(nameFile: string):Promise<ModuExtern> => {
    const modulJson = await import ("../diagrams/"+nameFile+".json");

    //Possible to do checks if all things filled in
    //TODO: change tempName
    const tempName = "Test" + new Date().toISOString();

    const pins = pinTyping(modulJson.numberPins, modulJson.pinLayout, tempName)
    const tempCode = typeCode(modulJson.code)
    const modu:ModuExtern = {
        "name":tempName,
        "type":modulJson.type,
        "numberPins":modulJson.numberPins,
        "diagram":modulJson.diagram,
        "pinLayout":pins,
        "codeAct":tempCode
    } 

    return modu;
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
            name: data[i].name
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
        for(let j = 0; j<data[i].options.length; j++){
            tempOptions.push(findTypePin(data[i].options[j]));
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
