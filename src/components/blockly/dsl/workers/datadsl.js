export default function createDataScienceWorker() {
    console.debug(`worker: start data-science`)
    const ws =
        typeof Window !== "undefined" &&
        new Worker(new URL("./datadsl.worker.js", import.meta.url))
    return ws
}
