import React from 'react'
import {useStaticQuery, Link} from 'gatsby'

const Header = () => {
  const data = useStaticQuery(`
  query HeaderQuery {
    contentfulHeader(name: {eq: "main"}) {
      sections {
        name
        slug
      }
    }
  }
`)
  const {
    contentfulHeader: {sections},
  } = data
  return (
    <ul>
      {sections.map(({name, slug}) => (
        <li key={name}>
          <Link to={`/${slug}`}>{name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Header
