import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import GridHeader from "../../ui/GridHeader"
import { StaticImage } from "gatsby-plugin-image";
import ImageMapper from 'react-image-mapper';
import CSS from 'csstype';

import "./pinout.css";
import { LogicSup, ModuExtern, PinAlloc } from "../helper/types";
import { getColor } from "../helper/file";





//TODO: kijken hoe hide niet gebruikt
export default function PinLayoutComp(
    props:{
        highlighted: ModuExtern|undefined;
        highlightPinsAlloc: PinAlloc[];
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
            return false;
        }
        return false;
    
    }
   
    const getPinName = (id:string) =>{
        if(highlighted){
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
                    {highlight("GND")?
                    <><li id="pinGNDend" className="type-ground" style={{ opacity: 1.0 }}>
                            <Button id="pinGND" style={{ background: "#fff" }}>
                                <span>GND</span>
                                <strong style={{ borderBottom: "3px solid #8a8d8a" }}>{getPinName("GND")}</strong>
                            </Button>
                        </li><li className="typeHook type-ground" style={{ opacity: 1.0 }}>
                            <Button id="pinGND" style={{ background: "#fff" }}>
                                <span>GND</span>
                                <strong style={{ borderBottom: "3px solid #8a8d8a" }}>{getPinName("GND")}</strong>
                            </Button>
                        </li>
                        <li className="type-ground" style={{ opacity: 1.0 }}>
                            <Button id="pinGND" style={{ background: "#fff" }}>
                                <span>GND</span>
                                <strong style={{ borderBottom: "3px solid #8a8d8a" }}>{getPinName("GND")}</strong>
                            </Button>
                        </li>
                    </>
                    :<>
                    <li id="pinGNDend" className="type-ground" style={{opacity:0.5}}>
                            <Button id="pinGND" style={{background:"#fff"}} >
                                <span>GND</span>
                            </Button>
                    </li>
                    <li className="typeHook type-ground" style={{opacity:0.5}}>
                            <Button id="pinGND" style={{background:"#fff"}} >
                                <span>GND</span>
                            </Button>
                    </li>
                    <li className="type-ground" style={{opacity:0.5}}>
                            <Button id="pinGND" style={{background:"#fff"}} >
                                <span>GND</span>
                            </Button>
                    </li>
                    </>
                    }
                    
                    {highlight("P20")?
                    <li className="type-gpio typeP20" style={{opacity:1.0}}>
                            <Button id="pin-20" style={{background:"#fff"}} >
                                <span>P20</span>
                                <strong style={{borderBottom:"3px solid #ffe119"}}>{getPinName("P20")}</strong>
                                <small>I2C SDA</small>

                            </Button>
                    </li>:
                    <li className="type-gpio typeP20" style={{opacity:0.5}}>
                            <Button id="pin-20" style={{background:"#fff"}} >
                                <span>P20</span>
                                <small>I2C SDA</small>
                            </Button>
                    </li>
                    }
                    
                    {highlight("P19")?
                        <li className="type-gpio typeP19" style={{opacity:1.0}}>
                                <Button id="pin-19" style={{background:"#fff"}} >
                                    <span>P19</span>
                                    <strong style={{borderBottom:"3px solid #4363d8"}}>{getPinName("P19")}</strong>
                                    <small>I2C SCL</small>

                                </Button>
                        </li>:
                        <li className="type-gpio typeP19" style={{opacity:0.5}}>
                                <Button id="pin-19" style={{background:"#fff"}} >
                                    <span>P19</span>
                                    <small>I2C SCL</small>
                                </Button>
                        </li>
                    }

                    {highlight("3.3V")?
                        <><li className="typePower" style={{ opacity: 1.0 }}>
                                <Button id="pinPW" style={{ background: "#fff" }}>
                                    <span>3.3V</span>
                                    <strong style={{ borderBottom: "3px solid #e6194B" }}>{getPinName("3.3V")}</strong>
                                </Button>
                            </li><li className="typeHook typePower" style={{ opacity: 1.0 }}>
                                <Button id="pinPW" style={{ background: "#fff" }}>
                                    <span>3.3V</span>
                                    <strong style={{ borderBottom: "3px solid #e6194B" }}>{getPinName("3.3V")}</strong>
                                </Button>
                            </li>
                            <li className="typePower" style={{ opacity: 1.0 }}>
                                <Button id="pinPW" style={{ background: "#fff" }}>
                                    <span>3.3V</span>
                                    <strong style={{ borderBottom: "3px solid #e6194B" }}>{getPinName("3.3V")}</strong>
                                </Button>
                            </li>
                        </>
                        :<>
                        <li className="typePower" style={{opacity:0.5}}>
                                <Button id="pinPW" style={{background:"#fff"}} >
                                    <span>3.3V</span>
                                </Button>
                        </li>
                        <li className="typeHook typePower" style={{opacity:0.5}}>
                                <Button id="pinPW" style={{background:"#fff"}} >
                                    <span>3.3V</span>
                                </Button>
                        </li>
                        <li className="typePower" style={{opacity:0.5}}>
                                <Button id="pinPW" style={{background:"#fff"}} >
                                    <span>3.3V</span>
                                </Button>
                        </li>
                        </>
                    }

                    {highlight("P16")?
                        <li className="type-gpio typeP16" style={{opacity:1.0}}>
                                <Button id="pin-16" style={{background:"#fff"}} >
                                    <span>P16</span>
                                    <strong style={{borderBottom:"3px solid #3cb44b"}}>{getPinName("P16")}</strong>

                                </Button>
                        </li>:
                        <li className="type-gpio typeP16" style={{opacity:0.5}}>
                                <Button id="pin-16" style={{background:"#fff"}} >
                                    <span>P16</span>
                                </Button>
                        </li>
                    }
                    {highlight("P15")?
                        <li className="type-gpio typeP15" style={{opacity:1.0}}>
                                <Button id="pin-15" style={{background:"#fff"}} >
                                    <span>P15</span>
                                    <strong style={{borderBottom:"3px solid #fabed4"}}>{getPinName("P15")}</strong>
                                    <small>SPI MOSI</small>

                                </Button>
                        </li>:
                        <li className="type-gpio typeP15" style={{opacity:0.5}}>
                                <Button id="pin-15" style={{background:"#fff"}} >
                                    <span>P15</span>
                                    <small>SPI MOSI</small>
                                </Button>
                        </li>
                    }

                    {highlight("P14")?
                        <li className="type-gpio typeP14" style={{opacity:1.0}}>
                                <Button id="pin-14" style={{background:"#fff"}} >
                                    <span>P14</span>
                                    <strong style={{borderBottom:"3px solid #469990"}}>{getPinName("P14")}</strong>
                                    <small>SPI MISO</small>

                                </Button>
                        </li>:
                        <li className="type-gpio typeP14" style={{opacity:0.5}}>
                                <Button id="pin-14" style={{background:"#fff"}} >
                                    <span>P14</span>
                                    <small>SPI MISO</small>
                                </Button>
                        </li>
                    }
                    {highlight("P13")?
                        <li className="type-gpio typeP13" style={{opacity:1.0}}>
                                <Button id="pin-13" style={{background:"#fff"}} >
                                    <span>P13</span>
                                    <strong style={{borderBottom:"3px solid #000075"}}>{getPinName("P13")}</strong>
                                    <small>SPI SCK</small>

                                </Button>
                        </li>:
                        <li className="type-gpio typeP13" style={{opacity:0.5}}>
                                <Button id="pin-13" style={{background:"#fff"}} >
                                    <span>P13</span>
                                    <small>SPI SCK</small>
                                </Button>
                        </li>
                    }

                    {highlight("P2")?
                        <li className="typeHook typeP2" style={{opacity:1.0}}>
                                <Button id="pin-2" style={{background:"#fff"}} >
                                    <span>P2</span>
                                    <strong style={{borderBottom:"3px solid #ffd8b1"}}>{getPinName("P2")}</strong>
                                </Button>
                        </li>:
                        <li className="typeHook typeP2" style={{opacity:0.5}}>
                                <Button id="pin-2" style={{background:"#fff"}} >
                                    <span>P2</span>
                                </Button>
                        </li>
                    }

                    <li className="type-gpio typeUnuse" style={{opacity:0.5}}>
                            <Button id="pin-12" style={{background:"#fff"}} >
                                <span>P12</span>
                                <small>Accesibility</small>
                            </Button>
                    </li>
                    
                    <li className="type-gpio typeUnuse" style={{opacity:0.5}}>
                            <Button id="pin-11" style={{background:"#fff"}} >
                                <span>P11</span>
                                <small>Button B</small>
                            </Button>
                    </li>
                    {highlight("P10")?
                        <li className="type-gpio typeP10" style={{opacity:1.0}}>
                                <Button id="pin-10" style={{background:"#fff"}} >
                                    <span>P10</span>
                                    <strong style={{borderBottom:"3px solid #808000"}}>{getPinName("P10")}</strong>
                                </Button>
                        </li>:
                        <li className="type-gpio typeP10" style={{opacity:0.5}}>
                                <Button id="pin-10" style={{background:"#fff"}} >
                                    <span>P10</span>
                                </Button>
                        </li>
                    }
                    {highlight("P9")?
                        <li className="type-gpio typeP9" style={{opacity:1.0}}>
                                <Button id="pin-9" style={{background:"#fff"}} >
                                    <span>P9</span>
                                    <strong style={{borderBottom:"3px solid #aaffc3"}}>{getPinName("P9")}</strong>
                                </Button>
                        </li>:
                        <li className="type-gpio typeP9" style={{opacity:0.5}}>
                                <Button id="pin-9" style={{background:"#fff"}} >
                                    <span>P9</span>
                                </Button>
                        </li>
                    }
                    {highlight("P8")?
                        <li className="type-gpio typeP8" style={{opacity:1.0}}>
                                <Button id="pin-8" style={{background:"#fff"}} >
                                    <span>P8</span>
                                    <strong style={{borderBottom:"3px solid #9A6324"}}>{getPinName("P8")}</strong>
                                </Button>
                        </li>:
                        <li className="type-gpio typeP8" style={{opacity:0.5}}>
                                <Button id="pin-8" style={{background:"#fff"}} >
                                    <span>P8</span>
                                </Button>
                        </li>
                    }
                    {highlight("P1")?
                        <li className="typeHook typeP1" style={{opacity:1.0}}>
                                <Button id="pin-1" style={{background:"#fff"}} >
                                    <span>P1</span>
                                    <strong style={{borderBottom:"3px solid #f58231"}}>{getPinName("P1")}</strong>
                                </Button>
                        </li>:
                        <li className="typeHook typeP1" style={{opacity:0.5}}>
                                <Button id="pin-1" style={{background:"#fff"}} >
                                    <span>P1</span>
                                </Button>
                        </li>
                    }
                    {highlight("P7")?
                        <li className="type-gpio typeP7" style={{opacity:1.0}}>
                                <Button id="pin-7" style={{background:"#fff"}} >
                                    <span>P7</span>
                                    <strong style={{borderBottom:"3px solid #dcbeff"}}>{getPinName("P7")}</strong>
                                </Button>
                        </li>:
                        <li className="type-gpio typeP7" style={{opacity:0.5}}>
                                <Button id="pin-7" style={{background:"#fff"}} >
                                    <span>P7</span>
                                </Button>
                        </li>
                    }

                    {highlight("P6")?
                        <li className="type-gpio typeP6" style={{opacity:1.0}}>
                                <Button id="pin-6" style={{background:"#fff"}} >
                                    <span>P6</span>
                                    <strong style={{borderBottom:"3px solid #bfef45"}}>{getPinName("P6")}</strong>
                                </Button>
                        </li>:
                        <li className="type-gpio typeP6" style={{opacity:0.5}}>
                                <Button id="pin-6" style={{background:"#fff"}} >
                                    <span>P6</span>
                                </Button>
                        </li>
                    }
                    
                    <li className="type-gpio typeUnuse" style={{opacity:0.5}}>
                            <Button id="pin-5" style={{background:"#fff"}} >
                                <span>P5</span>
                                <small>Button A</small>
                            </Button>
                    </li>
                    

                    {highlight("P4")?
                        <li className="type-gpio typeP4" style={{opacity:1.0}}>
                                <Button id="pin-4" style={{background:"#fff"}} >
                                    <span>P4</span>
                                    <strong style={{borderBottom:"3px solid #f032e6"}}>{getPinName("P4")}</strong>
                                </Button>
                        </li>:
                        <li className="type-gpio typeP4" style={{opacity:0.5}}>
                                <Button id="pin-4" style={{background:"#fff"}} >
                                    <span>P4</span>
                                </Button>
                        </li>
                    }
                    

                    
                    {highlight("P0")?
                        <li className="typeHook typeP0" style={{opacity:1.0}}>
                                <Button id="pin-0" style={{background:"#fff"}} >
                                    <span>P0</span>
                                    <strong style={{borderBottom:"3px solid #911eb4"}}>{getPinName("P0")}</strong>
                                </Button>
                        </li>:
                        <li className="typeHook typeP0" style={{opacity:0.5}}>
                                <Button id="pin-0" style={{background:"#fff"}} >
                                    <span>P0</span>
                                </Button>
                        </li>
                    }

                    {highlight("P3")?
                        <li id="pinEnd" className="type-gpio typeP3" style={{opacity:1.0}}>
                                <Button id="pin-3" style={{background:"#fff"}} >
                                    <span>P3</span>
                                    <strong style={{borderBottom:"3px solid #42d4f4"}}>{getPinName("P3")}</strong>
                                </Button>
                        </li>:
                        <li id="pinEnd" className="type-gpio typeP3" style={{opacity:0.5}}>
                                <Button id="pin-3" style={{background:"#fff"}} >
                                    <span>P3</span>
                                </Button>
                        </li>
                    }
                    
                </ul>
            </div>
        </Grid>
    )
}
