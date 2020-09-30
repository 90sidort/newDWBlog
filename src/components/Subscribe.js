import React from "react"
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from "reactstrap"

const Subscribe = () => {
  return (
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
  )
}

export default Subscribe
