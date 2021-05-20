import { createStyles, makeStyles } from "@material-ui/core"
import React from "react"
import ReactBlockly from "react-blockly"
import Blockly from "blockly"
import Theme from "@blockly/theme-modern"

const useStyles = makeStyles(() =>
    createStyles({
        editor: {
            height: "calc(100vh - 10rem)",
        },
    })
)

const initialXml = '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>'
const blocks = [
    {
        type: "jacdac_declare_service",
        message0: "service %1",
        args0: [
            {
                type: "field_dropdown",
                name: "TYPE",
                options: [
                    ["button", "button"],
                    ["servo", "servo"],
                    ["settings", "settings"],
                ],
            },
        ],
        inputsInline: true,
        style: "variable_blocks",
        tooltip: "declares a new service",
        output: "button",
        helpUrl: "",
    },
    {
        type: "jacdac_button_event",
        message0: "when %1 %2 %3",
        args0: [
            {
                type: "field_variable",
                name: "ROLE",
                variable: "button",
            },
            {
                type: "input_dummy",
            },
            {
                type: "field_dropdown",
                name: "EVENT",
                options: [
                    ["down", "down"],
                    ["up", "up"],
                    ["press", "press"],
                ],
            },
        ],
        style: "logic_blocks",
        inputsInline: true,
        nextStatement: null,
        tooltip: "",
        helpUrl: "",
    },
    {
        type: "jacdac_reading_change",
        message0: "when %1 change",
        args0: [
            {
                type: "field_variable",
                name: "ROLE",
                variable: "humidity",
            },
        ],
        inputsInline: true,
        nextStatement: null,
        style: "logic_blocks",
        tooltip: "",
        helpUrl: "",
    },
    {
        type: "jacdac_await_condition",
        message0: "when %1",
        args0: [
            {
                type: "input_value",
                name: "CONDITION",
                check: "Boolean",
            },
        ],
        style: "logic_blocks",
        inputsInline: true,
        nextStatement: null,
        tooltip: "",
        helpUrl: "",
    },
    {
        type: "jacdac_button_reading",
        message0: "%1 pressure",
        args0: [
            {
                type: "field_variable",
                name: "ROLE",
                variable: "button",
            },
        ],
        inputsInline: true,
        output: "Number",
        colour: 230,
        tooltip: "",
        helpUrl: "",
    },
    {
        type: "jacdac_humidity_reading",
        message0: "%1 humidity",
        args0: [
            {
                type: "field_variable",
                name: "ROLE",
                variable: "humidity",
            },
        ],
        inputsInline: true,
        output: "Number",
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
        previousStatement: null,
        nextStatement: null,
        colour: 230,
        tooltip: "",
        helpUrl: "",
    },
    {
        type: "jacdac_servo_enable",
        message0: "%1 %2",
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
    },
]
blocks.map(
    block =>
        (Blockly.Blocks[block.type] = {
            init: function () {
                this.jsonInit(block)
            },
        })
)
const toolboxBlocks = [
    { type: "variables_set" },
    ...blocks.map(block => ({ type: block.type })),
    { type: "text" },
    { type: "math_number" },
    { type: "math_arithmetic" },
    { type: "math_single" },
    { type: "logic_boolean" },
    { type: "logic_compare" },
]

export default function VMEditor() {
    const classes = useStyles()
    const handleChange = (workspace: Blockly.WorkspaceSvg) => {
        const newXml = Blockly.Xml.domToText(
            Blockly.Xml.workspaceToDom(workspace)
        )
        document.getElementById("generated-xml").innerText = newXml

        // const code = Blockly.JavaScript.workspaceToCode(workspace)
        //  document.getElementById("code").value = code
    }

    return (
        <>
            <ReactBlockly
                toolboxBlocks={toolboxBlocks}
                workspaceConfiguration={{
                    comments: false,
                    css: true,
                    grid: {
                        spacing: 25,
                        length: 1,
                        colour: "#ccc",
                        snap: true,
                    },
                    renderer: "zelos",
                    theme: Theme,
                    oneBasedIndex: false,
                }}
                initialXml={initialXml}
                wrapperDivClassName={classes.editor}
                workspaceDidChange={handleChange}
            />
            <pre id="generated-xml"></pre>
        </>
    )
}
