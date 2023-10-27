import React, { useState } from "react"
import { Button, SxProps, Theme } from "@mui/material"
import { toMap } from "../../../jacdac-ts/src/jdom/utils"
import MakeCodeIcon from "../icons/MakeCodeIcon"
import IconButtonWithTooltip from "../ui/IconButtonWithTooltip"
import useMediaQueries from "../hooks/useMediaQueries"
import useSnackbar from "../hooks/useSnackbar"
import usePxtJson from "../makecode/usePxtJson"
import { Grid } from "@mui/material"

export default function MakeCodeOpenSnippetButton(props: {
    sx?: SxProps<Theme>
    name?: string
    code?: string
    options?: { package?: string }
    slug?: string
    branch?: string
    full?: boolean
}) {
    return (
        <>
            <EditorOpenSnippetButton
                {...props}
                target="microbit"
                targetName="micro:bit V2"
                editor="https://makecode.microbit.org/"
            />
            <EditorOpenSnippetButton
                {...props}
                target="calliopemini"
                targetName="Calliope mini V3"
                editor="https://makecode.calliope.cc/alpha/"
            />
        </>
    )
}

function EditorOpenSnippetButton(props: {
    sx?: SxProps<Theme>
    name?: string
    code?: string
    options?: { package?: string }
    slug?: string
    branch?: string
    full?: boolean
    target: string
    targetName: string
    editor: string
}) {
    const { setError } = useSnackbar()
    const { mobile } = useMediaQueries()
    const [importing, setImporting] = useState(false)
    const {
        sx,
        code = "",
        options,
        name = "Jacdac demo",
        slug,
        branch = "master",
        full,
        target,
        targetName,
        editor,
    } = props
    const pxt = usePxtJson(slug, branch)
    const disabled = importing || (slug && !pxt)

    const handleClick = async () => {
        const md = "\n"
        const deps = options?.package?.split(",").map(dep => dep.split("=", 2))
        const dependencies =
            toMap(
                deps,
                deps => deps[0],
                deps => deps[1]
            ) || {}
        if (pxt) dependencies[pxt.name] = `github:${slug}#v${pxt.version}`

        try {
            setImporting(true)
            const x = await fetch("https://makecode.com/api/scripts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name,
                    target,
                    description: "Made with ❤️ in Microsoft Jacdac.",
                    editor: "blocksprj",
                    text: {
                        "README.md": md,
                        "main.blocks": code
                            ? ""
                            : `<xml xmlns="http://www.w3.org/1999/xhtml"></xml>`,
                        "main.ts": code,
                        "pxt.json": JSON.stringify({
                            name: name,
                            dependencies: {
                                core: "*",
                                microphone: "*",
                                ...dependencies,
                            },
                            description: "",
                            files: ["main.blocks", "main.ts", "README.md"],
                        }),
                    },
                    meta: {},
                }),
            })
            const data = await x.json()
            const url = `${editor}#pub:${data.shortid}`
            window.open(url, "_blank", "noreferrer")
        } catch (error) {
            setError(error)
        } finally {
            setImporting(false)
        }
    }

    return !full && mobile ? (
        <IconButtonWithTooltip
            sx={sx}
            onClick={handleClick}
            color="primary"
            disabled={disabled}
            title={`Try in ${targetName}`}
        >
            <MakeCodeIcon />
        </IconButtonWithTooltip>
    ) : (
        <Button
            sx={sx}
            variant="outlined"
            color="primary"
            onClick={handleClick}
            disabled={disabled}
            startIcon={<MakeCodeIcon />}
        >
            {targetName}
        </Button>
    )
}
