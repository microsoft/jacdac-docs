import { useContext, useState } from "react"
import useChange from "../../jacdac/useChange"
import DbContext from "../DbContext"

async function verifyPermission(fileHandle: FileSystemHandle) {
    if (!fileHandle) return false

    const options: FileSystemHandlePermissionDescriptor = {
        mode: "readwrite",
    }
    // Check if permission was already granted. If so, return true.
    if ((await fileHandle.queryPermission(options)) === "granted") {
        return true
    }
    // Request permission. If the user grants permission, return true.
    if ((await fileHandle.requestPermission(options)) === "granted") {
        return true
    }
    // The user didn't grant permission, so return false.
    return false
}

export function fileSystemHandleSupported() {
    return typeof window !== "undefined" && !!window.showDirectoryPicker
}

export default function useDirectoryHandle(storageKey: string) {
    const { db } = useContext(DbContext)
    const directories = useChange(db, _ => _?.directories)
    const [directory, setDirectory] = useState<FileSystemDirectoryHandle>()

    console.log({ directory })
    const supported = fileSystemHandleSupported()
    const showDirectoryPicker = supported
        ? async (options?: DirectoryPickerOptions) => {
              const dir = await window.showDirectoryPicker(options)
              if (dir !== directory) directories.set(storageKey, dir)
          }
        : undefined
    const clearDirectory = () => directories?.set(storageKey, undefined)

    // reload directory from DB
    useChange(
        directories,
        async () => {
            let dir = await directories?.get(storageKey)
            console.log(`load directory`, { storageKey, directories, dir })
            if (dir) {
                // check permissions
                const perm = await verifyPermission(dir)
                if (!perm) {
                    console.log(`permission verification failed`)
                    // clear from db
                    directories.set(storageKey, undefined)
                    dir = undefined
                }
            }
            if (dir !== directory) setDirectory(dir)
        },
        [storageKey]
    )
    return {
        supported,
        showDirectoryPicker,
        directory,
        clearDirectory,
    }
}
