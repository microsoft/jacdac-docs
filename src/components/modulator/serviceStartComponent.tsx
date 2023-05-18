import { Grid } from "@mui/material";
import React, { useId } from "react";
import GridHeader from "../ui/GridHeader"
import { JDDevice } from "../../../jacdac-ts/src/jdom/device"
import { ModuExtern } from "./helper/types";


type Props = {
    modules: ModuExtern[]
}


const ServiceCodeComp: React.FC<Props> = ({modules}) => {
    const sectionId = useId();




    return(
        <Grid item>
            <GridHeader title={"How to start Services?"}/>
            <div style={{marginBottom:"0", paddingLeft: "20px"}}>
                <p style={{marginBottom:"0"}}>jacdac.startSelfServer(() ={">"} [</p>
                {modules.map((mod, index) => (
                    <p style={{marginBottom:"0", paddingLeft:"50px"}} key={index}>{"\t\t"+mod.name.replace(/\s/g, "")+"Service.startServer()," }</p>
                ))}
                <p>])</p>
            </div>
        </Grid>
    )
}

export default ServiceCodeComp;
