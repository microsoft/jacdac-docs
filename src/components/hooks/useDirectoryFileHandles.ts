import { useState, useContext } from "react"
import AppContext from "../AppContext"
import useEffectAsync from "../useEffectAsync"
import useDirectoryHandle from "./useDirectoryHandle"

export default function useDirectoryFileHandles(storageKey: string) {
    const { directory: root, ...rest } = useDirectoryHandle(storageKey)
    const { setError } = useContext(AppContext)

    // root level directories
    const [directories, setDirectories] = useState<FileSystemDirectoryHandle[]>(
        []
    )
    // current project directory
    const [directory, setDirectory] = useState<FileSystemDirectoryHandle>()

    const refresh = async () => {
        // refresh list of subfolders
        const rootValues = root?.values()
        const newDirectories: FileSystemDirectoryHandle[] = []
        if (rootValues) {
            for await (const entry of rootValues) {
                if (entry.kind === "directory") newDirectories.push(entry)
            }
        }
        setDirectories(newDirectories)

        // refresh directory
        const newDirectory = newDirectories?.find(
            d => d.name === directory?.name
        )
        setDirectory(newDirectory)

        return newDirectories
    }

    const createDirectory = async (
        name: string,
        filename?: string,
        content?: string
    ): Promise<FileSystemDirectoryHandle> => {
        if (!root) return undefined
        try {
            const handle = await root.getDirectoryHandle(filename, {
                create: true,
            })
            if (filename) {
                const fileHandle = await handle.getFileHandle(filename, {
                    create: true,
                })
                const file = await fileHandle.createWritable({
                    keepExistingData: false,
                })
                await file.write(content)
                await file.close()
            }
            return handle
        } catch (e) {
            setError(e)
            return undefined
        }
    }

    useEffectAsync(async () => {
        await refresh()
    }, [directory])

    return {
        root,
        directory,
        directories,
        createDirectory,
        refresh: () => refresh(),
        ...rest,
    }
}
