import { useState } from "react"
import useEffectAsync from "../useEffectAsync"

export default function useFileStorage(
    fileHandle: FileSystemFileHandle
): [string, (value: string) => void] {
    const [storedValue, setStoredValue] = useState<string>()

    // initial load
    useEffectAsync(async () => {
        try {
            const file = await fileHandle?.getFile()
            const value = await file?.text()
            setStoredValue(value)
        } catch (e) {
            console.debug(e)
            setStoredValue(undefined)
        }
    }, [fileHandle])

    // debounced save
    useEffectAsync(async () => {
        if (!fileHandle || storedValue === undefined) return
        try {
            const writable = await fileHandle.createWritable()
            await writable.write(storedValue || "")
            await writable.close()
        } catch (e) {
            console.debug(e)
        }
    }, [storedValue, fileHandle])

    // if no file, return nothing
    if (!fileHandle) return [undefined, undefined]

    // storage values
    return [storedValue, setStoredValue]
}
