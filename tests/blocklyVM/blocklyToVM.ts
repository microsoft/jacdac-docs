import { suite, test } from "mocha"
import { readdirSync, readFileSync, access, constants } from "fs"
import { join } from "path"
import { WorkspaceJSON } from "../../src/components/blockly/jsongenerator"
import workspaceJSONToVMProgram from "../../src/components/vm/VMgenerator"
import vmDsls from "../../src/components/vm/vmdsls"
import { VMError, VMProgram } from "../../jacdac-ts/src/vm/ir"

// TODO: how to expose to mocha and build system?
// TODO: JSON equality

suite("blockly2vm", () => {
    suite("blockly baselines", () => {
        const dir = "blocklyProgs"
        const matches = readdirSync(dir).filter(m => /\.json$/.test(m))
        matches.forEach(match => {
            test(match, function (done) {
                const blocklyPath = join(dir, match)
                const vmPath = join("vmProgs", match)

                console.log(`test ${match}`)

                const workspaceJSON: WorkspaceJSON = JSON.parse(readFileSync(blocklyPath, "utf8"))
                const newProgram = workspaceJSONToVMProgram(workspaceJSON, vmDsls)
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
                access(vmPath, constants.F_OK, (err) => {
                    // TODO: in this case, write the file 
                    vmProgExists = false
                });
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
