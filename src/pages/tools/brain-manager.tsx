import React from "react"
import ApiKeyAccordion from "../../components/ApiKeyAccordion"
import useBrainManagerApiKey from "../../components/brains/useBrainManagerApiKey"

export const frontmatter = {
    title: "Brain Manager",
    description: "Manage brains.",
}

import CoreHead from "../../components/shell/Head"
export const Head = props => <CoreHead {...props} {...frontmatter} />

export default function Page() {
    const [apiToken, setApiToken] = useBrainManagerApiKey()
    return (
        <>
            <h1>Brain Manager</h1>
            <ApiKeyAccordion apiKey={apiToken} setApiKey={setApiToken}>
                Enter your brain management API key.
            </ApiKeyAccordion>
        </>
    )
}
