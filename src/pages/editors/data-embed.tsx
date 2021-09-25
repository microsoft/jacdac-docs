import React, { useRef } from "react"
import useWindowEvent from "../../components/hooks/useWindowEvent"

export default function Page() {
    const frame = useRef<HTMLIFrameElement>()

    useWindowEvent(
        "message",
        (
            msg: MessageEvent<{
                type?: "dsl"
                dslid: string
                action: "mount" | "unmount" | "blocks" | "category"
            }>
        ) => {
            const { data } = msg
            if (data.type !== "dsl") return
            console.debug(msg)
        },
        false,
        []
    )

    return (
        <iframe
            ref={frame}
            title="data editor"
            src="./data?embed=1"
            style={{
                border: "none",
                left: 0,
                top: 0,
                width: "100vh",
                height: "80vh",
            }}
        ></iframe>
    )
}
