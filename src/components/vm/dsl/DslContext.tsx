import React, { createContext, useMemo } from "react"
import { toolsDSL } from "./toolsdsl"
import { Theme } from "@material-ui/core"
import { BlockJSON, WorkspaceJSON } from "../jsongenerator"
import { BlockDefinition, CategoryDefinition } from "../toolbox"
import { Block, Workspace } from "blockly"

export interface BlockDomainSpecificLanguage {
    id: string
    createBlocks(options: {
        theme: Theme
        supportedServices: jdspec.ServiceSpec[]
    }): BlockDefinition[]

    createCategory(options: {
        theme: Theme
        source: WorkspaceJSON
    }): CategoryDefinition

    convertToJSON?: (options: {
        workspace: Workspace
        block: Block
        definition: BlockDefinition
    }) => BlockJSON
}

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
    const dsls = useMemo(() => [toolsDSL], [])
    return (
        <DslContext.Provider value={{ dsls }}>{children}</DslContext.Provider>
    )
}
