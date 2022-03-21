import { Chip, Grid, NoSsr } from "@mui/material"
import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react"
import { Flags } from "../../../jacdac-ts/src/jdom/flags"
import VMDiagnostics from "./VMDiagnostics"
import BlockRolesToolbar from "../blockly/BlockRolesToolbar"
import BlockContext, { BlockProvider } from "../blockly/BlockContext"
import BlockDiagnostics from "../blockly/BlockDiagnostics"
import workspaceJSONToJacScriptProgram from "./JacscriptGenerator"
import BlockEditor from "../blockly/BlockEditor"
import { arrayConcatMany } from "../../../jacdac-ts/src/jdom/utils"
import {
    JACSCRIPT_WARNINGS_CATEGORY,
    WORKSPACE_FILENAME,
} from "../blockly/toolbox"
import FileTabs from "../fs/FileTabs"
import { WorkspaceFile } from "../blockly/dsl/workspacejson"
import FileSystemContext from "../FileSystemContext"
import jacscriptDsls from "./jacscriptdsls"
import { VMProgram } from "../../../jacdac-ts/src/vm/ir"
import JacscriptDiagnostics from "./JacscriptDiagnostics"
import {
    JacScriptProgram,
    toJacScript,
} from "../../../jacdac-ts/src/vm/ir2jacscript"
import useEffectAsync from "../useEffectAsync"
import { jacScriptCompile } from "../blockly/dsl/workers/jacscript.proxy"
import type { JacscriptCompileResponse } from "../../workers/jacscript/jacscript.worker"
import {
    jacScriptCommand,
    jacScriptBridge,
} from "../blockly/dsl/workers/vm.proxy"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import StopIcon from "@mui/icons-material/Stop"
import useChange from "../../jacdac/useChange"
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty"

const JACSCRIPT_EDITOR_ID = "jcs"
const JACSCRIPT_SOURCE_STORAGE_KEY = "tools:jacscripteditor"
const JACSCRIPT_NEW_FILE_CONTENT = JSON.stringify({
    editor: JACSCRIPT_EDITOR_ID,
    xml: "",
} as WorkspaceFile)

function JacScriptExecutor(props: {
    jscCompiled: JacscriptCompileResponse
    useChip?: boolean
}) {
    const { jscCompiled, useChip } = props
    const bridge = useMemo(() => jacScriptBridge(), [])
    const state = useChange(bridge, _ => _?.state)
    const running = state === "running"
    const initializing = state === "initializing"
    const stopped = !running
    const disabled = !jscCompiled || initializing

    const handleRun = () => jacScriptCommand("start")
    const handleStop = () => jacScriptCommand("stop")

    const title = initializing ? "starting" : running ? "stop" : "start"
    const color = stopped ? "primary" : "default"
    const onClick = stopped ? handleRun : handleStop
    const icon = initializing ? (
        <HourglassEmptyIcon />
    ) : stopped ? (
        <PlayArrowIcon />
    ) : (
        <StopIcon />
    )

    return (
        <Grid item>
            {useChip ? (
                <Chip
                    label={title}
                    icon={icon}
                    color={color}
                    onClick={onClick}
                    disabled={disabled}
                />
            ) : (
                <IconButtonWithTooltip
                    title={title}
                    disabled={disabled}
                    color={color}
                    onClick={onClick}
                >
                    {icon}
                </IconButtonWithTooltip>
            )}
        </Grid>
    )
}

function JacScriptEditorWithContext() {
    const { dsls, workspaceJSON, roleManager, setWarnings } =
        useContext(BlockContext)
    const [program, setProgram] = useState<VMProgram>()
    const [jscProgram, setJscProgram] = useState<JacScriptProgram>()
    const [jscCompiled, setJscCompiled] = useState<JacscriptCompileResponse>()
    const { fileSystem } = useContext(FileSystemContext)

    useEffect(() => {
        try {
            const newProgram = workspaceJSONToJacScriptProgram(
                workspaceJSON,
                dsls
            )
            if (JSON.stringify(newProgram) !== JSON.stringify(program)) {
                setProgram(newProgram)
                const jsc = toJacScript(newProgram)
                setJscProgram(jsc)
            }
        } catch (e) {
            console.error(e)
            setProgram(undefined)
            setJscProgram(undefined)
        }
    }, [dsls, workspaceJSON])
    useEffect(
        () => program && roleManager?.updateRoles([...program.roles]),
        [roleManager, program]
    )
    useEffect(
        () =>
            setWarnings(
                JACSCRIPT_WARNINGS_CATEGORY,
                arrayConcatMany(program?.handlers.map(h => h.errors))
            ),
        [program]
    )
    useEffectAsync(
        async mounted => {
            const src = jscProgram?.program.join("\n")
            const res = src && (await jacScriptCompile(src))
            if (mounted()) setJscCompiled(res)
        },
        [jscProgram]
    )
    useEffect(() => {
        if (jscCompiled) jacScriptCommand("start")
        else jacScriptCommand("stop")
    }, [jscCompiled])

    // final cleanup on exit
    useEffect(
        () => () => {
            jacScriptCommand("stop")
        },
        []
    )

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={8}>
                <Grid container direction="column" spacing={1}>
                    {!!fileSystem && (
                        <Grid item xs={12}>
                            <FileTabs
                                newFileName={WORKSPACE_FILENAME}
                                newFileContent={JACSCRIPT_NEW_FILE_CONTENT}
                                hideFiles={true}
                            />
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <BlockRolesToolbar>
                            <JacScriptExecutor
                                jscCompiled={jscCompiled}
                                useChip={true}
                            />
                        </BlockRolesToolbar>
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
            </Grid>
            <JacscriptDiagnostics program={jscProgram} compiled={jscCompiled} />
        </Grid>
    )
}

export default function JacscriptEditor() {
    const dsls = useMemo(() => {
        return jacscriptDsls
    }, [])
    const handleOnBeforeSaveWorkspaceFile = useCallback(
        (file: WorkspaceFile) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const program = workspaceJSONToJacScriptProgram(file.json, dsls)
            file.jsc = toJacScript(program)
        },
        []
    )

    return (
        <NoSsr>
            <BlockProvider
                editorId={JACSCRIPT_EDITOR_ID}
                storageKey={JACSCRIPT_SOURCE_STORAGE_KEY}
                dsls={dsls}
                onBeforeSaveWorkspaceFile={
                    Flags.diagnostics
                        ? handleOnBeforeSaveWorkspaceFile
                        : undefined
                }
            >
                <JacScriptEditorWithContext />
            </BlockProvider>
        </NoSsr>
    )
}
