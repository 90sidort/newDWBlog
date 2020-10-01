import React from "react"
import { graphql } from "gatsby"
import { CardBody, CardSubtitle } from "reactstrap"
import Img from "gatsby-image"

import authors from "../util/authors"
import SEO from "../components/SEO"
import Layout from "../components/Layout"

const SingePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  const author = authors.find(x => x.name === post.author)
  const sourceData = data.markdownRemark.frontmatter.sources
  const notesData = data.markdownRemark.frontmatter.notes
  const tagsList = data.markdownRemark.frontmatter.tags
  const postUrl = `http://daszwiare.neuropa.pl/${pageContext.slug}`
  const postTitle = post.title
  const postSubTitle = post.subtitle
  return (
    <Layout
      pageTitle={postTitle}
      pageSubtitle={postSubTitle}
      postAuthor={author}
      imageAuthorFluid={data.file.childImageSharp.fluid}
      sources={sourceData}
      notes={notesData}
      tags={tagsList}
      url={postUrl}
    >
      <SEO title={postTitle} />
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
        subtitle
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
