import React from 'react'
import {shape, string} from 'prop-types'
import {graphql} from 'gatsby'

const Article = ({
  data: {
    contentfulArticle: {name},
  },
}) => (
  <div style={{background: '#fff'}}>
    <div className="wrapper">
      <h2 className="Article-headline">{name}</h2>
    </div>
  </div>
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
