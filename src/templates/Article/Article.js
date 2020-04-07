import React from 'react'
import {shape, string, arrayOf, object} from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../../components/Layout'
import SideBar from '../../components/SideBar'
import ArticleBanner from '../../components/ArticleBanner'
import BreadcrumbsComponent from '../../components/Breadcrumbs/Breadcrumbs'
import RichText from '../../components/RichText'
import RichTextProvider from '../../providers/RichTextProvider'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

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
  articleSidebar: {
    marginTop: '0',
    [theme.breakpoints.up('md')]: {
      marginTop: '-90px',
    },
  },
}))

const Article = ({
  pageContext: {articleSlug, sectionSlug, articleList},
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
    <Layout
      title={title}
      className={classes.root}
      section={sectionSlug}
      article={articleSlug}
    >
      <ArticleBanner {...section} />
      <Box
        maxWidth={1620}
        mx={{xs: '20px', lg: 'auto'}}
        my="45px"
        padding="20px"
      >
        <Grid container spacing={5} width="100%">
          <Grid item md={3} implementation="css" smDown component={Hidden} />
          <Grid item md={9}>
            <BreadcrumbsComponent
              breadcrumbs={[{...section, slug: sectionSlug}]}
            />
          </Grid>
          <Grid item xs={12} md={3} className={classes.articleSidebar}>
            <SideBar articleList={articleList} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Paper className={classes.articlePaper}>
              <article>
                <RichTextProvider>
                  <RichText text={content} />
                </RichTextProvider>
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
    sectionSlug: string.isRequired,
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
  query ArticleQuery($articleSlug: String!) {
    contentfulArticle(slug: {eq: $articleSlug}) {
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
