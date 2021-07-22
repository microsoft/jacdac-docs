import React, { useContext } from "react"

import { Card, CardContent, CardHeader, Grid } from "@material-ui/core"
import { IconButton } from "gatsby-theme-material-ui"
import DeleteIcon from "@material-ui/icons/Delete"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import Trend from "./Trend"
import FieldDataSet from "./FieldDataSet"
import ServiceManagerContext from "./ServiceManagerContext"

export default function ClassDataSetGrid(props: {
    label: string
    tables: FieldDataSet[]
    handleDeleteTable?: (table: FieldDataSet) => void
}) {
    const { label, tables, handleDeleteTable } = props
    const { fileStorage } = useContext(ServiceManagerContext)

    const handleDownload = (table: FieldDataSet) => () => {
        const sep = ","
        const csv = table.toCSV(sep)
        fileStorage.saveText(`${table.name}.csv`, csv)
    }
    const handleDelete = (table: FieldDataSet) => () => handleDeleteTable(table)

    return (
        <Grid container spacing={2}>
            <Card>
                <CardHeader
                    subheader={label + `, ${tables.length} sample(s)`}
                />
                <CardContent>
                    <Grid container spacing={1}>
                        {tables.map(table => (
                            <Grid item key={`result` + table.id}>
                                <Trend dataSet={table} height={8} mini={true} />
                                {handleDeleteTable && (
                                    <IconButton onClick={handleDelete(table)}>
                                        <DeleteIcon />
                                    </IconButton>
                                )}
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}
