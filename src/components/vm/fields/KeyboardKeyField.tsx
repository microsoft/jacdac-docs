import React, { lazy, ReactNode } from "react"
import { HidKeyboardModifiers } from "../../../../jacdac-ts/src/jdom/constants"
import ReactField, { ReactFieldJSON } from "./ReactField"
import Suspense from "../../ui/Suspense"
import { renderKeyboardKey } from "../../../../jacdac-ts/src/servers/hidkeyboardserver"
const KeyboardKeyInput = lazy(() => import("../../ui/KeyboardKeyInput"))

export interface KeyboardFieldValue {
    selector: number
    modifiers: HidKeyboardModifiers
}

export default class KeyboardKeyField extends ReactField<KeyboardFieldValue> {
    static KEY = "jacdac_field_keyboard_key"

    static fromJson(options: ReactFieldJSON) {
        return new KeyboardKeyField(options?.value, undefined, options)
    }

    get defaultValue() {
        return { selector: 4, modifiers: 0 }
    }

    getText_() {
        const { selector, modifiers } = this.value
        return renderKeyboardKey(selector, modifiers, true)
    }

    renderField(): ReactNode {
        const { selector, modifiers } = this.value
        const handleChange = (
            newSelector: number,
            newModifiers: HidKeyboardModifiers
        ) => {
            this.value = { selector: newSelector, modifiers: newModifiers }
        }
        return (
            <Suspense>
                <KeyboardKeyInput
                    initialSelector={selector}
                    initialModifiers={modifiers}
                    onChange={handleChange}
                />
            </Suspense>
        )
    }
}
