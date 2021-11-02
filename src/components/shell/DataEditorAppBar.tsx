import React, { useContext } from "react"
import { Hidden, Box } from "@mui/material"
import makeStyles from "@mui/styles/makeStyles"
import createStyles from "@mui/styles/createStyles"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
// tslint:disable-next-line: no-submodule-imports
import DarkModeContext from "../ui/DarkModeContext"
import { HideOnScroll } from "../ui/HideOnScroll"
import { Link } from "gatsby-theme-material-ui"

export const FEEDBACK_URL =
    "https://github.com/microsoft/jacdac/discussions/categories/data-editor"

const useStyles = makeStyles(theme =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        appBar: {
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(1),
        },
    })
)

export default function DataEditorAppBar() {
    const classes = useStyles()
    const { darkMode } = useContext(DarkModeContext)
    const appBarColor = darkMode === "dark" ? "inherit" : undefined

    return (
        <Box displayPrint="none">
            <HideOnScroll>
                <AppBar
                    position="fixed"
                    color={appBarColor}
                    className={classes.appBar}
                >
                    <Toolbar>
                        <Hidden implementation="css" smDown={true}>
                            <Typography component="h1" variant="h6">
                                <Link
                                    style={{
                                        color: "white",
                                    }}
                                    to="/editors/data/"
                                >
                                    Data Science Editor (Experimental)
                                </Link>
                            </Typography>
                        </Hidden>
                        <div className={classes.grow} />
                        <Link
                            className={classes.menuButton}
                            aria-label="Learn about the data editor"
                            title="Learn about the data editor"
                            color="inherit"
                            to="/editors/data/about"
                        >
                            About
                        </Link>
                        <Link
                            className={classes.menuButton}
                            aria-label="Send feedback in our forums"
                            title="Send feedback in our forums"
                            color="inherit"
                            href={FEEDBACK_URL}
                        >
                            Feedback
                        </Link>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </Box>
    )
}
