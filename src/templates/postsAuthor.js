import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Post from "../components/Post"

const postsAuthor = ({ data, pageContext }) => {
  return (
    <Layout pageTitle={`Wpisy ${pageContext.authorName}a`}>
      <SEO title={`Autor ${pageContext.authorName}`} />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          subtitle={node.frontmatter.subtitle}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          body={node.excerpt}
          tags={node.frontmatter.tags}
          fluid={node.frontmatter.image.childImageSharp.fluid}
        />
      ))}
    </Layout>
  )
}

export const authorQuery = graphql`
  query($authorName: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: $authorName } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            date(formatString: "MM-DD-YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 371) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default postsAuthor
