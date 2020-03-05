import React from 'react'
import {useStaticQuery, Link, graphql} from 'gatsby'
import Image from 'gatsby-image'
import {shape, string, object, arrayOf} from 'prop-types'

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulHeader(name: {eq: "main"}) {
        sections {
          name
          slug
        }
        logo {
          fixed {
            ...GatsbyContentfulFixed_withWebp
          }
          title
        }
      }
    }
  `)
  return <HeaderComponent {...data} />
}

const HeaderComponent = ({
  contentfulHeader: {
    sections,
    logo: {fixed, title},
  },
}) => (
  <>
    <Image fixed={fixed} alt={title} />
    <ul>
      {sections.map(({name, slug}) => (
        <li key={name}>
          <Link to={`/${slug}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </>
)

HeaderComponent.propTypes = {
  contentfulHeader: shape({
    sections: arrayOf(shape({name: string.isRequired, slug: string.isRequired}))
      .isRequired,
    logo: shape({fixed: object.isRequired, title: string.isRequired})
      .isRequired,
  }).isRequired,
}

export default Header
