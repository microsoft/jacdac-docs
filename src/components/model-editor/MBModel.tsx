import { CHANGE } from "../../../jacdac-ts/src/jdom/constants"
import { JDEventSource } from "../../../jacdac-ts/src/jdom/eventsource"

import * as ml4f from "../../../ml4f/src/main"
import * as tf from "@tensorflow/tfjs" /* RANDI TODO replace this with tf worker*/
import postModelRequest from "../blockly/dsl/workers/tf.proxy"
import {
    TFModelTrainRequest,
    TFModelPredictRequest,
} from "../../workers/tf/dist/node_modules/tf.worker"

export default class MBModel extends JDEventSource {
    readonly id = Math.random().toString()

    // maintain computed number of examples and input data types to avoid recomputation
    inputShape: number[]
    inputTypes: string[]
    outputShape: number
    trainingAcc: number

    static async createFromFile(modelObj: {
        name: string
        inputShape: number[]
        inputTypes: string[]
        labels: string[]
        model: tf.io.ModelArtifacts
        outputShape: number
        status?: string
        trainingAcc?: number
        weights?: number[]
    }) {
        // if model has been trained, add trained weights to model object
        if (modelObj.weights.length)
            modelObj.model.weightData = new Uint32Array(modelObj.weights).buffer
        const loadedModel = await tf.loadLayersModel({
            load: () => Promise.resolve(modelObj.model),
        })
        
        const mbModel = new MBModel(
            modelObj.name,
            modelObj.labels,
            loadedModel,
            modelObj.status,
        )
        mbModel.inputShape = modelObj.inputShape
        mbModel.inputTypes = modelObj.inputTypes
        mbModel.outputShape = modelObj.outputShape

        mbModel.trainingAcc = modelObj.trainingAcc || 0

        return mbModel
    }

    constructor(
        public name: string,
        public labels?: string[],
        public model?: tf.Sequential,
        public status?: string
    ) {
        super()

        this.labels = this.labels || []
        this.model = this.model || tf.sequential()
        this.status = this.status || "idle"

        if (labels !== undefined) this.labels = labels
        if (model !== undefined) this.model = model
    }

    set labelList(labels: string[]) {
        this.labels = labels
    }

    get summary() {
        // TODO Randi replace with an assert
        if (this.model.layers.length == 0) {
            console.error(
                "This model does not have an layers"
            )
            return []
        }

        const modelSummary = [
            "Training Status: " + this.status,
            "Input Types: " + this.inputTypes,
            "Topology: ",
        ]

        this.model.summary(undefined, undefined, newLine => {
            modelSummary.push(newLine)
        })

        return modelSummary
    }

    async toJSONAsync() {
        let mod: tf.io.ModelArtifacts
        await this.model.save({
            save: m => {
                mod = m
                const res: tf.io.SaveResult = {
                    modelArtifactsInfo: {
                        dateSaved: new Date(),
                        modelTopologyType: "JSON",
                    },
                }
                return Promise.resolve(res)
            },
        })
        const weightData = Array.from(new Uint32Array(mod.weightData))
        mod.weightData = null

        return {
            name: this.name,
            inputShape: this.inputShape,
            inputTypes: this.inputTypes,
            labels: this.labels,
            model: mod,
            outputShape: this.outputShape,
            status: this.status || "idle",
            trainingAcc: this.trainingAcc || 0,
            weights:
                this.status == "completed"
                    ? weightData
                    : [],
        }
    }
}
