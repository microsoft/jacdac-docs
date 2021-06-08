import React, { createContext, useMemo } from "react"
import toolsDSL from "./toolsdsl"
import azureIoTHubDSL from "./azureiothubdsl"
import BlockDomainSpecificLanguage from "./dsl"

export interface DslProps {
    dsls: BlockDomainSpecificLanguage[]
}

const DslContext = createContext<DslProps>({
    dsls: [],
})
DslContext.displayName = "DSL"

export default DslContext

// eslint-disable-next-line react/prop-types
export const DslProvider = ({ children }) => {
    const dsls = useMemo(() => [azureIoTHubDSL, toolsDSL], [])
    return (
        <DslContext.Provider value={{ dsls }}>{children}</DslContext.Provider>
    )
}
