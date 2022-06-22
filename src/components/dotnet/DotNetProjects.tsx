import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import PageLinkList, { pageQueryToNodes } from "../ui/PageLinkList"

export default function DotNetProjects() {
    const query = useStaticQuery<{
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
                filter: {
                    fields: { slug: { glob: "/clients/dotnet/projects/*" } }
                }
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
    return <PageLinkList nodes={pageQueryToNodes(query)} />
}
