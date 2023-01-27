import React from "react"
import Dashboard from "../dashboard/Dashboard"

export default function DeviceScriptDevToolsVisualStudioCode() {
    return (
        <Dashboard
            showAvatar={true}
            showHeader={true}
            showConnect={false}
            showStartSimulators={true}
            showStartRoleSimulators={true}
            showDeviceProxyAlert={true}
        />
    )
}
