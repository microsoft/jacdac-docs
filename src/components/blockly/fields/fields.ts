import Blockly from "blockly"
import NoteField from "./NoteField"
import KeyboardKeyField from "./KeyboardKeyField"
import LEDMatrixField from "./LEDMatrixField"
import ServoAngleField from "./ServoAngleField"
import { BlockDefinition } from "../toolbox"
import { assert } from "../../../../jacdac-ts/src/jdom/utils"
import LEDColorField from "./LEDColorField"
import TwinField from "./TwinField"
import JDomTreeField from "./JDomTreeField"
import WatchValueField from "./WatchValueField"
import LogViewField from "./LogViewField"
import VariablesField from "./VariablesFields"
import DataTableField from "./DataTableField"
import ScatterPlotField from "./ScatterPlotField"
import DataColumnChooserField from "./DataColumnChooserField"
import LinePlotField from "./LinePlotField"
import GaugeWidgetField from "./GaugeWidgetField"
import BuiltinDataSetField from "./BuiltinDataSetField"
import BarChartField from "./BarField"
import HistogramField from "./HistogramField"
import FileSaveField from "./FileSaveField"
import FileOpenField from "./FileOpenField"
import DataPreviewField from "./DataPreviewField"
import BoxPlotField from "./BoxPlotField"

import ExpandModelBlockField from "./ModelBlockFields/ExpandModelBlockField"
import DatasetBlockField from "./ModelBlockFields/DatasetBlockField"
import RecordingBlockField from "./ModelBlockFields/RecordingBlockField"
import SmoothingBlockField from "./ModelBlockFields/SmoothingBlockField"
import KNNBlockField from "./ModelBlockFields/KNNBlockField"
import NeuralNetworkBlockField from "./ModelBlockFields/NeuralNetworkBlockField"
import ConvLayerBlockField from "./ModelBlockFields/ConvLayerBlockField"
import PoolingLayerBlockField from "./ModelBlockFields/PoolingLayerBlockField"
import DropoutLayerBlockField from "./ModelBlockFields/DropoutLayerBlockField"
import FlattenLayerBlockField from "./ModelBlockFields/FlattenLayerBlockField"
import DenseLayerBlockField from "./ModelBlockFields/DenseLayerBlockField"

let reactFieldShadows: BlockDefinition[]
export function registerFields() {
    if (reactFieldShadows) return

    reactFieldShadows = []
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const registerType = (fieldType: any) => {
        const key = fieldType.KEY
        assert(!!key)
        try {
            Blockly.fieldRegistry.unregister(key) // hot reload issues
        } catch (e) {
            // ignore hot reload issues
        }
        Blockly.fieldRegistry.register(key, fieldType)
        if (fieldType.SHADOW) reactFieldShadows.push(fieldType.SHADOW)
    }
    const fieldTypes = [
        KeyboardKeyField,
        NoteField,
        LEDMatrixField,
        ServoAngleField,
        LEDColorField,

        TwinField,
        JDomTreeField,

        GaugeWidgetField,

        WatchValueField,
        LogViewField,

        VariablesField,
        DataTableField,
        DataPreviewField,
        DataColumnChooserField,

        BuiltinDataSetField,

        ScatterPlotField,
        LinePlotField,
        BarChartField,

        HistogramField,
        BoxPlotField,

        ExpandModelBlockField,
        DatasetBlockField,
        RecordingBlockField,
        SmoothingBlockField,
        KNNBlockField,
        NeuralNetworkBlockField,
        ConvLayerBlockField,
        PoolingLayerBlockField,
        DropoutLayerBlockField,
        FlattenLayerBlockField,
        DenseLayerBlockField,

        FileSaveField,
        FileOpenField,
    ]
    fieldTypes.forEach(registerType)
}

export function fieldShadows() {
    registerFields()
    return reactFieldShadows.slice(0)
}
