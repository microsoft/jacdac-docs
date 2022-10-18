import React from "react"
import ApiKeyAccordion from "../../components/ApiKeyAccordion"
import { useBrainManager } from "../../components/brains/BrainManagerContext"

export const frontmatter = {
    title: "Brain Manager",
    description: "Manage brains.",
}

import CoreHead from "../../components/shell/Head"
export const Head = props => <CoreHead {...props} {...frontmatter} />

export default function Page() {
    const { token, setToken } = useBrainManager()
    return (
        <>
            <h1>Brain Manager</h1>
            <ApiKeyAccordion apiKey={token} setApiKey={setToken}>
                Enter your brain management API key.
            </ApiKeyAccordion>
        </>
    )
}
