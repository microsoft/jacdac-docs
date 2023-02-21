import React, { useEffect, useMemo } from "react"
import { Grid } from "@mui/material"
import { parseServiceSpecificationMarkdownToJSON } from "../../../jacdac-ts/jacdac-spec/spectool/jdspec"
import { serviceMap } from "../../../jacdac-ts/src/jdom/spec"
import RandomGenerator from "../RandomGenerator"
import useLocalStorage from "../hooks/useLocalStorage"
import HighlightTextField from "../ui/HighlightTextField"
import ServiceSpecificationSource from "../specification/ServiceSpecificationSource"
import { EmbedSpecsMessage } from "../../../jacdac-ts/src/embed/protocol"

const SERVICE_SPECIFICATION_STORAGE_KEY =
    "jacdac:servicespecificationeditorsource"

export default function ServiceSpecificationEditor() {
    const [source, setSource] = useLocalStorage(
        SERVICE_SPECIFICATION_STORAGE_KEY,
        ""
    )
    const json = useMemo(
        () => parseServiceSpecificationMarkdownToJSON(source, serviceMap()),
        [source]
    )
    const servicePath =
        json &&
        `services/${(
            json.camelName ||
            json.shortId ||
            `0x${json.classIdentifier.toString(16)}`
        ).toLowerCase()}`

    useEffect(() => {
        const services: jdspec.ServiceSpec[] =
            json && !json.errors?.length ? [json] : []
        window.postMessage({
            source: "jacdac",
            type: "specs",
            data: {
                services,
            },
        } as EmbedSpecsMessage)
    }, [json])

    return (
        <Grid spacing={2} container>
            <Grid item xs={12}>
                <HighlightTextField
                    code={source}
                    language={"markdown"}
                    onChange={setSource}
                    annotations={json?.errors}
                    pullRequestTitle={json && `Service: ${json.name}`}
                    pullRequestPath={servicePath}
                    pullRequestDescription={`This pull request defines a new service.`}
                />
            </Grid>
            <Grid item xs={12}>
                <RandomGenerator device={false} />
            </Grid>
            {json && (
                <Grid item xs={12}>
                    <ServiceSpecificationSource
                        serviceSpecification={json}
                        showSpecification={true}
                    />
                </Grid>
            )}
        </Grid>
    )
}
