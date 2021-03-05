import { useContext, useEffect } from "react";
import { addHost, hostDefinitionFromServiceClass } from "../../../../src/hosts/hosts";
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context";

export default function useDeviceHostFromServiceClass(serviceClass: number): void {
    const { bus } = useContext<JacdacContextProps>(JacdacContext);

    // run once
    useEffect(() => {
        const devices = bus.devices({ serviceClass });
        const def = !devices.length && hostDefinitionFromServiceClass(serviceClass);
        const host = def && addHost(bus, def.services());
        return () => bus.removeDeviceHost(host);
    }, [serviceClass]);
}