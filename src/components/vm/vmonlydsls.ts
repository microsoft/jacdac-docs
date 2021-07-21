import servicesDSL from "../blockly/dsl/servicesdsl"
import serverServicesDSL from "../blockly/dsl/serverservicesdsl"
import loopsDsl from "../blockly/dsl/loopsdsl"
import logicDsl from "../blockly/dsl/logicdsl"
import mathDsl from "../blockly/dsl/mathdsl"
import variablesDsl from "../blockly/dsl/variablesdsl"
import jsonDsl from "../blockly/dsl/jsondsl"

const vmOnlyDsls = [
    servicesDSL,
    serverServicesDSL,
    loopsDsl,
    logicDsl,
    mathDsl,
    jsonDsl,
    variablesDsl
]

export default vmOnlyDsls
