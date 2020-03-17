import React from 'react'
import {shape, string} from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../../components/Layout'
import Typography from '@material-ui/core/Typography'

const Article = ({
  data: {
    contentfulArticle: {name},
  },
}) => (
  <Layout title={name}>
    <div className="wrapper">
      <Typography variant="h1" className="Article-headline">
        {name}
      </Typography>
    </div>
  </Layout>
)

Article.propTypes = {
  data: shape({
    contentfulArticle: shape({
      name: string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Article

export const query = graphql`
  query ArticleQuery($slug: String!) {
    contentfulArticle(slug: {eq: $slug}) {
      name
    }
  }
`
