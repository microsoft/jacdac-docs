import React, { useState } from "react";
import Button from "../ui/Button";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

type Props={
    addSchema: (moduleId: string) => void;
}

const ManualAddComp: React.FC<Props> = ({addSchema}) => {
    const [moduleId, setModuleId] = useState("")

    const handleChange = (event:SelectChangeEvent) => {
        setModuleId(event.target.value);
    }

    const clickHandler = () => {
        addSchema(moduleId);
    }

    return(
        <span>
                <Select value={moduleId} onChange={handleChange} sx={{width: 200}}>
                    <MenuItem value=""> <em>None</em> </MenuItem>
                    <MenuItem value="12345678">RGB Led</MenuItem>
                    {/* <MenuItem value="897654321">Distance 3.3V</MenuItem> */}
                    <MenuItem value="897654322">Distance 5V</MenuItem>
                    <MenuItem value="654321789">Display 2004A</MenuItem>
                    <MenuItem value="321654987">Relay SRLY</MenuItem>
                    <MenuItem value="987654321">Light Sensor</MenuItem>
                </Select>
                <Button onClick={clickHandler}>Add</Button>
            
        </span>
    );
}

export default ManualAddComp;
