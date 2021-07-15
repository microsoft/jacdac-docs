import { useCallback } from "react"

export default function useFileStorage(fileHandle: FileSystemFileHandle) {
    return useCallback(async () => {
        // if no file, return nothing
        if (!fileHandle) return undefined

        const save = async (value: string) => {
            try {
                console.debug(`saving ${fileHandle.name}`)
                const writable = await fileHandle.createWritable()
                await writable.write(value || "")
                await writable.close()
                console.debug(`saved ${fileHandle.name}`)
            } catch (e) {
                console.debug(e)
            }
        }

        // storage values
        return save
    }, [fileHandle])
}
