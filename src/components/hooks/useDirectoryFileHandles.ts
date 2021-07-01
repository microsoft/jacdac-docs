import { useState } from "react"
import useEffectAsync from "../useEffectAsync"
import useDirectoryHandle from "./useDirectoryHandle"

export default function useDirectoryFileHandles(storkageKey: string) {
    const { supported, directory, showDirectoryPicker } =
        useDirectoryHandle(storkageKey)
    const [files, setFiles] = useState<FileSystemFileHandle[]>([])

    useEffectAsync(async () => {
        const values = directory?.values()
        const newFiles: FileSystemFileHandle[] = []
        for await (const entry of values) {
            if (entry.kind === "file") newFiles.push(entry)
        }
        setFiles(newFiles)
    }, [directory])

    return {
        supported,
        showDirectoryPicker,
        files,
    }
}
