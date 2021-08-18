import React from "react"
import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@material-ui/core"
import MBDataSet from "../MBDataSet"
import MBModel from "../MBModel"

export default function ModelSummary(props: {
    reactStyle: any
    dataset: MBDataSet
    model: MBModel
}) {
    const { dataset, model } = props
    const classes = props.reactStyle

    return (
        <Grid container direction="column" spacing={1}>
            <Grid item xs={12}>
                {dataset.summary.map((line, lineIdx) => {
                    return (
                        <span key={"dataset-summary-" + lineIdx}>
                            {" "}
                            {line} <br />
                        </span>
                    )
                })}
                {model.summary.map((line, lineIdx) => {
                    return (
                        <span
                            style={{ whiteSpace: "pre-wrap" }}
                            key={"model-summary-" + lineIdx}
                        >
                            {line}
                            <br />
                        </span>
                    )
                })}
                {!!model.modelStats && (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Layer Name</TableCell>
                                <TableCell align="right">
                                    Output Shape
                                </TableCell>
                                <TableCell align="right"># of Params</TableCell>
                                <TableCell align="right">
                                    # of Bytes (%)
                                </TableCell>
                                <TableCell align="right">
                                    # of Cycles (%)
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {model.modelStats.layers.map(layer => (
                                <TableRow key={layer.name}>
                                    <TableCell component="th" scope="row">
                                        {layer.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        [{layer.outputShape.join(", ")}]
                                    </TableCell>
                                    <TableCell align="right">
                                        {layer.weightBytes / 4}
                                    </TableCell>
                                    <TableCell align="right">
                                        {layer.weightBytes} (
                                        {(
                                            (layer.weightBytes * 100) /
                                            model.modelStats.total.weightBytes
                                        ).toPrecision(2)}
                                        %)
                                    </TableCell>
                                    <TableCell align="right">
                                        {layer.optimizedCycles} (
                                        {(
                                            (layer.optimizedCycles * 100) /
                                            model.modelStats.total
                                                .optimizedCycles
                                        ).toPrecision(2)}
                                        %)
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </Grid>
        </Grid>
    )
}
