import React, { ChangeEvent, useEffect, useState } from "react"
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActions, CardContent, CircularProgress, Collapse, List, ListItem, ListItemText, MenuItem, Select, Typography } from "@material-ui/core";
import { fetchReleaseBinary, useLatestReleases } from "../github";
import { useFirmwareBlob } from "./useFirmwareBlobs";
import GithubRepositoryCardHeader from "../GithubRepositoryCardHeader";
import Alert from "../ui/Alert";
import { Link } from "gatsby-theme-material-ui";
import SelectWithLabel from "../ui/SelectWithLabel";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function FirmwareCard(props: { slug: string }) {
    const { slug } = props
    const { response: releases } = useLatestReleases(slug);
    const [downloading, setDownloading] = useState(false)
    const [error, setError] = useState("")
    const [release, setRelease] = useState(undefined)
    const [firmwaresExpanded, setFirmwaresExpanded] = useState(false)
    const { setFirmwareFile, firmwareBlobs } = useFirmwareBlob(slug)
    const tag = release?.tag_name || "";
    const disabled = downloading;
    const version = firmwareBlobs?.[0].version
    const updateAvailable = !!tag && !!version && tag.slice(1) !== version.substr(0, tag.length - 1)
    const downloadColor = updateAvailable ? "primary" : "inherit"
    const downloadVariant = updateAvailable ? "contained" : "text"

    // initialize with latest release
    useEffect(() => {
        if (releases?.length && !release)
            setRelease(releases[0]);
    }, [releases])

    const handleReleaseChange = (ev: ChangeEvent<{ name?: string; value: unknown; }>) => {
        const v = ev.target.value as string;
        const rel = releases?.find(r => r.tag_name === v);
        setRelease(rel);
    }
    const handleGitHubReleaseDownload = async () => {
        try {
            setError("")
            setDownloading(true)
            const firmware = await fetchReleaseBinary(slug, tag);
            if (firmware)
                setFirmwareFile(tag, firmware)
        }
        finally {
            setDownloading(false)
        }
    }
    const handleClear = async () => {
        try {
            setError("")
            setDownloading(true)
            setFirmwareFile(tag, undefined)
        }
        finally {
            setDownloading(false)
        }
    }

    return <Card>
        <GithubRepositoryCardHeader slug={slug} />
        <CardContent>
            {error && <Alert severity="error">{error}</Alert>}
            {!!firmwareBlobs?.length && <Box mb={1}><Accordion expanded={firmwaresExpanded} onChange={() => setFirmwaresExpanded(!firmwaresExpanded)}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="body2">
                        <code>v{version}</code>
                        <span> ({firmwareBlobs.length} firmwares)</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List dense>
                        {firmwareBlobs.map(blob => <ListItem key={blob.firmwareIdentifier}>
                            <ListItemText primary={blob.name}
                                secondary={<Link to={`/firmwares/0x${blob.firmwareIdentifier.toString(16)}`}>
                                    {`0x${blob.firmwareIdentifier.toString(16)}`}
                                </Link>} />
                        </ListItem>)}
                    </List>
                </AccordionDetails>
            </Accordion></Box>}
            {releases?.length === 0 && <Alert severity="warning">No releases found.</Alert>}
            {!!releases?.length && <SelectWithLabel fullWidth={true} helperText="choose a version" value={tag} onChange={handleReleaseChange}>
                {releases?.map(rel => <MenuItem key={rel.tag_name} value={rel.tag_name}>{rel.tag_name}</MenuItem>)}
            </SelectWithLabel>}
        </CardContent>
        <CardActions>
            {!downloading && release && <Button disabled={downloading} color={downloadColor} variant={downloadVariant} aria-label={`Download last release from ${slug}`} onClick={handleGitHubReleaseDownload}>
                Download
            </Button>}
            {!downloading && firmwareBlobs?.length && <Button disabled={disabled} variant="text" arial-label={"Clear"} onClick={handleClear}>
                Clear
            </Button>}
            {downloading && <CircularProgress disableShrink variant="indeterminate" size="1rem" />}
        </CardActions>
    </Card>
}