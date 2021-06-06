import React, { useContext } from "react"
import { Chip, Grid, Tooltip } from "@material-ui/core"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"
import DeviceAvatar from "../devices/DeviceAvatar"
import { serviceSpecificationFromName } from "../../../jacdac-ts/src/jdom/spec"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import {
    addServiceProvider,
    serviceProviderDefinitionFromServiceClass,
} from "../../../jacdac-ts/src/servers/servers"
import RoleManager from "../../../jacdac-ts/src/servers/rolemanager"
import useChange from "../../jacdac/useChange"
import { BlockSvg, FieldVariable, WorkspaceSvg } from "blockly"
import { TWIN_BLOCK } from "./toolbox"
import useServiceServer from "../hooks/useServiceServer"
import CancelIcon from "@material-ui/icons/Cancel"

function RoleChip(props: {
    role: string
    service: JDService
    serviceShortId: string
    workspace: WorkspaceSvg
}) {
    const { role, service, serviceShortId, workspace } = props
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const server = useServiceServer(service)
    const handleRoleClick = () => {
        // spin off simulator
        if (!service) {
            const specification = serviceSpecificationFromName(serviceShortId)
            if (specification)
                addServiceProvider(
                    bus,
                    serviceProviderDefinitionFromServiceClass(
                        specification.classIdentifier
                    )
                )
        }
        // add twin block
        if (workspace) {
            // try to find existing twin block
            let twinBlock = workspace
                .getTopBlocks(false)
                .find(
                    b =>
                        b.type === TWIN_BLOCK &&
                        (
                            b.inputList[0].fieldRow.find(
                                f => f.name === "role"
                            ) as FieldVariable
                        )?.getVariable()?.name === role
                ) as BlockSvg
            if (!twinBlock) {
                twinBlock = workspace.newBlock(TWIN_BLOCK) as BlockSvg
                const variable = workspace.getVariable(role, serviceShortId)
                const field = twinBlock.inputList[0].fieldRow.find(
                    f => f.name === "role"
                ) as FieldVariable
                field.setValue(variable.getId())
                const m = workspace.getMetrics()
                twinBlock.moveBy(m.viewWidth / 2, m.viewHeight / 3)
                twinBlock.initSvg()
                twinBlock.render(false)
            }
            workspace.centerOnBlock(twinBlock.id)
        }
    }

    const handleDelete = () => bus.removeServiceProvider(server.device)
    return (
        <Chip
            label={role}
            variant={service ? "default" : "outlined"}
            avatar={service && <DeviceAvatar device={service.device} />}
            onClick={handleRoleClick}
            onDelete={server ? handleDelete : undefined}
            deleteIcon={
                <Tooltip title="stop simulator">
                    <CancelIcon />
                </Tooltip>
            }
        />
    )
}

export default function VMRoles(props: {
    roleManager: RoleManager
    workspace?: WorkspaceSvg
}) {
    const { roleManager, workspace } = props
    const roles = useChange(roleManager, _ => _?.roles)

    return (
        <>
            {roles?.map(({ role, service, serviceShortId }) => (
                <Grid item key={role}>
                    <RoleChip
                        role={role}
                        service={service}
                        serviceShortId={serviceShortId}
                        workspace={workspace}
                    />
                </Grid>
            ))}
        </>
    )
}
