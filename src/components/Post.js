import React from "react"
import { Link } from "gatsby"
import { Card, CardTitle, CardBody, CardText, Badge } from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"

const Post = ({ title, subtitle, slug, body, fluid, tags }) => {
  return (
    <Card>
      <Link to={`/${slug}`}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <Link to={`/${slug}`}>
            <b>{title},</b>
            <br />
            <small>{subtitle}</small>
            <br />
          </Link>
        </CardTitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tags/${slugify(tag)}`}>
                <Badge color="dark" className="text-uppercase">
                  {tag}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={`/${slug}`} className="btn btn-outline-dark float-right">
          Czytaj
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
