import addToMailchimp from "gatsby-plugin-mailchimp"
import React from "react"
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from "reactstrap"
import isEmail from "validator/lib/isEmail"

class Subscribe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      placeholder: "Wpisz mejla",
    }
  }
  onEmailChange = e => {
    const email = e.target.value
    this.setState(() => ({ email }))
  }

  onSubmitForm = e => {
    e.preventDefault()
    const emailToCheck = this.state.email
    if (isEmail(emailToCheck)) {
      addToMailchimp(emailToCheck).then(data => {
        this.setState(() => ({ email: "" }))
        this.setState(() => ({ placeholder: "Email dodany!" }))
      })
    } else {
      this.setState(() => ({ email: "" }))
      this.setState(() => ({ placeholder: "Niepoprawny email!" }))
    }
  }
  render() {
    return (
      <Card>
        <CardBody className="text-center">
          <CardTitle className="text-uppercase mb-3">Subskrypcja</CardTitle>
          <Form>
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder={this.state.placeholder}
                value={this.state.email}
                onChange={this.onEmailChange}
              />
            </FormGroup>
            <button
              className="btn btn-outline-dark text-uppercase"
              onClick={this.onSubmitForm}
            >
              Subskrybuj
            </button>
          </Form>
        </CardBody>
      </Card>
    )
  }
}

export default Subscribe
