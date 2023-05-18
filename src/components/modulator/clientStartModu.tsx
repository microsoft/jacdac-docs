import { Grid } from "@mui/material";
import React, { useId } from "react";
import GridHeader from "../ui/GridHeader"
import { JDDevice } from "../../../jacdac-ts/src/jdom/device"
import { ModuExtern } from "./helper/types";


type Props = {
    modules: ModuExtern[]
}


const ClientStartModu: React.FC<Props> = ({modules}) => {
    const sectionId = useId();

    const fileInCode = (module: ModuExtern): string => {
        const tempCodeString = module.codeAct.clientCode.split("#").join(module.name.replace(/\s/g, ""));
        

        return tempCodeString
    }


    return(
        <Grid item>
            <GridHeader title={"How to start clients Modulator?"}/>
            <div style={{marginBottom:"0", paddingLeft: "20px"}}>
                <p style={{marginBottom:"0"}}>namespace modules {"{"} </p>
                {modules.map((mod, index) => (
                    <p style={{marginBottom:"0", paddingLeft:"50px"}} key={index}>{fileInCode(mod)}</p>
                ))}
                <p>{"}"}</p>
            </div>
        </Grid>
    )
}

export default ClientStartModu;
