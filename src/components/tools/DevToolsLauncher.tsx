import React, { ChangeEvent, useState } from "react"
import { Grid, TextField } from "@mui/material"
import { Button } from "gatsby-theme-material-ui"
import SendIcon from "@mui/icons-material/Send"
import { withPrefix } from "gatsby"
import { JDBus } from "../../../jacdac-ts/src/jdom/bus"
import { createProxyBridge } from "../../../jacdac-ts/src/jdom/bridge"
import useBus from "../../jacdac/useBus"
import { randomDeviceId } from "../../../jacdac-ts/src/jdom/random"

function startDevTools(bus: JDBus) {
    // inject style
    const frameid = randomDeviceId()
    const style = document.createElement("style")
    style.innerText = `
    #jacdac-dev-tools {
        position: fixed;
        overflow: hide;
        box-shadow: 4px 4px 4px 4px #ccc;
        width: 40rem;
        height: 60%;
        background: #fff;
        z-index: 1000000;
        
        transition: left 0.5s, right 0.5s, bottom 0.5s, top 0.5s, width 0.5s, height 0.5s, opacity 1s;
      }
      #jacdac-dev-tools button {
        float: right;
        margin-right: 0.5rem;
      }
      #jacdac-dev-tools.left {
        left:2rem;
        right: unset;
        bottom: 2rem;        
        top: unset;
      }
      #jacdac-dev-tools.right {
        left: unset;
        right:2rem;
        bottom: 2rem;        
        top: unset;
      }
      #jacdac-dev-tools > .header {
        font-size: 0.8rem;
        font-family: monospace;
        margin: 0.2rem;
        height: 1.5rem;
      }
      #jacdac-dev-tools > iframe {
        height: calc(100% - 1.5rem);
        width: 100%;
        border: none;
      }    
    `
    document.head.appendChild(style)

    const container = document.createElement("div")
    container.id = "jacdac-dev-tools"
    container.classList.add("right")
    const header = document.createElement("div")
    header.className = "header"
    container.append(header)
    const close = document.createElement("button")
    close.innerText = "close"
    const left = document.createElement("button")
    left.innerText = "<<<"
    left.onclick = () => {
        container.classList.remove("right")
        container.classList.add("left")
    }
    const right = document.createElement("button")
    right.innerText = ">>>"
    right.onclick = () => {
        container.classList.remove("left")
        container.classList.add("right")
    }
    header.append(close)
    header.append(right)
    header.append(left)
    const iframe = document.createElement("iframe")
    iframe.src = withPrefix(`/dashboard/?embed=1&connect=0&transient=1#${frameid}`)
    container.append(iframe)
    document.body.insertBefore(container, document.body.firstElementChild)

    // send packets to dashboard iframe
    const unsub = bus.addBridge(
        createProxyBridge((data, sender) => {
            iframe.contentWindow?.postMessage({
                type: "messagepacket",
                channel: "jacdac",
                data,
                sender,
            })
        })
    )
    close.onclick = () => {
        unsub?.()
        container.remove()
    }
}

export default function DevToolsLauncher() {
    const [text, setText] = useState("")
    const bus = useBus()

    const url = `https://microsoft.github.io/jacdac-docs/clients/javascript/devtools#${
        text || ""
    }`
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) =>
        setText(ev.target.value)
    const handleClick = () => window.open(url, "_blank")

    const handleEmbed = () => startDevTools(bus)

    return (
        <Grid container spacing={1}>
            <Grid item xs>
                <TextField
                    type="url"
                    label="URL"
                    fullWidth={true}
                    helperText="Enter the URL to your web page using Jacdac"
                    value={text}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item>
                <Button
                    variant="outlined"
                    onClick={handleClick}
                    startIcon={<SendIcon />}
                >
                    Open
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="outlined"
                    onClick={handleEmbed}
                    startIcon={<SendIcon />}
                >
                    Open Embedded
                </Button>
            </Grid>
        </Grid>
    )
}
