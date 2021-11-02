import { Theme, Tooltip as MaterialTooltip } from "@mui/material"

import withStyles from "@mui/styles/withStyles"

// fix for contrast issue
const Tooltip = withStyles((theme: Theme) => ({
    tooltip: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
    },
}))(MaterialTooltip)

export default Tooltip
