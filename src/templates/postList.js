import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Post from "../components/Post"
import PaginationLinks from "../components/PaginationLinks"

const postList = ({ data, pageContext: { currentPage, numberOfPages } }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout pageTitle="Dasz wiarę?" pageSubtitle={`Strona ${currentPage}`}>
      {posts.map(({ node }) => (
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
      <PaginationLinks
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    </Layout>
  )
}

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            date(formatString: "DD-MM-YYYY")
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

export default postList
