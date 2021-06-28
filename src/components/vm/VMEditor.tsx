import { Grid, NoSsr } from "@material-ui/core"
import React, { useContext, useEffect, useMemo, useState } from "react"
import Flags from "../../../jacdac-ts/src/jdom/flags"
import useVMRunner from "./useVMRunner"
import VMDiagnostics from "./VMDiagnostics"
import VMToolbar from "./VMToolbar"
import { VMProgram } from "../../../jacdac-ts/src/vm/ir"
import BlockContext, { BlockProvider } from "../blockly/BlockContext"
import BlockDiagnostics from "../blockly/BlockDiagnostics"
import workspaceJSONToVMProgram from "./VMgenerator"
import { BlocklyWorkspaceWithServices } from "../blockly/WorkspaceContext"
import BlockEditor from "../blockly/BlockEditor"
import { arrayConcatMany } from "../../../jacdac-ts/src/jdom/utils"
import vmDsls from "./vmdsls"
import { VMStatus } from "../../../jacdac-ts/src/vm/runner"
import { VM_WARNINGS_CATEGORY } from "../blockly/toolbox"

const VM_SOURCE_STORAGE_KEY = "tools:vmeditor"
function VMEditorWithContext() {
    const {
        dsls,
        workspace,
        workspaceJSON,
        roleManager,
        setWarnings,
        dragging,
    } = useContext(BlockContext)
    const [program, setProgram] = useState<VMProgram>()
    const autoStart = true
    const { runner, run, cancel } = useVMRunner(roleManager, program, autoStart)

    // don't run the VM while dragging as it glitches the Ui
    useEffect(() => {
        if (runner?.status === VMStatus.Running) cancel()
    }, [runner, dragging])
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
    useEffect(
        () =>
            setWarnings(
                VM_WARNINGS_CATEGORY,
                arrayConcatMany(program?.handlers.map(h => h.errors))
            ),
        [program]
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
                <VMToolbar runner={runner} run={run} cancel={cancel} />
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
        return vmDsls
    }, [])

    return (
        <NoSsr>
            <BlockProvider storageKey={VM_SOURCE_STORAGE_KEY} dsls={dsls}>
                <VMEditorWithContext />
            </BlockProvider>
        </NoSsr>
    )
}
