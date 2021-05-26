import React from "react"
import ReactDOM from "react-dom"
import Blockly from "blockly/core"
import JacdacProvider from "../../../jacdac/Provider"
import { ReactNode } from "react"
import { IdProvider } from "react-use-id-hook"
import DarkModeProvider from "../../ui/DarkModeProvider"

/**
 * A base class for react-based field
 * TODO:
 
```
  static fromJson(options) {
    return new ReactDateField(new Date(options['date']));
  }
  
  onDateSelected_ = (date) => {
    this.setValue(new Date(date));
    Blockly.DropDownDiv.hideIfOwner(this, true);
  }

  getText_() {
    return this.value_.toLocaleDateString();
  };

  fromXml(fieldElement) {
    this.setValue(new Date(fieldElement.textContent));
  }
```
*/
export class ReactField<T> extends Blockly.Field {
    SERIALIZABLE = true
    protected div_: Element

    constructor(value: T, validator?: any, options?: any) {
        super(value, validator, options)
    }

    get value(): T {
        try {
            const v = JSON.parse(this.getValue())
            return (v || {}) as T
        } catch (e) {
            console.warn(e)
            return {} as T
        }
    }

    set value(v: T) {
        this.setValue(JSON.stringify(v))
    }

    getText_() {
        return JSON.stringify(this.value)
    }

    fromXml(fieldElement: Element) {
        try {
            const v = JSON.parse(fieldElement.textContent)
            this.setValue(v)
        } catch (e) {
            console.warn(e)
            this.setValue(undefined)
        }
    }

    showEditor_() {
        this.div_ = Blockly.DropDownDiv.getContentDiv()
        ReactDOM.render(this.render(), this.div_)

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const border = (this.sourceBlock_ as any).getColourBorder()
        const borderColour = border.colourBorder || border.colourLight
        Blockly.DropDownDiv.setColour(
            this.sourceBlock_.getColour(),
            borderColour
        )
        Blockly.DropDownDiv.showPositionedByField(
            this,
            this.dropdownDispose_.bind(this)
        )
    }

    hide() {
        Blockly.DropDownDiv.hideIfOwner(this, true)
    }

    dropdownDispose_() {
        // this blows on hot reloads
        try {
            ReactDOM.unmountComponentAtNode(this.div_)
        } catch (e) {
            console.error(e)
        }
    }

    render() {
        return (
            <DarkModeProvider>
                <IdProvider>
                    <JacdacProvider>{this.renderField()}</JacdacProvider>
                </IdProvider>
            </DarkModeProvider>
        )
    }

    renderField(): ReactNode {
        return <span>not implemented</span>
    }
}
