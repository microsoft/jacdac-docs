import { CHANGE } from "../../../jacdac-ts/src/jdom/constants"
import { JDEventSource } from "../../../jacdac-ts/src/jdom/eventsource"
import * as tf from "@tensorflow/tfjs" /* RANDI TODO replace this with tf worker*/

export default class MBModel extends JDEventSource {
    readonly id = Math.random().toString()

    // maintain computed number of examples and input data types to avoid recomputation
    status: string
    inputShape: number[]
    outputShape: number
    
    xs: tf.Tensor
    ys: tf.Tensor
    trainingAcc: number

    constructor(
        public labels?: string[],
        public readonly model?: tf.Sequential
    ) {
        super()

        this.labels = []
        this.model = tf.sequential()
        this.status = "idle"

        if (labels !== undefined) this.labels = labels
        if (model !== undefined) this.model = model
    }

    set labelList(labels: string[]) {
        this.labels = labels
    }

    get TFModel() {
        return this.model
    }

    get summary() {
        // Randi replace with an assert
        if (this.model.layers.length == 0) {
            console.error(
                "This model does not have an layers. Please add some."
            )
            return []
        }

        const modelSummary = [
            "Training Status: " + this.status,
            "Topology: ",
        ]

        this.model.summary(undefined, undefined, newLine => {
            modelSummary.push(newLine)
        })

        return modelSummary
    }

    toJSON() {
        return "{}"
    }
}
