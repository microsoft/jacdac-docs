import { Grid } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React, { lazy, useContext } from "react"
import CarouselGrid from "./CarouselGrid"
import CenterGrid from "./CenterGrid"
import FeatureItem from "./FeatureItem"
import SplitGrid from "./SplitGrid"
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew"
import CameraIcon from "@mui/icons-material/Camera"
import TelegramIcon from "@mui/icons-material/Telegram"
import useMediaQueries from "../hooks/useMediaQueries"
import Suspense from "../ui/Suspense"
import DarkModeContext from "../ui/DarkModeContext"
const DeviceSpecificationList = lazy(
    () => import("../specification/DeviceSpecificationList")
)

export default function Hardware() {
    const { imgStyle } = useContext(DarkModeContext)
    const { mobile, medium } = useMediaQueries()
    const cols = mobile ? 1 : medium ? 3 : 4
    return (
        <Grid
            container
            spacing={10}
            direction="column"
            alignContent="center"
            alignItems="center"
        >

            <SplitGrid
                title="Hardware Bus"
                description="Every Jacdac device has one or more PCB-based edge connectors, which allows it to be connected to the Jacdac bus via a cable."
                image={<StaticImage
                    src="./buttoncable.png"
                    alt="A cable plugin into a humidity sensor."
                />}
            />

            <SplitGrid
                right={false}
                subtitle="Edge Connector"
                description="Jacdac's PCB edge connector is robust, double-sided, low cost."
                buttonText="Edge connector"
                buttonVariant="link"
                buttonUrl="/hardware/connector/"
                imageColumns={6}
                image={
                    <StaticImage
                        src="./mechanicalclickconnector.png"
                        alt="Cable and connector"
                        imgStyle={imgStyle}
                    />
                }
            />

            <SplitGrid
                right={false}
                subtitle="Cable"
                description="Cables make plug-and-play simple and error-free."
                buttonText="Cable"
                buttonVariant="link"
                buttonUrl="/hardware/cable/"
                imageColumns={6}
                image={<StaticImage src="./ucable.png" alt="Short cable" />}
            />

            <SplitGrid
                right={false}
                subtitle="3-wire Bus"
                description="Jacdac packets are sent serially among physical devices over a single data line along with a regulated power line."
                image={
                    <StaticImage
                        src="./bustopology.png"
                        alt="Bus topology"
                        imgStyle={imgStyle}
                    />
                }
                buttonText={"Learn more"}
                buttonVariant="link"
                buttonUrl="/reference/protocol/"
            />

            <CenterGrid
                subtitle="Discover the benefits of Jacdac custom connector and cable."
                description="There are plenty of prototyping connectors/cables on the market. The issue is that there are also plenty of compromises that come with using them. They are fiddly, require high dexterity, and are easy to damage."
            />

            <Grid item xs={12}>
                <StaticImage
                    src="./competitors.png"
                    alt="Comparing existing cables to Jacdac"
                />
            </Grid>

            {/* <SplitGrid
                right={false}
                subtitle="Power... negotiated"
                description="Power is regulated and negotiated on the bus to minimize brown-outs, etc."
                imageColumns={8}
                image={
                    <StaticImage
                        src="./rotary.png"
                        alt="A Jacdac rotary encoder module plugging into a Jacdac cable"
                        imgStyle={imgStyle}
                    />
                }
            /> */}

            <CenterGrid
                subtitle="For Manufacturers"
                description="Create Jacdac devices."
                buttonText="Device Development Kit"
                buttonUrl="/ddk/"
                buttonVariant="link"
            />

        </Grid>
    )
}
