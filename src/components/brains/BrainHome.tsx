import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    Typography,
} from "@mui/material"
import React, { lazy, useContext, useState, MouseEvent } from "react"
import DeviceIconFromProductIdentifier from "../devices/DeviceIconFromProductIdentifier"
import { BrainDevice, BrainScript } from "./braindom"
import useChange from "../../jacdac/useChange"
import BrainConnectedButton from "./BrainConnectedButton"
import BrainManagerContext from "./BrainManagerContext"
import GridHeader from "../ui/GridHeader"
import BrainLiveConnectionButton from "./BrainLiveConnectionButton"
import { shortDeviceId } from "../../../jacdac-ts/src/jacdac"
import CmdButton from "../CmdButton"
import RefreshIcon from "@mui/icons-material/Refresh"
import ArticleIcon from "@mui/icons-material/Article"
import Suspense from "../ui/Suspense"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import DeleteIcon from "@mui/icons-material/Delete"
import { navigate } from "gatsby"
import FileOpenIcon from "@mui/icons-material/FileOpen"
const ConfirmDialog = lazy(() => import("../shell/ConfirmDialog"))

function BrainScriptCard(props: { script: BrainScript }) {
    const { script } = props
    const { scriptId } = script
    const { setScriptId } = useContext(BrainManagerContext)
    const name = useChange(script, _ => _.name)
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false)
    const handleDelete = async () => await script.delete()
    const handleOpenDelete = (ev: MouseEvent<HTMLButtonElement>) => {
        ev.stopPropagation()
        ev.preventDefault()
        setConfirmDeleteOpen(true)
    }
    const handleOpen = () => {
        setScriptId(scriptId)
        navigate("/editors/jacscript")
    }

    return (
        <Card>
            <CardHeader avatar={<ArticleIcon />} />
            <CardContent>
                <Typography variant="subtitle1">{name}</Typography>
                <Typography variant="caption">{scriptId}</Typography>
            </CardContent>
            <CardActions>
                <IconButtonWithTooltip title="open" onClick={handleOpen}>
                    <FileOpenIcon color="action" />
                </IconButtonWithTooltip>
                <IconButtonWithTooltip
                    title="delete"
                    onClick={handleOpenDelete}
                >
                    <DeleteIcon />
                </IconButtonWithTooltip>
            </CardActions>
            <Suspense>
                <ConfirmDialog
                    title="Delete Script?"
                    message="Are you sure you want to remove this script? There is no undo."
                    onConfirm={handleDelete}
                    open={confirmDeleteOpen}
                    setOpen={setConfirmDeleteOpen}
                    variant="delete"
                />
            </Suspense>
        </Card>
    )
}

function BrainDeviceCard(props: { brain: BrainDevice }) {
    const { brain } = props
    const { productId } = useChange(brain, _ => _.meta)
    const { deviceId } = brain
    const name = useChange(brain, _ => _.name)
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false)

    const handleOpenDelete = () => setConfirmDeleteOpen(true)
    const handleDelete = async () => {
        await brain.delete()
    }

    return (
        <Card>
            <CardHeader
                title={shortDeviceId(deviceId)}
                avatar={
                    <DeviceIconFromProductIdentifier
                        productIdentifier={productId}
                        avatar={true}
                    />
                }
                action={<BrainConnectedButton brain={brain} />}
            />
            <CardContent>
                <Typography variant="subtitle1">{name}</Typography>
                <Typography variant="caption">{deviceId}</Typography>
            </CardContent>
            <CardActions>
                <BrainLiveConnectionButton brain={brain} />
                <IconButtonWithTooltip
                    title="delete"
                    onClick={handleOpenDelete}
                >
                    <DeleteIcon />
                </IconButtonWithTooltip>
            </CardActions>
            <CardActions></CardActions>
            <Suspense>
                <ConfirmDialog
                    title="Delete Device?"
                    message="Are you sure you want to remove this device? There is no undo."
                    onConfirm={handleDelete}
                    open={confirmDeleteOpen}
                    setOpen={setConfirmDeleteOpen}
                    variant="delete"
                />
            </Suspense>
        </Card>
    )
}

function BrainScriptGridItems() {
    const { brainManager } = useContext(BrainManagerContext)
    const scripts = useChange(brainManager, _ => _?.scripts())

    const handleRefresh = () => brainManager?.refreshScripts()
    return (
        <>
            <GridHeader
                title="Scripts"
                action={
                    <CmdButton
                        onClick={handleRefresh}
                        icon={<RefreshIcon />}
                        disabled={!brainManager}
                    />
                }
            />
            {scripts?.map(script => (
                <Grid item key={script.id}>
                    <BrainScriptCard script={script} />
                </Grid>
            ))}
        </>
    )
}

function BrainDeviceGridItems() {
    const { brainManager } = useContext(BrainManagerContext)
    const brains = useChange(brainManager, _ => _?.devices())

    const handleRefresh = () => brainManager?.refreshDevices()
    return (
        <>
            <GridHeader
                title="Devices"
                action={
                    <CmdButton
                        onClick={handleRefresh}
                        icon={<RefreshIcon />}
                        disabled={!brainManager}
                    />
                }
            />
            {brains?.map(brain => (
                <Grid item key={brain.id}>
                    <BrainDeviceCard brain={brain} />
                </Grid>
            ))}
        </>
    )
}

export default function BrainHome() {
    const { brainManager } = useContext(BrainManagerContext)
    if (!brainManager) return null
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="subtitle2">
                    connected to{" "}
                    <a href={brainManager.apiRoot}>{brainManager.apiRoot}</a>
                </Typography>
            </Grid>
            <BrainScriptGridItems />
            <BrainDeviceGridItems />
        </Grid>
    )
}
