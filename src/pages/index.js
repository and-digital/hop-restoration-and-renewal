import React from 'react'
import {graphql, Link} from 'gatsby'
import {shape, string, arrayOf} from 'prop-types'
import Layout from '../components/Layout'

const title = 'Restoration and Renewal'

const Index = ({
  data: {
    contentfulHeader: {sections},
  },
}) => (
  <Layout title={title}>
    <div className="wrapper">
      <h1 className="section-headline">{title}</h1>
    </div>
    <ul>
      {sections.map(({name, slug}) => (
        <li key={name}>
          <Link to={`/${slug}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default Index

Index.propTypes = {
  data: shape({
    contentfulHeader: shape({
      sections: arrayOf(
        shape({
          name: string,
          slug: string,
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export const query = graphql`
  query HeaderQuery {
    contentfulHeader(name: {eq: "main"}) {
      sections {
        name
        slug
      }
    }
  }
`
