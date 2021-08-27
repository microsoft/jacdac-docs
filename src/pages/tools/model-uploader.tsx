import { List, ListItem, ListItemText, Typography } from "@material-ui/core"
import React, { lazy, useContext, useState } from "react"
import {
    SRV_SENSOR_AGGREGATOR,
    SRV_MODEL_RUNNER,
    ModelRunnerReg,
} from "../../../jacdac-ts/src/jdom/constants"
import JDService from "../../../jacdac-ts/src/jdom/service"
import ServiceList from "../../components/ServiceList"
import ConnectAlert from "../../components/alert/ConnectAlert"
import { useDbJSON, useDbUint8Array } from "../../components/useDb"
import Alert from "../../components/ui/Alert"
import { Button } from "gatsby-theme-material-ui"
import ModelRunnerClient from "../../../jacdac-ts/src/clients/modelrunnerclient"
import RegisterInput from "../../components/RegisterInput"
import CircularProgressWithLabel from "../../components/ui/CircularProgressWithLabel"
import SensorAggregatorClient, {
    SensorAggregatorConfig,
} from "../../../jacdac-ts/src/clients/sensoraggregatorclient"
import SensorAggregatorConfigView from "../../components/SensorAggregatorConfigView"
import ServiceManagerContext from "../../components/ServiceManagerContext"
import useChange from "../../jacdac/useChange"
import { IFile } from "../../../jacdac-ts/src/embed/protocol"
import { prettySize } from "../../../jacdac-ts/src/jdom/pretty"
import RegisterTrend from "../../components/RegisterTrend"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import useCall from "../../components/useCall"

import Suspense from "../../components/ui/Suspense"
import { Link } from "@material-ui/icons"
import useRegister from "../../components/hooks/useRegister"
const ImportButton = lazy(() => import("../../components/ImportButton"))

export function ModelContent(props: { service: JDService }) {
    const { service } = props

    const modelSizeRegister = useRegister(service, ModelRunnerReg.ModelSize)
    const lastErrorRegister = useRegister(service, ModelRunnerReg.LastError)
    const autoInvokeEveryRegister = useRegister(
        service,
        ModelRunnerReg.AutoInvokeEvery
    )
    const outputsRegister = useRegister(service, ModelRunnerReg.Outputs)

    const [modelSize] = useRegisterUnpackedValue<[number]>(modelSizeRegister)
    const [lastError] = useRegisterUnpackedValue<[number]>(lastErrorRegister)

    return (
        <>
            {lastError && <Alert severity="warning">{lastError}</Alert>}
            <Typography>
                model size:{" "}
                {modelSize === undefined ? "..." : prettySize(modelSize)}
            </Typography>
            <RegisterInput register={autoInvokeEveryRegister} visible={true} />
            <RegisterTrend showName register={outputsRegister} mini={true} />
        </>
    )
}

export function ModelActions(props: {
    service: JDService
    model: Uint8Array
    sensorAggregatorService?: JDService
    sensorInput?: SensorAggregatorConfig
}) {
    const { service, model, sensorAggregatorService, sensorInput } = props
    const { running, progress, alert, callAsync } = useCall()

    const modelDisabled = !service || !model || running

    const handleDeployModel = async () =>
        await callAsync(async setProgress => {
            if (sensorAggregatorService && sensorInput) {
                const aggregator = new SensorAggregatorClient(
                    sensorAggregatorService
                )
                await aggregator.setInputs(sensorInput)
            }
            if (service && model) {
                const runner = new ModelRunnerClient(service)
                await runner.deployModel(model, setProgress)
            }
        })

    return (
        <>
            {!running && (
                <Button
                    disabled={modelDisabled}
                    variant="contained"
                    color="primary"
                    onClick={handleDeployModel}
                >
                    {sensorInput
                        ? "Deploy model and configuration"
                        : "Deploy model"}
                </Button>
            )}
            {running && <CircularProgressWithLabel value={progress * 100} />}
            {alert}
        </>
    )
}

export default function ModelUploader() {
    const [importing, setImporting] = useState(false)
    const { data: model, setBlob: setModel } = useDbUint8Array("model.tflite")
    const { value: sensorConfig, setBlob: setSensorConfig } =
        useDbJSON<SensorAggregatorConfig>("sensor-input.json")
    const { modelStore } = useContext(ServiceManagerContext)

    const handleTfmodelFiles = async (files: File[]) => {
        const file = files[0]
        if (file) {
            try {
                setImporting(true)
                await setModel(file)
            } finally {
                setImporting(false)
            }
        }
    }
    const handleClearModel = async () => {
        try {
            setImporting(true)
            await setModel(undefined)
        } finally {
            setImporting(false)
        }
    }
    const handleSensorConfigFiles = async (files: File[]) => {
        const file = files[0]
        if (file) {
            try {
                setImporting(true)
                await setSensorConfig(file)
            } finally {
                setImporting(false)
            }
        }
    }
    const handleClearConfiguration = async () => {
        try {
            setImporting(true)
            await setSensorConfig(undefined)
        } finally {
            setImporting(false)
        }
    }
    const handleLoadModel = (model: IFile) => async () => {
        try {
            setImporting(true)
            console.log(`loading model`, model)
            const blob = await modelStore.loadFile(model)
            console.log(`loaded content`, blob)
            if (blob) {
                setModel(blob)
            }
        } finally {
            setImporting(false)
        }
    }
    const handleLoadInputConfiguration = (model: IFile) => async () => {
        try {
            setImporting(true)
            console.log(`loading model`, model)
            const blob = await modelStore.loadFile(model)
            console.log(`loaded content`, blob)
            if (blob) {
                setSensorConfig(blob)
            }
        } finally {
            setImporting(false)
        }
    }

    const models = useChange(modelStore, _ => _?.models())
    const inputConfigurations = useChange(modelStore, _ =>
        _?.inputConfigurations()
    )

    return (
        <>
            <h1>Model uploader</h1>
            <p>
                Upload Machine Learning Models (like TensorFlow Lite) into your{" "}
                <Link to="/services/model-runner/">ML module runners</Link>.
            </p>
            <h3>Load a machine learning model</h3>
            <p>
                Machine learning models are typically stored in a{" "}
                <code>.tflite</code> file.
            </p>
            {model && (
                <Alert severity={"success"}>
                    Model loaded ({prettySize(model.byteLength)})
                </Alert>
            )}
            {model && <p />}
            <Suspense>
                <ImportButton
                    disabled={importing}
                    text={"Import model"}
                    onFilesUploaded={handleTfmodelFiles}
                />
            </Suspense>
            <Button
                aria-label="clear model"
                disabled={importing}
                onClick={handleClearModel}
            >
                clear model
            </Button>
            {models?.length && (
                <List>
                    {models.map(model => (
                        <ListItem
                            key={model.path}
                            button
                            onClick={handleLoadModel(model)}
                        >
                            <ListItemText
                                primary={model.name}
                                secondary={`${model.path} ${prettySize(
                                    model.size
                                )}`}
                            />
                        </ListItem>
                    ))}
                </List>
            )}
            <h3>Configure sensors</h3>
            <p>
                Sensor configuration files are stored in a <code>.jd.json</code>{" "}
                file.
            </p>
            {sensorConfig && (
                <Alert severity={"success"}>Sensor configuration loaded</Alert>
            )}
            {sensorConfig && (
                <SensorAggregatorConfigView config={sensorConfig} />
            )}
            {sensorConfig && <p />}
            <Suspense>
                <ImportButton
                    disabled={importing}
                    text={"Import configuration"}
                    onFilesUploaded={handleSensorConfigFiles}
                />
            </Suspense>
            <Button
                aria-label="clear configuration"
                disabled={importing}
                onClick={handleClearConfiguration}
            >
                clear configuration
            </Button>
            {inputConfigurations?.length && (
                <List>
                    {inputConfigurations.map(iconfig => (
                        <ListItem
                            key={iconfig.path}
                            button
                            onClick={handleLoadInputConfiguration(iconfig)}
                        >
                            <ListItemText
                                primary={iconfig.name}
                                secondary={`${iconfig.path} ${prettySize(
                                    iconfig.size
                                )}`}
                            />
                        </ListItem>
                    ))}
                </List>
            )}
            <h3>Deploy model to machine learning services</h3>
            <ConnectAlert serviceClass={SRV_MODEL_RUNNER} />
            <ServiceList
                serviceClass={SRV_MODEL_RUNNER}
                content={service => <ModelContent service={service} />}
                actions={service => (
                    <ModelActions
                        service={service}
                        model={model}
                        sensorAggregatorService={
                            service?.device.services({
                                serviceClass: SRV_SENSOR_AGGREGATOR,
                            })?.[0]
                        }
                        sensorInput={sensorConfig}
                    />
                )}
            />
        </>
    )
}
