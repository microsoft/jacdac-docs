import React from "react"
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
// tslint:disable-next-line: no-submodule-imports match-default-export-name

import MBDataSet from "../MBDataSet"
import MBModel from "../MBModel"

export default function ModelSummary(props: {
    reactStyle: any
    dataset: MBDataSet
    model: MBModel
}) {
    const { dataset, model } = props
    const classes = props.reactStyle

    const [expanded, setExpanded] = React.useState<string | false>(false)
    const handleExpandedSummaryChange =
        (panel: string) =>
        (event: React.ChangeEvent<unknown>, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false)
        }

    return (
        <Accordion
            expanded={expanded === "modelSummary"}
            onChange={handleExpandedSummaryChange("modelSummary")}
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div>
                    {expanded == "modelSummary" ? (
                        <h2> Summary </h2>
                    ) : (
                        <span>
                            Classes: {model.labels.join(", ")} <br />
                            Training Status: {model.status} <br />
                        </span>
                    )}
                </div>
            </AccordionSummary>
            <AccordionDetails>
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
                                        <TableCell>Layer</TableCell>
                                        <TableCell align="right">
                                            Shape
                                        </TableCell>
                                        <TableCell align="right">
                                            # of Params
                                        </TableCell>
                                        <TableCell align="right">
                                            # of Bytes (%)
                                        </TableCell>
                                        <TableCell align="right">
                                            # of Cycles (%)
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key="input">
                                        <TableCell component="th" scope="row">
                                            INPUT
                                        </TableCell>
                                        <TableCell align="right">
                                            [{model.inputShape.join(", ")}]
                                        </TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                    {model.modelStats.layers.map(layer => (
                                        <TableRow key={layer.name}>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                {layer.name}
                                            </TableCell>
                                            <TableCell align="right">
                                                [{layer.outputShape.join(", ")}]
                                            </TableCell>
                                            <TableCell align="right">
                                                {layer.weightBytes / 4}
                                            </TableCell>
                                            <TableCell align="right">
                                                {layer.weightBytes +
                                                    layer.codeBytes}{" "}
                                                (
                                                {(
                                                    ((layer.weightBytes +
                                                        layer.codeBytes) *
                                                        100) /
                                                    model.modelStats.total
                                                        .weightBytes
                                                ).toPrecision(3)}
                                                %)
                                            </TableCell>
                                            <TableCell align="right">
                                                {layer.optimizedCycles} (
                                                {(
                                                    (layer.optimizedCycles *
                                                        100) /
                                                    model.modelStats.total
                                                        .optimizedCycles
                                                ).toPrecision(3)}
                                                %)
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell>TOTAL</TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right">
                                            {model.modelStats.layers
                                                .map(layer => {
                                                    return layer.weightBytes
                                                })
                                                .reduce((total, current) => {
                                                    return total + current
                                                }) / 4}
                                        </TableCell>
                                        <TableCell align="right">
                                            {model.modelStats.total
                                                .weightBytes +
                                                model.modelStats.total
                                                    .codeBytes}
                                            <br />(
                                            {(
                                                (model.modelStats.total
                                                    .weightBytes +
                                                    model.modelStats.total
                                                        .codeBytes -
                                                    model.modelStats.layers
                                                        .map(layer => {
                                                            return (
                                                                layer.weightBytes +
                                                                layer.codeBytes
                                                            )
                                                        })
                                                        .reduce(
                                                            (
                                                                total,
                                                                current
                                                            ) => {
                                                                return (
                                                                    total +
                                                                    current
                                                                )
                                                            }
                                                        )) /
                                                1000
                                            ).toPrecision(2)}
                                            KB overhead)
                                        </TableCell>
                                        <TableCell align="right">
                                            {
                                                model.modelStats.total
                                                    .optimizedCycles
                                            }{" "}
                                            <br />(
                                            {(
                                                model.modelStats.total
                                                    .optimizedCycles / 64000
                                            ).toPrecision(2)}
                                            ms @ 64MHz)
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        )}
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}
