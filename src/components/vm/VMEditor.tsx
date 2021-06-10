import { Grid, NoSsr } from "@material-ui/core"
import React, { useContext, useEffect, useMemo, useRef, useState } from "react"
import Flags from "../../../jacdac-ts/src/jdom/flags"
import { WorkspaceJSON } from "../blockly/jsongenerator"
import VMBlockEditor from "./VMBlockEditor"
import useLocalStorage from "../useLocalStorage"
import useVMRunner from "./useVMRunner"
import useRoleManager from "../hooks/useRoleManager"
import VMDiagnostics from "./VMDiagnostics"
import VMToolbar from "./VMToolbar"
import { WorkspaceSvg } from "blockly"
import { VMProgram } from "../../../jacdac-ts/src/vm/ir"
import BlockContext, { BlockProvider } from "../blockly/BlockContext"
import BlockDiagnostics from "../blockly/BlockDiagnostics"
import servicesDSL from "../blockly/dsl/servicesdsl"
import azureIoTHubDSL from "../blockly/dsl/azureiothubdsl"
import deviceTwinDSL from "../blockly/dsl/devicetwindsl"
import toolsDSL from "../blockly/dsl/toolsdsl"
import loopsDsl from "../blockly/dsl/loopsdsl"
import logicDsl from "../blockly/dsl/logicdsl"
import mathDSL from "../blockly/dsl/mathdsl"
import variablesDsl from "../blockly/dsl/variablesdsl"
import shadowDsl from "../blockly/dsl/shadowdsl"
import workspaceJSONToVMProgram from "./VMgenerator"
import { BlocklyWorkspaceWithServices } from "../blockly/WorkspaceContext"
import BlockEditor from "../blockly/BlockEditor"

const VM_SOURCE_STORAGE_KEY = "tools:vmeditor"
function VMEditorWithContext() {
    const { dsls, workspace, workspaceXml, workspaceJSON, roleManager } =
        useContext(BlockContext)
    const [program, setProgram] = useState<VMProgram>()
    const autoStart = true
    const { runner, run, cancel } = useVMRunner(roleManager, program, autoStart)

    useEffect(() => setXml(workspaceXml), [workspaceXml])
    useEffect(() => {
        try {
            const newProgram = workspaceJSONToVMProgram(workspaceJSON, dsls)
            if (JSON.stringify(newProgram) !== JSON.stringify(program))
                setProgram(newProgram)
        } catch (e) {
            console.error(e)
            setProgram(undefined)
        }
    }, [dsls, workspaceJSON])
    useEffect(
        () => program && roleManager?.setRoles(program.roles),
        [roleManager, program]
    )

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ws = workspace as any as BlocklyWorkspaceWithServices
        const services = ws?.jacdacServices
        if (services) {
            services.runner = runner
        }
    }, [workspace, runner])

    return (
        <Grid container direction="column" spacing={1}>
            <Grid item xs={12}>
                <VMToolbar
                    roleManager={roleManager}
                    runner={runner}
                    run={run}
                    cancel={cancel}
                    program={program}
                />
            </Grid>
            <Grid item xs={12}>
                <BlockEditor />
            </Grid>
            {Flags.diagnostics && (
                <>
                    <VMDiagnostics program={program} />
                    <BlockDiagnostics />
                </>
            )}
        </Grid>
    )
}

export default function VMEditor() {
    const dsls = useMemo(() => {
        return [
            servicesDSL,
            azureIoTHubDSL,
            deviceTwinDSL,
            toolsDSL,
            loopsDsl,
            logicDsl,
            mathDSL,
            variablesDsl,
            shadowDsl,
        ]
    }, [])

    return (
        <NoSsr>
            <BlockProvider storageKey={VM_SOURCE_STORAGE_KEY} dsls={dsls}>
                <VMEditorWithContext />
            </BlockProvider>
        </NoSsr>
    )
}
