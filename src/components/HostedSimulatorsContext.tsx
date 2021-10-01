import { createStyles, makeStyles, Theme } from "@material-ui/core"
import React, { createContext, useState } from "react"
import { randomDeviceId } from "../../jacdac-ts/src/jdom/random"

export interface HostedSimulatorDefinition {
    name: string
    url: string
}

export interface HostedSimulator {
    id: string
    definition: HostedSimulatorDefinition
}

export interface HostedSimulatorsContextProps {
    simulators: HostedSimulator[]
    addHostedSimulator: (definition: HostedSimulatorDefinition) => void
    removeHostedSimulator: (id: string) => void
    clearHostedSimulators: () => void
}

const HostedSimulatorsContext = createContext<HostedSimulatorsContextProps>({
    simulators: [],
    addHostedSimulator: () => {},
    removeHostedSimulator: () => {},
    clearHostedSimulators: () => {},
})

HostedSimulatorsContext.displayName = "hostedSims"

export default HostedSimulatorsContext

export function hostedSimulatorDefinitions(): HostedSimulatorDefinition[] {
    return [
        {
            name: "Azure IoT Uploader",
            url: "https://microsoft.github.io/pxt-jacdac/",
        },
    ]
}

const useStyles = makeStyles(() =>
    createStyles({
        hostedSimulator: {
            position: "absolute",
            right: 0,
            bottom: 0,
            width: "1px",
            height: "1px",
            border: "none",
        },
    })
)

// eslint-disable-next-line react/prop-types
export const HostedSimulatorsProvider = ({ children }) => {
    const [simulators, setSimulators] = useState<HostedSimulator[]>([])
    const classes = useStyles()

    const addHostedSimulator = (definition: HostedSimulatorDefinition) =>
        definition &&
        setSimulators([
            ...simulators,
            { id: randomDeviceId(), definition: definition },
        ])
    const removeHostedSimulator = (id: string) =>
        setSimulators(simulators.filter(sim => sim.id !== id))
    const clearHostedSimulators = () => setSimulators([])

    return (
        <HostedSimulatorsContext.Provider
            value={{
                simulators,
                addHostedSimulator,
                removeHostedSimulator,
                clearHostedSimulators,
            }}
        >
            {simulators.map(({ id, definition }) => (
                <iframe
                    className={classes.hostedSimulator}
                    key={id}
                    id={id}
                    src={definition.url}
                    title={definition.name}
                />
            ))}
            {children}
        </HostedSimulatorsContext.Provider>
    )
}
