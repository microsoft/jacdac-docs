import React from "react"
import makeStyles from "@mui/styles/makeStyles"
// tslint:disable-next-line: no-submodule-imports
import Table from "@mui/material/Table"
// tslint:disable-next-line: no-submodule-imports
import TableBody from "@mui/material/TableBody"
// tslint:disable-next-line: no-submodule-imports
import TableCell from "@mui/material/TableCell"
// tslint:disable-next-line: no-submodule-imports
import TableContainer from "@mui/material/TableContainer"
// tslint:disable-next-line: no-submodule-imports
import TableHead from "@mui/material/TableHead"
// tslint:disable-next-line: no-submodule-imports
import TableRow from "@mui/material/TableRow"
// tslint:disable-next-line: no-submodule-imports
import Paper from "@mui/material/Paper"
import { DataSet } from "./DataSet"
import { prettyDuration } from "../../jacdac-ts/src/jdom/pretty"

const useStyles = makeStyles({
    table: {
        minWidth: "10rem",
    },
})

export default function DataSetTable(props: {
    dataSet: DataSet
    maxRows?: number
    minRows?: number
    className?: string
}) {
    const { dataSet, maxRows, minRows, className } = props
    const { headers, startTimestamp } = dataSet
    const classes = useStyles()

    const data = dataSet.rows.slice(maxRows !== undefined ? -maxRows : 0)
    while (minRows !== undefined && data.length < minRows) data.push(undefined)

    return (
        <TableContainer className={className} component={Paper}>
            <Table
                className={classes.table}
                aria-label="simple table"
                size="small"
            >
                <TableHead>
                    <TableRow>
                        <TableCell align="right" key="time">
                            Time
                        </TableCell>
                        {headers.map(header => (
                            <TableCell align="right" key={`header` + header}>
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={`row` + index}>
                            <TableCell align="right" key="timestamp">
                                {row
                                    ? prettyDuration(
                                          row.timestamp - startTimestamp
                                      )
                                    : "_"}
                            </TableCell>
                            {row
                                ? row.data.map((v, i) => (
                                      <TableCell key={"cell" + i} align="right">
                                          {v}
                                      </TableCell>
                                  ))
                                : headers.map((h, i) => (
                                      <TableCell key={"cell" + i} align="right">
                                          _
                                      </TableCell>
                                  ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
