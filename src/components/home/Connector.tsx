/* eslint-disable jsx-a11y/media-has-caption */
import { Grid } from "@mui/material"
import { withPrefix } from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import CarouselGrid from "./CarouselGrid"
import CenterGrid from "./CenterGrid"
import FeatureItem from "./FeatureItem"
import SplitGrid from "./SplitGrid"

export default function Connector() {
    return (
        <Grid
            container
            spacing={10}
            direction="column"
            alignContent="center"
            alignItems="center"
            style={{ marginTop: 0 }}
        >
            <SplitGrid
                style={{ paddingTop: 0 }}
                title="Connector"
                description="Jacdac uses 3-pin custom-designed connector to quickly interface development boards with sensors, relays and more."
                // buttonText="Device Development Kit"
                // buttonUrl="/ddk/"
                imageColumns={6}
                image={
                    <StaticImage
                    src="./mechanicalclickconnector.png"
                    alt="A split view of the cable going into the PCB"
                />
                //<StaticImage src="./tangled.png" alt="Tangled cable" />
                }
            />

            <SplitGrid
                right={true}
                subtitle="Reversible."
                description="There's no need to worry about accidentally swapping the Power and Data wires. The PCB connector is engineered to be completely reversible, so you won't even have to think about the right orientation as you plug the cable."
                imageColumns={6}
                image={
                    <StaticImage
                        src="./pcbfootprint.png"
                        alt="PCB connector footprint"
                    />
                }
            />

            <SplitGrid
                right={false}
                subtitle="How does it work?"
                description="The PCB edge connector is made of 3 gold fingers on both sides of the PCB, with two slots on the outer edges for mechanical hooking. The cable connector is made of 3 electrical contact pins and 2 mechanical hooks."
                imageColumns={8}
                image={
                    <StaticImage
                        src="./rhtemp.png"
                        alt="A Jacdac humidity module plugging into a Jacdac cable"
                    />
                }
            />
        </Grid>
    )
}
