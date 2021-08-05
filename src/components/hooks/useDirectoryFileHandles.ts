import { useState, useContext } from "react"
import AppContext from "../AppContext"
import useEffectAsync from "../useEffectAsync"
import useDirectoryHandle from "./useDirectoryHandle"

export async function writeFileContent(
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

export default function useDirectoryFileHandles(storageKey: string) {
    const { directory: root, ...rest } = useDirectoryHandle(storageKey)
    const { setError } = useContext(AppContext)

    // root level directories
    const [directories, setDirectories] = useState<FileSystemDirectoryHandle[]>(
        []
    )
    // current project directory
    const [currentDirectory, setCurrentDirectory] =
        useState<FileSystemDirectoryHandle>()

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
        const newCurrentDirectory = newDirectories?.find(
            d => d.name === currentDirectory?.name
        )
        setCurrentDirectory(newCurrentDirectory)

        console.log({
            root,
            directories: newDirectories,
            currentDirectory: newCurrentDirectory,
        })

        return newDirectories
    }

    const createDirectory = async (
        name: string,
        filename?: string,
        content?: string
    ): Promise<FileSystemDirectoryHandle> => {
        if (!root) return undefined
        try {
            const handle = await root.getDirectoryHandle(name, {
                create: true,
            })
            if (filename) {
                const fileHandle = await handle.getFileHandle(filename, {
                    create: true,
                })
                writeFileContent(fileHandle, content)
            }
            return handle
        } catch (e) {
            setError(e)
            return undefined
        }
    }

    useEffectAsync(async () => {
        await refresh()
    }, [root])

    return {
        root,
        currentDirectory,
        directories,
        createDirectory: root ? createDirectory : undefined,
        refresh: () => refresh(),
        ...rest,
    }
}
