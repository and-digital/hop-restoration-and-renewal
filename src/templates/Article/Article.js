import React from 'react'
import {arrayOf, object, shape, string} from 'prop-types'
import {graphql, Link} from 'gatsby'
import Layout from '../../components/Layout'
import Typography from '@material-ui/core/Typography'
import RichText from '../../components/RichText'

const Article = ({
  pageContext: {articleList},
  data: {
    contentfulArticle: {
      name,
      template: {content},
    },
  },
}) => (
  <Layout title={name}>
    <div className="wrapper">
      <Typography variant="h1" className="Article-headline">
        {name}
      </Typography>
      <ul>
        {articleList.map(({title, slug}) => (
          <li key={slug}>
            <Link to={`/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
    <article>
      <RichText text={content} />
    </article>
  </Layout>
)

Article.propTypes = {
  data: shape({
    contentfulArticle: shape({
      name: string.isRequired,
      template: shape({
        content: shape({
          json: object.isRequired,
        }).isRequired,
      }).isRequired,
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
      name
      template {
        content {
          json
        }
      }
    }
  }
`
