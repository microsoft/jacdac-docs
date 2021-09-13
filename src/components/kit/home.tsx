import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import CarouselGrid from "../home/CarouselGrid"
import CenterGrid from "../home/CenterGrid"
import FeatureItem from "../home/FeatureItem"
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus"
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck"
import FindReplaceIcon from "@material-ui/icons/FindReplace"
import { Button } from "gatsby-theme-material-ui"

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
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        description="Build projects with minimal effort of both wiring
                    and coding. This kit acts as a bridge to the web
                    browser, providing a flexible way to prototype."
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        description="Build projects with minimal effort of both wiring
                    and coding. This kit acts as a bridge to the web
                    browser, providing a flexible way to prototype."
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FeatureItem
                        description="Build projects with minimal effort of both wiring
                    and coding. This kit acts as a bridge to the web
                    browser, providing a flexible way to prototype."
                    />
                </Grid>
            </CarouselGrid>
        </Grid>
    )
}
