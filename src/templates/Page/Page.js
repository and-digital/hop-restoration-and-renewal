import React from 'react'
import {string, shape, object} from 'prop-types'
import {graphql} from 'gatsby'
import RichText from '../../components/RichText'
import Layout from '../../components/Layout'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  noPageWrapper: {
    padding: '30px',
    maxWidth: '1620px',
    boxShadow: 'none',
    [theme.breakpoints.up('md')]: {
      margin: '40px auto 65px',
      boxShadow: `0px -4px 4px ${theme.palette.background.boxShadow}`,
    },
  },
}))

const Page = ({
  data: {
    contentfulPage: {
      title,
      template: {content},
    },
  },
}) => {
  const classes = useStyles()
  return (
    <Layout title={title}>
      <Paper className={classes.noPageWrapper}>
        <RichText text={content} aria-label="page not found description" />
      </Paper>
    </Layout>
  )
}

Page.propTypes = {
  data: shape({
    contentfulPage: shape({
      title: string.isRequired,
      template: shape({
        content: shape({
          json: object.isRequired,
        }).isRequired,
      }).isRequired,
    }),
  }),
}

export default Page

export const query = graphql`
  query PageQuery($slug: String!) {
    contentfulPage(slug: {eq: $slug}) {
      title
      template {
        content {
          json
        }
      }
    }
  }
`
