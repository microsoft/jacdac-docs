import { CHANGE } from "../../../jacdac-ts/src/jdom/constants"
import { JDEventSource } from "../../../jacdac-ts/src/jdom/eventsource"

import FieldDataSet from "../FieldDataSet"

export default class ModelDataset extends JDEventSource {
    readonly id = Math.random().toString()

    // maintain computed number of examples and input data types to avoid recomputation
    inputTypes: string[]
    registerIds: string[]

    constructor(
        public readonly labels?: string[],
        public readonly recordings?: FieldDataSet[]
    ) {
        super()

        this.labels = []
        this.recordings = []

        if (labels !== undefined) this.labels = labels
        if (recordings !== undefined) this.recordings = recordings
    }

    get labelList() {
        return Object.keys(this.recordings)
    }

    get recordingList() {
        return this.recordings
    }

    get numRecordings() {
        return this.labels.length
    }

    arraysEqual(a, b) {
        if (a === b) return true
        if (a == null || b == null) return false
        if (a.length !== b.length) return false

        // If you don't care about the order of the elements inside
        // the array, you should sort both arrays here.
        // Please note that calling sort on an array will modify that array.
        // you might want to clone your array first.

        for (let i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false
        }
        return true
    }

    getRecordingsWithLabel(label: string) {
        return this.recordings[label]
    }

    addRecording(recording: FieldDataSet, label: string, registerIds: string[]) {
        if (this.labels.length == 0) {
            this.labels.push(label)
            this.recordings[label] = [recording]
            this.inputTypes = recording.headerList
            this.registerIds = registerIds

            this.emit(CHANGE)
        } else if (this.arraysEqual(recording.headerList, this.inputTypes)) {
            // Check if label is already in dataset
            if (this.labels.indexOf(label) < 0) {
                // If not, add the new label to the dataset
                this.labels.push(label)
                this.recordings[label] = [recording]
            } else {
                this.recordings[label].push(recording)
            }

            this.emit(CHANGE)
        } // TODO Randi decide what error to raise when inputting incorrect data (shouldn't be possible, though)
    }

    removeRecording(recording: FieldDataSet) {
        const tableLabel = recording.name.slice(0, recording.name.indexOf("$"))
        const i = this.recordings[tableLabel].indexOf(recording)

        if (i > -1) {
            this.recordings[tableLabel].splice(i, 1)

            // If this emptied out a label, then remove that label
            if (this.recordings[tableLabel].length == 0) {
                const j = this.labels.indexOf(tableLabel)
                this.labels.splice(j, 1)
            }
        }
    }

    get summary() {

        return "Labels: " + this.labelList.join(", ")
    }

    toCSV() {
        const allheaders = ["time", ...this.inputTypes].join(",")
        const csv: string[] = [allheaders]
        this.recordings.forEach(recording => csv.push(recording.toCSV()))
        return csv.join("\n")
    }
}
