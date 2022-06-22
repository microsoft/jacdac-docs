import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PageLinkList, { pageQueryToNodes } from "../ui/PageLinkList"

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

    return <PageLinkList nodes={pageQueryToNodes(data)} />
}
