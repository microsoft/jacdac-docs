import React, { ReactNode, useContext } from "react"
import ReactDOM from "react-dom"
import ReactField, { ReactFieldJSON, ReactFieldProvider } from "./ReactField"
import { child } from "../../widgets/svg"
import DarkModeProvider from "../../ui/DarkModeProvider"
import { IdProvider } from "react-use-id-hook"
import JacdacProvider from "../../../jacdac/Provider"
import AppTheme from "../../ui/AppTheme"
import { Button, Grid } from "@material-ui/core"
import useServices from "../../hooks/useServices"
import DashboardServiceWidget from "../../dashboard/DashboardServiceWidget"
import {
    SRV_BUTTON,
    SRV_SERVO,
} from "../../../../jacdac-ts/jacdac-spec/dist/specconstants"
import AddIcon from "@material-ui/icons/Add"
import { startServiceProviderFromServiceClass } from "../../../../jacdac-ts/src/servers/servers"
import JacdacContext, { JacdacContextProps } from "../../../jacdac/Context"

function DashboardServiceFieldWidget() {
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const serviceClass = SRV_SERVO
    const services = useServices({ ignoreSelf: true, serviceClass })
    const service = services?.[0]
    const handleStartSimulator = () =>
        startServiceProviderFromServiceClass(bus, serviceClass)
    return (
        <Grid
            container
            alignItems="center"
            alignContent="center"
            justify="center"
        >
            {service ? (
                <DashboardServiceWidget
                    service={service}
                    visible={true}
                    variant="icon"
                />
            ) : (
                <Button
                    variant="contained"
                    color="default"
                    startIcon={<AddIcon />}
                    onClick={handleStartSimulator}
                >
                    start simulator
                </Button>
            )}
        </Grid>
    )
}

export default class DashboardServiceField extends ReactField<number> {
    static KEY = "jacdac_field_dashboard_service"
    static EDITABLE = false
    protected container: HTMLDivElement
    protected resizeObserver: ResizeObserver

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

        this.resizeObserver = new ResizeObserver(
            (entries: ResizeObserverEntry[]) => {
                const entry = entries[0]
                const { contentRect } = entry
                this.size_.width = contentRect.width
                this.size_.height = contentRect.height
                fo.setAttribute("width", this.size_.width + "")
                fo.setAttribute("height", this.size_.height + "")
                this.forceRerender()
            }
        )
        this.resizeObserver.observe(this.container)

        ReactDOM.render(this.renderBlock(), this.container)
        return fo
    }

    dispose() {
        if (this.container) {
            ReactDOM.unmountComponentAtNode(this.container)
            this.container = undefined
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect()
            this.resizeObserver = undefined
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

    showEditor_() {
        // don't do anything
    }
}
