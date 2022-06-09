import { Grid } from "@mui/material"
import { withPrefix } from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"
import React, { lazy, useContext } from "react"
import CarouselGrid from "./CarouselGrid"
import CenterGrid from "./CenterGrid"
import FeatureItem from "./FeatureItem"
import SplitGrid from "./SplitGrid"
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus"
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck"
import FindReplaceIcon from "@mui/icons-material/FindReplace"
import SubscriptionsIcon from "@mui/icons-material/Subscriptions"
import DarkModeContext from "../ui/DarkModeContext"
import Suspense from "../ui/Suspense"
import { Link } from "gatsby-theme-material-ui"
const JacdaptorImageList = lazy(() => import("./JacdaptorImageList"))

export default function Home() {
    const { imgStyle } = useContext(DarkModeContext)
    return (
        <Grid
            container
            spacing={10}
            direction="column"
            alignContent="center"
            alignItems="center"
        >
            <SplitGrid
                title="Jacdac"
                subtitle3="Connect and code electronics. Instantly."
                imageColumns={6}
                image={
                    <Link
                        underline="none"
                        to="/devices/kittenbot/jacdacstarterkitawithjacdaptorformicrobitv2v10/"
                    >
                        <StaticImage
                            src="./kita.jpg"
                            alt="KittenBot Jacdac Starter Kit A with Jacdaptor for micro:bit V2 v1.0"
                        />
                    </Link>
                }
            />

            <SplitGrid
                right={false}
                subtitle="Electronics"
                description="Jacdac devices are connected via 3-wire cables and PCB edge connectors."
                image={
                    <Link
                        underline="none"
                        to="/devices/kittenbot/keycapbuttonv10/"
                    >
                        <StaticImage
                            src="./electronics.jpg"
                            alt="A KittenBot KeyCap button."
                        />
                    </Link>
                }
                buttonText="Device catalog"
                buttonVariant="link"
                buttonUrl="/devices/"
            />

            <CenterGrid
                subtitle2="No hardware? No problem!" 
                buttonText="Get started now"
                buttonVariant="link"
                buttonUrl="/start/"
            />

            <SplitGrid
                right={true}
                subtitle="Coding"
                description="Code apps in JavaScript, MakeCode, .NET, Python, ..."
                buttonText="Client programming"
                buttonVariant="link"
                buttonUrl="/clients/"
                image={
                    <StaticImage
                        src="./makecode.png"
                        alt="A screenshot of MakeCode blocks"
                    />
                }
            />

            <SplitGrid
                right={false}
                subtitle="Web Tools"
                description="Visualize, debug, sniff, track, record, replay, update... from your browser"
                buttonText="Get productive with Jacdac"
                buttonVariant="link"
                buttonUrl="/tools/"
                image={<StaticImage src="./devicetree.png" alt="Device tree" />}
            />

            <SplitGrid
                right={true}
                subtitle="Plays well with others"
                description="Jacdaptors allow Jacdac to integrate with other ecosystems."
                buttonText="Jacdaptors"
                buttonVariant="link"
                buttonUrl="/reference/jacdaptors"
                imageColumns={6}
                image={
                    <Suspense>
                        <JacdaptorImageList cols={2} />
                    </Suspense>
                }
            />

            <CenterGrid
                subtitle2="Dive deeper on details..."
            />

            <SplitGrid
                right={false}
                subtitle="Services"
                description="Jacdac services provide an abstract view of a device's features, allowing a consistent coding experience and simulation."
                buttonText="Service catalog"
                buttonVariant="link"
                buttonUrl="/services/"
                image={
                    <StaticImage
                        src="./dashboard.png"
                        alt="Dashboard of devices"
                    />
                }
            />

            <SplitGrid
                right={true}
                subtitle="Clients and Servers"
                description="Programmable clients (brains) access servers (modules) hosting sensors/actuators."
                buttonText="Clients and servers"
                buttonVariant="link"
                buttonUrl="/reference/clientserver/"
                imageColumns={6}
                image={
                    <img
                        loading="lazy"
                        alt="jacdac bus"
                        src={withPrefix("/images/jdbus.drawio.svg")}
                        style={imgStyle}
                    />
                }
            />

            <SplitGrid
                right={false}
                subtitle="Cable and PCB Connector"
                description="Reversible cable delivers seamless plug/unplug experience with low-cost PCB edge connector."
                imageColumns={6}
                image={
                    <StaticImage
                        src="./mechanicalclickconnector.png"
                        alt="A split view of the cable connecting to PCB"
                    />
                }
                buttonText="Schematics"
                buttonVariant="link"
                buttonUrl="/ddk/design/electro-mechanical/"
            />

            <SplitGrid
                right={true}
                subtitle="Enclosable"
                description="PCB form factor design system with connected grid-aligned mounting holes to accelerate enclosure fabrication in 3D printing and laser cutting."
                imageColumns={6}
                image={
                    <StaticImage
                        src="./ec30.png"
                        alt="A blurry image of the EC30 grid system device"
                    />
                }
                buttonText="Schematics"
                buttonVariant="link"
                buttonUrl="/ddk/design/ec30/"
            />

            <SplitGrid
                subtitle="For Manufacturers"
                description="Add Jacdac to your devices. Schematics, footprints, libraries, firmware - all open source."
                imageColumns={6}
                centered={false}
                buttonText="Device Development Kit"
                buttonUrl="/ddk/"
                buttonVariant="link"
                image={
                    <StaticImage
                        src="./pcbfootprint.png"
                        alt="PCB connector footprint"
                    />
                }
            />

            <CenterGrid
                subtitle="Discover the benefits of Jacdac"
                description="Jacdac devices send packets over a bus--each device advertises itself and its set of services."
            />

            <CarouselGrid>
                <Grid item xs={12} sm={6}>
                    <FeatureItem
                        startImage={<DirectionsBusIcon fontSize="large" />}
                        description="Bus topology"
                        caption="Jacdac packets are sent among devices on the Jacdac bus and also over WebUSB, providing connectivity to web-based tooling."
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FeatureItem
                        startImage={<PlaylistAddCheckIcon fontSize="large" />}
                        description="Device discovery and service advertisement"
                        caption="Devices use the control service to advertize their presence and any services they support."
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FeatureItem
                        startImage={<FindReplaceIcon fontSize="large" />}
                        description="Standardized service abstraction"
                        caption="Services allow devices with different hardware, but the same functionality, to replace one another - no need to recompile user applications."
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FeatureItem
                        startImage={<SubscriptionsIcon fontSize="large" />}
                        description="Full stack from 8-bit MCU to web development"
                        caption="Single Wire Serial connects MCUs to each other using UART; a packet-based protocol sits above this layer."
                    />
                </Grid>
            </CarouselGrid>
        </Grid>
    )
}
