import { Grid, TextField } from "@material-ui/core"
import React, { ChangeEvent, useState } from "react"
import useLocalStorage from "../../components/hooks/useLocalStorage"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import { DTDLNode, DTDLSchema } from "../../../jacdac-ts/src/azure-iot/dtdl"
import { useId } from "react-use-id-hook"
import { Button, Link } from "gatsby-theme-material-ui"
import ApiKeyAccordion from "../../components/ApiKeyAccordion"
import { useSecret } from "../../components/hooks/useSecret"
import Alert from "../../components/ui/Alert"
import {
    serviceSpecificationsWithDTDL,
    serviceSpecificationToDTDL,
    toDTMI,
} from "../../../jacdac-ts/src/azure-iot/dtdlspec"
import useMounted from "../../components/hooks/useMounted"

const AZURE_IOT_CENTRAL_DOMAIN = "azureiotcentraldomain"
const AZURE_IOT_CENTRAL_API_KEY = "azureiotcentraliotkey"
const AZURE_IOT_API_VERSION = "?api-version=1.0"

function ApiKeyManager() {
    const [domain] = useLocalStorage<string>(AZURE_IOT_CENTRAL_DOMAIN)
    const validateKey = async (key: string) => {
        const res = await fetch(
            `${domain}/api/deviceTemplates?api-version=1.0`,
            {
                headers: {
                    authorization: key,
                },
            }
        )
        return res
    }
    return (
        <ApiKeyAccordion
            apiName={AZURE_IOT_CENTRAL_API_KEY}
            title="API token"
            validateKey={validateKey}
            defaultExpanded={true}
        >
            Open <strong>Administration</strong>,{" "}
            <strong>
                {domain ? (
                    <Link target="_blank" href={`${domain}admin/tokens`}>
                        API tokens
                    </Link>
                ) : (
                    "API tokens"
                )}
            </strong>
            , create a new Token and copy the value here.
        </ApiKeyAccordion>
    )
}

export default function AzureDeviceTemplateDesigner() {
    const domainId = useId()
    const [domain, setDomain] = useLocalStorage<string>(
        AZURE_IOT_CENTRAL_DOMAIN,
        ""
    )
    const { value: apiToken } = useSecret(AZURE_IOT_CENTRAL_API_KEY)
    const [working, setWorking] = useState(false)
    const [error, setError] = useState("")
    const [output, setOutput] = useState("")
    const mounted = useMounted()

    const handleDomainChange = (ev: ChangeEvent<HTMLInputElement>) =>
        setDomain(ev.target.value)

    const apiPutTemplate = async (dtdl: DTDLNode) => {
        const dtmi = dtdl["@id"]
        const path = `deviceTemplates/${dtmi}`
        const url = `${domain}api/${path}${AZURE_IOT_API_VERSION}`
        const options: RequestInit = {
            method: "PUT",
            headers: {
                authorization: apiToken,
                Accept: "application/json",
            },
            body: JSON.stringify(dtdl),
        }
        if (
            options.method === "POST" ||
            options.method === "PUT" ||
            options.method === "PATCH"
        )
            options.headers["Content-Type"] = "application/json"
        const res = await fetch(url, options)
        const status = res.status
        const success = status === 200
        const response = await res.json()

        if (mounted()) {
            setOutput(
                `${output}\n${dtmi} upload ${
                    success ? "success" : "error"
                } (${status}) `
            )
        }

        return {
            status,
            success,
            response,
        }
    }

    const handleUpload = async () => {
        const specifications = serviceSpecificationsWithDTDL()
        try {
            setWorking(true)
            setError("")
            setOutput("")

            // upload device gateway
            apiPutTemplate({
                "@id": toDTMI(["device"]),
                "@type": "Interface",
                contents: [
                    {
                        "@id": toDTMI(["sensor"]),
                        "@type": ["Relationship", "GatewayDevice"],
                        displayName: "sensor",
                        name: "sensor",
                        target: [],
                    },
                ],
                displayName: "power-device",
                "@context": [
                    "dtmi:iotcentral:context;2",
                    "dtmi:dtdl:context;2",
                ],
            } as DTDLSchema)

            // upload services
            for (const spec of specifications) {
                const dtdl = serviceSpecificationToDTDL(spec)
                await apiPutTemplate(dtdl)
            }
        } catch (e) {
            if (mounted()) {
                setError(e.message)
                console.debug(e)
            }
        } finally {
            if (mounted()) setWorking(false)
        }
    }

    return (
        <>
            <h1>Azure Device Template Importer</h1>
            <p>
                This page can import the{" "}
                <Link href="https://github.com/Azure/opendigitaltwins-dtdl/">
                    device twin
                </Link>{" "}
                template used in Azure IoT Central.
            </p>
            <Grid container direction="row" spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        id={domainId}
                        value={domain}
                        fullWidth={true}
                        variant="outlined"
                        onChange={handleDomainChange}
                        helperText="Azure IoT Central domain"
                        placeholder="https://.....azureiotcentral.com/"
                    />
                </Grid>
                <Grid item xs={12}>
                    <ApiKeyManager />
                </Grid>
                {error && (
                    <Grid item xs={12}>
                        <Alert severity="error">{error}</Alert>
                    </Grid>
                )}
                <Grid item xs={12}>
                    <Button
                        variant="outlined"
                        size="small"
                        disabled={working || !domain || !apiToken}
                        onClick={handleUpload}
                        title="Import the device template into your Azure IoT Central application (requires domain and API token)."
                    >
                        Upload template into your Azure IoT Central application
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <pre>{output}</pre>
                </Grid>
            </Grid>
        </>
    )
}
