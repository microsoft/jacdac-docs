import { List } from "@material-ui/core";
import React from "react";
import Packet from "../../../src/jdom/packet";
import PacketListItem from "./PacketListItem";

export default function PacketList(props: { packets: Packet[] }) {
    const { packets } = props;
    return <List>
        {packets?.filter(pkt => !!pkt).map(pkt => <PacketListItem key={pkt.key} packet={pkt} />)}
    </List>
}