import React from "react"
import { Card, CardBody, CardTitle } from "reactstrap"

const Sources = ({ sources }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Źródła
        </CardTitle>
        {sources.map(source => {
          if (source.includes("http")) {
            const sourceArray = source.split("|")
            return (
              <a
                key={sourceArray[0].trim()}
                href={sourceArray[1].trim()}
                target="_blank"
                rel="noopener noreferrer"
              >
                &#9658;&nbsp;{sourceArray[0].trim()}
              </a>
            )
          } else {
            return <p key={source.trim()}>&#9658;&nbsp;{source.trim()}</p>
          }
        })}
      </CardBody>
    </Card>
  )
}

export default Sources
