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
    Power = "VCC"
}

//Used in module as different pins
export type Pin = {
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
}

//type for the pin for breakout
export type PinBreakout = {
    name: string;
    position: number;
    options: TypePin[];
    used: boolean;
    moduleName?: string;
    modulePin?: Pin;
}
//Need to work on
//Need???
export type PinAlloc = {
    typeConn: TypePin;
    pinLocation: number;
    moduleName: string;
    modulePin: Pin;
}
