import React, { createContext, ReactNode } from "react"
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
export function DslProvider(props: {
    dsls: BlockDomainSpecificLanguage[]
    children: ReactNode
}) {
    const { dsls, children } = props
    return (
        <DslContext.Provider value={{ dsls }}>{children}</DslContext.Provider>
    )
}
