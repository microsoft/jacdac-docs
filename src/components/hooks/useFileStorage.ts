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

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = async (value: string) => {
        try {
            setStoredValue(value)
            if (fileHandle) {
                const writable = await fileHandle.createWritable()
                await writable.write(value || "")
                await writable.close()
            }
        } catch (e) {
            console.debug(e)
        }
    }

    return [storedValue, setValue]
}
