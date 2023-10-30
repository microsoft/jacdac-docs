import React, { useContext, useEffect } from "react"
import Dashboard from "../components/dashboard/Dashboard"
import { UIFlags } from "../jacdac/providerbus"

export const frontmatter = {
    title: "Dashboard",
}
import CoreHead from "../components/shell/Head"
import AppContext, { DrawerType } from "../components/AppContext"
export const Head = props => <CoreHead {...props} {...frontmatter} />

export default function Page() {
    const { drawerType, setDrawerType } = useContext(AppContext)
    useEffect(() => {
        if (drawerType === DrawerType.Dashboard) setDrawerType(DrawerType.None)
    }, [])

    return (
        <Dashboard
            showAvatar={true}
            showHeader={true}
            showConnect={UIFlags.connect}
            showStartSimulators={true}
            showStartRoleSimulators={true}
            showDeviceProxyAlert={true}
        />
    )
}
