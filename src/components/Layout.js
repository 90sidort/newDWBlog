import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/index.scss"
import Header from "./Header"
import Footer from "./Footer"
import { Row, Col } from "reactstrap"
import Sidebar from "./Sidebar"

const Layout = ({
  children,
  pageTitle,
  pageSubtitle,
  imageAuthorFluid,
  postAuthor,
  sources,
  notes,
  tags,
  url,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" id="content">
        <h1 style={{ fontWeight: "bold" }}>
          {pageTitle}
          {pageTitle.includes("Odcinek") ? "," : ""}
        </h1>
        <h5>{pageSubtitle}</h5>
        <Row>
          <Col md="8">{children}</Col>
          <Col md="4">
            <Sidebar
              author={postAuthor}
              image={imageAuthorFluid}
              sources={sources}
              notes={notes}
              tags={tags}
              url={url}
              title={pageTitle}
            />
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
