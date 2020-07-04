import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"
import Post from '../components/post'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from 'reactstrap'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Blog</h1>
    <Row>
      <Col md="8">
        <StaticQuery query={indexQuery} render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                body={node.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags}
              />
            ))}
          </div>
        )
      }}/>
      </Col>
      <Col md="4">
        <div style={{width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)"}}>
        </div>
      </Col>
    </Row>
  </Layout>
)

const indexQuery = graphql`
query{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}){
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "DD-MM-YY ")
          author
          path
          tags
          image{
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
