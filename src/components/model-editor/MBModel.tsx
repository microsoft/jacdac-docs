import { CHANGE } from "../../../jacdac-ts/src/jdom/constants";
import { JDEventSource } from "../../../jacdac-ts/src/jdom/eventsource";
import * as tf from "@tensorflow/tfjs" /* RANDI TODO replace this with tf worker*/


export default class MBModel extends JDEventSource {
    readonly id = Math.random().toString()
    
    // maintain computed number of examples and input data types to avoid recomputation
    status: string
    inputShape: number[]
    trainingAcc: number

    topClass: string
    prediction: any

    constructor(
        public labels?: string[], 
        public readonly model?: tf.Sequential,
    ) {
        super();
        
        this.labels = []
        this.model = tf.sequential()
        this.status = "idle"

        if (labels !== undefined)
            this.labels = labels
        if (model !== undefined)
            this.model = model

    }

    set labelList(labels: string[]) {
        this.labels = labels
    }

    get TFModel() {
        return this.model
    }

    get summary() {
        if (this.status == "idle") {
            return "Model Status: " + this.status +  
                    "\r\nModel Topology: --"
        }
        const summ = "" // this.model.summary(printFn)
        return "Model Status: " + this.status + 
                "\r\n" + summ
    }

    toJSON() {
        return "{}"
    }
}
