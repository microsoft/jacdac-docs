import { Card, CardActions, CardContent, CardHeader, Grid } from "@material-ui/core";
import { Button, IconButton } from "gatsby-theme-material-ui";
import React, { useContext } from "react";
import { prettyDuration } from "../../jacdac-ts/src/jdom/pretty";
import ServiceManagerContext from "./ServiceManagerContext";
import Trend from "./Trend";
import useGridBreakpoints from './useGridBreakpoints';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import SaveAltIcon from '@material-ui/icons/SaveAlt';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import DeleteIcon from '@material-ui/icons/Delete';
import FieldDataSet from "./FieldDataSet";


export default function ClassDataSetGrid(props: {
    label: string,
    tables: FieldDataSet[],
    handleDeleteTable?: (table: FieldDataSet) => void
}) {
    const { label, tables, handleDeleteTable } = props;
    const { fileStorage } = useContext(ServiceManagerContext)
    const gridBreakpoints = useGridBreakpoints(tables?.length)
    
    const handleDownload = (table: FieldDataSet) => () => {
        const sep = ','
        const csv = table.toCSV(sep)
        fileStorage.saveText(`${table.name}.csv`, csv)
    }
    const handleDelete = (table: FieldDataSet) => () => handleDeleteTable(table)

    return <Grid container spacing={2}>
        <Card>
            <CardHeader
                subheader={label + `, ${tables.length} sample(s)`} />
            <CardContent>
            <Grid container spacing={1}>
            {tables.map((table) =>
               <Grid item key={`result` + table.id}>
                            <Trend dataSet={table} height={8} mini={true} />
                            {handleDeleteTable &&
                                    <IconButton onClick={handleDelete(table)}>
                                        <DeleteIcon />
                                    </IconButton>}
                    </Grid>)}
                </Grid>
            </CardContent>
        </Card>
    </Grid>
}