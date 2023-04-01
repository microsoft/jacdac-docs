import React, { lazy, useCallback, useEffect, useState } from "react"
import { Grid } from "@mui/material"
import {
    HidKeyboardAction,
    HidKeyboardCmd,
    HidKeyboardCmdPack,
    HidKeyboardModifiers,
} from "../../../jacdac-ts/jacdac-spec/dist/specconstants"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import { jdpack } from "../../../jacdac-ts/src/jdom/pack"
import CmdButton from "../CmdButton"
import KeyboardIcon from "@mui/icons-material/Keyboard"
import Suspense from "../ui/Suspense"
import {
    COMMAND_RECEIVE,
    Packet,
    renderKeyboardKey,
} from "../../../jacdac-ts/src/jacdac"
const KeyboardKeyInput = lazy(() => import("../ui/KeyboardKeyInput"))

export default function DashboardHIDKeyboard(props: DashboardServiceProps) {
    const { service, expanded } = props
    const [selector, setSelector] = useState(0)
    const [modifiers, setModifiers] = useState(HidKeyboardModifiers.None)
    const [keys, setKeys] = useState("")

    useEffect(
        () =>
            service?.subscribe(COMMAND_RECEIVE, (pkt: Packet) => {
                const [rest] = pkt.jdunpack<
                    [[number, HidKeyboardModifiers, HidKeyboardAction][]]
                >(HidKeyboardCmdPack.Key)
                setKeys(
                    rest
                        ?.map(([selector, modifiers]) =>
                            renderKeyboardKey(selector, modifiers, true)
                        )
                        .join(", ") || ""
                )
            }),
        [service]
    )

    const handleKeyChange = (
        newSelector: number,
        newModifiers: HidKeyboardModifiers
    ) => {
        setSelector(newSelector)
        setModifiers(newModifiers)
    }

    const handleClick = useCallback(async () => {
        const unpacked: [[number, HidKeyboardModifiers, HidKeyboardAction][]] =
            [[[selector, modifiers, HidKeyboardAction.Press]]]
        const data = jdpack("r: u16 u8 u8", unpacked)
        await service.sendCmdAsync(HidKeyboardCmd.Key, data)
    }, [selector, modifiers, service])

    const disabled = !selector && !modifiers

    return (
        <Grid container direction="column" spacing={1}>
            <Grid item xs={12}>
                <pre>{keys || "HID keyboard waiting..."}</pre>
            </Grid>
            {expanded && (
                <Grid item xs={12}>
                    <Suspense>
                        <KeyboardKeyInput
                            selector={selector}
                            modifiers={modifiers}
                            onChange={handleKeyChange}
                        />
                    </Suspense>
                </Grid>
            )}
            {expanded && (
                <Grid item xs={12}>
                    <CmdButton
                        variant="outlined"
                        title="send keys"
                        disabled={disabled}
                        onClick={handleClick}
                        icon={<KeyboardIcon />}
                    >
                        Send keys
                    </CmdButton>
                </Grid>
            )}
        </Grid>
    )
}
