
import Blockly, { BlockSvg, FieldVariable, Variables } from "blockly"
import modelBlockDsl, {
    MODEL_BLOCKS,
    MB_CLASS_TYPE,
    MB_CLASSIFIER_TYPE,
    MB_DATASET_TYPE,
} from "./modelblockdsl"

// handling dialogs within Blockly
export function addNewDataset(workspace) {
    // prompt user for dataset name
    Blockly.prompt("Enter new dataset name:", "", newDatasetName => {
        // check if name is already used
        if (newDatasetName != null && newDatasetName != undefined) {
            if (
                newDatasetName != "" &&
                !Variables.nameUsedWithAnyType(newDatasetName, workspace)
            ) {
                // get or create new dataset typed variable
                const newDatasetVar = workspace.createVariable(
                    newDatasetName,
                    MB_DATASET_TYPE
                )

                // create new dataset block on the workspace
                const newDatasetBlock = workspace.newBlock(
                    MODEL_BLOCKS + "dataset"
                ) as BlockSvg

                // automatically insert the variable name into the new block
                const field = newDatasetBlock.getField("DATASET_NAME") as FieldVariable
                field.setValue(newDatasetVar.getId())

                // add new block to the screen
                newDatasetBlock.initSvg()
                newDatasetBlock.render(false)
                workspace.centerOnBlock(newDatasetBlock.id)
            } else {
                setTimeout(
                    () =>
                        Blockly.alert(
                            "That variable name is invalid or already exists"
                        ),
                    10
                )
            }
        }
    })
}

// Randi TODO is this too redundant with creating a dataset?
export function addNewClassifier(workspace) {
    // Randi TODO should this gui be fancy?
    // prompt user for variable name
    Blockly.prompt(`Enter new classifier name:`, ``, newVariableName => {
        // check if name is already used
        if (newVariableName != null && newVariableName != undefined) {
            if (
                newVariableName != "" &&
                !Variables.nameUsedWithAnyType(newVariableName, workspace)
            ) {
                // get or creat new dataset typed variable
                const newVariable = workspace.createVariable(
                    newVariableName,
                    MB_CLASSIFIER_TYPE
                )

                // create new dataset block on the workspace
                const newBlock = workspace.newBlock(
                    MODEL_BLOCKS + "knn"
                ) as BlockSvg

                // automatically insert the variable name into the new block
                const field = newBlock.getField("CLASSIFIER_NAME") as FieldVariable
                field.setValue(newVariable.getId())

                // add new block to the screen
                newBlock.initSvg()
                newBlock.render(false)
                workspace.centerOnBlock(newBlock.id)
            } else {
                setTimeout(
                    () =>
                        Blockly.alert(
                            "That variable name is invalid or already exists"
                        ),
                    10
                )
            }
        }
    })
}

/*export function toggleRecordDataDialog() {
    const b = !recordDataDialogVisible
    setRecordDataDialogVisible(b)
}*/