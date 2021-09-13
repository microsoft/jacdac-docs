import { Grid } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import CarouselGrid from "../home/CarouselGrid"
import CenterGrid from "../home/CenterGrid"
import FeatureItem from "../home/FeatureItem"
import SplitGrid from "../home/SplitGrid"
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus"
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck"
import FindReplaceIcon from "@material-ui/icons/FindReplace"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"

export default function Home() {
    return (
        <Grid
            container
            spacing={10}
            direction="column"
            alignContent="center"
            alignItems="center"
        >
            <CenterGrid
                title="Jacdac Kit"
                subtitle3="All you need to start making amazing things in a single box."
            />
            <CarouselGrid>
                <Grid item xs={12} sm={6}>
                    <FeatureItem
                        startImage={<DirectionsBusIcon fontSize="large" />}
                        description="Bus topology"
                        caption="Jacdac packets are sent serially among physical devices on the Jacdac bus and may also be sent over WebUSB/WebBLE, providing connectivity to web-based tooling and services running in the web browser."
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FeatureItem
                        startImage={<PlaylistAddCheckIcon fontSize="large" />}
                        description="Device discovery and service advertisement"
                        caption="Any device that hosts a service must also run the control service. The control service is responsible for advertising any services a device is running every 500 milliseconds."
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FeatureItem
                        startImage={<FindReplaceIcon fontSize="large" />}
                        description="Standardized service abstraction"
                        caption="This abstraction brings plug-and-play dynamism to Jacdac so that devices with different hardware, but the same overall functionality, can replace one another without having to recompile user applications."
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FeatureItem
                        startImage={<SubscriptionsIcon fontSize="large" />}
                        description="Full stack from 8bit MCU to web development"
                        caption="The responsibility of the physical layer is to send/receive a byte buffer (representing a Jacdac frame from the transport layer over a particular media): Single Wire Serial connects MCUs to each other using UART, WebUSB connects MCU to web browser"
                    />
                </Grid>
            </CarouselGrid>

            <CenterGrid
                subtitle="Enabling a cheaper ecosystem."
                description="A PCB edge connector was chosen for Jacdac primarily because it essentially adds no cost to a product. A module is a small PCB that includes an MCU connected to an on-board sensor or actuator."
                image={
                    <StaticImage
                        src="./rhtempvertical.png"
                        alt="Humidity temperature module vertial"
                    />
                }
                buttonText="Hardware overview"
                buttonVariant="link"
                buttonUrl="/hardware/"
            />

            <SplitGrid
                right={true}
                subtitle="Time to join."
                description="The Jacdac Device Development Kit (DDK) is for 3rd party hardware designers, firmware developers and manufacturers who wish to create their own Jacdac devices."
                imageColumns={8}
                centered={true}
                buttonText="Device Development Kit"
                buttonUrl="https://github.com/microsoft/jacdac-ddk"
                buttonVariant="link"
                image={
                    <StaticImage
                        src="./beautifysimple.png"
                        alt="An array of Jacdac modules"
                    />
                }
            />

            <SplitGrid
                right={false}
                subtitle="How does it work?"
                description="Jacdac packets are sent serially among physical devices on the Jacdac bus and may also be sent over WebUSB/WebBLE, providing connectivity to web-based tooling and services running in the web browser."
                imageColumns={8}
                image={
                    <StaticImage
                        src="./buttoncable.png"
                        alt="A Jacdac humidity module plugging into a Jacdac cable"
                    />
                }
            />

            <CarouselGrid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        startImage={
                            <StaticImage
                                width={64}
                                src="./hotplugicon.svg"
                                alt="Icon of two plugs connecting"
                            />
                        }
                        description="Hot plug discovery"
                        caption="The device catalog lists the registered Jacdac devices that can be automatically detected on the bus. The catalog information provides vendor information, the service."
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        startImage={
                            <StaticImage
                                width={64}
                                src="./firmwareupdateicon.svg"
                                alt="Firmware icon"
                            />
                        }
                        description="Firmware updates"
                        caption="The device catalog is automatically detect, download and flash firmware onto devices."
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        startImage={
                            <StaticImage
                                width={64}
                                src="./html5.png"
                                alt="HTML5 icon"
                            />
                        }
                        description="JavaScript package"
                        caption="Integrate Jacdac into your web site or node.js application using our TypeScript/JavaScript npm package."
                        buttonText="Learn more"
                        buttonUrl="/software/"
                        buttonVariant="link"
                    />
                </Grid>
            </CarouselGrid>

            <CenterGrid
                subtitle="Can I add Jacdac to my PCB?"
                description="Absolutely. We would be thrilled if you used a Jacdac PCB connector on your board or product! You can use the name Jacdac without royalties or attribution."
                buttonText="Integrate Jacdac into your hardware"
                buttonVariant="link"
                buttonUrl="/hardware/"
            />

            <CenterGrid
                subtitle="Can I add Jacdac to my app?"
                description="Absolutely! Use our client software to integrate into your apps."
                buttonText="Integrate Jacdac into your apps"
                buttonVariant="link"
                buttonUrl="/software/"
            />
        </Grid>
    )
}
