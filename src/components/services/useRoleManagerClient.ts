import { useContext, useEffect, useState } from "react"
import { ROLE_MANAGER_CHANGE } from "../../../jacdac-ts/src/jdom/constants"
import RoleManagerClient from "../../../jacdac-ts/src/jdom/clients/rolemanagerclient"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"

export default function useRoleManagerClient(): RoleManagerClient {
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const [mgr, setMgr] = useState<RoleManagerClient>(bus.roleManager)
    useEffect(() =>
        bus.subscribe(ROLE_MANAGER_CHANGE, () => setMgr(bus.roleManager))
    )
    return mgr
}
