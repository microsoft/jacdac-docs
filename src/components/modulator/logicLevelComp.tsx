import { Grid } from "@mui/material";
import React from "react";
import GridHeader from "../ui/GridHeader";
import { LogicSup, PinBreakout, TypePin, powerSup } from "./helper/types";
import { rotate } from "@jscad/modeling/src/maths/mat4";
import Button from "../ui/Button";


const imgPath = "https://www.kiwi-electronics.com/image/cache/catalog/product/aem8hbpd/SF-BOB-12009_0-766x511h.jpg";

type Props = {
    supplies: LogicSup[];
}


function stupidComp(
    props:{
        stupidPins: PinBreakout[];
    }
){
    const {stupidPins} = props;

    return (
        <div>

        </div>
    )

}

//TODO: maybe if neede highlight support
const ExtraNeededComp: React.FC<Props> = ({supplies}) => {

    const getPin = (pin: PinBreakout, lowSup: boolean) =>{
        if(pin.used){
            console.log(pin);
            if(pin.modulePin.length !== 0){
                return "Connect module pin "+ pin.name + " to the "+pin.modulePin[0].name + " of "+pin.moduleName[0]+"\n";
            }
            if(pin.options[0] === TypePin.GND){
                if(lowSup){
                    return "Connect module pin LGND to the GND of "+ pin.moduleName[0]+"\n";
                }
                return "Connect module pin HGND to the GND of "+ pin.moduleName[0]+"\n";
            }
            if(pin.options[0] === TypePin.Power){
                if(lowSup){
                    return "Connect module pin LV to the VCC of "+ pin.moduleName[0]+"\n";
                }
                return "Connect module pin HV to the VCC of "+ pin.moduleName[0]+"\n";
            }

        }
    }

    return(
        <Grid item >
            <GridHeader title={"Extra Components"}/>
            <div style={{display:"flex"}}>
                {supplies.map((sup, index) => (

                    <div key={index} style={{marginRight:5}}>
                        <div>
                            <span style={{fontWeight:"bold"}}>Component Name: </span>
                            <span>{sup.convName}</span>
                        </div>
                        <div>
                            <img src={imgPath} alt="diagram" height="100"/>
                        </div>
                        <div>
                            <span style={{fontWeight:"bold"}}> Connected: </span>
                            <span>{sup.conModule.length}</span>
                        </div>
                        <p style={{fontWeight: "bold", marginBottom:0}}>How to connect Low Voltage: </p>
                        
                        {sup.pinOutLow.map((pin, index) =>(
                            <div key={index}>
                                {getPin(pin, true)}
                            </div>
                        ))}
                        <p style={{fontWeight: "bold", marginBottom:0}}>How to connect High Voltage: </p>
                        {sup.pinOutHigh.map((pin, index) =>(
                            <div key={index}>
                                {getPin(pin, false)}
                            </div>
                            
                        ))}
                       
                    </div>
                ))}
            </div>
        </Grid>
    );
}

export default ExtraNeededComp;
