import React from 'react'
import {string, shape} from 'prop-types'
import {graphql} from 'gatsby'

import Layout from '../../components/Layout'

const Page = ({
  data: {
    contentfulPage: {title},
  },
}) => (
  <Layout title={title}>
    <p>{title}</p>
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
