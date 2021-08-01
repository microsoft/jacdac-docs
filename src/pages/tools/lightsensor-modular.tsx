import React, { useState } from "react"
import { SRV_LIGHT_LEVEL } from "../../../jacdac-ts/src/jdom/constants"
import useServices from "../../components/hooks/useServices"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import Dashboard from "../../components/dashboard/Dashboard"
import { JDDevice } from "../../../jacdac-ts/src/jdom/device"
import AudioControls from "../../components/sonification/audio-controls"

//JM trying to remove stuff from here that lightsensor-modular can handle but not fulling
// understanding react and how to pass stuff around
// STOPPED HERE

// this is a React component that gets run numerous time,
// whenever a change is detected in the React state
// for example, useServices is a hook that tracks the light level services,
// so it will render again and update the light array whenever the bus connects/disconnects
// a light sensor
export default function LightsensorAccessible() {
    // useServices accepts a number of filters and returns any services that match
    // get all led light sensor services
    // under the hood, it uses the bus and events.
    const lightSensor = useServices({ serviceClass: SRV_LIGHT_LEVEL })
    console.log("light sensors: " + lightSensor)
    console.log(typeof lightSensor)

    // create a state variable to hold the service selected as our light sensor
    // when using setLightService, React will render again this component
    const [lightService, setLightService] = useState<JDService>()
    const lightSensors = useServices({ serviceClass: SRV_LIGHT_LEVEL })

    const handleSelectLightService = light => () => {
        console.log("light: " + light)
        console.log(typeof light)
        lightService == light
            ? setLightService(undefined)
            : setLightService(light)
    }

    // filter to only show light sensors in dashboard
    const dashboardDeviceFilter = (d: JDDevice) => d.hasService(SRV_LIGHT_LEVEL)

    return (
        <>
            <AudioControls
                sensorTitle="Light"
                sensor={lightSensors[0]}
                sensorClass={SRV_LIGHT_LEVEL}
                sensorService={lightService}
                sensorSelection={() => {
                    handleSelectLightService({ lightSensor })
                }}
            />
            <Dashboard deviceFilter={dashboardDeviceFilter} />
        </>
    )
}
