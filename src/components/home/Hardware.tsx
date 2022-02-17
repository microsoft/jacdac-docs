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

            <CenterGrid
                subtitle="Plug-and-play"
                description="Every Jacdac device has a tiny micro-controller that runs the Jacdac protocol and communicates over the bus."
                image={
                    <StaticImage
                        src="./rhtempvertical.png"
                        alt="A Jacdac humidity module plugging into a Jacdac cable"
                        imgStyle={imgStyle}
                    />
                }
            />

            <SplitGrid
                right={false}
                subtitle="3-wire serial"
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
                buttonUrl="/protocol/"
            />


            <SplitGrid
                right={false}
                subtitle="PCB Connector"
                description="A PCB edge connector is robust and adds no cost to a product."
                buttonText="Physical connector"
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
                right={true}
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
            />

            <SplitGrid
                right={false}
                subtitle="Firmware Updates"
                description="Jacdac scans for registered devices and can upgrade firmware over the bus."
                imageColumns={4}
                image={
                    <StaticImage
                        src="./firmwareupdate.png"
                        alt="A device with firmware up-to-date"
                    />
                }
            />

            <Grid item xs={12}>
                <Suspense>
                    <DeviceSpecificationList count={cols} shuffle={true} />
                </Suspense>
            </Grid>

            <CarouselGrid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        startImage={<TelegramIcon fontSize="large" />}
                        description="Cheap."
                        caption="Add Jacdac to your PCB for a few cents."
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        startImage={<CameraIcon fontSize="large" />}
                        description="Flexible."
                        caption="Hot swap plug-and-play with extensive web tooling."
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        startImage={<PowerSettingsNewIcon fontSize="large" />}
                        description="Extensible."
                        caption="Specify your own services and deploy them on your devices."
                    />
                </Grid>
            </CarouselGrid>

            <SplitGrid
                right={true}
                subtitle="For Manufacturers"
                description="Create Jacdac devices."
                imageColumns={8}
                buttonText="Device Development Kit"
                buttonUrl="/ddk/"
                buttonVariant="link"
                image={
                    <StaticImage
                        src="./beautifysimple.png"
                        alt="An array of Jacdac modules"
                        imgStyle={imgStyle}
                    />
                }
            />

            <SplitGrid
                subtitle="Kit"
                subtitle3="Hardware Module Kit"
                imageColumns={6}
                image={
                    <StaticImage
                        src="./kittop.jpg"
                        alt="Kit cardboard view from top"
                    />
                }
                buttonText="Unbox"
                buttonUrl="/hardware/kit/"
            />
        </Grid>
    )
}
