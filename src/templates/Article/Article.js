import React from 'react'
import {shape, string, arrayOf, object} from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'
import ArticleBanner from '../../components/ArticleBanner'
import RichText from '../../components/RichText'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  articlePaper: {
    padding: '30px 60px 30px 30px',
    boxShadow: 'none',
    [theme.breakpoints.up('md')]: {
      boxShadow: `0px -4px 4px ${theme.palette.background.boxShadow}`,
    },
    '& p': {
      marginBottom: '24px',
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
  const classes = useStyles()
  return (
    <Layout title={title} className={classes.root}>
      <ArticleBanner {...section} />
      <Box maxWidth={1620} mx={{xs: '20px', lg: 'auto'}} my="45px">
        <Grid container spacing={5} className={classes.articlePadding}>
          <Hidden mdUp>
            <Grid item xs={12}>
              <Box height="40px" bgcolor="yellow">
                Breadcrumbs
              </Box>
            </Grid>
          </Hidden>
          <Grid item xs={12} md={3}>
            <SideBar articleList={articleList} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Hidden smDown>
              <Box height="40px" bgcolor="yellow">
                Breadcrumbs
              </Box>
            </Hidden>
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
      }
      template {
        content {
          json
        }
      }
    }
  }
`
