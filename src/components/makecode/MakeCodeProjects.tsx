import { graphql, useStaticQuery } from "gatsby"
import React, { useMemo } from "react"
import { ReactNode } from "react"
import { serviceSpecificationFromClassIdentifier } from "../../../jacdac-ts/src/jdom/spec"
import { arrayify, unique } from "../../../jacdac-ts/src/jdom/utils"
import PageLinkList from "../ui/PageLinkList"

export default function MakeCodeProjects(props: {
    header?: ReactNode
    serviceClass?: number | number[]
    serviceName?: string
}) {
    const { serviceName, serviceClass, header } = props
    const serviceNames = unique([
        ...(serviceName?.split(/\s*,\s*/gi).filter(s => !!s) || []),
        ...(arrayify(serviceClass)
            ?.map(sc => serviceSpecificationFromClassIdentifier(sc)?.shortId)
            .filter(s => !!s) || []),
    ])

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
                        services?: string
                        description?: string
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
                    fields: { slug: { glob: "/clients/makecode/projects/*" } }
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
                            services
                            description
                        }
                        headings {
                            value
                        }
                    }
                }
            }
        }
    `)

    const nodes = useMemo(() => {
        // grab the nodes
        let nodes = query.allMdx.edges.map(edge => edge.node)
        // filter out
        if (serviceNames?.length)
            nodes = nodes.filter(node =>
                serviceNames.some(
                    n => node.frontmatter.services?.indexOf(n) > -1
                )
            )
        // order nodes
        nodes = nodes.sort((l, r) => {
            const lo = Number(l.frontmatter?.order) || 50
            const ro = Number(r.frontmatter?.order) || 50
            const c = lo - ro
            if (c) return c
            return l.fields.slug.localeCompare(r.fields.slug)
        })
        return nodes
    }, [serviceNames.join(",")])

    return (
        <PageLinkList
            header={header}
            nodes={nodes.map(({ fields, frontmatter, headings }) => ({
                slug: fields.slug,
                title: frontmatter.title || headings?.[0]?.value,
                description: frontmatter.description,
                services: frontmatter.services,
            }))}
        />
    )
}
