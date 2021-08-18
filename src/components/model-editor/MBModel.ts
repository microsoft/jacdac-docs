import { JDEventSource } from "../../../jacdac-ts/src/jdom/eventsource"
import { LayerStats } from "../../../ml4f/built/ml4f"
import type { TFModelTrainingParams } from "../../workers/tf/dist/node_modules/tf.worker"

export interface ModelStats {
    total: LayerStats
    layers: LayerStats[]
}

export default class MBModel extends JDEventSource {
    // maintain info about the dataset this model was created for
    inputShape: number[]
    inputTypes: string[]
    inputInterval: number
    outputShape: number

    // maintain training info about the model
    armModel: string
    trainingAcc: number
    modelStats: ModelStats
    modelSummary: string[]
    weightData: ArrayBuffer
    trainingParams: TFModelTrainingParams

    // maintain the blockJSON that goes with this model
    blockJSON: string

    static createFromFile(modelObj: {
        name: string
        inputShape: number[]
        inputTypes: string[]
        inputInterval: number
        labels: string[]
        modelJSON: any
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
        mbModel.inputInterval = modelObj.inputInterval || 100
        mbModel.outputShape = modelObj.outputShape

        mbModel.trainingAcc = modelObj.trainingAcc || 0
        mbModel.weightData =
            new Uint32Array(modelObj.weights).buffer || new ArrayBuffer(0)

        return mbModel
    }

    constructor(
        public name: string,
        public labels?: string[],
        public modelJSON?: any,
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

        if (this.modelStats && this.modelStats.layers.length) {
            const numBytes = this.modelStats.total.weightBytes
            const numParams = numBytes / 4 // for microbit
            const numCycles = this.modelStats.total.optimizedCycles
            const executionTimeMs = numCycles / 64000 // for microbit at 64MHz
            const archSummary = [
                `---------------------------------------------------`, // line break
                `Total no. of layers: ${this.modelStats.layers.length}`,
                `Total no. of parameters: ${numParams}`,
                `Total model size: ${numBytes} bytes`,
                `Execution time: ${numCycles} cycles (${executionTimeMs.toPrecision(
                    2
                )}ms @ 64MHz)`,
            ]

            return [...modelInfo, ...archSummary]
        }

        return modelInfo
    }

    toJSON() {
        return {
            name: this.name,
            inputShape: this.inputShape,
            inputTypes: this.inputTypes,
            inputInterval: this.inputInterval,
            labels: this.labels,
            modelJSON: this.modelJSON,
            outputShape: this.outputShape,
            status: this.status || "untrained",
            trainingAcc: this.trainingAcc || 0,
            weights: Array.from(new Uint32Array(this.weightData)),
        }
    }
}
