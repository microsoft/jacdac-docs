import React, { useContext, useState } from "react"
import SelectEvent from "../../components/select/SelectEvent"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"
import useDevices from "../../components/hooks/useDevices"
import SelectDevice from "../../components/select/SelectDevice"
import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@material-ui/core"
import { JDDevice } from "../../../jacdac-ts/src/jdom/device"
import useChange from "../../jacdac/useChange"
import SelectService from "../../components/select/SelectService"
import { JDService } from "../../../jacdac-ts/src/jdom/service"
import {
    HidKeyboardModifiers,
    SRV_CONTROL,
    SRV_LOGGER,
    SRV_PROTO_TEST,
    SRV_ROLE_MANAGER,
    SRV_SETTINGS,
    SystemEvent,
} from "../../../jacdac-ts/src/jdom/constants"
import { JDEvent } from "../../../jacdac-ts/src/jdom/event"
import KeyboardKeyInput, {
    renderKeyboardKey,
} from "../../components/ui/KeyboardKeyInput"
import IconButtonWithTooltip from "../../components/ui/IconButtonWithTooltip"
import DeleteIcon from "@material-ui/icons/Delete"
import SettingsClient from "../../../jacdac-ts/src/jdom/settingsclient"
import useServiceClient from "../../components/useServiceClient"
import { fromHex, toHex } from "../../../jacdac-ts/src/jdom/utils"
import { jdpack, jdunpack } from "../../../jacdac-ts/src/jdom/pack"
import { randomDeviceId } from "../../../jacdac-ts/src/jdom/random"
import { JDBus } from "../../../jacdac-ts/src/jdom/bus"
import useServices from "../../components/hooks/useServices"
import { Button } from "gatsby-theme-material-ui"

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
        deviceId,
        serviceClass,
        serviceIndex,
        eventCode,
        selector,
        modifiers,
    ] = jdunpack<FORMAT_TYPE>(data, FORMAT)
    const deviceIds = toHex(deviceId)
    const device = bus.device(deviceIds, true)
    const event = device?.service(serviceIndex)?.event(eventCode)

    if (!event || event.service.serviceClass !== serviceClass) return undefined
    return {
        key,
        eventId: event.id,
        selector,
        modifiers,
    }
}

function SelectHIDEvent(props: { onAdd: (hidEvent: HIDEvent) => void }) {
    const { onAdd } = props
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const [deviceId, setDeviceId] = useState("")
    const [serviceId, setServiceId] = useState("")
    const [eventId, setEventId] = useState("")
    const [selector, setSelector] = useState(0)
    const [modifiers, setModifiers] = useState(HidKeyboardModifiers.None)

    const excludedServices = [
        SRV_CONTROL,
        SRV_PROTO_TEST,
        SRV_ROLE_MANAGER,
        SRV_SETTINGS,
        SRV_LOGGER,
    ]
    const eventFilter = (ev: JDEvent) =>
        ev.code !== SystemEvent.StatusCodeChanged
    const devices = useDevices({ ignoreSelf: true })
    const device = bus.node(deviceId) as JDDevice
    const services = useChange(device, _ =>
        _?.services({ specification: true })
            .filter(srv => excludedServices.indexOf(srv.serviceClass) < 0)
            .filter(srv => srv.events.some(eventFilter))
    )
    const service = bus.node(serviceId) as JDService
    const events = useChange(service, _ => _?.events.filter(eventFilter))

    const handleDeviceChange = (deviceId: string) => {
        setDeviceId(deviceId)
        setServiceId("")
        setEventId("")
    }
    const handleServiceChange = (serviceId: string) => {
        setServiceId(serviceId)
        setEventId("")
    }
    const handleEventChange = (id: string) => setEventId(id)
    const handleKeyChange = (
        newSelector: number,
        newModifiers: HidKeyboardModifiers
    ) => {
        setSelector(newSelector)
        setModifiers(newModifiers)
    }
    const disabled = !eventId || !selector
    const handleAdd = () => {
        onAdd({ eventId, selector, modifiers })
    }

    return (
        <Grid container spacing={1}>
            <Grid item>
                <SelectDevice
                    devices={devices}
                    deviceId={deviceId}
                    onChange={handleDeviceChange}
                />
            </Grid>
            <Grid item>
                <SelectService
                    services={services}
                    serviceId={serviceId}
                    onChange={handleServiceChange}
                />
            </Grid>
            <Grid item>
                <SelectEvent
                    events={events}
                    eventId={eventId}
                    onChange={handleEventChange}
                />
            </Grid>
            <Grid item>
                <Button
                    variant="outlined"
                    disabled={disabled}
                    onClick={handleAdd}
                >
                    Add
                </Button>
            </Grid>
            <Grid item xs={12}>
                <KeyboardKeyInput
                    selector={selector}
                    modifiers={modifiers}
                    onChange={handleKeyChange}
                />
            </Grid>
        </Grid>
    )
}

export default function HIDEvents() {
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const services = useServices({ serviceClass: SRV_SETTINGS })
    const [settingsService, setSettingsService] = useState<JDService>()
    const [hidEvents, setHIDEvents] = useState<HIDEvent[]>([])

    const settings = useServiceClient(
        settingsService,
        srv => new SettingsClient(srv)
    )
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
        const event = bus.node(hidEvent.eventId) as JDEvent
        if (!event) return

        const payload = HIDEventToBuffer(event, hidEvent)
        settings.setValue(PREFIX + randomDeviceId(), payload)
    }
    const handleRemoveBinding = (index: number) => () => {
        const { key } = hidEvents[index]
        if (key) settings.deleteValue(key)
    }
    const handleSelectHub = (newServiceId: string) =>
        setSettingsService(bus.node(newServiceId) as JDService)
    return (
        <>
            <h1>Map events to Keyboard combos</h1>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <SelectService
                        helperText="choose a hub"
                        friendlyName={true}
                        services={services}
                        serviceId={settingsService?.id}
                        onChange={handleSelectHub}
                    />
                </Grid>
                {settings && (
                    <Grid item xs={12}>
                        <SelectHIDEvent onAdd={handleAdd} />
                    </Grid>
                )}

                {settings && (
                    <Grid item>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Device</TableCell>
                                    <TableCell>Service</TableCell>
                                    <TableCell>Event</TableCell>
                                    <TableCell>Key</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {hidEvents.map(
                                    (
                                        { eventId, selector, modifiers },
                                        index
                                    ) => {
                                        const event = bus.node(
                                            eventId
                                        ) as JDEvent
                                        return (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    {
                                                        event.service.device
                                                            .friendlyName
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    {event.service.name}
                                                </TableCell>
                                                <TableCell>
                                                    {event.name}
                                                </TableCell>
                                                <TableCell>
                                                    <code>
                                                        {renderKeyboardKey(
                                                            selector,
                                                            modifiers,
                                                            true
                                                        )}
                                                    </code>
                                                </TableCell>
                                                <TableCell>
                                                    <IconButtonWithTooltip
                                                        title={"Remove binding"}
                                                        onClick={handleRemoveBinding(
                                                            index
                                                        )}
                                                    >
                                                        <DeleteIcon />
                                                    </IconButtonWithTooltip>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                )}
                            </TableBody>
                        </Table>
                    </Grid>
                )}
            </Grid>
        </>
    )
}
