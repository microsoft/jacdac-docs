import React from "react"
import SettingsManager from "../../components/tools/SettingsManager"

export default function Page() {
    return <>
        <h1>
            Settings Manager
    </h1>
        <p>
            Configure settings in a <Link to="/services/settings/">setting store</Link>.
    </p>
        <SettingsManager />
    </>
}