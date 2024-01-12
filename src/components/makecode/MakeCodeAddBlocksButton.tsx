import Tooltip from "../ui/Tooltip"
import { Button } from "gatsby-theme-material-ui"
import React, { useMemo } from "react"
import useChange from "../../jacdac/useChange"
import IFrameBridgeClient from "./iframebridgeclient"
import MakeCodeIcon from "../../components/icons/MakeCodeIcon"
import useBus from "../../jacdac/useBus"

export default function MakeCodeAddBlocksButton() {
    const bus = useBus()
    const iframeBridge = bus.nodeData[
        IFrameBridgeClient.DATA_ID
    ] as IFrameBridgeClient
    const extensions = useChange(iframeBridge, _ => _?.candidateExtensions())
    const handleAdd = () => iframeBridge?.postAddExtensions()
    const isMakeCodeTool = useMemo(
        () =>
            typeof window !== "undefined" &&
            /makecode/.test(window.location.href),
        []
    )
    const isButtonEnabled = !!extensions?.length

    //TODO: i18n
    const enabledTooltip =
        "Add blocks for your connected and simulated devices to the modules drawer"
    const disabledTooltip =
        "This button becomes available if you have devices connected that don't have their matching blocks added to the 'Modules' drawer"

    if (!isMakeCodeTool) return null

    return (
        <Tooltip
            describeChild
            title={isButtonEnabled ? enabledTooltip : disabledTooltip}
            placement="bottom"
        >
            <span>
                <Button
                    sx={{ mr: 1 }}
                    size="small"
                    color="primary"
                    variant="contained"
                    disabled={!isButtonEnabled}
                    startIcon={<MakeCodeIcon />}
                    onClick={handleAdd}
                >
                    Add blocks
                </Button>
            </span>
        </Tooltip>
    )
}
