import { JDEventSource } from "../../../jacdac-ts/src/jdom/eventsource"
import type { TFModelTrainingParams } from "../../workers/tf/dist/node_modules/tf.worker"

export default class MBModel extends JDEventSource {
    // maintain info about the dataset this model was created for
    inputShape: number[]
    inputTypes: string[]
    outputShape: number

    // maintain training info about the model
    armModel: string
    trainingAcc: number
    modelSummary: string[]
    weightData: ArrayBuffer
    trainingParams: TFModelTrainingParams

    // maintain the blockJSON that goes with this model
    blockJSON: string

    static createFromFile(modelObj: {
        name: string
        inputShape: number[]
        inputTypes: string[]
        labels: string[]
        modelJSON: string
        outputShape: number
        status?: string
        trainingAcc?: number
        weights?: number[]
    }) {
        const mbModel = new MBModel(
            modelObj.name,
            modelObj.labels,
            modelObj.modelJSON,
            modelObj.status
        )
        mbModel.inputShape = modelObj.inputShape
        mbModel.inputTypes = modelObj.inputTypes
        mbModel.outputShape = modelObj.outputShape

        mbModel.trainingAcc = modelObj.trainingAcc || 0
        mbModel.weightData =
            new Uint32Array(modelObj.weights).buffer || new ArrayBuffer(0)

        return mbModel
    }

    constructor(
        public name: string,
        public labels?: string[],
        public modelJSON?: string,
        public status?: string
    ) {
        super()

        this.labels = this.labels || []
        this.modelJSON = this.modelJSON || ""
        this.status = this.status || "untrained"

        this.weightData = new ArrayBuffer(0)
    }

    get summary() {
        const modelInfo = [
            "Training Status: " + this.status,
            "Input Types: " + this.inputTypes,
        ]

        if (this.modelSummary && this.modelSummary.length > 0)
            return [...modelInfo, ...this.modelSummary]
        return modelInfo
    }

    toJSON() {
        return {
            name: this.name,
            inputShape: this.inputShape,
            inputTypes: this.inputTypes,
            labels: this.labels,
            modelJSON: this.modelJSON,
            outputShape: this.outputShape,
            status: this.status || "untrained",
            trainingAcc: this.trainingAcc || 0,
            weights: Array.from(new Uint32Array(this.weightData)),
        }
    }
}
