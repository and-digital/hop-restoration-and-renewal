const path = require('path')
const sectionTemplate = path.resolve('./src/templates/Section/Section.js')
const articleTemplate = path.resolve('./src/templates/Article/Article.js')
const subarticleTemplate = path.resolve(
  './src/templates/SubArticle/SubArticle.js',
)
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
              sub_article {
                slug
                shortTitle
              }
            }
          }
        }
      }
    `).then(extractNodes('allContentfulArticle'))

  const allSubArticles = () =>
    graphql(`
      query AllSubArticles {
        allContentfulSubArticle {
          edges {
            node {
              slug
              article {
                slug
                section {
                  slug
                }
              }
            }
          }
        }
      }
    `).then(extractNodes('allContentfulSubArticle'))

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

  const [sections, articles, subarticles, pages] = await Promise.all([
    allSections(),
    allArticles(),
    allSubArticles(),
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

  articles.forEach(
    ({
      slug: articleSlug,
      section: {slug: sectionSlug},
      sub_article: subArticles,
    }) => {
      const {article} = sections.find(({slug}) => slug === sectionSlug)

      const articleList = article.map(({slug, shortTitle: title}) => ({
        slug: `${sectionSlug}/${slug}`,
        title,
      }))

      const subarticleList =
        subArticles &&
        subArticles.map(({slug, shortTitle: title}) => ({
          slug: `${sectionSlug}/${articleSlug}/${slug}`,
          title,
        }))

      createPage({
        path: `/${sectionSlug}/${articleSlug}/`,
        component: articleTemplate,
        context: {
          sectionSlug,
          articleSlug,
          articleList,
          subarticleList,
        },
      })
    },
  )

  subarticles.forEach(
    ({
      slug,
      article: {
        slug: articleSlug,
        section: {slug: sectionSlug},
      },
    }) => {
      const {sub_article} = articles.find(({slug}) => slug === articleSlug)

      const subarticleList = sub_article.map(({slug, shortTitle: title}) => ({
        slug: `/${sectionSlug}/${articleSlug}/${slug}`,
        title,
      }))
      // console.log(subarticleList)

      createPage({
        path: `/${sectionSlug}/${articleSlug}/${slug}/`,
        component: subarticleTemplate,
        context: {
          articleSlug,
          slug,
          subarticleList,
        },
      })
    },
  )

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
