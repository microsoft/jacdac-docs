import { Grid } from "@mui/material";
import React, { useId } from "react";
import GridHeader from "../ui/GridHeader"
import { JDDevice } from "../../../jacdac-ts/src/jdom/device"


type Props = {
    clients: JDDevice[]
}


const ClientCodeComp: React.FC<Props> = ({clients}) => {
    const sectionId = useId();




    return(
        <section id={sectionId}>
            <p>New client thing</p>
            <div>
                {clients.map((client, index) => (
                    <div key={index}>
                        {client.name} type {client.serviceClasses}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ClientCodeComp;
