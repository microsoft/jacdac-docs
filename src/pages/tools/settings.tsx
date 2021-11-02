import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { Grid } from "@mui/material"
import { SRV_SETTINGS } from "../../../jacdac-ts/src/jdom/constants"
import ConnectAlert from "../../components/alert/ConnectAlert"
import SettingsCard from "../../components/SettingsCard"
import useServices from "../../components/hooks/useServices"
import useServiceProviderFromServiceClass from "../../components/hooks/useServiceProviderFromServiceClass"
import {
    useLocationSearchParamBoolean,
    useLocationSearchParamString,
} from "../../components/hooks/useLocationSearchParam"

export default function Page() {
    // spin up provider on demand
    useServiceProviderFromServiceClass(SRV_SETTINGS)
    const services = useServices({ serviceClass: SRV_SETTINGS })
    const keyPrefix = useLocationSearchParamString("prefix")
    const autoKey = useLocationSearchParamBoolean("autokey", false)
    const showSecrets = useLocationSearchParamBoolean("secrets", true)

    return (
        <>
            <h1>Devices Settings</h1>
            <p>
                Configure &npsp;<Link to="/services/settings/">settings</Link>{" "}
                services.
            </p>
            <ConnectAlert serviceClass={SRV_SETTINGS} />
            <Grid container spacing={1}>
                {services.map(service => (
                    <Grid key={service.id} item xs={12} lg={6}>
                        <SettingsCard
                            service={service}
                            mutable={true}
                            keyPrefix={keyPrefix}
                            showSecrets={showSecrets}
                            autoKey={autoKey}
                        />
                    </Grid>
                ))}
            </Grid>
            <h2>Advanced</h2>
            <p>
                You can use various URL argument to modify the behavior of this
                page.
            </p>
            <ul>
                <li>
                    <code>prefix=JD</code>, will prefix and filter keys with{" "}
                    <code>JD</code>.
                </li>
                <li>
                    <code>autokey</code>, will automatically generate random
                    keys for entries. Default is false.
                </li>
                <li>
                    <code>secrets=0</code>, disables secrets
                </li>
            </ul>
        </>
    )
}
