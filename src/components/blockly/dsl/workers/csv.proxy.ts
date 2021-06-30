/* eslint-disable @typescript-eslint/ban-types */
import workerProxy from "./proxy"
import {
    CsvDownloadRequest,
    CsvSaveRequest,
    CsvOpenRequest,
    CsvFile,
    CsvResponse,
} from "../../../../workers/csv/dist/node_modules/csv.worker"

export async function downloadCSV(url: string): Promise<CsvFile> {
    const worker = workerProxy("csv")
    const res = await worker.postMessage<CsvDownloadRequest, CsvResponse>({
        worker: "csv",
        type: "download",
        url,
    })
    return res?.file
}

export async function saveCSV(
    fileHandle: FileSystemFileHandle,
    data: object[]
): Promise<void> {
    const worker = workerProxy("csv")
    await worker.postMessage<CsvSaveRequest, CsvResponse>({
        worker: "csv",
        type: "save",
        fileHandle,
        data,
    })
}

export async function openCSV(
    fileHandle: FileSystemFileHandle
): Promise<CsvFile> {
    const worker = workerProxy("csv")
    const resp = await worker.postMessage<CsvOpenRequest, CsvResponse>({
        worker: "csv",
        type: "open",
        fileHandle,
    })
    console.log(`open resp`, resp)
    return resp?.file
}
