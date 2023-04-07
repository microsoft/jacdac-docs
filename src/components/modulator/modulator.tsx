import { ReactElement, useEffect, useId, useState } from "react";
import React from "react"
import { Grid } from "@mui/material"
import GridHeader from "../ui/GridHeader"
import LegendComp from "./legendComp";
import PinLayoutComp from "./pinLayoutComp";
import SchemaComp from "./schemaComp";
import Button from "../ui/Button";
import { log } from "vega";
import { fetchModule, fetchPinLayout } from "./helper/file";
import { Breakout, CodeMake, ModuExtern, Pin, PinBreakout, TypePin } from "./helper/types";


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

    const [, updateState] = React.useState({});
    const forceUpdate = React.useCallback(() => updateState({}), [])

    useEffect(() =>{
        getBreakout().then((data) => {
            setBreakoutBoard(data);
        })
    }, [])

    const removeConModule = (moduleName: string) => {
        const index = conModules.findIndex( i => i.name === moduleName);
        const temp = conModules
        temp.splice(index, 1);

        setconModules(temp);
        forceUpdate();
    }

    //Old way of loading static
    const staticaddSchema = () =>{
        console.log(conModules.length)
        const tempPin: Pin[] = [   {typePin:TypePin.GND, posPin:-1}, 
                                    {typePin:TypePin.AnalogIn, posPin:1, name:"Trig"}, 
                                    {typePin:TypePin.AnalogIn, posPin:0, name:"Echo"}, 
                                    {typePin:TypePin.Power, posPin:21}];
        const tempName = "Test" + new Date().toISOString();
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
        const argument = "sr04";
        const tempModu = await fetchModule(argument);
        console.log(tempModu.pinLayout[0].typePin)
        console.log("checking")
        const tempCon = conModules;
        tempCon.push(tempModu)
        setconModules(tempCon);
        forceUpdate();
    }

    const pinAlloccation = () =>{
        if(breakoutBoard){
            console.log("REEEeeee")
        }
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

            <SchemaComp modules={conModules} removeFunc={removeConModule}/>
            


            </Grid>

        </section>
    )
}

    
export default ModulatorComp;
