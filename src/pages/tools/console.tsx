import React, { lazy } from "react"
import Suspense from "../../components/ui/Suspense"

const ConsoleToolbar = lazy(
    () => import("../../components/console/ConsoleToolbar")
)
const ConsoleLog = lazy(() => import("../../components/console/ConsoleLog"))

export default function Console() {
    return (
        <>
            <h1>
                Console
                <Suspense>
                    <ConsoleToolbar />
                </Suspense>
            </h1>
            <Suspense>
                <ConsoleLog />
            </Suspense>
        </>
    )
}
