import { Grid, IconButton, useTheme } from "@mui/material"
import React, { ReactNode } from "react"
import { rgbToHtmlColor } from "../../../jacdac-ts/src/jdom/utils"
import CircleIcon from "@mui/icons-material/Circle"

export const DEFAULT_COLORS = [
    {
        name: "red",
        value: 0xff0000,
    },
    { name: "blue", value: 0x0000ff },
    { name: "green", value: 0x00ff00 },
    { name: "black", value: 0x010101 },
]

export default function ColorButtons(props: {
    children?: ReactNode
    colors?: { name: string; value: number }[]
    color: number
    onColorChange?: (newLedColor: number) => void
}) {
    const theme = useTheme()

    const { children, colors = DEFAULT_COLORS, color, onColorChange } = props
    const handleSetColor = (col: number) => () => onColorChange(col)
    return (
        <Grid container spacing={1}>
            {colors.map(({ name, value }) => {
                const selected = value === color
                const c = rgbToHtmlColor(value)
                const title = value === color ? `${name} (selected)` : name
                return (
                    <Grid key={name} item xs>
                        <IconButton
                            style={{ color: c }}
                            onClick={handleSetColor(value)}
                            aria-label={title}
                            title={title}
                            sx={{
                                backgroundColor: selected
                                    ? c
                                    : theme.palette.grey[300],
                            }}
                        >
                            <CircleIcon />
                        </IconButton>
                    </Grid>
                )
            })}
            {children}
        </Grid>
    )
}
