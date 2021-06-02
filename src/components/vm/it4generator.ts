import { BlockJSON, WorkspaceJSON } from "./jsongenerator"
import {
    IT4Base,
    IT4Handler,
    IT4Program,
    IT4Role,
    toMemberExpression,
    toIdentifier,
    IT4IfThenElse,
    RoleEvent,
} from "../../../jacdac-ts/src/vm/ir"
import { BUILTIN_TYPES } from "./useToolbox"
import { assert } from "../../../jacdac-ts/src/jdom/utils"
import {
    BlockDefinition,
    CommandBlockDefinition,
    EventFieldDefinition,
    RegisterBlockDefinition,
    ServiceBlockDefinitionFactory,
    WAIT_BLOCK,
    WHILE_CONDITION_BLOCK,
} from "./toolbox"
import Blockly from "blockly"

const ops = {
    AND: "&&",
    OR: "||",
    EQ: "===",
    NEQ: "!==",
    LT: "<",
    GT: ">",
    LTE: "<=",
    GTE: ">=",
    NEG: "-",
    ADD: "+",
    MULTIPLY: "*",
    DIVIDE: "/",
    MINUS: "-",
}

type ExpressionWithErrors = {
    expr: jsep.Expression
    errors: jdspec.Diagnostic[]
}

export default function workspaceJSONToIT4Program(
    serviceBlocks: BlockDefinition[],
    workspace: WorkspaceJSON
): IT4Program {
    console.debug(`compile it4`, { workspace })

    const roles: IT4Role[] = workspace.variables
        .filter(v => BUILTIN_TYPES.indexOf(v.type) < 0)
        .map(v => ({ role: v.name, serviceShortId: v.type }))

    const blockToExpression: (
        ev: RoleEvent,
        block: BlockJSON
    ) => ExpressionWithErrors = (ev: RoleEvent, block: BlockJSON) => {
        const errors: jdspec.Diagnostic[] = []

        const blockToExpressionInner = (ev: RoleEvent, block: BlockJSON) => {
            if (!block) return toIdentifier("%%NOCODE%%")
            const { type, value, inputs } = block
            console.log(`block2e`, { ev, block, type, value, inputs })

            console.debug(`block`, type, value, inputs)

            if (value !== undefined)
                // literal
                return <jsep.Literal>{
                    type: "Literal",
                    value: value,
                    raw: value + "",
                }

            switch (type) {
                case "jacdac_math_single": {
                    const argument = blockToExpressionInner(ev, inputs[0].child)
                    const op = inputs[0].fields["op"].value as string
                    return <jsep.UnaryExpression>{
                        type: "UnaryExpression",
                        operator: ops[op] || op,
                        argument,
                        prefix: false, // TODO:?
                    }
                }
                case "jacdac_math_arithmetic": {
                    const left = blockToExpressionInner(ev, inputs[0].child)
                    const right = blockToExpressionInner(ev, inputs[1].child)
                    const op = inputs[1].fields["op"].value as string
                    return <jsep.BinaryExpression>{
                        type: "BinaryExpression",
                        operator: ops[op] || op,
                        left,
                        right,
                    }
                }
                case "logic_operation": {
                    const left = blockToExpressionInner(ev, inputs[0].child)
                    const right = blockToExpressionInner(ev, inputs[1].child)
                    const op = inputs[1].fields["op"].value as string
                    return <jsep.LogicalExpression>{
                        type: "LogicalExpression",
                        operator: ops[op] || op,
                        left,
                        right,
                    }
                }
                case "logic_negate": {
                    const argument = blockToExpressionInner(ev, inputs[0].child)
                    return <jsep.UnaryExpression>{
                        type: "UnaryExpression",
                        operator: "!",
                        argument,
                        prefix: false, // TODO:?
                    }
                }
                case "logic_compare": {
                    const left = blockToExpressionInner(ev, inputs[0].child)
                    const right = blockToExpressionInner(ev, inputs[1].child)
                    const op = inputs[1].fields["op"].value as string
                    return <jsep.BinaryExpression>{
                        type: "BinaryExpression",
                        operator: ops[op] || op,
                        left,
                        right,
                    }
                }
                default: {
                    const def = (
                        Blockly.Blocks[type] as ServiceBlockDefinitionFactory
                    )?.jacdacDefinition
                    if (!def) {
                        console.warn(`unknown block ${type}`, {
                            type,
                            ev,
                            block,
                            d: Blockly.Blocks[type],
                        })
                    }
                    if (def) {
                        const { template } = def
                        console.log("get", { type, def, template })
                        switch (template) {
                            case "register_get": {
                                const { register } =
                                    def as RegisterBlockDefinition
                                const { value: role } = inputs[0].fields["role"]
                                const field = inputs[0].fields["field"]
                                return toMemberExpression(
                                    role as string,
                                    field
                                        ? toMemberExpression(
                                              register.name,
                                              field.value as string
                                          )
                                        : register.name
                                )
                            }
                            case "event_field": {
                                const { event } = def as EventFieldDefinition
                                if (ev.event !== event.identifierName) {
                                    errors.push({
                                        file: block.id,
                                        line: 0,
                                        message: `Event ${event} is not available in this handler.`,
                                    })
                                }
                                const field = inputs[0].fields["field"]
                                return toMemberExpression(
                                    ev.role,
                                    toMemberExpression(
                                        ev.event,
                                        field.value as string
                                    )
                                )
                            }
                            case "shadow": {
                                const field = inputs[0].fields["value"]
                                const { value } = field
                                return <jsep.Literal>{
                                    type: "Literal",
                                    value: value,
                                    raw: value + "",
                                }
                            }
                            default: {
                                console.warn(
                                    `unsupported block template ${template} for ${type}`,
                                    { ev, block }
                                )
                                break
                            }
                        }
                        break
                    }
                }
            }
            return toIdentifier("%%NOCODE%%")
        }
        return {
            expr: blockToExpressionInner(ev, block),
            errors,
        }
    }

    const blockToCommand = (event: RoleEvent, block: BlockJSON): IT4Base => {
        let command: jsep.CallExpression
        const { type, inputs } = block
        switch (type) {
            case WAIT_BLOCK: {
                const { expr:time, errors} = blockToExpression(event, inputs[0].child)
                command = {
                    type: "CallExpression",
                    arguments: [time],
                    callee: toIdentifier("wait"),
                }
                break
            }
            case "dynamic_if": {
                const { expr, errors} = blockToExpression(event, inputs[0]?.child)
                const ret: IT4IfThenElse = {
                    sourceId: block.id,
                    type: "ite",
                    expr,
                    then: [],
                    else: [],
                }
                const t = inputs[1]?.child
                const e = inputs[2]?.child
                if (t)
                    addCommands(event, ret.then, [
                        t,
                        ...(t.children ? t.children : []),
                    ])
                if (e)
                    addCommands(event, ret.else, [
                        e,
                        ...(e.children ? e.children : []),
                    ])
                return ret
            }
            // more builts
            default: {
                const def = (
                    Blockly.Blocks[type] as ServiceBlockDefinitionFactory
                )?.jacdacDefinition
                if (def) {
                    const { template } = def
                    switch (template) {
                        case "register_set": {
                            const { register } = def as RegisterBlockDefinition
                            const { expr, errors } = blockToExpression(
                                event,
                                inputs[0].child
                            )
                            const { value: role } = inputs[0].fields.role
                            command = {
                                type: "CallExpression",
                                arguments: [
                                    toMemberExpression(
                                        role as string,
                                        register.name
                                    ),
                                    expr,
                                ],
                                callee: toIdentifier("writeRegister"),
                            }
                            break
                        }
                        case "command": {
                            const { command: serviceCommand } =
                                def as CommandBlockDefinition
                            const { value: role } = inputs[0].fields.role
                            const exprsErrors = inputs.map(a =>
                                blockToExpression(event, a.child)
                            )
                            // TODO: collect up the errors
                            command = {
                                type: "CallExpression",
                                arguments: exprsErrors.map(p => p.expr),
                                callee: toMemberExpression(
                                    role as string,
                                    serviceCommand.name
                                ),
                            }
                            break
                        }
                        default: {
                            console.warn(
                                `unsupported command template ${template} for ${type}`,
                                { event, block }
                            )
                            break
                        }
                    }
                }
            }
        }
        // for linking back
        return {
            sourceId: block.id,
            type: "cmd",
            command,
        } as IT4Base
    }

    const addCommands = (
        event: RoleEvent,
        acc: IT4Base[],
        blocks: BlockJSON[]
    ) => {
        blocks?.forEach(child => {
            if (child) acc.push(blockToCommand(event, child))
        })
    }

    const handlers: IT4Handler[] = workspace.blocks.map(top => {
        const { type, inputs } = top
        const commands: IT4Base[] = []
        let command: jsep.CallExpression = undefined
        let topEvent: RoleEvent = undefined
        if (type === WHILE_CONDITION_BLOCK) {
            // this is while (...)
            const { child: condition } = inputs[0]
            const { expr, errors } = blockToExpression(undefined, condition)
            command = {
                type: "CallExpression",
                arguments: [expr],
                callee: toIdentifier("awaitCondition"),
            }
        } else {
            const def = (Blockly.Blocks[type] as ServiceBlockDefinitionFactory)
                ?.jacdacDefinition
            assert(!!def)
            const { template } = def
            const { value: role } = inputs[0].fields["role"]
            switch (template) {
                case "twin":
                    break // ignore
                case "event": {
                    const { value: eventName } = inputs[0].fields["event"]
                    command = {
                        type: "CallExpression",
                        arguments: [
                            toMemberExpression(
                                role.toString(),
                                eventName.toString()
                            ),
                        ],
                        callee: toIdentifier("awaitEvent"),
                    }
                    topEvent = {
                        role: role.toString(),
                        event: eventName.toString(),
                    }
                    break
                }
                case "register_change_event": {
                    const { register } = def as RegisterBlockDefinition
                    const { expr, errors } = blockToExpression(
                        undefined,
                        inputs[0].child
                    )
                    command = {
                        type: "CallExpression",
                        arguments: [
                            toMemberExpression(role.toString(), register.name),
                            expr,
                        ],
                        callee: toIdentifier("awaitChange"),
                    }
                    break
                }
                default: {
                    console.warn(
                        `unsupported handler template ${template} for ${type}`,
                        { top }
                    )
                    break
                }
            }
        }

        commands.push({
            sourceId: top.id,
            type: "cmd",
            command,
        } as IT4Base)

        addCommands(topEvent, commands, top.children)

        return {
            commands,
        }
    })

    return {
        roles,
        handlers,
    }
}
