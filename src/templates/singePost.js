import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import { Badge, CardBody, CardSubtitle } from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"
import authors from "../util/authors"

const SingePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  const author = authors.find(x => x.name === post.author)
  return (
    <Layout
      pageTitle={post.title}
      postAuthor={author}
      imageAuthorFluid={data.file.childImageSharp.fluid}
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
        <ul className="post-tags">
          {post.tags.map(tag => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="secondary">{tag}</Badge>
              </Link>
            </li>
          ))}
        </ul>
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
