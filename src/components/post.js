import React from 'react'
import { Link } from 'gatsby'
import {
    Card,
    CardTitle,
    CardBody,
    CardSubtitle,
    CardText
} from 'reactstrap'

const Post = ({ title, author, path, date, body }) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>
                    <Link to={path}>
                        {title}
                    </Link>
                </CardTitle>
                <CardSubtitle>
                    <span className="text-info">{date}</span>
                    <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <Link to={path} className="btn btn-outline-primary float-right">Czytaj</Link>
            </CardBody>
        </Card>
    )
}

export default Post