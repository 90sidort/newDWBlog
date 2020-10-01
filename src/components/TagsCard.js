import React from "react"
import { Card, CardBody, CardTitle, Badge } from "reactstrap"
import { slugify } from "../util/utilityFunctions"
import { Link } from "gatsby"

const TagsCard = ({ tags }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <CardTitle className="text-uppercase mb-3">Tagi</CardTitle>
        <ul className="post-tags">
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tags/${slugify(tag)}`}>
                <Badge color="dark">{tag}</Badge>
              </Link>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  )
}

export default TagsCard
