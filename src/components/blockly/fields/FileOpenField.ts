/* eslint-disable @typescript-eslint/no-explicit-any */
import { Block, Field } from "blockly"
import { parseCSV } from "../dsl/workers/csv.proxy"
import { BlockWithServices, FieldWithServices } from "../WorkspaceContext"
import { fileOpen } from "browser-fs-access"

interface FileOpenFieldValue {
    name: string
    source: string
}

export default class FileOpenField extends Field implements FieldWithServices {
    static KEY = "jacdac_field_file_open"
    SERIALIZABLE = true
    // eslint-disable-next-line @typescript-eslint/ban-types
    private data: object[]

    constructor(options?: any) {
        super("...", null, options)
    }

    static fromJson(options: any) {
        return new FileOpenField(options)
    }

    getText_() {
        return (this.value_ as FileOpenFieldValue)?.name || "..."
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

    private async updateData() {
        const block = this.getSourceBlock() as BlockWithServices
        const services = block?.jacdacServices
        if (!services) return
        services.data = this.data
    }

    showEditor_() {
        this.openFileHandle()
    }

    private async openFileHandle() {
        const file = await fileOpen({
            mimeTypes: ["text/csv"],
            extensions: [".csv"],
            description: "CSV data sets",
            multiple: false,
        })
        if (!file) return

        const source = await file.text()
        const csv = await parseCSV(source)
        this.data = csv?.data
        this.setValue(<FileOpenFieldValue>{
            name: file.name,
            source,
        })
    }
}
