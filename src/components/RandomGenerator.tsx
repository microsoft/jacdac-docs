import React, { useState } from "react"
import { styled } from "@mui/material/styles"
import {
    deviceSpecificationFromProductIdentifier,
    serviceSpecificationFromClassIdentifier,
} from "../../jacdac-ts/src/jdom/spec"
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Input,
} from "@mui/material"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import CheckIcon from "@mui/icons-material/Check"
// tslint:disable-next-line: no-submodule-imports
import Alert from "./ui/Alert"
import { Button } from "gatsby-theme-material-ui"
import { NoSsr } from "@mui/material"
import { useId } from "react-use-id-hook"
import { cryptoRandomUint32 } from "../../jacdac-ts/src/jdom/random"
import { toFullHex } from "../../jacdac-ts/src/jdom/utils"

const PREFIX = "RandomGenerator"

const classes = {
    root: `${PREFIX}-root`,
    title: `${PREFIX}-title`,
}

const StyledNoSsr = styled(NoSsr)({
    [`& .${classes.root}`]: {
        minWidth: 275,
        marginBottom: "1rem",
    },
    [`& .${classes.title}`]: {
        fontSize: 14,
    },
})

function looksRandom(n: number) {
    const s = n.toString(16)
    const h = "0123456789abcdef"
    for (let i = 0; i < h.length; ++i) {
        const hh = h[i]
        if (s.indexOf(hh + hh + hh) >= 0) return false
    }
    if (/f00d|dead|deaf|beef/.test(s)) return false
    return true
}

function genServId() {
    const n = cryptoRandomUint32(1)
    if (n === undefined) return undefined
    return (n[0] & 0xfff_ffff) | 0x1000_0000
}

function genFirmwareId() {
    const n = cryptoRandomUint32(1)
    if (n === undefined) return undefined
    return (n[0] & 0xfff_ffff) | 0x3000_0000
}

export function uniqueServiceId() {
    let id = genServId()
    while (
        id !== undefined &&
        (!looksRandom(id) || serviceSpecificationFromClassIdentifier(id))
    ) {
        id = genServId()
    }
    return id !== undefined && toFullHex([id])
}

export function uniqueDeviceId() {
    const n = cryptoRandomUint32(2)
    return n !== undefined && toFullHex([n[0], n[1]])
}

export function uniqueFirmwareId() {
    let id = genFirmwareId()
    while (
        id !== undefined &&
        (!looksRandom(id) || deviceSpecificationFromProductIdentifier(id))
    ) {
        id = genFirmwareId()
    }
    return id !== undefined && toFullHex([id])
}

export default function RandomGenerator(props: {
    device?: boolean
    firmware?: boolean
}) {
    const { device, firmware } = props
    const labelId = useId()
    const fieldId = useId()

    const [value, setValue] = useState(
        device ? uniqueDeviceId() : uniqueServiceId()
    )
    const [copySuccess, setCopySuccess] = useState(false)

    const handleRegenerate = () => {
        const v = device
            ? uniqueDeviceId()
            : firmware
            ? uniqueFirmwareId()
            : uniqueServiceId()
        setValue(v)
        setCopySuccess(false)
    }
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value)
            setCopySuccess(true)
        } catch (err) {
            setCopySuccess(false)
        }
    }
    const title = device
        ? "Random Device Identifier"
        : firmware
        ? "Random Product Identifier"
        : "Random Service Identifier"
    return (
        <StyledNoSsr>
            <Card className={classes.root}>
                <CardContent>
                    <Typography
                        id={labelId}
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        {title}
                    </Typography>
                    {value !== undefined && (
                        <Typography variant="h5" component="h2">
                            <Input
                                id={fieldId}
                                value={value}
                                readOnly={true}
                                inputProps={{
                                    "aria-labelledby": labelId,
                                }}
                            />
                            {copySuccess && <CheckIcon />}
                        </Typography>
                    )}
                    {value === undefined && (
                        <Alert severity="error">
                            Oops, unable to generate a strong random number.
                        </Alert>
                    )}
                </CardContent>
                <CardActions>
                    <Button
                        aria-label="copy random number to clipboard"
                        size="small"
                        variant="contained"
                        onClick={handleCopy}
                    >
                        Copy
                    </Button>
                    <Button
                        aria-label="regenerate random number"
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={handleRegenerate}
                    >
                        Regenerate
                    </Button>
                </CardActions>
            </Card>
        </StyledNoSsr>
    )
}
