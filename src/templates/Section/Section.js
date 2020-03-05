import React from 'react'
import {shape, string, arrayOf} from 'prop-types'
import {graphql, Link} from 'gatsby'
import Layout from '../../components/Layout'

const Section = ({
  data: {
    contentfulSection: {title, slug, articles},
  },
}) => (
  <Layout title={title}>
    <div className="wrapper">
      <h2 className="section-headline">{title}</h2>
    </div>
    <section>
      <ul>
        {articles.map(({name, slug: articleSlug}) => (
          <li key={name}>
            <Link to={`/${slug}/${articleSlug}/`}>{name}</Link>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

Section.propTypes = {
  data: shape({
    contentfulSection: shape({
      title: string.isRequired,
      slug: string.isRequired,
      articles: arrayOf(
        shape({
          name: string.isRequired,
          slug: string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Section

export const query = graphql`
  query SectionQuery($slug: String!) {
    contentfulSection(slug: {eq: $slug}) {
      title
      slug
      articles {
        name
        slug
      }
    }
  }
`
