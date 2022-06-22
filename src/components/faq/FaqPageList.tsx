import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PageLinkList from "../ui/PageLinkList"

export default function FaqPageList() {
    const data = useStaticQuery<{
        allMdx: {
            nodes: {
                fields: {
                    slug: string
                }
                frontmatter: {
                    title?: string
                    order?: number
                }
                headings: {
                    value: string
                }[]
            }[]
        }
    }>(graphql`
        {
            allMdx(
                filter: { slug: { glob: "faq/**" } }
                sort: { fields: slug }
            ) {
                nodes {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        order
                    }
                    headings {
                        value
                    }
                }
            }
        }
    `)

    const nodes = data?.allMdx?.nodes.map(node => ({
        slug: node.fields?.slug,
        title: node.frontmatter.title || node.headings?.[0].value,
        order: node.frontmatter.order,
    }))

    return <PageLinkList nodes={nodes} />
}
