import { Grid } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import CarouselGrid from "./CarouselGrid"
import CenterGrid from "./CenterGrid"
import FeatureItem from "./FeatureItem"
import SplitGrid from "./SplitGrid"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import CameraIcon from "@material-ui/icons/Camera"
import TelegramIcon from "@material-ui/icons/Telegram"
export default function Protocol() {
    return (
        <Grid
            container
            spacing={10}
            direction="column"
            alignContent="center"
            alignItems="center"
        >
            <SplitGrid
                title="Software"
                subtitle3="Integrate Jacdac into your web, Node.JS or embedded apps."
                imageColumns={6}
                image={<StaticImage src="./dashboard.png" alt="Dashboard" />}
            />

            <CenterGrid
                subtitle2="Low-Code Hardware."
                description="Jacdac client libraries empower developers without embedded or event coding experience."
            />

            <SplitGrid
                right={true}
                subtitle="JavaScript and TypeScript."
                description="From the browser or Node.JS, use our JavaScript/TypeScript library to interact with physical Jacdac devices. If you can build a web page, you can program Jacdac."
                buttonText="JavaScript library"
                buttonVariant="link"
                buttonUrl="/clients/javascript"
                image={
                    <StaticImage
                        src="./html5.png"
                        alt="A Jacdac humidity module plugging into a Jacdac cable"
                    />
                }
            />

            <SplitGrid
                right={false}
                subtitle="Web USB and Web Bluetooth"
                description="No driver installation needed to access the Jacdac devices from your web applications thanks to Web USB or Web Bluetooth."
                image={
                    <StaticImage src="./bustopology.png" alt="Bus topology" />
                }
            />

            <SplitGrid
                right={true}
                subtitle="MakeCode."
                description="Add Jacdac to your micro:bit V2, Arcade or Maker board."
                buttonText="MakeCode library"
                buttonVariant="link"
                buttonUrl="/clients/makecode"
                image={
                    <StaticImage
                        src="./html5.png"
                        alt="A Jacdac humidity module plugging into a Jacdac cable"
                    />
                }
            />

            <CenterGrid
                subtitle2="Developer tools."
                description="Investigate and diagnose issues through our debugging tools."
            />

            <SplitGrid
                right={true}
                subtitle="Dashboard"
                description="Visualize and interact with physical or simulated devices in the dashboard."
                imageColumns={8}
                image={
                    <StaticImage
                        src="./rotarysim.png"
                        alt="A rotary encoder dashboard"
                    />
                }
                buttonText="Try the dashboard"
                buttonVariant="link"
                buttonUrl="/dashboard/"
            />

            <SplitGrid
                right={false}
                subtitle="Simulators."
                description="Spin up virtual device and services to test your client software. Both physical and simulated devices can interact together."
                imageColumns={8}
                image={
                    <StaticImage
                        src="./dashboardlight.png"
                        alt="A simulated light strip"
                    />
                }
            />

            <SplitGrid
                right={true}
                subtitle="Device Tree"
                description="Inspect devices, services, registers and events in the device tree."
                imageColumns={8}
                image={
                    <StaticImage
                        src="./jacdacsinglergbledmodule.png"
                        alt="A LED module"
                    />
                }
                buttonText="Device Development Kit"
                buttonVariant="link"
                buttonUrl="/"
            />

            <SplitGrid
                right={false}
                subtitle="Packet Console"
                description="Sniff the packet traffic, record and replay traces in the packet console."
                imageColumns={8}
                image={
                    <StaticImage
                        src="./jacdacsinglergbledmodule.png"
                        alt="A LED module"
                    />
                }
                buttonText="Device Development Kit"
                buttonVariant="link"
                buttonUrl="/"
            />

            <CarouselGrid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        startImage={<TelegramIcon fontSize="large" />}
                        description="Web USB."
                        caption="Access physical devices from the browser without driver installation."
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        startImage={<CameraIcon fontSize="large" />}
                        description="React."
                        caption="."
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

            <CenterGrid
                subtitle2="Can I add Jacdac to my web app?"
                description="Absolutely. Add our JavaScript package to your web application and start talking Jacdac!"
                buttonText="Integrate Jacdac into your web app"
                buttonVariant="link"
                buttonUrl="/clients/javascript"
            />
        </Grid>
    )
}
