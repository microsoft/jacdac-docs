import Blockly from "blockly"
import { useMemo } from "react"
import {
    SRV_CONTROL,
    SRV_PROTO_TEST,
    SRV_ROLE_MANAGER,
    SRV_SETTINGS,
    SystemEvent,
    SystemReg,
} from "../../../jacdac-ts/jacdac-spec/dist/specconstants"
import {
    humanify,
    isNumericType,
} from "../../../jacdac-ts/jacdac-spec/spectool/jdspec"
import {
    isEvent,
    isRegister,
    serviceSpecifications,
} from "../../../jacdac-ts/src/jdom/spec"
import { arrayConcatMany } from "../../../jacdac-ts/src/jdom/utils"

const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="jacdac_configuration"></block></xml>'

let blocks: any[]
function loadBlocks() {
    if (blocks) return blocks

    const variableName = (srv: jdspec.ServiceSpec) => `${srv.camelName} 1`

    const ignoredServices = [
        SRV_CONTROL,
        SRV_ROLE_MANAGER,
        SRV_PROTO_TEST,
        SRV_SETTINGS,
    ]
    const ignoredEvents = [SystemEvent.StatusCodeChanged]
    const services = serviceSpecifications()
        .filter(service => !/^_/.test(service.shortId))
        .filter(service => ignoredServices.indexOf(service.classIdentifier) < 0)
    const readings = services
        .map(service => ({
            service,
            reading: service.packets.find(
                pkt =>
                    isRegister(pkt) &&
                    pkt.identifier === SystemReg.Reading &&
                    pkt.fields.length == 1 &&
                    isNumericType(pkt.fields[0])
            ),
        }))
        .filter(kv => !!kv.reading)
    const events = services
        .map(service => ({
            service,
            events: service.packets.filter(
                pkt => isEvent(pkt) && ignoredEvents.indexOf(pkt.identifier) < 0
            ),
        }))
        .filter(kv => !!kv.events.length)

    // generate blocks
    blocks = [
        {
            type: "jacdac_configuration",
            message0: "configuration",
            inputsInline: true,
            nextStatement: "Role",
            style: "variable_blocks",
        },
        {
            type: "jacdac_declare_role",
            message0: "define role %1 as %2",
            args0: [
                {
                    type: "field_variable",
                    name: "NAME",
                    variable: variableName(services[0]),
                    defaultType: "Service",
                },
                {
                    type: "field_dropdown",
                    name: "SERVICE",
                    options: services.map(spec => [
                        humanify(spec.shortName),
                        spec.shortId,
                    ]),
                },
            ],
            style: "variable_blocks",
            previousStatement: "Role",
            nextStatement: "Role",
        },
        ...events.map(({ service, event }) => ({
            type: `jacdac_${service.shortId}_event_${event.name}`,
            message0: `when %1 ${humanify(event.name)}`,
            args0: [
                {
                    type: "field_variable",
                    name: "ROLE",
                    variable: variableName(service),
                },
            ],
            style: "logic_blocks",
            inputsInline: true,
            nextStatement: null,
            tooltip: "",
            helpUrl: "",
        })),
        ...readings.map(({ service, reading }) => ({
            type: `jacdac_${service.shortId}_reading`,
            message0: `%1 ${humanify(reading.name)}`,
            args0: [
                {
                    type: "field_variable",
                    name: "ROLE",
                    variable: variableName(service),
                },
            ],
            inputsInline: true,
            output: "Number",
            colour: 230,
            tooltip: "",
            helpUrl: "",
        })),
        ...readings.map(({ service, reading }) => ({
            type: `jacdac_${service.shortId}_reading_change`,
            message0: `when %1 ${humanify(reading.name)} change`,
            args0: [
                {
                    type: "field_variable",
                    name: "ROLE",
                    variable: variableName(service),
                },
            ],
            inputsInline: true,
            nextStatement: "Statement",
            style: "logic_blocks",
            tooltip: "",
            helpUrl: "",
        })),
        {
            type: "jacdac_await_condition",
            message0: "while %1",
            args0: [
                {
                    type: "input_value",
                    name: "CONDITION",
                    check: "Boolean",
                },
            ],
            style: "logic_blocks",
            inputsInline: true,
            nextStatement: "Statement",
            tooltip: "",
            helpUrl: "",
        },
        {
            type: "jacdac_wait_ms",
            message0: "wait %1 ms",
            args0: [
                {
                    type: "field_number",
                    name: "NAME",
                    value: 0,
                    min: 0,
                    max: 5000,
                },
            ],
            inputsInline: true,
            previousStatement: "Statement",
            nextStatement: "Statement",
            colour: 230,
            tooltip: "",
            helpUrl: "",
        },
        {
            type: "jacdac_servo_write_angle",
            message0: "set %1 angle to %2 %3",
            args0: [
                {
                    type: "field_variable",
                    name: "ROLE",
                    variable: "servo",
                },
                {
                    type: "input_dummy",
                },
                {
                    type: "input_value",
                    name: "VALUE",
                    check: "Number",
                },
            ],
            inputsInline: true,
            previousStatement: "Statement",
            nextStatement: "Statement",
            colour: 230,
            tooltip: "",
            helpUrl: "",
        },
        {
            type: "jacdac_servo_enable",
            message0: "set %1 %2",
            args0: [
                {
                    type: "field_variable",
                    name: "ROLE",
                    variable: "servo",
                },
                {
                    type: "field_dropdown",
                    name: "ENABLED",
                    options: [
                        ["on", "ON"],
                        ["off", "OFF"],
                    ],
                },
            ],
            colour: 230,
            tooltip: "",
            helpUrl: "",
            previousStatement: "Statement",
            nextStatement: "Statement",
        },
    ]

    // register blocks with Blockly, happens once
    blocks.map(
        block =>
            (Blockly.Blocks[block.type] = {
                init: function () {
                    this.jsonInit(block)
                },
            })
    )
    return blocks
}

export default function useToolbox() {
    const blocks = useMemo(() => loadBlocks(), [])
    const toolboxBlocks = [
        ...blocks.map(block => ({ type: block.type })),
        { type: "math_number" },
        { type: "math_arithmetic" },
        { type: "logic_boolean" },
        { type: "logic_compare" },
        { type: "logic_operation" },
        { type: "logic_negate" },
    ]
    const toolboxCategories = undefined
    return {
        toolboxBlocks,
        toolboxCategories,
        initialXml,
    }
}
