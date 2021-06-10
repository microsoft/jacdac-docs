import React, {
    MutableRefObject,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react"
import { useBlocklyWorkspace } from "react-blockly"
import { WorkspaceSvg } from "blockly"
import Theme from "@blockly/theme-modern"
import DarkTheme from "@blockly/theme-dark"
import BlocklyModalDialogs from "../blockly/BlocklyModalDialogs"
import { domToJSON, WorkspaceJSON } from "../blockly/jsongenerator"
import DarkModeContext from "../ui/DarkModeContext"
import AppContext from "../AppContext"
import { createStyles, makeStyles } from "@material-ui/core"
import clsx from "clsx"
import useBlocklyEvents from "../blockly/useBlocklyEvents"
import useBlocklyPlugins from "../blockly/useBlocklyPlugins"
import { withPrefix } from "gatsby"
import useDataToolbox from "./useDataToolbox"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        editor: {
            height: "calc(100vh - 10rem)",
            "& .blocklyTreeLabel": {
                fontFamily: theme.typography.fontFamily,
            },
            "& .blocklyText": {
                fontWeight: `normal !important`,
                fontFamily: `${theme.typography.fontFamily} !important`,
            },
        },
    })
)

export default function DSBlockEditor() {
    return null
}
