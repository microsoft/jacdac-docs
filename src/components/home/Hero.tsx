import React from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import { Button } from "gatsby-theme-material-ui"

export default function Hero() {
    return (
        <Box py={3}>
            <Grid
                container
                spacing={2}
                direction="column"
                alignContent="center"
                alignItems="center"
            >
                <Grid item sm={6}>
                    <Typography variant="h1">Jacdac</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h2">
                        plug-and-play for microcontrollers
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" to="/dashboard/">
                        Dashboard
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}
