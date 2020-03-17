import React from 'react'
import {shape, string, arrayOf, object} from 'prop-types'
import {graphql} from 'gatsby'

import Box from '@material-ui/core/Box'

import Layout from '../../components/Layout'
import ArticleCard from '../../components/ArticleCard'
import Hero from '../../components/Hero'

const Section = ({
  data: {
    contentfulSection: {title, slug, hero, articles},
  },
}) => (
  <Layout title={title}>
    <Hero {...hero} />
    <div className="wrapper">
      <h2 className="section-headline">{title}</h2>
    </div>
    <Box
      component="section"
      my={5}
      data-testid="sections"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
    >
      {articles.map(({previewLinkText, slug: articleSlug}) => (
        <Box
          key={`${title}-${slug}`}
          position="relative"
          width={{
            xs: '100%',
          }}
        >
          <ArticleCard
            sectionSlug={slug}
            slug={articleSlug}
            linkText={previewLinkText}
          />
        </Box>
      ))}
    </Box>
  </Layout>
)

Section.propTypes = {
  data: shape({
    contentfulSection: shape({
      title: string.isRequired,
      slug: string.isRequired,
      hero: shape({
        image: shape({
          title: string.isRequired,
          fixed: object.isRequired,
        }).isRequired,
      }).isRequired,
      articles: arrayOf(
        shape({
          previewLinkText: string.isRequired,
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
      hero {
        title
        text {
          json
        }
        image {
          title
          fixed(height: 605) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
      articles {
        slug
        previewLinkText
      }
    }
  }
`
