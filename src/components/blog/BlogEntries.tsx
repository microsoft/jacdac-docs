import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { ReactNode } from "react"
import PageLinkList from "../ui/PageLinkList"

export default function BlogEntries(props: { header?: ReactNode }) {
    const { header } = props
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
                        description?: string
                        data?: string
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
                filter: { fields: { slug: { glob: "/blog/*" } } }
                sort: { fields: [frontmatter___date], order: DESC }
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
                            description
                            date
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
            header={header}
            nodes={nodes.map(({ fields, frontmatter, headings }) => ({
                slug: fields.slug,
                title: frontmatter.title || headings?.[0]?.value,
                description: frontmatter.description,
                order: frontmatter.order,
                date: frontmatter.date
            }))}
        />
    )
}
