import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import GridHeader from "../../ui/GridHeader"
import { StaticImage } from "gatsby-plugin-image";
import ImageMapper from 'react-image-mapper';
import CSS from 'csstype';

import "./test.css";
import { LogicSup, ModuExtern, PinAlloc } from "../helper/types";





//TODO: hover start is made
// nog no clue hoe verder, mogelijk gewoon met kleur ofzo
export default function PinLayoutComp(
    props:{
        highlighted: ModuExtern|undefined;
        highlightPinsAlloc: PinAlloc[] |undefined;
    }
){
    const {highlighted, highlightPinsAlloc} = props;

    // const checkActive = (id: string): boolean =>{
    //     for(let i = 0; i<allocedPins.length; i++){
    //         if(allocedPins[i].BreakoutName === "Micro:bit V2"){
    //             if(allocedPins[i].pinBreakName == id){
    //                 return true;
    //             }
    //         }
    //     }

    //     return false;

    // }

    const highlight = (id:string) =>{
        if(highlightPinsAlloc){
            for(let i = 0; i<highlightPinsAlloc.length; i++){
                if(highlightPinsAlloc[i].BreakoutName === "Micro:bit V2"){
                    if(highlightPinsAlloc[i].pinBreakName == id){
                        return true;
                    }
                }
            }
        }
    
    }
   
    const getPinName = (id:string) =>{
        if(highlightPinsAlloc){
            for(let i = 0; i<highlightPinsAlloc.length; i++){
                if(highlightPinsAlloc[i].BreakoutName === "Micro:bit V2"){
                    if(highlightPinsAlloc[i].pinBreakName == id){
                        return (highlightPinsAlloc[i].moduleName+ " P"+highlightPinsAlloc[i].modulePin.posPin);
                    }
                }
            }
        }
        return undefined
    }

    return (
        <Grid item>
            <GridHeader title={"Micro:bit Pin Layout V2"} />
            
            <div className="Pinout">
                <ul>
                    <li className="type-ground">
                        <Button >
                            <span>Ground</span>
                        </Button>
                    </li>
                    <li className="typeHook">
                        <Button >
                            <span>Ground</span>
                        </Button>
                    </li>
                    <li className="type-ground">
                        <Button>
                            <span>Ground</span>
                        </Button>
                    </li>

                    <li className="type-gpio type-i2c">
                       
                        <Button id="pin-20" className={highlight("P20")?"active":null}>
                            <span>P20</span>
                            {highlight("P20")?<strong>{getPinName("P20")}</strong>: null}
                        </Button>
                    </li>
                    <li className="type-gpio type-i2c">
                        <Button id="pin-19" >
                            <span>P19</span>
                        </Button>
                    </li>
                    
                </ul>
            </div>
        </Grid>
    )
}
