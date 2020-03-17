import React from 'react'
import {string, shape} from 'prop-types'
import {graphql} from 'gatsby'

import Layout from '../../components/Layout'
import Typography from '@material-ui/core/Typography'

const Page = ({
  data: {
    contentfulPage: {title},
  },
}) => (
  <Layout title={title}>
    <Typography variant="h1" className="page-headline">
      {title}
    </Typography>
  </Layout>
)

Page.propTypes = {
  data: shape({
    contentfulPage: shape({
      title: string.isRequired,
    }).isRequired,
  }),
}

export default Page

export const query = graphql`
  query PageQuery($slug: String!) {
    contentfulPage(slug: {eq: $slug}) {
      title
    }
  }
`
