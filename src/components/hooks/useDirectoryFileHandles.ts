import { useState } from "react"
import useEffectAsync from "../useEffectAsync"
import useDirectoryHandle from "./useDirectoryHandle"

export default function useDirectoryFileHandles(storageKey: string) {
    const { directory, ...rest } = useDirectoryHandle(storageKey)
    const [files, setFiles] = useState<FileSystemFileHandle[]>([])

    useEffectAsync(async () => {
        const values = directory?.values()
        const newFiles: FileSystemFileHandle[] = []
        if (values) {
            for await (const entry of values) {
                if (entry.kind === "file") newFiles.push(entry)
            }
        }
        setFiles(newFiles)
    }, [directory])

    return {
        directory,
        files,
        ...rest,
    }
}
