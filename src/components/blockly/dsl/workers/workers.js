let _worker
function worker() {
    if (!_worker) {
        _worker =
            typeof Window !== "undefined" &&
            new Worker(
                new URL(
                    // gatsby fast-refresh ignores files with node_modules in path
                    "../../../../workers/dist/node_modules/jacdac-docs-workers.js",
                    import.meta.url
                )
            )
        if (_worker)
            _worker.postMessage({ hello: true })
    }
}

export default worker
