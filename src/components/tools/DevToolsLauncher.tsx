import React, { ChangeEvent, useState } from "react"
import { Grid, TextField } from "@mui/material"
import { Button } from "gatsby-theme-material-ui"
import SendIcon from "@mui/icons-material/Send"

function startDevTools() {
    // inject style
    const style = document.createElement("style")
    style.innerText = `
    #jacdac-dev-tools {
        position:absolute;
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
      #jacdac-dev-tools .header {
        font-size: 0.8rem;
        font-family: monospace;
        margin: 0.2rem;
        height: 1.2rem;
      }
      #jacdac-dev-tools .dashboard {
        height: calc(100% - 1.2rem);
        width: 100%;
        border: none;
      }    
    `
    document.head.appendChild(style)

    // inject dom
    /**
    <div id="jacdac-dev-tools" class="right">
      <div class="header">
        <button id="jacdac-btn-close">
          x
        </button>
        <button id="jacdac-btn-right">
          &gt;&gt;&gt;
        </button>
        <button id="jacdac-btn-left">
          &lt;&lt;&lt;
        </button>
      </div>
      <iframe class="dashboard" src="https://microsoft.github.io/jacdac-docs/dashboard/"></iframe>
    </div>
         */
    document.body.insertBefore(container, document.body.firstElementChild)

    // inject js
    const script = document.createElement("script")
    script.innerText = `
    const devtools = document.getElementById("jacdac-dev-tools")
    const btnleft = document.getElementById("jacdac-btn-left")
    const btnright = document.getElementById("jacdac-btn-right")
    const btnclose = document.getElementById("jacdac-btn-close")
    btnleft.onclick = () => {
      console.log("left")
      devtools.classList.remove("right")
      devtools.classList.add("left")
    }      
    btnright.onclick = () => {
      console.log("right")
      devtools.classList.remove("left")
      devtools.classList.add("right")
    }
    btnclose.onclick = () => {
      devtools.remove()
    }    
    `
    document.body.appendChild(script)
}

export default function DevToolsLauncher() {
    const [text, setText] = useState("")

    const url = `https://microsoft.github.io/jacdac-docs/clients/javascript/devtools#${
        text || ""
    }`
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) =>
        setText(ev.target.value)
    const handleClick = () => window.open(url, "_blank")

    const handleEmbed = () => startDevTools()

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
