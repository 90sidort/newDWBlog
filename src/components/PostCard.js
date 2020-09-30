import React from "react"
import { Card, CardTitle, CardBody } from "reactstrap"
import Img from "gatsby-image"
import { Link } from "gatsby"

const PostCard = ({ postsData, randomNum }) => {
  console.log(randomNum, postsData)

  return (
    <Card>
      <CardBody>
        <CardTitle>
          {randomNum !== undefined ? "Losowy wpis" : "Ostatnie wpisy"}
        </CardTitle>
        {randomNum !== undefined ? (
          postsData.slice(randomNum, randomNum + 1).map(({ node }) => (
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
          ))
        ) : (
          <Card>
            <CardBody>
              <CardTitle className="text-center text-uppercase mb-3">
                Ostatnie wpisy
              </CardTitle>
              {postsData.slice(0, 3).map(({ node }) => (
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
        )}
      </CardBody>
    </Card>
  )
}

export default PostCard
