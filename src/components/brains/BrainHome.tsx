import { Grid } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import CarouselGrid from "../home/CarouselGrid"
import CenterGrid from "../home/CenterGrid"
import FeatureItem from "../home/FeatureItem"
import SplitGrid from "../home/SplitGrid"
import DarkModeContext from "../ui/DarkModeContext"
import { Link } from "gatsby-theme-material-ui"

export default function BrainHome() {
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
                title={"Low Code Things"}
                subtitle3="Connect and code electronics. Instantly."
                imageColumns={6}
                image={
                    <Link
                        underline="none"
                        to="/devices/kittenbot/jacdacstarterkitawithjacdaptorformicrobitv2v10/"
                    >
                        <StaticImage
                            src="../home/kita.jpg"
                            alt="KittenBot Jacdac Starter Kit A with Jacdaptor for micro:bit V2 v1.0"
                        />
                    </Link>
                }
            />

            <SplitGrid
                right={false}
                subtitle="Low Hardware"
                description="Plug and play sensors and actuators together to create custom hardware solutions."
                image={
                    <Link underline="none" to="/devices/">
                        <StaticImage
                            src="../home/connected.jpg"
                            alt="A micro:bit V2 connected to various modules from KittenBot."
                        />
                    </Link>
                }
                buttonText="Device catalog"
                buttonVariant="link"
                buttonUrl="/devices/"
            />

            <SplitGrid
                right={true}
                subtitle="Low Code"
                description="Citizen developer friendly drag and drop structured editor compiled to tiny embedded virtual machine."
                buttonText="Low code programming"
                buttonVariant="link"
                buttonUrl="/clients/"
                image={
                    <StaticImage
                        src="../home/makecode.png"
                        alt="A screenshot of MakeCode blocks"
                    />
                }
            />

            <SplitGrid
                right={false}
                subtitle="Live Debugging"
                description="Visualize, debug, sniff, track, record, replay, update... from your browser"
                buttonText="Get productive with Jacdac"
                buttonVariant="link"
                buttonUrl="/tools/"
                image={<StaticImage src="./devicetree.png" alt="Device tree" />}
            />

            <SplitGrid
                right={true}
                subtitle="Enclosable and mountable"
                description="PCB form factor design system with connected grid-aligned mounting holes to accelerate enclosure fabrication in 3D printing and laser cutting."
                imageColumns={6}
                image={
                    <Link underline="none" to="/ddk/design/ec30/">
                        <StaticImage
                            src="./breadboard.jpg"
                            alt="A blurry image of the EC30 grid system device"
                        />
                    </Link>
                }
                buttonText="Schematics"
                buttonVariant="link"
                buttonUrl="/ddk/design/ec30/"
            />
        </Grid>
    )
}
