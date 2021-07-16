import React, { lazy, useContext } from "react"
import Highlight, {
    defaultProps,
    Language,
    PrismTheme,
} from "prism-react-renderer"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import LIGHT_THEME from "prism-react-renderer/themes/github"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import DARK_THEME from "prism-react-renderer/themes/vsDark"
import DarkModeContext from "./ui/DarkModeContext"
import { IconButton, Link } from "gatsby-theme-material-ui"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import GetAppIcon from "@material-ui/icons/GetApp"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import LaunchIcon from "@material-ui/icons/Launch"
import Tooltip from "./ui/Tooltip"
import MakeCodeSnippet from "./makecode/MakeCodeSnippet"
import Suspense from "./ui/Suspense"

const TraceSnippet = lazy(() => import("./trace/TraceSnippet"))
const CodeSandboxButton = lazy(() => import("./ui/CodeSandboxButton"))

function HighlightedCode(props: {
    children: string
    codeSandbox?: boolean
    className?: string
    downloadName?: string
    downloadText?: string
    url?: string
}) {
    const {
        children,
        codeSandbox,
        className,
        downloadName,
        downloadText,
        url,
    } = props
    const { darkMode } = useContext(DarkModeContext)
    const language = className?.replace(/language-/, "") || ""
    const theme = (darkMode === "dark" ? DARK_THEME : LIGHT_THEME) as PrismTheme
    const valueUri =
        !!downloadText &&
        `data:application/json;charset=UTF-8,${encodeURIComponent(
            downloadText
        )}`

    return (
        <Highlight
            {...defaultProps}
            code={children?.replace(/[\s\r\n]*$/g, "") || ""}
            language={language as Language}
            theme={theme}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={{ ...style }}>
                    {!!url && (
                        <Link style={{ float: "right" }} href={url}>
                            <Tooltip title={`Open ${url}`}>
                                <IconButton>
                                    <LaunchIcon />
                                </IconButton>
                            </Tooltip>
                        </Link>
                    )}
                    {!!downloadText && (
                        <Link
                            style={{ float: "right" }}
                            href={valueUri}
                            download={downloadName || "download"}
                        >
                            <Tooltip title="Download">
                                <IconButton>
                                    <GetAppIcon />
                                </IconButton>
                            </Tooltip>
                        </Link>
                    )}
                    {codeSandbox && (
                        <div style={{ float: "right" }}>
                            <Suspense>
                                <CodeSandboxButton source={children} />
                            </Suspense>
                        </div>
                    )}
                    {tokens?.map((line, index) => {
                        const lineProps = getLineProps({ line, key: index })
                        return (
                            <div key={index} {...lineProps}>
                                {line.map((token, key) => (
                                    <span
                                        key={key}
                                        {...getTokenProps({ token, key })}
                                    />
                                ))}
                            </div>
                        )
                    })}
                </pre>
            )}
        </Highlight>
    )
}

export default function CodeBlock(props: {
    children: string
    className?: string
    downloadName?: string
    downloadText?: string
    url?: string
}) {
    const { children, className } = props
    const language = className?.replace(/language-/, "") || ""

    switch (language) {
        case "trace":
            return (
                <Suspense>
                    <TraceSnippet source={children} />
                </Suspense>
            )
        case "blocks":
            return <MakeCodeSnippet renderedSource={children} />
        case "vanilla":
            return (
                <HighlightedCode
                    {...props}
                    className={"javascript"}
                    codeSandbox={true}
                />
            )
        default:
            return <HighlightedCode {...props} />
    }
}
