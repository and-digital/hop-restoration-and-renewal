import React from 'react'
import {shape, string} from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../../components/Layout'

const Article = ({
  data: {
    contentfulArticle: {name},
  },
}) => (
  <Layout title={name}>
    <div className="wrapper">
      <h2 className="Article-headline">{name}</h2>
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
