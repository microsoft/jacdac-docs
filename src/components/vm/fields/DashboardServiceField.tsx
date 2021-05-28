import React, { ReactNode } from "react"
import ReactDOM from "react-dom"
import ReactField, { ReactFieldJSON, ReactFieldProvider } from "./ReactField"
import { child } from "../../widgets/svg"
import DarkModeProvider from "../../ui/DarkModeProvider"
import { IdProvider } from "react-use-id-hook"
import JacdacProvider from "../../../jacdac/Provider"
import AppTheme from "../../ui/AppTheme"
import { Grid } from "@material-ui/core"
import useServices from "../../hooks/useServices"
import DashboardServiceWidget from "../../dashboard/DashboardServiceWidget"
import { SRV_BUTTON } from "../../../../jacdac-ts/jacdac-spec/dist/specconstants"

function DashboardServiceFieldWidget() {
    const services = useServices({ ignoreSelf: true, serviceClass: SRV_BUTTON })
    const service = services?.[0]
    if (!service) {
        return null
    }
    return (
        <Grid
            container
            alignItems="center"
            alignContent="center"
            justify="center"
        >
            <DashboardServiceWidget
                service={service}
                visible={true}
                variant="icon"
            />
        </Grid>
    )
}

export default class DashboardServiceField extends ReactField<number> {
    static KEY = "jacdac_field_dashboard_service"
    static EDITABLE = false
    protected container: HTMLDivElement

    static fromJson(options: ReactFieldJSON) {
        return new DashboardServiceField(options)
    }

    constructor(options?: any) {
        super(options?.value, undefined, options, { width: 240, height: 160 })
    }

    protected initCustomView() {
        const { width, height } = this.size_
        const fo = child(this.fieldGroup_, "foreignObject", {
            x: 0,
            y: 0,
            width,
            height,
        }) as SVGForeignObjectElement

        this.container = document.createElement("div")
        fo.appendChild(this.container)
        ReactDOM.render(this.renderBlock(), this.container)
        return fo
    }

    dispose() {
        if (this.container) {
            ReactDOM.unmountComponentAtNode(this.container)
            this.container = undefined
        }
        super.dispose()
    }

    renderField(): ReactNode {
        return <div>field</div>
    }

    renderBlock(): ReactNode {
        return (
            <ReactFieldProvider value={this.value}>
                <DarkModeProvider>
                    <IdProvider>
                        <JacdacProvider>
                            <AppTheme>{this.renderBlockView()}</AppTheme>
                        </JacdacProvider>
                    </IdProvider>
                </DarkModeProvider>
            </ReactFieldProvider>
        )
    }

    renderBlockView(): ReactNode {
        console.log(`render field view`)
        return <DashboardServiceFieldWidget />
    }
}
