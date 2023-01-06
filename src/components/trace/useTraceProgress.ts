import { startTransition, useContext, useEffect, useState } from "react"
import { PROGRESS } from "../../../jacdac-ts/src/jdom/constants"
import PacketsContext from "../PacketsContext"

export default function useTraceProgress() {
    const { player } = useContext(PacketsContext)
    const [progress, setProgress] = useState<number>(player?.progress)
    useEffect(
        () =>
            player?.subscribe(PROGRESS, () =>
                startTransition(() => setProgress(player?.progress))
            ),
        [player]
    )
    return progress
}
