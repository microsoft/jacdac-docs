import React, { useContext } from "react"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import ConsoleContext from "./ConsoleContext"
import ConsoleImportSourceMapButton from "./ConsoleImportSourceMapButton"
import ConsoleSerialButton from "./ConsoleSerialButton"
import ClearIcon from "@material-ui/icons/Clear"

function ClearButton() {
    const { clear } = useContext(ConsoleContext)
    return (
        <IconButtonWithTooltip title="clear" onClick={clear}>
            <ClearIcon />
        </IconButtonWithTooltip>
    )
}

export default function ConsoleToolbar() {
    return (
        <>
            <ConsoleSerialButton />
            <ConsoleImportSourceMapButton />
            <ClearButton />
        </>
    )
}
