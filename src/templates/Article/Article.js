import React from 'react'
import {shape, string, arrayOf} from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'
import Typography from '@material-ui/core/Typography'

const Article = ({
  pageContext: {articleList},
  data: {
    contentfulArticle: {name},
  },
}) => (
  <Layout title={name}>
    <div className="wrapper">
      <SideBar articleList={articleList} />
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
    }
  }
`
