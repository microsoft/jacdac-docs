import React, { ChangeEvent, useContext } from "react"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import ConsoleContext, { Methods } from "./ConsoleContext"
import ConsoleImportSourceMapButton from "./ConsoleImportSourceMapButton"
import ConsoleSerialButton from "./ConsoleSerialButton"
import ClearIcon from "@material-ui/icons/Clear"
import { MenuItem, Select, TextField } from "@material-ui/core"

function ClearButton() {
    const { clear } = useContext(ConsoleContext)
    return (
        <IconButtonWithTooltip title="clear" onClick={clear}>
            <ClearIcon />
        </IconButtonWithTooltip>
    )
}

function SearchKeywordField() {
    const { searchKeywords, setSearchKeywords } = useContext(ConsoleContext)
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setSearchKeywords(ev.target.value)
    }
    return (
        <TextField
            style={{ marginTop: "0.25rem" }}
            type="search"
            variant="outlined"
            size="small"
            placeholder="filter"
            title="Enter search keywords"
            value={searchKeywords || ""}
            onChange={handleChange}
        />
    )
}

function FilterSelect() {
    const { filter = [], setFilter } = useContext(ConsoleContext)
    const handleChange = (
        ev: ChangeEvent<{ name?: string; value: unknown }>
    ) => {
        const value = ev.target.value as Methods
        const newFilter = filter.slice(0)
        const i = newFilter.indexOf(value)
        if (i > -1) newFilter.splice(i, 1)
        else newFilter.push(value)
        setFilter(newFilter)
    }
    const value = "Level"
    return (
        <Select onChange={handleChange} value={value}>
            <MenuItem value="debug">Verbose</MenuItem>
            <MenuItem value="info">Info</MenuItem>
            <MenuItem value="warning">Warnings</MenuItem>
            <MenuItem value="error">Errors</MenuItem>
        </Select>
    )
}

export default function ConsoleToolbar() {
    const { sourceMap } = useContext(ConsoleContext)
    return (
        <>
            <ConsoleSerialButton />
            <ClearButton />
            <SearchKeywordField />
            <FilterSelect />
            <ConsoleImportSourceMapButton />
            {!!sourceMap && "source map loaded"}
        </>
    )
}
