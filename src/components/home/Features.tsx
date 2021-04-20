import React, { ReactNode } from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import { Button } from "gatsby-theme-material-ui"

interface FeatureProps {
    title: string
    image: ReactNode
}

function Feature(props: FeatureProps) {
    const { title, image } = props
    return (
        <Grid item>
            <Grid container spacing={1}>
                <Grid item sm={6}>
                    <Typography variant="h3">{title}</Typography>
                </Grid>
                <Grid item>{image}</Grid>
            </Grid>
        </Grid>
    )
}

export function Features() {
    const features = [
        {
            title: "Bus topology",
            image: <span>this is an image</span>,
        },
    ]
    return (
        <Box py={3}>
            <Grid
                container
                spacing={2}
                alignContent="center"
                alignItems="center"
            >
                {features.map(feature => (
                    <Feature key={feature.title} {...feature} />
                ))}
            </Grid>
        </Box>
    )
}
