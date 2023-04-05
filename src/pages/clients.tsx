import React from "react"
export const frontmatter = {
    title: "Application Programming",
    hideBreadcrumbs: true,
}
import CoreHead from "../components/shell/Head"
export const Head = props => <CoreHead {...props} {...frontmatter} />

import Clients from "../components/home/Clients"
export default Clients
