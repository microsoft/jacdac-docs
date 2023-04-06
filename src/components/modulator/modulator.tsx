import { ReactElement, useId, useState } from "react";
import React from "react"
import { Grid } from "@mui/material"
import GridHeader from "../ui/GridHeader"
import LegendComp from "./legendComp";
import PinLayoutComp from "./pinLayoutComp";
import SchemaComp from "./schemaComp";
import Button from "../ui/Button";
import { log } from "vega";

export enum TypePins {
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

export type Pins = {
    typePin: TypePins;
    posPin: number;
    name?: string;
}

export type CodeMake = {
    module: string;
    service: string;
    inputFunc?: string;
}

export type ModuExtern = {
    name: string;
    type: string;
    numberPins: number;
    pinLayout: Pins[];
    diagram: string;
    codeAct?: CodeMake;
}

//Need to work on
export type PinAlloc = {
    typeConn: TypePins;
    pinLocation: number;
    moduleName: string;
}

//TODO: making pin allocation and removing
//TODO: get module info from file or github???
//TODO: code auto fill in (now static do??)
//TODO: MCU send id to stupid thing
//TODO: layout working
//TODO: image from web not local gives problems

const ModulatorComp = () =>{
    const sectionId = useId();
    const [conModules, setconModules] = useState<Array<ModuExtern>>([]);

    const [, updateState] = React.useState({});
    const forceUpdate = React.useCallback(() => updateState({}), [])

    


    const addSchema = () =>{
        console.log(conModules.length)
        const tempPin: Pins[] = [   {typePin:TypePins.GND, posPin:-1}, 
                                    {typePin:TypePins.AnalogIn, posPin:1, name:"Trig"}, 
                                    {typePin:TypePins.AnalogIn, posPin:0, name:"Echo"}, 
                                    {typePin:TypePins.Power, posPin:21}];

        const temp: ModuExtern = {name:"Test",
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

    const pinAlloccation = () =>{

    }

    return(
        <section id={sectionId}>
            <Button
                onClick={addSchema}>TESTING</Button>
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

            <SchemaComp modules={conModules}/>
            


            </Grid>

        </section>
    )
}

    
export default ModulatorComp;
