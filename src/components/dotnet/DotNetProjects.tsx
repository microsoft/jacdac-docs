import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import PageLinkList from "../ui/PageLinkList"

export default function DotNetProjects() {
    const query = useStaticQuery<{
        allMdx: {
            edges: {
                node: {
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
                }
            }[]
        }
    }>(graphql`
        {
            allMdx(
                filter: {
                    fields: { slug: { glob: "/clients/dotnet/projects/*" } }
                }
            ) {
                edges {
                    node {
                        id
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
        }
    `)
    const nodes = query.allMdx.edges.map(edge => edge.node)
    return (
        <PageLinkList
            nodes={nodes.map(({ fields, frontmatter, headings }) => ({
                slug: fields.slug,
                title: frontmatter.title || headings?.[0]?.value,
                order: frontmatter.order,
            }))}
        />
    )
}
