import Blockly from "blockly"
import { FIELD_KEYBOARD_KEY, KeyboardField } from "./KeyboardField"

let registered = false
export function registerFields() {
    if (registered) return

    registered = true
    Blockly.fieldRegistry.register(FIELD_KEYBOARD_KEY, KeyboardField)
}
