import React from "react"
import { Card, CardBody, CardTitle } from "reactstrap"

const Notes = ({ notes }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Przypisy
        </CardTitle>
        {notes.map((note, i) => {
          return (
            <p key={i}>
              {"*".repeat(i + 1)}. {note}
            </p>
          )
        })}
      </CardBody>
    </Card>
  )
}

export default Notes
