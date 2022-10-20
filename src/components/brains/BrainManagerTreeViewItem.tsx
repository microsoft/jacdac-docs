import React, { useContext } from "react"
import { JDomTreeViewProps } from "../tools/JDomTreeViewItems"
import StyledTreeItem, { StyledTreeViewItemProps } from "../ui/StyledTreeItem"
import CloudQueueIcon from "@mui/icons-material/CloudQueue"
import CodeIcon from "@mui/icons-material/Code"
import { prettySize, shortDeviceId } from "../../../jacdac-ts/src/jdom/pretty"
import { DEVICE_NODE_NAME } from "../../../jacdac-ts/src/jdom/constants"
import BrainManagerContext from "./BrainManagerContext"
import RefreshIcon from "@mui/icons-material/Refresh"
import CmdButton from "../CmdButton"
import useChange from "../../jacdac/useChange"
import { BrainDevice, BrainScript } from "./braindom"

export default function BrainManagerTreeItem(
    props: StyledTreeViewItemProps & JDomTreeViewProps
) {
    const nodeId = "brain-manager"
    const name = "brains"
    const description = "Manage remote brains and programs"
    const { brainManager } = useContext(BrainManagerContext)

    const handleRefresh = async () => {
        await brainManager?.refresh()
    }

    return (
        <StyledTreeItem
            nodeId={nodeId}
            labelText={name}
            labelCaption={description}
            icon={<CloudQueueIcon fontSize="small" />}
            actions={
                <CmdButton
                    title="refresh"
                    size="small"
                    icon={<RefreshIcon />}
                    onClick={handleRefresh}
                />
            }
        >
            <BrainProgramsTreeItem {...props} />
            <BrainDevicesTreeItem {...props} />
        </StyledTreeItem>
    )
}

function BrainProgramsTreeItem(
    props: StyledTreeViewItemProps & JDomTreeViewProps
) {
    const { brainManager } = useContext(BrainManagerContext)
    const scripts = useChange(brainManager, _ => _?.scripts)
    const nodeId = "brain-manager-programs"
    const name = "programs"
    return (
        <StyledTreeItem
            nodeId={nodeId}
            labelText={name}
            icon={<CodeIcon fontSize="small" />}
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
    const { id, name, source } = script
    const { scriptId: programId, setScriptId: setProgramId } =
        useContext(BrainManagerContext)
    const nodeId = `brain-manager-programs-${id}`
    const description = prettySize(source?.length || 0)
    const current = id === programId

    const handleClick = () => {
        setProgramId(id)
    }

    return (
        <StyledTreeItem
            nodeId={nodeId}
            labelText={name}
            labelCaption={description}
            sx={{ fontWeight: current ? "bold" : undefined }}
            onClick={handleClick}
        ></StyledTreeItem>
    )
}

function BrainDevicesTreeItem(
    props: StyledTreeViewItemProps & JDomTreeViewProps
) {
    const { brainManager } = useContext(BrainManagerContext)
    const devices = useChange(brainManager, _ => _?.devices)
    const nodeId = "brain-manager-devices"
    const name = "devices"
    return (
        <StyledTreeItem
            nodeId={nodeId}
            labelText={name}
            kind={DEVICE_NODE_NAME}
        >
            {devices?.map(device => (
                <BrainDeviceTreeItem
                    key={device.id}
                    device={device}
                    {...props}
                />
            ))}
        </StyledTreeItem>
    )
}

function BrainDeviceTreeItem(
    props: { device: BrainDevice } & StyledTreeViewItemProps & JDomTreeViewProps
) {
    const { device } = props
    const { id } = device
    const { deviceId, setDeviceId } = useContext(BrainManagerContext)
    const nodeId = `brain-manager-devices-${id}`
    const name = useChange(device, _ => _.name)
    const current = id === deviceId

    const handleClick = () => {
        setDeviceId(id)
    }

    return (
        <StyledTreeItem
            nodeId={nodeId}
            labelText={name}
            labelCaption={id}
            sx={{ fontWeight: current ? "bold" : undefined }}
            onClick={handleClick}
        ></StyledTreeItem>
    )
}
