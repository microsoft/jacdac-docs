import React, { useState } from "react"
import {
    Grid,
    MenuItem,
    TextField
} from "@material-ui/core"
import { JDService } from "../../../../jacdac-ts/src/jdom/service"
import GridHeader from "../../../components/ui/GridHeader"
import { humanify } from "../../../../jacdac-ts/jacdac-spec/spectool/jdspec"
import SelectWithLabel from "../../../components/ui/SelectWithLabel"
import { Button } from "gatsby-theme-material-ui"

export enum LogicDescriptorType {
    Event,
    Threshold,
}

export enum LogicDescriptorOperator {
    EqualTo,
    GreaterThan,
    LessThan,
}

export interface LogicDescriptor {
    /**
     * Should either be event or threshold
     */
    type: LogicDescriptorType

    /**
     * packet field/event id
     */
    trigger: string|number

    /**
     * N/A when type == event,
     */
    threshold?: number

    /**
     * Operator
     */
    operator?: LogicDescriptorOperator
}

export function ThresholdConfigurator(props: {
    onSave: (logic: LogicDescriptor) => void
    thresholdRegister: jdspec.PacketInfo
    selectedService: JDService
}) {
    const { onSave, thresholdRegister, selectedService } = props

    const progOpts = ["equal to", "greater than", "less than"]

    const [when, setWhen] = useState("")
    const [is, setIs] = useState("")
    const [sensorValue, setSensorValue] = useState("")

    const handleButtonClick = () => {
        const whenVal = when.split(".")[-1]
        const isEnum = progOpts.findIndex((val) =>{return is == val});
        onSave({
            operator:isEnum,
            threshold: Number.parseInt(sensorValue),
            trigger:whenVal,
            type:LogicDescriptorType.Threshold
        })
    }
    const handleChangeWhen = (ev: React.ChangeEvent<{ value: unknown }>) => {
        setWhen(ev.target.value as string)
    }

    const handleChangeIs = (ev: React.ChangeEvent<{ value: unknown }>) => {
        setIs(ev.target.value as string)
    }

    const handleChangeSensorValue = (
        ev: React.ChangeEvent<{ value: unknown }>
    ) => {
        setSensorValue(ev.target.value as string)
    }

    return (
        <>
            <GridHeader title="Define your logic" />
            <Grid item xs={12}>
                <SelectWithLabel
                    label={"When: "}
                    fullWidth={true}
                    value={when}
                    onChange={handleChangeWhen}
                >
                    {thresholdRegister.fields.map(field => (
                        <MenuItem
                            key={field.name}
                            value={`${humanify(selectedService.name)}.${
                                field.name
                            }`}
                        >
                            {`${humanify(selectedService.name)}.${field.name}`}
                        </MenuItem>
                    ))}
                </SelectWithLabel>
            </Grid>
            <Grid item xs={12}>
                <SelectWithLabel
                    label={"Is: "}
                    fullWidth={true}
                    value={is}
                    onChange={handleChangeIs}
                >
                    {progOpts.map(opt => (
                        <MenuItem key={opt} value={opt}>
                            {opt}
                        </MenuItem>
                    ))}
                </SelectWithLabel>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label={`${humanify(selectedService.name)} value`}
                    value={sensorValue}
                    onChange={handleChangeSensorValue}
                ></TextField>
            </Grid>
            <Grid item xs={12}>
            <Button
                variant="contained"
                color="primary"
                disabled={!when || !is || !sensorValue}
                onClick={handleButtonClick}
            >
                Save
            </Button>
            </Grid>
            
        </>
    )
}