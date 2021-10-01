import React, { createContext, useState } from "react"
import { randomDeviceId } from "../../jacdac-ts/src/jdom/random"

export interface HostedSimulatorSpec {
    name: string
    url: string
}

export interface HostedSimulator {
    id: string
    spec: HostedSimulatorSpec
}

export interface HostedSimulatorsContextProps {
    simulators: HostedSimulator[]
    startSimulator: (spec: HostedSimulatorSpec) => void
    stopSimulator: (id: string) => void
    clear: () => void
}

const HostedSimulatorsContext = createContext<HostedSimulatorsContextProps>({
    simulators: [],
    startSimulator: () => {},
    stopSimulator: () => {},
    clear: () => {},
})

HostedSimulatorsContext.displayName = "hostedSims"

export default HostedSimulatorsContext

export function simulatorSpecifications(): HostedSimulatorSpec[] {
    return [
        {
            name: "Azure IoT Uploader",
            url: "https://microsoft.github.io/pxt-jacdac/",
        },
    ]
}

// eslint-disable-next-line react/prop-types
export const HostedSimulatorsProvider = ({ children }) => {
    const [simulators, setSimulators] = useState<HostedSimulator[]>([])

    const startSimulator = (spec: HostedSimulatorSpec) =>
        setSimulators([...simulators, { id: randomDeviceId(), spec }])
    const stopSimulator = (id: string) =>
        setSimulators(simulators.filter(sim => sim.id !== id))
    const clear = () => setSimulators([])

    return (
        <HostedSimulatorsContext.Provider
            value={{
                simulators,
                startSimulator,
                stopSimulator,
                clear,
            }}
        >
            {simulators.map(({ id, spec }) => (
                <iframe key={id} id={id} src={spec.url} title={spec.name} />
            ))}
            {children}
        </HostedSimulatorsContext.Provider>
    )
}
