const path = require('path')
const sectionTemplate = path.resolve('./src/templates/section/section.js')
const articleTemplate = path.resolve('./src/templates/article/article.js')

const extractNodes = key => response =>
  response.data[key].edges.map(({node}) => node)

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const allSections = () =>
    graphql(`
      query AllSections {
        allContentfulSection {
          edges {
            node {
              slug
              name
              articles {
                slug
                name
              }
            }
          }
        }
      }
    `).then(extractNodes('allContentfulSection'))

  const allArticles = () =>
    graphql(`
      query AllArticles {
        allContentfulArticle {
          edges {
            node {
              slug
              name
              section {
                slug
              }
            }
          }
        }
      }
    `).then(extractNodes('allContentfulArticle'))

  const [sections, articles] = await Promise.all([allSections(), allArticles()])

  sections.forEach(({slug}) => {
    createPage({
      path: `/${slug}/`,
      component: sectionTemplate,
      context: {
        slug: slug,
      },
    })
  })

  articles.forEach(({slug, section: [{slug: sectionSlug}]}) => {
    createPage({
      path: `/${sectionSlug}/${slug}/`,
      component: articleTemplate,
      context: {
        slug: slug,
      },
    })
  })
}
