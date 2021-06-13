let _worker
function worker() {
    if (!_worker) {
        _worker =
            typeof Window !== "undefined" &&
            new Worker(
                new URL(
                    "../../../../workers/dist/jacdac-docs-workers.js",
                    import.meta.url
                )
            )
        if (_worker)
            _worker.postMessage({ hello: true })
    }
}

export default worker
