// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../jacdac-ts/jacdac-spec/spectool/jdspec.d.ts" />
import useLocalStorage from "../hooks/useLocalStorage"

export default function useUnitConverter(unit: jdspec.Unit) {
    if (!unit)
        return {
            converter: v => v,
        }

    const [settings, setSettings] = useLocalStorage("jacdac:unitconverters", {})
    const adapters: Record<string, Record<string, (v: number) => number>> = {
        "°C": {
            "°C": v => v,
            "°F": v => (5 / 9) * v + 32,
        },
    }

    const adapter = adapters[unit]
    if (!adapter)
        return {
            converter: v => v,
        }

    const name = settings[unit]
    const converter = adapter[name]
    const names = Object.keys(adapter)
    const setName = (name: string) => setSettings({ ...settings, unit: name })

    return {
        name,
        converter,
        names,
        setName,
    }
}
