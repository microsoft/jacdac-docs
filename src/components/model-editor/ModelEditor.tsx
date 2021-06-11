import { Grid } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { Button } from "@material-ui/core"
import * as tf from "@tensorflow/tfjs"

export default function ModelPlayground() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${count} clicks`;
    });

    const handleIncrement = async () => {
        this.status = "computing"
        // Define a model for linear regression.
        const model = tf.sequential()
        model.add(tf.layers.dense({ units: 1, inputShape: [1] }))

        // Prepare the model for training: Specify the loss and the optimizer.
        model.compile({ loss: "meanSquaredError", optimizer: "sgd" })

        // Generate some synthetic data for training.
        const xs = tf.tensor2d([1, 2, 3, 4], [4, 1])
        const ys = tf.tensor2d([1, 3, 5, 7], [4, 1])

        // Train the model using the data.
        await model.fit(xs, ys)
        // Use the model to do inference on a data point the model hasn't seen before:
        model.predict(tf.tensor2d([5], [1, 1]))

        this.status = "idle"
        console.log({ xs, ys, model })
    }

    return (
        <Grid container>
            <Grid item>
                <Button onClick={handleIncrement}>run</Button>
            </Grid>
            <Grid item>
                <button onClick={() => setCount(count +1)}>+1</button>
            </Grid>
        </Grid>
    )
}
