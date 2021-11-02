import { Grid, List, Switch } from "@mui/material"
import React, { useContext } from "react"
import { RoleManagerReg } from "../../../jacdac-ts/src/jdom/constants"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import { useId } from "react-use-id-hook"
import { useRegisterBoolValue } from "../../jacdac/useRegisterValue"
import LoadingProgress from "../ui/LoadingProgress"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"
import useChange from "../../jacdac/useChange"
import RoleListItem from "../services/RoleListItem"
import useRegister from "../hooks/useRegister"

export default function DashboardRoleManager(props: DashboardServiceProps) {
    const { service, expanded } = props
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const autoBindRegister = useRegister(service, RoleManagerReg.AutoBind)
    const autoBind = useRegisterBoolValue(autoBindRegister, props)
    const handleChecked = async (ev, checked: boolean) => {
        await autoBindRegister.sendSetBoolAsync(checked, true)
    }
    const switchId = useId()
    const labelId = useId()
    const roleManager = useChange(bus, _ => _.roleManager)
    const roles = useChange(roleManager, _ => _?.roles)
    if (autoBind === undefined) return <LoadingProgress />

    return (
        <>
            {roles && (
                <Grid item xs={12}>
                    <Grid container spacing={1} direction="row">
                        {roles.map(role => (
                            <Grid key={role.name} item xs>
                                <RoleListItem role={role} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            )}
            {expanded && (
                <Grid item xs={12}>
                    <Switch
                        id={switchId}
                        checked={autoBind}
                        onChange={handleChecked}
                    />
                    <label id={labelId} htmlFor={switchId}>
                        auto assign roles
                    </label>
                </Grid>
            )}
        </>
    )
}
