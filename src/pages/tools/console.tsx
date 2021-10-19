import React, { lazy } from "react"
import Suspense from "../../components/ui/Suspense"

const WebSerialConsoleButton = lazy(
    () => import("../../components/console/WebSerialConsoleButton")
)
const ConsoleLog = lazy(() => import("../../components/console/ConsoleLog"))

export default function Console() {
    return (
        <>
            <h1>
                Console
                <Suspense>
                    <WebSerialConsoleButton />
                </Suspense>
            </h1>
            <Suspense>
                <ConsoleLog />
            </Suspense>
        </>
    )
}
