const path = require('path')
const sectionTemplate = path.resolve('./src/templates/Section/Section.js')
const articleTemplate = path.resolve('./src/templates/Article/Article.js')
const pageTemplate = path.resolve('./src/templates/Page/Page.js')

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
              article {
                shortTitle
                slug
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
              section {
                slug
              }
            }
          }
        }
      }
    `).then(extractNodes('allContentfulArticle'))

  const allPages = () =>
    graphql(`
      query AllPages {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(extractNodes('allContentfulPage'))

  const [sections, articles, pages] = await Promise.all([
    allSections(),
    allArticles(),
    allPages(),
  ])

  sections.forEach(({slug}) => {
    createPage({
      path: `/${slug}/`,
      component: sectionTemplate,
      context: {
        slug,
      },
    })
  })

  articles.forEach(({slug, section: {slug: sectionSlug}}) => {
    const {article} = sections.find(({slug}) => slug === sectionSlug)
    const articleList = article.map(({slug, shortTitle: title}) => ({
      slug: `${sectionSlug}/${slug}`,
      title,
    }))

    createPage({
      path: `/${sectionSlug}/${slug}/`,
      component: articleTemplate,
      context: {
        sectionSlug,
        slug,
        articleList,
      },
    })
  })

  pages.forEach(({slug}) => {
    createPage({
      path: `/${slug}/`,
      component: pageTemplate,
      context: {
        slug,
      },
    })
  })
}
