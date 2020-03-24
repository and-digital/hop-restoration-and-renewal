import React from 'react'
import {arrayOf, object, shape, string} from 'prop-types'
import {graphql, Link} from 'gatsby'
import Layout from '../../components/Layout'
import ArticleBanner from '../../components/ArticleBanner'
import Breadcrumbs from '../../components/Breadcrumbs/breadcrumbs'
import RichText from '../../components/RichText'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import {useTheme, makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  articlePaper: {
    padding: '30px 60px 30px 30px',
    '& p': {
      marginBottom: '50px',
      [theme.breakpoints.up('md')]: {
        marginRight: '200px',
      },
    },
  },
}))

const Article = ({
  pageContext: {articleList},
  data: {
    contentfulArticle: {
      title,
      section,
      template: {content},
    },
  },
}) => {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <Layout title={title}>
      <ArticleBanner {...section} />
      <Breadcrumbs breadcrumbs={[section]} />
      <Box maxWidth={1680} margin="auto">
        <Grid container spacing={8}>
          <Grid item xs={12} md={3}>
            <Box bgcolor={theme.palette.background.hero}>
              <ul>
                {articleList.map(({title, slug}) => (
                  <li key={slug}>
                    <Link to={`/${slug}`}>{title}</Link>
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Paper className={classes.articlePaper}>
              <article>
                <RichText text={content} />
              </article>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

Article.propTypes = {
  data: shape({
    contentfulArticle: shape({
      title: string.isRequired,
      section: shape({
        title: string.isRequired,
      }).isRequired,
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
      title
      section {
        title
        slug
      }
      template {
        content {
          json
        }
      }
    }
  }
`
