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
                title
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
              shortTitle
              article {
                slug
                shortTitle
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

  const [sections, articles, subArticles, pages] = await Promise.all([
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

  const buildMenu = ({
    articleList,
    articleSlug: currentArticleSlug,
    sectionSlug: currentSectionSlug,
  }) => {
    const subArticleList = subArticles.filter(
      ({article: {slug}}) => currentArticleSlug === slug,
    )
    return articleList.map(({slug, shortTitle: title}) => ({
      sectionSlug: currentSectionSlug,
      slug,
      title,
      subArticleList: slug === currentArticleSlug ? subArticleList : [],
    }))
  }

  articles.forEach(({slug: articleSlug, section: {slug: sectionSlug}}) => {
    const {article: articleList} = sections.find(
      ({slug}) => slug === sectionSlug,
    )

    createPage({
      path: `/${sectionSlug}/${articleSlug}/`,
      component: articleTemplate,
      context: {
        sectionSlug,
        articleSlug,
        articleList: buildMenu({articleList, articleSlug, sectionSlug}),
      },
    })
  })

  subArticles.forEach(
    ({
      slug: subArticleSlug,
      article: {
        slug: articleSlug,
        section: {slug: sectionSlug},
      },
    }) => {
      const {article: articleList} = sections.find(
        ({slug}) => slug === sectionSlug,
      )

      createPage({
        path: `/${sectionSlug}/${articleSlug}/${subArticleSlug}/`,
        component: subarticleTemplate,
        context: {
          sectionSlug,
          articleSlug,
          subArticleSlug,
          articleList: buildMenu({articleList, articleSlug, sectionSlug}),
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
