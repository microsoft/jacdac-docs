/* eslint-disable @typescript-eslint/ban-types */
import Papa from "papaparse"
import { SMap } from "../../../../../jacdac-ts/src/jdom/utils"

export interface CsvFile {
    data?: object[]
    errors?: {
        type: string // A generalization of the error
        code: string // Standardized error code
        message: string // Human-readable details
        row: number // Row index of parsed data where error is
    }[]
}

const cachedCSVs: SMap<CsvFile> = {}
export default function postLoadCSV(url: string): Promise<CsvFile> {
    const cached = cachedCSVs[url]
    if (cached) return Promise.resolve(cached)

    return new Promise<CsvFile>(resolve => {
        Papa.parse(url, {
            download: true,
            header: true,
            dynamicTyping: true,
            transformHeader: (h: string) => h.trim().toLocaleLowerCase(),
            complete: (r: CsvFile) => resolve(r),
        })
    }).then(r => {
        cachedCSVs[url] = r
        return r
    })
}
