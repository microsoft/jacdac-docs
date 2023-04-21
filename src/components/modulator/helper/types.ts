export enum TypePin {
    AnalogIn= "Analog IN",
    AnalogOut= "Analog OUT" ,
    DigitalIn = "Digital IN",
    DigitalOut = "Digital OUT",
    SdaI2C = "SDA I2C",
    SclI2c = "SCL I2C",
    SckSPI = "SCK SPI",
    MisoSPI = "MISO SPI",
    MosiSPI = "MOSI SPI",
    GND = "GND",
    Power = "VCC",
    P3V = "3.3 V",
    P5V = "5 V",
    P9V = "9 V",
    P12V = "12 V"

}

//Used in module as different pins
export type Pin = {
    moduleId: string;
    typePin: TypePin;
    posPin: number;
    name?: string;
}

//used module for dynamic code
export type CodeMake = {
    clientCode: string;
    serviceCode: string;
    codeServiceParam: string[];
}

//module type
export type ModuExtern = {
    name: string;
    type: string;
    numberPins: number;
    pinLayout: Pin[];
    diagram: string;
    codeAct?: CodeMake;
}

//type for pinout breakboard
export type Breakout = {
    name: string;
    maxPower: number;
    pinOut: PinBreakout[];
    powerPins: PinPower[];
}

export type PinPower = {
    name: string;
    voltage: number;
    position: number;

}

//type for the pin for breakout
export type PinBreakout = {
    name: string;
    position: number;
    options: TypePin[];
    used: boolean;
    moduleName?: string[];
    modulePin?: Pin[];
}
//Need to work on
//Need???
export type PinAlloc = {
    pinBreakboardLocation: number;
    breakboardPinName: string;
    moduleName: string;
    modulePin: Pin;
}



//Type given to SchemaComp
export type ModuAlloc = {
    modualiComp: ModuExtern;
    breakoutPlace: PinAlloc[];
}
