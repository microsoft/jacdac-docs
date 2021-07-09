import { ReactNode, useContext } from "react"

// tslint:disable-next-line: no-submodule-imports match-default-export-name

import { ReactFieldJSON, VALUE_CHANGE } from "../ReactField"
import ReactImageField from "../ReactImageField"

export interface RecordingBlockFieldValue {
    totalSamples: number
    timestamp: number
    inputTypes: string[]
}

export default class RecordingBlockField extends ReactImageField<RecordingBlockFieldValue> {
    static KEY = "recording_block_field_key"
    
    constructor(value: string) {
        super(value)

        this.events.on(VALUE_CHANGE, () => {
            this.setSize(32, 32)
        })
    }

    static fromJson(options: ReactFieldJSON) {
        return new RecordingBlockField(options?.value)
    }

    get defaultValue() {
        return {
            totalSamples: 0,
            timestamp: Date.now(),
            inputTypes: []
        }
    }

    getText_() {
        const {totalSamples, timestamp, inputTypes} = this.value

        let inputs = "none"
        if (inputTypes.length) inputs = inputTypes.join(", ")

        return `Recorded ${totalSamples} sample(s)\n`
                + `\tat ${timestamp}\n`
                + `\tfrom ${inputs}`
    }

    editRecording(workspace) {
        console.log("Edit this recording")
    }

    renderValue(): string {
        // Doesn't work for local images
        return "https://royalposthumus.com/images/white_menu_icon.png"
    }

    renderField(): ReactNode {        
        return null
    }
}