import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import GridHeader from "../../ui/GridHeader"
import { StaticImage } from "gatsby-plugin-image";
import ImageMapper from 'react-image-mapper';
import CSS from 'csstype';

import "./test.css";
import { LogicSup, ModuExtern, PinAlloc } from "../helper/types";
import { getColor } from "../helper/file";





//TODO: kijken hoe hide niet gebruikt
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

                    <li className="type-gpio typeP20">
                        {highlight("P20")?
                            <Button id="pin-20" style={{background:"#ffe119"}} >
                                <span>P20</span>
                                <strong>{getPinName("P20")}</strong>
                            </Button>:
                            <Button id="pin-20" style={{background:"#fff"}} >
                                <span>P20</span>
                            </Button>
                        }
                    </li>
                    <li className="type-gpio typeP19">
                        {highlight("P19")?
                            <Button id="pin-19" style={{background:"#4363d8"}} >
                                <span>P19</span>
                                <strong>{getPinName("P19")}</strong>
                            </Button>:
                            <Button id="pin-19" style={{background:"#fff"}} >
                                <span>P19</span>
                            </Button>
                        }
                    </li>
                    <li className="type-gpio typeP1">
                        {highlight("P1")?
                            <Button id="pin-1" style={{background:"#f58231"}} >
                                <span>P1</span>
                                <strong>{getPinName("P1")}</strong>
                            </Button>:
                            <Button id="pin-1" style={{background:"#fff"}} >
                                <span>P1</span>
                            </Button>
                        }
                    </li>
                    <li className="type-gpio typeP0">
                        {highlight("P0")?
                            <Button id="pin-0" style={{background:"#911eb4"}} >
                                <span>P0</span>
                                <strong>{getPinName("P0")}</strong>
                            </Button>:
                            <Button id="pin-0" style={{background:"#fff"}} >
                                <span>P0</span>
                            </Button>
                        }
                    </li>
                    
                </ul>
            </div>
        </Grid>
    )
}
