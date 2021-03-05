import React, { ReactNode, useContext } from 'react'
import Highlight, { defaultProps, Language, PrismTheme } from 'prism-react-renderer'
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import LIGHT_THEME from 'prism-react-renderer/themes/github';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import DARK_THEME from 'prism-react-renderer/themes/vsDark';
import DarkModeContext from './ui/DarkModeContext';
import { IconButton, Link } from 'gatsby-theme-material-ui';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import GetAppIcon from '@material-ui/icons/GetApp';
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import LaunchIcon from '@material-ui/icons/Launch';
import Tooltip from './ui/Tooltip';
import MakeCodeSnippet from './makecode/MakeCodeSnippet';
import TraceSnippet from './TraceSnippet';

export default function CodeBlock(props: { children: ReactNode, className?: string, downloadName?: string; downloadText?: string; url?: string; }) {
    const { children, className, downloadName, downloadText, url } = props;
    const { darkMode } = useContext(DarkModeContext)
    const language = className?.replace(/language-/, '') || ""
    const theme = (darkMode === "dark" ? DARK_THEME : LIGHT_THEME) as PrismTheme;
    const valueUri = !!downloadText && `data:application/json;charset=UTF-8,${encodeURIComponent(downloadText)}`

    if (language === "blocks")
        return <MakeCodeSnippet source={children} />
    else if (language === "trace")
        return <TraceSnippet source={children} />

    return (
        <Highlight {...defaultProps}
            code={children}
            language={language as Language}
            theme={theme}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={{ ...style }}>
                    {!!url && <Link style={({ float: "right" })} href={url}><Tooltip title={`Open ${url}`}><IconButton><LaunchIcon /></IconButton></Tooltip></Link>}
                    {!!downloadText && <Link style={({ float: "right" })} href={valueUri} download={downloadName || "download"}><Tooltip title="Download"><IconButton><GetAppIcon /></IconButton></Tooltip></Link>}
                    {tokens?.map((line, index) => {
                        const lineProps = getLineProps({ line, key: index })
                        return (
                            <div key={index} {...lineProps}>
                                {line.map((token, key) => (
                                    <span key={key}{...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        )
                    }
                    )}
                </pre>
            )}
        </Highlight>
    )
}