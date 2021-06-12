import { BlockServices, BlockWithServices } from "./WorkspaceContext"
import useChange from "../../jacdac/useChange"
import { Block } from "blockly"
import { useEffect } from "react"

export default function useBlockData<T>(block: Block, initialValue?: T) {
    const services = (block as unknown as BlockWithServices)?.jacdacServices
    // data on the current node
    const data = useChange<BlockServices, T>(services, _ => _?.data)
    const setData = (value: T) => {
        if (services) services.data = value
    }

    // set initial value
    useEffect(() => {
        if (services && initialValue !== undefined && services.data === undefined)
            services.data = initialValue
    }, [services])

    return { data, setData }
}
