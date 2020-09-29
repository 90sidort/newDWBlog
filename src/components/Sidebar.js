import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from "reactstrap"
import Img from "gatsby-image"

const Sidebar = () => {
  const data = useStaticQuery(sidebarQuery)
  const randomNum = Math.floor(
    Math.random() * (data.allMarkdownRemark.edges.length - 0) + 0
  )
  return (
    <div>
      <Card>
        <CardBody className="text-center">
          <CardTitle className="text-uppercase mb-3">Subskrypcja</CardTitle>
          <Form>
            <FormGroup>
              <Input type="email" name="email" placeholder="Wpisz mejla" />
            </FormGroup>
            <button className="btn btn-outline-dark text-uppercase">
              Subskrybuj
            </button>
          </Form>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Losowy wpis</CardTitle>
          {data.allMarkdownRemark.edges
            .slice(randomNum, randomNum + 1)
            .map(({ node }) => (
              <Card key={node.id}>
                <Link to={node.frontmatter.path}>
                  <Img
                    className="card-image-top"
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                  />
                </Link>
                <CardBody>
                  <CardTitle>
                    <Link to={node.frontmatter.path}>
                      {node.frontmatter.title}
                    </Link>
                  </CardTitle>
                </CardBody>
              </Card>
            ))}
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            Ostatnie wpisy
          </CardTitle>
          {data.allMarkdownRemark.edges.slice(0, 3).map(({ node }) => (
            <Card key={node.id}>
              <Link to={node.frontmatter.path}>
                <Img
                  className="card-image-top"
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
              </Link>
              <CardBody>
                <CardTitle>
                  <Link to={node.frontmatter.path}>
                    {node.frontmatter.title}
                  </Link>
                </CardTitle>
              </CardBody>
            </Card>
          ))}
        </CardBody>
      </Card>
    </div>
  )
}

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Sidebar
