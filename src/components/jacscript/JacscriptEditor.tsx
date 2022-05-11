import { Grid, NoSsr } from "@mui/material"
import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react"
import { Flags } from "../../../jacdac-ts/src/jdom/flags"
import VMDiagnostics from "./VMDiagnostics"
import BlockContext, { BlockProvider } from "../blockly/BlockContext"
import BlockDiagnostics from "../blockly/BlockDiagnostics"
import workspaceJSONToJacscriptProgram from "./JacscriptGenerator"
import BlockEditor from "../blockly/BlockEditor"
import { arrayConcatMany } from "../../../jacdac-ts/src/jdom/utils"
import { JACSCRIPT_WARNINGS_CATEGORY } from "../blockly/toolbox"
import { WorkspaceFile } from "../blockly/dsl/workspacejson"
import jacscriptDsls from "./jacscriptdsls"
import { VMProgram } from "../../../jacdac-ts/src/vm/ir"
import JacscriptDiagnostics from "./JacscriptDiagnostics"
import { toJacscript } from "../../../jacdac-ts/src/vm/ir2jacscript"
import JacscriptEditorToolbar from "./JacscriptEditorToolbar"
import useJacscript, { JacscriptProvider } from "./JacscriptContext"

export const JACSCRIPT_EDITOR_ID = "jcs"
const JACSCRIPT_SOURCE_STORAGE_KEY = "tools:jacscripteditor"
export const JACSCRIPT_NEW_FILE_CONTENT = JSON.stringify({
    editor: JACSCRIPT_EDITOR_ID,
    xml: "",
} as WorkspaceFile)

function JacscriptEditorWithContext() {
    const { dsls, workspaceJSON, roleManager, setWarnings } =
        useContext(BlockContext)
    const [program, setProgram] = useState<VMProgram>()
    const {
        program: jscProgram,
        setProgram: setJscProgram,
        compiled: jscCompiled,
    } = useJacscript()

    useEffect(() => {
        try {
            const newProgram = workspaceJSONToJacscriptProgram(
                workspaceJSON,
                dsls
            )
            if (JSON.stringify(newProgram) !== JSON.stringify(program)) {
                setProgram(newProgram)
                const jsc = toJacscript(newProgram)
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

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={8}>
                <Grid container direction="column" spacing={1}>
                    <JacscriptEditorToolbar jscCompiled={jscCompiled} />
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
            const program = workspaceJSONToJacscriptProgram(file.json, dsls)
            file.jsc = toJacscript(program)
        },
        []
    )

    return (
        <NoSsr>
            <JacscriptProvider>
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
                    <JacscriptEditorWithContext />
                </BlockProvider>
            </JacscriptProvider>
        </NoSsr>
    )
}
