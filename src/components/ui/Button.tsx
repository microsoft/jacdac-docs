import React from "react"
import { ButtonProps } from "@material-ui/core"
import { Button as GatsbyButton } from "gatsby-theme-material-ui"
import useAnalytics, { EventProperties } from "../hooks/useAnalytics"

export default function Button(
    props: { eventId: string; eventProperties?: EventProperties } & ButtonProps
) {
    const { eventId, eventProperties, onClick, ...rest } = props
    const { trackEvent } = useAnalytics()
    const handleClick =
        !eventId || !trackEvent
            ? onClick
            : ev => {
                  trackEvent(eventId, eventProperties)
                  onClick(ev)
              }
    return <GatsbyButton onClick={handleClick} {...rest} />
}
