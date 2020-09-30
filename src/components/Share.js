import React from "react"
import { Card, CardBody, CardTitle } from "reactstrap"

const Share = ({ url, title }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Udostępnij:
        </CardTitle>
        <div className="text-center social-share-links">
          <ul>
            <li>
              <a
                href={"https://www.facebook.com/sharer/sharer.php?u=" + url}
                className="facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={`https://www.twitter.com/share?url=${url}&text=Dasz Wiarę? ${title}&viatwitterHandle`}
                className="twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </CardBody>
    </Card>
  )
}

export default Share
