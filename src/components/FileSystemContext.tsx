import React, { createContext, ReactNode, useMemo } from "react"
import { fileSystemHandleSupported } from "./fs/fs"
import { FileSystem } from "./fs/fsdom"

export interface FileSystemProps {
    fileSystem: FileSystem
}

const FileSystemContext = createContext<FileSystemProps>({
    fileSystem: undefined,
})
FileSystemContext.displayName = "fs"

export default FileSystemContext

// eslint-disable-next-line react/prop-types
export function FileSystemProvider(props: { children: ReactNode }) {
    const { children } = props
    const fileSystem = useMemo(
        () => fileSystemHandleSupported() && new FileSystem(),
        []
    )

    return (
        <FileSystemContext.Provider
            value={{
                fileSystem,
            }}
        >
            {children}
        </FileSystemContext.Provider>
    )
}
