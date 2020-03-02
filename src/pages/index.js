import React from 'react'
import {graphql, Link} from 'gatsby'
import {shape, string, arrayOf} from 'prop-types'

const Index = ({
  data: {
    contentfulHeader: {sections},
  },
}) => (
  <div style={{background: '#fff'}}>
    <div className="wrapper">
      <h2 className="section-headline">Restoration and Renewal</h2>
    </div>
    <ul>
      {sections.map(({name, slug}) => (
        <li key={name}>
          <Link to={`/${slug}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
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
