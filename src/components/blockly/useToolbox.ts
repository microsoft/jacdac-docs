import Blockly from "blockly"
import { useEffect, useMemo } from "react"
import { arrayConcatMany } from "../../../jacdac-ts/src/jdom/utils"
import useServices from "../hooks/useServices"
import { useTheme } from "@material-ui/core"
import {
    ButtonDefinition,
    CategoryDefinition,
    ToolboxConfiguration,
    visitToolbox,
} from "./toolbox"
import { WorkspaceJSON } from "./jsongenerator"
import BlockDomainSpecificLanguage from "./dsl/dsl"
import { loadBlocks, patchCategoryJSONtoXML } from "./usetoolboxutils"

// overrides blockly emboss filter for svg elements
Blockly.BlockSvg.prototype.setHighlighted = function (highlighted) {
    if (!this.rendered) {
        return
    }
    if (highlighted) {
        this.addSelect()
    } else {
        this.removeSelect()
    }
}

export default function useToolbox(
    dsls: BlockDomainSpecificLanguage[],
    source: WorkspaceJSON
): ToolboxConfiguration {
    const liveServices = useServices({ specification: true })
    const theme = useTheme()

    useMemo(() => loadBlocks(dsls, theme), [theme, dsls])
    const toolboxConfiguration = useMemo(() => {
        const dslsCategories = arrayConcatMany(
            dsls.map(dsl =>
                dsl?.createCategory?.({ theme, source, liveServices })
            )
        )
            .filter(cat => !!cat)
            .sort((l, r) => -(l.order - r.order))

        return <ToolboxConfiguration>{
            kind: "categoryToolbox",
            contents: dslsCategories
                .filter(cat => !!cat)
                .map(node =>
                    node.kind === "category"
                        ? patchCategoryJSONtoXML(node as CategoryDefinition)
                        : node
                ),
        }
    }, [theme, dsls, source, (liveServices || []).map(srv => srv.id).join(",")])
    return toolboxConfiguration
}

// do not use block context

export function useToolboxButtons(
    workspace: Blockly.WorkspaceSvg,
    toolboxConfiguration: ToolboxConfiguration
) {
    // track workspace changes and update callbacks
    useEffect(() => {
        if (!workspace) return

        // collect buttons
        const buttons: ButtonDefinition[] = []
        visitToolbox(toolboxConfiguration, {
            visitButton: btn => buttons.push(btn),
        })
        // register buttons
        buttons.forEach(button =>
            workspace.registerButtonCallback(button.callbackKey, () =>
                button.callback(workspace)
            )
        )
        // cleanup
        return () =>
            buttons.forEach(button =>
                workspace.removeButtonCallback(button.callbackKey)
            )
    }, [workspace, toolboxConfiguration])
}
