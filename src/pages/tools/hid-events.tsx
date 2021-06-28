import React, { lazy, useContext, useEffect, useRef, useState } from "react"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"
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
    TextField,
} from "@material-ui/core"
import useChange from "../../jacdac/useChange"
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
import KeyboardKeyInput from "../../components/ui/KeyboardKeyInput"
import IconButtonWithTooltip from "../../components/ui/IconButtonWithTooltip"
import DeleteIcon from "@material-ui/icons/Delete"
import SettingsClient from "../../../jacdac-ts/src/jdom/settingsclient"
import useServiceClient from "../../components/useServiceClient"
import {
    arrayConcatMany,
    clone,
    fromHex,
    toHex,
} from "../../../jacdac-ts/src/jdom/utils"
import { jdpack, jdunpack } from "../../../jacdac-ts/src/jdom/pack"
import { randomDeviceId } from "../../../jacdac-ts/src/jdom/random"
import { JDBus } from "../../../jacdac-ts/src/jdom/bus"
import useServices from "../../components/hooks/useServices"
import { Button } from "gatsby-theme-material-ui"
import Alert from "../../components/ui/Alert"
import GridHeader from "../../components/ui/GridHeader"
import { humanify } from "../../../jacdac-ts/jacdac-spec/spectool/jdspec"
import ConnectAlert from "../../components/alert/ConnectAlert"
import DeviceCardHeader from "../../components/DeviceCardHeader"
import useGridBreakpoints from "../../components/useGridBreakpoints"
import Suspense from "../../components/ui/Suspense"
import useServiceProviderFromServiceClass from "../../components/hooks/useServiceProviderFromServiceClass"
import AppContext from "../../components/AppContext"
import { AlertTitle } from "@material-ui/lab"
import { renderKeyboardKey } from "../../../jacdac-ts/src/servers/hidkeyboardserver"
import SelectWithLabel from "../../components/ui/SelectWithLabel"
import KeyboardOutlined from "@material-ui/icons/KeyboardOutlined"
import { MouseOutlined } from "@material-ui/icons"
import { JDRegister } from "../../../jacdac-ts/src/jdom/register"
import useWidgetTheme from "../../components/widgets/useWidgetTheme"
import SvgWidget from "../../components/widgets/SvgWidget"
const ImportButton = lazy(() => import("../../components/ImportButton"))

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

// const serviceIdMap = [

// ]

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

interface MouseIfaceState {
    // left click active
    leftClick:boolean;
    // right click active
    rightClick:boolean;
}

function MouseInput (props: {onChange: (state: MouseIfaceState)=>void }) {
    const {onChange} = props;
    const label = ""
    const widgetSize = `clamp(6rem, 25vw, 30vw)`
    const { background, active, textProps } =
        useWidgetTheme("secondary")

    const defaultIfaceMap: MouseIfaceState = {
        leftClick:false,
        rightClick:false
    }
        
    const [ifaceMap, setIfaceMap] = useState<MouseIfaceState>({leftClick:false,rightClick:false})

    const w = 100
    const h = 100
    const fs = Math.max(0.2, 0.5 - label.length * 0.1)

    const handleLclickFocus = () => {
        const map = defaultIfaceMap;
        map.leftClick = !ifaceMap.leftClick;
        setIfaceMap(map);
        onChange(map);
    }
    const handleRclickFocus = () => {
        const map = defaultIfaceMap;
        map.rightClick = !ifaceMap.rightClick;
        setIfaceMap(map);
        onChange(map);
    }

    return (
    <>
        <SvgWidget
            title={`Graphical representation of a computer mouse.`}
            width={w}
            height={h}
            size={widgetSize}
        >
            {/* {mouseSvg} */}
            <defs>
                <clipPath id="clipPath959">
                    <path d="m8288 4470h4351v7440h-4351v-7440" />
                </clipPath>
            </defs>
            <metadata></metadata>
            <g transform="translate(-40 -70)">
                <g
                    transform="matrix(.021167 0 0 -.021167 -158.17 274.65)"
                    clipPath="url(#clipPath959)"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                >
                    <g>
                        <path d="m10441 8855-1-1h-2l-10-5-2-2-3-1-2-2-3-2-2-3-3-2-2-3-6-6-2-3-3-4-3-3-3-4-2-4-3-5-3-4-2-5-3-6-3-5-2-6-3-6-2-6-5-13-5-14-4-14-3-14-4-14-2-13-3-14-4-28-4-56v-29l1-14v-14l2-14 1-14 2-14 2-13 2-14 3-13 3-12 2-12 2-6 1-5 2-5 1-5 1-4 2-4 9-24 6-12 3-4 10-18 12-16 3-3 3-4 3-3 3-2 5-5 3-2 2-1 3-2 6-3 8-2h10l3 1" />
                        <path d="m10440 9051h3l3-1 4-1h2l10-4 4-2 3-2 4-3 3-2 7-7 4-3 3-4 7-8 18-27 6-10 5-9 4-10 5-10 4-9 8-20 3-9 4-10 3-10 5-19 6-20 4-19 5-20 4-19 3-20 4-19 2-20 3-21 2-21 4-40 1-20 2-38v-57l-1-19-1-20-1-21-1-10-1-11-2-21-2-22-3-21-2-21-2-10-1-10-4-20-1-9-2-9-2-8-2-9-4-16-8-30-4-14-5-14-5-15-6-13-5-13-9-18-2-6-9-15-3-4-5-9-12-14-5-7-6-5-5-5-6-4-5-4-5-3-5-2-4-2h-4" />
                        <path d="m10456 8295 4 1 8 4 4 3 2 2 3 2 2 2 3 2 2 3 3 2 5 6 10 14 4 7 5 8 4 9 5 8 4 9 3 9 4 10 3 10 9 33 2 12 2 10 2 11 2 10 1 11 1 5v6l1 6v6l1 6v7l1 7v7l1 15v28l-1 7v18l-1 5v6l-1 10-1 11-4 24-4 26-2 12-2 6-1 5-1 6-1 4-3 10-9 27-4 8-3 8-4 8-3 7-4 7-8 12-5 6-5 7-9 9-4 3-3 3-4 3-5 3-4 2-5 3-4 1-5 1-3 1h-3" />
                        <path d="m10452 8083-4-1h-4l-4 1h-2l-2 1h-2l-3 2-2 1-3 1-9 6-4 3-3 3-4 2-3 4-4 3-4 4-3 4-4 4-3 4-4 5-6 10-4 6-3 6-4 6-6 14-4 7-3 7-6 16-7 16-5 16-6 17-4 17-5 17-8 36-3 18-3 19-3 18-3 19-4 36-2 19-2 38-2 40v63l1 21v11l1 12 1 11v12l1 11 1 12 1 13 2 12 6 50 4 26 4 24 3 13 2 12 3 11 2 12 9 33 6 20 4 9 3 9 4 10 4 8 4 9 4 8 4 9 5 8 4 7 5 8 5 7 5 8 5 7 15 18 5 5 3 2 6 6 2 1 3 1 6 3h3l2 1h4" />
                        <path d="m10441 5588h-44l-11 1h-10l-10 1h-10l-9 1-10 1-18 3-19 2-18 3-17 4-18 3-18 4-34 8-16 4-17 4-16 5-15 5-16 5-30 10-28 10-14 6-26 10-12 6-12 5-24 12-11 6-11 5-11 6-20 12-10 7-20 12-9 6-18 13-18 14-17 13-17 14-16 15-15 14-15 15-15 16-14 15-14 16-26 32-12 17-11 16-12 17-10 17-10 16-10 17-18 32-16 32-8 15-7 15-12 30-12 28-5 14-4 14-5 13-16 56-6 28-3 15-3 14-3 15-2 14-3 15-4 30-1 14-2 15-3 45v15l-1 15v16l-1 16v69l1 18v57l1 19v20l1 20v21l1 21v22l1 22v46l1 23v24l1 25v50l1 50v51l1 51v51l1 50v202l-1 52v25l-1 25v25l-2 48v23l-1 23v22l-1 21v21l-1 21v59l7 2 7 3 18 4 20 4 11 2 11 1 13 2 12 1 13 2 14 1 15 1 14 1 16 1 15 1 17 2 51 3 36 2 37 1 37 2 37 1 36 2h17l18 1h17l17 1h17l16 1h33l32 1h65l32 1h282l17-1h119l16-1h72l13-1h51l25-1h25l25-1h25l25-1h12l11-1h34l11-1h21l20-1 21-1h22l11-1 12-1h13l26-2h7l8-1 7-1h8l8-1h8l17-2 17-1 18-2 57-6 20-2 21-2 10-2 10-1 44-8 11-3 12-2-1-20v-40l-1-20v-21l-1-22v-22l-1-22v-23l-1-24v-25l-1-24v-26l-1-25-1-51v-203l1-50v-50l1-50v-51l1-51v-25l1-25v-48l1-24v-23l1-22v-22l1-22v-21l1-20v-40l1-20v-38l1-18v-87l-1-16v-31l-3-45-1-14-2-15-1-15-2-14-2-15-3-15-2-14-3-15-3-14-3-15-3-14-3-15-8-28-4-13-4-14-20-56-12-28-21-45-16-32-18-32-10-17-10-16-11-17-11-16-12-17-12-16-13-17-26-32-14-15-15-16-15-14-16-15-32-28-17-14-18-13-9-6-9-7-10-6-9-7-30-18-33-18-11-5-11-6-12-6-12-5-13-6-13-5-13-6-14-5-13-5-15-5-14-5-15-5-16-5-15-5-16-4-17-5-16-4-34-8-18-4-17-4-36-6-19-2-19-3-19-1-9-1-10-1h-10l-11-1h-44" />
                        <path id="lclick" onClick={handleLclickFocus} fill={ifaceMap.leftClick ? active : background} d="m10417 9249v-154l-10-4-8-4-8-6-4-2-3-3-7-6-6-7-6-6-6-7-5-7-6-7-5-8-5-7-10-16-4-9-5-8-4-8-16-36-4-10-3-9-3-10-4-10-3-10-3-11-2-10-6-22-2-12-2-11-5-24-8-48-3-24-2-24-3-23-1-12-1-11v-11l-1-11-2-42v-78l1-20 1-18 1-19 1-18 2-17 2-18 2-17 2-18 6-36 3-17 3-18 12-51 5-16 5-17 18-48 7-15 3-7 4-7 3-7 4-7 3-6 4-7 4-6 4-5 4-6 16-20 8-8 5-4 4-4 5-4 8-6 5-3 4-2 4-3 5-2 8-4v-124h-246l-30-1h-60l-30-1h-31l-31-1-33-1-16-1h-16l-34-2-34-1-35-1-68-4-16-1-17-1-16-1-45-3-42-3-13-1-13-2-24-2-22-4-11-1-11-2-10-3-9-2-10-3v73l-1 25v25l-1 26-1 53-1 27-1 26-1 25v12l-1 12v12l-1 12v11l-1 11v11l-1 11-1 21-4 80-1 19-1 21-1 20v65l1 22v23l2 24 1 24 1 12 2 12 1 12 2 13 1 13 6 39 3 13 2 14 3 13 3 14 3 13 4 14 4 13 3 14 4 13 5 14 4 13 5 13 5 14 5 13 5 12 12 26 12 24 14 24 7 11 7 12 24 33 8 10 9 11 9 10 30 30 22 20 11 9 36 27 14 9 13 9 8 4 7 4 8 4 7 5 16 8 9 4 8 4 9 4 9 3 30 12 10 3 10 4 11 4 12 3 12 4 12 3 13 4 13 3 14 3 15 4 15 3 16 3 17 3 8 1 9 2 9 1 10 2 9 1 20 2 10 2 11 1 10 1 12 1 11 1 24 2 13 1 12 1 14 1h13l15 1h14l15 1h118" />
                        <path id="rclick" onClick={handleRclickFocus} fill={ifaceMap.rightClick ? active : background} d="m10465 8037 4 1 5 1 8 4 5 2 4 2 8 6 8 5 8 7 14 14 8 9 6 9 7 9 4 5 3 6 3 5 3 6 4 6 9 18 12 28 5 15 6 14 5 16 4 15 5 16 4 16 2 9 2 8 4 18 2 10 1 9 4 20 1 10 2 10 1 11 2 10 2 22 3 22 2 22 1 21 2 21 1 21v78l-2 38-1 20-2 21-2 20-4 42-6 42-12 60-10 40-6 21-3 10-4 10-3 10-4 11-4 10-4 11-5 10-5 11-5 10-12 22-14 20-8 11-3 5-5 5-4 5-5 4-4 5-6 4-5 5-7 4-6 4-7 3-4 2-4 1-4 2-4 1v155h119l15-1h14l14-1h14l39-3 24-2 44-4 10-2 20-2 9-2 10-1 9-1 9-2 8-1 9-2 8-1 8-2 8-1 15-4 15-3 14-3 13-4 13-3 12-4 12-3 11-4 12-3 10-4 11-4 10-3 9-4 10-4 27-12 32-16 7-4 8-4 7-5 13-8 14-9 12-9 13-9 11-10 12-9 11-10 10-10 11-10 10-10 18-20 9-11 8-11 9-10 8-12 14-22 21-36 12-24 6-13 6-12 10-26 5-14 5-13 4-13 4-14 4-13 8-28 3-13 3-14 3-13 3-14 3-13 2-14 8-52 1-13 2-12 1-13 3-36 2-46v-87l-1-21-2-40-2-39-1-21-1-20-1-21-1-11v-11l-1-11v-11l-1-12v-12l-1-12v-13l-1-25-1-26-1-27-1-53-1-26v-26l-1-25v-72l-12 3-12 2-12 3-11 2-11 1-11 2-10 1-11 2-60 6-19 2-18 2-18 1-17 2-17 1-30 2-8 1h-7l-7 1h-6l-26 2h-12l-11 1h-11l-11 1h-21l-20 1-21 1h-33l-11 1h-24l-24 1h-24l-25 1-50 1h-25l-13 1h-67l-15 1h-115l-34 1h-33v121" />
                    </g>
                </g>
            </g>
            <text x={0.5} y={0.5} fontSize={fs} {...textProps}>
                {label}
            </text>
        </SvgWidget>
    </>
    )
}

enum LogicDescriptorType {
    Event,
    Threshold,
}

enum LogicDescriptorOperator {
    EqualTo,
    GreaterThan,
    LessThan,
}

interface LogicDescriptor {
    /**
     * Should either be event or threshold
     */
    type: LogicDescriptorType

    /**
     * packet field/event id
     */
    trigger: string|number

    /**
     * N/A when type == event,
     */
    threshold?: number

    /**
     * Operator
     */
    operator?: LogicDescriptorOperator
}

function ThresholdConfigurator(props: {
    onSave: (logic: LogicDescriptor) => void
    thresholdRegister: jdspec.PacketInfo
    selectedService: JDService
}) {
    const { onSave, thresholdRegister, selectedService } = props

    const progOpts = ["equal to", "greater than", "less than"]

    const [when, setWhen] = useState("")
    const [is, setIs] = useState("")
    const [sensorValue, setSensorValue] = useState("")

    const handleButtonClick = () => {
        const whenVal = when.split(".")[-1]
        const isEnum = progOpts.findIndex((val) =>{return is == val});
        onSave({
            operator:isEnum,
            threshold: Number.parseInt(sensorValue),
            trigger:whenVal,
            type:LogicDescriptorType.Threshold
        })
    }
    const handleChangeWhen = (ev: React.ChangeEvent<{ value: unknown }>) => {
        setWhen(ev.target.value as string)
    }

    const handleChangeIs = (ev: React.ChangeEvent<{ value: unknown }>) => {
        setIs(ev.target.value as string)
    }

    const handleChangeSensorValue = (
        ev: React.ChangeEvent<{ value: unknown }>
    ) => {
        setSensorValue(ev.target.value as string)
    }

    return (
        <>
            <GridHeader title="Define your logic" />
            <Grid item xs={12}>
                <SelectWithLabel
                    label={"When: "}
                    fullWidth={true}
                    value={when}
                    onChange={handleChangeWhen}
                >
                    {thresholdRegister.fields.map(field => (
                        <MenuItem
                            key={field.name}
                            value={`${humanify(selectedService.name)}.${
                                field.name
                            }`}
                        >
                            {`${humanify(selectedService.name)}.${field.name}`}
                        </MenuItem>
                    ))}
                </SelectWithLabel>
            </Grid>
            <Grid item xs={12}>
                <SelectWithLabel
                    label={"Is: "}
                    fullWidth={true}
                    value={is}
                    onChange={handleChangeIs}
                >
                    {progOpts.map(opt => (
                        <MenuItem key={opt} value={opt}>
                            {opt}
                        </MenuItem>
                    ))}
                </SelectWithLabel>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label={`${humanify(selectedService.name)} value`}
                    value={sensorValue}
                    onChange={handleChangeSensorValue}
                ></TextField>
            </Grid>
            <Grid item xs={12}>
            <Button
                variant="contained"
                color="primary"
                disabled={!when || !is || !sensorValue}
                onClick={handleButtonClick}
            >
                Save
            </Button>
            </Grid>
            
        </>
    )
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
        const evt = selectedService.events.find((el)=>{
            return (domEvt) === humanify(el.name)
        })

        setValueDefined({
            trigger:evt?.id,
            type:LogicDescriptorType.Event
        });

        setSelected(domEvt);
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
                        <MouseInput
                            onChange={()=>{}}
                        />
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

export default function HIDEvents() {
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
                        <GridHeader title="Command Bindings" />
                        {!hidEvents?.length && (
                            <Grid item xs>
                                <Alert severity="info">
                                    No bindings yet! Click{" "}
                                    <strong>Add binding</strong> to start
                                    building your adapter.
                                </Alert>
                            </Grid>
                        )}
                        {hidEvents
                            ?.map(({ eventId, selector, modifiers }) => ({
                                eventId,
                                event: bus.node(eventId) as JDEvent,
                                selector,
                                modifiers,
                            }))
                            .map(
                                (
                                    { eventId, event, selector, modifiers },
                                    index
                                ) => (
                                    <Grid
                                        item
                                        {...gridBreakpoints}
                                        key={eventId}
                                    >
                                        <Card>
                                            <DeviceCardHeader
                                                device={event?.service.device}
                                                showAvatar={true}
                                            />
                                            <CardContent>
                                                {event ? (
                                                    <Typography variant="h6">
                                                        {`${
                                                            event.service.name
                                                        } ${humanify(
                                                            event.name
                                                        )}`}
                                                    </Typography>
                                                ) : (
                                                    <Alert severity="warning">
                                                        <AlertTitle>
                                                            Device not found
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
                                                    title={"Remove binding"}
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
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleOpenAdd}
                                    >
                                        Add binding
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        ref={exportRef}
                                        variant="outlined"
                                        href={exportUri}
                                    >
                                        Export
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Suspense>
                                        <ImportButton
                                            icon={false}
                                            text="Import"
                                            onFilesUploaded={
                                                handleFilesUploaded
                                            }
                                            acceptedFiles={["application/json"]}
                                        />
                                    </Suspense>
                                </Grid>
                            </Grid>
                        </Grid>
                    </>
                )}
            </Grid>
            <Dialog
                open={open}
                onClose={handleCloseAdd}
                maxWidth={"lg"}
                fullWidth={true}
            >
                <DialogTitle>Add binding</DialogTitle>
                <DialogContent>
                    <SelectHIDEvent onAdd={handleAdd} />
                </DialogContent>
            </Dialog>
        </>
    )
}
