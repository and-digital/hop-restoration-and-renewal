const path = require('path')
const sectionTemplate = path.resolve('./src/templates/Section/Section.js')
const articleTemplate = path.resolve('./src/templates/Article/Article.js')

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

  console.log(articles)

  articles.forEach(({slug, section: [{slug: sectionSlug}]}) => {
    createPage({
      path: `/${sectionSlug}/${slug}/`,
      component: articleTemplate,
      context: {
        slug,
      },
    })
  })
}
