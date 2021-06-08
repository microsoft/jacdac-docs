import { Theme } from "@material-ui/core"
import { Block, Workspace } from "blockly"
import { JDService } from "../../../../jacdac-ts/src/jdom/service"
import { RoleEvent } from "../../../../jacdac-ts/src/vm/compile"
import { VMError, VMProgram } from "../../../../jacdac-ts/src/vm/ir"
import { BlockJSON, WorkspaceJSON } from "../jsongenerator"
import {
    BlockDefinition,
    ContentDefinition,
    ServiceBlockDefinition,
} from "../toolbox"
import { ExpressionWithErrors } from "../VMgenerator"

export interface CompileToVMOptions {
    block: BlockJSON
    definition: ServiceBlockDefinition
    blockToExpression: (ev: RoleEvent, block: BlockJSON) => ExpressionWithErrors
}

export interface CompileToVMResult {
    event?: RoleEvent
    expression?: jsep.Expression
    errors?: VMError[]
}

export default interface BlockDomainSpecificLanguage {
    id: string
    createBlocks?: (options: {
        theme: Theme
        supportedServices
    }) => BlockDefinition[]

    createCategory?: (options: {
        theme: Theme
        source: WorkspaceJSON
        program: VMProgram
        liveServices: JDService[]
    }) => ContentDefinition[]

    convertToJSON?: (options: {
        workspace: Workspace
        block: Block
        definition: BlockDefinition
    }) => BlockJSON

    compileToVM?: (options: CompileToVMOptions) => CompileToVMResult
}
