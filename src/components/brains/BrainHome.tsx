import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    Typography,
} from "@mui/material"
import React, { useContext } from "react"
import DeviceIconFromProductIdentifier from "../devices/DeviceIconFromProductIdentifier"
import { BrainDevice } from "./braindom"
import useChange from "../../jacdac/useChange"
import BrainConnectedButton from "./BrainConnectedButton"
import BrainManagerContext from "./BrainManagerContext"
import GridHeader from "../ui/GridHeader"
import BrainLiveConnectionButton from "./BrainLiveConnectionButton"
import { shortDeviceId } from "../../../jacdac-ts/src/jacdac"

function BrainCard(props: { brain: BrainDevice }) {
    const { brain } = props
    const { productId } = useChange(brain, _ => _.meta)
    const { deviceId } = brain
    const name = useChange(brain, _ => _.name)

    return (
        <Card>
            <CardHeader
                title={shortDeviceId(deviceId)}
                avatar={
                    <DeviceIconFromProductIdentifier
                        productIdentifier={productId}
                        avatar={true}
                        size="small"
                    />
                }
                action={
                    <>
                        <BrainLiveConnectionButton brain={brain} />
                        <BrainConnectedButton brain={brain} />
                    </>
                }
            />
            <CardContent>
                <Typography variant="subtitle1">{name}</Typography>
                <Typography variant="caption">{deviceId}</Typography>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    )
}

export default function BrainHome() {
    const { brainManager } = useContext(BrainManagerContext)
    const brains = useChange(brainManager, _ => _?.devices())
    return (
        <Grid container spacing={2}>
            <GridHeader title="Devices" />
            {brains?.map(brain => (
                <Grid item key={brain.id}>
                    <BrainCard brain={brain} />
                </Grid>
            ))}
        </Grid>
    )
}
