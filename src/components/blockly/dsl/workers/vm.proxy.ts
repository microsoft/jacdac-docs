import { JDBridge } from "jacdac-ts/src/jdom/bridge"
import type {
    VMCompileRequest,
    VMCompileResponse,
    VMStateRequest,
    VMStateResponse,
    VMState,
    VMCommandRequest,
    VMRequest,
    VMPacketRequest,
} from "../../../../workers/vm/dist/node_modules/vm.worker"
import workerProxy, { WorkerProxy } from "./proxy"
import bus from "../../../../jacdac/providerbus"
import { MESSAGE } from "jacdac-ts/src/jdom/constants"

export type JscState = VMState

class VMBridge extends JDBridge {
    constructor(readonly worker: WorkerProxy) {
        super()
        worker.on(MESSAGE, (msg: VMRequest) => {
            const { type } = msg
            if (type === "packet") {
                const { data } = msg as VMPacketRequest
                console.log("vmbridge: received data", data)
                bridge.receivePacket(data)
            } else if (type === "state") {
                const { state } = msg as VMStateResponse
                console.log("vmbridge: new state", { state })
            }
        })
    }
    protected sendPacket(data: Uint8Array): void {
        this.worker.postMessage({
            worker: this.worker.workerid,
            type: "packet",
            data,
        })
    }
}

let bridge: VMBridge
function workerBridge() {
    if (!bridge) {
        const worker = workerProxy("vm")
        bridge = new VMBridge(worker)
    }
    return bridge
}

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
    const bridge = workerBridge()
    if (action === "start") bridge.bus = bus
    else bridge.bus = undefined
    const res = await bridge.worker.postMessage<
        VMCommandRequest,
        VMStateResponse
    >({
        worker: "vm",
        type: "command",
        action,
    })
    return res
}
