import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Input,
  CardText,
} from "reactstrap"
import Img from "gatsby-image"
import Sources from "./Sources"
import Notes from "./Notes"

const Sidebar = ({ author, image, sources, notes }) => {
  console.log(notes)
  const data = useStaticQuery(sidebarQuery)
  const randomNum = Math.floor(
    Math.random() * (data.allMarkdownRemark.edges.length - 0) + 0
  )
  return (
    <div>
      {author && (
        <Card>
          <Img className="card-image-top" fluid={image} />
          <CardBody>
            <CardTitle className="text-center text-uppercase mb-3">
              {author.name}
            </CardTitle>
            <CardText>{author.bio}</CardText>
            <div className="author-social-links text-center">
              <ul>
                <li>
                  <a
                    href={author.wykop}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook"
                  >
                    Profil na wykopie
                  </a>
                </li>
              </ul>
            </div>
          </CardBody>
        </Card>
      )}
      {notes && <Notes notes={notes} />}
      {sources && <Sources sources={sources} />}
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
                <Link to={node.fields.slug}>
                  <Img
                    className="card-image-top"
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                  />
                </Link>
                <CardBody>
                  <CardTitle>
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
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
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar
