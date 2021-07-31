export interface TFModelObj {
    name: string
    inputShape: number[]
    inputTypes: string[]
    labels: string[]
    modelJSON: string
    outputShape: number
    status: string
    trainingAcc: number
    weights: number[]
}

export interface TFModelMessage {
    worker: "tf"
    id?: string
    data?: any
}

export interface TFModelRequest extends TFModelMessage {
    type?: string
}

export interface TFModelTrainRequest extends TFModelRequest {
    type: "train"
    data: {
        modelBlockJSON: string
        model: TFModelObj
        xData: number[]
        yData: number[]
    }
}

export interface TFModelTrainResponse extends TFModelMessage {
    type: "train"
    data: {
        modelJSON: string
        modelWeights: ArrayBuffer
        trainingInfo: number[]
    }
}

export interface TFModelPredictRequest extends TFModelRequest {
    type: "predict"
    data: {
        model: TFModelObj
        zData: number[][]
    }
}

export interface TFModelPredictResponse extends TFModelMessage {
    type: "train"
    data: {
        prediction: number[]
    }
}
