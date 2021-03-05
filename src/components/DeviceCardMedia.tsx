import React from "react";
import { JDDevice } from "../../../src/jdom/device";
import useDeviceSpecification from "../jacdac/useDeviceSpecification";
import CardMediaWithSkeleton from "./ui/CardMediaWithSkeleton";

export default function DeviceCardMedia(props: { device: JDDevice }) {
    const { device } = props;
    const { specification, imageUrl } = useDeviceSpecification(device)

    return <CardMediaWithSkeleton
        image={imageUrl}
        title={specification?.name}
    />
}