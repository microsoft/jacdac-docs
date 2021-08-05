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
