import React from "react"
import { Button, Card, CardBody, CardText, CardTitle, Row } from "reactstrap"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import authors from "../util/authors"

import andrzejImage from "../images/andrew.jpg"
import luvencedusImage from "../images/luvencedus.jpg"

import { slugify } from "../util/utilityFunctions"

const AuthorPage = () => {
  return (
    <Layout pageTitle="O autorach">
      <SEO title="O autorach" />
      {authors.map(author => {
        return (
          <Row className="mb-4" key={author.name}>
            <div className="col-md-3">
              <img
                src={author.name === "andrzej" ? andrzejImage : luvencedusImage}
                style={{
                  maxWidth: "100%",
                  marginTop: "30%",
                  border: "2px solid",
                  borderRadius: "50%",
                  height: "130px",
                  width: "130px",
                }}
                alt="andrzej"
              />
            </div>
            <div className="col-md-8">
              <Card style={{ minHeight: "100%" }}>
                <CardBody>
                  <CardTitle>{author.name}</CardTitle>
                  <CardText>{author.bio}</CardText>
                  <Button
                    className="text-uppercase"
                    color="dark"
                    href={`/author/${slugify(author.name)}`}
                  >
                    Zobacz wpisy
                  </Button>
                </CardBody>
              </Card>
            </div>
          </Row>
        )
      })}
    </Layout>
  )
}
export default AuthorPage
