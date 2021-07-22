import { suite, test } from "mocha"
import { readdirSync, readFileSync, access, constants } from "fs"
import { join } from "path"
import { Options, Workspace, Xml } from "blockly"
import { domToJSON } from "../../src/components/blockly/jsongenerator"
import workspaceJSONToVMProgram from "../../src/components/vm/VMgenerator"
import { VMError, VMProgram } from "../../jacdac-ts/src/vm/ir"
import vmOnlyDsls from "../../src/components/vm/vmonlydsls"
import BlockFile from "../../src/components/blockly/blockfile"
import BlockDomainSpecificLanguage from "../../src/components/blockly/dsl/dsl"
import {
    CategoryDefinition,
    ToolboxConfiguration,
} from "../../src/components/blockly/toolbox"
import { arrayConcatMany } from "../../jacdac-ts/src/jdom/utils"
import { patchCategoryJSONtoXML } from "../../src/components/blockly/usetoolboxutils"
import { loadBlocks } from "../../src/components/blockly/usetoolboxutils"

// TODO: how to expose to mocha and build system?
// TODO: JSON equality ()

function makeToolBox(dsls: BlockDomainSpecificLanguage[]) {
    loadBlocks(dsls, undefined)
    const dslsCategories = arrayConcatMany(
        dsls.map(dsl =>
            dsl?.createCategory?.({
                theme: undefined,
                source: undefined,
                liveServices: [],
            })
        )
    )
        .filter(cat => !!cat)
        .sort((l, r) => -(l.order - r.order))

    return <ToolboxConfiguration>{
        kind: "categoryToolbox",  // name ???
        contents: dslsCategories
            .filter(cat => !!cat)
            .map(node =>
                node.kind === "category"
                    ? patchCategoryJSONtoXML(node as CategoryDefinition)
                    : node
            ),
    }
}

suite("blockly2vm", () => {
    suite("blockly baselines", () => {
        const dir = "blocklyProgs"
        const matches = readdirSync(dir).filter(m => /\.json$/.test(m))
        matches.forEach(match => {
            test(match, function (done) {
                const blocklyPath = join(dir, match)
                const vmPath = join("vmProgs", match)

                console.log(`test ${match}`)

                const blockFile: BlockFile = JSON.parse(
                    readFileSync(blocklyPath, "utf8")
                )
                // try loading xml into a dummy blockly workspace
                const dom = Xml.textToDom(blockFile.xml)
                const toolbox = makeToolBox(vmOnlyDsls) as any
                const options = new Options({ toolbox })
                // toolbox: toolboxConfigurationRef.current
                const workspace = new Workspace(options)
                // all good, load in workspace
                workspace.clear()
                Xml.domToWorkspace(dom, workspace)
                const workspaceJSON = domToJSON(workspace, vmOnlyDsls)
                const newProgram = workspaceJSONToVMProgram(
                    workspaceJSON,
                    vmOnlyDsls
                )

                let errors: VMError[] = undefined
                newProgram.handlers.forEach(h => {
                    if (!errors && h?.errors.length) {
                        errors = h.errors
                    }
                })
                if (errors) {
                    done(errors)
                    return
                }
                let vmProgExists = true
                access(vmPath, constants.F_OK, err => {
                    // TODO: in this case, write the file
                    vmProgExists = false
                })
                if (vmProgExists) {
                    const vmProgFile = readFileSync(vmPath, "utf8")
                    const vmProgram: VMProgram = JSON.parse(vmProgFile)
                    // if so, check that the JSON is the same
                    // then give to the compiler and check for errors
                    // TODO compile blocks and compare that it match vm
                }
                done()
            })
        })
    })
})
