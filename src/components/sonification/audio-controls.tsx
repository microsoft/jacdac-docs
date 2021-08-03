import React, { useState, useEffect } from "react"
import { REPORT_UPDATE } from "../../../jacdac-ts/src/jdom/constants"
import GridHeader from "../../components/ui/GridHeader"
import { Button } from "gatsby-theme-material-ui"
import {
    Card,
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
import { throttle } from "../../../jacdac-ts/src/jdom/utils"
import ConnectAlert from "../../components/alert/ConnectAlert"
import DeviceCardHeader from "../../components/DeviceCardHeader"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import { usePlayTone } from "../../components/hooks/usePlayTone"
import { useId } from "react-use-id-hook"

const TONE_DURATION = 50
const TONE_THROTTLE = 100

export interface AudioControlProps {
    sensorTitle: string
    sensor: JDService
    sensorClass: number
    sensorService: JDService
    sensorSelection: React.MouseEventHandler<HTMLButtonElement>
}

export default function AudioControls(Props: AudioControlProps) {
    // const { sensorTitle, sensor, sensorClass, sensorService, sensorSelection } = props
    // I get a slint error "'sensorTitle' is missing in props validation" with the above line.

    //Used to store frequency modifier/offset for tones.
    //Setting default state to 0 as this will eventually be set to the
    //sensed light and be added to 1000 to be sonified.
    const [toneFrequencyOffset, setToneFrequencyOfset] = useState(0)
    const [volume, setVolume] = useState(1)
    const { playTone, toggleBrowserAudio, browserAudio } = usePlayTone()

    //used to hold user selection of the property of the sound to vary. Default is the frequency.
    const [sonificationProperty, setSonificationProperty] =
        useState("frequency")

    //handler for property selection to sonify.
    const handlePropertySelectionChange = event => {
        setSonificationProperty(event.target.value)
    }

    // identifiers for accessibility
    const sectionId = useId()
    // register for light sensor data events
    // JM: just tried to move this over from lightsensor-modular
    // JM: but I'm not sure how to parameterize it with audioControlProps... thus the errors
    // JM: stopped here
    useEffect(() => {
        // ?. checks that the callee is defined
        const unsubs = Props.sensor?.readingRegister.subscribe(
            REPORT_UPDATE,
            // don't trigger more than every 100ms
            throttle(async () => {
                // get amount of light
                //console.log(lightService.readingRegister.unpackedValue)
                console.log(Props.sensorService)
                const [sensorValue] = Props.sensor.readingRegister.unpackedValue
                if (sonificationProperty == "frequency") {
                    setToneFrequencyOfset(sensorValue)
                } else {
                    setVolume(sensorValue % 0.99)
                }

                await playTone(
                    1000 + toneFrequencyOffset * 1000,
                    TONE_DURATION,
                    volume
                )
            }, TONE_THROTTLE)
        )

        // cleanup callback
        return () => unsubs?.()
    }, [Props.sensor, playTone]) // re-register if light sensor changes
    return (
        <>
            <section id={sectionId}>
                <Grid container spacing={2}>
                    <GridHeader title="Audio controls" />
                    <Grid item xs={12}>
                        <Button
                            variant={"outlined"}
                            onClick={toggleBrowserAudio}
                        >
                            {browserAudio
                                ? "Stop browser audio"
                                : "Start browser audio"}
                        </Button>
                        {!Props.sensor && (
                            <>
                                <GridHeader title="Connect a device" />
                                <Grid item xs>
                                    <ConnectAlert
                                        serviceClass={Props.sensorClass}
                                    />
                                </Grid>
                            </>
                        )}
                        {Props.sensor && (
                            <>
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    lg={4}
                                    xl={3}
                                    key={Props.sensor.id}
                                >
                                    <Card>
                                        <DeviceCardHeader
                                            device={Props.sensor.device}
                                            showAvatar={true}
                                            showMedia={true}
                                        />
                                    </Card>
                                    <CardContent>
                                        <Typography variant="h5">
                                            {(Props.sensor ===
                                            Props.sensorService
                                                ? "Streaming from "
                                                : "") +
                                                (Props.sensor.device.physical
                                                    ? "Physical"
                                                    : "Virtual") +
                                                Props.sensorTitle +
                                                Props.sensor.friendlyName}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">
                                                Select property of sound to
                                                change
                                            </FormLabel>
                                            <RadioGroup
                                                aria-label="sonification property"
                                                name="soundProperty"
                                                value={sonificationProperty}
                                                onChange={
                                                    handlePropertySelectionChange
                                                }
                                            >
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
                                            onClick={Props.sensorSelection}
                                        >
                                            {Props.sensor ===
                                            Props.sensorService
                                                ? "Stop streaming"
                                                : "Start streaming"}
                                        </Button>
                                    </CardActions>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Grid>
            </section>
        </>
    )
}
