import React, { ReactNode } from "react"
import { HidKeyboardModifiers } from "../../../../jacdac-ts/src/jdom/constants"
import { ReactField } from "./ReactField"
import KeyboardKeyInput from "../../ui/KeyboardKeyInput"

export interface KeyboardFieldValue {
    selector: number
    modifiers: HidKeyboardModifiers
}

export const FIELD_KEYBOARD_KEY = "jacdac_field_keyboard_key"

export class KeyboardField extends ReactField<{
    selector: number
    modifiers: HidKeyboardModifiers
}> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromJson(options: any) {
        return new KeyboardField(options)
    }

    renderField(): ReactNode {
        const { selector, modifiers } = this.value
        const handleChange = (
            newSelector: number,
            newModifiers: HidKeyboardModifiers
        ) => this.setValue({ newSelector, newModifiers })
        return (
            <KeyboardKeyInput
                selector={selector}
                modifiers={modifiers}
                onChange={handleChange}
            />
        )
    }
}
