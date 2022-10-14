import React from "react"
import { JDomTreeViewProps } from "../tools/JDomTreeViewItems"
import StyledTreeItem, { StyledTreeViewItemProps } from "../ui/StyledTreeItem"
import {
    BrainDevice,
    BrainProgram,
    useBrainManagerState,
} from "./useBrainManagerState"
import CloudQueueIcon from "@mui/icons-material/CloudQueue"
import CodeIcon from "@mui/icons-material/Code"
import { prettySize, shortDeviceId } from "../../../jacdac-ts/src/jdom/pretty"
import { DEVICE_NODE_NAME } from "../../../jacdac-ts/src/jdom/constants"

export default function BrainManagerTreeItem(
    props: StyledTreeViewItemProps & JDomTreeViewProps
) {
    const nodeId = "brain-manager"
    const name = "brains"
    const description = "Manage remote brains and programs"
    const { programs, devices, connected } = useBrainManagerState()

    return (
        <StyledTreeItem
            nodeId={nodeId}
            labelText={name}
            labelCaption={description}
            icon={<CloudQueueIcon fontSize="small" />}
        >
            <BrainProgramsTreeItem programs={programs} {...props} />
            <BrainDevicesTreeItem devices={devices} {...props} />
        </StyledTreeItem>
    )
}

function BrainProgramsTreeItem(
    props: { programs?: BrainProgram[] } & StyledTreeViewItemProps &
        JDomTreeViewProps
) {
    const { programs } = props
    const nodeId = "brain-manager-programs"
    const name = "programs"
    return (
        <StyledTreeItem
            nodeId={nodeId}
            labelText={name}
            icon={<CodeIcon fontSize="small" />}
        >
            {programs?.map(program => (
                <BrainProgramTreeItem
                    key={program.id}
                    program={program}
                    {...props}
                />
            ))}
        </StyledTreeItem>
    )
}

function BrainProgramTreeItem(
    props: { program: BrainProgram } & StyledTreeViewItemProps &
        JDomTreeViewProps
) {
    const { program } = props
    const { id, name, source } = program
    const nodeId = `brain-manager-programs-${id}`
    const description = prettySize(source.length)
    return (
        <StyledTreeItem
            nodeId={nodeId}
            labelText={name}
            labelCaption={description}
        ></StyledTreeItem>
    )
}

function BrainDevicesTreeItem(
    props: { devices?: BrainDevice[] } & StyledTreeViewItemProps &
        JDomTreeViewProps
) {
    const { devices } = props
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
    const nodeId = `brain-manager-devices-${id}`
    const name = shortDeviceId(id)
    return (
        <StyledTreeItem
            nodeId={nodeId}
            labelText={name}
            labelCaption={id}
        ></StyledTreeItem>
    )
}
