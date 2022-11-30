import { Chip, Grid } from "@mui/material"
import React from "react"
import { SRV_DEVICE_SCRIPT_MANAGER } from "../../../jacdac-ts/jacdac-spec/dist/specconstants"
import useServices from "../hooks/useServices"
import DeviceScriptManagerChip from "./DeviceScriptManagerChip"
import useDeviceScript from "./DeviceScriptContext"
import { toHex } from "../../../jacdac-ts/src/jdom/utils"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import { prettySize } from "../../../jacdac-ts/src/jdom/pretty"
import PendingIcon from "@mui/icons-material/Pending"

function CopyBytecodeButton() {
    const { compiled, compilePending } = useDeviceScript()
    const { success, binary } = compiled || {}
    const handleCopy = async () => {
        if (!binary) return
        const c = toHex(binary)
        await navigator.clipboard.writeText(c)
    }
    const label = compilePending
        ? "......"
        : success
        ? prettySize(binary.length)
        : "errors"
    return (
        <Chip
            icon={
                compilePending ? (
                    <PendingIcon />
                ) : success ? (
                    <CheckIcon />
                ) : (
                    <CloseIcon />
                )
            }
            onClick={handleCopy}
            label={label}
            disabled={compilePending}
            title="copy bytecode to clipboard"
        />
    )
}

export default function DeviceScriptManagerChipItems() {
    const { manager, setManager } = useDeviceScript()
    const services = useServices({ serviceClass: SRV_DEVICE_SCRIPT_MANAGER })
    const handleSetSelected = service => () => setManager(service)

    return (
        <>
            <Grid item>
                <CopyBytecodeButton />
            </Grid>
            {services.map(service => (
                <Grid item key={service.id}>
                    <DeviceScriptManagerChip
                        service={service}
                        selected={service === manager}
                        setSelected={handleSetSelected(service)}
                    />
                </Grid>
            ))}
        </>
    )
}
