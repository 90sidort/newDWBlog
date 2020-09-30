import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import { CardBody, CardSubtitle } from "reactstrap"
import Img from "gatsby-image"
import authors from "../util/authors"

const SingePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  const author = authors.find(x => x.name === post.author)
  const sourceData = data.markdownRemark.frontmatter.sources
  const notesData = data.markdownRemark.frontmatter.notes
  const tagsList = data.markdownRemark.frontmatter.tags
  return (
    <Layout
      pageTitle={post.title}
      postAuthor={author}
      imageAuthorFluid={data.file.childImageSharp.fluid}
      sources={sourceData}
      notes={notesData}
      tags={tagsList}
    >
      <SEO>{post.title}</SEO>
      <Img
        className="card-image-top"
        fluid={post.image.childImageSharp.fluid}
      />
      <CardBody>
        <CardSubtitle>
          <span className="text-info">{post.date}</span> by{" "}
          <span className="text-info">{post.author}</span>
        </CardSubtitle>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </CardBody>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!, $imageUrl: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        sources
        notes
        date(formatString: "MMM Do YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SingePost
