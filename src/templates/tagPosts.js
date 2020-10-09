import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Post from "../components/Post"

const tagPosts = ({ data, pageContext: { tag } }) => {
  const { totalCount } = data.allMarkdownRemark
  const pageHeader = tag
  return (
    <Layout
      pageTitle={`#${pageHeader}`}
      pageSubtitle={`${totalCount} z tym tagiem.`}
    >
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

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD-MM-YYYY")
            author
            subtitle
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

export default tagPosts
