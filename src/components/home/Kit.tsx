import { Grid } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import CarouselGrid from "./CarouselGrid"
import CenterGrid from "./CenterGrid"
import FeatureItem from "./FeatureItem"

export default function Kit() {
    return (
        <Grid
            container
            spacing={10}
            direction="column"
            alignContent="center"
            alignItems="center"
        >
            <CenterGrid
                title="Hardware Kit"
                subtitle3="Start experimenting with Jacdac and the Hardware module kit."
            />
            <CarouselGrid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        startImage={
                            <StaticImage
                                src="./kit/opentopside.jpg"
                                alt="Hardware kit box opened with contents on a table"
                            />
                        }
                        subtitle2="Unbox"
                        description="Power up the micro:bit and plug the cables and modules!"
                        buttonText="Unbox your kit"
                        buttonUrl="/overview/kit/unbox"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        startImage={
                            <StaticImage
                                src="./kit/dashboard.jpg"
                                alt="Jacdac devices connected to a computer with a dashboard"
                            />
                        }
                        subtitle2="Explore"
                        description="Use the dashboard to interact with modules in the browser."
                        buttonText="Explore the dashboard"
                        buttonUrl="/dashboard"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        startImage={
                            <StaticImage
                                src="./kit/makecode.jpg"
                                alt="Block code to swipe a servo"
                            />
                        }
                        subtitle2="Build"
                        description="Code Jacdac into your micro:bit V2."
                        buttonText="Build with MakeCode"
                        buttonUrl="/clients/makecode"
                    />
                </Grid>
            </CarouselGrid>

            <CenterGrid
                subtitle2="Is there an update available?"
                description="Jacdac modules can be updated from this web site."
                buttonText="Check for firmware updates"
                buttonVariant="link"
                buttonUrl="/tools/updater/"
            />

            <CenterGrid
                subtitle2="Can I add Jacdac to my app?"
                description="Absolutely! Use our client software to integrate into your apps."
                buttonText="Integrate Jacdac into your apps"
                buttonVariant="link"
                buttonUrl="/clients/"
            />
        </Grid>
    )
}
