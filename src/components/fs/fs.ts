export async function writeFileText(
    fileHandle: FileSystemFileHandle,
    content: string
) {
    const file = await fileHandle.createWritable({
        keepExistingData: false,
    })
    try {
        await file.write(content)
    } finally {
        try {
            await file.close()
        } catch (e) {
            console.debug(`file close error`, { e })
        }
    }
}

export async function readFileText(fileHandle: FileSystemFileHandle) {
    const file = await fileHandle.getFile()
    try {
        return await file.text()
    } catch (e) {
        console.debug(`file read error`, { e })
        return undefined
    }
}

export async function listDirectories(directory: FileSystemDirectoryHandle) {
    const values = directory?.values()
    const r: FileSystemDirectoryHandle[] = []
    if (values)
        for await (const entry of values) {
            if (entry.kind === "directory") r.push(entry)
        }
    return r
}

export async function listFiles(
    directory: FileSystemDirectoryHandle,
    extension?: string
) {
    const values = directory?.values()
    let r: FileSystemFileHandle[] = []
    if (values)
        for await (const entry of values) {
            if (entry.kind === "file") r.push(entry)
        }
    if (extension) r = r.filter(f => f.name.endsWith(extension))
    return r
}
