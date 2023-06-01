import { Grid } from "@mui/material";
import React from "react";
import GridHeader from "../ui/GridHeader";
import { LogicSup, powerSup } from "./helper/types";
import { rotate } from "@jscad/modeling/src/maths/mat4";


const imgPath = "https://www.kiwi-electronics.com/image/cache/catalog/product/aem8hbpd/SF-BOB-12009_0-766x511h.jpg";

type Props = {
    supplies: LogicSup[];
}


//TODO: styling of it
//connection steps
const ExtraNeededComp: React.FC<Props> = ({supplies}) => {
    


    return(
        <Grid item >
            <GridHeader title={"Extra Components"}/>
            <div style={{display:"flex"}}>
                {supplies.map((sup, index) => (
                    <div key={index} >
                        <img src={imgPath} alt="diagram" height="100"/>
                        <br/>
                        {sup.convName}
                        <br></br>
                        Connected: {sup.conModule.length} 
                        Modules connected:  
                        {sup.conModule.map((supMod, index) => (
                            <div key={index}>
                                    { supMod }
                            </div> ))}
                        
                    </div>
                ))}
            </div>
        </Grid>
    )
}

export default ExtraNeededComp;
