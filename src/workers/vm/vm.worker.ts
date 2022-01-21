import { compile, JacError, Host, RunnerState, Runner } from "jacscript"
import { JDBus } from "jacdac-ts"

const bus = new JDBus()
let runner: Runner

class WorkerHost implements Host {
    files: Record<string, Uint8Array | string> = {}
    logs = ""
    errors: JacError[] = []

    write(filename: string, contents: Uint8Array | string) {
        this.files[filename] = contents
    }
    log(msg: string): void {
        this.logs += msg + "\n"
    }
    error(err: JacError) {
        this.errors.push(err)
    }
}

async function start() {
    // TODO: michal need to start runner
    //runner.run();
}

async function stop() {
    if (!runner) return

    // TODO: michal need to stop runner
}

export type VMState = RunnerState

export type VMError = JacError

export interface VMMessage {
    worker: "vm"
    id?: string
}

export interface VMRequest extends VMMessage {
    type?: string
}

export interface VMCompileRequest extends VMMessage {
    type: "compile"
    source: string
}

export interface VMCompileResponse extends VMMessage {
    files: Record<string, Uint8Array | string>
    logs: string
    errors: VMError[]
}

export interface VMStateRequest extends VMMessage {
    type: "state"
}

export interface VMStateResponse extends VMMessage {
    state?: VMState
}

export interface VMCommandRequest extends VMMessage {
    type: "command"
    action: "start" | "stop"
}

export interface VMRunResponse extends VMCompileResponse {
    state: VMState
}

const handlers: { [index: string]: (props: any) => object | Promise<object> } =
    {
        compile: async (props: VMCompileRequest) => {
            const { source } = props
            const host = new WorkerHost()
            const res = compile(host, source)

            if (res.success) {
                await stop()
                const { binary, dbg } = res
                runner = new Runner(bus, binary, dbg)
            }

            return <Partial<VMCompileResponse>>{
                ...res,
                files: host.files,
                logs: host.logs,
                errors: host.errors,
            }
        },
        state: () => {
            return <Partial<VMStateResponse>>{
                status: runner?.state,
            }
        },
        command: async (props: VMCommandRequest) => {
            const { action } = props
            switch (action) {
                case "stop":
                    await stop()
                    break
                case "start":
                    await stop()
                    await start()
                    break
            }

            return <Partial<VMRunResponse>>{
                state: runner?.state,
            }
        },
    }

function processMessage(message: VMRequest): any {
    try {
        const handler = handlers[message.type]
        return handler?.(message)
    } catch (e) {
        console.debug(e)
        return undefined
    }
}

async function handleMessage(event: MessageEvent) {
    const message: VMRequest = event.data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, worker, type, ...rest } = message
    if (worker !== "vm") return

    try {
        const result = await processMessage(message)
        const resp = { id, worker, ...rest, ...result }
        self.postMessage(resp)
    } catch (e) {
        self.postMessage({
            id,
            worker,
            error: e + "",
        })
    }
}

self.addEventListener("message", handleMessage)
console.debug(`jacdac vm: worker registered`)
