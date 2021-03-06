import React, { ReactNode } from "react"
import { Grid, GridSize } from "@material-ui/core"
import FeatureItem, { FeatureItemProps } from "./FeatureItem"

export default function SplitGrid(
    props: {
        right?: boolean
        image: ReactNode
        imageColumns?: GridSize
        centered?: boolean
    } & FeatureItemProps
) {
    const { right, image, centered, imageColumns = 5, ...others } = props

    const textItem = (
        <Grid item xs>
            <Grid
                container
                spacing={2}
                direction="column"
                alignContent={"flex-start"}
                alignItems={centered ? "center" : "flex-start"}
            >
                <FeatureItem {...others} />
            </Grid>
        </Grid>
    )

    const imageItem = (
        <Grid item xs={12} md={imageColumns}>
            {image}
        </Grid>
    )

    return (
        <Grid item xs={12}>
            <Grid
                container
                direction="row"
                alignContent="flex-start"
                alignItems="flex-start"
                spacing={4}
            >
                {right ? imageItem : textItem}
                {right ? textItem : imageItem}
            </Grid>
        </Grid>
    )
}
