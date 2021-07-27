import React from "react"
// tslint:disable-next-line: no-submodule-imports
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports
import TreeItem, { TreeItemProps } from "@material-ui/lab/TreeItem"
// tslint:disable-next-line: no-submodule-imports
import Typography from "@material-ui/core/Typography"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import KindIcon from "../KindIcon"
import { useId } from "react-use-id-hook"

declare module "csstype" {
    interface Properties {
        "--tree-view-color"?: string
        "--tree-view-bg-color"?: string
    }
}

const useTreeItemStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            color: theme.palette.text.secondary,
            "&:hover > $content": {
                backgroundColor: theme.palette.action.hover,
            },
            "&:focus > $content, &$selected > $content": {
                backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey})`,
                color: "var(--tree-view-color)",
            },
            "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label":
                {
                    backgroundColor: "transparent",
                },
        },
        content: {
            color: theme.palette.text.secondary,
            fontWeight: theme.typography.fontWeightMedium,
            "$expanded > &": {
                fontWeight: theme.typography.fontWeightRegular,
            },
        },
        group: {
            marginLeft: 0,
            "& $content": {
                paddingLeft: theme.spacing(1),
            },
        },
        expanded: {},
        selected: {
            fontWeight: theme.typography.fontWeightBold,
        },
        label: {
            fontWeight: "inherit",
            color: "inherit",
        },
        labelRoot: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0.5, 0),
        },
        labelIcon: {
            marginRight: theme.spacing(0.5),
        },
        labelText: {
            fontWeight: "inherit",
            flexGrow: 1,
            marginRight: theme.spacing(0.5),
        },
    })
)

export function StyledTreeItem(
    props: TreeItemProps & {
        nodeId: string
        bgColor?: string
        color?: string
        kind?: string
        icon?: JSX.Element
        alert?: string
        labelInfo?: string
        labelText: string
        actions?: JSX.Element | JSX.Element[]
    }
) {
    const classes = useTreeItemStyles()
    const {
        labelText,
        kind,
        icon,
        labelInfo,
        color,
        bgColor,
        actions,
        nodeId,
        alert,
        ...other
    } = props
    const domId = useId()

    return (
        <TreeItem
            id={domId}
            tabIndex={0}
            nodeId={nodeId}
            label={
                <div className={classes.labelRoot}>
                    {kind && (
                        <KindIcon kind={kind} className={classes.labelIcon} />
                    )}
                    {icon}
                    <Typography variant="body2" className={classes.labelText}>
                        {labelText}
                    </Typography>
                    {alert && "!"}
                    <Typography variant="caption" color="inherit">
                        {alert && (
                            <Typography variant="caption" component="span">
                                {alert}
                            </Typography>
                        )}
                        {labelInfo}
                        {actions}
                    </Typography>
                </div>
            }
            style={{
                "--tree-view-color": color,
                "--tree-view-bg-color": bgColor,
            }}
            classes={{
                root: classes.root,
                content: classes.content,
                expanded: classes.expanded,
                selected: classes.selected,
                group: classes.group,
                label: classes.label,
            }}
            {...other}
        />
    )
}

export interface StyledTreeViewItemProps {
    key: string
    expanded: string[]
    selected: string[]
}

export interface StyledTreeViewProps {
    defaultExpanded?: string[]
    defaultSelected?: string[]
    onToggle?: (expanded: string[]) => void
    onSelect?: (selected: string[]) => void
}
