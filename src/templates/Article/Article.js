import React from 'react'
import {shape, string, arrayOf} from 'prop-types'
import {graphql, Link} from 'gatsby'
import Layout from '../../components/Layout'
import ArticleBanner from '../../components/ArticleBanner'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '../../components/Breadcrumbs/breadcrumbs'

const Article = ({
  pageContext: {articleList},
  data: {
    contentfulArticle: {title, section, slug},
  },
}) => (
  <Layout title={title}>
    <div className="wrapper">
      <ArticleBanner {...section} />
      <Typography variant="h2">{title}</Typography>
      <ul>
        {articleList.map(({title, slug}) => (
          <li key={slug}>
            <Link to={`/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Breadcrumbs pathname={slug} />
    </div>
  </Layout>
)

Article.propTypes = {
  data: shape({
    contentfulArticle: shape({
      title: string.isRequired,
      section: shape({
        title: string.isRequired,
      }).isRequired,
      slug: string.isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: shape({
    articleList: arrayOf(
      shape({
        title: string.isRequired,
        slug: string.isRequired,
      }),
    ).isRequired,
  }),
}

export default Article

export const query = graphql`
  query ArticleQuery($slug: String!) {
    contentfulArticle(slug: {eq: $slug}) {
      title
      section {
        title
      }
      slug
    }
  }
`
