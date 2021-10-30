/* eslint-disable @typescript-eslint/ban-types */
import workerProxy from "./proxy"
import type {
    EnclosureModel,
    EnclosureOptions,
    CadConvertRequest,
    CadConvertResponse
} from "../../../../workers/cad/dist/node_modules/cad.worker"

export async function convertToSTL(model: EnclosureModel, options?: EnclosureOptions): Promise<Blob> {
    const worker = workerProxy("csv")
    const res = await worker.postMessage<CadConvertRequest, CadConvertResponse>({
        worker: "cad",
        type: "convert",
        model,
        options,
    })
    return res?.stl
}
