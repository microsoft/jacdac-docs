import { Box } from "@mui/material"
import React, { useMemo } from "react"
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano"
import "react-piano/dist/styles.css"
import { useId } from "react"

export default function PianoWidget(props: {
    playTone: (frequency: number) => Promise<void>
}) {
    const { playTone } = props
    const firstNote = MidiNumbers.fromNote("c4")
    const lastNote = MidiNumbers.fromNote("d5")
    /*
    const keyboardShortcuts = useMemo(
        () =>
            KeyboardShortcuts.create({
                firstNote: firstNote,
                lastNote: lastNote,
                keyboardConfig: KeyboardShortcuts.HOME_ROW,
            }),
        [firstNote, lastNote]
    )
    */
    const midiFrequencies = useMemo(
        () =>
            new Array(127)
                .fill(0)
                .map((_, x) => (440 / 32) * Math.pow(2, (x - 9) / 12)),
        []
    )
    const pianoId = useId()

    return (
        <Box mb={1} mt={1}>
            <Piano
                id={pianoId}
                width={320}
                noteRange={{ first: firstNote, last: lastNote }}
                playNote={midiNumber => {
                    const frequency = midiFrequencies[midiNumber]
                    playTone(frequency)
                }}
                stopNote={() => {
                    // not supported
                }}
                //keyboardShortcuts={keyboardShortcuts}
            />
        </Box>
    )
}
