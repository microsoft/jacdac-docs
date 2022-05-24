import React from "react"
import { withPrefix } from "gatsby"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import Suspense from "../ui/Suspense"

export default function GLBModel(props: { name: string }) {
    const { name } = props
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const obj = useLoader<any, string>(
        GLTFLoader,
        withPrefix(`/models/${name}.glb`)
    )
    return (
        <Suspense>
            <primitive object={obj.scene} />
        </Suspense>
    )
}
