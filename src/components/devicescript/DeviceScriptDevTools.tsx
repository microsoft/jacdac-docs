import React from "react"
import Dashboard from "../dashboard/Dashboard"

export default function DeviceScriptDevTools() {
    return (
        <Dashboard
            showAvatar={true}
            showHeader={true}
            showConnect={true}
            showStartSimulators={true}
            showStartRoleSimulators={true}
            showDeviceProxyAlert={true}
        />
    )
}
