import React, { useMemo } from "react";
import { parseTrace } from "../../../src/jdom/logparser";
import TraceView from "./TraceView";

export default function TraceSnippet(props: { source: string }) {
    const { source } = props;
    const trace = useMemo(() => parseTrace(source), [source])
    return <TraceView trace={trace} />
}