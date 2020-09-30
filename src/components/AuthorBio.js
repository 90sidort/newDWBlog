import React from "react"
import { Card, CardTitle, CardText, CardBody } from "reactstrap"
import Img from "gatsby-image"

const AuthorBio = ({ author, image }) => {
  return (
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
  )
}

export default AuthorBio
