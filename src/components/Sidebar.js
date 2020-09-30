import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Sources from "./Sources"
import Notes from "./Notes"
import AuthorBio from "./AuthorBio"
import Subscribe from "./Subscribe"
import TagsCard from "./TagsCard"
import PostCard from "./PostCard"

const Sidebar = ({ author, image, sources, notes, tags }) => {
  const data = useStaticQuery(sidebarQuery)
  const randomNum = Math.floor(
    Math.random() * (data.allMarkdownRemark.edges.length - 0) + 0
  )
  const postsData = data.allMarkdownRemark.edges
  return (
    <div>
      {author && <AuthorBio image={image} author={author} />}
      {tags && <TagsCard tags={tags} />}
      {notes && <Notes notes={notes} />}
      {sources && <Sources sources={sources} />}
      {!tags && (
        <div>
          <Subscribe />
          <PostCard postsData={postsData} randomNum={randomNum} />
          <PostCard postsData={postsData} randomNum={undefined} />
        </div>
      )}
    </div>
  )
}

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar
