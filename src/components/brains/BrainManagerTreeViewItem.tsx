import React, { MouseEvent, useContext, useState } from "react"
import { JDomTreeViewProps } from "../tools/JDomTreeViewItems"
import StyledTreeItem, { StyledTreeViewItemProps } from "../ui/StyledTreeItem"
import CloudQueueIcon from "@mui/icons-material/CloudQueue"
import { DEVICE_NODE_NAME } from "../../../jacdac-ts/src/jdom/constants"
import BrainManagerContext from "./BrainManagerContext"
import RefreshIcon from "@mui/icons-material/Refresh"
import CmdButton from "../CmdButton"
import useChange from "../../jacdac/useChange"
import { BrainDevice, BrainScript } from "./braindom"
import AddIcon from "@mui/icons-material/Add"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import RegisterBrainDeviceDialog from "./RegisterBrainDeviceDialog"
import DeleteIcon from "@mui/icons-material/Delete"
import { navigate } from "gatsby"
import Suspense from "../ui/Suspense"
import ConfirmDialog from "../shell/ConfirmDialog"
import useEffectAsync from "../useEffectAsync"
import DeviceIconFromProductIdentifier from "../devices/DeviceIconFromProductIdentifier"
import BrainLiveConnectionButton from "./BrainLiveConnectionButton"
import SourceIcon from "@mui/icons-material/Source"
import ArticleIcon from "@mui/icons-material/Article"
import BrainConnectedButton from "./BrainConnectedButton"

export default function BrainManagerTreeItem(
    props: StyledTreeViewItemProps & JDomTreeViewProps
) {
    const nodeId = "brain-manager"
    const name = "brains"
    const { brainManager } = useContext(BrainManagerContext)

    const handleRefresh = async () => {
        await brainManager?.refresh()
    }

    useEffectAsync(handleRefresh, [brainManager])

    return (
        <StyledTreeItem
            nodeId={nodeId}
            labelText={name}
            icon={<CloudQueueIcon />}
            actions={
                <CmdButton
                    title="refresh"
                    size="small"
                    icon={<RefreshIcon />}
                    onClick={handleRefresh}
                />
            }
        >
            <BrainScriptsTreeItem {...props} />
            <BrainDevicesTreeItem {...props} />
        </StyledTreeItem>
    )
}

function BrainScriptsTreeItem(
    props: StyledTreeViewItemProps & JDomTreeViewProps
) {
    const { brainManager, setScriptId } = useContext(BrainManagerContext)
    const scripts = useChange(brainManager, _ => _?.scripts())
    const nodeId = "brain-manager-programs"
    const name = "programs"

    const handleNewScript = async () => {
        const scriptId = await brainManager.createScript("new script")
        if (scriptId) {
            setScriptId(scriptId)
            navigate("/editors/jacscript")
        }
    }

    return (
        <StyledTreeItem
            nodeId={nodeId}
            labelText={name}
            icon={<SourceIcon fontSize="small" />}
            actions={
                <CmdButton
                    title="New script"
                    onClick={handleNewScript}
                    icon={<AddIcon fontSize="small" />}
                />
            }
        >
            {scripts?.map(script => (
                <BrainScriptTreeItem
                    key={script.id}
                    script={script}
                    {...props}
                />
            ))}
        </StyledTreeItem>
    )
}

function BrainScriptTreeItem(
    props: { script: BrainScript } & StyledTreeViewItemProps & JDomTreeViewProps
) {
    const { script } = props
    const { scriptId, setScriptId } = useContext(BrainManagerContext)
    const { id } = script
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false)
    const name = useChange(script, _ => _.name)
    const version = useChange(script, _ => _.version)
    const nodeId = `brain-manager-programs-${id}`
    const current = id === scriptId
    const info = `v${version || ""}`

    const handleClick = () => {
        setScriptId(script.scriptId)
        navigate("/editors/jacscript")
    }
    const handleOpen = (ev: MouseEvent<HTMLButtonElement>) => {
        ev.stopPropagation()
        ev.preventDefault()
        setConfirmDeleteOpen(true)
    }
    const handleDelete = async () => await script.delete()

    return (
        <>
            <StyledTreeItem
                nodeId={nodeId}
                labelText={name}
                labelInfo={info}
                sx={{ fontWeight: current ? "bold" : undefined }}
                onClick={handleClick}
                icon={<ArticleIcon fontSize="small" />}
                actions={
                    <IconButtonWithTooltip title="delete" onClick={handleOpen}>
                        <DeleteIcon color="action" fontSize="small" />
                    </IconButtonWithTooltip>
                }
            ></StyledTreeItem>
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
        </>
    )
}

function BrainDevicesTreeItem(
    props: StyledTreeViewItemProps & JDomTreeViewProps
) {
    const { brainManager } = useContext(BrainManagerContext)
    const [open, setOpen] = useState(false)
    const devices = useChange(brainManager, _ => _?.devices())
    const nodeId = "brain-manager-devices"
    const name = "devices"

    const handleDialogOpenToggle = ev => {
        ev.stopPropagation()
        ev.preventDefault()
        setOpen(v => !v)
    }

    return (
        <StyledTreeItem
            nodeId={nodeId}
            labelText={name}
            kind={DEVICE_NODE_NAME}
            actions={
                <IconButtonWithTooltip
                    title="Register device"
                    onClick={handleDialogOpenToggle}
                >
                    <AddIcon fontSize="small" />
                </IconButtonWithTooltip>
            }
        >
            {devices?.map(device => (
                <BrainDeviceTreeItem
                    key={device.id}
                    brain={device}
                    {...props}
                />
            ))}
            <RegisterBrainDeviceDialog open={open} setOpen={setOpen} />
        </StyledTreeItem>
    )
}

function BrainDeviceTreeItem(
    props: { brain: BrainDevice } & StyledTreeViewItemProps & JDomTreeViewProps
) {
    const { brain } = props
    const { id } = brain
    const { brainManager, deviceId, setDeviceId } =
        useContext(BrainManagerContext)
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false)
    const nodeId = `brain-manager-devices-${id}`
    const devId = brain.deviceId
    const productIdentifier = useChange(brain, _ => _?.data.meta?.productId)
    const data = useChange(brain, _ => _.data)
    const { name, lastAct, scriptId, scriptVersion } = data
    const script = brainManager.script(scriptId)
    const current = devId === deviceId
    const caption = scriptId
        ? `${script?.name || scriptId} v${scriptVersion || ""}`
        : `no script`

    const handleClick = () => {
        setDeviceId(id)
    }
    const handleOpenConfirmDelete = () => setConfirmDeleteOpen(true)
    const handleDelete = async () => {
        await brain.delete()
    }

    return (
        <>
            <StyledTreeItem
                nodeId={nodeId}
                labelText={name}
                labelCaption={caption}
                sx={{ fontWeight: current ? "bold" : undefined }}
                onClick={handleClick}
                icon={
                    <DeviceIconFromProductIdentifier
                        size="small"
                        productIdentifier={productIdentifier}
                    />
                }
                actions={
                    <>
                        <BrainLiveConnectionButton brain={brain} />
                        <BrainConnectedButton brain={brain} />
                        <IconButtonWithTooltip
                            title="delete"
                            onClick={handleOpenConfirmDelete}
                        >
                            <DeleteIcon color="action" fontSize="small" />
                        </IconButtonWithTooltip>
                    </>
                }
            >
                <StyledTreeItem
                    nodeId={`${nodeId}-devid`}
                    labelText={`device id`}
                    labelInfo={devId}
                />
                <StyledTreeItem
                    nodeId={`${nodeId}-lastacc`}
                    labelText={`last accessed`}
                    labelInfo={new Date(lastAct).toLocaleString()}
                />
            </StyledTreeItem>
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
        </>
    )
}
