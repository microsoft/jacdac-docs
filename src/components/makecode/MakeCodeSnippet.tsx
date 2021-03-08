import React, { useState, useMemo, useContext } from "react";
import useEffectAsync from "../useEffectAsync"
import PaperBox from "../ui/PaperBox"
import { createStyles, makeStyles, NoSsr, Tab, Tabs, useTheme } from '@material-ui/core';
import CodeBlock from "../CodeBlock";
import TabPanel from '../ui/TabPanel';
import { Skeleton } from "@material-ui/lab";
import MakeCodeSnippetContext from "./MakeCodeSnippetContext";
import { MakeCodeSnippetRendered, MakeCodeSnippetSource, parseMakeCodeSnippet, useMakeCodeRenderer } from "./useMakeCodeRenderer";
import MakeCodeSimulator from "./MakeCodeSimulator";
interface Rendered {
    url: string;
    width: number;
    height: number;
}

export default function MakeCodeSnippet(props: { renderedSource: string }) {
    const { renderedSource } = props;
    const { source, rendered } = JSON.parse(renderedSource) as { source: string; rendered: Rendered; }
    const { height, width, url } = rendered || {};
    const tabs = ["blocks", "typescript", "sim"]
    const { editor, setEditor } = useContext(MakeCodeSnippetContext);
    const [tab, setTab] = useState(tabs.indexOf(editor) || 0);
    const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
        if (newValue < tabs.length - 1)
            setEditor(tabs[newValue]);
        setTab(newValue);
    };
    const snippet = useMemo(() => parseMakeCodeSnippet(source), [source]);
    const { code } = snippet;

    const prefixPath = (global as any).__PATH_PREFIX__;
    const prefixedUrl = prefixPath ? `${prefixPath}/${url}` : url;
    return <PaperBox>
        <Tabs value={tab} onChange={handleTabChange} aria-label="Select MakeCode editor">
            <Tab label={"Blocks"} />
            <Tab label={"JavaScript"} />
            <Tab label={"Simulator"} />
        </Tabs>
        <TabPanel value={tab} index={0}>
            <img src={prefixedUrl} alt={source} />
        </TabPanel>
        <TabPanel value={tab} index={1}>
            <CodeBlock className="typescript">{code}</CodeBlock>
        </TabPanel>
        <TabPanel value={tab} index={2}>
            <MakeCodeSimulator snippet={snippet} />
        </TabPanel>
    </PaperBox>
}
