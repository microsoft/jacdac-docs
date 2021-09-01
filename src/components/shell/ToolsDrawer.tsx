import React, { useContext } from "react"
import {
    Drawer,
    makeStyles,
    createStyles,
    List,
    ListItemIcon,
    ListItemText,
    ListItem,
    Divider,
} from "@material-ui/core"
import { IconButton, Link } from "gatsby-theme-material-ui"
import {
    MOBILE_BREAKPOINT,
    MOBILE_TOOLS_DRAWER_WIDTH,
    TOOLS_DRAWER_WIDTH,
} from "../layout"
import AppContext from "../AppContext"
import { OpenInNew } from "@material-ui/icons"
import { useUnitConverters } from "../ui/useUnitConverter"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import WifiIcon from "@material-ui/icons/Wifi"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import SettingsIcon from "@material-ui/icons/Settings"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import MakeCodeIcon from "../icons/MakeCodeIcon"

import DarkModeContext from "../ui/DarkModeContext"
import KindIcon from "../KindIcon"
import {
    DEVICE_NODE_NAME,
    SERVICE_NODE_NAME,
    VIRTUAL_DEVICE_NODE_NAME,
} from "../../../jacdac-ts/src/jdom/constants"
import { UIFlags } from "../../jacdac/providerbus"
import { resolveUnit } from "../../../jacdac-ts/jacdac-spec/spectool/jdspec"
import { withPrefix } from "gatsby"

const useStyles = makeStyles(theme =>
    createStyles({
        drawer: {
            width: `${TOOLS_DRAWER_WIDTH}rem`,
            flexShrink: 0,
            [theme.breakpoints.down(MOBILE_BREAKPOINT)]: {
                width: `${MOBILE_TOOLS_DRAWER_WIDTH}rem`,
            },
        },
        drawerPaper: {
            width: `${TOOLS_DRAWER_WIDTH}rem`,
            [theme.breakpoints.down(MOBILE_BREAKPOINT)]: {
                width: `${MOBILE_TOOLS_DRAWER_WIDTH}rem`,
            },
        },
        drawerHeader: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: "flex-start",
        },
    })
)

function ToolsListItem(props: {
    text?: string
    to?: string
    href?: string
    icon?: JSX.Element
    onClick?: () => void
    onClose: () => void
}) {
    const { text, to, href, icon, onClick, onClose } = props

    console.log({ text, to, href, icon })

    return to || href ? (
        <Link
            to={to}
            href={href}
            aria-label="Toggle Dark Mode"
            onClick={onClose}
        >
            <ListItem button={true}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                    primaryTypographyProps={{ color: "textPrimary" }}
                    primary={
                        <>
                            <span>{text}</span>
                            {/^https:\/\//.test(href) && (
                                <OpenInNew fontSize="small" color="action" />
                            )}
                        </>
                    }
                />
            </ListItem>
        </Link>
    ) : (
        <ListItem button={true} onClick={onClick} aria-label={text}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText
                primaryTypographyProps={{ color: "textPrimary" }}
                primary={text}
            />
        </ListItem>
    )
}

export default function ToolsDrawer() {
    const classes = useStyles()
    const { toolsMenu, setToolsMenu, toggleShowDeviceHostsDialog } =
        useContext(AppContext)
    const { enqueueSnackbar } = useContext(AppContext)
    const { toggleDarkMode, darkMode } = useContext(DarkModeContext)
    const { converters, setConverter } = useUnitConverters()
    const handleUnitClick =
        (unit: string, name: string, names: string[]) => () => {
            const index = (names.indexOf(name) + 1) % names.length
            const newName = names[index]
            setConverter(unit, newName)
            enqueueSnackbar(
                `Using ${newName} for ${resolveUnit(unit).name}`,
                "success"
            )
        }
    const handleClick = link => () => {
        setToolsMenu(false)
        link?.action()
    }
    const handleDrawerClose = () => {
        setToolsMenu(false)
    }
    const handleDarkMode = () => {
        setToolsMenu(false)
        toggleDarkMode()
    }
    const links = [
        {
            text: "Start simulator",
            action: toggleShowDeviceHostsDialog,
            icon: <KindIcon kind={VIRTUAL_DEVICE_NODE_NAME} />,
        },
        {
            text: "Data Collector",
            to: "/tools/collector/",
            icon: <FiberManualRecordIcon />,
        },
        UIFlags.peers && {
            text: "Peers",
            to: "/tools/peers/",
            icon: <WifiIcon />,
        },
        {},
        {
            text: "Device Settings",
            to: "/tools/settings/",
            icon: <SettingsIcon />,
        },
        {
            text: "Firmware Update",
            to: "/tools/updater/",
            icon: <SystemUpdateAltIcon />,
        },
        {
            // separator
        },
        {
            text: "MakeCode",
            href: withPrefix("/editors/makecode"),
            icon: <MakeCodeIcon />,
        },
        /*
        {
            text: "Jupyter Lab",
            to: "/tools/jupyterlab",
            icon: <JupyterIcon />,
        },
            {
                text: "Edge Impulse",
                to: "/tools/edge-impulse",
                icon: <EdgeImpulseIcon />
            },
        */
        {
            // separator
        },
        {
            text: "Service Editor",
            to: "/tools/service-editor/",
            icon: <KindIcon kind={SERVICE_NODE_NAME} />,
        },
        {
            text: "Device registration",
            to: "/tools/device-registration/",
            icon: <KindIcon kind={DEVICE_NODE_NAME} />,
        },
        {
            // separator
        },
        ...converters.map(({ unit, name, names }) => ({
            text: `${name} (change to ${names
                .filter(n => n !== name)
                .join(", ")})`,
            action: handleUnitClick(unit, name, names),
        })),
    ].filter(l => !!l)

    if (!toolsMenu) return null

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={toolsMenu}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton aria-label="Collapse" onClick={handleDrawerClose}>
                    <ChevronRightIcon />
                </IconButton>
            </div>
            <List>
                {links.map((link, i) =>
                    link.text ? (
                        <ToolsListItem
                            key={link.text}
                            {...link}
                            onClick={handleClick(link)}
                            onClose={handleDrawerClose}
                        />
                    ) : (
                        <Divider key={`div${i}`} />
                    )
                )}
                <Divider />
                <ListItem
                    button={true}
                    onClick={handleDarkMode}
                    aria-label="Toggle Dark Mode"
                >
                    <ListItemIcon>
                        <SettingsBrightnessIcon />
                    </ListItemIcon>
                    <ListItemText>
                        {darkMode === "light" ? "Dark Mode" : "Light mode"}
                    </ListItemText>
                </ListItem>
            </List>
        </Drawer>
    )
}
