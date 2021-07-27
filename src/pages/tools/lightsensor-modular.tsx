import React, { useState } from "react"
import { SRV_LIGHT_LEVEL } from "../../../jacdac-ts/src/jdom/constants"
import useServices from "../../components/hooks/useServices"
import GridHeader from "../../components/ui/GridHeader"
import { Button } from "gatsby-theme-material-ui"
import { Card,
    CardActions,
    CardContent,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography,
} from "@material-ui/core"
import ConnectAlert from "../../components/alert/ConnectAlert"
import DeviceCardHeader from "../../components/DeviceCardHeader"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import Dashboard from "../../components/dashboard/Dashboard"
import { JDDevice } from "../../../jacdac-ts/src/jdom/device"
import { useId } from "react-use-id-hook"

// this is a React component that gets run numerous time,
// whenever a change is detected in the React state
// for example, useServices is a hook that tracks the light level services,
// so it will render again and update the light array whenever the bus connects/disconnects
// a light sensor
export default function LightsensorAccessible() {
    // identifiers for accessibility
    const sectionId = useId()

    // useServices accepts a number of filters and returns any services that match
    // get all led light sensor services
    // under the hood, it uses the bus and events.
    const lightSensor = useServices({ serviceClass: SRV_LIGHT_LEVEL})
    console.log("light sensors: "  + lightSensor)
    console.log(typeof lightSensor)

    // create a state variable to hold the service selected as our light sensor
    // when using setLightService, React will render again this component
    const [lightService, setLightService] = useState<JDService>()

    const handleSelectLightService = light => () => {
        console.log("light: " + light)
        console.log(typeof light)
        lightService == light ? setLightService(undefined) : setLightService(light)
    }

    // filter to only show light sensors in dashboard
    const dashboardDeviceFilter = (d: JDDevice) =>
        d.hasService(SRV_LIGHT_LEVEL)

    return (
        <>
            <section id={sectionId}>
                <Grid container spacing={2}>
                    <GridHeader title="Audio controls"/>
                    <Grid item xs={12}>
                        <Button variant={"outlined"}
                            onClick={toggleBrowserAudio}>
                            {browserAudio
                                ? "Stop browser audio"
                                : "Start browser audio"}
                        </Button>
                        {!lightSensors && (
                            <>
                            <GridHeader title="Connect a device" />
                            <Grid item xs>
                                <ConnectAlert serviceClass={SRV_LIGHT_LEVEL}/>
                            </Grid>
                            </>
                        )}
                        {lightSensors.length && (
                            <>
                            <GridHeader title="Available Lightsensors"/>
                            {lightSensors.map(lightSensor => (
                                <Grid item xs={12} sm={6} lg={4} xl={3} key={lightSensor.id}>
                                    <Card>
                                        <DeviceCardHeader device={lightSensor.device}
                                                           showAvatar={true}
                                                           showMedia={true}/>
                                        
                                    </Card>
                                    <CardContent>
                                        <Typography variant="h5">
                                            {(lightSensor === lightService ? "Streaming from " : "") +
                                                        (lightSensor.device.physical ? "Physical" : "Virtual") + 
                                                        `LightSensor ${lightSensor.friendlyName}` 
                                            }
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">
                                                    Select property of sound to change
                                            </FormLabel>
                                                <RadioGroup
                                                    aria-label="sonification property"
                                                    name="soundProperty"
                                                    value={sonificationProperty}
                                                    onChange={
                                                        handlePropertySelectionChange
                                                    }>
                                                <FormControlLabel
                                                    value="frequency"
                                                    control={<Radio />}
                                                    label="buzzer frequency"
                                                />
                                                <FormControlLabel
                                                    value="volume"
                                                    control={<Radio />}
                                                    label="buzzer volume"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                        <Button
                                            variant={"outlined"}
                                            onClick={handleSelectLightService(lightSensor)}
                                        >
                                        {lightSensor === lightService ? "Stop streaming" : "Start streaming"}
                                        </Button>
                                    </CardActions>
                                </Grid>
                            ))}
                            </>
                        )}
                    </Grid>
                </Grid>
            </section>
            <Dashboard deviceFilter={dashboardDeviceFilter} />
        </>    
        )
}