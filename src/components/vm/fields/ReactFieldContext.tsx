/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useState } from "react"

export interface ReactFieldContextProps<T = any> {
    value: T
    onValueChange: (value: T) => void
}

export const ReactFieldContext = createContext<ReactFieldContextProps>({
    value: undefined,
    onValueChange: undefined,
})
ReactFieldContext.displayName = "ReactField"

export default ReactFieldContext

export function ReactFieldProvider(props: {
    value: any
    onValueChange?: (newValue: any) => any
    children: ReactNode
}) {
    const {
        children,
        value: initialValue,
        onValueChange: onFieldValueChange,
    } = props
    const [value, setValue] = useState<any>(initialValue)
    const onValueChange = (newValue: any) => {
        setValue(newValue)
        onFieldValueChange?.(newValue)
    }
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <ReactFieldContext.Provider value={{ value, onValueChange }}>
            {children}
        </ReactFieldContext.Provider>
    )
}
