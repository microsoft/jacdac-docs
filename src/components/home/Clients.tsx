import { Grid } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import CenterGrid from "./CenterGrid"
import HTML5Image from "./HTML5Image"
import SplitGrid from "./SplitGrid"

export default function Clients() {
    return (
        <Grid
            container
            spacing={10}
            direction="column"
            alignContent="center"
            alignItems="center"
        >
            <CenterGrid
                title="Client Programming"
                subtitle3="via MakeCode, JavaScript, ..."
                // imageColumns={6}
                // image={<StaticImage src="./dashboard.png" alt="Dashboard" />}
            />

            <SplitGrid
                right={false}
                subtitle="MakeCode"
                description="Code Jacdac using a micro:bit V2, Arcade or Maker board."
                buttonText="Get started with MakeCode"
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
                right={true}
                subtitle="JavaScript and TypeScript"
                description="From the browser or Node.JS, use our JavaScript/TypeScript library to interact with physical Jacdac devices. If you can build a web page, you can program Jacdac."
                buttonText="Get started with JavaScript/TypeScript"
                buttonVariant="link"
                buttonUrl="/clients/javascript"
                imageColumns={4}
                image={<HTML5Image />}
            />

            <SplitGrid
                right={false}
                subtitle="p5*js"
                imageColumns={8}
                description="Physical Creative Coding."
                buttonText="p5.jacdac library"
                buttonVariant="link"
                buttonUrl="/clients/javascript/p5js"
                image={
                    <StaticImage
                        src="./p5js.jpg"
                        alt="A p5js program that controls color with sliders."
                    />
                }
            />

            <SplitGrid
                right={true}
                subtitle="DeviceScript"
                imageColumns={8}
                description="TypeScript for microcontrollers with Visual Studio Code integration."
                buttonText="Get started with DeviceScript"
                buttonVariant="link"
                buttonUrl="/clients/devicescript"
                image={
                    <StaticImage
                        src="./devicescript.png"
                        alt="A DeviceScript program in Visual Studio Code."
                    />
                }
            />

            <SplitGrid
                right={true}
                subtitle="MicroCode"
                imageColumns={8}
                description="Physical computing for young learners on the micro:bit V2."
                buttonText="Try MicroCode"
                buttonVariant="link"
                buttonUrl="/clients/microcode"
                image={
                    <StaticImage
                        src="./microcode.png"
                        alt="A microcode program."
                    />
                }
            />

            <CenterGrid
                subtitle2="More programming options"
                subtitle3="React, CLI, ..."
                buttonText= "Read more"                
                buttonVariant="link"
                buttonUrl= "/clients/more"
            />

        </Grid>
    )
}
