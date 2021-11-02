import { Grid } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import CenterGrid from "./CenterGrid"
import SplitGrid from "./SplitGrid"
import CarouselGrid from "./CarouselGrid"
import FeatureItem from "./FeatureItem"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import AccountTreeIcon from "@mui/icons-material/AccountTree"
import JacdacIcon from "../icons/JacdacIcon"
import HistoryIcon from "@mui/icons-material/History"
import HTML5Image from "./HTML5Image"

export default function Software() {
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
                imageColumns={4}
                image={<HTML5Image />}
            />

            <SplitGrid
                right={false}
                subtitle="No drivers needed"
                subtitle3="WebUSB, WebSerial, WebBluetooth"
                description="Access physical devices with builtin browser features, no installation needed."
                image={
                    <StaticImage src="./bustopology.png" alt="Bus topology" />
                }
            />

            <SplitGrid
                right={true}
                subtitle="MakeCode"
                description="Add Jacdac to your micro:bit V2, Arcade or Maker board."
                buttonText="MakeCode library"
                buttonVariant="link"
                buttonUrl="/clients/makecode"
                image={
                    <StaticImage
                        src="./makecode.png"
                        alt="Block code to swipe a servo"
                    />
                }
            />

            <SplitGrid
                right={false}
                subtitle="Node-RED"
                description="Add Jacdac to your Node-RED flows."
                buttonText="Jacdac node"
                buttonVariant="link"
                buttonUrl="https://flows.nodered.org/node/node-red-contrib-jacdac"
                image={
                    <StaticImage
                        src="./nodered.png"
                        alt="Jacdac nodes for Node-RED"
                    />
                }
            />

            <SplitGrid
                right={true}
                subtitle="p5*js"
                description="Physical Creative Coding."
                buttonText="p5.jacdac library"
                buttonVariant="link"
                buttonUrl="/clients/p5js"
                image={
                    <StaticImage
                        src="./p5js.jpg"
                        alt="A p5js program that controls color with potentiometers"
                    />
                }
            />

            <CenterGrid
                subtitle2="Developer tools."
                description="Investigate and diagnose issues through our debugging tools."
                buttonText="More tools..."
                buttonVariant="link"
                buttonUrl="/tools/"
            />

            <CarouselGrid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        startImage={<JacdacIcon fontSize="large" />}
                        description="Dashboard"
                        caption="Visualize and interact with physical or simulated devices in the dashboard."
                        buttonText="Try the dashboard"
                        buttonVariant="link"
                        buttonUrl="/dashboard/"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        startImage={<AccountTreeIcon fontSize="large" />}
                        description="Device Tree"
                        caption="Inspect devices, services, registers and events in the device tree."
                        buttonText="Open Device Tree"
                        buttonVariant="link"
                        buttonUrl="/software/device-tree"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        startImage={<HistoryIcon fontSize="large" />}
                        description="Packet console"
                        caption="Inspect every packet moving on the bus, save and reload traces from the web or your logic analyzer."
                        buttonText="Show packets"
                        buttonVariant="link"
                        buttonUrl="/software/packet-console"
                    />
                </Grid>
            </CarouselGrid>

            <CenterGrid
                subtitle2="Can I add Jacdac to my web app?"
                description="Absolutely! You can embed our dashboard or add our JavaScript package."
                buttonText="Integrate Jacdac into your web app"
                buttonVariant="link"
                buttonUrl="/clients/embed/"
            />
        </Grid>
    )
}

/*


            
*/
