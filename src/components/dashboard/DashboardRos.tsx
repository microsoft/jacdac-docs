import React, { useId, useState } from "react"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import useServiceServer from "../hooks/useServiceServer"
import { Grid, TextField } from "@mui/material"
import useChange from "../../jacdac/useChange"
import { JDService, JSONTryParse, RosCmd, RosServer } from "../../../jacdac-ts/src/jacdac"
import CmdButton from "../CmdButton"
import SendIcon from "@mui/icons-material/Send"

function RosMessageEditor(props: { service: JDService }) {
    const { service } = props
    const id = useId()
    const nodeId = id + "-node"
    const topicId = id + "-topic"
    const messageId = id + "-message"

    const [node, setNode] = useState("dashboard")
    const [topic, setTopic] = useState("")
    const [message, setMessage] = useState("")
    const handleNode = (event: React.ChangeEvent<HTMLInputElement>) => setNode(event.target.value)
    const handleTopic = (event: React.ChangeEvent<HTMLInputElement>) => setTopic(event.target.value)
    const handleMessage = (event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)
    const handlePublish = async () => {
        await service.sendCmdPackedAsync(RosCmd.PublishMessage, [node, topic, message])
    }

    const jmsg = JSONTryParse(message)
    const disabled = !node || !topic || !jmsg
    const error = message && !jmsg ? "Invalid JSON" : undefined

    return <>
        <Grid item xs={12}>
            <TextField
                id={nodeId}
                margin="normal"
                type="text"
                spellCheck="false"
                size="small"
                variant="outlined"
                label="Node"
                aria-label="Node name"
                fullWidth={true}
                value={node}
                onChange={handleNode}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                id={topicId}
                margin="normal"
                type="text"
                spellCheck="false"
                size="small"
                variant="outlined"
                label="Topic"
                aria-label="Topic"
                fullWidth={true}
                value={topic}
                onChange={handleTopic}
            />
        </Grid>
        <Grid item xs={12}>
        <TextField
                id={messageId}
                margin="normal"
                type="text"
                spellCheck="false"
                size="small"
                variant="outlined"
                label="Message (JSON)"
                aria-label="Message (JSON)"
                fullWidth={true}
                value={message}
                onChange={handleMessage}
                helperText={error}
                error={!!error}
            />

        </Grid>
        <Grid item xs={12}>
            <CmdButton onClick={handlePublish} disabled={disabled} variant="outlined" icon={<SendIcon />
            }>Publish</CmdButton>
        </Grid>
    </>
}

export default function DashboardRos(props: DashboardServiceProps) {
    const { service, expanded } = props
    const server = useServiceServer<RosServer>(service)

    const subscriptions = useChange(server, _ => _?.subscriptions)
    const messages = useChange(server, _ => _?.messages)

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                ROS
            </Grid>
            {expanded && <Grid item xs={12}><RosMessageEditor service={service} /></Grid>}
            <Grid item xs={12}>
                <pre style={{ width: "100%", whiteSpace: "pre-wrap", fontSize: "70%" }}>
                    {`subscriptions: ${subscriptions?.join("   \n")}
messages: ${messages?.map(({ node, topic, message }) => `${node} ${topic} ${JSON.stringify(message)}`).join("    \n")}`}</pre>
            </Grid>
        </Grid>
    )
}