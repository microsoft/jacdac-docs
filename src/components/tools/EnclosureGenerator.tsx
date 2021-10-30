import React, { lazy, useEffect, useState } from "react"

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
} from "@material-ui/core"
import Suspense from "../ui/Suspense"
import { convertToSTL } from "../blockly/dsl/workers/cad.proxy"
import type {
    EnclosureModel,
    EnclosureOptions,
    EnclosureFile,
} from "../../workers/cad/dist/node_modules/enclosurecad"
import useGridBreakpoints from "../useGridBreakpoints"

const ModelViewer = lazy(() => import("../home/models/ModelViewer"))
const STLModel = lazy(() => import("../home/models/STLModel"))

function STLModelCard(props: { name: string; url: string; color: string }) {
    const { name, url, color } = props
    return (
        <Card>
            <CardHeader title={name} />
            <CardMedia>
                <Suspense>
                    <ModelViewer responsive={true}>
                        <STLModel url={url} color={color} />
                    </ModelViewer>
                </Suspense>
            </CardMedia>
            <CardActions>
                <Button href={url} variant="outlined" download={`${name}.stl`}>
                    Download STL
                </Button>
            </CardActions>
        </Card>
    )
}

export default function EnclosureGenerator(props: {
    module: EnclosureModel
    options?: EnclosureOptions
    color?: string
}) {
    const { color, module, options } = props
    const [working, setWorking] = useState(false)
    const [files, setFiles] = useState<{ name: string; url: string }[]>()
    const gridBreakpoints = useGridBreakpoints(files?.length)

    const updateUrl = async () => {
        try {
            setWorking(true)
            const files = await convertToSTL(module, options)
            const newFiles = files?.map(({ name, blob }) => ({
                name,
                url: URL.createObjectURL(blob),
            }))
            setFiles(newFiles)
        } finally {
            setWorking(false)
        }
    }
    useEffect(
        () => () => files?.forEach(({ url }) => URL.revokeObjectURL(url)),
        [files]
    )
    const handleClick = () => updateUrl()

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Button
                    onClick={handleClick}
                    variant="contained"
                    color="primary"
                    disabled={working}
                >
                    Refresh STL
                </Button>
            </Grid>
            {files?.map(file => (
                <Grid item key={file.name} {...gridBreakpoints}>
                    <STLModelCard {...file} color={color} />
                </Grid>
            ))}
        </Grid>
    )
}
