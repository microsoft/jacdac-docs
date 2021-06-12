import { BlockWithServices } from "./WorkspaceContext"
import useChange from "../../jacdac/useChange"
import { Block } from "blockly"

export default function useBlockData(block: Block) {
    const services = (block as unknown as BlockWithServices)?.jacdacServices
    // data on the current node
    const data = useChange(services, _ => _?.data)
    return data
}
