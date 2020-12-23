const { slugify } = require("./src/util/utilityFunctions")
const path = require("path")
const authors = require("./src/util/authors")
const _ = require("lodash")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const singlePostTemplate = path.resolve("./src/templates/singePost.js")
  const tagsPageTemplate = path.resolve("./src/templates/tagsPage.js")
  const tagPostsTemplate = path.resolve("./src/templates/tagPosts.js")
  const postListTemplate = path.resolve("./src/templates/postList.js")
  const postAuthorTemplate = path.resolve("./src/templates/postsAuthor.js")

  return graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                author
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(res => {
    if (res.errors) return Promise.reject(res.errors)

    const posts = res.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: singlePostTemplate,
        context: {
          slug: node.fields.slug,
          imageUrl: authors.find(x => x.name === node.frontmatter.author)
            .imageUrl,
        },
      })
    })
    let tags = []

    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    let tagPostCounts = {}
    tags.forEach(tag => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })
    tags = _.uniq(tags)

    createPage({
      path: `/tags`,
      component: tagsPageTemplate,
      context: {
        tags,
        tagPostCounts,
      },
    })

    tags.forEach(tag => {
      createPage({
        path: `tags/${slugify(tag)}`,
        component: tagPostsTemplate,
        context: {
          tag,
        },
      })
    })

    const postsPerPage = 10
    const numberOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numberOfPages }).forEach((_, index) => {
      const isFirstPage = index === 0
      const currentPage = index + 1

      if (isFirstPage) return

      createPage({
        path: `/page/${currentPage}`,
        component: postListTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          currentPage,
          numberOfPages,
        },
      })
    })

    authors.forEach(author => {
      createPage({
        path: `/author/${slugify(author.name)}`,
        component: postAuthorTemplate,
        context: {
          authorName: author.name,
        },
      })
    })
  })
}
