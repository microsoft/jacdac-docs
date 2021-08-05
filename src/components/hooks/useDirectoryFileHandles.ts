import { useState, useContext } from "react"
import AppContext from "../AppContext"
import { listDirectories, listFiles } from "../fs/fs"
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
    const [currentDirectory, setCurrentDirectory] =
        useState<FileSystemDirectoryHandle>()
    const [currentFiles, setCurrentFiles] = useState<FileSystemFileHandle[]>([])

    const refresh = async () => {
        // refresh list of subfolders
        const newDirectories = await listDirectories(root)
        setDirectories(newDirectories)

        // refresh directory
        const newCurrentDirectory = newDirectories?.find(
            d => d.name === currentDirectory?.name
        )
        setCurrentDirectory(newCurrentDirectory)

        // refresh files
        const newCurrentFiles = await listFiles(newCurrentDirectory)
        setCurrentFiles(newCurrentFiles)

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
        currentFiles,
        directories,
        createDirectory: root ? createDirectory : undefined,
        refresh: () => refresh(),
        ...rest,
    }
}
