import { Link } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout pageTitle="404: brak strony">
    <SEO title="404: brak strony" />
    <p>Ta strona nie istnieje</p>
    <Link to="/" className="btn btn-dark text-uppercase">
      Powrót na bloga
    </Link>
  </Layout>
)

export default NotFoundPage
