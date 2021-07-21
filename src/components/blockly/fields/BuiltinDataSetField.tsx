import { BlockWithServices, FieldWithServices } from "../workspacecontextutils"
import { Block, FieldDropdown } from "blockly"
import { withPrefix } from "gatsby"
import { downloadCSV } from "../dsl/workers/csv.proxy"
import { BuiltinDataSetFieldKEY } from "./keys"

const builtins = {
    cereal: withPrefix("/datasets/cereal.csv"),
    penguins: withPrefix("/datasets/penguins.csv"),
    mt: withPrefix("/datasets/mt.csv"),
}

export default class BuiltinDataSetField
    extends FieldDropdown
    implements FieldWithServices
{
    static KEY = BuiltinDataSetFieldKEY

    // eslint-disable-next-line @typescript-eslint/ban-types
    static fromJson(options: object) {
        return new BuiltinDataSetField(options)
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor(options: object) {
        super(() => Object.keys(builtins).map(k => [k, k]), undefined, options)
    }

    private async updateData() {
        const url = builtins[this.getValue()]
        if (!url) return

        // load dataset as needed
        const sourceBlock = this.getSourceBlock() as BlockWithServices
        const services = sourceBlock?.jacdacServices
        if (!services || services.cache[BuiltinDataSetField.KEY] === url) return // already downloaded

        const { data, errors } = await downloadCSV(url)
        console.debug(`csv parse`, { data, errors })
        services.cache[BuiltinDataSetField.KEY] = url
        services.data = data
    }

    setSourceBlock(block: Block) {
        super.setSourceBlock(block)
        this.updateData()
    }

    doValueUpdate_(newValue) {
        super.doValueUpdate_(newValue)
        this.updateData()
    }

    notifyServicesChanged() {
        this.updateData()
    }
}
