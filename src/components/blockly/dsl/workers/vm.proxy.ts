import type {
    VMCompileRequest,
    VMCompileResponse,
    VMStateRequest,
    VMStateResponse,
    VMState,
    VMCommandRequest,
} from "../../../../workers/vm/dist/node_modules/vm.worker"
import workerProxy from "./proxy"

/**
 * Compiles the sources and keeps the compiled program ready to run. Can be done while running another program.
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
export async function jscState(): Promise<VMState> {
    const worker = workerProxy("vm")
    const res = await worker.postMessage<VMStateRequest, VMStateResponse>({
        worker: "vm",
        type: "state",
    })
    return res?.state
}

/**
 * Updates the run state
 * @param source
 * @returns
 */
export async function jscCommand(
    action: "start" | "stop"
): Promise<VMStateResponse> {
    const worker = workerProxy("vm")
    const res = await worker.postMessage<VMCommandRequest, VMStateResponse>({
        worker: "vm",
        type: "command",
        action
    })
    return res
}

