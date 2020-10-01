import React from "react"
import { Card, CardTitle, CardBody } from "reactstrap"
import Img from "gatsby-image"
import { Link } from "gatsby"

const PostCard = ({ postsData, randomNum }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-uppercase text-center">
          {randomNum !== undefined ? "Losowy wpis" : "Ostatnie wpisy"}
        </CardTitle>
        {randomNum !== undefined
          ? postsData.slice(randomNum, randomNum + 1).map(({ node }) => (
              <Card key={node.id}>
                <Link to={node.fields.slug}>
                  <Img
                    className="card-image-top"
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                  />
                </Link>
                <CardBody>
                  <CardTitle>
                    <Link to={node.fields.slug}>
                      <b>{node.frontmatter.title}</b>
                      <br />
                      <small>{node.frontmatter.subtitle}</small>
                      <br />
                    </Link>
                  </CardTitle>
                </CardBody>
              </Card>
            ))
          : postsData.slice(0, 3).map(({ node }) => (
              <Card key={node.id}>
                <Link to={node.fields.slug}>
                  <Img
                    className="card-image-top"
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                  />
                </Link>
                <CardBody>
                  <CardTitle>
                    <Link to={node.fields.slug}>
                      <b>{node.frontmatter.title}</b>
                      <br />
                      <small>{node.frontmatter.subtitle}</small>
                      <br />
                    </Link>
                  </CardTitle>
                </CardBody>
              </Card>
            ))}
      </CardBody>
    </Card>
  )
}

export default PostCard
