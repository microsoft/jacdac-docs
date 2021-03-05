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

const useStyles = makeStyles(() => createStyles({
    img: {
        marginBottom: 0
    }
}));

function MakeCodeSnippetTab(props: { snippet: MakeCodeSnippetSource }) {
    const { snippet } = props;
    const { code } = snippet;
    const { render } = useMakeCodeRenderer();
    const [state, setState] = useState<MakeCodeSnippetRendered>({})
    const { uri, width, height } = state;
    const theme = useTheme();
    const classes = useStyles();

    useEffectAsync(async (mounted) => {
        const resp = await render(snippet)
        if (mounted())
            setState(resp);
    }, [snippet])

    return <>
        {!uri && <Skeleton variant="rect" animation="wave" width={"100%"} height={theme.spacing(5)} />}
        {uri && <img className={classes.img} alt={code} src={uri} width={width} height={height} />}
    </>
}

function MakeCodeSnippetNoSSR(props: { source: string }) {
    const { source } = props;
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

    return <PaperBox>
        <Tabs value={tab} onChange={handleTabChange} aria-label="Select MakeCode editor">
            <Tab label={"Blocks"} />
            <Tab label={"JavaScript"} />
            <Tab label={"Simulator"} />
        </Tabs>
        <TabPanel value={tab} index={0}>
            <MakeCodeSnippetTab snippet={snippet} />
        </TabPanel>
        <TabPanel value={tab} index={1}>
            <CodeBlock className="typescript">{code}</CodeBlock>
        </TabPanel>
        <TabPanel value={tab} index={2}>
            <MakeCodeSimulator snippet={snippet} />
        </TabPanel>
    </PaperBox>
}

export default function MakeCodeSnippet(props: { source: string }) {
    return <NoSsr>
        <MakeCodeSnippetNoSSR {...props} />
    </NoSsr>
}