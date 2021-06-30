/* eslint-disable @typescript-eslint/no-explicit-any */
import { Block, Field } from "blockly"
import { openCSV } from "../dsl/workers/csv.proxy"
import { BlockWithServices, FieldWithServices } from "../WorkspaceContext"

export default class FileOpenField extends Field implements FieldWithServices {
    static KEY = "jacdac_field_file_open"
    SERIALIZABLE = true
    private fileType: string

    constructor(options?: any) {
        super("...", null, options)
        this.fileType = options?.fileType || "csv"
    }
    fileHandle: FileSystemFileHandle

    static fromJson(options: any) {
        return new FileOpenField(options)
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

        const file = block.getField("file") as FileOpenField
        const fileHandle = file?.fileHandle

        // already cached
        if (
            fileHandle &&
            services.cache[FileOpenField.KEY] !== fileHandle.name
        ) {
            console.log(`open ${fileHandle.name}`)
            // download data
            const csv = await openCSV(file.fileHandle)
            console.log(`parsed file`, csv)
            if (csv?.data) {
                services.cache[FileOpenField.KEY] = fileHandle.name
                services.data = csv?.data
            }
        }
    }

    showEditor_() {
        this.openFileHandle()
    }

    private async openFileHandle() {
        const options: OpenFilePickerOptions = {
            types: [
                {
                    id: "text",
                    description: "Text Files",
                    accept: {
                        "text/plain": [".txt"],
                    },
                },
                {
                    id: "csv",
                    description: "CSV Files",
                    accept: {
                        "text/csv": [".csv"],
                    },
                },
                {
                    id: "json",
                    description: "JSON Files",
                    accept: {
                        "application/json": [".json"],
                    },
                },
            ].filter(({ id }) => this.fileType === id),
            excludeAcceptAllOption: true,
            multiple: false,
        }
        const files = await window.showOpenFilePicker?.(options)
        this.fileHandle = files[0]
        this.setValue(this.fileHandle?.name || "")
    }
}
