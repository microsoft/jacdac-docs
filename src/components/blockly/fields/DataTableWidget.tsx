import React, { useContext } from "react"
import WorkspaceContext from "../WorkspaceContext"
import useBlockData from "../useBlockData"
import { createStyles, makeStyles } from "@material-ui/core"
import { TABLE_HEIGHT, TABLE_WIDTH } from "../toolbox"
import { PointerBoundary } from "./PointerBoundary"

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            background: "#fff",
            color: "#000",
            borderRadius: "0.25rem",
            width: `calc(${TABLE_WIDTH}px - 0.25rem)`,
            height: `calc(${TABLE_HEIGHT}px - 0.25rem)`,
            overflow: "auto",
        },
        table: {
            margin: 0,
            fontSize: "0.8rem",
            lineHeight: "1rem",

            "& th, td": {
                backgroundClip: "padding-box",
                "scroll-snap-align": "start",
            },
            "& th": {
                position: "sticky",
                top: 0,
                background: "white",
            },
            "& td": {
                borderColor: "#ccc",
                borderRightStyle: "solid 1px",
            },
        },
    })
)

export function DataTableWidget() {
    const { sourceBlock } = useContext(WorkspaceContext)
    const { data } = useBlockData<{ id?: string } & unknown>(sourceBlock)
    const classes = useStyles()

    if (!data?.length) return null

    const columns = Object.keys(data[0] || {})

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderCell = (v: any) =>
        typeof v === "boolean" ? (v ? "true" : "false") : v + ""

    return (
        <PointerBoundary className={classes.root}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        {columns.map(c => (
                            <th key={c}>{c}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((r, i) => (
                        <tr key={r.id || i}>
                            {columns.map(c => (
                                <td key={c}>{renderCell(r[c])}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </PointerBoundary>
    )
}
