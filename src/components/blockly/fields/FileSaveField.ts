/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field } from "blockly"

export default class FileSaveField extends Field {
    static KEY = "jacdac_field_file_save"
    private fileType: string

    constructor(value: string, validator?: any, options?: any) {
        super(value, validator, options)

        this.fileType = options?.fileType || "csv"
    }
    fileHandle: FileSystemFileHandle

    getText_() {
        return this.fileHandle?.name || "???"
    }

    showEditor_() {
        this.openFileHandle()
    }

    private async openFileHandle() {
        const options: SaveFilePickerOptions = {
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
        }
        console.log("save options", options)
        this.fileHandle = await window.showSaveFilePicker(options)
        this.setValue(this.fileHandle?.name)
    }
}
