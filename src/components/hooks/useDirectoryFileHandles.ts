import { useState, useContext } from "react"
import AppContext from "../AppContext"
import useEffectAsync from "../useEffectAsync"
import useDirectoryHandle from "./useDirectoryHandle"

export default function useDirectoryFileHandles(storageKey: string) {
    const { directory, ...rest } = useDirectoryHandle(storageKey)
    const { setError } = useContext(AppContext)
    const [files, setFiles] = useState<FileSystemFileHandle[]>([])

    const refresh = async () => {
        const values = directory?.values()
        const newFiles: FileSystemFileHandle[] = []
        if (values) {
            for await (const entry of values) {
                if (entry.kind === "file") newFiles.push(entry)
            }
        }
        setFiles(newFiles)
    }

    const createFile = async (
        filename: string,
        content: string
    ): Promise<FileSystemFileHandle> => {
        try {
            const fileHandle = await directory.getFileHandle(filename, {
                create: true,
            })
            const file = await fileHandle.createWritable({
                keepExistingData: false,
            })
            await file.write(content)
            await file.close()
            await refresh()
            return fileHandle
        } catch (e) {
            setError(e)
            return undefined
        }
    }

    useEffectAsync(refresh, [directory])

    return {
        directory,
        files,
        createFile,
        refresh,
        ...rest,
    }
}
