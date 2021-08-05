/* eslint-disable @typescript-eslint/no-explicit-any */
import { Block, FieldDropdown } from "blockly"
import { readFileText } from "../../fs/fs"
import { parseCSV } from "../dsl/workers/csv.proxy"
import { BlockWithServices, WorkspaceWithServices } from "../WorkspaceContext"

// inline browser-fs-access until issue of ssr is fixed
const getFileWithHandle = async handle => {
    const file = await handle.getFile()
    file.handle = handle
    return file
}
const fileOpen = async (options: any = {}) => {
    const accept = {}
    if (options.mimeTypes) {
        options.mimeTypes.map(mimeType => {
            accept[mimeType] = options.extensions || []
        })
    } else {
        accept["*/*"] = options.extensions || []
    }
    const handleOrHandles = await window.showOpenFilePicker({
        types: [
            {
                description: options.description || "",
                accept: accept,
            },
        ],
        multiple: options.multiple || false,
    })
    const files = await Promise.all(handleOrHandles.map(getFileWithHandle))
    if (options.multiple) {
        return files
    }
    return files[0]
}

interface FileOpenFieldValue {
    name: string
    source: string
}

const MAX_SIZE = 1_000_000 // 1Mb

export default class FileOpenField extends FieldDropdown {
    static KEY = "jacdac_field_file_open"
    SERIALIZABLE = true
    filename: string
    // eslint-disable-next-line @typescript-eslint/ban-types
    private _data: object[]

    constructor(options?: any) {
        super(() => [["", ""]], null, options)
    }

    static fromJson(options: any) {
        return new FileOpenField(options)
    }

    private getFiles() {
        const sourceBlock = this.getSourceBlock() as BlockWithServices
        const workspace = sourceBlock?.workspace as WorkspaceWithServices
        const services = workspace?.jacdacServices
        return services?.files || []
    }

    getOptions(): string[][] {
        const files = this.getFiles()
        const options = files
            .filter(f => /\.csv$/i.test(f.name))
            .map(f => [f.name, f.name])
        const value = this.getValue()

        return options.length < 1
            ? [[value || "", value || ""]]
            : [...options, ["", ""]]
    }

    fromXml(fieldElement: Element) {
        this.setValue(fieldElement.textContent)
    }

    getText_() {
        return (this.value_ as FileOpenFieldValue)?.name || "..."
    }

    init() {
        super.init()
        this.updateData()
    }

    setSourceBlock(block: Block) {
        super.setSourceBlock(block)
        this.updateData()
    }

    doValueUpdate_(newValue) {
        super.doValueUpdate_(newValue)
        this.parseSource()
    }

    notifyServicesChanged() {
        this.updateData()
    }

    private async parseSource() {
        const filename = this.getValue()
        const file = this.getFiles().find(f => f.name === filename)
        if (file) {
            try {
                console.debug(`file: loading ${file.name}`)
                const source = await readFileText(file)
                console.debug(`file: loaded ${(source?.length || 0) / 1024}kb`)
                if (source) {
                    const csv = await parseCSV(source)
                    this._data = csv?.data
                    this.updateData()
                }
            } catch (e) {
                console.log(e)
                this.value_ = undefined
            }
        }
    }

    private async updateData() {
        const block = this.getSourceBlock() as BlockWithServices
        const services = block?.jacdacServices
        if (!services) return
        services.data = this._data
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
        this.setValue(<FileOpenFieldValue>{
            name: file.name,
        })
    }
}
