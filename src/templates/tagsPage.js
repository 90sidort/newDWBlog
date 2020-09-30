import React from "react"
import { Button } from "reactstrap"

import { slugify } from "../util/utilityFunctions"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const tagsPage = ({ pageContext: { tags, tagPostCounts } }) => {
  return (
    <Layout pageTitle="Tagi">
      <SEO title="Tagi" />
      {tags.map(tag => (
        <Button
          color="dark"
          href={`/tags/${slugify(tag)}`}
          style={{ margin: "10px 10px 0px 10px" }}
        >
          #{tag}
        </Button>
      ))}
    </Layout>
  )
}

export default tagsPage
