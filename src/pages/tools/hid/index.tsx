import React, { lazy, useContext, useEffect, useRef, useState } from "react"
import JacdacContext, { JacdacContextProps } from "../../../jacdac/Context"
import {
    Card,
    CardActions,
    CardContent,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Typography,
    MenuItem,
} from "@material-ui/core"
import useChange from "../../../jacdac/useChange"
import { JDService } from "../../../../jacdac-ts/src/jdom/service"
import {
    HidKeyboardModifiers,
    SRV_CONTROL,
    SRV_LOGGER,
    SRV_PROTO_TEST,
    SRV_ROLE_MANAGER,
    SRV_SETTINGS,
    SystemEvent,
} from "../../../../jacdac-ts/src/jdom/constants"
import { JDEvent } from "../../../../jacdac-ts/src/jdom/event"
import KeyboardKeyInput from "../../../components/ui/KeyboardKeyInput"
import IconButtonWithTooltip from "../../../components/ui/IconButtonWithTooltip"
import DeleteIcon from "@material-ui/icons/Delete"
import SettingsClient from "../../../../jacdac-ts/src/jdom/settingsclient"
import useServiceClient from "../../../components/useServiceClient"
import {
    arrayConcatMany,
    clone,
    fromHex,
    toHex,
} from "../../../../jacdac-ts/src/jdom/utils"
import { jdpack, jdunpack } from "../../../../jacdac-ts/src/jdom/pack"
import { randomDeviceId } from "../../../../jacdac-ts/src/jdom/random"
import { JDBus } from "../../../../jacdac-ts/src/jdom/bus"
import useServices from "../../../components/hooks/useServices"
import { Button } from "gatsby-theme-material-ui"
import Alert from "../../../components/ui/Alert"
import GridHeader from "../../../components/ui/GridHeader"
import { humanify } from "../../../../jacdac-ts/jacdac-spec/spectool/jdspec"
import ConnectAlert from "../../../components/alert/ConnectAlert"
import DeviceCardHeader from "../../../components/DeviceCardHeader"
import useGridBreakpoints from "../../../components/useGridBreakpoints"
import Suspense from "../../../components/ui/Suspense"
import useServiceProviderFromServiceClass from "../../../components/hooks/useServiceProviderFromServiceClass"
import AppContext from "../../../components/AppContext"
import { AlertTitle } from "@material-ui/lab"
import { renderKeyboardKey } from "../../../../jacdac-ts/src/servers/hidkeyboardserver"
import SelectWithLabel from "../../../components/ui/SelectWithLabel"
import KeyboardOutlined from "@material-ui/icons/KeyboardOutlined"
import { MouseOutlined } from "@material-ui/icons"
import { MouseInput } from "./mouse"
import {
    ThresholdConfigurator,
    LogicDescriptor,
    LogicDescriptorOperator,
    LogicDescriptorType,
} from "./threshold"

const ImportButton = lazy(() => import("../../../components/ImportButton"))

// all settings keys are prefixed with this string
const PREFIX = "@ke_"
// data layout format (18bytes)
const FORMAT = "b[8] u32 u8 u8 u16 u16"
// data layout types
type FORMAT_TYPE = [Uint8Array, number, number, number, number, number]

interface HIDEvent {
    key?: string
    eventId: string
    selector: number
    modifiers: HidKeyboardModifiers
    deviceId: string
}

function HIDEventToBuffer(event: JDEvent, ev: HIDEvent) {
    const deviceId = fromHex(event.service.device.deviceId)
    const { service, code } = event
    const { serviceClass, serviceIndex } = service
    const { selector, modifiers } = ev
    const payload = jdpack<FORMAT_TYPE>(FORMAT, [
        deviceId,
        serviceClass,
        serviceIndex,
        code,
        selector,
        modifiers,
    ])
    return payload
}

function bufferToHIDEvent(key: string, data: Uint8Array, bus: JDBus): HIDEvent {
    if (data?.length !== 18) return undefined
    const [
        deviceIdBytes,
        serviceClass,
        serviceIndex,
        eventCode,
        selector,
        modifiers,
    ] = jdunpack<FORMAT_TYPE>(data, FORMAT)
    const deviceId = toHex(deviceIdBytes)
    const device = bus.device(deviceId, true)
    const event = device?.service(serviceIndex)?.event(eventCode)

    if (!event || event.service.serviceClass !== serviceClass) return undefined
    return {
        key,
        eventId: event.id,
        selector,
        modifiers,
        deviceId,
    }
}

function SelectHIDEvent(props: { onAdd: (hidEvent: HIDEvent) => void }) {
    const { onAdd } = props
    const [selectedService, setService] = useState<JDService>()
    const [selected, setSelected] = useState("")
    const [selectedDataSource, setSelectedData] = useState("")
    const [selector, setSelector] = useState(0)
    const [modifiers, setModifiers] = useState(HidKeyboardModifiers.None)
    const [inputType, setInputType] = useState("")
    const [valueDefined, setValueDefined] = useState<LogicDescriptor>()
    const [thresholdRegister, setThresholdRegister] =
        useState<jdspec.PacketInfo>()

    const selectOpts = ["event", "threshold"]

    const handleKeyChange = (
        newSelector: number,
        newModifiers: HidKeyboardModifiers
    ) => {
        setSelector(newSelector)
        setModifiers(newModifiers)
    }

    const excludedServices = [
        SRV_CONTROL,
        SRV_PROTO_TEST,
        SRV_ROLE_MANAGER,
        SRV_SETTINGS,
        SRV_LOGGER,
    ]
    const eventFilter = (ev: JDEvent) =>
        ev.code !== SystemEvent.StatusCodeChanged
    const services = useServices({ ignoreSelf: true, specification: true })
        .filter(srv => excludedServices.indexOf(srv.serviceClass) < 0)
        .filter(srv => srv.events.some(eventFilter))

    const handleClickEventKeyboard = (service: JDService) => () => {
        setService(service)
        setInputType("keyboard")
    }
    const handleClickEventMouse = (service: JDService) => () => {
        setService(service)
        setInputType("mouse")
    }
    const disabled = !event || !selector
    const handleAdd = event => onAdd({ eventId: event.id, selector, modifiers })
    const handleChange = (ev: React.ChangeEvent<{ value: unknown }>) => {
        const domEvt = ev.target.value as string
        const evt = selectedService.events.find(el => {
            return domEvt === humanify(el.name)
        })

        setValueDefined({
            trigger: evt?.id,
            type: LogicDescriptorType.Event,
        })

        setSelected(domEvt)
    }

    const handleDataSourceSelect = (
        ev: React.ChangeEvent<{ value: unknown }>
    ) => {
        const tvalue = ev.target.value as string

        if (tvalue === "threshold")
            setThresholdRegister(
                selectedService.specification.packets.find(item => {
                    return item.identifierName === "reading"
                })
            )

        console.log("tvalue", tvalue)
        setSelectedData(tvalue)
    }

    const handleChangeThresholdLogic = (
        ev: React.ChangeEvent<{ value: unknown }>
    ) => {}

    const handleChangeEventLogic = (
        ev: React.ChangeEvent<{ value: unknown }>
    ) => {
        // setValueDefined({
        //     type: LogicDescriptorType.Event,
        //     trigger: ev.target.value,
        // })
    }

    return (
        <Grid container spacing={2}>
            {!services?.length && (
                <Grid item xs={12}>
                    <Alert severity="info">
                        Connect your devices to bind keyboard commands.
                    </Alert>
                </Grid>
            )}
            {services.map(service => (
                <Grid item xs={12} sm={6} lg={4} xl={3} key={service.id}>
                    <Card>
                        <DeviceCardHeader
                            device={service.device}
                            showAvatar={true}
                        />
                        <CardContent>
                            <Typography variant="h4">{service.name}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                onClick={handleClickEventKeyboard(service)}
                                variant={"outlined"}
                                startIcon={<KeyboardOutlined />}
                            >
                                {"Map to keyboard"}
                            </Button>
                            <Button
                                onClick={handleClickEventMouse(service)}
                                variant={"outlined"}
                                startIcon={<MouseOutlined />}
                            >
                                {"Map to mouse"}
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
            {selectedService && inputType && (
                <>
                    <GridHeader title="Pick your data source" />
                    <Grid item xs={12}>
                        <SelectWithLabel
                            fullWidth={true}
                            value={selectedDataSource}
                            onChange={handleDataSourceSelect}
                        >
                            {selectOpts.map(option => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </SelectWithLabel>
                    </Grid>
                    {selectedDataSource == "event" && (
                        <Grid item xs={12}>
                            <SelectWithLabel
                                label={"Select an event to map: "}
                                fullWidth={true}
                                value={selected}
                                onChange={handleChange}
                            >
                                {selectedService.events
                                    .filter(eventFilter)
                                    .map(ev => (
                                        <MenuItem key={ev.name} value={ev.name}>
                                            {humanify(ev.name)}
                                        </MenuItem>
                                    ))}
                            </SelectWithLabel>
                        </Grid>
                    )}
                    {selectedDataSource == "threshold" && thresholdRegister && (
                        <ThresholdConfigurator
                            onSave={logic => setValueDefined(logic)}
                            thresholdRegister={thresholdRegister}
                            selectedService={selectedService}
                        ></ThresholdConfigurator>
                    )}

                    {selectedDataSource == "threshold" && !thresholdRegister && (
                        <Grid item xs={12}>
                            A threshold cannot be defined for this service!
                        </Grid>
                    )}
                </>
            )}
            {valueDefined && inputType === "keyboard" && (
                <>
                    <GridHeader title="Set your key sequence" />
                    <Grid item xs={12}>
                        <KeyboardKeyInput
                            selector={selector}
                            modifiers={modifiers}
                            onChange={handleKeyChange}
                        />
                    </Grid>
                </>
            )}
            {valueDefined && inputType === "mouse" && (
                <>
                    <GridHeader title="Set your mouse bindings" />
                    <Grid item xs={12}>
                        <MouseInput onChange={() => {}} />
                    </Grid>
                </>
            )}
            {!disabled && (
                <>
                    <GridHeader title="Save your binding" />
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={disabled}
                            onClick={handleAdd}
                        >
                            Save binding
                        </Button>
                    </Grid>
                </>
            )}
        </Grid>
    )
}

function HIDBinding() {
    return <></>
}

export default function HIDConfigurator() {
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const { setError } = useContext(AppContext)
    const settingsServices = useServices({ serviceClass: SRV_SETTINGS })
    const [settingsService, setSettingsService] = useState<JDService>()
    const [hidEvents, setHIDEvents] = useState<HIDEvent[]>([])
    const [open, setOpen] = useState(false)
    const gridBreakpoints = useGridBreakpoints()
    const exportRef = useRef()

    const handleOpenAdd = () => setOpen(true)
    const handleCloseAdd = () => setOpen(false)

    const settings = useServiceClient(
        settingsService,
        srv => new SettingsClient(srv)
    )

    const excludedServices = [
        SRV_CONTROL,
        SRV_PROTO_TEST,
        SRV_ROLE_MANAGER,
        SRV_SETTINGS,
        SRV_LOGGER,
    ]
    const eventFilter = (ev: JDEvent) =>
        ev.code !== SystemEvent.StatusCodeChanged
    const services = useServices({ ignoreSelf: true, specification: true })
        .filter(srv => excludedServices.indexOf(srv.serviceClass) < 0)
        .filter(srv => srv.events.some(eventFilter))

    useServiceProviderFromServiceClass(SRV_SETTINGS)
    useChange(settings, async () => {
        const hes: HIDEvent[] = []
        if (settings) {
            const all = await settings.list()
            for (const kv of all.filter(entry =>
                entry.key?.startsWith(PREFIX)
            )) {
                const { key, value } = kv
                const he = bufferToHIDEvent(key, value, bus)
                if (he) hes.push(he)
            }
        }
        if (JSON.stringify(hes) !== JSON.stringify(hidEvents)) setHIDEvents(hes)
    })
    const handleAdd = async (hidEvent: HIDEvent) => {
        setOpen(false)

        const event = bus.node(hidEvent.eventId) as JDEvent
        if (!event) return

        const payload = HIDEventToBuffer(event, hidEvent)
        settings.setValue(PREFIX + randomDeviceId(), payload)
    }
    const handleRemoveBinding = (index: number) => () => {
        const { key } = hidEvents[index]
        if (key) settings.deleteValue(key)
    }
    const handleSelectSettingsService = (service: JDService) => () =>
        setSettingsService(settingsService === service ? undefined : service)

    const exportUri =
        hidEvents &&
        `data:application/json;charset=UTF-8,${encodeURIComponent(
            JSON.stringify(
                clone(hidEvents).map(h => {
                    delete h.key
                    return h
                })
            )
        )}`
    useEffect(() => {
        if (exportRef.current)
            (exportRef.current as HTMLAnchorElement).download = "bindings.json"
    }, [exportRef.current])
    const handleFilesUploaded = async (files: File[]) => {
        for (const file of files) {
            try {
                const text = await file.text()
                const json = JSON.parse(text)
                if (Array.isArray(json)) {
                    for (const hidEvent of json as HIDEvent[]) {
                        const event = bus.node(hidEvent.eventId) as JDEvent
                        if (event) {
                            const payload = HIDEventToBuffer(event, hidEvent)
                            settings.setValue(
                                PREFIX + randomDeviceId(),
                                payload
                            )
                        }
                    }
                }
            } catch (e) {
                console.warn(e)
                setError(`invalid file ${file.name}`)
            }
        }
    }
    return (
        <>
            <h1>Accessibility Adapter</h1>
            <Grid container spacing={1}>
                <GridHeader title="Select an adapter" />
                {!settingsServices?.length && (
                    <Grid item xs>
                        <ConnectAlert serviceClass={SRV_SETTINGS} />
                    </Grid>
                )}
                {settingsServices
                    .filter(srv => !settingsService || srv === settingsService)
                    .map(srv => (
                        <Grid item key={srv.id} {...gridBreakpoints}>
                            <Card>
                                <DeviceCardHeader
                                    device={srv.device}
                                    showAvatar={true}
                                    showMedia={true}
                                />
                                <CardActions>
                                    <Button
                                        variant={"outlined"}
                                        onClick={handleSelectSettingsService(
                                            srv
                                        )}
                                    >
                                        {settingsService === srv
                                            ? "unselect"
                                            : "select"}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}

                {settings && (
                    <>
                        <GridHeader title="Devices and bindings" />
                        {services.map(service => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                lg={4}
                                xl={3}
                                key={service.id}
                            >
                                <Card>
                                    <DeviceCardHeader
                                        device={service.device}
                                        showAvatar={true}
                                        titleText={service.name}
                                    />
                                    <CardContent>
                                        <Typography variant="h5">
                                            {service.name}
                                        </Typography>
                                        {!hidEvents?.length && (
                                            <Grid item xs>
                                                <Alert severity="info">
                                                    No bindings yet! Click{" "}
                                                    <strong>Add binding</strong>{" "}
                                                    to start building your
                                                    adapter.
                                                </Alert>
                                            </Grid>
                                        )}
                                        {hidEvents
                                            ?.map(
                                                ({
                                                    eventId,
                                                    selector,
                                                    modifiers,
                                                }) => ({
                                                    eventId,
                                                    event: bus.node(
                                                        eventId
                                                    ) as JDEvent,
                                                    selector,
                                                    modifiers,
                                                })
                                            )
                                            .map(
                                                (
                                                    {
                                                        eventId,
                                                        event,
                                                        selector,
                                                        modifiers,
                                                    },
                                                    index
                                                ) => (
                                                    <Grid
                                                        item
                                                        {...gridBreakpoints}
                                                        key={eventId}
                                                    >
                                                        <Card>
                                                            <DeviceCardHeader
                                                                device={
                                                                    event
                                                                        ?.service
                                                                        .device
                                                                }
                                                                showAvatar={
                                                                    true
                                                                }
                                                            />
                                                            <CardContent>
                                                                {event ? (
                                                                    <Typography variant="h6">
                                                                        {`${
                                                                            event
                                                                                .service
                                                                                .name
                                                                        } ${humanify(
                                                                            event.name
                                                                        )}`}
                                                                    </Typography>
                                                                ) : (
                                                                    <Alert severity="warning">
                                                                        <AlertTitle>
                                                                            Device
                                                                            not
                                                                            found
                                                                        </AlertTitle>
                                                                    </Alert>
                                                                )}

                                                                <Typography variant="h5">
                                                                    {renderKeyboardKey(
                                                                        selector,
                                                                        modifiers,
                                                                        true
                                                                    )}
                                                                </Typography>
                                                            </CardContent>
                                                            <CardActions>
                                                                <IconButtonWithTooltip
                                                                    title={
                                                                        "Remove binding"
                                                                    }
                                                                    onClick={handleRemoveBinding(
                                                                        index
                                                                    )}
                                                                >
                                                                    <DeleteIcon />
                                                                </IconButtonWithTooltip>
                                                            </CardActions>
                                                        </Card>
                                                    </Grid>
                                                )
                                            )}
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            variant={"outlined"}
                                            startIcon={<KeyboardOutlined />}
                                        >
                                            {"Map to keyboard"}
                                        </Button>
                                        <Button
                                            variant={"outlined"}
                                            startIcon={<MouseOutlined />}
                                        >
                                            {"Map to mouse"}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </>
                )}
            </Grid>
        </>
    )
}
