import React, { lazy, ReactNode, useMemo } from "react"
import IDChip from "../IDChip"
import { serviceSpecificationFromClassIdentifier } from "../../../jacdac-ts/src/jdom/spec"
import { AlertTitle, Chip, Divider, Grid, Typography } from "@mui/material"
import useGridBreakpoints from "../useGridBreakpoints"
import Markdown from "../ui/Markdown"
import FirmwareCard from "../firmware/FirmwareCard"
import useDeviceImage from "../devices/useDeviceImage"
import DownloadFirmwareButton from "../ui/DownloadFirmwareButton"
import MemoryIcon from "@mui/icons-material/Memory"
import ChipList from "../ui/ChipList"
import useDeviceSpecifications from "../devices/useDeviceSpecifications"
import { Link } from "gatsby-theme-material-ui"
import {
    arrayify,
    ellipseFirstSentence,
    unique,
    uniqueMap,
} from "../../../jacdac-ts/src/jdom/utils"
import Alert from "../ui/Alert"
import {
    deviceCatalog,
    identifierToUrlPath,
} from "../../../jacdac-ts/src/jdom/catalog"
import DeviceSpecificationCard from "./DeviceSpecificationCard"
import useChange from "../../jacdac/useChange"
import Suspense from "../ui/Suspense"
import MakeCodeProjects from "../makecode/MakeCodeProjects"
import PageLinkList from "../ui/PageLinkList"
import MakeCodeExtensions from "../makecode/MakeCodeExtensions"
import WebShareButton from "../ui/WebShareButton"
import GithubRepositoryList from "../github/GithubRespositoryList"
import { semverCmp } from "../../../jacdac-ts/src/jdom/semver"
import FirmwareFlashInstructions from "../firmware/FirmwareFlashInstructions"
const Enclosure = lazy(() => import("../enclosure/Enclosure"))

const HR_GAP = 4

function DeviceSpecificationList(props: {
    header: ReactNode
    devices: jdspec.DeviceSpec[]
    hideChips?: boolean
}) {
    const { header, devices, hideChips } = props
    const gridBreakpoints = useGridBreakpoints()

    if (!devices?.length) return null

    return (
        <>
            <Divider light={true} />
            {header}
            <Grid sx={{ mb: HR_GAP }} container spacing={2}>
                {devices.map(specification => (
                    <Grid key={specification.id} item {...gridBreakpoints}>
                        <DeviceSpecificationCard
                            specification={specification}
                            size={"catalog"}
                            hideChips={hideChips}
                        />
                    </Grid>
                ))}
            </Grid>{" "}
        </>
    )
}

function storeInfo(url: string) {
    const u = new URL(url)
    const host = u.hostname.replace(/^www\./i, "")
    const infos: Record<string, { name: string }> = {
        "kittenbot.cc": { name: "KittenBot" },
        "aliexpress.com": { name: "AliExpress" },
        "pakronics.com.au": { name: "Pakronics" },
        "kitronik.co.uk": { name: "Kitronik" },
        "keyestudio.com": { name: "KeyStudio" },
        "sparkfun.com": { name: "SparkFun" },
        "makerbit.com": { name: "MakerBit" },
        "category.yahboom.com": { name: "YahBoom" },
        "microbit.org": { name: "MicroBit Educational Foundation" },
        "amazon.com": { name: "Amazon" },
        "forwardedu.com": { name: "Forward Education" },
    }

    return infos[host] || { name: host }
}

export default function DeviceSpecification(props: {
    device: jdspec.DeviceSpec
}) {
    const { device } = props
    const {
        id,
        name,
        description,
        company,
        productIdentifiers,
        repo,
        makeCodeRepo,
        firmwares,
        version,
        designIdentifier,
        hardwareDesign,
        firmwareSource,
        link,
        storeLink,
        connector = "edgeConsumer",
        devices,
        relatedDevices,
        requiredDevices,
        shape,
        tags,
    } = device
    const storeLinks = arrayify(storeLink)
    const services = unique(device.services)
    const specifications = useDeviceSpecifications()
    const imageUrl = useDeviceImage(device, "catalog")
    const deviceSpecs = useChange(
        deviceCatalog,
        _ =>
            devices
                ?.map(id => _.specificationFromIdentifier(id))
                .filter(s => !!s),
        [devices?.join(",")]
    )
    const requiredDeviceSpecs = useChange(
        deviceCatalog,
        _ =>
            requiredDevices
                ?.map(id => _.specificationFromIdentifier(id))
                .filter(s => !!s),
        [requiredDevices?.join(",")]
    )
    const relatedDeviceSpecs = useChange(
        deviceCatalog,
        _ =>
            uniqueMap(
                [
                    ...(_.specifications().filter(
                        s => !!s.storeLink && s.devices?.indexOf(id) > -1
                    ) || []),
                    ...(relatedDevices
                        ?.map(id => _.specificationFromIdentifier(id))
                        .filter(s => !!s) || []),
                ],
                s => s.id,
                s => s
            ),
        [relatedDevices?.join(",")]
    )

    const others = specifications
        .filter(
            spec =>
                spec.id !== device.id &&
                ((designIdentifier &&
                    spec.designIdentifier === designIdentifier) ||
                    (spec.company === device.company &&
                        spec.name === device.name)) &&
                spec.version !== undefined
        )
        ?.sort((l, r) => semverCmp(l.version, r.version))
    const serviceSpecs = services
        .map(serviceSpecificationFromClassIdentifier)
        .filter(sc => !!sc)

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                    <div style={{ position: "relative" }}>
                        <img
                            alt={`device ${name}`}
                            src={imageUrl}
                            loading="lazy"
                        />
                        <WebShareButton
                            style={{
                                top: "1rem",
                                right: "1rem",
                                position: "absolute",
                            }}
                            title={`Jacdac - ${name}`}
                            text={description}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <h2 key="title">
                        {name}
                        {!!version && (
                            <Typography
                                sx={{ ml: 1 }}
                                component="span"
                                variant="subtitle1"
                            >
                                v{version}
                            </Typography>
                        )}
                        <Typography component="div" variant="subtitle1">
                            by{" "}
                            <Link
                                to={`/devices/${identifierToUrlPath(
                                    company
                                ).replace(" ", "-")}/`}
                            >
                                {company}
                            </Link>
                        </Typography>
                    </h2>
                    <Divider sx={{ mb: 2 }} light={true} />
                    {connector === "noConnector" && (
                        <Alert severity="warning">
                            <AlertTitle>
                                No PCB edge connector available.
                            </AlertTitle>
                            This device does <b>not</b> have a Jacdac PCB edge
                            connector. It is programmable as a Jacdac device but
                            it cannot be connected to other devices with a cable
                            without an adapter.
                        </Alert>
                    )}
                    {connector === "edgeIndependent" && (
                        <Alert severity="warning">
                            <AlertTitle>
                                Independently powered PCB edge connector
                                available.
                            </AlertTitle>
                            This device has a Jacdac PCB edge connector without
                            a power connection. It is programmable as a Jacdac
                            device and it can be connected to other devices with
                            a cable, but it will not provide to modules or
                            consume power the Jacdac bus.
                        </Alert>
                    )}
                    {connector === "grove" && (
                        <Alert severity="warning">
                            <AlertTitle>Grove connector.</AlertTitle>
                            This device has a Grove connector and is <b>
                                not
                            </b>{" "}
                            compatible with Jacdac cables.
                        </Alert>
                    )}
                    {connector === "qwiic" && (
                        <Alert severity="warning">
                            <AlertTitle>Qwiic connector.</AlertTitle>
                            This device has a Qwiic connector and is <b>
                                not
                            </b>{" "}
                            compatible with Jacdac cables.
                        </Alert>
                    )}
                    {requiredDeviceSpecs?.map(({ id, name }) => (
                        <Alert mb={1} key={id} severity="warning">
                            <AlertTitle>Requires {name}.</AlertTitle>
                            This {tags?.indexOf("kit") > -1
                                ? "kit"
                                : "device"}{" "}
                            requires a{" "}
                            <Link to={`/devices/${identifierToUrlPath(id)}`}>
                                {name}
                            </Link>{" "}
                            (sold separately).
                        </Alert>
                    ))}
                    {description && <Markdown source={description} />}
                    {link && (
                        <p>
                            Learn more about
                            <Link sx={{ ml: 1 }} href={link}>
                                {name}
                            </Link>
                            .
                        </p>
                    )}
                    {!storeLink?.length && (
                        <Alert severity="info">
                            <AlertTitle>Prototype Hardware</AlertTitle>
                            This device is a prototype <b>not</b> available for
                            purchase.
                        </Alert>
                    )}
                    {!!storeLinks?.length && (
                        <>
                            <h3>Buy now</h3>
                            <p>
                                Here is a list of resellers where you can buy
                                this device.
                            </p>
                            <ul>
                                {storeLinks
                                    .map(link => ({ link, ...storeInfo(link) }))
                                    .map(({ link, name }) => (
                                        <li key={link}>
                                            <Link
                                                key={link}
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {name}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </>
                    )}
                </Grid>
            </Grid>
            {makeCodeRepo?.length && (
                <>
                    <Divider light={true} />
                    <h3 id="makecodeextensions">
                        Required MakeCode Extensions
                    </h3>
                    <p>
                        These MakeCode Extensions are needed to use Jacdac with
                        this device.
                    </p>
                    <GithubRepositoryList
                        repos={makeCodeRepo.map(r => r.slug)}
                        showDescription={true}
                        showDependencies={true}
                        showMakeCodeButton={true}
                    />
                </>
            )}
            {!!services?.length && (
                <>
                    <MakeCodeProjects
                        header={
                            <>
                                <Divider light={true} />
                                <h3 id="makecode">MakeCode Projects</h3>
                            </>
                        }
                        serviceClass={services}
                    />
                    <MakeCodeExtensions
                        header={
                            <>
                                <Divider light={true} />
                                <h3 id="makecodeextensions">
                                    MakeCode Extensions
                                </h3>
                            </>
                        }
                        serviceClass={services}
                    />
                </>
            )}
            <DeviceSpecificationList
                header={<h3 id="kitdevices">Kit Devices</h3>}
                devices={deviceSpecs}
            />
            <DeviceSpecificationList
                header={<h3 id="relateddevices">Related Devices and Kits</h3>}
                devices={relatedDeviceSpecs}
            />
            <Divider light={true} />
            <ChipList>
                {designIdentifier && (
                    <Chip
                        aria-label={`design identifier: ${designIdentifier}`}
                        icon={<MemoryIcon />}
                        size="small"
                        label={designIdentifier}
                    />
                )}
                {productIdentifiers?.map(identifier => (
                    <IDChip
                        key={identifier}
                        id={identifier}
                        filter={`pid:0x${identifier.toString(16)}`}
                    />
                ))}
            </ChipList>
            <PageLinkList
                header={<h3 id="services">Service specifications</h3>}
                nodes={serviceSpecs.map(({ shortId, name, notes }) => ({
                    slug: `/services/${shortId}/`,
                    title: name,
                    description: ellipseFirstSentence(notes["short"]),
                }))}
            />
            {shape && (
                <>
                    <h3 id="pcbformfactor">PCB Form Factor</h3>
                    <p>
                        Use the files below to get started with laser cutting
                        and 3D modelling for this device.
                    </p>
                    <Suspense>
                        <Enclosure shape={shape} showSave={true} />
                    </Suspense>
                </>
            )}
            {!!firmwares && (
                <>
                    <h3 id="firmwarebinaries">Firmware binaries</h3>
                    <ul>
                        {firmwares.map(({ name, url }) => (
                            <li key={url}>
                                <DownloadFirmwareButton
                                    url={url}
                                    name={name}
                                    variant="outlined"
                                >
                                    {name}
                                </DownloadFirmwareButton>
                            </li>
                        ))}
                    </ul>
                    <ol>
                        <li>Download the firmware file.</li>
                        <FirmwareFlashInstructions specification={device} />
                    </ol>
                </>
            )}
            {repo && (
                <>
                    <h3 id="firmwarerepository">Firmware repository</h3>
                    <FirmwareCard slug={repo} />
                </>
            )}
            {(hardwareDesign || firmwareSource) && (
                <>
                    <h3>Sources</h3>
                    <ul>
                        {firmwareSource && (
                            <li>
                                <Link target="_blank" href={firmwareSource}>
                                    Firmware code
                                </Link>
                            </li>
                        )}
                        {hardwareDesign && (
                            <li>
                                <Link target="_blank" href={hardwareDesign}>
                                    Hardware design
                                </Link>
                            </li>
                        )}
                    </ul>
                </>
            )}
            <DeviceSpecificationList
                header={<h3>Other hardware revisions</h3>}
                devices={others}
            />
        </>
    )
}
