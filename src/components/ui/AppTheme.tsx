import {
    createTheme,
    responsiveFontSizes,
    DeprecatedThemeOptions,
    ThemeProvider,
    Theme,
    StyledEngineProvider,
    adaptV4Theme,
} from "@mui/material"
import React, { useContext } from "react"
import DarkModeContext from "./DarkModeContext"

declare module "@mui/styles/defaultTheme" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme {}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AppTheme(props: any) {
    const { darkMode } = useContext(DarkModeContext)
    const isDark = darkMode === "dark"
    const themeDef: DeprecatedThemeOptions = {
        palette: {
            primary: {
                main: isDark ? "#56d364" : "#2e7d32",
            },
            secondary: {
                main: "#ffc400",
            },
            contrastThreshold: isDark ? 5.1 : 3.1,
            type: darkMode,
        },
    }
    const rawTheme = createTheme(adaptV4Theme(themeDef))
    const theme = responsiveFontSizes(rawTheme)
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme} {...props} />
        </StyledEngineProvider>
    )
}
