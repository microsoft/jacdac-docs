import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Mdx(props: { mdx: any }) {
    const { mdx } = props
    return (
        <MDXRenderer>{mdx}</MDXRenderer>
    )
}