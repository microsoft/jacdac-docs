import React from "react"
import BrainHome from "../components/brains/BrainHome"

import CoreHead from "../components/shell/Head"
export const frontmatter = {
    title: "Low Code Things",
}
export const Head = props => <CoreHead {...props} {...frontmatter} />

export default BrainHome
