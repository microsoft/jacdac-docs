import { useMediaQuery, useTheme } from "@material-ui/core"
import { MEDIUM_BREAKPOINT, MOBILE_BREAKPOINT } from "../layout"

export default function useMediaQueries() {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down(MOBILE_BREAKPOINT))
    const medium = useMediaQuery(theme.breakpoints.down(MEDIUM_BREAKPOINT))

    return { mobile, medium }
}
