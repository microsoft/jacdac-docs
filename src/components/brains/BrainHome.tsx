import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    MenuItem,
    SelectChangeEvent,
    Typography,
} from "@mui/material"
import React, { lazy, useContext, useState, MouseEvent, useEffect } from "react"
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
import SelectWithLabel from "../ui/SelectWithLabel"
const ConfirmDialog = lazy(() => import("../shell/ConfirmDialog"))

function BrainScriptCard(props: { script: BrainScript }) {
    const { script } = props
    const { scriptId } = script
    const { setScriptId } = useContext(BrainManagerContext)
    const name = useChange(script, _ => _.name)
    const version = useChange(script, _ => _.version)
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
            <CardActionArea onClick={handleOpen}>
                <CardHeader
                    avatar={<ArticleIcon />}
                    action={
                        <IconButtonWithTooltip
                            title="delete"
                            onClick={handleOpenDelete}
                        >
                            <DeleteIcon />
                        </IconButtonWithTooltip>
                    }
                />
                <CardContent>
                    <Typography variant="subtitle1">
                        {name}{" "}
                        <Typography component="span" variant="caption">
                            v{version}
                        </Typography>
                    </Typography>
                </CardContent>
            </CardActionArea>
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

function BrainDeviceScriptSelect(props: { brain: BrainDevice }) {
    const { brain } = props
    const { brainManager } = useContext(BrainManagerContext)
    const scriptId = useChange(brain, _ => _?.scriptId) || ""
    const scripts = useChange(brainManager, _ => _?.scripts())
    const [currentScriptId, setCurrentScriptId] = useState(scriptId)

    const handleScriptChange = (ev: SelectChangeEvent<string>) => {
        const newId = ev.target.value
        setCurrentScriptId(newId)
    }
    const handleDeploy = async () => {
        await brain.updateScript(currentScriptId)
    }

    // refresh from cloud
    useEffect(() => setCurrentScriptId(scriptId), [scriptId])

    return (
        <Grid container spacing={1}>
            <Grid item xs>
                <SelectWithLabel
                    label={`Script${currentScriptId !== scriptId ? "*" : ""}`}
                    value={currentScriptId}
                    fullWidth={true}
                    size="small"
                    onChange={handleScriptChange}
                >
                    {scripts.map(script => (
                        <MenuItem key={script.id} value={script.scriptId}>
                            {script.name}
                        </MenuItem>
                    ))}
                </SelectWithLabel>
            </Grid>
            <Grid item>
                <CmdButton variant="outlined" onClick={handleDeploy}>
                    Deploy
                </CmdButton>
            </Grid>
        </Grid>
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
                    <>
                        <BrainLiveConnectionButton brain={brain} />
                        <BrainConnectedButton brain={brain} />
                        {productId && (
                            <DeviceIconFromProductIdentifier
                                productIdentifier={productId}
                                avatar={true}
                            />
                        )}
                    </>
                }
                action={
                    <IconButtonWithTooltip
                        title="delete"
                        onClick={handleOpenDelete}
                    >
                        <DeleteIcon />
                    </IconButtonWithTooltip>
                }
            />
            <CardContent>
                <Typography variant="subtitle1">{name}</Typography>
                <Typography variant="caption">{deviceId}</Typography>
            </CardContent>
            <CardActions>
                <BrainDeviceScriptSelect brain={brain} />
            </CardActions>
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
                <Grid item key={brain.id} xs={12} sm={6}>
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
                    <a href={`https://${brainManager.apiRoot}/swagger/`}>
                        {brainManager.apiRoot}
                    </a>
                </Typography>
            </Grid>
            <BrainScriptGridItems />
            <BrainDeviceGridItems />
        </Grid>
    )
}
