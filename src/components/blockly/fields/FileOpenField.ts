/* eslint-disable @typescript-eslint/no-explicit-any */
import { Block, FieldDropdown } from "blockly"
import { listFiles, readFileText } from "../../fs/fs"
import { parseCSV } from "../dsl/workers/csv.proxy"
import { BlockWithServices, WorkspaceWithServices } from "../WorkspaceContext"
import { ReactFieldJSON } from "./ReactField"

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

export default class FileOpenField extends FieldDropdown {
    static KEY = "jacdac_field_file_open"
    SERIALIZABLE = true
    private _files: FileSystemFileHandle[]
    // eslint-disable-next-line @typescript-eslint/ban-types
    private _data: object[]

    static fromJson(options: ReactFieldJSON) {
        return new FileOpenField(options)
    }

    constructor(options?: ReactFieldJSON) {
        super(() => [["", ""]], undefined, options)
        this._files = []
    }

    fromXml(fieldElement: Element) {
        this.setValue(fieldElement.textContent)
    }

    private async syncFiles() {
        const sourceBlock = this.getSourceBlock() as BlockWithServices
        const workspace = sourceBlock?.workspace as WorkspaceWithServices
        const services = workspace?.jacdacServices
        const directory = services?.directory
        this._files = await listFiles(directory, ".csv")
        console.log(`sync files`, { directory, files: this._files })
    }

    getOptions(): string[][] {
        const options = (this._files || []).map(f => [f.name, f.name])
        const value = this.getValue()

        return options.length < 1
            ? [[value || "", value || ""]]
            : [...options, ["", ""]]
    }

    doClassValidation_(newValue?: string) {
        // skip super class validationervices chan
        return newValue
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
        const file = this._files?.find(f => f.name === filename)
        console.log(`file open update`, {
            filename,
            file,
            files: this._files?.slice(0),
        })
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
        await this.syncFiles()

        const block = this.getSourceBlock() as BlockWithServices
        const services = block?.jacdacServices
        if (!services) return
        services.data = this._data
    }
}
