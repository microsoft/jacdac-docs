/*

export class ServicesBlockDomainSpecificLanguage
    implements BlockDomainSpecificLanguage
{
    id = "jacdacServices"
    supportedServices: jdspec.ServiceSpec[] = []
    // client blocks
    private _serviceClientBlocks: ServiceBlockDefinition[]
    private _eventFieldClientBlocks: EventFieldDefinition[]
    // server blocks
    private _serviceServerBlocks: ServiceBlockDefinition[]
    private _commandFieldServerBlocks: EventFieldDefinition[]
    // generic role blocks
    private _roleBlocks: BlockDefinition[]

    createBlocks(options: CreateBlocksOptions) {
        const { theme } = options
        const serviceColor = createServiceColor(theme)

        // pure service information here
        const {
            allServices,
            supportedServices,
            registers,
            events,
            commands,
            registerSimpleTypes,
            registerComposites,
            registerSimpleEnumTypes,
            registerCompositeEnumTypes,
        } = getServiceInfo()

        const resolveService = (cls: number): jdspec.ServiceSpec[] =>
            allServices.filter(srv => srv.classIdentifier === cls)

        this.supportedServices = supportedServices

        // TODO: customServerBlockDefinitions
        const customClientBlockDefinitions: CustomBlockDefinition[] = [
            ...resolveService(SRV_HID_KEYBOARD).map(
                service =>
                    <CustomBlockDefinition>{
                        kind: "block",
                        type: `key`,
                        message0: `%1 %2 key %3`,
                        args0: [
                            roleVariable(service),
                            <OptionsInputDefinition>{
                                type: "field_dropdown",
                                name: "action",
                                options: [
                                    ["press", "press"],
                                    ["down", "down"],
                                    ["up", "up"],
                                ],
                            },
                            {
                                type: KeyboardKeyField.KEY,
                                name: "combo",
                            },
                        ],
                        colour: serviceColor(service),
                        inputsInline: true,
                        previousStatement: CODE_STATEMENT_TYPE,
                        nextStatement: CODE_STATEMENT_TYPE,
                        tooltip: `Send a keyboard key combo`,
                        helpUrl: serviceHelp(service),
                        service,
                        expression: `role.key(combo.selectors, combo.modifiers, action)`,
                        template: "custom",
                    }
            ),
            ...resolveService(SRV_LED).map(
                service =>
                    <CustomBlockDefinition>{
                        kind: "block",
                        type: `fade`,
                        message0: `fade %1 to %2 at speed %3`,
                        args0: [
                            roleVariable(service),
                            {
                                type: "input_value",
                                name: "color",
                                check: "Number",
                            },
                            {
                                type: "input_value",
                                name: "speed",
                                check: "Number",
                            },
                        ],
                        values: {
                            color: {
                                kind: "block",
                                type: LEDColorField.SHADOW.type,
                            },
                            speed: {
                                kind: "block",
                                type: "jacdac_ratio",
                            },
                        },
                        colour: serviceColor(service),
                        inputsInline: true,
                        previousStatement: CODE_STATEMENT_TYPE,
                        nextStatement: CODE_STATEMENT_TYPE,
                        tooltip: `Fade LED color`,
                        helpUrl: serviceHelp(service),
                        service,
                        expression: `role.animate((color >> 16) & 0xff, (color >> 8) & 0xff, (color >> 0) & 0xff, speed * 0xff)`,
                        template: "custom",
                    }
            ),
            ...resolveService(SRV_SEVEN_SEGMENT_DISPLAY).map(
                service =>
                    <CustomBlockDefinition>{
                        kind: "block",
                        type: `set_digits`,
                        message0: `set %1 digits to %2`,
                        args0: [
                            roleVariable(service),
                            {
                                type: "input_value",
                                name: "digits",
                                check: "Number",
                            },
                        ],
                        values: {
                            digits: {
                                kind: "block",
                                type: "math_number",
                            },
                        },
                        colour: serviceColor(service),
                        inputsInline: true,
                        previousStatement: CODE_STATEMENT_TYPE,
                        nextStatement: CODE_STATEMENT_TYPE,
                        tooltip: `Display a number of the screen`,
                        helpUrl: serviceHelp(service),
                        service,
                        template: "custom",
                    }
            ),
            ...resolveService(SRV_LED_MATRIX).map(
                service =>
                    <CustomBlockDefinition>{
                        kind: "block",
                        type: `show_leds`,
                        message0: `show %1 leds %2`,
                        args0: [
                            roleVariable(service),
                            {
                                type: LEDMatrixField.KEY,
                                name: "leds",
                            },
                        ],
                        colour: serviceColor(service),
                        inputsInline: true,
                        previousStatement: CODE_STATEMENT_TYPE,
                        nextStatement: CODE_STATEMENT_TYPE,
                        tooltip: `Display LEDs on the LED matrix`,
                        helpUrl: serviceHelp(service),
                        service,
                        // encode digits
                        template: "custom",
                    }
            ),
        ].map(def => {
            def.type = `jacdac_custom_${def.service.shortId.toLowerCase()}_${
                def.type
            }`
            return def
        })

        const eventClientBlocks = events.map<EventBlockDefinition>(
            ({ service, events }) => ({
                kind: "block",
                type: `jacdac_events_${service.shortId}`,
                message0: `on %1 %2`,
                args0: [
                    roleVariable(service),
                    <InputDefinition>{
                        type: "field_dropdown",
                        name: "event",
                        options: events.map(event => [
                            humanify(event.name),
                            event.name,
                        ]),
                    },
                ],
                colour: serviceColor(service),
                inputsInline: true,
                nextStatement: CODE_STATEMENT_TYPE,
                tooltip: `Events for the ${service.name} service`,
                helpUrl: serviceHelp(service),
                service,
                events,
                template: "event",
            })
        )

        const eventServerBlocks = events.flatMap<CommandBlockDefinition>(
            ({ service, events }) => {
                const eventsNoArgs = events.filter(ev => ev.fields.length === 0)
                const retNoArgs: CommandBlockDefinition = {
                    kind: "block",
                    type: `jacdac_raise_event_${service.shortId}`,
                    message0: `raise %1 %2`,
                    args0: [
                        roleVariable(service, false),
                        <InputDefinition>{
                            type: "field_dropdown",
                            name: "event",
                            options: eventsNoArgs.map(event => [
                                humanify(event.name),
                                event.name,
                            ]),
                        },
                    ],
                    inputsInline: true,
                    colour: serviceColor(service),
                    tooltip: `Events for the ${service.name} service`,
                    helpUrl: serviceHelp(service),
                    service,
                    command: undefined,
                    previousStatement: CODE_STATEMENT_TYPE,
                    nextStatement: CODE_STATEMENT_TYPE,

                    template: "raiseNo",
                }
                const eventsArgs = events.filter(ev => ev.fields.length)
                const retArgs = eventsArgs.map<CommandBlockDefinition>(ev => {
                    return {
                        kind: "block",
                        type: `jacdac_raise_event_${service.shortId}_${ev.name}`,
                        message0: !ev.fields.length
                            ? `raise %1 ${humanify(ev.name)}`
                            : `raise %1 ${humanify(
                                  ev.name
                              )} with ${fieldsToMessage(ev)}`,
                        args0: [
                            roleVariable(service, false),
                            ...fieldsToFieldInputs(ev),
                        ],
                        values: fieldsToValues(service, ev),
                        inputsInline: true,
                        colour: serviceColor(service),
                        tooltip: ev.description,
                        helpUrl: serviceHelp(service),
                        service,
                        command: ev,
                        previousStatement: CODE_STATEMENT_TYPE,
                        nextStatement: CODE_STATEMENT_TYPE,

                        template: "raiseArgs",
                    }
                })
                return [retNoArgs, ...retArgs]
            }
        )

        const makeRegisterChangeByEventBlocks = (client = true) =>
            registers
                .filter(
                    ({ service }) => !service.packets.some(isHighLevelEvent)
                )
                .filter(
                    ({ register }) =>
                        register.fields.length === 1 &&
                        isNumericType(register.fields[0]) &&
                        register.identifier !== SystemReg.Intensity
                )
                .map<RegisterBlockDefinition>(({ service, register }) => ({
                    kind: "block",
                    type: `jacdac_change_by_events_${service.shortId}_${
                        register.name
                    }${client ? "" : "_server"}`,
                    message0: `on %1 ${humanify(register.name)} change by %2`,
                    args0: [
                        roleVariable(service, client),
                        ...fieldsToFieldInputs(register),
                    ].filter(v => !!v),
                    values: fieldsToValues(service, register),
                    inputsInline: true,
                    nextStatement: CODE_STATEMENT_TYPE,
                    colour: serviceColor(service),
                    tooltip: `Event raised when ${register.name} changes`,
                    helpUrl: serviceHelp(service),
                    service,
                    register,

                    template: "register_change_event",
                }))

        const registerChangeByEventClientBlocks =
            makeRegisterChangeByEventBlocks()
        //const registerChangeByEventServerBlocks =
        //    makeRegisterChangeByEventBlocks(false)

        const makeRegisterSimpleGetBlocks = (client = true) =>
            registerSimpleTypes.map<RegisterBlockDefinition>(
                ({ service, register }) => ({
                    kind: "block",
                    type: `jacdac_get_simple_${service.shortId}_${
                        register.name
                    }${client ? "" : "_server"}`,
                    message0:
                        customMessage(service, register, register.fields[0])
                            ?.get || `%1 ${humanify(register.name)}`,
                    args0: [roleVariable(service, client)],
                    inputsInline: true,
                    output: toBlocklyType(register.fields[0]),
                    colour: serviceColor(service),
                    tooltip: register.description,
                    helpUrl: serviceHelp(service),
                    service,
                    register,
                    field: register.fields[0],

                    template: "register_get",
                })
            )

        const registerSimpleGetClientBlocks = makeRegisterSimpleGetBlocks()
        const registerSimpleGetServerBlocks = makeRegisterSimpleGetBlocks(false)

        const makeRegisterEnumGetBlocks = (client = true) =>
            [
                ...registerSimpleEnumTypes,
                ...registerCompositeEnumTypes,
            ].map<RegisterBlockDefinition>(
                ({ service, register, field, einfo }) => ({
                    kind: "block",
                    type: `jacdac_get_enum_${service.shortId}_${
                        register.name
                    }_${field.name}${client ? "" : "_server"}`,
                    message0:
                        customMessage(service, register, field)?.get ||
                        `%1 ${humanify(register.name)}${
                            field.name === "_" ? "" : ` ${field.name}`
                        } %2`,
                    args0: [
                        roleVariable(service, client),
                        <OptionsInputDefinition>{
                            type: "field_dropdown",
                            name: field.name,
                            options: Object.keys(einfo.members).map(member => [
                                humanify(member),
                                member,
                            ]),
                        },
                    ],
                    inputsInline: true,
                    output: "Boolean",
                    colour: serviceColor(service),
                    tooltip: register.description,
                    helpUrl: serviceHelp(service),
                    service,
                    register,
                    field,

                    template: "register_get",
                })
            )
        const registerEnumGetClientBlocks = makeRegisterEnumGetBlocks()
        const registerEnumGetServerBlocks = makeRegisterEnumGetBlocks(false)

        const makeRegisterNumericsGetBlocks = (client = true) =>
            registerComposites
                .filter(re => re.register.fields.some(isNumericType))
                .map<RegisterBlockDefinition>(({ service, register }) => ({
                    kind: "block",
                    type: `jacdac_get_numerics_${service.shortId}_${
                        register.name
                    }${client ? "" : "_server"}`,
                    message0: `%1 ${humanify(register.name)}${
                        register.fields.length > 1 ? ` %2` : ""
                    }`,
                    args0: [
                        roleVariable(service, client),
                        register.fields.length > 1
                            ? <OptionsInputDefinition>{
                                  type: "field_dropdown",
                                  name: "field",
                                  options: register.fields
                                      .filter(f => isNumericType(f))
                                      .map(field => [
                                          humanify(field.name),
                                          fieldName(register, field),
                                      ]),
                              }
                            : undefined,
                    ].filter(v => !!v),
                    inputsInline: true,
                    output: "Number",
                    colour: serviceColor(service),
                    tooltip: register.description,
                    helpUrl: serviceHelp(service),
                    service,
                    register,

                    template: "register_get",
                }))
        const registerNumericsGetClientBlocks = makeRegisterNumericsGetBlocks()
        const registerNumericsGetServerBlocks =
            makeRegisterNumericsGetBlocks(false)

        const makeRegisterSetBlocks = (client = true) =>
            registers
                .filter(({ register }) => !client || register.kind === "rw")
                .filter(({ register }) => fieldsSupported(register))
                .map<RegisterBlockDefinition>(({ service, register }) => ({
                    kind: "block",
                    type: `jacdac_set_${service.shortId}_${register.name}${
                        client ? "" : "_server"
                    }`,
                    message0: isEnabledRegister(register)
                        ? `set %1 %2`
                        : `set %1 ${register.name} to ${
                              register.fields.length === 1
                                  ? "%2"
                                  : fieldsToMessage(register)
                          }`,
                    args0: [
                        roleVariable(service, client),
                        ...fieldsToFieldInputs(register),
                    ],
                    values: fieldsToValues(service, register),
                    inputsInline: true,
                    colour: serviceColor(service),
                    tooltip: register.description,
                    helpUrl: serviceHelp(service),
                    service,
                    register,
                    previousStatement: CODE_STATEMENT_TYPE,
                    nextStatement: CODE_STATEMENT_TYPE,

                    template: "register_set",
                }))

        const registerSetClientBlocks = makeRegisterSetBlocks()
        const registerSetServerBlocks = makeRegisterSetBlocks(false)

        const makeRegisterSetRequestBlocks = (isGet: boolean) =>
            registers
                .filter(
                    r =>
                        (isGet &&
                            (r.register.kind === "ro" ||
                                r.register.kind === "rw")) ||
                        (!isGet && r.register.kind == "rw")
                )
                .map<EventBlockDefinition>(({ service, register }) => ({
                    kind: "block",
                    type: `jacdac_register_${isGet ? "get" : "set"}_request_${
                        service.shortId
                    }_${register.name}`,
                    message0: `on register ${
                        isGet ? "get" : "set"
                    } %1 ${humanify(register.name)}`,
                    args0: [roleVariable(service, false)],
                    colour: serviceColor(service),
                    inputsInline: true,
                    nextStatement: CODE_STATEMENT_TYPE,
                    tooltip: register.description,
                    helpUrl: serviceHelp(service),
                    service,
                    events: [register],
                    template: "event",
                }))
        const registerSetRequestBlocks = makeRegisterSetRequestBlocks(false)
        const registerGetRequestBlocks = makeRegisterSetRequestBlocks(true)

        const commandClientBlocks = commands.map<CommandBlockDefinition>(
            ({ service, command }) => ({
	@@ -842,7 +1197,7 @@ export class ServicesBlockDomainSpecificLanguage
                args0: [roleVariable(service), ...fieldsToFieldInputs(command)],
                values: fieldsToValues(service, command),
                inputsInline: true,
                colour: serviceColor(service),
                tooltip: command.description,
                helpUrl: serviceHelp(service),
                service,
	@@ -854,24 +1209,7 @@ export class ServicesBlockDomainSpecificLanguage
            })
        )

        const commandServerBlocks = commands.map<EventBlockDefinition>(
            ({ service, command }) => ({
                kind: "block",
                type: `jacdac_command_server_${service.shortId}_${command.name}`,
                message0: `on ${humanify(command.name)} %1`,
                args0: [roleVariable(service, false)],
                colour: serviceColor(service),
                inputsInline: true,
                nextStatement: CODE_STATEMENT_TYPE,
                tooltip: command.description,
                helpUrl: serviceHelp(service),
                service,
                events: [command],
                template: "event",
            })
        )

        this._serviceClientBlocks = [
            ...eventClientBlocks,
            ...registerSimpleGetClientBlocks,
            ...registerEnumGetClientBlocks,
	@@ -882,101 +1220,9 @@ export class ServicesBlockDomainSpecificLanguage
            ...registerChangeByEventClientBlocks,
        ]

        this._serviceServerBlocks = [
            ...eventServerBlocks,
            ...registerSimpleGetServerBlocks,
            ...registerEnumGetServerBlocks,
            ...registerNumericsGetServerBlocks,
            ...registerSetServerBlocks,
            ...commandServerBlocks,
            ...registerSetRequestBlocks,
            ...registerGetRequestBlocks
            // ...registerChangeByEventServerBlocks,
        ]

        const eventFieldGroups = [
            {
                output: NUMBER_TYPE,
                filter: isNumericType,
            },
            {
                output: BOOLEAN_TYPE,
                filter: isBooleanField,
            },
            {
                output: STRING_TYPE,
                filter: (f: jdspec.PacketMember) =>
                    isStringField(f) && f.encoding !== "JSON",
            },
            {
                output: JSON_TYPE,
                filter: (f: jdspec.PacketMember) =>
                    isStringField(f) && f.encoding === "JSON",
            },
        ]

        type servicePackets = {
            service: jdspec.ServiceSpec
            packets: jdspec.PacketInfo[]
        }
        // generate accessor blocks for event/command data with numbers
        const makeFieldBlocks = (sps: servicePackets[], client = true) => {
            const worker = (
                sp: servicePackets,
                output: string,
                filter: (field: jdspec.PacketMember) => boolean
            ) => {
                const { service, packets } = sp
                return packets
                    .filter(pkt => pkt.fields.filter(filter).length > 0)
                    .map(pkt => ({ service, pkt }))
                    .map(
                        ({ service, pkt }) =>
                            <EventFieldDefinition>{
                                kind: "block",
                                type: `jacdac_event_field_${output.toLowerCase()}_${
                                    service.shortId
                                }_${pkt.name}${client ? "" : "_server"}`,
                                message0: `${pkt.name} %1`,
                                args0: [
                                    <InputDefinition>{
                                        type: "field_dropdown",
                                        name: "field",
                                        options: pkt.fields.map(field => [
                                            humanify(field.name),
                                            field.name,
                                        ]),
                                    },
                                ],
                                colour: serviceColor(service),
                                inputsInline: true,
                                tooltip: `Data fields of the ${pkt.name} ${
                                    client ? "event" : "command"
                                }`,
                                helpUrl: serviceHelp(service),
                                service,
                                event: pkt,
                                output,
                                template: "event_field",
                            }
                    )
            }

            return arrayConcatMany(
                arrayConcatMany(
                    eventFieldGroups.map(({ output, filter }) =>
                        sps.map(sp => worker(sp, output, filter))
                    )
                )
            )
        }

        this._eventFieldClientBlocks = makeFieldBlocks(
            events.map(p => ({ service: p.service, packets: p.events }))
        )
        this._commandFieldServerBlocks = makeFieldBlocks(
            commands.map(p => ({ service: p.service, packets: [p.command] }))
        )

        // client only
        this._roleBlocks = [
	@@ -1135,158 +1381,32 @@ export class ServicesBlockDomainSpecificLanguage
                    },
                    <InputDefinition>{
                        type: JDomTreeField.KEY,
                        name: "twin",
                    },
                ],
                colour: toolsColour,
                inputsInline: false,
                tooltip: `Inspect a service`,
                helpUrl: "",
                template: "meta",
            },
        ]

        return [
            ...this._serviceClientBlocks,
            ...this._serviceServerBlocks,
            ...this._eventFieldClientBlocks,
            ...this._commandFieldServerBlocks,
            ...this._roleBlocks,
            ...toolsBlocks,
        ]
    }

    createCategory(options: CreateCategoryOptions) {
        const { theme, source, liveServices } = options
        const serviceColor = createServiceColor(theme)

        const blockServices: { serviceShortId: string }[] =
            source?.variables
                .map(parseRoleType)
                .filter(
                    vt => !!serviceSpecificationFromName(vt.serviceShortId)
                ) || []
        const usedEvents: Set<jdspec.PacketInfo> = new Set(
            source?.blocks
                ?.map(block => ({
                    block,
                    definition: resolveBlockDefinition(block.type),
                }))
                .filter(({ definition }) => definition?.template === "event")
                .map(({ block, definition }) => {
                    const { events } = definition as EventBlockDefinition
                    if (events.length === 1) return events[0]
                    else {
                        const eventName = block.inputs[0].fields["event"]
                            .value as string
                        return events.find(ev => ev.name === eventName)
                    }
                })
                .filter(ev => !!ev)
        )
        const jdBlocks = this._serviceClientBlocks.filter(
            block => !!block.service
        )
        const services = uniqueMap(
            jdBlocks,
            block => block.service.shortId,
            block => block.service
        )

        const toolboxServices: jdspec.ServiceSpec[] = uniqueMap(
            Flags.diagnostics
                ? services
                : [
                      ...blockServices
                          .map(pair =>
                              services.find(
                                  service =>
                                      service.shortId === pair.serviceShortId
                              )
                          )
                          .filter(srv => !!srv),
                      ...liveServices.map(s => s.specification),
                  ],
            srv => srv.shortId,
            srv => srv
        )
            .filter(
                srv => srv && ignoredServices.indexOf(srv.classIdentifier) < 0
            )
            .sort((l, r) => l.name.localeCompare(r.name))

        const getFieldBlocks = (
            service: jdspec.ServiceSpec,
            fieldBlocks: EventFieldDefinition[]
        ) =>
            fieldBlocks
                .filter(
                    ev => ev.service === service && usedEvents.has(ev.event)
                )
                .map<BlockReference>(block => ({
                    kind: "block",
                    type: block.type,
                    values: block.values,
                }))

        const makeCategory = (
            service: jdspec.ServiceSpec,
            isClient: boolean,
            serviceBlocks: ServiceBlockDefinition[]
        ) => {
            return {
                kind: "category",
                name: service.name + (isClient ? "" : ":S"),
                colour: serviceColor(service),
                contents: [
                    <ButtonDefinition>{
                        kind: "button",
                        text: `Add ${service.name} role`,
                        callbackKey: `jacdac_add_role_callback_${toRoleType(
                            service,
                            isClient
                        )}`,
                        callback: workspace =>
                            Variables.createVariableButtonHandler(
                                workspace,
                                null,
                                toRoleType(service, isClient)
                            ),
                    },
                    ...serviceBlocks.map<BlockReference>(block => ({
                        kind: "block",
                        type: block.type,
                        values: block.values,
                    })),
                    ...getFieldBlocks(
                        service,
                        isClient
                            ? this._eventFieldClientBlocks
                            : this._commandFieldServerBlocks
                    ),
                ],
            }
        }

        const makeServicesCategories = (client = true) =>
            toolboxServices
                .map(serviceClient => ({
                    serviceClient,
                    serviceBlocks: (client
                        ? this._serviceClientBlocks
                        : this._serviceServerBlocks
                    ).filter(block => block.service === serviceClient),
                }))
                .map<CategoryDefinition>(
                    sc =>
                        makeCategory(
                            sc.serviceClient,
                            client,
                            sc.serviceBlocks
                        ) as CategoryDefinition
                )
        const clientServicesCategories = makeServicesCategories()
        const serverServicesCategories = makeServicesCategories(false)

        const commonCategory: CategoryDefinition = {
            kind: "category",
	@@ -1330,242 +1450,9 @@ export class ServicesBlockDomainSpecificLanguage
            ],
        }

        return [
            ...clientServicesCategories,
            commonCategory,
            toolsCategory,
            <SeparatorDefinition>{
                kind: "sep",
            },
            <LabelDefinition>{
                kind: "label",
                text: "Servers",
            },
            ...serverServicesCategories,
        ]
    }

    compileEventToVM(options: CompileEventToVMOptions): CompileEventToVMResult {
        const makeAwaitEvent = (
            cmd: string,
            role: string,
            eventName: string
        ) => {
            return <CompileEventToVMResult>{
                expression: <jsep.CallExpression>{
                    type: "CallExpression",
                    arguments:
                        cmd == "awaitEvent"
                            ? [
                                  toMemberExpression(
                                      role.toString(),
                                      eventName.toString()
                                  ),
                              ]
                            : [
                                  toIdentifier(role.toString()),
                                  toIdentifier(eventName.toString()),
                              ],
                    callee: toIdentifier(cmd),
                },
                event: {
                    role: role.toString(),
                    event: eventName.toString(),
                },
            }
        }

        const { block, definition, blockToExpression } = options
        const { inputs } = block
        const { template } = definition

        switch (template) {
            case "event": {
                const { value: role } = inputs[0].fields["role"]
                const { value: eventName } = inputs[0].fields["event"]
                return makeAwaitEvent(
                    "awaitEvent",
                    role.toString(),
                    eventName.toString()
                )
            }
            case "register_change_event": {
                const { value: role } = inputs[0].fields["role"]
                const { register } = definition as RegisterBlockDefinition
                const { expr, errors } = blockToExpression(
                    undefined,
                    inputs[0].child
                )
                return <CompileEventToVMResult>{
                    expression: <jsep.CallExpression>{
                        type: "CallExpression",
                        arguments: [
                            toMemberExpression(role.toString(), register.name),
                            expr,
                        ],
                        callee: toIdentifier("awaitChange"),
                    },
                    errors,
                }
            }
            default: {
                const { type } = block
                switch (type) {
                    case ROLE_BOUND_EVENT_BLOCK: {
                        const { value: role } = inputs[0].fields["role"]
                        const { value: eventName } = inputs[0].fields["event"]
                        return makeAwaitEvent(
                            "roleBound",
                            role.toString(),
                            eventName.toString()
                        )
                    }
                }
            }
        }
        return undefined
    }

    compileExpressionToVM(
        options: CompileExpressionToVMOptions
    ): ExpressionWithErrors {
        const { event, definition, block } = options
        const { inputs, id } = block
        const { template } = definition
        switch (template) {
            case "register_get": {
                const { register } = definition as RegisterBlockDefinition
                const { value: role } = inputs[0].fields["role"]
                const field = inputs[0].fields["field"]
                return {
                    expr: toMemberExpression(
                        role as string,
                        field
                            ? toMemberExpression(
                                  register.name,
                                  field.value as string
                              )
                            : register.name
                    ),
                    errors: [],
                }
            }
            case "event_field": {
                const { event: eventInfo } = definition as EventFieldDefinition
                const errors: VMError[] = []
                if (event.event !== eventInfo.name) {
                    errors.push({
                        sourceId: id,
                        message: `Event ${eventInfo.name} is not available in this handler.`,
                    })
                }
                const field = inputs[0].fields["field"]
                return {
                    expr: toMemberExpression(
                        event.role,
                        toMemberExpression(event.event, field.value as string)
                    ),
                    errors,
                }
            }
            default: {
                const { type } = block
                const errors: VMError[] = []
                switch (type) {
                    case ROLE_BOUND_BLOCK: {
                        const { value: role } = inputs[0].fields["role"]
                        return {
                            expr: {
                                type: "CallExpression",
                                arguments: [toIdentifier(role.toString())],
                                callee: toMemberExpression(
                                    "$fun",
                                    "roleBoundExpression"
                                ),
                            } as jsep.Expression,
                            errors,
                        }
                    }
                }
            }
        }
        return undefined
    }

    compileCommandToVM(options: CompileCommandToVMOptions) {
        const { event, block, definition, blockToExpression } = options
        const { template } = definition
        const { inputs } = block
        switch (template) {
            case "register_set": {
                // TODO: need to handle the case of writing a register with fields
                const { register } = definition as RegisterBlockDefinition
                const exprsErrors = inputs.map(a => {
                    return blockToExpression(event, a.child)
                })
                const { value: role } = inputs[0].fields.role
                return {
                    cmd: makeVMBase(block, {
                        type: "CallExpression",
                        arguments: [
                            toMemberExpression(role as string, register.name),
                            ...exprsErrors.map(p => p.expr),
                        ],
                        callee: toIdentifier("writeRegister"),
                    }),
                    errors: exprsErrors.flatMap(p => p.errors),
                }
            }
            case "raiseNo":
            case "raiseArgs":
            case "command": {
                const { command: serviceCommand } =
                    definition as CommandBlockDefinition
                const { value: role } = inputs[0].fields.role
                const eventName =
                    template === "raiseNo"
                        ? inputs[0].fields["event"].value.toString()
                        : ""
                const exprsErrors =
                    template === "raiseNo"
                        ? []
                        : inputs.map(a => {
                              return blockToExpression(event, a.child)
                          })
                return {
                    cmd: makeVMBase(block, {
                        type: "CallExpression",
                        arguments: exprsErrors.map(p => p.expr),
                        callee: toMemberExpression(
                            role as string,
                            eventName ? eventName : serviceCommand.name
                        ),
                    }),
                    errors: exprsErrors.flatMap(p => p.errors),
                }
            }
            case "server": {
                return {
                    cmd: makeVMBase(block, {
                        type: "CallExpression",
                        arguments: [],
                        callee: toIdentifier("nop"),
                    }),
                    errors: [],
                }
            }
            default: {
                const { type } = block
                switch (type) {
                    case SET_STATUS_LIGHT_BLOCK: {
                        console.log("SET_STATUS")
                    }
                }
            }
        }

        return undefined
    }
}
const servicesDSL = new ServicesBlockDomainSpecificLanguage()
export default servicesDSL

*/