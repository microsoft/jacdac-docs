import React, { useContext } from "react"
import { Grid } from "@mui/material"
import DashboardServiceWidget from "../../dashboard/DashboardServiceWidget"
import WorkspaceContext from "../WorkspaceContext"
import NoServiceAlert from "./NoServiceAlert"
import { PointerBoundary } from "./PointerBoundary"
import useBestRegister from "../../hooks/useBestRegister"
import { useEffect } from "react"
import { REPORT_UPDATE } from "../../../../jacdac-ts/src/jdom/constants"
import useBlockData from "../useBlockData"
import JacdacContext, { JacdacContextProps } from "../../../jacdac/Context"
import { toMap } from "../../../../jacdac-ts/src/jdom/utils"
import JDService from "../../../../jacdac-ts/src/jdom/service"

const DEFAULT_HORIZON = 25
export default function TwinWidget(props: {
    service?: JDService
    horizon?: number
}) {
    const { service, horizon = DEFAULT_HORIZON } = props
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const { roleService, flyout, sourceId, sourceBlock } =
        useContext(WorkspaceContext)
    const twinService = service || roleService
    const { data, setData } = useBlockData(sourceBlock, [])

    // data collection
    const register = useBestRegister(twinService)
    const setRegisterData = () => {
        const newValue = register?.unpackedValue
        if (newValue !== undefined) {
            const newRow = toMap(
                register.fields,
                f => f.name,
                (f, i) => newValue[i]
            )
            const newData = [
                ...(data || []),
                {
                    ...{ time: bus.timestamp / 1000 },
                    ...newRow,
                },
            ].slice(-horizon)
            setData(newData)
        }
    }
    useEffect(() => {
        setRegisterData()
        return register?.subscribe(REPORT_UPDATE, setRegisterData)
    }, [register, sourceId, data])

    if (flyout) return null
    if (!twinService) return <NoServiceAlert />

    return (
        <Grid
            container
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            spacing={1}
        >
            <Grid item>
                <PointerBoundary>
                    <DashboardServiceWidget
                        service={twinService}
                        visible={true}
                        variant="icon"
                    />
                </PointerBoundary>
            </Grid>
        </Grid>
    )
}
