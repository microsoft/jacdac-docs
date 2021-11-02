import { CardMedia, CardMediaProps } from "@mui/material"
import createStyles from "@mui/styles/createStyles"
import makeStyles from "@mui/styles/makeStyles"
import React from "react"

const useStyles = makeStyles(() =>
    createStyles({
        media: {
            height: 0,
            paddingTop: "75%", // 4:3
        },
    })
)

export default function CardMediaWithSkeleton(props: CardMediaProps) {
    const { image, src, className, ...others } = props
    const classes = useStyles()
    const hasImage = !!image || !!src
    if (!hasImage) return null

    return (
        <CardMedia
            className={className || classes.media}
            {...others}
            image={image}
            src={src}
        />
    )
}
