import React, { useState, useMemo, useContext } from "react"
import PaperBox from "../ui/PaperBox"
import { Tab, Tabs } from "@mui/material"
import CodeBlock from "../CodeBlock"
import TabPanel from "../ui/TabPanel"
import MakeCodeSnippetContext from "./MakeCodeSnippetContext"
import { withPrefix } from "gatsby"
import parseMakeCodeSnippet from "./makecodesnippetparser"
import { JSONTryParse } from "../../../jacdac-ts/src/jdom/utils"
import MakeCodeOpenSnippetButton from "./MakeCodeOpenSnippetButton"

interface Request {
    code: string
    options: {
        package: string
    }
}
interface Rendered {
    req: Request
    url: string
    width: number
    height: number
}

export default function MakeCodeSnippet(props: { renderedSource: string }) {
    const { renderedSource } = props
    const { source, rendered } = useMemo(
        () =>
            JSONTryParse<{
                source?: string
                rendered?: Rendered
            }>(renderedSource, {}),
        [renderedSource]
    )
    const snippet = useMemo(
        () => source && parseMakeCodeSnippet(source),
        [source]
    )
    const { url, req } = rendered || {}
    const tabs = ["blocks", "typescript"]
    const { editor, setEditor } = useContext(MakeCodeSnippetContext)
    const [tab, setTab] = useState(tabs.indexOf(editor) || 0)
    const handleTabChange = (
        event: React.ChangeEvent<unknown>,
        newValue: number
    ) => {
        if (newValue < tabs.length - 1) setEditor(tabs[newValue])
        setTab(newValue)
    }
    const { code } = snippet || {}

    let tabi = 0
    return (
        <PaperBox>
            <Tabs
                value={tab}
                onChange={handleTabChange}
                aria-label="Select MakeCode editor"
            >
                {url && <Tab label={"Blocks"} />}
                <Tab label={"JavaScript"} />
            </Tabs>
            {url && (
                <TabPanel value={tab} index={tabi++}>
                    <img src={withPrefix(url)} alt={source} loading="lazy" />
                </TabPanel>
            )}
            <TabPanel value={tab} index={tabi++}>
                <CodeBlock className="typescript">
                    {code ?? renderedSource}
                </CodeBlock>
            </TabPanel>
            {req && <MakeCodeOpenSnippetButton sx={{ mr: 0.5 }} {...req} />}
        </PaperBox>
    )
}
