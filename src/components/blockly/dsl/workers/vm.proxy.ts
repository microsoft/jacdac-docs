import type { VMCompileRequest, VMCompileResponse, VMStateRequest, VMStateResponse, VMState } from "../../../../workers/vm/dist/node_modules/vm.worker"
import workerProxy from "./proxy"

/**
 * Compiles the sources, no running. Can be done while running another program.
 * @param source 
 * @returns 
 */
export async function jscCompile(
    source: string
    // eslint-disable-next-line @typescript-eslint/ban-types
): Promise<VMCompileResponse> {
    const worker = workerProxy("vm")
    const res = await worker.postMessage<VMCompileRequest, VMCompileResponse>({
        worker: "vm",
        type: "compile",
        source,
    })
    return res
}

/**
 * Queries the execution state of the runner
 * @returns 
 */
export async function jscState() : Promise<VMState> {
    const worker = workerProxy("vm")
    const res = await worker.postMessage<VMStateRequest, VMStateResponse>({
        worker: "vm",
        type: "state",
    })
    return res?.state
}