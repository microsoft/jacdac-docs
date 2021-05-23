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
                subtitle3="Integrate Jacdac into your (web) applications."
                imageColumns={6}
                image={
                    <StaticImage
                        src="./pcbfootprint.png"
                        alt="PCB connector footprint"
                    />
                }
            />

            <CenterGrid
                subtitle="JavaScript and TypeScript."
                description="From the browser or Node.JS, use our JavaScript/TypeScript library to interact with physical Jacdac devices."
                buttonText="JavaScript library"
                buttonVariant="link"
                buttonUrl="/clients/javascript"
                image={
                    <StaticImage
                        src="./rhtempvertical.png"
                        alt="A Jacdac humidity module plugging into a Jacdac cable"
                    />
                }
            />

            <SplitGrid
                right={false}
                subtitle="Web USB, Web Bluetooth, ..."
                description="No driver installation needed to access the Jacdac devices from your web applications thanks to Web USB or Web Bluetooth."
                image={
                    <StaticImage src="./bustopology.png" alt="Bus topology" />
                }
            />

            <SplitGrid
                right={true}
                subtitle="React support"
                description="Our evented library is designed to integrate with React, Vue, and other UI frameworks."
                imageColumns={8}
                image={
                    <StaticImage
                        src="./jacdacsinglergbledmodule.png"
                        alt="A LED module"
                    />
                }
                buttonText="Device Development Kit"
                buttonVariant="link"
                buttonUrl="https://github.com/microsoft/jacdac-ts"
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
